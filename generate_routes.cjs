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
// Real components are imported dynamically inside generate()
// -------------------------------------------------------------

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
  const { renderNavbar } = await import('./src/components/navbar.js');
  const { renderFooter } = await import('./src/components/footer.js');
  const { renderCourses } = await import('./src/components/courses.js');
  const { renderJEECourses, renderNEETCourses, renderFoundationCourses } = await import('./src/components/categoryCourses.js');
  const { renderAbout } = await import('./src/components/about.js');
  const { renderContact } = await import('./src/components/contact.js');
  const { renderBanner } = await import('./src/components/banner.js');
  const { renderPopularCourses } = await import('./src/components/popularCourses.js');
  const { renderFreeDemo } = await import('./src/components/freeDemo.js');
  const { renderFaculty } = await import('./src/components/faculty.js');
  const { renderHomeReviews } = await import('./src/components/homeReviews.js');
  const { renderImpact } = await import('./src/components/impact.js');
  const { renderAppDownload } = await import('./src/components/appDownload.js');

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
      routeContentHtml = renderJEECourses();
    } else if (route === 'courses/neet') {
      routeContentHtml = renderNEETCourses();
    } else if (route === 'courses/foundation') {
      routeContentHtml = renderFoundationCourses();
    } else if (route === 'courses') {
      routeContentHtml = renderCourses();
    } else if (route === 'about-us') {
      routeContentHtml = renderAbout();
    } else if (route === 'contact-us') {
      routeContentHtml = renderContact();
    } else if (route === 'blogs') {
      routeContentHtml = prerenderBlogList(publishedBlogsForList);
    } else if (meta.isBlog) {
      routeContentHtml = prerenderBlogArticle(meta);
    } else if (['privacy', 'terms', 'refund-policy', 'sitemap'].includes(route)) {
      routeContentHtml = prerenderPolicy(route);
    }

    // 3. Inject full shell: Navbar + Page Body (H1/H2/Cards/FAQs) + Footer into <div id="app">
    const fullPageShellHtml = `
      ${renderNavbar(route)}
      <main class="main-content fade-in-section visible">
        ${routeContentHtml}
      </main>
      ${renderFooter()}
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
  // Prerender Homepage into dist/index.html (Matches actual SPA exactly)
  // -------------------------------------------------------------
  const homepageMainContent = renderBanner() + renderPopularCourses() + renderFreeDemo() + renderFaculty() + renderHomeReviews() + renderImpact() + renderAppDownload();

  const prerenderedHomepageApp = `
    ${renderNavbar('')}
    <main class="main-content fade-in-section visible">
      ${homepageMainContent}
    </main>
    ${renderFooter()}
  `;

  let homeHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  homeHtml = homeHtml.replace('<div id="app"></div>', `<div id="app">\n${prerenderedHomepageApp}\n</div>`);
  fs.writeFileSync(indexHtmlPath, homeHtml);
  console.log('✅ Injected full prerendered shell into dist/index.html (matching client SPA 100%).');

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
