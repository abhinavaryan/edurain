const fs = require('fs');
const path = require('path');

const routes = [
  'courses',
  'blogs',
  'journey',
  'about-us',
  'reviews',
  'contact-us',
  'privacy',
  'terms',
  'sitemap',
  'courses/iit-jee',
  'courses/neet',
  'courses/foundation',
  'blogadmin',
  'blogadmin/login'
];

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found!');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const indexHtmlWithoutSchema = indexHtml.replace(/<!-- JSON-LD Schema Markup -->[\s\S]*?<\/script>/, '');

routes.forEach(route => {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtmlWithoutSchema);
});

console.log('Successfully generated static index.html files for SPA routes.');
