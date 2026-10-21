import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
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

const coursesBannerDir = path.join(rootDir, 'public', 'images', 'courses banner');
if (!fs.existsSync(coursesBannerDir)) {
  fs.mkdirSync(coursesBannerDir, { recursive: true });
}

const coursesJsonPath = path.join(rootDir, 'src', 'data', 'courses.json');
const courses = JSON.parse(fs.readFileSync(coursesJsonPath, 'utf8'));

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

async function main() {
  const args = process.argv.slice(2);
  const migrateExisting = args.includes('--migrate-existing') || args.includes('--all');
  const force = args.includes('--force');
  const targetFilter = args.find(a => !a.startsWith('--'));

  console.log(`=== EduRain S3 Courses Sync ===`);
  console.log(`Bucket: ${BUCKET}`);
  console.log(`Folder in S3: website cources/`);
  console.log(`Local Directory: ${coursesBannerDir}\n`);

  let updatedCount = 0;

  // 1. Check local images in public/images/courses banner
  const localFiles = fs.readdirSync(coursesBannerDir).filter(f => !f.startsWith('.'));
  if (localFiles.length > 0) {
    console.log(`Found ${localFiles.length} file(s) in public/images/courses banner:`);
    for (const file of localFiles) {
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.webp', '.svg'].includes(ext)) continue;

      const baseName = path.basename(file, ext);
      if (targetFilter && baseName.toLowerCase() !== targetFilter.toLowerCase()) {
        continue;
      }

      const bannerAliasMap = {
        'c2': 'c7',
        'c3': 'c14',
        'c4': 'c12'
      };

      // Match course strictly by unique id or mapped alias
      const effectiveId = bannerAliasMap[baseName.toLowerCase()] || baseName.toLowerCase();
      const matchedCourse = courses.find(c => c.id.toLowerCase() === effectiveId);
      if (!matchedCourse) {
        console.log(`Skipping ${file}: no matching course ID in courses.json`);
        continue;
      }

      const encodedKey = `website cources/${file}`.split('/').map(part => encodeURIComponent(part)).join('/');
      const expectedUrl = `${CDN_URL}/${encodedKey}`;

      if (matchedCourse.thumbnail === expectedUrl && !force) {
        console.log(`[${matchedCourse.id}] Already synced to S3: ${expectedUrl}`);
        continue;
      }

      const filePath = path.join(coursesBannerDir, file);
      const buffer = fs.readFileSync(filePath);
      const mimeTypes = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.webp': 'image/webp',
        '.svg': 'image/svg+xml'
      };
      const contentType = mimeTypes[ext] || 'image/png';
      const s3Key = `website cources/${file}`;

      console.log(`Uploading ${file} to S3...`);
      const publicUrl = await uploadBufferToS3(buffer, s3Key, contentType);
      console.log(` -> S3 URL: ${publicUrl}`);

      matchedCourse.thumbnail = publicUrl;
      updatedCount++;
      console.log(` -> Assigned to course: [${matchedCourse.id}] ${matchedCourse.title}`);
    }
  } else {
    console.log(`No files found in local public/images/courses banner/ yet.`);
  }

  // 2. If --migrate-existing is requested, download third-party thumbnails and upload to S3
  if (migrateExisting) {
    console.log(`\nMigrating third-party course thumbnails to S3...`);
    const MAX_THUMBNAIL_BYTES = 10 * 1024 * 1024; // 10MB limit
    const supportedTypes = {
      'image/jpeg': '.jpg',
      'image/jpg': '.jpg',
      'image/png': '.png',
      'image/webp': '.webp',
      'image/svg+xml': '.svg'
    };

    for (const course of courses) {
      if (course.thumbnail && !course.thumbnail.includes(BUCKET) && !course.thumbnail.includes('cloudfront.net')) {
        console.log(`\nDownloading thumbnail for [${course.id}] ${course.title}...`);
        console.log(`  Source: ${course.thumbnail}`);
        try {
          const res = await fetch(course.thumbnail, {
            signal: AbortSignal.timeout(15000), // 15s timeout
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
          });
          if (!res.ok) {
            console.error(`  Failed to fetch: ${res.status} ${res.statusText}`);
            continue;
          }

          const contentLength = parseInt(res.headers.get('content-length') || '0', 10);
          if (contentLength > MAX_THUMBNAIL_BYTES) {
            console.error(`  Thumbnail exceeds maximum size limit (${contentLength} bytes). Skipping.`);
            continue;
          }

          const rawContentType = (res.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
          if (!supportedTypes[rawContentType]) {
            console.error(`  Unsupported or non-image content-type: "${rawContentType}". Skipping.`);
            continue;
          }

          const arrayBuffer = await res.arrayBuffer();
          if (arrayBuffer.byteLength > MAX_THUMBNAIL_BYTES) {
            console.error(`  Downloaded thumbnail exceeds maximum size limit (${arrayBuffer.byteLength} bytes). Skipping.`);
            continue;
          }

          const buffer = Buffer.from(arrayBuffer);
          const ext = supportedTypes[rawContentType];
          const contentType = rawContentType;

          const fileName = `${course.id}${ext}`;
          const s3Key = `website cources/${fileName}`;
          
          // Also save locally to public/images/courses banner/
          fs.writeFileSync(path.join(coursesBannerDir, fileName), buffer);

          const publicUrl = await uploadBufferToS3(buffer, s3Key, contentType);
          course.thumbnail = publicUrl;
          updatedCount++;
          console.log(`  -> Uploaded to S3: ${publicUrl}`);
        } catch (err) {
          console.error(`  Error migrating course ${course.id}:`, err.message);
        }
      } else {
        console.log(`[${course.id}] Already on S3 or valid: ${course.thumbnail}`);
      }
    }
  }

  if (updatedCount > 0) {
    fs.writeFileSync(coursesJsonPath, JSON.stringify(courses, null, 2), 'utf8');
    console.log(`\n✅ Successfully updated ${updatedCount} courses in src/data/courses.json!`);
  } else {
    console.log(`\nNo course thumbnails updated. Run with --migrate-existing to migrate current thumbnails.`);
  }
}

main().catch(err => {
  console.error('Migration error:', err);
  process.exit(1);
});
