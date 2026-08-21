import{t as e}from"./courses-BD523hjT.js";import{initFAQ as t,renderFAQ as n}from"./faq-Bo7AT8JC.js";function r(){return`
        <section class="courses-section" id="courses-page">
            <div class="section-header">
                <h1>Our Courses</h1>
                <h2 style="font-size: var(--fs-lg); color: var(--text-secondary); font-weight: 400;">Find the best course for your IIT JEE, NEET, or Foundation (Class 6th to 10th) preparation and start learning today </h2>
            </div>
            <div class="filter-row">
                <a href="/courses" class="filter-btn active" style="text-decoration: none;">All</a>
                <a href="/courses/iit-jee" class="filter-btn" style="text-decoration: none;">JEE</a>
                <a href="/courses/neet" class="filter-btn" style="text-decoration: none;">NEET</a>
                <a href="/courses/foundation" class="filter-btn" style="text-decoration: none;">FOUNDATION</a>
            </div>
            <div class="courses-grid" id="courses-grid">
                ${e.map(e=>{let t=`⭐`.repeat(Math.round(e.rating)),n=e.students>=1e3?`${(e.students/1e3).toFixed(1)}K`:e.students;return`
            <div class="glass-card course-card fade-in-section" data-category="${e.category}" data-link="${e.link||`#`}">
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
        `}).join(``)}
            </div>
        </section>
        ${n()}
    `}function i(){let e=document.querySelectorAll(`.course-card`);e.forEach(e=>{e.classList.add(`fade-in-section`,`visible`)}),e.forEach(e=>{e.style.cursor=`pointer`,e.addEventListener(`click`,t=>{if(t.target.closest(`a`))return;let n=e.getAttribute(`data-link`);n&&n!==`#`&&window.open(n,`_blank`,`noopener,noreferrer`)})}),t()}export{i as initCourses,r as renderCourses};