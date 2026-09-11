const fs = require('fs');
const file = 'connected_overview.html';
let content = fs.readFileSync(file, 'utf8');
let lines = content.split('\n');

// Teaching Journey link
content = content.replace('<span class="text-xs text-yellow-400 font-semibold cursor-pointer hover:underline">Teaching Journey →</span>', '');

lines = content.split('\n');

// Find SECTION 2
let sec2Start = lines.findIndex(l => l.includes('<!-- SECTION 2: Why Traditional EdTech Falls Short (3 Pillars) -->'));
let sec2End = lines.findIndex((l, i) => i > sec2Start && l.includes('<div class="h-6 w-px bg-gradient-to-b from-emerald-500/20 via-emerald-400/60 to-emerald-500/20"></div>')) + 1; // including the closing div

if (sec2Start !== -1 && sec2End !== 0) {
    lines.splice(sec2Start, sec2End - sec2Start + 1);
}

// Find SECTION 5
let sec5Start = lines.findIndex(l => l.includes('<!-- SECTION 5: The Edu Rain Milestone Journey Timeline -->'));
let sec5End = lines.findIndex((l, i) => i > sec5Start && l.includes('<div class="h-6 w-px bg-gradient-to-b from-emerald-500/20 via-emerald-400/60 to-emerald-500/20"></div>')) + 1;

if (sec5Start !== -1 && sec5End !== 0) {
    lines.splice(sec5Start, sec5End - sec5Start + 1);
}

fs.writeFileSync(file, lines.join('\n'));
console.log('Modifications done.');
