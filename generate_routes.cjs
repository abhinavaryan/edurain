
const fs = require('fs');
const path = require('path');
const https = require('https');

const routesMeta = {
  'courses': {
    title: 'Explore Our All Courses – IIT JEE, NEET & Foundation (Class 6-10)',
    desc: 'Explore IIT JEE, NEET & Foundation courses for Class 6-10 with expert faculty, structured curriculum & proven results. Take the first step toward success',
    canonical: 'https://www.edurain.in/courses'
  },
  'blogs': {
    title: 'IIT JEE, NEET & Foundation Blogs | EduRain',
    desc: 'Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides',
    canonical: 'https://www.edurain.in/blogs'
  },
  'courses/iit-jee': {
    title: 'Best IIT JEE Online Coaching for JEE Main & Advanced | EduRain',
    desc: 'Crack IIT JEE with EduRain: live classes, expert faculty, and structured material for complete JEE Main & Advanced exam preparation',
    canonical: 'https://www.edurain.in/courses/iit-jee'
  },
  'courses/neet': {
    title: 'NEET 2027-28 Complete Online Preparation with EduRain',
    desc: 'Start your NEET 2027-28 online preparation with EduRain: live classes, expert faculty, and structured NCERT-based material with regular mock tests.',
    canonical: 'https://www.edurain.in/courses/neet'
  },
  'courses/foundation': {
    title: 'Best Online Coaching for Classes 6 to 10 | Live Interactive Classes',
    desc: 'Live online classes for Class 6 to 10 with expert-led Math, Science & more: building a strong IIT JEE & NEET foundation. Interactive learning, real results',
    canonical: 'https://www.edurain.in/courses/foundation'
  },
  'about-us': {
    title: "About Us | EduRain's Mission to Make Learning Accessible",
    desc: "At EduRain, our mission is to make quality education accessible for every student from Class 6-10 foundation to IIT-JEE & NEET success. Know our story",
    canonical: 'https://www.edurain.in/about-us'
  },
  'contact-us': {
    title: "Contact Us | Get in Touch with EduRain",
    desc: "Have questions about our courses for Class 6-10, IIT-JEE or NEET? Contact EduRain's team for admissions support, course details or a free demo class",
    canonical: 'https://www.edurain.in/contact-us'
  },
  'privacy': {
    title: "Privacy Policy - EduRain",
    desc: "Privacy policy of EduRain",
    canonical: 'https://www.edurain.in/privacy'
  },
  'terms': {
    title: "Terms and Conditions - EduRain",
    desc: "Terms and conditions of use for Edurain",
    canonical: 'https://www.edurain.in/terms'
  },
  'sitemap': {
    title: "Sitemap - EduRain",
    desc: "Sitemap for EduRain",
    canonical: 'https://www.edurain.in/sitemap'
  },
  'journey': {
    title: "Our Journey | EduRain",
    desc: "Learn about the journey and growth of EduRain.",
    canonical: 'https://www.edurain.in/journey'
  },
  'reviews': {
    title: "Student Reviews | EduRain",
    desc: "Read what our students have to say about EduRain's courses and faculty.",
    canonical: 'https://www.edurain.in/reviews'
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
        
        routesMeta[`blogs/${slug}`] = {
            title: metaTitle,
            desc: metaDesc,
            canonical: `https://www.edurain.in/blogs/${slug}`
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
  // Generate dynamic sitemap.xml with all routes + blog pages
  // ---------------------------------------------------------
  const staticUrls = [
    { loc: 'https://www.edurain.in', priority: '1.0', changefreq: 'weekly' },
    { loc: 'https://www.edurain.in/courses', priority: '0.9', changefreq: 'weekly' },
    { loc: 'https://www.edurain.in/courses/iit-jee', priority: '0.9', changefreq: 'weekly' },
    { loc: 'https://www.edurain.in/courses/neet', priority: '0.9', changefreq: 'weekly' },
    { loc: 'https://www.edurain.in/courses/foundation', priority: '0.9', changefreq: 'weekly' },
    { loc: 'https://www.edurain.in/blogs', priority: '0.8', changefreq: 'daily' },
    { loc: 'https://www.edurain.in/about-us', priority: '0.7', changefreq: 'monthly' },
    { loc: 'https://www.edurain.in/contact-us', priority: '0.7', changefreq: 'monthly' },
    { loc: 'https://www.edurain.in/reviews', priority: '0.6', changefreq: 'monthly' },
    { loc: 'https://www.edurain.in/journey', priority: '0.6', changefreq: 'monthly' },
  ];

  const blogUrls = blogSlugs.map(slug => ({
    loc: `https://www.edurain.in/blogs/${slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  const allUrls = [...staticUrls];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `    <url>
        <loc>${u.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${u.changefreq}</changefreq>
        <priority>${u.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);
  console.log(`Generated sitemap.xml with ${allUrls.length} URLs (${blogUrls.length} blog pages).`);

  console.log('Successfully generated static HTML files (folder-based, no trailing slash issues) for SPA routes with injected SEO metadata.');
})();
