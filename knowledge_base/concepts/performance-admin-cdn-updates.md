# Platform Performance, Blog Admin Routing & CloudFront CDN Infrastructure (October 2026)

This document synthesizes the major architectural improvements, security authorizations, and asset optimizations implemented across the EduRain platform on October 23–24, 2026.

---

## 1. Subpage CLS & TBT Optimization via Unified SSG Hydration

- **Problem:** Dynamic SSG generation in `generate_routes.cjs` previously maintained 445 lines of duplicate, out-of-sync HTML template strings. When hydrated by the client router (`src/router.js`), inner contents were abruptly replaced, causing noticeable layout shift (CLS) and thread blocking (TBT).
- **Architecture:**
  - Standardized `generate_routes.cjs` to directly import actual client component renderers (`renderNavbar`, `renderFooter`, `renderCourses`, `renderJEECourses`, etc.).
  - Added a hydration guard in `src/router.js` to skip destructive `app.innerHTML = ''` DOM wiping when static markup matches the current requested path.
  - Standardized course grid images to `4/3` aspect ratio and `min-h-[460px]` tile containers.
- **Result:** CLS measured at `0.00` across all course category pages (`/courses/iit-jee`, `/courses/neet`, `/courses/foundation`).

---

## 2. Blog Admin SPA Routing & Static Entrypoint Generation

- **Problem:** Administrative users attempting to access `/blogadmin` or `/blogadmin/login` were trapped in a redirect loop back to the homepage (`/`) due to unhandled SPA routes and SSG hydration collisions.
- **Architecture:**
  - Registered `/blogadmin`, `/blogadmin/login`, `/admin`, and `/blogs-admin` aliases in `src/router.js`.
  - Added route protection during hydration so administrative DOM trees are never wiped with public marketing layouts.
  - Generated dedicated static physical entrypoints during build (`dist/blogadmin/index.html`, `dist/blogadmin/login/index.html`) equipped with `<meta name="robots" content="noindex, nofollow" />`.
- **Result:** Administrative panels load directly with HTTP 200 OK without triggering 404 handlers, preserving Firebase auth sessions across page reloads.

---

## 3. Course Banners HD WebP Pipeline & S3 Storage Purge

- **Problem:** Course batch cards displayed a mixture of legacy PNGs, JPGs, and screenshots with inconsistent aspect ratios and text cropping at headers and borders.
- **Pipeline:**
  - Converted 6 new vector batch PDFs (`dropperjee2027.pdf`, `class 11th pcb neet.pdf`, `class 11th pcm.pdf`, `targetjee2027.pdf`, `missionneet3.0.pdf`, `jee mantra 3.0.pdf`) into ultra-high-definition WebP graphics (1448px width, quality 0.92, 300 DPI equivalent) anchored top-center.
  - Standardized tile heights to `min-h-[460px]` and enforced Golden Ratio (1.618) spacing.
  - Purged 11 obsolete and duplicate assets (`c2.png`, `c3.png`, `c4.png`, `c10.png`, `c11.png`, `c13.png`, `c9.jpg`, `c18.jpg`, `c23.jpg`, `c8.webp`, `c14.webp`) from S3 bucket `edurain-notification` under prefix `website cources/`.
  - Exactly 15 active courses retained in high-performance WebP format.

---

## 4. CloudFront CDN Origin Access Control (OAC) & WAF Delivery

- **CDN Distribution:** `E54IC1UQARCPC` (`https://d26zb7slji2zmm.cloudfront.net`)
- **Bucket Policy:**
  - Granted `s3:GetObject` to `cloudfront.amazonaws.com` conditioned on `AWS:SourceArn` matching distribution `E54IC1UQARCPC`.
  - Applied wildcard resource `arn:aws:s3:::edurain-notification/*` to cover both `website cources/*` and `website blogs/*`.
- **Cache Invalidation:** Flushed edge caches with global invalidation `/*`.
- **WAF Inspection:** Confirmed AWS WAF ACL `CreatedByCloudFront-3bc04496` blocks headerless bot traffic while serving HTTP 200 OK `image/webp` to standard desktop/mobile browsers.

---

## 5. Build Stability & CI/CD Control

- **Node Heap Expansion:** Configured `NODE_OPTIONS="--max-old-space-size=4096"` in build scripts to prevent V8 JavaScript heap exhaustion when prerendering 93+ blog articles.
- **CI/CD Simplification:** Removed `.github/workflows/daily-deploy.yml` cron workflow to ensure production releases are exclusively driven by developer git pushes.

---

## 6. Mandatory S3 Bucket & CloudFront CDN Policy

- **AWS Region:** `ap-south-1`
- **S3 Bucket:** `edurain-notification`
- **CDN Base URL:** `https://d26zb7slji2zmm.cloudfront.net` (Distribution `E54IC1UQARCPC`)
- **Public Access Setting:** **DO NOT BLOCK PUBLIC ACCESS**. S3 `BlockPublicAccess` must remain `false` for all settings (`BlockPublicAcls`, `IgnorePublicAcls`, `BlockPublicPolicy`, `RestrictPublicBuckets`).
- **Bucket Policy:** Must always maintain `PublicReadGetObject` (`Principal: "*"`, `Action: "s3:GetObject"`, `Resource: "arn:aws:s3:::edurain-notification/*"`) alongside `AllowCloudFrontReadOnly` so that mobile application, website users, teachers, students, PDFs, study material, and notifications can freely access assets directly via S3 without 403 Forbidden errors.
- **Key Asset Rules:**
  1. **Strict WebP Standard:** Website images (course tiles, blog covers, Quill rich-text embeds) must be converted/compressed to `.webp` format for web performance.
  2. **Organized S3 Prefix Folders:**
     - Course Banners: `website cources/`
     - Blog Assets & In-Editor Media: `website blogs/`
     - App & Notifications: `notifications/`, `images/`, `profile-photos/`
  3. **Dual Access:** Assets are accessible both directly via `https://edurain-notification.s3.ap-south-1.amazonaws.com/...` and via CloudFront CDN `https://d26zb7slji2zmm.cloudfront.net/...`.


