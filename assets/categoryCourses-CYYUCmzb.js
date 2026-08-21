import{t as e}from"./courses-BD523hjT.js";import{renderFAQ as t}from"./faq-Bo7AT8JC.js";function n(e){let t=`⭐`.repeat(Math.round(e.rating)),n=e.students>=1e3?`${(e.students/1e3).toFixed(1)}K`:e.students;return`
        <div class="glass-card course-card fade-in-section visible" data-category="${e.category}" data-link="${e.link||`#`}">
            <div class="course-thumb">
                <a href="${e.link||`#`}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%;">
                    <img loading="lazy" src="${e.thumbnail||`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80`}" alt="${e.title}" />
                </a>
            </div>
            <span class="course-category">${e.category}</span>
            <h3>
                <a href="${e.link||`#`}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
                    ${e.title}
                </a>
            </h3>
            <p class="course-instructor">by ${e.instructor}</p>
            <div class="course-meta">
                <span class="course-rating">${t} ${e.rating}</span>
                <span class="course-students">${n} students</span>
            </div>
            <div class="course-bottom">
                <span class="course-price">${e.price}</span>
                <a href="${e.link||`#`}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;">
                    View Details
                </a>
            </div>
        </div>
    `}function r(r,i,a){let o=e.filter(e=>e.category===a),s=o.length>0?o.map(n).join(``):`<p style="text-align: center; width: 100%; color: var(--text-muted);">No courses available in this category yet.</p>`;return`
        <section class="courses-section">
            <div class="section-header">
                <h2>${r}</h2>
                <p>${i}</p>
            </div>
            <div class="filter-row">
                <a href="/courses" class="filter-btn" style="text-decoration: none;">All</a>
                <a href="/courses/iit-jee" class="filter-btn ${a===`JEE`?`active`:``}" style="text-decoration: none;">JEE</a>
                <a href="/courses/neet" class="filter-btn ${a===`NEET`?`active`:``}" style="text-decoration: none;">NEET</a>
                <a href="/courses/foundation" class="filter-btn ${a===`FOUNDATION`?`active`:``}" style="text-decoration: none;">FOUNDATION</a>
            </div>
            <div class="courses-grid" style="margin-top: 40px;">
                ${s}
            </div>
        </section>
        ${t(a)}
    `}function i(){return r(`JEE Courses`,`Comprehensive preparation for IIT-JEE exams. Build a strong foundation and master the concepts to secure your seat in top engineering colleges.`,`JEE`)}function a(){return r(`NEET Courses`,`Crack NEET UG with expert-led coaching in Biology, Physics, and Chemistry designed to help medical aspirants secure top scores and a seat in India's best medical colleges.`,`NEET`)}function o(){return r(`Foundation Courses`,`A strong foundation changes everything. From Class 6 to 10, we make sure your concepts in Science, Maths, and English are crystal clear, the perfect stepping stone for future competitive exams.`,`FOUNDATION`)}export{o as renderFoundationCourses,i as renderJEECourses,a as renderNEETCourses};