export function renderTerms() {
    return `
        <section class="er-privacy-section fade-in-section visible" id="terms" style="padding: 120px 5%; background: var(--bg-dark); color: var(--text-main); min-height: 100vh;">
            <div class="er-container" style="max-width: 960px; margin: 0 auto;">
                <div class="er-glass-card glass-card fade-in-section visible" style="padding: clamp(2rem, 4vw, 3.5rem); margin-bottom: 2rem; border-radius: 24px; line-height: 1.85;">
                    
                    <h1 style="font-size: clamp(2.2rem, 4vw, 3rem); font-weight: 800; color: var(--accent); margin-bottom: 0.5rem; text-align: center; letter-spacing: -0.02em;">Terms and Conditions – EduRain</h1>
                    <p style="text-align: center; color: var(--text-muted); font-size: 1rem; margin-bottom: 2.5rem;"><strong>Last Updated:</strong> October 27, 2026 | Governing Website, Mobile Applications & Online Batches</p>

                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem;">
                        Welcome to <strong>EduRain</strong> ("EduRain", "We", "Us", "Our"), accessible at <a href="https://edurain.in" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none; font-weight: 600;">https://edurain.in</a>, along with our official mobile application(s) distributed on Google Play and Apple App Store, and all affiliated digital learning services (collectively, the "Platform").
                    </p>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem;">
                        These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User", "Student", "Parent/Guardian", "You") and EduRain Private Limited. By registering an account, purchasing a batch, downloading study material, or using any service on the Platform, You confirm that You have read, understood, and agreed to these Terms and our <a href="/privacy" style="color: var(--accent); text-decoration: underline;">Privacy Policy</a>.
                    </p>

                    <div style="background: rgba(250, 204, 21, 0.1); border-left: 4px solid var(--accent); padding: 1.25rem; margin-bottom: 2.5rem; border-radius: 8px;">
                        <p style="margin: 0; font-size: 0.98rem; color: #fef08a;">
                            <strong>Notice for Parents and Guardians:</strong> If a student using the EduRain Platform is under 18 years of age (minor), registration and purchases must be executed or authorized by a parent or legal guardian. The parent or guardian assumes full legal responsibility for compliance with these Terms.
                        </p>
                    </div>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2.5rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">1. Eligibility & Account Security</h2>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.02rem;">
                        <li style="margin-bottom: 0.6rem;">Users must provide accurate, verifiable information during signup (Full Name, active Mobile Number, Email, Target Exam/Grade, State).</li>
                        <li style="margin-bottom: 0.6rem;">Accounts are issued strictly for single, personal, non-commercial educational use. Simultaneous multi-device logins or credential sharing is prohibited.</li>
                        <li style="margin-bottom: 0.6rem;">You are solely responsible for maintaining the confidentiality of your login OTPs, passwords, and active session tokens.</li>
                    </ul>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2.5rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">2. Transparent Pricing, Purchases & Refund Policy</h2>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.02rem;">
                        <li style="margin-bottom: 0.6rem;"><strong>Batch Validity:</strong> Unless explicitly stated otherwise, fee payments for NEET, JEE, or Foundation courses grant digital access for the duration of that specific academic session (concluding with the respective final board/entrance examination).</li>
                        <li style="margin-bottom: 0.6rem;"><strong>No Hidden Auto-Renewals:</strong> EduRain course purchases are one-time payments for the designated academic validity. There are no recurring auto-debits without explicit prior consumer consent.</li>
                        <li style="margin-bottom: 0.6rem;"><strong>Refund & Course Switch:</strong> Due to immediate activation of intellectual property (recorded video lectures, DPPs, test series), digital courses are non-refundable once activated. For wrong batch selections, students may request a batch switch within 7 days by contacting support. Read our full <a href="/refund-policy" style="color: var(--accent); text-decoration: underline;">Refund & Cancellation Policy</a>.</li>
                    </ul>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2.5rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">3. Intellectual Property & Anti-Piracy Protection</h2>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.02rem;">
                        <li style="margin-bottom: 0.6rem;">All video lectures, PDF notes, DPPs, mock test series, graphics, software code, and master educator lectures are the proprietary intellectual property of EduRain.</li>
                        <li style="margin-bottom: 0.6rem;"><strong>Strict Anti-Piracy Rule:</strong> Screen recording, capturing video streams, downloading DRM-protected files, redistributing notes on Telegram/WhatsApp channels, or reselling EduRain credentials is a criminal violation under the Indian Copyright Act, 1957.</li>
                        <li style="margin-bottom: 0.6rem;">EduRain employs dynamic visible and invisible watermarking. Accounts caught leaking content will be immediately terminated with permanent forfeiture of fees and reported to cybercrime authorities.</li>
                    </ul>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2.5rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">4. Mobile App Hardware Permissions & Use</h2>
                    <p style="margin-bottom: 1rem; font-size: 1.02rem;">When using our Mobile Application on Android or iOS devices:</p>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.02rem;">
                        <li style="margin-bottom: 0.6rem;"><strong>Camera & Microphone:</strong> Accessed exclusively with real-time user permission during live 2-way doubt classes, scanning question photos, or proctored test identity verification. We never access your camera/mic when the app is minimized or closed.</li>
                        <li style="margin-bottom: 0.6rem;"><strong>Storage / Photos:</strong> Accessed solely for uploading assignments or saving offline study notes.</li>
                        <li style="margin-bottom: 0.6rem;"><strong>Location:</strong> Coarse location is processed to ensure regional content delivery, statutory GST billing, and optimal connection to regional AWS CloudFront streaming nodes.</li>
                    </ul>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2.5rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">5. In-App Account Deletion & Right to Erasure</h2>
                    <p style="margin-bottom: 1.5rem; font-size: 1.02rem;">
                        In compliance with Apple App Store Guideline 5.1.1(v) and the Digital Personal Data Protection Act, users may delete their account at any time directly through the Mobile App (<strong>Profile &rarr; Account Settings &rarr; Privacy &rarr; "Delete Account"</strong>) or by writing to <a href="mailto:support@edurain.in" style="color: var(--accent);">support@edurain.in</a>. Upon verification, active sessions and personal identifiers will be permanently expunged.
                    </p>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2.5rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">6. Doubt Forums, Community Standards & User Content</h2>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.02rem;">
                        <li style="margin-bottom: 0.6rem;">Students must maintain academic decorum in live class chats and doubt community sections. Abusive language, harassment, hate speech, or unsolicited advertising will lead to immediate chat banning.</li>
                        <li style="margin-bottom: 0.6rem;">Do not post personal phone numbers or confidential financial information in public doubt threads.</li>
                        <li style="margin-bottom: 0.6rem;"><strong>Copyright Takedowns (DMCA / Indian Copyright Act):</strong> If you believe any user-submitted question or content infringes your copyright, notify our Grievance Officer at <a href="mailto:info@edurain.in" style="color: var(--accent);">info@edurain.in</a> with copyright ownership evidence for prompt removal within 36 hours.</li>
                    </ul>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2.5rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">7. Statutory Grievance Redressal & Governing Law</h2>
                    <p style="margin-bottom: 1rem; font-size: 1.02rem;">
                        These Terms are governed by and construed under the laws of the Republic of India. In accordance with the Information Technology Act, 2000 and DPDP Act, 2023, the details of the designated <strong>Grievance Redressal Officer</strong> are:
                    </p>
                    <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 1.5rem;">
                        <p style="margin-bottom: 0.4rem;"><strong>Officer Name:</strong> Manoj Kumar</p>
                        <p style="margin-bottom: 0.4rem;"><strong>Designation:</strong> Grievance Redressal Officer, EduRain Private Limited</p>
                        <p style="margin-bottom: 0.4rem;"><strong>Email:</strong> <a href="mailto:info@edurain.in" style="color: var(--accent);">info@edurain.in</a></p>
                        <p style="margin-bottom: 0.4rem;"><strong>Registered Address:</strong> Sector 132, Urbtech, Expressway, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201304, India</p>
                        <p style="margin: 0; font-size: 0.95rem; color: #34d399;"><strong>Jurisdiction:</strong> The courts at Noida / Gautam Buddha Nagar, Uttar Pradesh shall have exclusive jurisdiction over any legal dispute.</p>
                    </div>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2.5rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">8. Contact Support</h2>
                    <ul style="margin-bottom: 1rem; padding-left: 1.5rem; font-size: 1.02rem; list-style-type: none;">
                        <li style="margin-bottom: 0.5rem;"><strong>Website:</strong> <a href="https://edurain.in" target="_blank" rel="noopener noreferrer" style="color: var(--accent);">https://edurain.in</a></li>
                        <li style="margin-bottom: 0.5rem;"><strong>Support Email:</strong> <a href="mailto:support@edurain.in" style="color: var(--accent);">support@edurain.in</a></li>
                        <li style="margin-bottom: 0.5rem;"><strong>Helpline:</strong> <a href="tel:+918796443910" style="color: var(--accent);">+91 8796443910</a> (Mon–Sat, 10:00 AM – 7:00 PM IST)</li>
                    </ul>

                </div>
            </div>
        </section>
    `;
}