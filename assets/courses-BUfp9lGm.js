import{t as e}from"./courses-BKPhEzz0.js";import{initFAQ as t,renderFAQ as n}from"./faq-Bo7AT8JC.js";function r(){return`
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

        <!-- Elegant Glassmorphism Section with Golden Ratio Typography -->
        <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
            
            <!-- Background Ambient Glow -->
            <div style="position: absolute; top: -50%; left: -20%; width: 60%; height: 100%; background: radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -30%; right: -20%; width: 50%; height: 80%; background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            
            <div style="position: relative; z-index: 1;">
                <h2 class="er-anime-reveal" style="color: #f8fafc; font-size: 2.2rem; margin-bottom: 1.2rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; font-family: 'Inter', sans-serif;">
                    IIT JEE, NEET and Foundation Courses <span style="background: -webkit-linear-gradient(45deg, #fde047, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">(Class 6th–10th)</span>
                </h2>
                
                <p class="er-anime-reveal" style="margin-bottom: 1.2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem; font-weight: 400; max-width: 85ch;">
                    EduRain offers structured coaching for students preparing for IIT JEE, NEET, and those building their academic foundation from Class 6th to 10th. Our JEE courses cover Physics, Chemistry and Maths with a strong focus on problem-solving and speed, guided by faculty who've been teaching this exam for years. 
                </p>
                <p class="er-anime-reveal" style="margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem; font-weight: 400; max-width: 85ch;">
                    The NEET courses are built around conceptual clarity in Physics, Chemistry and Biology, so students aren't just memorizing but actually understanding what they study. For younger students, our Foundation courses focus on strengthening core Maths and Science concepts early, so the transition into JEE or NEET preparation later feels natural instead of overwhelming. Every course, whether it's for a Class 11 student just starting out or a dropper repeating the year, is designed around where the student currently stands and what they need to improve next.
                </p>
                
                <div class="er-anime-reveal" style="width: 50px; height: 3px; background: #3b82f6; border-radius: 2px; margin-bottom: 1.8rem;"></div>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">What you get with every EduRain course:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Live interactive classes</strong> with subject experts, not pre-recorded lectures only.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Doubt-solving sessions</strong> where students can ask questions directly, not just in a group chat.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Experienced faculty</strong> who specialize in JEE, NEET and school-level teaching.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Regular tests</strong> with detailed performance analysis to track real progress.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Study material</strong> and practice sheets aligned with the latest exam pattern.</span>
                    </li>
                </ul>
            </div>
        </section>

        ${n()}
    `}function i(){let e=document.querySelectorAll(`.course-card`);e.forEach(e=>{e.classList.add(`fade-in-section`,`visible`)}),e.forEach(e=>{e.style.cursor=`pointer`,e.addEventListener(`click`,t=>{if(t.target.closest(`a`))return;let n=e.getAttribute(`data-link`);n&&n!==`#`&&window.open(n,`_blank`,`noopener,noreferrer`)})}),window.anime&&window.anime({targets:`.er-anime-reveal`,translateY:[40,0],opacity:[0,1],easing:`easeOutExpo`,duration:1200,delay:window.anime.stagger(150,{start:300})}),t()}export{i as initCourses,r as renderCourses};