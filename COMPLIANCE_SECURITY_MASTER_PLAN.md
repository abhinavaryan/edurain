# EduRain Compliance, Security & Engineering Master Plan
**Target Systems:** EduRain Public Website, WebApp / CMS Portal, Mobile App (React Native / Expo Go), and Node.js / Lambda Backend API  
**Standards Covered:** Digital Personal Data Protection Act (DPDP Act India 2026–2027), COPPA/GDPR Privacy, Apple App Store Review Guidelines (5.1.1), OWASP Top 10 Security, and Production Performance Engineering.

---

## Executive Summary

This master plan synthesizes critical legal compliance, application security, frontend performance, and mobile store launch checklists into an actionable engineering blueprint. It is designed to be shared directly with your development team (Shivankar, Rohit, WebApp engineers, and Mobile developers) for immediate implementation across all four repositories:

1. **EduRain Public Website** (`edurain` - Vite / Static SSG / CloudFront)
2. **EduRain Web App & CMS Portal** (`CMS-Portal` - React / Admin Dashboard)
3. **EduRain Mobile App** (`EdTech-Learning-Hub` - React Native / Expo Go)
4. **EduRain Backend API** (`Backend` - Express / AWS Lambda / PostgreSQL RDS / S3)

---

## Table of Contents
1. [Track 1: Legal & DPDP Act India (2026–2027) Compliance](#track-1-legal--dpdp-act-india-20262027-compliance)
2. [Track 2: Application Security Engineering (OWASP / Webhook / Uploads / XSS)](#track-2-application-security-engineering)
3. [Track 3: UI/UX & Frontend Performance ("Vibe Code" Hardening)](#track-3-uiux--frontend-performance)
4. [Track 4: Mobile App Store (Apple iOS & Google Play) Launch Readiness](#track-4-mobile-app-store-launch-readiness)
5. [Track 5: Global Privacy, Fonts, Analytics & Email Safeguards](#track-5-global-privacy-fonts-analytics--email-safeguards)
6. [Cross-Project Implementation Matrix & Developer Action Items](#cross-project-implementation-matrix)

---

## Track 1: Legal & DPDP Act India (2026–2027) Compliance

### 1.1 Unbundled, Granular & Unchecked Consent
- **Violation:** Single "I agree to Terms & Conditions and Privacy Policy" blanket checkbox or pre-ticked checkboxes. Under DPDP Act 2023/2026, blanket consent is invalid and attracts severe penalties (up to ₹250 Crores for significant non-compliance).
- **Mandatory Requirements:**
  - Checkboxes must be **UNCHECKED by default**.
  - Consent must be **granular and itemized** into three separate consents:
    1. `[ ] I agree to the Terms and Conditions (Link)` (Required to create account)
    2. `[ ] I have read and agree to the Privacy Policy (Link)` (Required to process data)
    3. `[ ] I opt-in to receive academic updates, course announcements, and test alerts via WhatsApp/SMS/Email` (Strictly Optional)
  - Withdrawing consent must be as simple as granting it (a 1-click toggle in User Profile > Privacy Settings).

### 1.2 Backend Consent Audit Logging (Immutable Timestamp Trail)
- **Database Schema:** Every consent action must be stored in a dedicated audit table:
```sql
CREATE TABLE user_consent_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    consent_type VARCHAR(50) NOT NULL, -- 'TERMS_AND_CONDITIONS', 'PRIVACY_POLICY', 'MARKETING_SMS_WHATSAPP'
    consent_version VARCHAR(20) NOT NULL, -- e.g. 'v2.1_2026_10'
    is_granted BOOLEAN NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT NOT NULL,
    granted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    revoked_at TIMESTAMP WITH TIME ZONE NULL
);

CREATE INDEX idx_consent_user ON user_consent_logs(user_id, consent_type);
```

### 1.3 Mandatory Grievance Redressal Officer (DPDP Rule)
- Every user-facing portal (Website footer, WebApp settings, App drawer) must prominently display:
  - **Designation:** Grievance Redressal Officer
  - **Officer Name:** e.g., Manoj / Appointed Legal Officer
  - **Official Email:** `grievance@edurain.in` (monitored with strict SLA)
  - **Office Address:** EduRain Pvt. Ltd., Sector 132, Noida, Uttar Pradesh, India
  - **Statutory Resolution SLA:** Acknowledgment within 24 hours, resolution within 15–30 calendar days.

### 1.4 Protection of Children's Data (< 18 Years)
- **Requirement:** EduRain serves school and coaching students (Classes 6th to 12th, minors under 18).
- **Compliance Rules:**
  - Age Gating on signup: Ask for Date of Birth / Class.
  - If student is under 18: Mandatory field for **Parent/Guardian Name and Contact (Phone/Email)**.
  - Verification: Send an OTP / confirmation link to the parent's phone/email for explicit parental consent.
  - Prohibit behavioral profiling, targeted tracking, or commercial advertising directed at minor students.

### 1.5 Data Breach Notification Protocol
- In case of any confirmed data breach or security incident:
  - Mandatory notification to the **Data Protection Board of India (DPBI) / CERT-In within 6 hours**.
  - Plain-language notification sent to all affected users with mitigation steps.

---

## Track 2: Application Security Engineering

### 2.1 File & Media Upload Security (S3 & Profile Media)
- **Vulnerabilities Prevented:** Remote Code Execution (RCE), SVG Stored XSS, ImageTragick exploits, storage denial of service.
- **Rules to Implement:**
  1. **Strict MIME & Extension Allowlist:** Only permit `image/jpeg` (`.jpg`), `image/png` (`.png`), `image/webp` (`.webp`), and `application/pdf` (`.pdf`). **Block SVG, HTML, PHP, EXE, JS, SH unconditionally.**
  2. **Magic Byte / Buffer Inspection (Backend):** Never trust `file.originalname` or client-sent `Content-Type`. Validate magic bytes server-side using libraries like `file-type`:
     ```javascript
     import { fileTypeFromBuffer } from 'file-type';
     const detected = await fileTypeFromBuffer(buffer);
     const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
     if (!detected || !allowedMimes.includes(detected.mime)) {
       throw new Error('Security Error: Invalid or malicious file format detected.');
     }
     ```
  3. **Strict Size Limits:** Max 5MB for profile avatars, max 15MB for PDF assignments.
  4. **UUID File Renaming:** Discard client file names. Store as `${crypto.randomUUID()}.webp`.
  5. **S3 Execution Prevention:** Serve all uploads with headers `Content-Disposition: inline` (or `attachment`), `X-Content-Type-Options: nosniff`. Never allow S3 buckets to execute CGI/server scripts.

### 2.2 Payment Webhook Security (Razorpay / Stripe)
- **Vulnerabilities Prevented:** Fake payment injection, double-order enrollment, client-side callback tampering, replay attacks.
- **Mandatory Server-Side Webhook Architecture:**
  1. **Never Trust Client-Side Success Callbacks:** The client `onSuccess()` handler in mobile/web only triggers a "Payment Processing..." loading state. Course access is **ONLY** granted when the verified server webhook fires.
  2. **Raw Body HMAC-SHA256 Signature Verification:**
     ```javascript
     import crypto from 'crypto';
     
     export function verifyRazorpayWebhook(rawBodyString, receivedSignature, webhookSecret) {
       const expectedSignature = crypto
         .createHmac('sha256', webhookSecret)
         .update(rawBodyString)
         .digest('hex');
       
       return crypto.timingSafeEqual(
         Buffer.from(expectedSignature, 'utf8'),
         Buffer.from(receivedSignature, 'utf8')
       );
     }
     ```
  3. **Idempotency & Replay Attack Defense:**
     - Store every processed `event_id` or `payment_id` in a database table `processed_webhooks`.
     - If `payment_id` already exists with status `PROCESSED`, immediately return HTTP 200 OK without re-crediting the student or creating duplicate enrollments.
  4. **Payload Parameter Verification:** Verify that `payload.payment.entity.amount` matches the database course price and currency is `INR` before activating enrollment.

### 2.3 Cross-Site Scripting (XSS) & Injection Defense
1. **HTML Sanitization:** In Blog Admin, comments, forum, and student doubt sections, never assign raw HTML without DOMPurify:
   ```javascript
   import DOMPurify from 'dompurify';
   const cleanHtml = DOMPurify.sanitize(userProvidedHtml, {
     ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'li', 'ol', 'code', 'pre', 'img'],
     ALLOWED_ATTR: ['href', 'src', 'alt', 'target', 'class']
   });
   ```
2. **Mobile App WebView Hardening:**
   - In React Native / Expo `WebView`:
     - Set `allowFileAccess={false}`
     - Set `javaScriptCanOpenWindowsAutomatically={false}`
     - Restrict navigation to whitelisted domains:
       ```tsx
       onShouldStartLoadWithRequest={(request) => {
         return request.url.startsWith('https://edurain.in') || 
                request.url.startsWith('https://courses.edurain.in');
       }}
       ```
3. **Database Parameterization:** 100% of SQL queries in backend must use parameterized queries (`$1, $2`) or ORM (Prisma/TypeORM/Knex) — zero string-concatenated SQL queries.

---

## Track 3: UI/UX & Frontend Performance ("Vibe Code" Hardening)

### 3.1 Iconography & Navigation Usability
- **Bottom Navigation Bar (Mobile App & Mobile Web):**
  - Use universally recognized standard icons:
    - 🏠 Home (`HomeIcon`)
    - 📚 Courses / Study (`BookOpenIcon`)
    - 📝 Tests / Practice (`FileCheckIcon`)
    - 💬 Doubts / Help (`MessageSquareIcon`)
    - 👤 Profile (`UserIcon`)
  - Keep clear text labels beneath every icon (`Home`, `Courses`, `Tests`, `Profile`). Never rely on cryptic or abstract glyphs alone.
- **Top Header Menu (Website & WebApp):**
  - Combine SVG icons with visible text labels (e.g., `[Phone Icon] Contact Us`, `[Book Icon] NEET Batches`).

### 3.2 Optimistic UI Architecture
- **Problem:** When a student taps "Enroll", "Bookmark", "Like Doubt", or "Mark Lesson Complete", waiting for a slow 2-second backend roundtrip makes the app feel frozen and unresponsive.
- **Solution (Optimistic Updates with Automatic Rollback):**
  ```typescript
  async function toggleLessonCompletion(lessonId: string, currentStatus: boolean) {
    // 1. Optimistic Update (Immediate UI state change)
    setLessonStatus(prev => ({ ...prev, [lessonId]: !currentStatus }));
    triggerHapticFeedback(); // Instant tactile satisfaction
    
    try {
      // 2. Perform background network sync
      await api.post(`/lessons/${lessonId}/toggle-completion`);
    } catch (error) {
      // 3. Rollback seamlessly if request fails
      setLessonStatus(prev => ({ ...prev, [lessonId]: currentStatus }));
      showToast({ message: "Network error. Changes restored.", type: "error" });
    }
  }
  ```

### 3.3 Server-Side Cursor Pagination
- **Problem:** Fetching all blog posts, tests, question banks, or student records in a single query locks DB CPU and crashes the mobile app on low-memory devices.
- **Solution:** Standardize all list endpoints to Paginated Responses (`limit` & `cursor` / `page`):
  ```json
  {
    "data": [...],
    "pagination": {
      "limit": 20,
      "hasMore": true,
      "nextCursor": "eyJpZCI6IjM1ODU0MSJ9"
    }
  }
  ```
  - Mobile FlatList implementation: `onEndReached={() => fetchNextPage()}` with `initialNumToRender={10}` and `windowSize={5}`.

### 3.4 Database Query & Connection Optimization
- **Rules:**
  1. Ban `SELECT *` in production code. Explicitly select required columns (e.g., `SELECT id, title, thumbnail, price FROM courses`).
  2. Add database indexes to all foreign keys (`user_id`, `course_id`, `batch_id`) and search filters (`status`, `created_at`).
  3. Ensure AWS RDS Proxy is active between Lambda / Node and PostgreSQL to maintain connection pooling and prevent "Too many connections" crashes.

### 3.5 Asynchronous Background Job Workers
- Any task taking > 300ms must run in a background worker (AWS SQS, Celery, or BullMQ):
  - ❌ **Do NOT run in request cycle:** PDF certificate rendering, bulk student WhatsApp/SMS notifications, video transcoding, mass email broadcasts.
  - ✅ **Run in request cycle:** Enqueue job ID (`await queue.add('SEND_WELCOME_NOTIFICATION', payload)`), return HTTP 202 Accepted immediately.

---

## Track 4: Mobile App Store (Apple iOS & Google Play) Launch Readiness

### 4.1 In-App "Delete Account & Data" Feature (Apple Guideline 5.1.1(v) Mandatory)
- **Apple Store Rule:** Any app that supports account creation **MUST** provide a way to initiate account deletion directly within the app. Failure to include this will result in immediate App Store rejection.
- **Implementation in Mobile App:**
  - Navigate to: `Profile > Account Settings > Privacy > "Delete Account"`.
  - Display confirmation modal with clear warning: *"Deleting your account permanently removes your enrolled courses, test history, and notes."*
  - Require password / OTP confirmation.
  - Backend Action:
    - Revoke all active JWT / Firebase tokens immediately.
    - Soft-delete or purge user personal identification records in compliance with DPDP data retention laws.

### 4.2 In-App Privacy Policy & Terms Links
- Must be permanently accessible in two locations:
  1. **Pre-Login:** On the initial Welcome / Login / Signup screen.
  2. **Post-Login:** In the side navigation drawer or Profile > Legal section.
  3. Links must open cleanly in an in-app browser or native modal without broken redirects.

### 4.3 Rigorous Failed Payment & Error State Testing
- Before launch, explicitly test and verify UI handling for:
  - User cancels Razorpay/Stripe checkout modal midway.
  - Card/UPI transaction declined or bank server timeout.
  - Network disconnects right after deduction but before confirmation screen.
  - Clear user recovery message: *"Transaction not completed. No money was deducted. Tap to retry."*

### 4.4 Low-End Device & Throttled 3G Testing
- Test Expo Go / standalone build on budget Android devices (e.g., 2GB–3GB RAM, MediaTek processor).
- In Chrome DevTools / Network throttling, test under "Slow 3G":
  - Ensure skeleton loaders display instead of blank white screens.
  - Ensure image assets use optimized WebP thumbnails.
  - Cache critical assets offline using AsyncStorage or React Query persistent cache.

### 4.5 Zero Secret Keys in Client-Side App Bundles
- **Checklist:**
  - ❌ Never include in mobile app code: `AWS_SECRET_ACCESS_KEY`, `RAZORPAY_KEY_SECRET`, database passwords, admin tokens.
  - ✅ Only public identifiers are permitted in client bundles: `EXPO_PUBLIC_FIREBASE_API_KEY`, `RAZORPAY_KEY_ID` (public key).
  - All sensitive operations (course enrollment, user verification, file upload signing) must be routed through authenticated backend endpoints.

---

## Track 5: Global Privacy, Fonts, Analytics & Email Safeguards

### 5.1 Self-Hosted Webfonts (Zero Third-Party Google CDN Leaks)
- **Legal Precedent:** A German court fined a website because Google Fonts loaded directly from `fonts.googleapis.com`, transmitting the visitor's IP address to US servers without consent.
- **Solution:** Self-host all fonts directly from the EduRain domain/CDN (`/fonts/inter.woff2`, `/fonts/outfit.woff2`). Zero external calls to Google Fonts servers.

### 5.2 Session Replay & Keystroke Masking
- If using session recording tools (PostHog, Hotjar, Clarity, LogRocket):
  - Keystroke recording of text inputs in California and Europe can trigger wiretapping claims.
  - **Action:** Configure recording tools to enable strict input masking:
    ```javascript
    posthog.init('<KEY>', {
      api_host: 'https://app.posthog.com',
      session_recording: {
        maskAllInputs: true,
        maskTextSelector: '.mask-pii, input, textarea'
      }
    });
    ```

### 5.3 Mandatory Email Footer Compliance (CAN-SPAM / DPDP)
- Every automated email (welcome emails, waitlists, launch announcements, transaction receipts) must include:
  1. **1-Click Unsubscribe Link** in the email footer and in RFC-compliant headers (`List-Unsubscribe: <https://edurain.in/unsubscribe?token=...>`):
  2. **Physical Postal Address:**
     ```text
     EduRain Technologies Pvt. Ltd.
     Sector 132, Expressway, Noida, UP - 201304, India
     ```

### 5.4 E-Commerce Terms & Auto-Renewal Transparency
- For course purchases and any subscription/batch enrollments:
  - Next to the checkout button, explicitly show:
    - *"One-time payment for 1 academic session (Valid until NEET/JEE 2027 exam)"* OR
    - Auto-renewal terms: Frequency, next billing date, and cancellation policy.
  - Prominently link to the **Refund & Cancellation Policy** (`/refund-policy`).

---

## Cross-Project Implementation Matrix

| Module / Requirement | EduRain Website (Vite/Static) | EduRain WebApp / CMS | Mobile App (Expo / React Native) | Backend API (Node / Lambda / RDS) |
| :--- | :--- | :--- | :--- | :--- |
| **Granular Consent Checkboxes** | Contact & Demo Forms (Unchecked) | Signup / Auth Screens (Unchecked) | Signup / OTP Register Screens | Validate consent flags in `/auth/register` |
| **Consent Audit Table** | N/A (calls API) | N/A (calls API) | N/A (calls API) | Table `user_consent_logs` with IP & timestamps |
| **Grievance Officer Info** | Footer & About Page | Settings & Help Center | Drawer / Help & Support screen | N/A |
| **In-App Account Deletion** | N/A | User Profile Settings | Profile > "Delete Account" (Apple 5.1.1) | `DELETE /api/users/me` (Token revoke + purge) |
| **File Upload Validation** | Blog Admin (WebP client verify) | CMS Uploads (MIME verify) | Avatar upload (MIME verify) | Magic-byte check, UUID renaming, S3 upload |
| **Payment Webhook Verification** | N/A | N/A | Never trust client callback | Raw body HMAC-SHA256 + Idempotency table |
| **XSS Sanitization** | DOMPurify on blog content | DOMPurify on CMS rich text | WebView URL whitelist & sanitize | Parameterized SQL queries everywhere |
| **Optimistic UI & Pagination** | Blog & Course filtering | Student lists & Course tables | Doubts, Lessons, Bookmarks, Tests | `limit` & `cursor` pagination endpoints |
| **Self-Hosted Webfonts** | Downloaded in `/public/fonts/` | Bundled in assets | Bundled in Expo font loader | N/A |
| **Secret Key Hygiene** | Zero secret keys in client | Zero secret keys in client | Zero secret keys in Expo bundle | Secrets stored strictly in AWS SSM / `.env` |

---

## Step-by-Step Developer Next Actions

### For Backend Developer (Shivankar):
1. Create the `user_consent_logs` table and expose a `POST /api/v1/consent/log` endpoint.
2. Refactor the payment webhook handler (`/api/v1/payments/razorpay-webhook`) to verify HMAC signatures strictly on raw request bytes and store processed payment IDs in an idempotency table.
3. Add magic-byte file validation (`file-type` library) for all file upload endpoints before uploading to S3.
4. Implement `DELETE /api/v1/users/me` with full token revocation and data cleanup to support Apple's mandatory account deletion requirement.

### For Mobile App Developer (Rohit):
1. In `app/signup` or registration flow, replace single consent with granular un-prechecked boxes (Terms, Privacy, Updates).
2. In `app/profile/settings`, add the mandatory **"Delete Account"** button with a confirmation dialog triggering the deletion API.
3. Add visible text labels beneath all icons on the bottom navigation bar.
4. Verify that no private AWS or Razorpay secret keys exist in the Expo application configuration (`app.json` / client code).
5. Implement optimistic state updates for like, bookmark, and lesson completion actions with automatic error rollback.

### For Website & WebApp Frontend Team:
1. Self-host all Google Fonts locally into `/fonts/` to ensure full compliance with European and Indian privacy standards.
2. Update the website footer and Contact page to prominently publish the **Grievance Redressal Officer** details (Name, Email, Physical Address, Resolution SLA).
3. Ensure all contact forms, demo booking forms, and inquiry popups use un-ticked consent checkboxes with links to Privacy Policy and Terms.
4. Integrate input masking for analytics and session replay tools.

---
*Document Version: 1.0.0 (October 2026)*  
*Approved for EduRain Production Deployments*
