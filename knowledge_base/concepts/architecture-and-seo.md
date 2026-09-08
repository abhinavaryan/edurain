# Architecture and SEO Optimization (Sep 7, 2026)

This document summarizes the core architectural changes and SEO improvements implemented.

## Key Updates

1. **Separated Routing:** Decoupled the public website pages from the secure post-signup dashboard application.
2. **Dynamic SEO:** Implemented automated title, meta, and Open Graph tags for blog posts fetched from Firestore.
3. **Automated Sitemap:** Configured the build script (`generate_routes.cjs`) to automatically append published blog URLs to `sitemap.xml`.
4. **App Readiness:** Prepared the dashboard architecture for future cross-platform deployment (iOS/Android) via Capacitor/Flutter.
