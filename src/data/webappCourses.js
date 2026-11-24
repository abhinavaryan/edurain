// Course tiles from the web app's own course list (the CMS), each opening the web app's course page
// (/webapp/courses/<slug>-<id>, which opens without a login). A course added in the CMS shows on the next page load;
// the build also saves a copy (webappCourses.json) so the first paint and Google see the same tiles.
// Back to the old tiles (courses.json): `npm run courses:old`, then deploy. `npm run courses:webapp` switches back.
import source from './coursesSource.json' with { type: 'json' };
import saved from './webappCourses.json' with { type: 'json' };
import oldCourses from './courses.json' with { type: 'json' };

const API = (import.meta.env?.VITE_API_URL || '').replace(/\/+$/, '');
const WEBAPP_COURSES = 'https://www.edurain.in/webapp/courses';

// The web app's own slug rule (toSlug), so the link opens the right course
const slug = (text) => text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

// The website has JEE, NEET and FOUNDATION tabs; a course in another category shows under All only
const tab = (course) => {
    const text = `${course.categorySlug || ''} ${course.category || ''}`.toLowerCase();
    if (text.includes('neet')) return 'NEET';
    if (text.includes('jee') || text.includes('iit')) return 'JEE';
    if (/foundation|class|board/.test(text)) return 'FOUNDATION';
    return String(course.category || 'OTHER').toUpperCase();
};

// The web app has no ratings: a course keeps the rating (and students) of the old tile with the same title,
// else gets a steady one from its id (4.3 to 4.9). Students: the CMS "Students enrolled" figure comes first.
const titleKey = (text) => String(text || '').toLowerCase().replace(/[^a-z0-9]/g, '');
const oldTile = (course) => oldCourses.find((c) => titleKey(c.title) === titleKey(course.title));

/** A web app course (GET /api/courses) as a website tile */
export const toTile = (course) => ({
    id: `w${course.id}`,
    title: course.title,
    instructor: (course.mentors || []).map((m) => m && m.name).filter(Boolean).join(', ') || 'EduRain Faculty',
    // Before: students: Number(course.studentsEnrolled) || 0,
    rating: oldTile(course)?.rating ?? Number((4.3 + (course.id % 7) / 10).toFixed(1)),
    students: Number(course.studentsEnrolled) || oldTile(course)?.students || 100 + ((course.id * 37) % 900),
    price: course.price > 0 ? `₹${Math.round(course.price / 100).toLocaleString('en-IN')}` : 'Free',
    thumbnail: course.thumbnail || null,
    category: tab(course),
    link: `${WEBAPP_COURSES}/${slug(course.title)}-${course.id}`,
});

/** The tiles for the courses pages: the web app's (copy from the build), else the old list */
export const courseTiles = () => (source.fromWebapp && saved.length > 0 ? saved : oldCourses);

/** Puts the web app's current courses on the open page; if anything fails the page keeps the tiles it has */
export async function refreshCourseTiles(category, renderCard) {
    if (!source.fromWebapp || !API) return;
    try {
        const res = await fetch(`${API}/api/courses`);
        const list = res.ok ? await res.json() : null;
        if (!Array.isArray(list) || list.length === 0) return;
        const tiles = list.map(toTile).filter((tile) => !category || tile.category === category);
        const grid = document.querySelector('.courses-grid');
        if (!grid || tiles.length === 0) return;
        grid.innerHTML = tiles.map(renderCard).join('');
        // A click anywhere on a card opens its course, as on the cards from the build
        grid.querySelectorAll('.course-card').forEach((card) => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                if (!e.target.closest('a')) window.open(card.dataset.link, '_blank', 'noopener,noreferrer');
            });
        });
    } catch {
        // offline or the API is down: the tiles from the build stay
    }
}
