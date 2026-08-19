const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');
const routerFile = path.join(__dirname, 'src/router.js');

const routes = [
    { from: 'href="#home"', to: 'href="/"' },
    { from: 'href="#courses"', to: 'href="/courses"' },
    { from: 'href="#blogs"', to: 'href="/blogs"' },
    { from: 'href="#about"', to: 'href="/about"' },
    { from: 'href="#contact"', to: 'href="/contact"' },
    { from: 'href="#jeecourses"', to: 'href="/jeecourses"' },
    { from: 'href="#neetcourses"', to: 'href="/neetcourses"' },
    { from: 'href="#foundationcourses"', to: 'href="/foundationcourses"' },
    { from: 'href="#journey"', to: 'href="/journey"' },
    { from: 'href="#reviews"', to: 'href="/reviews"' },
    { from: 'href="#privacy"', to: 'href="/privacy"' },
    { from: 'href="#terms"', to: 'href="/terms"' },
    { from: 'href="#sitemap"', to: 'href="/sitemap"' },
    { from: 'href="#appDownload"', to: 'href="/appDownload"' },
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const route of routes) {
        if (content.includes(route.from)) {
            // Replace all occurrences
            content = content.split(route.from).join(route.to);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + path.basename(filePath));
    }
}

// Process components
fs.readdirSync(componentsDir).forEach(file => {
    if (file.endsWith('.js')) {
        processFile(path.join(componentsDir, file));
    }
});

// Process router.js
// Wait, router.js had `<a href="#home"` which I might have missed
processFile(routerFile);
