const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/components/about-new.js');
let content = fs.readFileSync(file, 'utf8');

const toRemove = [
  // 1. Core Manifesto div block
  `<div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3 shadow-sm">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        Core Manifesto
      </div>`,
  // 2. Card 1 footer
  `<div class="pt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs text-emerald-300/80">
<span>Commitment: Radical Affordability</span>
<span class="text-yellow-400 font-semibold flex items-center gap-1">Verified Impact →</span>
</div>`,
  // 3. Card 2 footer
  `<div class="pt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs text-emerald-300/80">
<span>Goal: 100% Student Potential Realized</span>
<span class="text-emerald-400 font-semibold flex items-center gap-1">The 2030 Roadmap →</span>
</div>`,
  // 4. Educators at heart...
  `<p class="text-slate-300 max-w-lg text-xs sm:text-sm leading-relaxed">
        Educators at heart, engineers by discipline. Leaving corporate chairs to spend over a decade shaping the future of Indian education.
      </p>`,
  // 5. Tech Manifesto
  `<span class="text-xs text-emerald-400 font-semibold cursor-pointer hover:underline">Tech Manifesto →</span>`,
  // 6. MOBILE EXPERIENCE...
  `<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          MOBILE EXPERIENCE • ACCESSIBLE ANYWHERE
        </div>`
];

toRemove.forEach(str => {
  // Try exact match first
  if (content.includes(str)) {
    content = content.replace(str, '');
    console.log("Matched exactly!");
  } else {
    // If not, replace all newlines in search string with literal '\\n' and try again
    const encoded = str.replace(/\n/g, '\\n');
    if (content.includes(encoded)) {
      content = content.replace(encoded, '');
      console.log("Matched encoded!");
    } else {
      console.log("Failed to match:", str.substring(0, 30));
    }
  }
});

fs.writeFileSync(file, content);
console.log('about-new.js cleaned pass 2!');
