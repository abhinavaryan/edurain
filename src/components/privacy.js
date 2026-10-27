export function renderPrivacy() {
    return `
        <section class="er-privacy-section fade-in-section visible" id="privacy" style="padding: 120px 5%; background: var(--bg-dark); color: var(--text-main); min-height: 100vh;">
            <div class="er-privacy-container" style="max-width: 1000px; margin: 0 auto;">
                <div class="er-privacy-header text-center" style="margin-bottom: 60px;">
                    <h1 class="text-gradient" style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; margin-bottom: 1rem; letter-spacing: -0.02em;">Privacy Policy</h1>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">Last Updated: October 27, 2026 | In Compliance with India DPDP Act 2026–2027, Google Play & Apple App Store Guidelines</p>
                </div>

                <div class="er-glass-card" style="padding: clamp(2rem, 4vw, 4rem); border-radius: 24px; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); line-height: 1.85; color: rgba(255, 255, 255, 0.88);">
                    
                    <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">
                        Welcome to <strong>EduRain</strong>. Please read this Privacy Policy carefully before accessing or using our website located at <strong><a href="https://edurain.in" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent);">https://edurain.in</a></strong> or the <strong>EduRain Mobile Application</strong> (collectively, the <strong>"Platform"</strong>).
                    </p>
                    
                    <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">
                        This Privacy Policy describes how <strong>EduRain Private Limited ("EduRain", "We", "Us", or "Our")</strong> collects, uses, processes, stores, and protects Your personal data and information when You visit, register, or use Our educational services, live classes, doubt solving, examinations, and applications.
                    </p>

                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid #38bdf8; padding: 1.25rem 1.5rem; margin-bottom: 2.5rem; border-radius: 8px;">
                        <p style="margin: 0; font-size: 1rem; color: #e0f2fe; line-height: 1.7;">
                            <strong>Regulatory Notice:</strong> This Privacy Policy is published in compliance with the <strong>Digital Personal Data Protection Act, 2023 / 2026–2027 (DPDP Act)</strong> of India, Rule 3(1) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the <strong>Google Play Developer Policy</strong>, and the <strong>Apple App Store Review Guidelines (Guideline 5.1.1 - Data Collection and Storage)</strong>.
                        </p>
                    </div>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <!-- SECTION 1 -->
                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;">1. Information We Collect</h2>
                    <p style="margin-bottom: 1rem;">To deliver our academic coaching, live lectures, practice tests, and mentorship services, We collect the following categories of information:</p>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 1.8rem; margin-bottom: 1rem; font-weight: 600;">1.1 Personal Identification & Profile Data</h3>
                    <ul style="list-style-type: none; padding-left: 0; margin-bottom: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.75rem;">
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Full Name of Student & Parent</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Mobile / WhatsApp Phone Number</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Email Address</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Date of Birth & Gender</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Academic Grade / Class (Class 6th–12th, Dropper)</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Target Exam (IIT-JEE, NEET, Foundation)</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> School / Institution Name & Board (CBSE/ICSE/State)</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> City, State & Residential Address</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Profile Photograph (Voluntary)</li>
                    </ul>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 1.8rem; margin-bottom: 1rem; font-weight: 600;">1.2 Location Information</h3>
                    <p style="margin-bottom: 1rem;">
                        We collect approximate location data (derived from Your IP address, network carrier, or user-selected state/city).
                    </p>
                    <ul style="list-style-type: disc; padding-left: 24px; margin-bottom: 1.5rem; color: rgba(255,255,255,0.8);">
                        <li><strong>Purpose:</strong> To connect students to the nearest regional CloudFront/CDN streaming server (Delhi/Mumbai) for low-latency live classes, schedule batch lectures according to Indian Standard Time (IST), and calculate applicable state GST for course purchases.</li>
                        <li><strong>Background Location:</strong> EduRain does <strong>NOT</strong> track or access precise GPS location in the background.</li>
                    </ul>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 1.8rem; margin-bottom: 1rem; font-weight: 600;">1.3 Mobile App & Hardware Device Permissions</h3>
                    <p style="margin-bottom: 1rem;">
                        In compliance with Google Play Store & Apple App Store privacy policies, EduRain requests explicit, runtime permissions strictly when required for specific educational features:
                    </p>
                    
                    <div style="display: grid; gap: 1.25rem; margin-bottom: 2rem;">
                        <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                            <h4 style="color: #60a5fa; font-size: 1.15rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-camera"></i> Camera Permission
                            </h4>
                            <p style="margin: 0; font-size: 0.98rem; color: rgba(255,255,255,0.85);">
                                <strong>Why We Ask:</strong> Required only when You choose to scan handwritten homework/doubt questions, capture answer sheets during online practice exams, or upload a profile picture. The camera is <strong>NEVER</strong> accessed without Your explicit manual action and is never used in the background.
                            </p>
                        </div>

                        <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                            <h4 style="color: #34d399; font-size: 1.15rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-microphone"></i> Microphone Permission
                            </h4>
                            <p style="margin: 0; font-size: 0.98rem; color: rgba(255,255,255,0.85);">
                                <strong>Why We Ask:</strong> Required only when You actively participate in interactive two-way live doubt sessions, verbal Q&A with master teachers, or voice-based doubt queries. The microphone is <strong>NEVER</strong> recorded outside of an active interactive session initiated by You.
                            </p>
                        </div>

                        <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                            <h4 style="color: #f59e0b; font-size: 1.15rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-images"></i> Photos, Storage & Media Files
                            </h4>
                            <p style="margin: 0; font-size: 0.98rem; color: rgba(255,255,255,0.85);">
                                <strong>Why We Ask:</strong> Required strictly to allow You to select assignment photos from Your gallery, upload test solutions, and cache offline study PDF materials for review when internet bandwidth is limited.
                            </p>
                        </div>

                        <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                            <h4 style="color: #a855f7; font-size: 1.15rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
                                <i class="fas fa-bell"></i> Push Notifications
                            </h4>
                            <p style="margin: 0; font-size: 0.98rem; color: rgba(255,255,255,0.85);">
                                <strong>Why We Ask:</strong> Used to alert students about upcoming live classes (15 minutes prior), new study modules, test results, doubt answers, and critical academic announcements. You can toggle notifications off at any time in device settings.
                            </p>
                        </div>
                    </div>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 1.8rem; margin-bottom: 1rem; font-weight: 600;">1.4 Academic Usage & Performance Records</h3>
                    <p style="margin-bottom: 1.5rem;">
                        To provide analytics to students and parents, We record course progress, video lecture watch duration, mock test marks, rank percentile, attendance in live classes, and mentor doubt interaction logs.
                    </p>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 1.8rem; margin-bottom: 1rem; font-weight: 600;">1.5 Technical Telemetry & Crash Reports</h3>
                    <p style="margin-bottom: 2rem;">
                        We automatically collect device model, operating system version, browser user-agent, network type (Wi-Fi/4G/5G), and diagnostic crash logs via secure services (Sentry / Firebase Crashlytics) to fix technical bugs and optimize streaming performance on budget smartphones.
                    </p>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <!-- SECTION 2 -->
                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;">2. How We Use Your Information (Lawful Purpose)</h2>
                    <p style="margin-bottom: 1rem;">Under the DPDP Act and consumer protection regulations, We process personal data solely for legitimate educational purposes:</p>
                    <ul style="list-style-type: none; padding-left: 0; margin-bottom: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.75rem;">
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Authenticating student logins & protecting accounts</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Conducting interactive live classes & video streaming</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Evaluating test series, assignments & generating report cards</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> One-on-one doubt clearing with faculty</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Processing course enrollment fee payments securely</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Sending SMS/WhatsApp alerts for class timings & exam schedules</li>
                        <li><i class="fas fa-check-circle" style="color: var(--accent); margin-right: 10px;"></i> Complying with statutory taxation, accounting, and legal rules</li>
                    </ul>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <!-- SECTION 3 -->
                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;">3. Sharing & Disclosure of Information</h2>
                    <p style="margin-bottom: 1.5rem;">
                        <strong>We never sell, rent, or trade Your personal data to third parties for advertising or commercial marketing.</strong> Data is shared strictly on a need-to-know basis with trusted infrastructure sub-processors under legally binding confidentiality agreements:
                    </p>

                    <div style="display: grid; gap: 1.25rem; margin-bottom: 2rem;">
                        <div style="background: rgba(255,255,255,0.03); padding: 1.25rem 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                            <h4 style="color: var(--accent); margin-bottom: 0.4rem; font-size: 1.1rem;">Cloud & Media Infrastructure (AWS & CloudFront)</h4>
                            <p style="margin: 0; font-size: 0.95rem; color: rgba(255,255,255,0.8);">
                                All course assets, notes, and profile pictures are stored securely in AWS S3 (ap-south-1 Mumbai) and served via Amazon CloudFront CDN under Origin Access Control.
                            </p>
                        </div>

                        <div style="background: rgba(255,255,255,0.03); padding: 1.25rem 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                            <h4 style="color: var(--accent); margin-bottom: 0.4rem; font-size: 1.1rem;">Secure Payment Processing (Razorpay / Certified Gateways)</h4>
                            <p style="margin: 0; font-size: 0.95rem; color: rgba(255,255,255,0.8);">
                                Course fees are processed directly by RBI-authorized payment aggregators (PCI-DSS Level 1 compliant). EduRain never sees or stores full credit card numbers, debit card PINs, or UPI passwords.
                            </p>
                        </div>

                        <div style="background: rgba(255,255,255,0.03); padding: 1.25rem 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                            <h4 style="color: var(--accent); margin-bottom: 0.4rem; font-size: 1.1rem;">SMS & WhatsApp Communications</h4>
                            <p style="margin: 0; font-size: 0.95rem; color: rgba(255,255,255,0.8);">
                                Transactional alerts, OTPs, and lecture schedules are delivered via enterprise telecom aggregators strictly under TRAI DLT commercial regulations.
                            </p>
                        </div>

                        <div style="background: rgba(255,255,255,0.03); padding: 1.25rem 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                            <h4 style="color: var(--accent); margin-bottom: 0.4rem; font-size: 1.1rem;">Legal & Law Enforcement Authorities</h4>
                            <p style="margin: 0; font-size: 0.95rem; color: rgba(255,255,255,0.8);">
                                We may disclose information where required by court summons, law enforcement agencies, or statutory regulatory bodies under applicable Indian law.
                            </p>
                        </div>
                    </div>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <!-- SECTION 4 -->
                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;">4. Children’s Privacy & Parental Consent (&lt; 18 Years)</h2>
                    <p style="margin-bottom: 1.5rem;">
                        EduRain caters to school-age students and exam aspirants, many of whom are below the age of 18.
                    </p>
                    <ul style="list-style-type: disc; padding-left: 24px; margin-bottom: 2rem; color: rgba(255,255,255,0.8);">
                        <li style="margin-bottom: 0.75rem;"><strong>Mandatory Parental Consent:</strong> Accounts for minor students under 18 years of age must be created with the knowledge and verified consent of a parent or legal guardian.</li>
                        <li style="margin-bottom: 0.75rem;"><strong>No Behavioral Advertising or Profiling:</strong> In strict alignment with the DPDP Act 2023, EduRain prohibits any behavioral tracking, profiling, or targeted commercial advertising directed toward children.</li>
                        <li style="margin-bottom: 0.75rem;"><strong>Safe Learning Environment:</strong> All doubt forums, classroom chat messages, and educator sessions are monitored to ensure a safe, constructive academic setting free from harassment or abusive behavior.</li>
                    </ul>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <!-- SECTION 5 -->
                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;">5. Account & Data Deletion (Apple App Store & DPDP Compliant)</h2>
                    <p style="margin-bottom: 1.5rem;">
                        Under <strong>Apple App Store Review Guideline 5.1.1(v)</strong> and the <strong>DPDP Act Right to Erasure</strong>, every student has the permanent right to delete their account and associated personal data at any time.
                    </p>

                    <div style="background: rgba(239, 68, 68, 0.08); border-left: 4px solid #ef4444; padding: 1.5rem; margin-bottom: 2rem; border-radius: 12px;">
                        <h4 style="color: #fca5a5; font-size: 1.2rem; margin-bottom: 0.75rem; font-weight: 700;">
                            <i class="fas fa-trash-alt" style="margin-right: 8px;"></i> How to Delete Your Account and Data:
                        </h4>
                        <ol style="padding-left: 20px; margin-bottom: 1rem; color: #fee2e2; font-size: 1rem; line-height: 1.7;">
                            <li style="margin-bottom: 0.5rem;"><strong>In-App Self-Service (Mobile App):</strong> Open the EduRain App &rarr; Navigate to <strong>Profile &rarr; Tap "Delete Account & Data"</strong> &rarr; Confirm in the confirmation dialog.</li>
                            <li style="margin-bottom: 0.5rem;"><strong>Via Email Request:</strong> Send an email from Your registered email address to <strong><a href="mailto:support@edurain.in" style="color: #60a5fa; text-decoration: underline;">support@edurain.in</a></strong> or <strong><a href="mailto:info@edurain.in" style="color: #60a5fa; text-decoration: underline;">info@edurain.in</a></strong> with the subject line <em>"Account Deletion Request"</em>.</li>
                        </ol>
                        <p style="margin: 0; font-size: 0.95rem; color: #fecaca;">
                            <strong>Data Treatment upon Deletion:</strong> Your personal profile, uploaded images, device tokens, and active sessions are permanently deleted within 30 days. Financial transaction logs are archived in encrypted cold storage strictly as required under Indian taxation and accounting laws.
                        </p>
                    </div>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <!-- SECTION 6 -->
                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;">6. Data Security & Storage Standards</h2>
                    <ul style="list-style-type: disc; padding-left: 24px; margin-bottom: 2rem; color: rgba(255,255,255,0.8);">
                        <li style="margin-bottom: 0.5rem;"><strong>Encryption:</strong> All data transmitted between Your browser/app and our servers is encrypted using 256-bit TLS 1.3 / SSL. Storage is encrypted at rest using AES-256.</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Access Control:</strong> Backend databases and S3 storage are isolated behind VPC firewalls, AWS RDS Proxies, and Origin Access Control (OAC).</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Security Incident Reporting:</strong> In compliance with CERT-In directions and the DPDP Act, any confirmed security vulnerability or incident will be reported to statutory authorities and affected users within required timeframes.</li>
                    </ul>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <!-- SECTION 7 -->
                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;">7. Statutory Grievance Redressal Officer (DPDP Act India)</h2>
                    <p style="margin-bottom: 1.5rem;">
                        In accordance with the Information Technology Act 2000, IT Rules 2021, and the Digital Personal Data Protection Act 2023/2026, EduRain has designated a <strong>Grievance Redressal Officer</strong> to address any privacy, consent, or data concerns:
                    </p>

                    <div style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 2.5rem;">
                        <h3 style="color: var(--accent); font-size: 1.3rem; margin-bottom: 1rem; font-weight: 700;">Grievance Redressal Officer</h3>
                        <p style="margin-bottom: 0.6rem;"><strong>Officer Name:</strong> Manoj Kumar</p>
                        <p style="margin-bottom: 0.6rem;"><strong>Designation:</strong> Head of Compliance & Grievance Officer, EduRain Private Limited</p>
                        <p style="margin-bottom: 0.6rem;">
                            <strong>Official Grievance Email:</strong> 
                            <a href="mailto:info@edurain.in" style="color: #60a5fa; text-decoration: none; font-weight: 600;">info@edurain.in</a>
                        </p>
                        <p style="margin-bottom: 0.6rem;">
                            <strong>General Support Email:</strong> 
                            <a href="mailto:support@edurain.in" style="color: #60a5fa; text-decoration: none;">support@edurain.in</a>
                        </p>
                        <p style="margin-bottom: 0.6rem;">
                            <strong>Registered Office Address:</strong> 
                            EduRain Private Limited, Sector 132, Urbtech, Expressway, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201304, India
                        </p>
                        <p style="margin-bottom: 0; font-size: 0.95rem; color: #34d399; font-weight: 500;">
                            <i class="fas fa-clock" style="margin-right: 6px;"></i> Statutory SLA: Acknowledgment within 24–48 hours, resolution within 15–30 calendar days.
                        </p>
                    </div>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <!-- SECTION 8 -->
                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;">8. Contact Us</h2>
                    <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 12px; text-align: center;">
                        <p style="margin-bottom: 0.5rem;"><strong>EduRain Private Limited</strong></p>
                        <p style="margin-bottom: 0.5rem;"><i class="fas fa-globe" style="color: var(--accent); margin-right: 8px;"></i> <a href="https://edurain.in" target="_blank" rel="noopener noreferrer" style="color: var(--text-main); text-decoration: none;">https://edurain.in</a></p>
                        <p style="margin-bottom: 0.5rem;"><i class="fas fa-phone" style="color: var(--accent); margin-right: 8px;"></i> <a href="tel:+918796443910" style="color: var(--text-main); text-decoration: none;">+91 8796443910</a> | <a href="https://wa.me/918796443910" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none;"><i class="fab fa-whatsapp"></i> WhatsApp</a></p>
                        <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem;">Sector 132, Urbtech, Expressway, Noida, UP, India</p>
                    </div>

                </div>
            </div>
        </section>
    `;
}
