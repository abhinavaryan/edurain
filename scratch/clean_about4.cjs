const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/components/about-new.js');
let content = fs.readFileSync(file, 'utf8');

const stringsToRemove = [
  // 1. Core Manifesto
  '<div class=\\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3 shadow-sm\\">\\n<span class=\\"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse\\"></span>\\n        Core Manifesto\\n      </div>',
  
  // 2. Commitment: Radical Affordability div
  '<div class=\\"pt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs text-emerald-300/80\\">\\n<span>Commitment: Radical Affordability</span>\\n<span class=\\"text-yellow-400 font-semibold flex items-center gap-1\\">Verified Impact →</span>\\n</div>',
  
  // 3. Goal: 100% Student Potential Realized div
  '<div class=\\"pt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs text-emerald-300/80\\">\\n<span>Goal: 100% Student Potential Realized</span>\\n<span class=\\"text-emerald-400 font-semibold flex items-center gap-1\\">The 2030 Roadmap →</span>\\n</div>',
  
  // 4. Educators at heart...
  '<p class=\\"text-slate-300 max-w-lg text-xs sm:text-sm leading-relaxed\\">\\n        Educators at heart, engineers by discipline. Leaving corporate chairs to spend over a decade shaping the future of Indian education.\\n      </p>',
  
  // 5. Tech Manifesto link
  '<span class=\\"text-xs text-emerald-400 font-semibold cursor-pointer hover:underline\\">Tech Manifesto →</span>',
  
  // 6. MOBILE EXPERIENCE div
  '<!-- Badge -->\\n<div class=\\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider\\">\\n<span class=\\"w-2 h-2 rounded-full bg-emerald-400 animate-pulse\\"></span>\\n          MOBILE EXPERIENCE • ACCESSIBLE ANYWHERE\\n        </div>'
];

stringsToRemove.forEach(str => {
  if (content.includes(str)) {
    content = content.split(str).join('');
    console.log("Removed a section successfully.");
  } else {
    console.log("Failed to find exactly: " + str.substring(0, 50));
  }
});

fs.writeFileSync(file, content);
console.log('Done!');
