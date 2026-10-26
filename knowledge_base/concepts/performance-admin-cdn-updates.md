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

## 6. S3 Bucket Architecture & CloudFront CDN Policy

- **Website Asset Bucket (`edurain-notification`):**
  - **AWS Region:** `ap-south-1`
  - **CDN Distribution:** `E54IC1UQARCPC` (`https://d26zb7slji2zmm.cloudfront.net`)
  - **Public Access Setting:** Block Public Access is **ENABLED** (All 4 settings `true`).
  - **Bucket Policy:** Strictly secured with `AllowCloudFrontReadOnly` via Origin Access Control (OAC). Direct S3 access is blocked (403 Forbidden); all traffic routes exclusively through CloudFront CDN with WAF protection and caching.
  - **Folders:**
    - Course Banners: `website cources/`
    - Blog Assets & In-Editor Media: `website blogs/`
  - **Format:** Strict WebP format for optimal web performance.

- **App, Media & PDF Buckets (`edurain-media-assets`, `edurain-media-v2`):**
  - Used by mobile applications, backend services, and student learning portals for PDFs, documents, study materials, and general uploads.
  - Public Read (`PublicReadGetObject`) is enabled on these media buckets so students and mobile apps have direct access.



