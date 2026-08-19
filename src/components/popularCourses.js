export function renderPopularCourses() {
    const courses = [
        {
            icon: '🔬', iconBg: '#ef4444', blobColor: '#fca5a5', category: 'Medical', title: 'NEET 2027',
            link: '#courses?filter=NEET',
            tags: ['Class 11', 'Class 12', 'Dropper']
        },
        {
            icon: '📐', iconBg: '#3b82f6', blobColor: '#93c5fd', category: 'Engineering', title: 'JEE 2027',
            link: '#courses?filter=JEE',
            tags: ['Class 11', 'Class 12', 'Dropper']
        },
        {
            icon: '📚', iconBg: '#f59e0b', blobColor: '#fde68a', category: 'School', title: 'Foundation (6-10)',
            link: '#courses?filter=FOUNDATION',
            tags: ['Class 8', 'Class 9', 'Class 10']
        },
    ];

    const cards = courses.map((c, i) => `
        <div class="er-course-card glass-card er-reveal visible" style="background: #ffffff !important; border: 1px solid rgba(22, 163, 74, 0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
            <div class="er-course-blob" style="background:${c.blobColor};"></div>
            <div class="er-course-icon" style="background:${c.iconBg}; color: #ffffff;">${c.icon}</div>
            <span class="er-course-cat" style="color: #15803d; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.05em;">${c.category}</span>
            <h3 class="er-course-title" style="color: #0e3a24; font-weight: 800; font-size: 1.5rem; margin-top: 0.25rem;">${c.title}</h3>
          
            <!-- Tags Section -->
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1rem; margin-top: 1rem;">
                ${c.tags.map(tag => `
                    <span style="padding: 6px 16px; border: 1px solid #cbd5e1; border-radius: 50px; font-size: 14px; color: #334155; background: #f8fafc; font-weight: 600;">
                        ${tag}
                    </span>
                `).join('')}
            </div>

            <a href="${c.link}" class="er-explore-link" style="color: #16a34a; font-weight: 700;">
                Explore Course
                <span class="er-explore-arrow" style="background: #16a34a; color: #ffffff;">→</span>
            </a>
        </div>
    `).join('');

    return `
    <!-- ═══ SECTION B: POPULAR COURSES ═══ -->
    <section id="er-popular-courses" class="er-section" style="background:linear-gradient(160deg,#e8f5ee 0%,#d4eddf 50%,#c5e8d5 100%);">
        <div class="er-container">
            <h1 class="er-section-heading er-reveal visible" style="color:#0e3a24; font-weight: 800;"> Explore Our <span style="color:#1f7d4e;">Courses</span></h1>
            <p class="er-section-sub er-reveal visible" style="color:#2a5e3a;">
                Find the best course for your JEE, NEET, or foundation preparation and start learning today.
            </p>
            <div class="er-courses-grid">
                ${cards}
            </div>
            <div style="text-align:center;margin-top:3rem;" class="er-reveal visible">
                <a href="/courses" class="er-view-all-btn">View All Courses →</a>
            </div>
        </div>
    </section>
    `;
}