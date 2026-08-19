import coursesData from '../data/courses.json';

export function renderCourses() {
    const coursesHtml = coursesData.map(course => {
        const stars = '⭐'.repeat(Math.round(course.rating));
        const studentCount = course.students >= 1000
            ? `${(course.students / 1000).toFixed(1)}K`
            : course.students;

        return `
            <div class="glass-card course-card fade-in-section" data-category="${course.category}" data-link="${course.link || '#'}">
                <div class="course-thumb">
                    <a href="${course.link || '#'}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%;">
                        <img src="${course.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'}" alt="${course.title}" />
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
    }).join('');

    return `
        <section class="courses-section" id="courses-page">
            <div class="section-header">
                <h2>Our Courses</h2>
                <p>Explore our comprehensive course catalog</p>
            </div>
            <div class="filter-row">
                <a href="/courses" class="filter-btn active" style="text-decoration: none;">All</a>
                <a href="/courses/iit-jee" class="filter-btn" style="text-decoration: none;">JEE</a>
                <a href="/courses/neet" class="filter-btn" style="text-decoration: none;">NEET</a>
                <a href="/courses/foundation" class="filter-btn" style="text-decoration: none;">FOUNDATION</a>
            </div>
            <div class="courses-grid" id="courses-grid">
                ${coursesHtml}
            </div>
        </section>
    `;
}

export function initCourses() {
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.classList.add('fade-in-section', 'visible');
    });

    courseCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            const link = card.getAttribute('data-link');
            if (link && link !== '#') {
                window.open(link, '_blank', 'noopener,noreferrer');
            }
        });
    });
}
