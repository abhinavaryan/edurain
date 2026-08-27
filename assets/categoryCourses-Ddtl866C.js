import{t as e}from"./courses-BKPhEzz0.js";import{renderFAQ as t}from"./faq-Bo7AT8JC.js";function n(e){let t=`⭐`.repeat(Math.round(e.rating)),n=e.students>=1e3?`${(e.students/1e3).toFixed(1)}K`:e.students;return`
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
    `}function r(r,i,a,o=``){let s=e.filter(e=>e.category===a),c=s.length>0?s.map(n).join(``):`<p style="text-align: center; width: 100%; color: var(--text-muted);">No courses available in this category yet.</p>`;return`
        <section class="courses-section">
            <div class="section-header">
                <h1>${r}</h1>
                <p>${i}</p>
            </div>
            <div class="filter-row">
                <a href="/courses" class="filter-btn" style="text-decoration: none;">All</a>
                <a href="/courses/iit-jee" class="filter-btn ${a===`JEE`?`active`:``}" style="text-decoration: none;">JEE</a>
                <a href="/courses/neet" class="filter-btn ${a===`NEET`?`active`:``}" style="text-decoration: none;">NEET</a>
                <a href="/courses/foundation" class="filter-btn ${a===`FOUNDATION`?`active`:``}" style="text-decoration: none;">FOUNDATION</a>
            </div>
            <div class="courses-grid" style="margin-top: 40px;">
                ${c}
            </div>
        </section>
        
        ${o}
        
        ${t(a)}
    `}function i(){return r(`JEE Courses`,`Comprehensive preparation for IIT-JEE exams. Build a strong foundation and master the concepts to secure your seat in top engineering colleges.`,`JEE`,`
        <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50%; left: -20%; width: 60%; height: 100%; background: radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -30%; right: -20%; width: 50%; height: 80%; background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            
            <div style="position: relative; z-index: 1;">
                <h2 class="er-anime-reveal" style="color: #f8fafc; font-size: 2.2rem; margin-bottom: 1.2rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; font-family: 'Inter', sans-serif;">
                    IIT- JEE Preparation That Actually Builds Your Rank <span style="background: -webkit-linear-gradient(45deg, #fde047, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Not Just Your Syllabus</span>
                </h2>
                
                <p class="er-anime-reveal" style="margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem; font-weight: 400; max-width: 85ch;">
                    Cracking IIT-JEE isn't about covering the syllabus once and hoping for the best, it's about understanding concepts deeply enough to solve any question, however it's twisted in the exam. At EduRain, our JEE courses are built around this exact idea: strong fundamentals, consistent practice, and enough tests to know exactly where you stand before the real exam. Whether you're in Class 12th trying to balance boards with JEE, starting fresh in Class 11th, or repeating a year to fix what went wrong last time, there's a batch here designed specifically for that stage.
                </p>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Our Batches:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin-bottom: 2rem;">
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/849750" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Dropper JEE 2027 Batch</a> : For students repeating a year who want to rebuild their concepts properly and target a real rank improvement in JEE 2027.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/814178" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">TARGET JEE 2027 – 12th Class Batch</a> : For Class 12th students who need to manage boards and JEE prep together without either one suffering.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/813811" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">JEE Mantra 3.0 Batch 2028</a> : For Class 11th students starting their JEE journey early, with enough time to build a solid foundation before Class 12th begins.
                    </li>
                </ul>
                
                <div class="er-anime-reveal" style="width: 50px; height: 3px; background: #3b82f6; border-radius: 2px; margin-bottom: 1.8rem;"></div>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Why students choose EduRain for JEE:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Live interactive classes</strong> with faculty, not just recorded lectures.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Doubt-solving sessions</strong> where every question actually gets answered.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Experienced teachers</strong> who specialize in JEE-level teaching, not general tutoring.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Regular tests</strong> with detailed performance analysis, not just marks on a page.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Study material</strong> and practice questions updated as per the latest JEE pattern.</span>
                    </li>
                </ul>
            </div>
        </section>
    `)}function a(){return r(`NEET Courses`,`Crack NEET UG with expert-led coaching in Biology, Physics, and Chemistry designed to help medical aspirants secure top scores and a seat in India's best medical colleges.`,`NEET`,`
        <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50%; left: -20%; width: 60%; height: 100%; background: radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -30%; right: -20%; width: 50%; height: 80%; background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            
            <div style="position: relative; z-index: 1;">
                <h2 class="er-anime-reveal" style="color: #f8fafc; font-size: 2.2rem; margin-bottom: 1.2rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; font-family: 'Inter', sans-serif;">
                    NEET Preparation That Focuses on Understanding, <span style="background: -webkit-linear-gradient(45deg, #fde047, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Not Cramming</span>
                </h2>
                
                <p class="er-anime-reveal" style="margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem; font-weight: 400; max-width: 85ch;">
                    NEET isn't cleared by cramming Biology, Physics and Chemistry the night before revision starts, it's cleared by students who actually understand why an answer is right, not just which one to mark. At EduRain, our NEET courses focus on that exact difference. Every topic is taught with enough depth and practice that concepts stay with you, not just for the test but for the real exam months later. Whether you're in Class 12th preparing alongside boards, in Class 11th starting your NEET journey, or repeating a year to fix what didn't work last time, there's a batch designed around exactly that stage.
                </p>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Our Batches:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin-bottom: 2rem;">
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/814170" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">NEET White Coat 2027 – Class 12th</a> : For Class 12th students who need to balance board exams with serious NEET preparation, without letting either one slip.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/814073" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Mission NEET 3.0 Batch 2028</a> : For Class 11th students starting early, giving enough time to build strong fundamentals in Biology, Physics and Chemistry before the final push.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/849750" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Dropper NEET 2027 Batch</a> : For students repeating a year who want a fresh, proper rebuild of concepts and a real shot at a better score this time.
                    </li>
                </ul>
                
                <div class="er-anime-reveal" style="width: 50px; height: 3px; background: #3b82f6; border-radius: 2px; margin-bottom: 1.8rem;"></div>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Why students choose EduRain for NEET:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Live classes</strong> with faculty who explain the why not just the what</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>One-on-one doubt-clearing</strong> sessions, so nothing stays half-understood</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Experienced teachers</strong> who've specifically taught NEET aspirants for years</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Regular tests</strong> with detailed performance analysis to track weak areas early</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Study material</strong> and question banks updated as per the latest NEET pattern</span>
                    </li>
                </ul>
            </div>
        </section>
    `)}function o(){return r(`Foundation Courses`,`A strong foundation changes everything. From Class 6 to 10, we make sure your concepts in Science, Maths, and English are crystal clear, the perfect stepping stone for future competitive exams.`,`FOUNDATION`,`
        <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50%; left: -20%; width: 60%; height: 100%; background: radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -30%; right: -20%; width: 50%; height: 80%; background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            
            <div style="position: relative; z-index: 1;">
                <h2 class="er-anime-reveal" style="color: #f8fafc; font-size: 2.2rem; margin-bottom: 1.2rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; font-family: 'Inter', sans-serif;">
                    Class 6th to 10th: Where Real Preparation <span style="background: -webkit-linear-gradient(45deg, #fde047, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Actually Begins</span>
                </h2>
                
                <p class="er-anime-reveal" style="margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem; font-weight: 400; max-width: 85ch;">
                    Most students struggle in JEE or NEET prep not because the concepts are new, but because the basics from Class 6th to 10th were never solid to begin with. At EduRain, our Foundation courses focus on exactly that gap building strong fundamentals in Maths and Science early, so that by the time a student reaches Class 11th, they're not relearning basics but actually building on top of them. Each batch is designed for a specific class, keeping the difficulty level and pace right for that age group, taught by faculty who know how to make concepts click without making it feel like extra pressure.
                </p>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Our Batches:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin-bottom: 2rem;">
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <span style="color: #60a5fa; font-weight: 600;">Class 6th Foundation Batch</span>: Introduces core Maths and Science concepts in a simple, structured way, right from the start.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <span style="color: #60a5fa; font-weight: 600;">Class 8th Foundation Batch</span>: Strengthens fundamentals at a stage where subjects start getting a little more layered.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <span style="color: #60a5fa; font-weight: 600;">Class 9th Super Champions</span>: Built for students who want to get ahead early, with concepts taught at a slightly sharper pace.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <span style="color: #60a5fa; font-weight: 600;">Class 10th Disha Batch</span>: Focused on board exam preparation along with concept-building for what comes next in Class 11th.
                    </li>
                </ul>
                
                <div class="er-anime-reveal" style="width: 50px; height: 3px; background: #3b82f6; border-radius: 2px; margin-bottom: 1.8rem;"></div>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Why parents and students choose EduRain's Foundation courses:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Age-appropriate teaching</strong> that builds concepts step by step, not all at once</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Regular tests</strong> to catch weak areas before they turn into bigger gaps</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Experienced faculty</strong> who know how to keep young students engaged, not just informed</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Doubt-clearing sessions</strong> so no topic is left half-understood</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>A base strong enough</strong> that JEE or NEET prep later feels like a continuation, not a fresh start</span>
                    </li>
                </ul>
            </div>
        </section>
    `)}export{o as renderFoundationCourses,i as renderJEECourses,a as renderNEETCourses};