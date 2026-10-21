import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read .env if exists with quote stripping
const envPath = path.join(rootDir, '.env');
const envVars = {};
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const match = trimmed.match(/^([\w.-]+)\s*=\s*(.*)$/);
    if (match) {
      let val = match[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      envVars[match[1]] = val;
    }
  });
}

const REGION = process.env.AWS_REGION || envVars.AWS_REGION || 'ap-south-1';
const BUCKET = process.env.AWS_S3_BUCKET || envVars.AWS_S3_BUCKET || 'edurain-notification';
const ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || envVars.AWS_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || envVars.AWS_SECRET_ACCESS_KEY;

if (!ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
  console.error('Error: AWS credentials missing in .env');
  process.exit(1);
}

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
  }
});

const blogsLocalDir = path.join(rootDir, 'public', 'images', 'blogs');
if (!fs.existsSync(blogsLocalDir)) {
  fs.mkdirSync(blogsLocalDir, { recursive: true });
}

const migrationMapPath = path.join(rootDir, 'src', 'data', 'blog_s3_migration_map.json');
const scriptsMigrationMapPath = path.join(rootDir, 'scripts', 'blog_s3_migration_map.json');

const CDN_URL = (process.env.VITE_CDN_URL || envVars.VITE_CDN_URL || `https://${BUCKET}.s3.${REGION}.amazonaws.com`).replace(/\/+$/, '');

async function uploadBufferToS3(buffer, key, contentType) {
  await s3.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    CacheControl: 'public, max-age=31536000, immutable'
  }));
  const encodedKey = key.split('/').map(part => encodeURIComponent(part)).join('/');
  return `${CDN_URL}/${encodedKey}`;
}

function fetchFirestoreBlogs() {
  return new Promise((resolve, reject) => {
    https.get('https://firestore.googleapis.com/v1/projects/edurain-pvt/databases/(default)/documents/blogs?pageSize=300', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.documents || []);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', err => reject(err));
  });
}

const MAX_IMAGE_BYTES = 10 * 1024 * 1024; // 10MB limit
const mimeToExt = {
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/svg+xml': '.svg'
};

async function main() {
  console.log(`=== EduRain S3 Website Blogs Sync ===`);
  console.log(`AWS Region: ${REGION}`);
  console.log(`AWS Bucket: ${BUCKET}`);
  console.log(`S3 Folder Prefix: website blogs/`);
  console.log(`Local Backup Folder: ${blogsLocalDir}\n`);

  console.log('Fetching all blogs from Firestore...');
  const docs = await fetchFirestoreBlogs();
  console.log(`Fetched ${docs.length} blog documents from Firestore.\n`);

  // Load existing migration map if available
  let migrationMap = {};
  if (fs.existsSync(migrationMapPath)) {
    try {
      migrationMap = JSON.parse(fs.readFileSync(migrationMapPath, 'utf8'));
    } catch (e) {
      migrationMap = {};
    }
  }

  let migratedCount = 0;
  let alreadyS3Count = 0;
  let expiredSkippedCount = 0;
  let noImageCount = 0;

  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i];
    const id = doc.name.split('/').pop();
    const fields = doc.fields || {};
    const title = fields.title?.stringValue || 'Untitled';
    const slug = fields.slug?.stringValue || id;
    const coverImage = fields.coverImage?.stringValue || '';

    console.log(`[${i + 1}/${docs.length}] Blog ID: ${id} | Title: "${title.substring(0, 40)}"`);

    if (!coverImage || coverImage.includes('default-blog.jpg')) {
      console.log(`   -> No custom cover image. Skipping.`);
      noImageCount++;
      continue;
    }

    if (coverImage.includes('edurain-notification.s3') || coverImage.includes('cloudfront.net')) {
      const cdnCover = coverImage.replace(/^https:\/\/edurain-notification\.s3(\.[a-z0-9-]+)?\.amazonaws\.com/i, CDN_URL);
      console.log(`   -> Already on AWS S3 / CloudFront CDN: ${cdnCover}`);
      alreadyS3Count++;
      migrationMap[id] = {
        id,
        title,
        slug,
        s3Cover: cdnCover,
        alreadyOnS3: true
      };
      continue;
    }

    console.log(`   -> External Cover URL: ${coverImage}`);
    console.log(`   -> Testing URL reachability...`);

    try {
      const res = await fetch(coverImage, {
        signal: AbortSignal.timeout(15000),
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });

      if (!res.ok) {
        console.warn(`   -> [EXPIRED/FAILED] HTTP Status ${res.status} ${res.statusText}`);
        console.log(`   -> Per instruction: Skipping expired blog link without assigning any banner.`);
        expiredSkippedCount++;
        continue;
      }

      const rawContentType = (res.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
      const ext = mimeToExt[rawContentType] || '.jpg';
      const contentType = mimeToExt[rawContentType] ? rawContentType : 'image/jpeg';

      const arrayBuffer = await res.arrayBuffer();
      if (arrayBuffer.byteLength > MAX_IMAGE_BYTES) {
        console.warn(`   -> File exceeds 10MB size limit (${arrayBuffer.byteLength} bytes). Skipping.`);
        continue;
      }

      const buffer = Buffer.from(arrayBuffer);
      const fileName = `cover_${id}${ext}`;
      const localFilePath = path.join(blogsLocalDir, fileName);
      const s3Key = `website blogs/${fileName}`;

      // 1. Save local backup copy
      fs.writeFileSync(localFilePath, buffer);

      // 2. Upload to S3
      console.log(`   -> Uploading ${buffer.length} bytes to S3: "${s3Key}"...`);
      const s3Url = await uploadBufferToS3(buffer, s3Key, contentType);
      console.log(`   -> ✅ Successfully uploaded to S3: ${s3Url}`);

      migratedCount++;
      migrationMap[id] = {
        id,
        title,
        slug,
        originalCover: coverImage,
        s3Cover: s3Url,
        localFile: `/images/blogs/${fileName}`,
        migratedAt: new Date().toISOString()
      };

    } catch (err) {
      console.warn(`   -> [ERROR/TIMEOUT] Fetch failed: ${err.message}`);
      console.log(`   -> Per instruction: Skipping expired/unreachable blog link without assigning any banner.`);
      expiredSkippedCount++;
    }
  }

  // Save migration map
  fs.writeFileSync(migrationMapPath, JSON.stringify(migrationMap, null, 2), 'utf8');
  fs.writeFileSync(scriptsMigrationMapPath, JSON.stringify(migrationMap, null, 2), 'utf8');

  console.log(`\n========================================`);
  console.log(`🎉 S3 Blog Migration Summary:`);
  console.log(`   Total Blogs Checked:    ${docs.length}`);
  console.log(`   Successfully Migrated:  ${migratedCount}`);
  console.log(`   Already on S3:          ${alreadyS3Count}`);
  console.log(`   Expired/Skipped:        ${expiredSkippedCount} (Untouched per user directive)`);
  console.log(`   No Cover Image:         ${noImageCount}`);
  console.log(`   Migration Map Saved to: ${migrationMapPath}`);
  console.log(`========================================\n`);
}

main().catch(err => {
  console.error('Fatal Migration Error:', err);
  process.exit(1);
});
