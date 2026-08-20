const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'src/components/homeReviews.js',
    'src/components/freeDemo.js',
    'src/components/footer.js',
    'src/components/faculty.js',
    'src/components/courses.js',
    'src/components/categoryCourses.js',
    'src/components/blogs.js',
    'src/components/appDownload.js'
];

const workspacePath = 'c:\\Users\\abhin\\.gemini\\antigravity\\scratch\\edurain';

filesToUpdate.forEach(file => {
    const fullPath = path.join(workspacePath, file);
    if(fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        content = content.replace(/<img(?![^>]*loading="lazy")/g, '<img loading="lazy"');
        fs.writeFileSync(fullPath, content, 'utf8');
    }
});

// index.html
const indexPath = path.join(workspacePath, 'index.html');
if(fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    indexContent = indexContent.replace('<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>', '<script defer src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>');
    fs.writeFileSync(indexPath, indexContent, 'utf8');
}
console.log('Optimizations applied.');
