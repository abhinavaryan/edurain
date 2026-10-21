
const fs = require('fs');
const path = require('path');
const https = require('https');

const routesMeta = {
  'courses': {
    title: 'Explore Our All Courses – IIT JEE, NEET & Foundation (Class 6-10)',
    desc: 'Explore IIT JEE, NEET & Foundation courses for Class 6-10 with expert faculty, structured curriculum & proven results. Take the first step toward success',
    canonical: 'https://www.edurain.in/courses/'
  },
  'blogs': {
    title: 'IIT JEE, NEET & Foundation Blogs | EduRain',
    desc: 'Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides',
    canonical: 'https://www.edurain.in/blogs/'
  },
  'courses/iit-jee': {
    title: 'Best IIT JEE Online Coaching for JEE Main & Advanced | EduRain',
    desc: 'Crack IIT JEE with EduRain: live classes, expert faculty, and structured material for complete JEE Main & Advanced exam preparation',
    canonical: 'https://www.edurain.in/courses/iit-jee/'
  },
  'courses/neet': {
    title: 'NEET 2027-28 Complete Online Preparation with EduRain',
    desc: 'Start your NEET 2027-28 online preparation with EduRain: live classes, expert faculty, and structured NCERT-based material with regular mock tests.',
    canonical: 'https://www.edurain.in/courses/neet/'
  },
  'courses/foundation': {
    title: 'Best Online Coaching for Classes 6 to 10 | Live Interactive Classes',
    desc: 'Live online classes for Class 6 to 10 with expert-led Math, Science & more: building a strong IIT JEE & NEET foundation. Interactive learning, real results',
    canonical: 'https://www.edurain.in/courses/foundation/'
  },
  'about-us': {
    title: "About Us | EduRain's Mission to Make Learning Accessible",
    desc: "At EduRain, our mission is to make quality education accessible for every student from Class 6-10 foundation to IIT-JEE & NEET success. Know our story",
    canonical: 'https://www.edurain.in/about-us/'
  },
  'contact-us': {
    title: "Contact Us | Get in Touch with EduRain",
    desc: "Have questions about our courses for Class 6-10, IIT-JEE or NEET? Contact EduRain's team for admissions support, course details or a free demo class",
    canonical: 'https://www.edurain.in/contact-us/'
  },
  'privacy': {
    title: "Privacy Policy - EduRain",
    desc: "Privacy policy of EduRain",
    canonical: 'https://www.edurain.in/privacy/'
  },
  'terms': {
    title: "Terms and Conditions - EduRain",
    desc: "Terms and conditions of use for Edurain",
    canonical: 'https://www.edurain.in/terms/'
  },
  'refund-policy': {
    title: "Refund/Cancellation Policy - EduRain",
    desc: "Refund and cancellation policy for EduRain",
    canonical: 'https://www.edurain.in/refund-policy/'
  },
  'sitemap': {
    title: "Sitemap - EduRain",
    desc: "Sitemap for EduRain",
    canonical: 'https://www.edurain.in/sitemap/'
  }
  // blogadmin routes intentionally excluded - should NOT be indexed
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

(async function generate() {
  const today = new Date().toISOString().split('T')[0];
  const blogSlugs = []; // collect for sitemap

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
        
        let metaTitle = fields.title && fields.title.stringValue ? fields.title.stringValue : 'EduRain Blog';
        let metaDesc = fields.excerpt && fields.excerpt.stringValue ? fields.excerpt.stringValue : 'Read this blog on EduRain';
        
        if (fields.seo && fields.seo.mapValue && fields.seo.mapValue.fields) {
            if (fields.seo.mapValue.fields.metaTitle && fields.seo.mapValue.fields.metaTitle.stringValue) {
                metaTitle = fields.seo.mapValue.fields.metaTitle.stringValue;
            }
            if (fields.seo.mapValue.fields.metaDescription && fields.seo.mapValue.fields.metaDescription.stringValue) {
                metaDesc = fields.seo.mapValue.fields.metaDescription.stringValue;
            }
        }
        
        const mapped = blogMigrationMap[id];
        let coverImg = (mapped && mapped.s3Cover) ? mapped.s3Cover : (fields.coverImage && fields.coverImage.stringValue ? fields.coverImage.stringValue : 'https://www.edurain.in/images/og-banner.png');
        if (coverImg.includes('edurain-notification.s3')) {
            coverImg = coverImg.replace(/^https:\/\/edurain-notification\.s3(\.[a-z0-9-]+)?\.amazonaws\.com/i, 'https://d26zb7slji2zmm.cloudfront.net');
        }
        if (coverImg.includes('phototourl.com')) {
            coverImg = 'https://www.edurain.in/images/og-banner.png';
        }

        routesMeta[`blogs/${slug}`] = {
            title: metaTitle,
            desc: metaDesc,
            canonical: `https://www.edurain.in/blogs/${slug}/`,
            content: fields.content && fields.content.stringValue ? fields.content.stringValue : '',
            image: coverImg
        };
        blogSlugs.push(slug);
      }
    });
    console.log(`Fetched ${blogs.length} blogs from Firebase for SEO generation.`);
  } catch(e) {
    console.error("Error fetching blogs for SEO generation:", e);
  }

  const distDir = path.join(__dirname, 'dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found!');
    process.exit(1);
  }

  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  const indexHtmlWithoutSchema = indexHtml.replace(/<!-- JSON-LD Schema Markup -->[\s\S]*?<\/script>/, '');

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

  // Generate a hidden block of internal links for SEO crawlers (so all pages are discoverable naturally without sitemap)
  const seoLinksHtml = `\n  <div id="seo-links" style="display:none;" aria-hidden="true">\n${allUrls.map(u => `    <a href="${u.loc}">${u.loc}</a>`).join('\n')}\n  </div>\n`;

  Object.keys(routesMeta).forEach(route => {
    const meta = routesMeta[route];
    let finalHtml = indexHtmlWithoutSchema;

    // Replace Canonical URL
    finalHtml = finalHtml.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${meta.canonical}" />`);
    
    // Replace Title
    finalHtml = finalHtml.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
    
    // Replace Description (multiline match)
    finalHtml = finalHtml.replace(/<meta name="description"[\s\S]*?content="[^"]*"[\s\S]*?>/, `<meta name="description" content="${meta.desc}" />`);

    // Replace Open Graph Tags
    finalHtml = finalHtml.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${meta.canonical}">`);
    finalHtml = finalHtml.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${meta.title}">`);
    finalHtml = finalHtml.replace(/<meta property="og:description"[\s\S]*?content="[^"]*">/, `<meta property="og:description" content="${meta.desc}">`);

    // Replace Twitter Tags
    finalHtml = finalHtml.replace(/<meta name="twitter:url" content="[^"]*">/, `<meta name="twitter:url" content="${meta.canonical}">`);
    finalHtml = finalHtml.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${meta.title}">`);
    finalHtml = finalHtml.replace(/<meta name="twitter:description"[\s\S]*?content="[^"]*">/, `<meta name="twitter:description" content="${meta.desc}">`);

    // Replace Image Tags if provided
    if (meta.image) {
      finalHtml = finalHtml.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${meta.image}">`);
      finalHtml = finalHtml.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${meta.image}">`);
    }

    // Inject hidden SEO links right before </body> to ensure crawlability
    finalHtml = finalHtml.replace('</body>', `${seoLinksHtml}</body>`);

    // Inject the raw blog content for Googlebot (SEO)
    if (meta.content) {
        // Strip out any <script> tags for safety
        const safeContent = meta.content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        const seoContentHtml = `\n  <article id="seo-blog-content" style="display:none;" aria-hidden="true">\n    <h1>${meta.title}</h1>\n    ${safeContent}\n  </article>\n`;
        finalHtml = finalHtml.replace('<div id="app"></div>', `<div id="app"></div>${seoContentHtml}`);
    }

    // ---------------------------------------------------------
    // KEY FIX: Write as folder/index.html so GitHub Pages can
    // serve it directly WITHOUT a 404 redirect hack.
    // e.g. dist/courses/iit-jee/index.html  → edurain.in/courses/iit-jee
    // ---------------------------------------------------------
    const folderPath = path.join(distDir, route);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    fs.writeFileSync(path.join(folderPath, 'index.html'), finalHtml);
  });

  // ---------------------------------------------------------
  // Prerender initial homepage shell into dist/index.html
  // Enables < 1.0s FCP and instant LCP on Mobile and Desktop
  // ---------------------------------------------------------
  const prerenderedHomepageApp = `<nav class="navbar" id="main-nav">
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
                    <a href="/" class="nav-link active">Home</a>
                    <a href="/courses" class="nav-link">Our Courses</a>
                    <a href="/blogs" class="nav-link">Blogs</a>
                    <a href="/about-us" class="nav-link">About Us</a>
                    <a href="/contact-us" class="nav-link">Contact Us</a>
                </div>
                <div class="auth-btn-area"></div>
                <button class="hamburger" id="hamburger-btn" aria-label="Open Mobile Menu">
                    <span></span>
                    <span></span>
                    <span></span>
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
                            <div>
                                <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                            </div>
                        </div>
                    </a>
                </div>
                <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Close Mobile Menu">&times;</button>
            </div>
            <div class="mobile-menu-body">
                <a href="/" class="nav-link active">Home</a>
                <a href="/courses" class="nav-link">Our Courses</a>
                <a href="/blogs" class="nav-link">Blogs</a>
                <a href="/about-us" class="nav-link">About Us</a>
                <a href="/contact-us" class="nav-link">Contact Us</a>
            </div>
            <div class="mobile-menu-footer auth-btn-area"></div>
        </div>
      <main class="main-content fade-in-section visible">
        <div class="er-hero-banner-wrapper">
          <div class="er-banner-web">
            <section id="er-hero-banner-web" style="position:relative; width:100%; overflow:hidden; background:#0e3a24;">
              <div id="er-slider-track-web" style="display:flex; transition:transform 0.7s cubic-bezier(0.4,0,0.2,1); will-change:transform;">
                <a href="/courses/iit-jee" aria-label="JEE Mantra 3.0 Batch 2027-28 for Class 11th" class="er-slide-web er-slide-aspect-web" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
                  <img src="/images/web%20banner/1.webp?v=2" alt="JEE Mantra 3.0 Batch 2027-28 for Class 11th" fetchpriority="high" loading="eager" width="12800" height="2416" style="width:100%; height:100%; object-fit:cover; display:block;" />
                </a>
              </div>
            </section>
          </div>
          <div class="er-banner-mobile">
            <section id="er-hero-banner-mobile" style="position:relative; width:100%; overflow:hidden; background:#0e3a24;">
              <div id="er-slider-track-mobile" style="display:flex; transition:transform 0.7s cubic-bezier(0.4,0,0.2,1); will-change:transform;">
                <a href="/courses/neet" aria-label="Mission-NEET 3.0 Batch 2027-28 for Class 11th" class="er-slide-mobile er-slide-aspect-mobile" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
                  <img src="/images/mobile%20banner%20images/1.webp?v=3" alt="Mission-NEET 3.0 Batch 2027-28 for Class 11th" fetchpriority="high" loading="eager" width="1219" height="541" style="width:100%; height:100%; object-fit:cover; display:block;" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>`;

  let homeHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  homeHtml = homeHtml.replace('<div id="app"></div>', `<div id="app">\n${prerenderedHomepageApp}\n  </div>`);
  homeHtml = homeHtml.replace('</body>', `${seoLinksHtml}</body>`);
  fs.writeFileSync(indexHtmlPath, homeHtml);
  console.log('Injected prerendered shell into dist/index.html for near-instant LCP.');

  // ---------------------------------------------------------
  // Generate dynamic sitemap.xml with all routes + blog pages
  // ---------------------------------------------------------
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
  console.log(`Generated sitemap.xml index and split sitemaps (${staticUrls.length} static URLs, ${blogUrls.length} blog URLs).`);

  console.log('Successfully generated static HTML files (folder-based, no trailing slash issues) for SPA routes with injected SEO metadata.');
})();
