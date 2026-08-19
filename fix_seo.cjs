const fs = require('fs');
const path = require('path');

// Fix index.html
const indexHtmlPath = path.join(__dirname, 'index.html');
const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="canonical" href="https://www.edurain.in/" />
  <meta name="robots" content="index, follow" />
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="/images/logo.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Best Online Coaching for IIT-JEE, NEET & Class 6-10 | EduRain</title>
  <meta name="description"
    content="EduRain offers online coaching for Class 6-10, foundation courses, IIT-JEE preparation, NEET coaching, board exams and competitive exam preparation." />

  <!-- Google Fonts & FontAwesome -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Mermaid.js for Agent Workflow System Architecture Diagrams -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
</head>

<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>

</html>`;
fs.writeFileSync(indexHtmlPath, indexHtmlContent, 'utf8');


// Add robots to jeecourse, neetcourse, foundationcourse
const addRobots = (filename) => {
  const filePath = path.join(__dirname, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('<meta name="robots"')) {
    content = content.replace('<head>', '<head>\\n    <meta name="robots" content="index, follow" />');
    fs.writeFileSync(filePath, content, 'utf8');
  }
};

addRobots('jeecourse/index.html');
addRobots('neetcourse/index.html');
addRobots('foundationcourse/index.html');


// Fix router.js
const routerPath = path.join(__dirname, 'src', 'router.js');
let routerCode = fs.readFileSync(routerPath, 'utf8');
routerCode = routerCode.replace('"https://edurain.in/"', '"https://www.edurain.in/"');
fs.writeFileSync(routerPath, routerCode, 'utf8');

console.log('Done');
