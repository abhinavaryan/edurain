const fs = require('fs');
const path = require('path');

const routerPath = path.join(__dirname, 'src', 'router.js');
let routerCode = fs.readFileSync(routerPath, 'utf8');

// Update setMetaTags function
const oldFunc = `function setMetaTags(title, description) {
  document.title = title;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;
}`;

const newFunc = `function setMetaTags(title, description, canonicalUrl) {
  document.title = title;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  if (canonicalUrl) {
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;
  }
}`;

routerCode = routerCode.replace(oldFunc, newFunc);

// Update route calls
const replacements = [
  {
    find: `setMetaTags("Best Online Coaching for IIT-JEE, NEET & Class 6-10 | EduRain", "EduRain offers online coaching for Class 6-10, foundation courses, IIT-JEE preparation, NEET coaching, board exams and competitive exam preparation.");`,
    replace: `setMetaTags("Best Online Coaching for IIT-JEE, NEET & Class 6-10 | EduRain", "EduRain offers online coaching for Class 6-10, foundation courses, IIT-JEE preparation, NEET coaching, board exams and competitive exam preparation.", "https://www.edurain.in/");`
  },
  {
    find: `setMetaTags("Explore All Courses – IIT JEE, NEET & Foundation (Class 6-10)", "Explore IIT JEE, NEET & Foundation courses for Class 6-10 with expert faculty, structured curriculum & proven results. Take the first step toward success");`,
    replace: `setMetaTags("Explore All Courses – IIT JEE, NEET & Foundation (Class 6-10)", "Explore IIT JEE, NEET & Foundation courses for Class 6-10 with expert faculty, structured curriculum & proven results. Take the first step toward success", "https://www.edurain.in/courses/");`
  },
  {
    find: `setMetaTags("IIT JEE, NEET & Foundation Blogs | EduRain", "Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides");`,
    replace: `setMetaTags("IIT JEE, NEET & Foundation Blogs | EduRain", "Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides", "https://www.edurain.in/blogs/");`
  },
  {
    find: `'/about-us': {
    render: () => renderAbout(),
    postRender: () => { }
  },`,
    replace: `'/about-us': {
    render: () => renderAbout(),
    postRender: () => setMetaTags("About Us - EduRain", "About EduRain", "https://www.edurain.in/about-us/")
  },`
  },
  {
    find: `'/contact-us': {
    render: () => renderContact(),
    postRender: () => { }
  },`,
    replace: `'/contact-us': {
    render: () => renderContact(),
    postRender: () => setMetaTags("Contact Us - EduRain", "Contact EduRain", "https://www.edurain.in/contact-us/")
  },`
  },
  {
    find: `setMetaTags("Best IIT JEE Online Coaching for JEE Main & Advanced | EduRain", "Crack IIT JEE with EduRain: live classes, expert faculty, and structured material for complete JEE Main & Advanced exam preparation")`,
    replace: `setMetaTags("Best IIT JEE Online Coaching for JEE Main & Advanced | EduRain", "Crack IIT JEE with EduRain: live classes, expert faculty, and structured material for complete JEE Main & Advanced exam preparation", "https://www.edurain.in/courses/iit-jee/")`
  },
  {
    find: `setMetaTags("NEET 2027-28 Complete Online Preparation with EduRain", "Start your NEET 2027-28 online preparation with EduRain: live classes, expert faculty, and structured NCERT-based material with regular mock tests.")`,
    replace: `setMetaTags("NEET 2027-28 Complete Online Preparation with EduRain", "Start your NEET 2027-28 online preparation with EduRain: live classes, expert faculty, and structured NCERT-based material with regular mock tests.", "https://www.edurain.in/courses/neet/")`
  },
  {
    find: `setMetaTags("Best Online Coaching for Class 6 to 10, IIT JEE & NEET Ready", "Live online classes for Class 6 to 10 with expert-led Math, Science & more: building a strong IIT JEE & NEET foundation. Interactive learning, real results")`,
    replace: `setMetaTags("Best Online Coaching for Class 6 to 10, IIT JEE & NEET Ready", "Live online classes for Class 6 to 10 with expert-led Math, Science & more: building a strong IIT JEE & NEET foundation. Interactive learning, real results", "https://www.edurain.in/courses/foundation/")`
  }
];

for (const rep of replacements) {
  routerCode = routerCode.replace(rep.find, rep.replace);
}

fs.writeFileSync(routerPath, routerCode, 'utf8');


// Now update the standalone HTML files
const updateHtmlFile = (filename, canonicalUrl) => {
  const filePath = path.join(__dirname, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('<link rel="canonical"')) {
    content = content.replace('<head>', '<head>\n    <link rel="canonical" href="' + canonicalUrl + '" />');
    fs.writeFileSync(filePath, content, 'utf8');
  }
};

updateHtmlFile('index.html', 'https://www.edurain.in/');
updateHtmlFile('jeecourse/index.html', 'https://www.edurain.in/courses/iit-jee/');
updateHtmlFile('neetcourse/index.html', 'https://www.edurain.in/courses/neet/');
updateHtmlFile('foundationcourse/index.html', 'https://www.edurain.in/courses/foundation/');

console.log('Success');
