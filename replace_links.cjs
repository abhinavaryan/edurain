const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');
const routerFile = path.join(__dirname, 'src/router.js');

const routes = [
    { from: 'href="/about"', to: 'href="/about-us"' },
    { from: 'href="/contact"', to: 'href="/contact-us"' },
    { from: 'href="/jeecourses"', to: 'href="/courses/iit-jee"' },
    { from: 'href="/neetcourses"', to: 'href="/courses/neet"' },
    { from: 'href="/foundationcourses"', to: 'href="/courses/foundation"' },
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

processFile(routerFile);
