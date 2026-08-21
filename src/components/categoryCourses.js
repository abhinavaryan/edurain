import coursesData from '../data/courses.json';
import { renderFAQ } from './faq.js';

function renderCourseCard(course) {
    const stars = '⭐'.repeat(Math.round(course.rating));
    const studentCount = course.students >= 1000
        ? `${(course.students / 1000).toFixed(1)}K`
        : course.students;

    return `
        <div class="glass-card course-card fade-in-section visible" data-category="${course.category}" data-link="${course.link || '#'}">
            <div class="course-thumb">
                <a href="${course.link || '#'}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%;">
                    <img loading="lazy" src="${course.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'}" alt="${course.title}" />
                </a>
            </div>
            <span class="course-category">${course.category}</span>
            <h3>
                <a href="${course.link || '#'}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
                    ${course.title}
                </a>
            </h3>
            <p class="course-instructor">by ${course.instructor}</p>
            <div class="course-meta">
                <span class="course-rating">${stars} ${course.rating}</span>
                <span class="course-students">${studentCount} students</span>
            </div>
            <div class="course-bottom">
                <span class="course-price">${course.price}</span>
                <a href="${course.link || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;">
                    View Details
                </a>
            </div>
        </div>
    `;
}

function renderCategoryPage(title, description, categoryKey) {
    const filteredCourses = coursesData.filter(c => c.category === categoryKey);
    const coursesHtml = filteredCourses.length > 0 
        ? filteredCourses.map(renderCourseCard).join('') 
        : '<p style="text-align: center; width: 100%; color: var(--text-muted);">No courses available in this category yet.</p>';

    return `
        <section class="courses-section">
            <div class="section-header">
                <h2>${title}</h2>
                <p>${description}</p>
            </div>
            <div class="filter-row">
                <a href="/courses" class="filter-btn" style="text-decoration: none;">All</a>
                <a href="/courses/iit-jee" class="filter-btn ${categoryKey === 'JEE' ? 'active' : ''}" style="text-decoration: none;">JEE</a>
                <a href="/courses/neet" class="filter-btn ${categoryKey === 'NEET' ? 'active' : ''}" style="text-decoration: none;">NEET</a>
                <a href="/courses/foundation" class="filter-btn ${categoryKey === 'FOUNDATION' ? 'active' : ''}" style="text-decoration: none;">FOUNDATION</a>
            </div>
            <div class="courses-grid" style="margin-top: 40px;">
                ${coursesHtml}
            </div>
        </section>
        ${renderFAQ(categoryKey)}
    `;
}

export function renderJEECourses() {
    return renderCategoryPage(
        "JEE Courses", 
        "Comprehensive preparation for IIT-JEE exams. Build a strong foundation and master the concepts to secure your seat in top engineering colleges.",
        "JEE"
    );
}

export function renderNEETCourses() {
    return renderCategoryPage(
        "NEET Courses",
        "Focused coaching for medical aspirants. In-depth coverage of Biology, Physics, and Chemistry to help you crack NEET with top scores.",
        "NEET"
    );
}

export function renderFoundationCourses() {
    return renderCategoryPage(
        "Foundation Courses",
        "Strengthen your core concepts in Science and Mathematics from Class 6 to 10. The perfect stepping stone for future competitive exams.",
        "FOUNDATION"
    );
}
