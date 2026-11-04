// Privacy Policy for the whole EduRain Platform: website, web app and the Android/iOS apps.
// The Android app opens this page (https://edurain.in/privacy) for its privacy policy.

const H2 = 'color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;';
const H3 = 'color: var(--accent); font-size: 1.3rem; margin-top: 1.8rem; margin-bottom: 1rem; font-weight: 600;';
const P = 'margin-bottom: 1rem;';
const UL = 'list-style-type: disc; padding-left: 24px; margin-bottom: 1.5rem; color: rgba(255,255,255,0.85);';
const LI = 'margin-bottom: 0.5rem;';
const HR = '<hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">';
const CARD = 'background: rgba(255,255,255,0.03); padding: 1.25rem 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);';
const CARD_H = 'color: var(--accent); margin-bottom: 0.4rem; font-size: 1.1rem;';
const CARD_P = 'margin: 0; font-size: 0.95rem; color: rgba(255,255,255,0.8);';
const LINK = 'color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent);';

const list = (items) => `<ul style="${UL}">${items.map((item) => `<li style="${LI}">${item}</li>`).join('')}</ul>`;
const card = (title, body) => `<div style="${CARD}"><h4 style="${CARD_H}">${title}</h4><p style="${CARD_P}">${body}</p></div>`;

export function renderPrivacy() {
    return `
        <section class="er-privacy-section fade-in-section visible" id="privacy" style="padding: 120px 5%; background: var(--bg-dark); color: var(--text-main); min-height: 100vh;">
            <div class="er-privacy-container" style="max-width: 1000px; margin: 0 auto;">
                <div class="er-privacy-header text-center" style="margin-bottom: 60px;">
                    <h1 class="text-gradient" style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; margin-bottom: 1rem; letter-spacing: -0.02em;">Privacy Policy</h1>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">Last Updated: November 4, 2026 | Applies to the EduRain website, web app and the EduRain apps for Android and iOS</p>
                </div>

                <div class="er-glass-card" style="padding: clamp(2rem, 4vw, 4rem); border-radius: 24px; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); line-height: 1.85; color: rgba(255, 255, 255, 0.88);">

                    <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">
                        Please read this Privacy Policy before using the services of <strong>EduRain Private Limited</strong> ("EduRain", "We", "Us" or "Our"). It applies to our website <a href="https://edurain.in" target="_blank" rel="noopener noreferrer" style="${LINK}">https://edurain.in</a>, the EduRain web app at <a href="https://www.edurain.in/webapp" target="_blank" rel="noopener noreferrer" style="${LINK}">www.edurain.in/webapp</a>, and the <strong>EduRain mobile app</strong> on Google Play and the Apple App Store. Together these are called the <strong>"Platform"</strong>. The same batches, study material, tests and account work on all of them.
                    </p>
                    <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">
                        By creating an account, using the Platform or giving Us Your information, You agree that We may collect and use it as described here. If You do not agree, please do not use the Platform. We may update this Policy from time to time; the date at the top shows the latest version, and for important changes We will also tell You in the app or by email.
                    </p>

                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid #38bdf8; padding: 1.25rem 1.5rem; margin-bottom: 2.5rem; border-radius: 8px;">
                        <p style="margin: 0; font-size: 1rem; color: #e0f2fe; line-height: 1.7;">
                            <strong>In short:</strong> We collect what We need to run Your classes, tests and account. We do not sell Your personal data, We do not show third-party ads, and the app does not use advertising SDKs or Your advertising ID. This Policy follows the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000 and the rules made under them.
                        </p>
                    </div>

                    ${HR}

                    <h2 style="${H2}">1. Information We Collect</h2>

                    <h3 style="${H3}">1.1 Information You give Us</h3>
                    ${list([
                        '<strong>Account details:</strong> name, mobile number (verified by OTP), email address and, if You sign in with one, a password. Passwords are handled by Google Firebase Authentication; EduRain never stores Your password in readable form.',
                        '<strong>Profile details:</strong> class or target exam (for example IIT-JEE, NEET, Foundation, Class 6th–12th), gender, city, state, pincode, address and a profile photo. Everything except name, mobile number and class/exam is optional.',
                        '<strong>What You send Us:</strong> doubts (text and any photo You attach), questions You type into EduAI Tutor, answers You report, feedback, and messages You send through the contact form, email or WhatsApp.',
                    ])}

                    <h3 style="${H3}">1.2 Information collected when You use the Platform</h3>
                    ${list([
                        '<strong>Study activity:</strong> batches You are enrolled in, study material You open and how far You got, test answers, marks and rank, live class attendance, and mentorship sessions You book. Bookmarks and study history may also be saved on Your device.',
                        '<strong>Device and technical data:</strong> IP address, device and browser type, operating system, app version, time of each request and error messages, used to keep the service working and secure.',
                        '<strong>Notification token:</strong> if You allow notifications, a device token so We can send You alerts.',
                        '<strong>Cookies:</strong> our website and web app use cookies and similar browser storage. See section 3.',
                    ])}

                    <h3 style="${H3}">1.3 App permissions</h3>
                    <p style="${P}">The app asks for a permission only when You use the feature that needs it, and You can turn it off any time in Your phone settings:</p>
                    ${list([
                        '<strong>Camera:</strong> only when You choose to take a photo for a doubt or Your profile picture. It is never used in the background.',
                        '<strong>Photos:</strong> only when You pick a photo for a doubt or Your profile picture. On Android 13 and newer the system photo picker is used, so the app receives only the photo You pick.',
                        '<strong>Notifications:</strong> for live class reminders, new study material, test results, doubt answers and important announcements.',
                        'The app does <strong>not</strong> ask for Your location, microphone or contacts. Live classes and mentorship sessions run on Google Meet, which asks for its own permissions under Google\'s privacy policy.',
                    ])}

                    <h3 style="${H3}">1.4 Information You choose not to give</h3>
                    <p style="${P}">We mark which details are required. You may choose not to give any information, but without the required details (such as a verified mobile number) We cannot create Your account or provide that service. You can browse the public pages of our website without telling Us who You are.</p>

                    ${HR}

                    <h2 style="${H2}">2. How We Use Your Information</h2>
                    ${list([
                        'To create and secure Your account, verify Your mobile number and keep You signed in.',
                        'To give You the batches You are enrolled in: study material, live classes, tests, results, doubt answers, mentorship and EduAI Tutor.',
                        'To keep the records that Indian law requires.',
                        'To send You service messages by SMS, email or push notification (class timings, results and account updates).',
                        'To send You news about new batches and offers. You can opt out of these at any time (see section 9).',
                        'To answer Your questions and complaints and resolve disputes.',
                        'To find and fix errors, prevent fraud, misuse and repeated failed logins, and enforce our <a href="/terms" style="' + LINK + '">Terms & Conditions</a>.',
                        'To improve the Platform using combined statistics (for example, which material is opened most), which do not identify You.',
                    ])}

                    ${HR}

                    <h2 style="${H2}">3. Cookies and Similar Technologies</h2>
                    <p style="${P}">Cookies are small files that a website saves in Your browser. We also use similar browser storage (such as local storage). Our website and web app use them as follows:</p>
                    ${list([
                        '<strong>Essential:</strong> to keep You signed in, remember Your choices (such as Your class or exam) and protect the site from attacks and misuse. Without these, signing in and some features will not work.',
                        '<strong>Analytics:</strong> Google Analytics cookies (such as <code>_ga</code>) count visits and show which pages are used, so We can improve the website. They do not give Us Your name, email or mobile number.',
                        '<strong>Third-party cookies:</strong> pages that show content or services from other companies (for example Google) may let those companies set their own cookies. We do not control them; their own privacy policies apply.',
                        'We do <strong>not</strong> use advertising cookies, and We do not use cookies to show You ads.',
                    ])}
                    <p style="${P}"><strong>Your choice:</strong> You can block or delete cookies in Your browser settings at any time. You can also stop Google Analytics with Google\'s opt-out add-on: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style="${LINK}">tools.google.com/dlpage/gaoptout</a>. If You block essential cookies, You may not be able to stay signed in.</p>
                    <p style="${P}">The EduRain mobile app does not use cookies to track You. Pages opened inside the app may use the cookies they need to work.</p>

                    ${HR}

                    <h2 style="${H2}">4. Sharing Your Information</h2>
                    <p style="margin-bottom: 1.5rem;"><strong>We do not sell, rent or trade Your personal data.</strong> We share it only with the service providers below, only for the purpose stated, and they may use it only to provide their service to Us:</p>
                    <div style="display: grid; gap: 1.25rem; margin-bottom: 2rem;">
                        ${card('Hosting & delivery (Amazon Web Services, Bunny.net, Cloudflare)', 'Your account data is stored on Amazon Web Services in Mumbai (ap-south-1). Study material and profile photos are delivered through Amazon CloudFront and Bunny.net. Our web app is delivered and protected from attacks by Cloudflare.')}
                        ${card('OTP, SMS & email (MSG91)', 'Your mobile number and email address are shared with MSG91 to send OTPs and account messages, under TRAI DLT rules.')}
                        ${card('Sign-in, notifications & contact forms (Google Firebase, Expo)', 'Sign-in uses Google Firebase Authentication. Messages from our website contact form are stored in Google Firebase. Push notifications are delivered through Expo and Firebase Cloud Messaging using Your device token.')}
                        ${card('EduAI Tutor (Google Gemini API)', 'Questions You type into EduAI Tutor are sent to Google\'s Gemini API to generate an answer, without Your name, email or mobile number. Please do not type personal details into EduAI. Answers You report are saved so our team can review them.')}
                        ${card('Live classes & 1:1 mentor sessions (Google Meet)', 'Live classes and 1:1 mentor sessions are held on Google Meet. When You join, Google processes Your participation under its own privacy policy.')}
                        ${card('Website analytics (Google Analytics)', 'Our website uses Google Analytics to measure visits. Google receives technical data such as pages viewed, device and browser type, and an approximate location derived from the IP address.')}
                    </div>
                    <p style="${P}">We may also share information:</p>
                    ${list([
                        '<strong>When the law requires it:</strong> with courts, police, tax and other government authorities in response to a valid legal request, or when We believe in good faith it is needed to protect the rights, property or safety of EduRain, our students or the public.',
                        '<strong>If our business changes hands:</strong> if EduRain merges with, is acquired by, or transfers its business to another company, Your information may be transferred to it, and it must continue to protect Your information as this Policy says.',
                        '<strong>As combined statistics:</strong> figures that do not identify any student, for example the number of students in a batch.',
                    ])}

                    ${HR}

                    <h2 style="${H2}">5. Children's Privacy</h2>
                    <p style="${P}">Many of our students are under 18. Under the DPDP Act, a parent or legal guardian must agree before a student under 18 creates an account or buys a batch; by doing so, the student confirms that their parent or guardian has agreed. A parent or guardian can contact us at <a href="mailto:support@edurain.in" style="${LINK}">support@edurain.in</a> to see, correct or delete their child's data.</p>
                    <p style="${P}">We do not track children's behaviour for advertising, do not profile them for ads and do not show them targeted advertising.</p>

                    ${HR}

                    <h2 style="${H2}">6. How Long We Keep Your Information</h2>
                    ${list([
                        'Account, profile and study data: while Your account is active. After You delete Your account, it is deleted within 30 days.',
                        'Records the law requires Us to keep (for example, for tax): as long as the law requires, even after the account is deleted.',
                        'Server logs and security records: only as long as needed for security, fixing problems and legal requirements.',
                        'Contact form messages and support emails: as long as needed to answer You, or until You ask Us to delete them.',
                    ])}

                    ${HR}

                    <h2 id="delete-account" style="${H2}">7. Delete Your Account and Data</h2>
                    <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.25); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                        <p style="margin-bottom: 0.75rem;">You can delete Your EduRain account and personal data at any time, in either of these ways:</p>
                        <ol style="padding-left: 22px; margin-bottom: 0.75rem;">
                            <li style="${LI}"><strong>In the app:</strong> open the EduRain app &rarr; Profile &rarr; <strong>Delete Account & Data</strong> &rarr; confirm.</li>
                            <li style="${LI}"><strong>By email (no app needed):</strong> email <a href="mailto:support@edurain.in?subject=Account%20Deletion%20Request" style="${LINK}">support@edurain.in</a> from Your registered email address, or mention Your registered mobile number, with the subject <strong>"Account Deletion Request"</strong>.</li>
                        </ol>
                        <p style="margin: 0; font-size: 0.95rem; color: #fecaca;">Your profile, photos, doubts, study history and device tokens are deleted within 30 days. Records the law requires Us to keep are kept only as long as the law requires. Deleting Your account ends Your access to Your batches.</p>
                    </div>

                    ${HR}

                    <h2 style="${H2}">8. Keeping Your Information Safe</h2>
                    ${list([
                        'All data between Your device and our servers is sent over encrypted connections (HTTPS/TLS).',
                        'Your data is stored on secured servers, and only authorised EduRain team members who need it for their work can access it.',
                        'If a data breach affects You, We will inform You and the authorities as the DPDP Act and CERT-In rules require.',
                        '<strong>Your part:</strong> keep Your OTP and password secret and do not let anyone else use Your account. If You think someone else has used it, email <a href="mailto:support@edurain.in" style="' + LINK + '">support@edurain.in</a> right away. You are responsible for what is done through Your account until You tell Us.',
                    ])}

                    ${HR}

                    <h2 style="${H2}">9. Your Rights and Choices</h2>
                    ${list([
                        '<strong>See and correct:</strong> You can see and edit most of Your details in Profile, or ask Us for a summary of the personal data We hold about You.',
                        '<strong>Delete:</strong> see section 7.',
                        '<strong>Withdraw consent:</strong> You can withdraw Your consent at any time by deleting Your account or emailing Us. This does not affect what was done before You withdrew it.',
                        '<strong>Nominate:</strong> You can nominate a person to use these rights for You if You die or become unable to.',
                        '<strong>Stop promotional messages:</strong> email <a href="mailto:support@edurain.in" style="' + LINK + '">support@edurain.in</a> to stop offers and news. You will still get service messages about Your account and classes. You can turn off push notifications in Your phone settings.',
                        '<strong>Complain:</strong> contact our Grievance Officer (section 10). If You are not satisfied with the answer, You may complain to the Data Protection Board of India.',
                    ])}

                    ${HR}

                    <h2 style="${H2}">10. Grievance Officer</h2>
                    <div style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 2.5rem;">
                        <p style="margin-bottom: 0.6rem;"><strong>Name:</strong> Manoj Kumar</p>
                        <p style="margin-bottom: 0.6rem;"><strong>Designation:</strong> Head of Compliance & Grievance Officer, EduRain Private Limited</p>
                        <p style="margin-bottom: 0.6rem;"><strong>Email:</strong> <a href="mailto:info@edurain.in" style="color: #60a5fa; text-decoration: none; font-weight: 600;">info@edurain.in</a></p>
                        <p style="margin-bottom: 0.6rem;"><strong>Address:</strong> EduRain Private Limited, Sector 132, Urbtech, Expressway, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201304, India</p>
                        <p style="margin-bottom: 0; font-size: 0.95rem; color: #34d399; font-weight: 500;"><i class="fas fa-clock" style="margin-right: 6px;"></i> We acknowledge complaints within 48 hours and aim to resolve them within 15 days.</p>
                    </div>

                    ${HR}

                    <h2 style="${H2}">11. Contact Us</h2>
                    <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 12px; text-align: center;">
                        <p style="margin-bottom: 0.5rem;"><strong>EduRain Private Limited</strong></p>
                        <p style="margin-bottom: 0.5rem;"><i class="fas fa-envelope" style="color: var(--accent); margin-right: 8px;"></i> <a href="mailto:support@edurain.in" style="color: var(--text-main); text-decoration: none;">support@edurain.in</a></p>
                        <p style="margin-bottom: 0.5rem;"><i class="fas fa-globe" style="color: var(--accent); margin-right: 8px;"></i> <a href="https://edurain.in" target="_blank" rel="noopener noreferrer" style="color: var(--text-main); text-decoration: none;">https://edurain.in</a></p>
                        <p style="margin-bottom: 0.5rem;"><i class="fas fa-phone" style="color: var(--accent); margin-right: 8px;"></i> <a href="tel:+918796443910" style="color: var(--text-main); text-decoration: none;">+91 8796443910</a> | <a href="https://wa.me/918796443910" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none;"><i class="fab fa-whatsapp"></i> WhatsApp</a></p>
                        <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem;">Sector 132, Urbtech, Expressway, Noida, UP, India</p>
                    </div>

                    <p style="margin-top: 2rem; font-size: 0.95rem; color: var(--text-muted);">This Policy is read together with our <a href="/terms" style="${LINK}">Terms & Conditions</a> and <a href="/refund-policy" style="${LINK}">Refund Policy</a>.</p>

                </div>
            </div>
        </section>
    `;
}
