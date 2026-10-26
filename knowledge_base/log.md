# Action Log

## [YYYY-MM-DD] action | Description
## [2026-09-03] init | Initialized the knowledge base structure
## [2026-09-07] feature | Architected post-signup dashboard flow and integrated dynamic SEO metadata across blog routes.
## [2026-09-08] update | Optimized SEO sitemaps, engineered new About Us UI (local), updated faculty assets, executed CI/CD deployment, and initiated UI/UX design for inner pages.
## [2026-10-23] perf | Subpage CLS & TBT Optimization via Unified SSG Hydration — unified generate_routes.cjs component imports, eliminated 445 lines of mock strings, added router hydration guard, and stabilized aspect ratios to reach 0.00 CLS.
## [2026-10-23] stability | Allocated 4GB Node heap memory limit (NODE_OPTIONS="--max-old-space-size=4096") to eliminate JavaScript heap out of memory crashes during SSG prerendering of 93+ blog articles.
## [2026-10-24] feature | Blog Admin SPA Route Aliases & Static Entrypoint Generation — registered /blogadmin aliases and generated static HTML entrypoints with noindex headers to prevent homepage redirect loops.
## [2026-10-24] media | Course Banners HD WebP Pipeline & S3 Purge — converted 6 new batch PDFs into HD WebP banners (1448px, q=0.92) without text clipping, standardized card tile heights (min-h-[460px]), and purged 11 obsolete PNG/JPG files from S3 bucket edurain-notification.
## [2026-10-24] infrastructure | CloudFront CDN OAC Authorization & WAF Delivery — updated S3 bucket policy with CloudFront OAC principal condition across wildcard ARN arn:aws:s3:::edurain-notification/*, purged edge cache with /* invalidation, and verified browser WAF delivery for 15 course banners and blog media.
## [2026-10-24] devops | Deprecated and removed daily auto-deploy GitHub Actions workflow (.github/workflows/daily-deploy.yml) to ensure deployments are strictly developer-controlled.
## [2026-10-26] course-tile | Added DROPPER NEET 2027 batch tile (c20.webp) with WebP conversion, S3 edurain-notification upload, CloudFront CDN routing, and standardized all future image uploads to AWS S3 & CloudFront CDN.

