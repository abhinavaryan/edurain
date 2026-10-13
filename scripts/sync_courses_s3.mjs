import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read .env if exists
const envPath = path.join(rootDir, '.env');
const envVars = {};
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split(/\r?\n/).forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      envVars[match[1]] = match[2] || '';
    }
  });
}

const REGION = process.env.VITE_AWS_REGION || envVars.VITE_AWS_REGION || 'ap-south-1';
const BUCKET = process.env.VITE_AWS_S3_BUCKET || envVars.VITE_AWS_S3_BUCKET || 'edurain-notification';
const ACCESS_KEY_ID = process.env.VITE_AWS_ACCESS_KEY_ID || envVars.VITE_AWS_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.VITE_AWS_SECRET_ACCESS_KEY || envVars.VITE_AWS_SECRET_ACCESS_KEY;

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

async function uploadBufferToS3(buffer, key, contentType) {
  await s3.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType
  }));
  const encodedKey = key.split('/').map(part => encodeURIComponent(part)).join('/');
  return `https://${BUCKET}.s3.${REGION}.amazonaws.com/${encodedKey}`;
}

async function main() {
  const args = process.argv.slice(2);
  const migrateExisting = args.includes('--migrate-existing') || args.includes('--all');

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

      // Try matching course by id or matching filename
      const matchedCourse = courses.find(c => c.id.toLowerCase() === baseName.toLowerCase() || c.title.toLowerCase().includes(baseName.toLowerCase()));
      if (matchedCourse) {
        matchedCourse.thumbnail = publicUrl;
        updatedCount++;
        console.log(` -> Assigned to course: [${matchedCourse.id}] ${matchedCourse.title}`);
      }
    }
  } else {
    console.log(`No files found in local public/images/courses banner/ yet.`);
  }

  // 2. If --migrate-existing is requested, download third-party thumbnails and upload to S3
  if (migrateExisting) {
    console.log(`\nMigrating third-party course thumbnails to S3...`);
    for (const course of courses) {
      if (course.thumbnail && !course.thumbnail.includes(BUCKET)) {
        console.log(`\nDownloading thumbnail for [${course.id}] ${course.title}...`);
        console.log(`  Source: ${course.thumbnail}`);
        try {
          const res = await fetch(course.thumbnail, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
          });
          if (!res.ok) {
            console.error(`  Failed to fetch: ${res.statusText}`);
            continue;
          }
          const arrayBuffer = await res.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          const contentType = res.headers.get('content-type') || 'image/webp';
          let ext = '.webp';
          if (contentType.includes('png')) ext = '.png';
          else if (contentType.includes('jpeg') || contentType.includes('jpg')) ext = '.jpg';

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
