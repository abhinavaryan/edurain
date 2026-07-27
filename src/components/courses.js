import coursesData from '../data/courses.json';

export function renderCourses() {
    const coursesHtml = coursesData.map(course => {
        const stars = '⭐'.repeat(Math.round(course.rating));
        const studentCount = course.students >= 1000
            ? `${(course.students / 1000).toFixed(1)}K`
            : course.students;

        return `
            <div class="glass-card course-card fade-in-section" data-category="${course.category}">
                <div class="course-thumb" style="background-image: url('${course.thumbnail}')"></div>
                <span class="course-category">${course.category}</span>
                <h3>${course.title}</h3>
                <p class="course-instructor">by ${course.instructor}</p>
                <div class="course-meta">
                    <span class="course-rating">${stars} ${course.rating}</span>
                    <span class="course-students">${studentCount} students</span>
                </div>
                <div class="course-bottom">
                    <span class="course-price">${course.price}</span>
                    <button class="btn btn-accent btn-sm">View Details</button>
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
                <button class="filter-btn active" data-filter="All">All</button>
                <button class="filter-btn" data-filter="JEE">JEE</button>
                <button class="filter-btn" data-filter="NEET">NEET</button>
                <button class="filter-btn" data-filter="FOUNDATION">FOUNDATION</button>
            </div>
            <div class="courses-grid" id="courses-grid">
                ${coursesHtml}
            </div>
        </section>
    `;
}

export function initCourses() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    function applyFilter(filter) {
        let matched = false;
        filterBtns.forEach(b => {
            const isMatch = b.dataset.filter === filter;
            b.classList.toggle('active', isMatch);
            if (isMatch) matched = true;
        });

        if (!matched && filterBtns.length) {
            filterBtns[0].classList.add('active');
            filter = 'All';
        }

        courseCards.forEach(card => {
            if (filter === 'All' || card.dataset.category === filter) {
                card.style.display = '';
                card.classList.add('fade-in-section', 'visible');
            } else {
                card.style.display = 'none';
            }
        });
    }

    let initialFilter = 'All';
    const hash = window.location.hash;
    if (hash.includes('?filter=')) {
        initialFilter = decodeURIComponent(hash.split('?filter=')[1]);
    }

    applyFilter(initialFilter);

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            applyFilter(filter);
        });
    });
}
