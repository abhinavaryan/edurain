// Saves the web app's course list as website tiles (src/data/webappCourses.json); runs before every build.
// Needs VITE_API_URL (the backend address, the same as the web app's) in .env. Without it, or if the API
// cannot be reached, the copy saved last time is kept and the build goes on.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { toTile } from '../src/data/webappCourses.js';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const envFile = path.join(root, '.env');
const fromEnvFile = fs.existsSync(envFile)
    ? (fs.readFileSync(envFile, 'utf8').match(/^VITE_API_URL\s*=\s*(.+)$/m)?.[1] || '').trim().replace(/^['"]|['"]$/g, '')
    : '';
const api = (process.env.VITE_API_URL || fromEnvFile).replace(/\/+$/, '');
const out = path.join(root, 'src', 'data', 'webappCourses.json');

if (!api) {
    console.log('webapp courses: VITE_API_URL is not set, keeping the saved copy');
} else {
    try {
        const res = await fetch(`${api}/api/courses`, { signal: AbortSignal.timeout(15000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const list = await res.json();
        if (!Array.isArray(list) || list.length === 0) throw new Error('no courses');
        fs.writeFileSync(out, JSON.stringify(list.map(toTile), null, 2) + '\n');
        console.log(`webapp courses: saved ${list.length} courses`);
    } catch (err) {
        console.log(`webapp courses: could not load them (${err.message}), keeping the saved copy`);
    }
}
