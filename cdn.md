EduRain AWS Cost Optimization & CloudFront CDN + OAC Setup Guide
Project: EduRain — [www.edurain.in](http://www.edurain.in/)
Step 1: AWS RDS ka bill kam karo
Aapke October 2026 ke bill ke hisaab se Amazon RDS ka cost $79.09 hai, jabki total estimated bill lagbhag $117.36 hai.
AWS Console mein kya karna hai?
AWS Console → Aurora and RDS → Databases → database-2 → Modify par jao.
Monitoring section mein agar Database Insights – Advanced enabled hai, toh uske pricing aur available options check karo. Zaroorat na ho toh Standard option select karo.
Agar aapka database Aurora Serverless v2 support karta hai, toh uski capacity settings check karo. Minimum capacity ko 0 ACU sirf tab set karo jab aapka engine/version aur configuration auto-pause support karte hon.
Maximum capacity ko 2 ya 4 ACU par set karne se pehle application ke actual workload aur peak traffic ko check karo.
Changes save karne se pehle modification summary aur possible downtime/availability impact review karo.
Important: Standard Database Insights aur automatic database pause har RDS/Aurora configuration mein free ya available nahi hote. Apply karne se pehle apne exact database engine, version aur pricing ko verify zaroor karo.
Step 2: S3 bucket ke aage CloudFront + OAC setup karo
Is setup mein CloudFront aapke S3 bucket se images deliver karega. OAC ka use karke S3 bucket ko direct public access se protect kiya ja sakta hai.
2.1 CloudFront distribution banao
AWS Console → CloudFront → Create distribution open karo.
Origin domain mein yeh bucket select karo:
edurain-notification.s3.ap-south-1.amazonaws.com
Origin access mein Origin access control settings (recommended) select karo.
Create new OAC par click karke OAC create karo.
Viewer protocol policy mein Redirect HTTP to HTTPS select karo.
Cache policy mein CachingOptimized select karo.
WAF ko tabhi disable rakho jab aapki security requirements ke hisaab se yeh theek ho.
Origin Shield optional hai. Isko enable karne se pehle expected traffic aur additional cost check karo.
Create distribution par click karo.
2.2 S3 bucket policy update karo
CloudFront distribution banne ke baad OAC ke liye generated bucket policy copy karo.
AWS Console → S3 → edurain-notification → Permissions → Bucket policy open karo.
Generated policy paste karke save karo.
Policy mein correct CloudFront distribution ARN hona chahiye.
CloudFront se objects successfully load hone ke baad Block all public access ON rakho, taaki bucket direct public access ke liye open na rahe.
2.3 S3 CORS configuration check karo
Aapka admin panel src/components/blogAdmin.js browser se directly S3 mein images upload karta hai. Isliye bucket ke Permissions → CORS section mein aap apne actual upload flow ke hisaab se yeh configuration use kar sakte ho:
[ { "AllowedHeaders": ["*"], "AllowedMethods": ["GET", "PUT", "POST", "HEAD"], "AllowedOrigins": [ "https://www.edurain.in", "https://edurain.in", "http://localhost:5173" ], "ExposeHeaders": ["ETag"] } ]
Note: CORS browser access ko control karta hai, bucket permissions ko nahi. Browser-based uploads ke liye AWS credentials ko frontend mein expose na karo. Preferably backend ya secure presigned URLs ka use karo.
Step 3: .env aur .env.example mein CDN URL add karo
Project ki root directory mein .env aur .env.example files open karo.
Neeche yeh variable add karo:
VITE_CDN_URL=https://YOUR_CLOUDFRONT_ID.cloudfront.net
YOUR_CLOUDFRONT_ID ki jagah apni actual CloudFront distribution ka domain lagao.
Example configuration:
VITE_FIREBASE_API_KEY=your_api_key_here VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com VITE_FIREBASE_PROJECT_ID=your_project_id VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id VITE_FIREBASE_APP_ID=your_app_id VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id AWS_REGION=ap-south-1 AWS_S3_BUCKET=edurain-notification AWS_ACCESS_KEY_ID=your_access_key_id AWS_SECRET_ACCESS_KEY=your_secret_access_key VITE_CDN_URL=https://YOUR_CLOUDFRONT_ID.cloudfront.net
Security warning: VITE_ prefix wale variables frontend build mein expose ho sakte hain. Isliye AWS_ACCESS_KEY_ID aur AWS_SECRET_ACCESS_KEY ko frontend-accessible environment variables mein kabhi expose mat karo. In credentials ko rotate karna bhi consider karo agar ye pehle public build mein gaye hon.
Step 4: Ponytail-style minimal code changes
Goal yeh hai ki existing functionality ko unnecessary change kiye bina images ko CloudFront URLs ke through serve kiya jaaye.
4.1 File: src/utils/s3Upload.js
PutObjectCommand ke andar Cache-Control header add karo aur upload ke baad CDN URL return karo:
const command = new PutObjectCommand({ Bucket: config.bucket, Key: key, Body: uint8Array, ContentType: file.type || 'image/png', CacheControl: 'public, max-age=31536000, immutable' }); await client.send(command); const encodedKey = key .split('/') .map(part => encodeURIComponent(part)) .join('/'); const baseUrl = ( import.meta.env.VITE_CDN_URL || `https://${config.bucket}.s3.${config.region}.amazonaws.com` ).replace(/\/+$/, ''); return `${baseUrl}/${encodedKey}`; }
Important: Yeh code existing function ke andar fit hona chahiye. Agar surrounding function ka structure alag hai, toh poora file replace karne ke bajay sirf relevant section update karo.
Ek saal ka immutable cache tabhi use karo jab image URL har baar unique ho aur existing URL ke content ko overwrite nahi kiya jaata ho.
4.2 File: scripts/sync_blogs_s3.mjs
SECRET_ACCESS_KEY ke baad CDN URL define karo:
const CDN_URL = ( process.env.VITE_CDN_URL || envVars.VITE_CDN_URL || `https://${BUCKET}.s3.${REGION}.amazonaws.com` ).replace(/\/+$/, '');
Ab uploadBufferToS3() function ko update karo:
async function uploadBufferToS3(buffer, key, contentType) { await s3.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: buffer, ContentType: contentType, CacheControl: 'public, max-age=31536000, immutable' })); const encodedKey = key .split('/') .map(part => encodeURIComponent(part)) .join('/'); return `${CDN_URL}/${encodedKey}`; }
Blog cover image check mein CloudFront URLs ko bhi recognise karao:
if ( coverImage.includes('edurain-notification.s3') || coverImage.includes('cloudfront.net') ) { // Existing migration logic yahin continue hogi. }
Note: Upar wala condition existing code mein kaise use hua hai, uske hisaab se exact placement aur surrounding logic preserve karo.
4.3 File: scripts/sync_courses_s3.mjs
CDN_URL define karo:
const CDN_URL = ( process.env.VITE_CDN_URL || envVars.VITE_CDN_URL || `https://${BUCKET}.s3.${REGION}.amazonaws.com` ).replace(/\/+$/, '');
uploadBufferToS3() function mein same Cache-Control aur CDN return logic use karo:
async function uploadBufferToS3(buffer, key, contentType) { await s3.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: buffer, ContentType: contentType, CacheControl: 'public, max-age=31536000, immutable' })); const encodedKey = key .split('/') .map(part => encodeURIComponent(part)) .join('/'); return `${CDN_URL}/${encodedKey}`; }
Expected URL banate waqt CDN URL use karo:
const expectedUrl = `${CDN_URL}/${encodedKey}`;
Migration condition mein CloudFront links ko dobara migrate hone se bachao:
if ( course.thumbnail && !course.thumbnail.includes(BUCKET) && !course.thumbnail.includes('cloudfront.net') ) { // Existing migration logic yahin continue hogi. }
4.4 File: src/components/blogAdmin.js
loadBlogs() function mein S3 cover check ko update karo:
const isS3Cover = ( data.coverImage && ( data.coverImage.includes('edurain-notification.s3') || data.coverImage.includes('cloudfront.net') ) ) || ( blogS3MigrationMap[id] && blogS3MigrationMap[id].s3Cover );
Isse CloudFront URLs wali images ke liye bhi admin list mein existing ☁️ S3 badge show ho sakta hai.
Step 5: Existing image URLs ko CloudFront par migrate karo
Migration se pehle src/data/courses.json aur src/data/blog_s3_migration_map.json ka backup le lo.
5.1 VS Code mein Find & Replace
Dono JSON files open karo aur Ctrl + H dabao.
Find:
https://edurain-notification.s3.ap-south-1.amazonaws.com
Replace:
https://YOUR_CLOUDFRONT_ID.cloudfront.net
YOUR_CLOUDFRONT_ID ko actual CloudFront domain se replace karna hai.
Replace karne ke baad JSON files validate karo aur check karo ki kisi URL mein duplicate domain, missing slash, ya galat path na ban gaya ho.
5.2 Firestore ko sync karo
CloudFront distribution deployed ho jaana chahiye.
S3 bucket policy aur object access verify karo.
Admin panel /blogadmin open karo.
☁️ Sync S3 Covers to DB button par click karo, agar existing implementation isi migration map ko read karti hai.
Firestore ke blog documents mein final URLs verify karo.
Website par blog covers aur course thumbnails open karke test karo.
Important: Button ki behaviour actual source code par depend karti hai. Run karne se pehle verify karo ki woh expected documents aur fields hi update karega.
Step 6: Cookie & Privacy banner add karo
Agar aap users ko cookie/privacy notice dikhana chahte ho, toh index.html mein </body> se pehle yeh basic banner add kar sakte ho:
<!-- EduRain Cookie & Privacy Banner --> <script> (function () { if (localStorage.getItem('er_cookie_consent')) return; const banner = document.createElement('div'); banner.style.cssText = 'position:fixed;bottom:16px;left:16px;right:16px;' + 'max-width:520px;margin:0 auto;background:#0d1f14;' + 'color:#f8fafc;border:1px solid rgba(74,222,128,0.3);' + 'border-radius:12px;padding:14px 18px;display:flex;' + 'align-items:center;justify-content:space-between;gap:14px;' + 'box-shadow:0 10px 25px rgba(0,0,0,0.4);z-index:9999;' + 'font-family:sans-serif;font-size:13.5px;line-height:1.4;'; banner.innerHTML = ` <span> We use cookies and cache to deliver course material and improve your learning experience. Read our <a href="/privacy" style="color:#4ade80;text-decoration:underline;"> Privacy Policy </a>. </span> <button id="er-accept-cookies" style="background:#16a34a;color:#fff;border:none; padding:8px 16px;border-radius:8px;font-weight:600; cursor:pointer;white-space:nowrap;"> Accept </button> `; document.body.appendChild(banner); document.getElementById('er-accept-cookies').onclick = function () { localStorage.setItem('er_cookie_consent', 'accepted'); banner.remove(); }; })(); </script>
Yeh ek basic notice banner hai, complete consent-management system nahi. Ismein sirf Accept button hai. Agar website par non-essential cookies ya tracking technologies use hoti hain, toh applicable privacy requirements ke hisaab se consent, rejection aur preference-management options bhi evaluate karo.
Final Notes: Kya change hoga aur kya nahi?
src/components/courses.js, src/components/blogs.js aur vite.config.js mein tabhi changes zaroori honge jab actual code ya data flow unki demand kare.
S3 images CloudFront se serve hongi jab URLs update ho jaayenge aur distribution/bucket policy sahi configured honge.
One-year caching sirf stable, versioned ya unique image URLs ke liye use karo.
AWS credentials frontend bundle mein expose mat karo.
CloudFront distribution deployed hone aur S3 bucket policy apply hone ke baad hi direct S3 public access restrict karne ka final verification karo.
RDS capacity ya monitoring settings change karne se pehle database type, production workload aur billing impact verify karo.
Recommended order: Pehle AWS configuration → phir ek test image upload → phir CloudFront URL verify → phir existing URLs migrate → aur sab kuch test karne ke baad production rollout.   EduRain AWS Cost Optimization & CloudFront CDN + OAC Setup Guide
Project: EduRain — [www.edurain.in](http://www.edurain.in)
Step 1: AWS RDS ka bill kam karo
Aapke October 2026 ke bill ke hisaab se Amazon RDS ka cost $79.09 hai, jabki total estimated bill lagbhag $117.36 hai.
AWS Console mein kya karna hai?
AWS Console → Aurora and RDS → Databases → database-2 → Modify par jao.
Monitoring section mein agar Database Insights – Advanced enabled hai, toh uske pricing aur available options check karo. Zaroorat na ho toh Standard option select karo.
Agar aapka database Aurora Serverless v2 support karta hai, toh uski capacity settings check karo. Minimum capacity ko 0 ACU sirf tab set karo jab aapka engine/version aur configuration auto-pause support karte hon.
Maximum capacity ko 2 ya 4 ACU par set karne se pehle application ke actual workload aur peak traffic ko check karo.
Changes save karne se pehle modification summary aur possible downtime/availability impact review karo.
Important: Standard Database Insights aur automatic database pause har RDS/Aurora configuration mein free ya available nahi hote. Apply karne se pehle apne exact database engine, version aur pricing ko verify zaroor karo.
Step 2: S3 bucket ke aage CloudFront + OAC setup karo
Is setup mein CloudFront aapke S3 bucket se images deliver karega. OAC ka use karke S3 bucket ko direct public access se protect kiya ja sakta hai.
2.1 CloudFront distribution banao
AWS Console → CloudFront → Create distribution open karo.
Origin domain mein yeh bucket select karo:
edurain-notification.s3.ap-south-1.amazonaws.com
Origin access mein Origin access control settings (recommended) select karo.
Create new OAC par click karke OAC create karo.
Viewer protocol policy mein Redirect HTTP to HTTPS select karo.
Cache policy mein CachingOptimized select karo.
WAF ko tabhi disable rakho jab aapki security requirements ke hisaab se yeh theek ho.
Origin Shield optional hai. Isko enable karne se pehle expected traffic aur additional cost check karo.
Create distribution par click karo.
2.2 S3 bucket policy update karo
CloudFront distribution banne ke baad OAC ke liye generated bucket policy copy karo.
AWS Console → S3 → edurain-notification → Permissions → Bucket policy open karo.
Generated policy paste karke save karo.
Policy mein correct CloudFront distribution ARN hona chahiye.
CloudFront se objects successfully load hone ke baad Block all public access ON rakho, taaki bucket direct public access ke liye open na rahe.
2.3 S3 CORS configuration check karo
Aapka admin panel src/components/blogAdmin.js browser se directly S3 mein images upload karta hai. Isliye bucket ke Permissions → CORS section mein aap apne actual upload flow ke hisaab se yeh configuration use kar sakte ho:
[ { "AllowedHeaders": ["*"], "AllowedMethods": ["GET", "PUT", "POST", "HEAD"], "AllowedOrigins": [ "https://www.edurain.in", "https://edurain.in", "http://localhost:5173" ], "ExposeHeaders": ["ETag"] } ]
Note: CORS browser access ko control karta hai, bucket permissions ko nahi. Browser-based uploads ke liye AWS credentials ko frontend mein expose na karo. Preferably backend ya secure presigned URLs ka use karo.
Step 3: .env aur .env.example mein CDN URL add karo
Project ki root directory mein .env aur .env.example files open karo.
Neeche yeh variable add karo:
VITE_CDN_URL=https://YOUR_CLOUDFRONT_ID.cloudfront.net
YOUR_CLOUDFRONT_ID ki jagah apni actual CloudFront distribution ka domain lagao.
Example configuration:
VITE_FIREBASE_API_KEY=your_api_key_here VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com VITE_FIREBASE_PROJECT_ID=your_project_id VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id VITE_FIREBASE_APP_ID=your_app_id VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id AWS_REGION=ap-south-1 AWS_S3_BUCKET=edurain-notification AWS_ACCESS_KEY_ID=your_access_key_id AWS_SECRET_ACCESS_KEY=your_secret_access_key VITE_CDN_URL=https://YOUR_CLOUDFRONT_ID.cloudfront.net
Security warning: VITE_ prefix wale variables frontend build mein expose ho sakte hain. Isliye AWS_ACCESS_KEY_ID aur AWS_SECRET_ACCESS_KEY ko frontend-accessible environment variables mein kabhi expose mat karo. In credentials ko rotate karna bhi consider karo agar ye pehle public build mein gaye hon.
Step 4: Ponytail-style minimal code changes
Goal yeh hai ki existing functionality ko unnecessary change kiye bina images ko CloudFront URLs ke through serve kiya jaaye.
4.1 File: src/utils/s3Upload.js
PutObjectCommand ke andar Cache-Control header add karo aur upload ke baad CDN URL return karo:
const command = new PutObjectCommand({ Bucket: config.bucket, Key: key, Body: uint8Array, ContentType: file.type || 'image/png', CacheControl: 'public, max-age=31536000, immutable' }); await client.send(command); const encodedKey = key .split('/') .map(part => encodeURIComponent(part)) .join('/'); const baseUrl = ( import.meta.env.VITE_CDN_URL || `https://${config.bucket}.s3.${config.region}.amazonaws.com` ).replace(/\/+$/, ''); return `${baseUrl}/${encodedKey}`; }
Important: Yeh code existing function ke andar fit hona chahiye. Agar surrounding function ka structure alag hai, toh poora file replace karne ke bajay sirf relevant section update karo.
Ek saal ka immutable cache tabhi use karo jab image URL har baar unique ho aur existing URL ke content ko overwrite nahi kiya jaata ho.
4.2 File: scripts/sync_blogs_s3.mjs
SECRET_ACCESS_KEY ke baad CDN URL define karo:
const CDN_URL = ( process.env.VITE_CDN_URL || envVars.VITE_CDN_URL || `https://${BUCKET}.s3.${REGION}.amazonaws.com` ).replace(/\/+$/, '');
Ab uploadBufferToS3() function ko update karo:
async function uploadBufferToS3(buffer, key, contentType) { await s3.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: buffer, ContentType: contentType, CacheControl: 'public, max-age=31536000, immutable' })); const encodedKey = key .split('/') .map(part => encodeURIComponent(part)) .join('/'); return `${CDN_URL}/${encodedKey}`; }
Blog cover image check mein CloudFront URLs ko bhi recognise karao:
if ( coverImage.includes('edurain-notification.s3') || coverImage.includes('cloudfront.net') ) { // Existing migration logic yahin continue hogi. }
Note: Upar wala condition existing code mein kaise use hua hai, uske hisaab se exact placement aur surrounding logic preserve karo.
4.3 File: scripts/sync_courses_s3.mjs
CDN_URL define karo:
const CDN_URL = ( process.env.VITE_CDN_URL || envVars.VITE_CDN_URL || `https://${BUCKET}.s3.${REGION}.amazonaws.com` ).replace(/\/+$/, '');
uploadBufferToS3() function mein same Cache-Control aur CDN return logic use karo:
async function uploadBufferToS3(buffer, key, contentType) { await s3.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: buffer, ContentType: contentType, CacheControl: 'public, max-age=31536000, immutable' })); const encodedKey = key .split('/') .map(part => encodeURIComponent(part)) .join('/'); return `${CDN_URL}/${encodedKey}`; }
Expected URL banate waqt CDN URL use karo:
const expectedUrl = `${CDN_URL}/${encodedKey}`;
Migration condition mein CloudFront links ko dobara migrate hone se bachao:
if ( course.thumbnail && !course.thumbnail.includes(BUCKET) && !course.thumbnail.includes('cloudfront.net') ) { // Existing migration logic yahin continue hogi. }
4.4 File: src/components/blogAdmin.js
loadBlogs() function mein S3 cover check ko update karo:
const isS3Cover = ( data.coverImage && ( data.coverImage.includes('edurain-notification.s3') || data.coverImage.includes('cloudfront.net') ) ) || ( blogS3MigrationMap[id] && blogS3MigrationMap[id].s3Cover );
Isse CloudFront URLs wali images ke liye bhi admin list mein existing ☁️ S3 badge show ho sakta hai.
Step 5: Existing image URLs ko CloudFront par migrate karo
Migration se pehle src/data/courses.json aur src/data/blog_s3_migration_map.json ka backup le lo.
5.1 VS Code mein Find & Replace
Dono JSON files open karo aur Ctrl + H dabao.
Find:
https://edurain-notification.s3.ap-south-1.amazonaws.com
Replace:
https://YOUR_CLOUDFRONT_ID.cloudfront.net
YOUR_CLOUDFRONT_ID ko actual CloudFront domain se replace karna hai.
Replace karne ke baad JSON files validate karo aur check karo ki kisi URL mein duplicate domain, missing slash, ya galat path na ban gaya ho.
5.2 Firestore ko sync karo
CloudFront distribution deployed ho jaana chahiye.
S3 bucket policy aur object access verify karo.
Admin panel /blogadmin open karo.
☁️ Sync S3 Covers to DB button par click karo, agar existing implementation isi migration map ko read karti hai.
Firestore ke blog documents mein final URLs verify karo.
Website par blog covers aur course thumbnails open karke test karo.
Important: Button ki behaviour actual source code par depend karti hai. Run karne se pehle verify karo ki woh expected documents aur fields hi update karega.
Step 6: Cookie & Privacy banner add karo
Agar aap users ko cookie/privacy notice dikhana chahte ho, toh index.html mein </body> se pehle yeh basic banner add kar sakte ho:
<!-- EduRain Cookie & Privacy Banner --> <script> (function () { if (localStorage.getItem('er_cookie_consent')) return; const banner = document.createElement('div'); banner.style.cssText = 'position:fixed;bottom:16px;left:16px;right:16px;' + 'max-width:520px;margin:0 auto;background:#0d1f14;' + 'color:#f8fafc;border:1px solid rgba(74,222,128,0.3);' + 'border-radius:12px;padding:14px 18px;display:flex;' + 'align-items:center;justify-content:space-between;gap:14px;' + 'box-shadow:0 10px 25px rgba(0,0,0,0.4);z-index:9999;' + 'font-family:sans-serif;font-size:13.5px;line-height:1.4;'; banner.innerHTML = ` <span> We use cookies and cache to deliver course material and improve your learning experience. Read our <a href="/privacy" style="color:#4ade80;text-decoration:underline;"> Privacy Policy </a>. </span> <button id="er-accept-cookies" style="background:#16a34a;color:#fff;border:none; padding:8px 16px;border-radius:8px;font-weight:600; cursor:pointer;white-space:nowrap;"> Accept </button> `; document.body.appendChild(banner); document.getElementById('er-accept-cookies').onclick = function () { localStorage.setItem('er_cookie_consent', 'accepted'); banner.remove(); }; })(); </script>
Yeh ek basic notice banner hai, complete consent-management system nahi. Ismein sirf Accept button hai. Agar website par non-essential cookies ya tracking technologies use hoti hain, toh applicable privacy requirements ke hisaab se consent, rejection aur preference-management options bhi evaluate karo.
Final Notes: Kya change hoga aur kya nahi?
src/components/courses.js, src/components/blogs.js aur vite.config.js mein tabhi changes zaroori honge jab actual code ya data flow unki demand kare.
S3 images CloudFront se serve hongi jab URLs update ho jaayenge aur distribution/bucket policy sahi configured honge.
One-year caching sirf stable, versioned ya unique image URLs ke liye use karo.
AWS credentials frontend bundle mein expose mat karo.
CloudFront distribution deployed hone aur S3 bucket policy apply hone ke baad hi direct S3 public access restrict karne ka final verification karo.
RDS capacity ya monitoring settings change karne se pehle database type, production workload aur billing impact verify karo.
Recommended order: Pehle AWS configuration → phir ek test image upload → phir CloudFront URL verify → phir existing URLs migrate → aur sab kuch test karne ke baad production rollout.
Ek important baat: Is guide ko production mein apply karne se pehle apne actual codebase ke saath snippets verify kar lena. Khaaskar RDS auto-pause, AWS credentials, aur existing JSON/Firestore migration logic ko bina verify kiye change mat karna.