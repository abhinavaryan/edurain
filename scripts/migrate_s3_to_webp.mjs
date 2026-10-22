/**
 * EduRain Plan B: Batch Migration of existing S3 images to high-performance WebP.
 * Converts existing S3 PNG/JPG course thumbnails and blog covers to WebP,
 * uploads them with immutable cache headers, and updates JSON maps to CloudFront URLs.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import sharp from 'sharp';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Read environment variables
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
const CDN_URL = (process.env.VITE_CDN_URL || envVars.VITE_CDN_URL || 'https://d26zb7slji2zmm.cloudfront.net').replace(/\/+$/, '');

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

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} from ${url}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function uploadWebpToS3(buffer, s3Key) {
  await s3.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: s3Key,
    Body: buffer,
    ContentType: 'image/webp',
    CacheControl: 'public, max-age=31536000, immutable'
  }));

  const encodedKey = s3Key.split('/').map(part => encodeURIComponent(part)).join('/');
  return `${CDN_URL}/${encodedKey}`;
}

async function runPlanB() {
  console.log('======================================================');
  console.log('🚀 Executing Plan B: S3 PNG/JPG -> WebP Batch Migration');
  console.log(`Bucket: ${BUCKET} | Region: ${REGION} | CDN: ${CDN_URL}`);
  console.log('======================================================\n');

  // --- PART 1: Migrate Course Thumbnails ---
  console.log('--- Step 1: Courses Thumbnails Migration ---');
  const coursesPath = path.join(rootDir, 'src', 'data', 'courses.json');
  const courses = JSON.parse(fs.readFileSync(coursesPath, 'utf8'));
  let coursesUpdated = 0;

  for (const course of courses) {
    const thumb = course.thumbnail || '';
    if (!thumb.match(/\.(png|jpe?g)$/i)) continue;

    const fileNameWithExt = decodeURIComponent(thumb.split('/').pop() || '');
    const ext = path.extname(fileNameWithExt);
    const baseName = fileNameWithExt.slice(0, -ext.length);
    const webpFileName = `${baseName}.webp`;
    const s3Key = `website cources/${webpFileName}`;

    let webpBuffer = null;

    // Check local courses banner directory first
    const localWebpPath = path.join(rootDir, 'public', 'images', 'courses banner', webpFileName);
    const localOrigPath = path.join(rootDir, 'public', 'images', 'courses banner', fileNameWithExt);

    if (fs.existsSync(localWebpPath)) {
      webpBuffer = fs.readFileSync(localWebpPath);
    } else if (fs.existsSync(localOrigPath)) {
      console.log(`  Converting local: ${localOrigPath}`);
      webpBuffer = await sharp(localOrigPath).webp({ quality: 88, effort: 6 }).toBuffer();
      fs.writeFileSync(localWebpPath, webpBuffer);
    } else {
      // Download from CDN/S3
      try {
        console.log(`  Downloading from CDN: ${thumb}`);
        const origBuffer = await downloadBuffer(thumb);
        webpBuffer = await sharp(origBuffer).webp({ quality: 88, effort: 6 }).toBuffer();
      } catch (err) {
        console.warn(`  ⚠️ Could not fetch course image ${thumb}:`, err.message);
        continue;
      }
    }

    if (webpBuffer) {
      try {
        const newUrl = await uploadWebpToS3(webpBuffer, s3Key);
        course.thumbnail = newUrl;
        coursesUpdated++;
        console.log(`  ✓ [Course ${course.id}] Updated to WebP: ${newUrl}`);
      } catch (err) {
        console.error(`  ❌ Failed to upload ${s3Key} to S3:`, err.message);
      }
    }
  }

  if (coursesUpdated > 0) {
    fs.writeFileSync(coursesPath + '.backup', fs.readFileSync(coursesPath, 'utf8'));
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2), 'utf8');
    console.log(`✅ Updated ${coursesUpdated} courses to WebP in courses.json\n`);
  } else {
    console.log('⚡ All courses are already using WebP.\n');
  }

  // --- PART 2: Migrate Blog S3 Covers ---
  console.log('--- Step 2: Blog S3 Covers Migration ---');
  const blogMapPath = path.join(rootDir, 'src', 'data', 'blog_s3_migration_map.json');
  const scriptsBlogMapPath = path.join(rootDir, 'scripts', 'blog_s3_migration_map.json');
  const blogMap = JSON.parse(fs.readFileSync(blogMapPath, 'utf8'));
  let blogsUpdated = 0;

  for (const id in blogMap) {
    const item = blogMap[id];
    const coverUrl = item.s3Cover || '';
    if (!coverUrl.match(/\.(png|jpe?g)$/i)) continue;

    const fileNameWithExt = decodeURIComponent(coverUrl.split('/').pop() || '');
    const ext = path.extname(fileNameWithExt);
    const baseName = fileNameWithExt.slice(0, -ext.length);
    const webpFileName = `${baseName}.webp`;
    const s3Key = `website blogs/${webpFileName}`;

    let webpBuffer = null;

    // Check local blogs directory first
    const localWebpPath = path.join(rootDir, 'public', 'images', 'blogs', webpFileName);
    const localOrigPath = path.join(rootDir, 'public', 'images', 'blogs', fileNameWithExt);

    if (fs.existsSync(localWebpPath)) {
      webpBuffer = fs.readFileSync(localWebpPath);
    } else if (fs.existsSync(localOrigPath)) {
      console.log(`  Converting local: ${localOrigPath}`);
      webpBuffer = await sharp(localOrigPath).webp({ quality: 88, effort: 6 }).toBuffer();
      fs.writeFileSync(localWebpPath, webpBuffer);
    } else {
      // Download from CDN/S3
      try {
        console.log(`  Downloading from CDN: ${coverUrl}`);
        const origBuffer = await downloadBuffer(coverUrl);
        webpBuffer = await sharp(origBuffer).webp({ quality: 88, effort: 6 }).toBuffer();
      } catch (err) {
        console.warn(`  ⚠️ Could not fetch blog cover ${coverUrl}:`, err.message);
        continue;
      }
    }

    if (webpBuffer) {
      try {
        const newUrl = await uploadWebpToS3(webpBuffer, s3Key);
        item.s3Cover = newUrl;
        blogsUpdated++;
        console.log(`  ✓ [Blog ${id}] Updated to WebP: ${newUrl}`);
      } catch (err) {
        console.error(`  ❌ Failed to upload ${s3Key} to S3:`, err.message);
      }
    }
  }

  if (blogsUpdated > 0) {
    fs.writeFileSync(blogMapPath + '.backup', fs.readFileSync(blogMapPath, 'utf8'));
    fs.writeFileSync(blogMapPath, JSON.stringify(blogMap, null, 2), 'utf8');
    if (fs.existsSync(scriptsBlogMapPath)) {
      fs.writeFileSync(scriptsBlogMapPath, JSON.stringify(blogMap, null, 2), 'utf8');
    }
    console.log(`✅ Updated ${blogsUpdated} blog covers to WebP in blog_s3_migration_map.json\n`);
  } else {
    console.log('⚡ All blog covers in migration map are already WebP.\n');
  }

  console.log('======================================================');
  console.log(`🎉 Plan B Complete! Total Assets Migrated to S3 WebP: ${coursesUpdated + blogsUpdated}`);
  console.log('======================================================');
}

runPlanB().catch(err => {
  console.error('Plan B migration failed:', err);
  process.exit(1);
});
