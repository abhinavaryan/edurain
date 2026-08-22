

const fs = require('fs');
const path = require('path');

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
  },
  'blogadmin': {
    title: "Blog Admin", desc: "Admin", canonical: "https://www.edurain.in/blogadmin"
  },
  'blogadmin/login': {
    title: "Blog Admin Login", desc: "Admin", canonical: "https://www.edurain.in/blogadmin/login"
  }
};

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

  const htmlPath = path.join(distDir, route + '.html');
  const dirPath = path.dirname(htmlPath);
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  fs.writeFileSync(htmlPath, finalHtml);
});

console.log('Successfully generated static HTML files (without trailing slashes) for SPA routes with injected SEO metadata.');
