const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/components/about-new.js');
let content = fs.readFileSync(file, 'utf8');

// 1. Core Manifesto
content = content.replace(/<div class="inline-flex items-center gap-2 px-3\.5 py-1 rounded-full bg-emerald-950\/60 border border-emerald-500\/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3 shadow-sm">\\n<span class="w-1\.5 h-1\.5 rounded-full bg-emerald-400 animate-pulse"><\/span>\\n        Core Manifesto\\n      <\/div>/g, '');

// 2. Commitment: Radical Affordability
content = content.replace(/<div class="pt-4 border-t border-emerald-900\/60 flex items-center justify-between text-xs text-emerald-300\/80">\\n<span>Commitment: Radical Affordability<\/span>\\n<span class="text-yellow-400 font-semibold flex items-center gap-1">Verified Impact →<\/span>\\n<\/div>/g, '');

// 3. Goal: 100% Student Potential Realized
content = content.replace(/<div class="pt-4 border-t border-emerald-900\/60 flex items-center justify-between text-xs text-emerald-300\/80">\\n<span>Goal: 100% Student Potential Realized<\/span>\\n<span class="text-emerald-400 font-semibold flex items-center gap-1">The 2030 Roadmap →<\/span>\\n<\/div>/g, '');

// 4. Educators at heart...
content = content.replace(/<p class="text-slate-300 max-w-lg text-xs sm:text-sm leading-relaxed">\\n        Educators at heart, engineers by discipline\. Leaving corporate chairs to spend over a decade shaping the future of Indian education\.\\n      <\/p>/g, '');

// 5. Tech Manifesto
content = content.replace(/<span class="text-xs text-emerald-400 font-semibold cursor-pointer hover:underline">Tech Manifesto →<\/span>/g, '');

// 6. MOBILE EXPERIENCE...
content = content.replace(/<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950\/80 border border-emerald-400\/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">\\n<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"><\/span>\\n          MOBILE EXPERIENCE • ACCESSIBLE ANYWHERE\\n        <\/div>/g, '');

fs.writeFileSync(file, content);
console.log('about-new.js cleaned!');
