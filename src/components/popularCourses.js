export function renderPopularCourses() {
    const courses = [
        { icon: '🔬', iconBg: '#ef4444', blobColor: '#fca5a5', category: 'Medical',      title: 'NEET 2027',        desc: 'Comprehensive medical entrance preparation with daily live classes and PCB practice.',         link: '#courses' },
        { icon: '📐', iconBg: '#3b82f6', blobColor: '#93c5fd', category: 'Engineering',  title: 'JEE 2027',         desc: 'Master Physics, Chemistry, and Maths for India\'s toughest engineering exam.',             link: '#courses' },
        { icon: '⭐', iconBg: '#2a9d62', blobColor: '#6ee7b7', category: 'Medical',      title: 'NEET Dropper',     desc: 'Specialized batch for repeaters focusing on shortcut techniques and intensive practice.', link: '#courses' },
        { icon: '✏️', iconBg: '#7c3aed', blobColor: '#c4b5fd', category: 'Engineering',  title: 'JEE Dropper',      desc: 'One-year intensive program to secure top ranks in JEE Mains and Advanced.',               link: '#courses' },
        { icon: '📚', iconBg: '#f59e0b', blobColor: '#fde68a', category: 'School',       title: 'Foundation (6-10)',desc: 'Building strong conceptual basics for school exams and future competitive tests.',          link: '#courses' },
        { icon: '🎓', iconBg: '#0891b2', blobColor: '#a5f3fc', category: 'University',   title: 'CUET 2027',        desc: 'Prepare for top central universities with our expert-led common entrance batch.',          link: '#courses' },
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
    <section id="er-popular-courses" class="er-section" style="background:#fff;">
        <div class="er-container">
            <h2 class="er-section-heading er-reveal">Popular Courses at <span style="color:#2a9d62;">EduRain</span></h2>
            <p class="er-section-sub er-reveal er-reveal-delay-1">
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
