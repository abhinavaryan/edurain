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
 * Dynamically loads PDF.js for rendering PDF page 1 to WebP in browser.
 */
function loadPdfJs() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('Window not available'));
    if (window.pdfjsLib) return resolve(window.pdfjsLib);

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        resolve(window.pdfjsLib);
      } else {
        reject(new Error('PDF.js library failed to initialize'));
      }
    };
    script.onerror = () => reject(new Error('Failed to load PDF.js from CDN'));
    document.head.appendChild(script);
  });
}

/**
 * Converts a PDF file's first page into a crisp WebP image.
 */
async function convertPdfToWebp(file, targetName, { maxWidth = 1400, quality = 0.85 } = {}) {
  const pdfjsLib = await loadPdfJs();
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  const page = await pdf.getPage(1);

  const defaultViewport = page.getViewport({ scale: 1.0 });
  const scale = Math.min(2.0, (maxWidth * 1.5) / defaultViewport.width);
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext('2d');

  await page.render({ canvasContext: ctx, viewport }).promise;

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          resolve({ blob: file, fileName: file.name, converted: false });
          return;
        }
        const webpFile = new File([blob], targetName, { type: 'image/webp' });
        resolve({
          blob: webpFile,
          fileName: targetName,
          converted: true,
          originalSize: file.size,
          compressedSize: blob.size
        });
      },
      'image/webp',
      quality
    );
  });
}

/**
 * Converts an image (PNG, JPG, JPEG, WEBP, etc.) to a compressed WebP format.
 */
function convertImageToWebp(file, targetName, { maxWidth = 1400, quality = 0.85 } = {}) {
  return new Promise((resolve) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);

      let width = img.naturalWidth || img.width;
      let height = img.naturalHeight || img.height;

      // Scale down proportionally if larger than maxWidth
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve({ blob: file, fileName: file.name, converted: false });
            return;
          }
          const webpFile = new File([blob], targetName, { type: 'image/webp' });
          resolve({
            blob: webpFile,
            fileName: targetName,
            converted: true,
            originalSize: file.size,
            compressedSize: blob.size
          });
        },
        'image/webp',
        quality
      );
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(objectUrl);
      console.warn('Canvas image loading failed, skipping WebP conversion:', err);
      resolve({ blob: file, fileName: file.name, converted: false });
    };

    img.src = objectUrl;
  });
}

/**
 * Universal client-side WebP converter.
 * Converts PNG, JPG, JPEG, BMP and PDF (page 1) to high-performance WebP.
 * @param {File|Blob} file 
 * @param {object} options 
 * @returns {Promise<{ blob: Blob, fileName: string, converted: boolean, originalSize?: number, compressedSize?: number }>}
 */
export async function convertToWebp(file, options = {}) {
  if (typeof window === 'undefined' || !file || !(file instanceof Blob)) {
    return { blob: file, fileName: file?.name || 'file', converted: false };
  }

  const originalName = file.name || 'image';
  const ext = (originalName.split('.').pop() || '').toLowerCase();
  const baseName = originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
  const webpFileName = `${baseName}.webp`;

  // 1. PDF Conversion (renders first page as WebP banner)
  if (file.type === 'application/pdf' || ext === 'pdf') {
    try {
      return await convertPdfToWebp(file, webpFileName, options);
    } catch (e) {
      console.warn('PDF to WebP conversion failed, falling back to original:', e);
      return { blob: file, fileName: originalName, converted: false };
    }
  }

  // 2. Image Conversion (PNG, JPG, JPEG, BMP, etc.)
  if (file.type.startsWith('image/') || ['png', 'jpg', 'jpeg', 'webp', 'bmp'].includes(ext)) {
    try {
      return await convertImageToWebp(file, webpFileName, options);
    } catch (e) {
      console.warn('Image to WebP conversion failed, falling back to original:', e);
      return { blob: file, fileName: originalName, converted: false };
    }
  }

  return { blob: file, fileName: originalName, converted: false };
}

/**
 * Uploads a file (or Blob) to S3 bucket.
 * Automatically compresses and converts PNG, JPG, JPEG, and PDF to WebP before uploading!
 * Credentials are read securely from browser localStorage.
 * @param {File|Blob} file 
 * @param {string} folder - 'website blogs' or 'website cources'
 * @param {string} customFileName - optional custom name
 * @param {function} onStatus - optional callback for upload status updates
 * @returns {Promise<string>} public S3 CloudFront URL
 */
export async function uploadToS3(file, folder = 'website blogs', customFileName = '', onStatus = null) {
  let uploadFile = file;
  let targetFileName = customFileName;

  // Step 1: Automatic Compression & WebP Conversion
  if (onStatus) onStatus('⚡ Compressing & Converting to WebP...');
  try {
    const result = await convertToWebp(file);
    if (result.converted && result.blob) {
      uploadFile = result.blob;
      if (result.originalSize && result.compressedSize) {
        const savingsPercent = Math.round((1 - result.compressedSize / result.originalSize) * 100);
        const originalKb = (result.originalSize / 1024).toFixed(1);
        const compressedKb = (result.compressedSize / 1024).toFixed(1);
        console.log(`WebP compression: ${originalKb} KB -> ${compressedKb} KB (${savingsPercent}% saved)`);
        if (onStatus) onStatus(`⚡ Compressed (${originalKb}KB → ${compressedKb}KB, -${savingsPercent}%). Uploading to S3...`);
      }
      if (targetFileName) {
        targetFileName = targetFileName.replace(/\.(png|jpe?g|pdf|bmp)$/i, '.webp');
      } else if (result.fileName) {
        targetFileName = `${Date.now()}-${result.fileName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      }
    }
  } catch (err) {
    console.warn('Automatic WebP conversion error:', err);
  }

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

  const originalName = uploadFile.name || file.name || 'image.webp';
  const safeName = targetFileName 
    ? targetFileName 
    : `${Date.now()}-${originalName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

  const cleanFolder = folder.replace(/\/+$/, '');
  const key = `${cleanFolder}/${safeName}`;

  const arrayBuffer = await uploadFile.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  const command = new PutObjectCommand({
    Bucket: config.bucket,
    Key: key,
    Body: uint8Array,
    ContentType: uploadFile.type || 'image/webp',
    CacheControl: 'public, max-age=31536000, immutable'
  });

  await client.send(command);

  // Return the public URL (CDN if configured, else fallback to raw S3)
  const encodedKey = key.split('/').map(part => encodeURIComponent(part)).join('/');
  const baseUrl = (import.meta.env.VITE_CDN_URL || 'https://d26zb7slji2zmm.cloudfront.net' || `https://${config.bucket}.s3.${config.region}.amazonaws.com`).replace(/\/+$/, '');
  return `${baseUrl}/${encodedKey}`;
}

/**
 * Converts any direct S3 bucket URL for edurain-notification into the CloudFront CDN URL.
 * Falls back safely to original URL if already CDN or not matching.
 */
export function toCdnUrl(url) {
  if (!url || typeof url !== 'string') return url;
  const cdnBase = (import.meta.env.VITE_CDN_URL || 'https://d26zb7slji2zmm.cloudfront.net').replace(/\/+$/, '');
  return url.replace(/^https:\/\/edurain-notification\.s3(\.[a-z0-9-]+)?\.amazonaws\.com/i, cdnBase);
}
