// npm run courses:webapp -> course tiles from the web app; npm run courses:old -> the old tiles (courses.json).
// Then deploy (npm run deploy) for the website to change.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const mode = process.argv[2];
if (mode !== 'webapp' && mode !== 'old') {
    console.error('Use: node scripts/courses_source.mjs webapp|old');
    process.exit(1);
}
const file = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'coursesSource.json');
fs.writeFileSync(file, JSON.stringify({ fromWebapp: mode === 'webapp' }, null, 2) + '\n');
console.log(mode === 'webapp' ? 'Course tiles now come from the web app. Deploy to publish.' : 'Course tiles are back to the old list. Deploy to publish.');
