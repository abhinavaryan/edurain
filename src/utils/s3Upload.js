import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const REGION = import.meta.env.VITE_AWS_REGION || 'ap-south-1';
const BUCKET = import.meta.env.VITE_AWS_S3_BUCKET || 'edurain-notification';
const ACCESS_KEY_ID = import.meta.env.VITE_AWS_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY;

let s3ClientInstance = null;

function getS3Client() {
  if (!s3ClientInstance) {
    if (!ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
      throw new Error('AWS credentials are not configured. Please set VITE_AWS_ACCESS_KEY_ID and VITE_AWS_SECRET_ACCESS_KEY in .env');
    }
    s3ClientInstance = new S3Client({
      region: REGION,
      credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY
      }
    });
  }
  return s3ClientInstance;
}

/**
 * Uploads a file (or Blob) to S3 bucket.
 * @param {File|Blob} file 
 * @param {string} folder - 'website blogs' or 'website cources'
 * @param {string} customFileName - optional custom name
 * @returns {Promise<string>} public S3 URL
 */
export async function uploadToS3(file, folder = 'website blogs', customFileName = '') {
  const client = getS3Client();

  const originalName = file.name || 'image.png';
  const extension = originalName.split('.').pop() || 'png';
  const safeName = customFileName 
    ? customFileName 
    : `${Date.now()}-${originalName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

  const cleanFolder = folder.replace(/\/+$/, '');
  const key = `${cleanFolder}/${safeName}`;

  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: uint8Array,
    ContentType: file.type || 'image/png'
  });

  await client.send(command);

  // Return the public URL (properly URL-encoded for spaces)
  const encodedKey = key.split('/').map(part => encodeURIComponent(part)).join('/');
  return `https://${BUCKET}.s3.${REGION}.amazonaws.com/${encodedKey}`;
}
