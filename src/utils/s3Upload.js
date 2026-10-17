// S3Client and PutObjectCommand are dynamically imported inside uploadToS3

export function getStoredS3Config() {
  return {
    region: localStorage.getItem('EDURAIN_AWS_REGION') || 'ap-south-1',
    bucket: localStorage.getItem('EDURAIN_AWS_BUCKET') || 'edurain-notification',
    accessKeyId: localStorage.getItem('EDURAIN_AWS_ACCESS_KEY_ID') || '',
    secretAccessKey: localStorage.getItem('EDURAIN_AWS_SECRET_ACCESS_KEY') || ''
  };
}

export function saveStoredS3Config({ region, bucket, accessKeyId, secretAccessKey }) {
  if (region) localStorage.setItem('EDURAIN_AWS_REGION', region.trim());
  if (bucket) localStorage.setItem('EDURAIN_AWS_BUCKET', bucket.trim());
  if (accessKeyId) localStorage.setItem('EDURAIN_AWS_ACCESS_KEY_ID', accessKeyId.trim());
  if (secretAccessKey) localStorage.setItem('EDURAIN_AWS_SECRET_ACCESS_KEY', secretAccessKey.trim());
}

/**
 * Uploads a file (or Blob) to S3 bucket.
 * Credentials are read securely from browser localStorage.
 * @param {File|Blob} file 
 * @param {string} folder - 'website blogs' or 'website cources'
 * @param {string} customFileName - optional custom name
 * @returns {Promise<string>} public S3 URL
 */
export async function uploadToS3(file, folder = 'website blogs', customFileName = '') {
  let config = getStoredS3Config();

  if (!config.accessKeyId || !config.secretAccessKey) {
    const enteredKey = prompt('AWS S3 Access Key ID (stored safely in your browser):', config.accessKeyId || '');
    if (!enteredKey) throw new Error('AWS S3 Access Key ID is required.');
    const enteredSecret = prompt('AWS S3 Secret Access Key:');
    if (!enteredSecret) throw new Error('AWS S3 Secret Access Key is required.');

    saveStoredS3Config({
      accessKeyId: enteredKey,
      secretAccessKey: enteredSecret,
      region: config.region,
      bucket: config.bucket
    });
    config = getStoredS3Config();
  }

  const { S3Client, PutObjectCommand } = await import('@aws-sdk/client-s3');

  const client = new S3Client({
    region: config.region,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey
    }
  });

  const originalName = file.name || 'image.png';
  const safeName = customFileName 
    ? customFileName 
    : `${Date.now()}-${originalName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

  const cleanFolder = folder.replace(/\/+$/, '');
  const key = `${cleanFolder}/${safeName}`;

  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: config.bucket,
    Key: key,
    Body: uint8Array,
    ContentType: file.type || 'image/png'
  });

  await client.send(command);

  // Return the public URL
  const encodedKey = key.split('/').map(part => encodeURIComponent(part)).join('/');
  return `https://${config.bucket}.s3.${config.region}.amazonaws.com/${encodedKey}`;
}
