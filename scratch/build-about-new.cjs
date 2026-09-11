const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const htmlContent = fs.readFileSync('connected_overview.html', 'utf8');
const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let body = bodyMatch ? bodyMatch[1] : '';

// Remove script tags from body
body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

const styleMatch = htmlContent.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
const customStyles = styleMatch ? styleMatch[1] : '';

const tailwindMatch = htmlContent.match(/tailwind\.config\s*=\s*(\{[\s\S]*?\})\s*<\/script>/i);
let tailwindConfig = tailwindMatch ? tailwindMatch[1] : '{}';
// Fix unquoted keys if any, though tailwind config usually works as a JS object.
// We'll write it out as a CJS module
const twConfigContent = `
module.exports = {
  content: ['./connected_overview.html'],
  theme: ${tailwindConfig}.theme || {},
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms')
  ]
};
`;

fs.writeFileSync('tailwind-about.config.cjs', twConfigContent);

const inputCss = `
@tailwind base;
@tailwind components;
@tailwind utilities;
${customStyles}
`;
fs.writeFileSync('temp-about-input.css', inputCss);

console.log("Running tailwindcss...");
execSync('npx tailwindcss@3 -i temp-about-input.css -o temp-about-output.css -c tailwind-about.config.cjs --minify', { stdio: 'inherit' });

let generatedCss = fs.readFileSync('temp-about-output.css', 'utf8');

// Safely serialize the HTML content to a JavaScript string
const finalHtml = `
    <style>
      /* Scoped Tailwind CSS for About New Page */
      ${generatedCss}
    </style>
    <div id="about-new-scope" class="antialiased selection:bg-yellow-400 selection:text-black bg-[#001711] text-[#c2ebdc] min-h-screen py-10 sm:py-12">
      ${body}
    </div>
  `;

const componentCode = "export function renderAbout() {\n  return " + JSON.stringify(finalHtml) + ";\n}\n\n" +
`export function initAboutNew() {
  const elements = document.querySelectorAll('.counter-value');
  if (!elements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0');
        const hasComma = el.getAttribute('data-comma') === 'true';
        const duration = 2500;
        let start = null;
        
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          let currentNum = easeProgress * target;
          
          let currentStr = currentNum.toFixed(decimals);
          if (hasComma) {
             currentStr = Number(currentStr).toLocaleString('en-US');
          }
          
          el.innerText = prefix + currentStr + suffix;
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            let finalStr = target.toFixed(decimals);
            if (hasComma) finalStr = Number(finalStr).toLocaleString('en-US');
            el.innerText = prefix + finalStr + suffix;
          }
        };
        
        window.requestAnimationFrame(step);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => observer.observe(el));
}`;

fs.writeFileSync('src/components/about-new.js', componentCode);

// Cleanup
fs.unlinkSync('temp-about-input.css');
fs.unlinkSync('temp-about-output.css');
fs.unlinkSync('tailwind-about.config.cjs');

console.log("Successfully generated src/components/about-new.js!");
