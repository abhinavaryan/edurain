export function renderPopularCourses() {
    const courses = [
        { icon: '🔬', iconBg: '#ef4444', blobColor: '#fca5a5', category: 'Medical', title: 'NEET 2027', desc: 'Comprehensive medical entrance preparation with daily live classes and PCB practice.', link: '#courses' },
        { icon: '📐', iconBg: '#3b82f6', blobColor: '#93c5fd', category: 'Engineering', title: 'JEE 2027', desc: 'Master Physics, Chemistry, and Maths for India\'s toughest engineering exam.', link: '#courses' },
        { icon: '📚', iconBg: '#f59e0b', blobColor: '#fde68a', category: 'School', title: 'Foundation (6-10)', desc: 'Building strong conceptual basics for school exams and future competitive tests.', link: '#courses' },
    ];

    const cards = courses.map((c, i) => `
        <div class="er-course-card er-reveal er-reveal-delay-${i + 1}">
            <div class="er-course-blob" style="background:${c.blobColor};"></div>
            <div class="er-course-icon" style="background:${c.iconBg};">${c.icon}</div>
            <span class="er-course-cat">${c.category}</span>
            <h3 class="er-course-title">${c.title}</h3>
            <p class="er-course-desc">${c.desc}</p>
            <a href="${c.link}" class="er-explore-link">
                Explore Course
                <span class="er-explore-arrow">→</span>
            </a>
        </div>
    `).join('');

    return `
    <!-- ═══ SECTION B: POPULAR COURSES ═══ -->
    <section id="er-popular-courses" class="er-section" style="background:linear-gradient(160deg,#e8f5ee 0%,#d4eddf 50%,#c5e8d5 100%);">
        <div class="er-container">
            <h2 class="er-section-heading er-reveal" style="color:#0e3a24;">Popular Courses at <span style="color:#1f7d4e;">EduRain</span></h2>
            <p class="er-section-sub er-reveal er-reveal-delay-1" style="color:#2a5e3a;">
                Choose from our meticulously designed courses to kickstart your career in engineering or medicine.
            </p>
            <div class="er-courses-grid">
                ${cards}
            </div>
            <div style="text-align:center;margin-top:3rem;" class="er-reveal">
                <a href="#courses" class="er-view-all-btn">View All Courses →</a>
            </div>
        </div>
    </section>
    `;
}
