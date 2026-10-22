const fs = require('fs');
const path = require('path');
const https = require('https');

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

const coursesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src', 'data', 'courses.json'), 'utf8')
);

const faqsData = {
  ALL: [
    { question: "What courses does EduRain offer?", answer: "Covers Class 6–12 academics, Foundation courses, and NEET/IIT-JEE exam preparation." },
    { question: "Are practice tests and mock exams included in the course?", answer: "Yes, mock tests and weekly tests are available, helping NEET/IIT-JEE and board exam aspirants regularly track their preparation level and performance." },
    { question: "Are the courses live or recorded?", answer: "Yes, both are available. Students get live classes as well as recorded lectures, so they can learn in real-time or revise anytime at their own pace." },
    { question: "Can I access study material and video lectures on mobile?", answer: "Yes, both mobile apps and websites are available. Students can study from the EduRain app or directly from the website, whichever is convenient." },
    { question: "Is there a free demo class before purchasing?", answer: "Yes, EduRain offers a free demo class so students can experience the teaching style and course quality before enrolling." },
    { question: "What support is available if I have doubts during the course?", answer: "We provide dedicated doubt-clearing sessions, personal mentor support, and regular teacher interaction to ensure all your questions are answered." }
  ],
  JEE: [
    { question: "What is covered in the IIT-JEE course Mains, Advanced, or both?", answer: "We tell you exactly whether the course prepares you for JEE Mains, JEE Advanced, or both, so you know what you're signing up for." },
    { question: "Which subjects and topics are included in the IIT-JEE syllabus here?", answer: "The course covers Physics, Chemistry, and Maths as per the latest JEE syllabus, so nothing important gets missed." },
    { question: "Are live classes and recorded lectures both available for IIT-JEE prep?", answer: "Yes, you get live classes to learn in real-time, plus recorded lectures so you can revise anytime at your own pace." },
    { question: "Are mock tests and weekly tests included for JEE preparation?", answer: "Yes, regular mock tests and weekly tests are part of the course, helping you track your rank and preparation level as you go." },
    { question: "Who are the faculty teaching the IIT-JEE course?", answer: "Meet the experienced teachers behind the course because for an exam like JEE, knowing who's teaching you matters." },
    { question: "Is there a free demo class before enrolling in the IIT-JEE course?", answer: "Yes, EduRain offers a free demo class for IIT-JEE preparation so students can experience the teaching style and course quality before enrolling." }
  ],
  NEET: [
    { question: "What subjects are covered in the NEET course?", answer: "Confirms coverage of Physics, Chemistry, and Biology as per the latest NEET syllabus." },
    { question: "Are live classes and recorded lectures both available for NEET prep?", answer: "Yes, both are available. Students get live classes to learn in real-time, plus recorded lectures so they can revise anytime at their own pace." },
    { question: "Are mock tests and weekly tests included for NEET preparation?", answer: "Yes, regular mock tests and weekly tests are part of the course, helping students track their score and preparation level as they go." },
    { question: "Who are the faculty teaching the NEET course?", answer: "Addresses trust students want to know teacher experience and qualifications for a high-stakes exam such as NEET." },
    { question: "Is there a free demo class before enrolling in the NEET course?", answer: "Yes, available students can attend a free demo class first and decide if the teaching style works for them before enrolling." }
  ],
  FOUNDATION: [
    { question: "What is a Foundation course and who is it for?", answer: "The Foundation course is for students in Class 6th to 10th. It helps you understand your subjects clearly and also prepares you early for big exams such as NEET and IIT-JEE in the future." },
    { question: "Which subjects are covered in the Foundation course?", answer: "You will study Maths, Science, and English in this course. These subjects help you build a strong base for higher classes." },
    { question: "Are live classes and recorded lectures both available in the Foundation course?", answer: "Yes! You can join live classes with your teacher, and you also get recorded videos. So if you miss a class or want to revise, you can watch it again anytime." },
    { question: "Are mock tests and weekly tests included in the Foundation course?", answer: "Yes, you get weekly tests and mock tests. This helps you check how much you have learned and where you need more practice." },
    { question: "Will this course help me with my school exams too?", answer: "Yes! Along with preparing you for future big exams, this course also helps you do well in your school exams." },
    { question: "Can I try a free demo class before joining?", answer: "Yes, you can attend a free demo class first. This way, you can see how the teacher explains things before you join the full course." }
  ]
};

const routesMeta = {
  'courses': {
    title: 'Explore Our All Courses – IIT JEE, NEET & Foundation (Class 6-10)',
    ogTitle: 'All Online Coaching Courses – IIT JEE, NEET & Foundation | EduRain',
    desc: 'Explore IIT JEE, NEET & Foundation courses for Class 6-10 with expert faculty, structured curriculum & proven results. Take the first step toward success.',
    canonical: 'https://www.edurain.in/courses/'
  },
  'blogs': {
    title: 'IIT JEE, NEET & Foundation Blogs | EduRain',
    ogTitle: 'IIT JEE, NEET & Class 6-10 Preparation Guides & Blogs | EduRain',
    desc: 'Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides.',
    canonical: 'https://www.edurain.in/blogs/'
  },
  'courses/iit-jee': {
    title: 'Best IIT JEE 2027 Online Coaching for JEE Main & Advanced | EduRain',
    ogTitle: 'Best IIT JEE Online Coaching 2026-2027 | EduRain',
    desc: 'Crack IIT JEE 2027 with EduRain: live classes, expert faculty, and structured material for complete JEE Main & Advanced exam preparation.',
    canonical: 'https://www.edurain.in/courses/iit-jee/'
  },
  'courses/neet': {
    title: 'NEET 2027-28 Complete Online Preparation with EduRain',
    ogTitle: 'NEET 2027-2028 Online Coaching & Complete Preparation | EduRain',
    desc: 'Start your NEET 2027-28 online preparation with EduRain: live classes, expert faculty, and structured NCERT-based material with regular mock tests.',
    canonical: 'https://www.edurain.in/courses/neet/'
  },
  'courses/foundation': {
    title: 'Best Online Coaching for Classes 6 to 10 | Foundation (2026-2027)',
    ogTitle: 'Classes 6 to 10 Online Coaching (Foundation 2026-2027) | EduRain',
    desc: 'Live online classes for Class 6 to 10 with expert-led Math, Science & more: building a strong IIT JEE & NEET foundation. Interactive learning, real results.',
    canonical: 'https://www.edurain.in/courses/foundation/'
  },
  'about-us': {
    title: "About Us | EduRain's Mission to Make Learning Accessible",
    ogTitle: 'About EduRain – Democratizing Master Coaching Across India',
    desc: "At EduRain, our mission is to make quality education accessible for every student from Class 6-10 foundation to IIT-JEE & NEET success. Know our story.",
    canonical: 'https://www.edurain.in/about-us/'
  },
  'contact-us': {
    title: "Contact Us | Get in Touch with EduRain",
    ogTitle: 'Contact EduRain – Admissions & Student Support',
    desc: "Have questions about our courses for Class 6-10, IIT-JEE or NEET? Contact EduRain's team for admissions support, course details or a free demo class.",
    canonical: 'https://www.edurain.in/contact-us/'
  },
  'privacy': {
    title: "Privacy Policy - EduRain",
    ogTitle: "Privacy Policy - EduRain",
    desc: "Privacy policy of EduRain",
    canonical: 'https://www.edurain.in/privacy/'
  },
  'terms': {
    title: "Terms and Conditions - EduRain",
    ogTitle: "Terms and Conditions - EduRain",
    desc: "Terms and conditions of use for EduRain",
    canonical: 'https://www.edurain.in/terms/'
  },
  'refund-policy': {
    title: "Refund/Cancellation Policy - EduRain",
    ogTitle: "Refund & Cancellation Policy - EduRain",
    desc: "Refund and cancellation policy for EduRain",
    canonical: 'https://www.edurain.in/refund-policy/'
  },
  'sitemap': {
    title: "Sitemap - EduRain",
    ogTitle: "Sitemap - EduRain",
    desc: "Sitemap for EduRain website and all published resources",
    canonical: 'https://www.edurain.in/sitemap/'
  }
};

function fetchBlogs() {
  return new Promise((resolve, reject) => {
    https.get('https://firestore.googleapis.com/v1/projects/edurain-pvt/databases/(default)/documents/blogs', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.documents || []);
        } catch(e) {
          reject(e);
        }
      });
    }).on('error', err => reject(err));
  });
}

// -------------------------------------------------------------
// Prerendering HTML Builders (SSG)
// -------------------------------------------------------------

function renderPrerenderNavbar(activeRoute = '') {
  const isCourses = activeRoute.startsWith('courses');
  const isBlogs = activeRoute.startsWith('blogs');
  const isAbout = activeRoute === 'about-us';
  const isContact = activeRoute === 'contact-us';

  return `
    <nav class="navbar" id="main-nav">
      <div class="navbar-container">
        <div class="logo">
          <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 4px;">
            <img src="/images/logo.webp" fetchpriority="high" alt="EduRain Logo" width="65" height="55" style="height: 55px; width: auto; max-width: 65px; object-fit: contain;">
            <div style="display: flex; flex-direction: column; line-height: 1.2; align-items: center;">
              <div>
                <span class="text-white">Edu</span><span class="text-accent">Rain</span>
              </div>
              <span style="font-size: 0.45rem; color: #a7f3d0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; margin-left: -4px;">Victory Starts Here</span>
            </div>
          </a>
        </div>
        <div class="nav-links">
          <a href="/" class="nav-link">Home</a>
          <a href="/courses" class="nav-link ${isCourses ? 'active' : ''}">Our Courses</a>
          <a href="/blogs" class="nav-link ${isBlogs ? 'active' : ''}">Blogs</a>
          <a href="/about-us" class="nav-link ${isAbout ? 'active' : ''}">About Us</a>
          <a href="/contact-us" class="nav-link ${isContact ? 'active' : ''}">Contact Us</a>
        </div>
        <div class="auth-btn-area"></div>
        <button class="hamburger" id="hamburger-btn" aria-label="Open Mobile Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-menu-overlay" id="mobile-menu-overlay"></div>
    <div class="mobile-menu" id="mobile-menu">
      <div class="mobile-menu-header">
        <div class="logo">
          <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
            <img src="/images/logo.webp" alt="EduRain Logo" width="50" height="40" style="height: 40px; width: auto; max-width: 50px; object-fit: contain;">
            <div style="display: flex; flex-direction: column; line-height: 1.2;">
              <div><span class="text-white">Edu</span><span class="text-accent">Rain</span></div>
            </div>
          </a>
        </div>
        <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Close Mobile Menu">&times;</button>
      </div>
      <div class="mobile-menu-body">
        <a href="/" class="nav-link">Home</a>
        <a href="/courses" class="nav-link ${isCourses ? 'active' : ''}">Our Courses</a>
        <a href="/blogs" class="nav-link ${isBlogs ? 'active' : ''}">Blogs</a>
        <a href="/about-us" class="nav-link ${isAbout ? 'active' : ''}">About Us</a>
        <a href="/contact-us" class="nav-link ${isContact ? 'active' : ''}">Contact Us</a>
      </div>
      <div class="mobile-menu-footer auth-btn-area"></div>
    </div>
  `;
}

function renderPrerenderFooter() {
  return `
    <div class="footer-separator"></div>
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="logo" style="margin-bottom: 1rem;">
            <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 4px;">
              <img loading="lazy" src="/images/logo.webp" alt="EduRain Logo" width="65" height="55" style="height: 55px; width: auto; max-width: 65px; object-fit: contain;">
              <div style="display: flex; flex-direction: column; line-height: 1.2; align-items: center;">
                <div><span class="text-white">Edu</span><span class="text-accent">Rain</span></div>
                <span style="font-size: 0.45rem; color: #a7f3d0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; margin-left: -4px;">Victory Starts Here</span>
              </div>
            </a>
          </div>
          <p>Empowering learners across India with accessible,<br>high-quality education and expert guidance.</p>
          <div class="social-icons">
            <a href="https://www.instagram.com/edurain_official/" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/edurainofficial/" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/@Eduraininstitute" target="_blank" rel="noopener noreferrer" class="social-icon" title="YouTube" aria-label="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h2 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Quick Links</h2>
          <ul class="footer-links">
            <li><a href="/courses/iit-jee">&gt; JEE Courses</a></li>
            <li><a href="/courses/neet">&gt; NEET Courses</a></li>
            <li><a href="/courses/foundation">&gt; Foundation Courses</a></li>
            <li><a href="/blogs">&gt; Blogs</a></li>
            <li><a href="/about-us">&gt; About Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h2 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Contact</h2>
          <ul class="footer-links">
            <li><a href="mailto:contact@edurain.in">contact@edurain.in</a></li>
            <li><a href="tel:+918700201662">+91 8700201662</a></li>
            <li><span style="color: var(--text-muted); font-size: 0.9rem;">Dwarka Sector 7, New Delhi, 110075</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} EduRain Pvt. Ltd. All rights reserved. | <a href="/privacy" style="color: inherit;">Privacy</a> | <a href="/terms" style="color: inherit;">Terms</a> | <a href="/refund-policy" style="color: inherit;">Refund Policy</a></p>
      </div>
    </footer>
  `;
}

function renderCourseCardsHtml(courses) {
  return courses.map(course => {
    const stars = '⭐'.repeat(Math.round(course.rating || 5));
    const studentCount = (course.students >= 1000)
      ? `${(course.students / 1000).toFixed(1)}K`
      : (course.students || 500);

    return `
      <div class="glass-card course-card fade-in-section visible" data-category="${course.category}" data-link="${course.link || '#'}">
        <div class="course-thumb">
          <a href="${course.link || '#'}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%;">
            <img loading="lazy" src="${course.thumbnail || '/images/demo.webp'}" alt="${course.title}" />
          </a>
        </div>
        <span class="course-category">${course.category}</span>
        <h3>
          <a href="${course.link || '#'}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
            ${course.title}
          </a>
        </h3>
        <p class="course-instructor">by ${course.instructor}</p>
        <div class="course-meta">
          <span class="course-rating">${stars} ${course.rating}</span>
          <span class="course-students">${studentCount} students</span>
        </div>
        <div class="course-bottom">
          <span class="course-price">${course.price}</span>
          <a href="${course.link || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;">
            View Details
          </a>
        </div>
      </div>
    `;
  }).join('');
}

function renderFaqSectionHtml(category = 'ALL') {
  const list = faqsData[category] || faqsData.ALL;
  const itemsHtml = list.map((faq, index) => {
    const isFirst = index === 0;
    return `
      <div class="faq-item glass-card">
        <button class="faq-question-btn" aria-expanded="${isFirst ? 'true' : 'false'}" data-index="${index}">
          <span class="faq-question-text">${faq.question}</span>
          <span class="faq-icon">
            <span class="faq-icon-plus" style="display: ${isFirst ? 'none' : 'block'};">+</span>
            <span class="faq-icon-minus" style="display: ${isFirst ? 'block' : 'none'};">×</span>
          </span>
        </button>
        <div class="faq-answer-container" style="display: ${isFirst ? 'block' : 'none'};">
          <p class="faq-answer-text">${faq.answer}</p>
        </div>
      </div>
    `;
  }).join('');

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": list.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return `
    <section class="faq-section" style="margin-top: 4rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 40px;">
        <h2 style="color: #ffffff; display: inline-block; position: relative; font-size: 2.2rem; font-weight: 700; margin-bottom: 0;">
          Frequently Asked Questions
          <span style="position: absolute; bottom: -10px; left: 0; width: 100%; height: 4px; background-color: #ffc107; border-radius: 2px;"></span>
        </h2>
      </div>
      <div class="faq-container" style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
        ${itemsHtml}
      </div>
    </section>
    <script type="application/ld+json">
      ${JSON.stringify(faqSchema)}
    </script>
  `;
}

// -------------------------------------------------------------
// Route-specific Prerender Pages
// -------------------------------------------------------------

function prerenderJEECourses() {
  const filtered = coursesData.filter(c => c.category === 'JEE');
  const cards = renderCourseCardsHtml(filtered);

  return `
    <section class="courses-section">
      <div class="section-header">
        <h1>Best IIT JEE 2027 Online Coaching for JEE Main & Advanced</h1>
        <p>Comprehensive preparation for IIT-JEE exams. Build a strong foundation and master the concepts to secure your seat in top engineering colleges.</p>
      </div>
      <div class="filter-row">
        <a href="/courses" class="filter-btn" style="text-decoration: none;">All</a>
        <a href="/courses/iit-jee" class="filter-btn active" style="text-decoration: none;">JEE</a>
        <a href="/courses/neet" class="filter-btn" style="text-decoration: none;">NEET</a>
        <a href="/courses/foundation" class="filter-btn" style="text-decoration: none;">FOUNDATION</a>
      </div>
      <div class="courses-grid" style="margin-top: 40px;">
        ${cards}
      </div>
    </section>

    <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
      <div style="position: relative; z-index: 1;">
        <h2 style="color: #f8fafc; font-size: 2.2rem; margin-bottom: 1.2rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em;">
          IIT- JEE Preparation That Actually Builds Your Rank <span style="background: -webkit-linear-gradient(45deg, #fde047, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Not Just Your Syllabus</span>
        </h2>
        <p style="margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem;">
          Cracking IIT-JEE isn't about covering the syllabus once and hoping for the best, it's about understanding concepts deeply enough to solve any question, however it's twisted in the exam. At EduRain, our JEE courses are built around this exact idea: strong fundamentals, consistent practice, and enough tests to know exactly where you stand before the real exam. Whether you're in Class 12th trying to balance boards with JEE, starting fresh in Class 11th, or repeating a year to fix what went wrong last time, there's a batch here designed specifically for that stage.
        </p>

        <h3 style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700;">Our Batches:</h3>
        <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
          <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
            <a href="https://courses.edurain.in/courses/849750" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Dropper JEE 2027 Batch</a> : For students repeating a year who want to rebuild their concepts properly and target a real rank improvement in JEE 2027.
          </li>
          <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
            <a href="https://courses.edurain.in/courses/814178" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">TARGET JEE 2027 – 12th Class Batch</a> : For Class 12th students who need to manage boards and JEE prep together without either one suffering.
          </li>
          <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
            <a href="https://courses.edurain.in/courses/813811" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">JEE Mantra 3.0 Batch 2028</a> : For Class 11th students starting their JEE journey early, with enough time to build a solid foundation before Class 12th begins.
          </li>
        </ul>

        <h3 style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700;">Why students choose EduRain for JEE:</h3>
        <ul style="list-style: none; padding: 0; margin: 0; color: #cbd5e1; line-height: 1.6;">
          <li style="margin-bottom: 0.8rem;">✔️ <strong>Live interactive classes</strong> with experienced faculty, not just recorded lectures.</li>
          <li style="margin-bottom: 0.8rem;">✔️ <strong>Doubt-solving sessions</strong> where every conceptual doubt is resolved.</li>
          <li style="margin-bottom: 0.8rem;">✔️ <strong>Experienced teachers</strong> who specialize in JEE Main & Advanced patterns.</li>
          <li style="margin-bottom: 0.8rem;">✔️ <strong>Regular mock tests</strong> with detailed analytics and all-India ranking feedback.</li>
          <li style="margin-bottom: 0.8rem;">✔️ <strong>Curated study material</strong> and problem-solving modules updated to latest 2026-2027 standards.</li>
        </ul>
      </div>
    </section>

    ${renderFaqSectionHtml('JEE')}
  `;
}

function prerenderNEETCourses() {
  const filtered = coursesData.filter(c => c.category === 'NEET');
  const cards = renderCourseCardsHtml(filtered);

  return `
    <section class="courses-section">
      <div class="section-header">
        <h1>NEET 2027-28 Complete Online Coaching & Preparation</h1>
        <p>Crack NEET UG with expert-led coaching in Biology, Physics, and Chemistry designed to help medical aspirants secure top scores and a seat in India's best medical colleges.</p>
      </div>
      <div class="filter-row">
        <a href="/courses" class="filter-btn" style="text-decoration: none;">All</a>
        <a href="/courses/iit-jee" class="filter-btn" style="text-decoration: none;">JEE</a>
        <a href="/courses/neet" class="filter-btn active" style="text-decoration: none;">NEET</a>
        <a href="/courses/foundation" class="filter-btn" style="text-decoration: none;">FOUNDATION</a>
      </div>
      <div class="courses-grid" style="margin-top: 40px;">
        ${cards}
      </div>
    </section>

    <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
      <div style="position: relative; z-index: 1;">
        <h2 style="color: #f8fafc; font-size: 2.2rem; margin-bottom: 1.2rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em;">
          NEET Preparation That Focuses on Understanding, <span style="background: -webkit-linear-gradient(45deg, #fde047, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Not Cramming</span>
        </h2>
        <p style="margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem;">
          NEET isn't cleared by cramming Biology, Physics and Chemistry the night before revision starts, it's cleared by students who actually understand why an answer is right, not just which one to mark. At EduRain, our NEET courses focus on that exact difference.
        </p>

        <h3 style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700;">Our Batches:</h3>
        <ul style="list-style: none; padding: 0; margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6;">
          <li style="margin-bottom: 1rem;"><a href="https://courses.edurain.in/courses/814170" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">NEET White Coat 2027 – Class 12th</a> : For Class 12th students balancing boards with NEET.</li>
          <li style="margin-bottom: 1rem;"><a href="https://courses.edurain.in/courses/814073" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Mission NEET 3.0 Batch 2028</a> : For Class 11th students starting early.</li>
          <li style="margin-bottom: 1rem;"><a href="https://courses.edurain.in/courses/849750" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Dropper NEET 2027 Batch</a> : For repeaters aiming for a rank turnaround.</li>
        </ul>

        <h3 style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700;">Why choose EduRain for NEET:</h3>
        <ul style="list-style: none; padding: 0; margin: 0; color: #cbd5e1; line-height: 1.6;">
          <li style="margin-bottom: 0.8rem;">✔️ <strong>NCERT Line-by-Line Mastery</strong> in Biology, Chemistry & Physics.</li>
          <li style="margin-bottom: 0.8rem;">✔️ <strong>One-on-one doubt clearing</strong> directly with senior faculty.</li>
          <li style="margin-bottom: 0.8rem;">✔️ <strong>Speed & Accuracy Drills</strong> matching the latest NTA NEET exam format.</li>
        </ul>
      </div>
    </section>

    ${renderFaqSectionHtml('NEET')}
  `;
}

function prerenderFoundationCourses() {
  const filtered = coursesData.filter(c => c.category === 'FOUNDATION');
  const cards = renderCourseCardsHtml(filtered);

  return `
    <section class="courses-section">
      <div class="section-header">
        <h1>Best Online Coaching for Classes 6 to 10 | Foundation</h1>
        <p>A strong foundation changes everything. From Class 6 to 10, we make sure your concepts in Science, Maths, and English are crystal clear, the perfect stepping stone for future competitive exams.</p>
      </div>
      <div class="filter-row">
        <a href="/courses" class="filter-btn" style="text-decoration: none;">All</a>
        <a href="/courses/iit-jee" class="filter-btn" style="text-decoration: none;">JEE</a>
        <a href="/courses/neet" class="filter-btn" style="text-decoration: none;">NEET</a>
        <a href="/courses/foundation" class="filter-btn active" style="text-decoration: none;">FOUNDATION</a>
      </div>
      <div class="courses-grid" style="margin-top: 40px;">
        ${cards}
      </div>
    </section>

    <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
      <div style="position: relative; z-index: 1;">
        <h2 style="color: #f8fafc; font-size: 2.2rem; margin-bottom: 1.2rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em;">
          Class 6th to 10th: Where Real Preparation <span style="background: -webkit-linear-gradient(45deg, #fde047, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Actually Begins</span>
        </h2>
        <p style="margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem;">
          Most students struggle in JEE or NEET prep not because the concepts are new, but because the basics from Class 6th to 10th were never solid. At EduRain, our Foundation courses build strong fundamentals early.
        </p>
      </div>
    </section>

    ${renderFaqSectionHtml('FOUNDATION')}
  `;
}

function prerenderAllCourses() {
  const cards = renderCourseCardsHtml(coursesData);

  return `
    <section class="courses-section" id="courses-page">
      <div class="section-header">
        <h1>Explore Our All Courses – IIT JEE, NEET & Foundation (Class 6-10)</h1>
        <h2 style="font-size: var(--fs-lg); color: var(--text-secondary); font-weight: 400; margin-top: 8px;">
          Find the best course for your IIT JEE, NEET, or Foundation (Class 6th to 10th) preparation and start learning today
        </h2>
      </div>
      <div class="filter-row">
        <a href="/courses" class="filter-btn active" style="text-decoration: none;">All</a>
        <a href="/courses/iit-jee" class="filter-btn" style="text-decoration: none;">JEE</a>
        <a href="/courses/neet" class="filter-btn" style="text-decoration: none;">NEET</a>
        <a href="/courses/foundation" class="filter-btn" style="text-decoration: none;">FOUNDATION</a>
      </div>
      <div class="courses-grid" id="courses-grid" style="margin-top: 40px;">
        ${cards}
      </div>
    </section>

    ${renderFaqSectionHtml('ALL')}
  `;
}

function prerenderAboutUs() {
  return `
    <section class="about-hero" style="max-width: 1000px; margin: 3rem auto; padding: 2rem 1.5rem; text-align: center;">
      <h1 style="font-size: 2.5rem; font-weight: 800; color: #ffffff; margin-bottom: 1.2rem;">About EduRain</h1>
      <h2 style="font-size: 1.4rem; color: #34d399; font-weight: 600; margin-bottom: 2rem;">Built on Mission. Driven by Purpose. Democratizing Master Coaching Across India.</h2>
      <p style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.8; max-width: 800px; margin: 0 auto 2rem;">
        At EduRain, we believe quality education shouldn't depend on where you live or how much you can afford to spend on coaching. We started EduRain with one simple goal: to bring foundation learning for Classes 6 to 10 and online coaching for IIT-JEE and NEET preparation to every student who's serious about their future.
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-top: 3rem; text-align: left;">
        <div class="glass-card" style="padding: 1.8rem; border-radius: 16px;">
          <h3 style="color: #facc15; font-size: 1.3rem; margin-bottom: 0.8rem;">🎯 Top Faculty</h3>
          <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">Learn directly from master educators with years of proven success in IIT-JEE, NEET, and Olympiads.</p>
        </div>
        <div class="glass-card" style="padding: 1.8rem; border-radius: 16px;">
          <h3 style="color: #34d399; font-size: 1.3rem; margin-bottom: 0.8rem;">💡 Conceptual Clarity</h3>
          <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">We teach the 'why' behind formulas, ensuring you retain core ideas effortlessly for high-stakes exams.</p>
        </div>
        <div class="glass-card" style="padding: 1.8rem; border-radius: 16px;">
          <h3 style="color: #60a5fa; font-size: 1.3rem; margin-bottom: 0.8rem;">📊 Analytics & Tests</h3>
          <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">Regular all-India mock tests and in-depth performance reports pinpoint weak areas early.</p>
        </div>
      </div>
    </section>
  `;
}

function prerenderContactUs() {
  return `
    <section class="contact-section" style="max-width: 900px; margin: 3rem auto; padding: 2rem 1.5rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #ffffff;">Contact Us | Get in Touch with EduRain</h1>
        <p style="color: #cbd5e1; font-size: 1.1rem; margin-top: 0.8rem;">Have questions about our courses for Class 6-10, IIT-JEE or NEET? We are here to help.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
        <div class="glass-card" style="padding: 2rem; border-radius: 16px;">
          <h3 style="color: #34d399; font-size: 1.3rem; margin-bottom: 1.2rem;">📞 Admissions & Support</h3>
          <p style="color: #cbd5e1; margin-bottom: 0.8rem;"><strong>Phone:</strong> <a href="tel:+918700201662" style="color: #60a5fa;">+91 8700201662</a></p>
          <p style="color: #cbd5e1; margin-bottom: 0.8rem;"><strong>Email:</strong> <a href="mailto:contact@edurain.in" style="color: #60a5fa;">contact@edurain.in</a></p>
          <p style="color: #cbd5e1; margin-bottom: 0.8rem;"><strong>Timings:</strong> Mon - Sat: 9:00 AM - 8:00 PM</p>
          <p style="color: #cbd5e1;"><strong>Location:</strong> Dwarka Sector 7, New Delhi, India - 110075</p>
        </div>
        <div class="glass-card" style="padding: 2rem; border-radius: 16px;">
          <h3 style="color: #facc15; font-size: 1.3rem; margin-bottom: 1.2rem;">💬 Quick Inquiry</h3>
          <p style="color: #cbd5e1; line-height: 1.6; margin-bottom: 1.5rem;">Want to speak directly to an academic counselor or book a free trial demo class? Reach us on WhatsApp or call our team.</p>
          <a href="https://wa.me/918700201662" target="_blank" rel="noopener noreferrer" class="btn btn-accent" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
            <i class="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  `;
}

function prerenderPolicy(type) {
  const titles = {
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
    'refund-policy': "Refund & Cancellation Policy",
    sitemap: "HTML Sitemap"
  };
  const title = titles[type] || "Policy";

  return `
    <section class="policy-page" style="max-width: 900px; margin: 3rem auto; padding: 2rem 1.5rem; color: #cbd5e1; line-height: 1.8;">
      <h1 style="color: #ffffff; font-size: 2.2rem; margin-bottom: 1.5rem;">${title}</h1>
      <p style="margin-bottom: 1.5rem;">Welcome to EduRain. We are committed to transparency, security, and delivering exceptional learning experiences to every student across India.</p>
      <div class="glass-card" style="padding: 2rem; border-radius: 16px; margin-top: 1.5rem;">
        <h2 style="color: #34d399; font-size: 1.4rem; margin-bottom: 1rem;">1. Overview</h2>
        <p style="margin-bottom: 1rem;">EduRain provides online classes, practice mock tests, study materials, and academic mentorship for Classes 6th to 12th, Foundation, IIT-JEE and NEET exams.</p>
        <h2 style="color: #34d399; font-size: 1.4rem; margin-bottom: 1rem;">2. Contact & Inquiries</h2>
        <p>If you have any questions regarding our terms, refunds, or data privacy practices, please contact us at <a href="mailto:contact@edurain.in" style="color: #60a5fa;">contact@edurain.in</a>.</p>
      </div>
    </section>
  `;
}

function prerenderBlogList(blogs) {
  const cardsHtml = blogs.map(b => {
    return `
      <article class="glass-card blog-card" style="padding: 1.5rem; border-radius: 16px; display: flex; flex-direction: column;">
        ${b.image ? `<img loading="lazy" src="${b.image}" alt="${b.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px; margin-bottom: 1.2rem;" />` : ''}
        <h2 style="font-size: 1.3rem; font-weight: 700; color: #f8fafc; line-height: 1.4; margin-bottom: 0.8rem;">
          <a href="/blogs/${b.slug}" style="color: inherit; text-decoration: none;">${b.title}</a>
        </h2>
        <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.2rem; flex: 1;">${b.desc || ''}</p>
        <a href="/blogs/${b.slug}" class="btn btn-accent btn-sm" style="align-self: flex-start; text-decoration: none;">Read Article &rarr;</a>
      </article>
    `;
  }).join('');

  return `
    <section class="blogs-section" style="max-width: 1200px; margin: 3rem auto; padding: 0 1.5rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 3rem;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #ffffff;">IIT JEE, NEET & Foundation Blogs</h1>
        <h2 style="font-size: 1.15rem; color: #cbd5e1; font-weight: 400; margin-top: 8px;">
          Expert preparation strategies, NCERT chapter solutions, and exam blueprints curated by EduRain master teachers
        </h2>
      </div>
      <div class="blogs-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        ${cardsHtml}
      </div>
    </section>
  `;
}

function prerenderBlogArticle(meta) {
  const safeContent = (meta.content || '').replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  return `
    <article class="blog-post-page" style="max-width: 900px; margin: 2.5rem auto; padding: 0 1.5rem;">
      <div class="blog-meta-header" style="margin-bottom: 2rem;">
        <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 1rem; flex-wrap: wrap;">
          <span style="background: rgba(52, 211, 153, 0.15); color: #34d399; padding: 4px 12px; border-radius: 9999px; font-size: 0.85rem; font-weight: 600;">
            ${meta.category || 'Education'}
          </span>
          <span style="color: #94a3b8; font-size: 0.85rem;">EduRain Master Faculty</span>
        </div>
        <h1 style="font-size: 2.4rem; font-weight: 800; line-height: 1.3; color: #f8fafc; margin-bottom: 1.5rem;">
          ${meta.title}
        </h1>
      </div>

      ${meta.image ? `
        <div class="blog-cover-wrapper" style="margin-bottom: 2.5rem; border-radius: 18px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          <img src="${meta.image}" alt="${meta.title}" style="width: 100%; max-height: 480px; object-fit: cover; display: block;" />
        </div>
      ` : ''}

      <div class="blog-post-content" style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.85;">
        ${safeContent}
      </div>

      <div class="blog-cta-box glass-card" style="margin-top: 3.5rem; padding: 2.2rem; border-radius: 18px; text-align: center; border: 1px solid rgba(250, 204, 21, 0.3);">
        <h2 style="font-size: 1.8rem; font-weight: 700; color: #ffffff; margin-bottom: 0.8rem;">Ready to Crack IIT-JEE & NEET?</h2>
        <p style="color: #cbd5e1; font-size: 1.05rem; margin-bottom: 1.5rem;">Join thousands of students learning live with EduRain's expert teachers. Attend a free demo class today!</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/courses/iit-jee" class="btn btn-accent" style="text-decoration: none;">Explore JEE Batches</a>
          <a href="/courses/neet" class="btn btn-outline" style="text-decoration: none; color: #fff; border: 1px solid #34d399;">Explore NEET Batches</a>
        </div>
      </div>
    </article>
  `;
}

// -------------------------------------------------------------
// Main Static Site Generation (SSG) Process
// -------------------------------------------------------------

(async function generate() {
  const today = new Date().toISOString().split('T')[0];
  const blogSlugs = [];
  const publishedBlogsForList = [];

  let blogMigrationMap = {};
  const mapPath = path.join(__dirname, 'src', 'data', 'blog_s3_migration_map.json');
  if (fs.existsSync(mapPath)) {
    try {
      blogMigrationMap = JSON.parse(fs.readFileSync(mapPath, 'utf8'));
    } catch (e) {}
  }

  try {
    const blogs = await fetchBlogs();
    blogs.forEach(doc => {
      const fields = doc.fields;
      if (fields && fields.status && fields.status.stringValue === 'published') {
        const id = doc.name.split('/').pop();
        const slug = (fields.slug && fields.slug.stringValue) ? fields.slug.stringValue : id;
        blogSlugs.push(slug);

        const title = (fields.title && fields.title.stringValue) ? fields.title.stringValue : '';
        const desc = (fields.metaDescription && fields.metaDescription.stringValue)
          ? fields.metaDescription.stringValue
          : (fields.excerpt && fields.excerpt.stringValue) ? fields.excerpt.stringValue : title;
        const content = (fields.content && fields.content.stringValue) ? fields.content.stringValue : '';
        const category = (fields.category && fields.category.stringValue) ? fields.category.stringValue : 'Education';

        let coverImage = '';
        if (blogMigrationMap[id] && blogMigrationMap[id].s3Cover) {
          coverImage = blogMigrationMap[id].s3Cover;
        } else if (fields.coverImage && fields.coverImage.stringValue) {
          coverImage = fields.coverImage.stringValue;
        }

        publishedBlogsForList.push({ id, slug, title, desc, image: coverImage, category });

        routesMeta[`blogs/${slug}`] = {
          title: `${title} | EduRain Blog`,
          ogTitle: `${title} | EduRain`,
          desc: desc.slice(0, 160),
          canonical: `https://www.edurain.in/blogs/${slug}/`,
          image: coverImage,
          content: content,
          category: category,
          isBlog: true
        };
      }
    });
    console.log(`Fetched ${blogSlugs.length} published blogs from Firebase for SSG generation.`);
  } catch (err) {
    console.warn('Could not fetch blogs from Firebase for SSG:', err.message);
  }

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  const indexHtmlWithoutSchema = indexHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '');

  const staticUrls = [
    { loc: 'https://www.edurain.in', priority: '1.0', changefreq: 'weekly' },
    { loc: 'https://www.edurain.in/courses/', priority: '0.9', changefreq: 'weekly' },
    { loc: 'https://www.edurain.in/courses/iit-jee/', priority: '0.9', changefreq: 'weekly' },
    { loc: 'https://www.edurain.in/courses/neet/', priority: '0.9', changefreq: 'weekly' },
    { loc: 'https://www.edurain.in/courses/foundation/', priority: '0.9', changefreq: 'weekly' },
    { loc: 'https://www.edurain.in/blogs/', priority: '0.8', changefreq: 'daily' },
    { loc: 'https://www.edurain.in/about-us/', priority: '0.7', changefreq: 'monthly' },
    { loc: 'https://www.edurain.in/contact-us/', priority: '0.7', changefreq: 'monthly' },
    { loc: 'https://www.edurain.in/refund-policy/', priority: '0.5', changefreq: 'monthly' }
  ];

  const blogUrls = blogSlugs.map(slug => ({
    loc: `https://www.edurain.in/blogs/${slug}/`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  const allUrls = [...staticUrls, ...blogUrls];

  // -------------------------------------------------------------
  // Loop over every route and write fully prerendered index.html
  // -------------------------------------------------------------
  Object.keys(routesMeta).forEach(route => {
    const meta = routesMeta[route];
    let finalHtml = indexHtmlWithoutSchema;

    // 1. Meta & Header Replacements
    finalHtml = finalHtml.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${meta.canonical}" />`);
    finalHtml = finalHtml.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
    finalHtml = finalHtml.replace(/<meta name="description"[\s\S]*?content="[^"]*"[\s\S]*?>/, `<meta name="description" content="${meta.desc}" />`);
    finalHtml = finalHtml.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${meta.canonical}">`);
    finalHtml = finalHtml.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${meta.ogTitle || meta.title}">`);
    finalHtml = finalHtml.replace(/<meta property="og:description"[\s\S]*?content="[^"]*">/, `<meta property="og:description" content="${meta.desc}">`);
    finalHtml = finalHtml.replace(/<meta name="twitter:url" content="[^"]*">/, `<meta name="twitter:url" content="${meta.canonical}">`);
    finalHtml = finalHtml.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${meta.ogTitle || meta.title}">`);
    finalHtml = finalHtml.replace(/<meta name="twitter:description"[\s\S]*?content="[^"]*">/, `<meta name="twitter:description" content="${meta.desc}">`);

    if (meta.image) {
      finalHtml = finalHtml.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${meta.image}">`);
      finalHtml = finalHtml.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${meta.image}">`);
    }

    // 2. Build Route Body Content
    let routeContentHtml = '';
    if (route === 'courses/iit-jee') {
      routeContentHtml = prerenderJEECourses();
    } else if (route === 'courses/neet') {
      routeContentHtml = prerenderNEETCourses();
    } else if (route === 'courses/foundation') {
      routeContentHtml = prerenderFoundationCourses();
    } else if (route === 'courses') {
      routeContentHtml = prerenderAllCourses();
    } else if (route === 'about-us') {
      routeContentHtml = prerenderAboutUs();
    } else if (route === 'contact-us') {
      routeContentHtml = prerenderContactUs();
    } else if (route === 'blogs') {
      routeContentHtml = prerenderBlogList(publishedBlogsForList);
    } else if (meta.isBlog) {
      routeContentHtml = prerenderBlogArticle(meta);
    } else if (['privacy', 'terms', 'refund-policy', 'sitemap'].includes(route)) {
      routeContentHtml = prerenderPolicy(route);
    }

    // 3. Inject full shell: Navbar + Page Body (H1/H2/Cards/FAQs) + Footer into <div id="app">
    const fullPageShellHtml = `
      ${renderPrerenderNavbar(route)}
      <main class="main-content fade-in-section visible">
        ${routeContentHtml}
      </main>
      ${renderPrerenderFooter()}
    `;

    finalHtml = finalHtml.replace('<div id="app"></div>', `<div id="app">\n${fullPageShellHtml}\n</div>`);

    // 4. Save to dist/{route}/index.html
    const folderPath = path.join(distDir, route);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    fs.writeFileSync(path.join(folderPath, 'index.html'), finalHtml);
  });

  // -------------------------------------------------------------
  // Prerender Homepage into dist/index.html
  // -------------------------------------------------------------
  const prerenderedHomepageApp = `
    ${renderPrerenderNavbar('')}
    <main class="main-content fade-in-section visible">
      <div class="er-hero-banner-wrapper">
        <div class="er-banner-web">
          <section id="er-hero-banner-web" style="position:relative; width:100%; overflow:hidden; background:#0e3a24;">
            <div id="er-slider-track-web" style="display:flex;">
              <a href="/courses/iit-jee" aria-label="JEE Mantra 3.0 Batch 2027-28 for Class 11th" class="er-slide-web er-slide-aspect-web" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
                <img src="/images/web%20banner/1.webp?v=2" alt="JEE Mantra 3.0 Batch 2027-28 for Class 11th" fetchpriority="high" loading="eager" width="12800" height="2416" style="width:100%; height:100%; object-fit:cover; display:block;" />
              </a>
            </div>
          </section>
        </div>
      </div>
      <section class="section popular-courses-section">
        <div class="section-header">
          <h1 style="font-size: 2.4rem; font-weight: 800; color: #ffffff;">Best Online Coaching for IIT-JEE, NEET & Class 6-10</h1>
          <p style="color: #cbd5e1; font-size: 1.1rem; margin-top: 8px;">Explore our top-rated academic programs taught by master teachers across India.</p>
        </div>
        <div class="courses-grid" style="margin-top: 30px;">
          ${renderCourseCardsHtml(coursesData.slice(0, 6))}
        </div>
      </section>
    </main>
    ${renderPrerenderFooter()}
  `;

  let homeHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  homeHtml = homeHtml.replace('<div id="app"></div>', `<div id="app">\n${prerenderedHomepageApp}\n</div>`);
  fs.writeFileSync(indexHtmlPath, homeHtml);
  console.log('✅ Injected full prerendered shell into dist/index.html (H1 + Cards + Navbar + Footer).');

  // -------------------------------------------------------------
  // Dynamic Sitemaps
  // -------------------------------------------------------------
  const sitemap0Xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.map(u => `    <url>
        <loc>${u.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${u.changefreq}</changefreq>
        <priority>${u.priority}</priority>
    </url>`).join('\n')}
</urlset>`;
  fs.writeFileSync(path.join(distDir, 'sitemap-0.xml'), sitemap0Xml);

  const blogsSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogUrls.map(u => `    <url>
        <loc>${u.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${u.changefreq}</changefreq>
        <priority>${u.priority}</priority>
    </url>`).join('\n')}
</urlset>`;
  const blogsDir = path.join(distDir, 'blogs');
  if (!fs.existsSync(blogsDir)) {
    fs.mkdirSync(blogsDir, { recursive: true });
  }
  fs.writeFileSync(path.join(blogsDir, 'sitemap-index.xml'), blogsSitemapXml);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>https://www.edurain.in/sitemap-0.xml</loc>
    </sitemap>
    <sitemap>
        <loc>https://www.edurain.in/blogs/sitemap-index.xml</loc>
    </sitemap>
</sitemapindex>`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);

  // Also sync to public folder for repository tracking
  const publicDir = path.join(__dirname, 'public');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'sitemap-0.xml'), sitemap0Xml);
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
    const publicBlogsDir = path.join(publicDir, 'blogs');
    if (!fs.existsSync(publicBlogsDir)) fs.mkdirSync(publicBlogsDir, { recursive: true });
    fs.writeFileSync(path.join(publicBlogsDir, 'sitemap-index.xml'), blogsSitemapXml);
  }

  console.log(`Generated sitemap.xml index and split sitemaps (${staticUrls.length} static URLs, ${blogUrls.length} blog URLs).`);
  console.log('🎉 Successfully prerendered all routes with 100% full raw HTML (H1, H2, Cards, Content, FAQs, and Schemas)!');
})();
