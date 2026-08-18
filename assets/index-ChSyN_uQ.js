import{a as e,c as t,d as n,f as r,i,l as a,n as o,o as s,p as c,r as l,s as u,t as d,u as f}from"./vendor-4Cj2Jx5L.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var p=c({apiKey:`AIzaSyBLw5eneJGCi4-YshAf5wgBA-yDT8o70Mc`,authDomain:`edurain-pvt.firebaseapp.com`,projectId:`edurain-pvt`,storageBucket:`edurain-pvt.firebasestorage.app`,messagingSenderId:`5660601224`,appId:`1:5660601224:web:e12194bc33e38cd1e8e83d`,measurementId:`G-JL0D0KVQYZ`}),m=t(p),h=e(p),g=async(e,t,n)=>{try{await o(i(h,`users`,e),{name:t,email:n,created_at:s()})}catch(e){throw Error(`Could not save user data: `+e.message)}},_=async(e,t,n)=>{try{await d(l(h,`contacts`),{name:e,email:t,message:n,created_at:s()})}catch(e){throw Error(`Could not send message: `+e.message)}},v=async(e,t,n)=>{try{let i=(await u(m,t,n)).user;return await r(i,{displayName:e}),await g(i.uid,e,t),i}catch(e){throw Error(e.message||`Registration failed`)}},y=async(e,t)=>{try{return(await f(m,e,t)).user}catch(e){throw Error(e.message||`Login failed`)}},b=async()=>{try{await n(m)}catch(e){throw Error(e.message||`Logout failed`)}},ee=e=>a(m,e);function te(){return`
        <nav class="navbar" id="main-nav">
            <div class="navbar-container">
                <div class="logo">
                    <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
                        <img src="./images/logo.png" alt="EduRain Logo" style="height: 55px; width: auto; max-width: 65px; object-fit: contain;">
                        <div style="display: flex; flex-direction: column; line-height: 1.2;">
                            <div>
                                <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                            </div>
                            <span style="font-size: 0.45rem; color: #a7f3d0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">Victory Starts Here</span>
                        </div>
                    </a>
                </div>
                <div class="nav-links">
                    <a href="#home" class="nav-link active">Home</a>
                    <a href="#courses" class="nav-link">Our Courses</a>
                    <a href="#blogs" class="nav-link">Blogs</a>
                    <a href="#about" class="nav-link">About Us</a>
                    <a href="#contact" class="nav-link">Contact Us</a>
                </div>
                <div class="auth-btn-area">
                    <button class="btn btn-accent login-btn">Login</button>
                </div>
                <button class="hamburger" id="hamburger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
        <div class="mobile-menu-overlay" id="mobile-menu-overlay"></div>
        <div class="mobile-menu" id="mobile-menu">
            <div class="mobile-menu-header">
                <div class="logo">
                    <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
                        <img src="./images/logo.png" alt="EduRain Logo" style="height: 40px; width: auto; max-width: 50px; object-fit: contain;">
                        <div style="display: flex; flex-direction: column; line-height: 1.2;">
                            <div>
                                <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                            </div>
                        </div>
                    </a>
                </div>
                <button class="mobile-menu-close" id="mobile-menu-close">&times;</button>
            </div>
            <div class="mobile-menu-body">
                <a href="#home" class="nav-link active">Home</a>
                <a href="#courses" class="nav-link">Our Courses</a>
                <a href="#blogs" class="nav-link">Blogs</a>
                <a href="#about" class="nav-link">About Us</a>
                <a href="#contact" class="nav-link">Contact Us</a>
            </div>
            <div class="mobile-menu-footer auth-btn-area">
                <button class="btn btn-accent login-btn" style="width: 100%;">Login/Register</button>
            </div>
        </div>
    `}function x(){let e=document.getElementById(`hamburger-btn`),t=document.getElementById(`mobile-menu`),n=document.getElementById(`mobile-menu-overlay`),r=document.getElementById(`mobile-menu-close`),i=document.querySelectorAll(`.mobile-menu .nav-link`),a=document.querySelectorAll(`.login-btn`),o=document.querySelectorAll(`.auth-btn-area`),s=document.getElementById(`main-nav`),c=()=>{e.classList.toggle(`active`),t.classList.toggle(`active`),n&&n.classList.toggle(`active`)},l=()=>{e&&e.classList.remove(`active`),t&&t.classList.remove(`active`),n&&n.classList.remove(`active`)};e&&t&&e.addEventListener(`click`,c),n&&n.addEventListener(`click`,l),r&&r.addEventListener(`click`,l),i.forEach(e=>{e.addEventListener(`click`,l)}),a.forEach(e=>{e.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`open-auth-modal`)),l()})}),o.forEach(e=>{e.addEventListener(`click`,e=>{e.target.classList.contains(`logout-btn`)&&(b(),l())})}),window.addEventListener(`scroll`,()=>{window.scrollY>50?s.classList.add(`scrolled`):s.classList.remove(`scrolled`)})}function S(){return`
        <div class="footer-separator"></div>
        <footer class="site-footer">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo" style="margin-bottom: 1rem;">
                        <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            <img src="./images/logo.png" alt="EduRain Logo" style="height: 55px; width: auto; max-width: 65px; object-fit: contain;">
                            <div style="display: flex; flex-direction: column; line-height: 1.2;">
                                <div>
                                    <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                                </div>
                                <span style="font-size: 0.45rem; color: #a7f3d0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">Victory Starts Here</span>
                            </div>
                        </a>
                    </div>
                    <p>Empowering learners across India with accessible,<br>high-quality education and expert guidance.</p>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/edurain_official/" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/edurainofficial/" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn" aria-label="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <div class="social-dropdown-wrapper">
                            <button type="button" class="social-icon social-dropdown-toggle" title="YouTube Channels" aria-label="YouTube Channels">
                                <i class="fab fa-youtube"></i>
                            </button>
                            <div class="social-dropdown-menu">
                                <div class="dropdown-header">YouTube Channels</div>
                                <a href="https://www.youtube.com/@Eduraininstitute" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                                    <i class="fab fa-youtube"></i>
                                    <span>EduRain Institute</span>
                                </a>
                                <a href="https://www.youtube.com/@EduRain9th10th" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                                    <i class="fab fa-youtube"></i>
                                    <span>EduRain 9th &amp; 10th</span>
                                </a>
                                <a href="https://www.youtube.com/@EduRainNEETJEE" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                                    <i class="fab fa-youtube"></i>
                                    <span>EduRain NEET / JEE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="#jeecourses">&gt; JEE Courses</a></li>
                        <li><a href="#neetcourses">&gt; NEET Courses</a></li>
                        <li><a href="#foundationcourses">&gt; Foundation Courses</a></li>
                        <li><a href="#blogs">&gt; Blogs</a></li>
                        <li><a href="#about">&gt; About</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <p>
                        <i class="fas fa-phone"></i> 
                        <a href="tel:+918797443910" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">+91 87974 43910</a>
                        <span style="margin: 0 5px; opacity: 0.5;">|</span>
                        <a href="https://wa.me/918797443910" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none; font-size: 1.1em;" title="Chat on WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </p>
                    <p><i class="fas fa-envelope"></i> <a href="mailto:support@edurain.in" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">support@edurain.in</a></p>
                </div>
                <div class="footer-col">
                    <h4>Get the App</h4>
                    <p>Learn on the go. Download the EduRain app today.</p>
                    <div class="er-store-buttons" style="margin-top: 0.75rem;">
                        <a href="https://play.google.com/store/apps/details?id=co.lynde.fpdwe&hl=en_IN" target="_blank" rel="noopener noreferrer" class="er-store-btn er-store-btn-play">
                            <svg class="er-store-icon" viewBox="0 0 48 48">
                                <path fill="#00D2FF" d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"></path>
                                <path fill="#00E676" d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"></path>
                                <path fill="#FF3D00" d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"></path>
                                <path fill="#FFC107" d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z"></path>
                            </svg>
                            <div>
                                <div class="er-store-small">GET IT ON</div>
                                <div class="er-store-name">Google Play</div>
                            </div>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" class="er-store-btn er-store-btn-apple">
                            <svg class="er-store-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.05.13zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <div>
                                <div class="er-store-small">DOWNLOAD ON THE</div>
                                <div class="er-store-name">App Store</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 <span class="text-accent">EduRain</span>. All rights reserved.</p>
                <div class="legal-links">
                    <a href="#privacy">Privacy Policy</a> |
                    <a href="#terms">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    `}function C(){document.querySelectorAll(`.social-dropdown-toggle`).forEach(e=>{let t=e.closest(`.social-dropdown-wrapper`);t&&e.addEventListener(`click`,e=>{e.stopPropagation(),document.querySelectorAll(`.social-dropdown-wrapper.active`).forEach(e=>{e!==t&&e.classList.remove(`active`)}),t.classList.toggle(`active`)})}),document.addEventListener(`click`,e=>{document.querySelectorAll(`.social-dropdown-wrapper.active`).forEach(t=>{t.contains(e.target)||t.classList.remove(`active`)})})}var w=[{id:`c1`,title:`Dropper JEE 2027 Batch`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Banarjee`,rating:4.2,students:500,price:`₹12,520`,thumbnail:`https://cdn.phototourl.com/free/2026-08-14-50ced64b-6d99-422d-91fb-8a62bfa1e137.webp`,category:`JEE`,description:`Master the fundamentals of Calculus and Linear Algebra. Perfect for engineering aspirants.`,link:`https://courses.edurain.in/courses/849750`},{id:`c2`,title:`CLASS 11TH MATHEMATICS`,instructor:`Mr.Banarjee Sir`,rating:4.5,students:302,price:`₹2,520`,thumbnail:`https://cdn.phototourl.com/free/2026-08-14-105e8fdd-49f2-4184-9f47-9c66ccfe1665.webp`,category:`JEE`,description:`Master the fundamentals of Calculus and Linear Algebra. Perfect for engineering aspirants.`,link:`https://courses.edurain.in/courses/857872`},{id:`c6`,title:`CLASS 12TH MATHEMATICS`,instructor:`Mr.Banarjee Sir`,rating:4.8,students:132,price:`₹2,520`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786707733989_84534946_unnamed.webp`,category:`JEE`,description:`Crack product-based company interviews with robust DSA concepts.`,link:`https://courses.edurain.in/courses/857872`},{id:`c7`,title:`CLASS 11TH PCB(NEET)`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Nitin`,rating:4.5,students:620,price:`₹5,020`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786707980934_915096e8_unnamed.webp`,category:`NEET`,description:`Clear your basics in Organic Chemistry with reaction mechanisms and practical examples.`,link:`https://courses.edurain.in/courses/855893`},{id:`c8`,title:`DROPPER NEET 2027 BATCH`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Nitin`,rating:4.7,students:1800,price:`₹12,520`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708172893_14fde1b1_unnamed.webp`,category:`NEET`,description:`Boost your calculation speed using ancient Vedic Math techniques.`,link:`https://courses.edurain.in/courses/849750`},{id:`c9`,title:`CLASS 11TH PCB(JEE)`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Banarjee`,rating:4.9,students:1200,price:`₹5,020`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708237356_3e4e42b7_unnamed.webp`,category:`JEE`,description:`A complete beginner's guide to understanding, reading, and speaking Hindi.`,link:`https://courses.edurain.in/courses/846771`},{id:`c10`,title:`CLASS 8TH`,instructor:`Manoj Sir,Khushbu ma'am ,Nandini ma'am,Sujeet sir`,rating:4.8,students:1120,price:`₹4,520`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708300269_af0cced2_unnamed.webp`,category:`FOUNDATION`,description:`Step into the world of AI with practical Machine Learning algorithms and tools.`,link:`https://courses.edurain.in/courses/830945`},{id:`c11`,title:`CLASS 7TH`,instructor:`Manoj Sir,Khushbu ma'am ,Nandini ma'am,Sujeet sir`,rating:4.9,students:320,price:`₹3,520`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708358028_b62b8226_unnamed.webp`,category:`NEET`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`,link:`https://courses.edurain.in/courses/830943`},{id:`c12`,title:`CLASS 12TH English`,instructor:`Mr.Manoj Sir`,rating:4.1,students:126,price:`₹2,520`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708411693_43d53417_unnamed.webp`,category:`ALL`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`,link:`https://courses.edurain.in/courses/830941`},{id:`c13`,title:`CLASS 6TH`,instructor:`Manoj Sir,Khushbu ma'am ,Nandini ma'am,Sujeet sir`,rating:3.9,students:234,price:`₹3,520`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708440388_cfb42854_unnamed.webp`,category:`FOUNDATION`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`,link:`https://courses.edurain.in/courses/830607`},{id:`c14`,title:`CLASS 11TH ENGLISH`,instructor:`Mr.Manoj Sir`,rating:4.3,students:105,price:`₹2,520`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708511517_f37d966c_unnamed.webp`,category:`ENGLISH`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`,link:`https://courses.edurain.in/courses/828615`},{id:`c15`,title:`CLASS 9TH SUPER CAMPIONS`,instructor:`Manoj Sir,Khushbu ma'am ,Nandini ma'am,Sujeet sir`,rating:4.4,students:370,price:`₹4,520`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708557261_08ee3912_unnamed.webp`,category:`FOUNDATION`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`,link:`https://courses.edurain.in/courses/814577`},{id:`c16`,title:`CLASS 10TH DISHA BATCH`,instructor:`Manoj Sir,Khushbu ma'am ,Nandini ma'am,Sujeet sir`,rating:4.7,students:249,price:`₹4,020`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708593166_35c415e1_unnamed.webp`,category:`FOUNDATION`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`,link:`https://courses.edurain.in/courses/814204`},{id:`c17`,title:`TARGET JEE 2027 -12TH CLASS BATCH`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Banarjee`,rating:4.45,students:425,price:`₹4,820`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708692702_1d2899f4_unnamed.webp`,category:`JEE`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`,link:`https://courses.edurain.in/courses/814178`},{id:`c18`,title:`NEET WHITE COAT 2027 -CLASS 12th`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Nitin`,rating:4.9,students:770,price:`₹4,820`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708771621_b592371a_unnamed.webp`,category:`NEET`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`,link:`https://courses.edurain.in/courses/814170`},{id:`c19`,title:`MISSION NEET 3.0 BATCH 2028`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Nitin`,rating:4.1,students:505,price:`₹9,019`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786708845701_d57d2524_unnamed.webp`,category:`NEET`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`,link:`https://courses.edurain.in/courses/814073`},{id:`c23`,title:`JEE Mantra 3.0 Batch 2028`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Banarjee`,rating:3.89,students:890,price:`₹9,019`,thumbnail:`https://xrmvmgtcgjjhljcmnhsn.supabase.co/storage/v1/object/public/images/1786709213605_9dd96992_unnamed.webp`,category:`JEE`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`,link:`https://courses.edurain.in/courses/813811`}];function T(){return`
        <section class="courses-section" id="courses-page">
            <div class="section-header">
                <h2>Our Courses</h2>
                <p>Explore our comprehensive course catalog</p>
            </div>
            <div class="filter-row">
                <a href="#courses" class="filter-btn active" style="text-decoration: none;">All</a>
                <a href="#jeecourses" class="filter-btn" style="text-decoration: none;">JEE</a>
                <a href="#neetcourses" class="filter-btn" style="text-decoration: none;">NEET</a>
                <a href="#foundationcourses" class="filter-btn" style="text-decoration: none;">FOUNDATION</a>
            </div>
            <div class="courses-grid" id="courses-grid">
                ${w.map(e=>{let t=`⭐`.repeat(Math.round(e.rating)),n=e.students>=1e3?`${(e.students/1e3).toFixed(1)}K`:e.students;return`
            <div class="glass-card course-card fade-in-section" data-category="${e.category}" data-link="${e.link||`#`}">
                <div class="course-thumb">
                    <a href="${e.link||`#`}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%;">
                        <img src="${e.thumbnail||`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80`}" alt="${e.title}" />
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
    `}function E(){let e=document.querySelectorAll(`.course-card`);e.forEach(e=>{e.classList.add(`fade-in-section`,`visible`)}),e.forEach(e=>{e.style.cursor=`pointer`,e.addEventListener(`click`,t=>{if(t.target.closest(`a`))return;let n=e.getAttribute(`data-link`);n&&n!==`#`&&window.open(n,`_blank`,`noopener,noreferrer`)})})}var D=[{id:`b1`,title:`Top 10 Study Hacks for Competitive Exams in India (JEE & NEET)`,excerpt:`Discover proven strategies to maximize your retention, manage time efficiently, and ace competitive exams like JEE and NEET with confidence.`,author:`EduRain Editorial Team`,date:`2026-08-14T09:00:00Z`,category:`Study Tips`,tag:`Study Hacks`,readTime:`5 min read`,coverImage:`https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80`,isPublished:!0,content:[{type:`heading`,text:`1. Master the 80/20 Rule (Pareto Principle)`},{type:`paragraph`,text:`Focus 80% of your energy on the top 20% high-yield topics that carry the maximum weightage in JEE & NEET examinations. Analyze previous 10-year question papers (PYQs) to identify recurring patterns in Physics, Chemistry, and Mathematics/Biology.`},{type:`heading`,text:`2. Active Recall & Spaced Repetition`},{type:`paragraph`,text:`Passive reading leads to the illusion of competence. Test yourself regularly using flashcards and formula sheets without looking at solutions. Revisit complex topics at expanding intervals: Day 1, Day 3, Day 7, and Day 30.`},{type:`heading`,text:`3. The Pomodoro Technique with Focused Bursts`},{type:`paragraph`,text:`Study in uninterrupted 50-minute blocks followed by 10-minute restorative breaks. During focus sessions, keep your phone in another room or turn on Do Not Disturb.`},{type:`heading`,text:`4. Mock Test Analysis Strategy`},{type:`paragraph`,text:`Writing mock tests is only half the battle. Spend at least 2 hours analyzing every incorrect attempt. Categorize errors into conceptual mistakes, calculation slips, and time-pressure panics to systematically eliminate weaknesses.`},{type:`heading`,text:`5. Maintain Consistency and Physical Well-being`},{type:`paragraph`,text:`Consistency beats cramming every single time. Prioritize 7 to 8 hours of quality sleep to solidify memory consolidation, stay hydrated, and practice light mindfulness exercises daily.`}],keyTakeaways:[`Analyze PYQs to prioritize high-weightage topics.`,`Use active recall instead of passive reading.`,`Thoroughly analyze every mock test error.`,`Maintain 7-8 hours of sleep for optimal memory retention.`]},{id:`b2`,title:`How to Crack JEE Mains 2026: Subject-Wise Mastery & Preparation Guide`,excerpt:`A step-by-step roadmap for Physics, Chemistry, and Mathematics to secure a top percentile in JEE Mains 2026.`,author:`Er. Abhinav Aryan`,date:`2026-08-10T10:30:00Z`,category:`JEE & NEET Prep`,tag:`JEE Mains PYQ`,readTime:`6 min read`,coverImage:`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80`,isPublished:!0,content:[{type:`heading`,text:`Physics: Focus on Fundamentals & Problem Solving`},{type:`paragraph`,text:`Mechanics, Electrodynamics, and Optics form the backbone of JEE Mains Physics. Solve NCERT examples thoroughly followed by 15-year Previous Year Questions (PYQs).`},{type:`heading`,text:`Chemistry: NCERT is Your Ultimate Bible`},{type:`paragraph`,text:`Inorganic Chemistry questions in JEE Mains are directly asked line-by-line from NCERT text. Create short revision charts for periodic properties and reaction mechanisms.`},{type:`heading`,text:`Mathematics: Speed and Accuracy Balance`},{type:`paragraph`,text:`Calculus and Algebra carry heavy weightage. Practice timed sectional tests to improve your calculation speed without committing silly mistakes.`}],keyTakeaways:[`NCERT Chemistry line-by-line preparation is mandatory.`,`Solve PYQs twice before final revision.`,`Daily 30-minute numerical calculation practice.`]},{id:`b3`,title:`NEET 2026 Biology & Chemistry High-Weightage Chapters & Strategy`,excerpt:`Key chapters, diagram-based questions, and memory tricks to score 680+ marks in NEET 2026.`,author:`EduRain Medical Faculty`,date:`2026-08-05T14:15:00Z`,category:`JEE & NEET Prep`,tag:`NEET Test Series`,readTime:`7 min read`,coverImage:`https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80`,isPublished:!0,content:[{type:`heading`,text:`Biology: 360 Marks Target Strategy`},{type:`paragraph`,text:`Genetics, Human Physiology, and Plant Physiology account for over 50% of Biology questions. Focus heavily on NCERT diagrams, footnotes, and scientific terms.`},{type:`heading`,text:`Organic & Physical Chemistry Preparation`},{type:`paragraph`,text:`Master Named Reactions and Mole Concept formulas. Daily practice of 50 MCQs improves recall speed significantly.`}],keyTakeaways:[`Biology NCERT diagrams demand special attention.`,`Attempt mock tests strictly between 2 PM to 5:20 PM.`,`Maintain a mistake notebook for instant revision.`]},{id:`b4`,title:`CBSE Class 10 & 12 Board Exams 2026: Sample Paper Analysis & Time Table`,excerpt:`Comprehensive roadmap to score 95%+ in Science, Math, and English with official CBSE marking scheme tips.`,author:`Academic Team EduRain`,date:`2026-07-28T11:00:00Z`,category:`CBSE Board Exams`,tag:`CBSE Class 10 PYQ`,readTime:`5 min read`,coverImage:`https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80`,isPublished:!0,content:[{type:`heading`,text:`Understanding the CBSE Competency-Based Questions`},{type:`paragraph`,text:`CBSE has increased competency-based questions to 50%. Focus on real-life case studies and practical application problems rather than rote memorization.`},{type:`heading`,text:`Answer Presentation Techniques for Full Marks`},{type:`paragraph`,text:`Write point-wise answers with bullet points, underline key keywords, and draw clean labeled diagrams in Science and Social Science papers.`}],keyTakeaways:[`50% questions are competency-based case studies.`,`Highlight keywords for evaluators.`,`Solve at least 5 sample papers under timed conditions.`]},{id:`b5`,title:`Effective Time Management Tips for Class 9th & 10th Foundation Aspirants`,excerpt:`How to balance school studies, coaching classes, and Olympiad/NTSE preparation effortlessly.`,author:`EduRain Mentorship Cell`,date:`2026-07-20T16:45:00Z`,category:`Foundation 9th-10th`,tag:`Foundation 9th-10th`,readTime:`4 min read`,coverImage:`https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80`,isPublished:!0,content:[{type:`heading`,text:`Building a Strong Foundation Early`},{type:`paragraph`,text:`Starting early in Class 9 & 10 develops analytical thinking needed for competitive exams later. Focus on fundamental concepts in Math and Science.`}],keyTakeaways:[`Consistent 2 hours of self-study daily yields massive long-term results.`,`Clear fundamental doubts immediately with mentors.`]}],O=[`All Blogs`,`Study Hacks`,`JEE Mains PYQ`,`NEET Test Series`,`CBSE Class 10 PYQ`,`CBSE Class 12 PYQ`,`Foundation 9th-10th`];function k(){let e=D.filter(e=>e.isPublished!==!1);return Array.from(new Set(e.map(e=>e.category||`General`))),`
        <section class="blogs-section" id="blogs">
            <div class="er-pw-blog-container" id="blog-list-view">
                
                <!-- PW Style Hero Header -->
                <div class="er-pw-blog-hero">
                    <h1 class="er-pw-blog-title">EduRain Blog</h1>
                    <p class="er-pw-blog-subtitle">India's Leading Learning & Exam Preparation Platform for Students</p>
                    
                    <!-- Search Bar -->
                    <div class="er-pw-search-wrapper">
                        <span class="er-pw-search-icon">🔍</span>
                        <input type="text" id="er-blog-search-input" class="er-pw-search-input" placeholder="Search articles, exam tips, PYQs, or topics..." />
                    </div>

                    <!-- Our Popular Tags Filter -->
                    <div class="er-pw-tags-section">
                        <div class="er-pw-tags-label">#Ourpopulartags</div>
                        <div class="er-pw-tags-list" id="er-tags-container">
                            ${O.map((e,t)=>`
        <button class="er-tag-pill ${t===0?`active`:``}" data-tag="${e}">
            ${e}
        </button>
    `).join(``)}
                        </div>
                    </div>
                </div>

                <!-- Blog Grid Section -->
                <div class="er-pw-grid-section" id="er-blogs-grid-container">
                    ${A(e)}
                </div>

            </div>

            <!-- PW Style Full Article Reader View (Inline) -->
            <div id="blog-reader-view" class="blog-reader-view-container" style="display: none;">
                <div class="pw-reader-container">
                    
                    <div class="pw-reader-layout">
                        <!-- Left Main Content Column (~70%) -->
                        <div class="pw-reader-main" id="pw-reader-main-content"></div>
                        
                        <!-- Right Sidebar Column (~30%) -->
                        <div class="pw-reader-sidebar">
                            <div class="pw-sidebar-widget">
                                <div class="pw-sidebar-widget-header">
                                    <h3>Recommended for you</h3>
                                    <a href="#courses" class="pw-see-all">See All &rarr;</a>
                                </div>
                                <div class="pw-sidebar-courses-list">
                                    ${w.slice(0,3).map(e=>`
        <div class="pw-sidebar-course-card">
            <img src="${e.thumbnail}" alt="${e.title}" class="pw-sidebar-course-img" />
            <div class="pw-sidebar-course-info">
                <h4 class="pw-sidebar-course-title">${e.title}</h4>
                <div class="pw-sidebar-course-price">
                    <span class="price-current">${e.price}</span>
                    <span class="price-discount-badge">25% OFF</span>
                </div>
                <a href="${e.link||`#courses`}" target="_blank" rel="noopener" class="pw-sidebar-enroll-btn">
                    Enroll Now
                </a>
            </div>
        </div>
    `).join(``)}
                                </div>
                            </div>

                            <div class="pw-sidebar-widget pw-app-promo-widget">
                                <h3>EduRain Learning App</h3>
                                <p>Get live classes, DPPs, doubt solving & mock test series on your phone.</p>
                                <a href="#appDownload" class="btn btn-primary btn-sm" style="width: 100%; text-align: center; margin-top: 0.5rem; background: #16a34a; border: none; border-radius: 8px;">
                                    Download App Free
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Related Articles Carousel Footer -->
                    <div class="pw-reader-related-section" id="pw-reader-related-container"></div>
                </div>
            </div>
        </section>
    `}function A(e){return!e||e.length===0?`
            <div class="er-no-blogs-found" style="text-align: center; padding: 3rem; color: #94a3b8;">
                <h3>No articles found</h3>
                <p>Try searching for a different keyword or selecting another tag.</p>
            </div>
        `:`
        <div class="er-pw-blogs-grid">
            ${e.map(e=>{let t=new Date(e.date).toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`});return`
            <div class="er-pw-blog-card glass-card fade-in-section" data-blog-id="${e.id}">
                <div class="er-pw-card-cover">
                    <img src="${e.coverImage}" alt="${e.title}" class="er-pw-card-img" />
                    <span class="er-pw-card-badge">${e.category||`Exam Prep`}</span>
                </div>
                <div class="er-pw-card-body">
                    <h3 class="er-pw-card-title">${e.title}</h3>
                    <p class="er-pw-card-excerpt">${e.excerpt}</p>
                    <div class="er-pw-card-meta">
                        <span class="er-pw-card-author">By ${e.author}</span>
                        <span class="er-pw-card-date">${t}</span>
                    </div>
                </div>
            </div>
        `}).join(``)}
        </div>
    `}function j(){let e=document.getElementById(`er-blog-search-input`),t=document.getElementById(`er-tags-container`),n=document.getElementById(`er-blogs-grid-container`),r=document.getElementById(`blog-list-view`),i=document.getElementById(`blog-reader-view`),a=document.getElementById(`pw-reader-main-content`),o=document.getElementById(`pw-reader-related-container`);if(!n||!i)return;let s=`All Blogs`,c=``;function l(){let e=D.filter(e=>e.isPublished!==!1).filter(e=>{let t=s===`All Blogs`||e.category&&e.category.toLowerCase().includes(s.toLowerCase())||e.tag&&e.tag.toLowerCase().includes(s.toLowerCase())||e.title&&e.title.toLowerCase().includes(s.toLowerCase()),n=!c||e.title.toLowerCase().includes(c.toLowerCase())||e.excerpt.toLowerCase().includes(c.toLowerCase())||e.category&&e.category.toLowerCase().includes(c.toLowerCase());return t&&n});n.innerHTML=A(e),f()}e&&e.addEventListener(`input`,e=>{c=e.target.value.trim(),l()}),t&&t.addEventListener(`click`,e=>{let n=e.target.closest(`.er-tag-pill`);n&&(t.querySelectorAll(`.er-tag-pill`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),s=n.getAttribute(`data-tag`),l())});function u(e,t=!0){let n=D.find(t=>t.id===e)||D[0];if(!n)return;let s=new Date(n.date).toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`}),c=``;c=Array.isArray(n.content)?n.content.map(e=>e.type===`heading`?`<h3 class="pw-article-h3">${e.text}</h3>`:`<p class="pw-article-p">${e.text}</p>`).join(``):`<p class="pw-article-p">${n.excerpt}</p>`;let l=``;Array.isArray(n.keyTakeaways)&&n.keyTakeaways.length>0&&(l=`
                <div class="pw-takeaways-box">
                    <h4>💡 Key Takeaways & Action Plan</h4>
                    <ul>
                        ${n.keyTakeaways.map(e=>`<li>${e}</li>`).join(``)}
                    </ul>
                </div>
            `),a.innerHTML=`
            <div class="pw-article-breadcrumbs">
                <a href="#home">Home</a> &rsaquo; <a href="#blogs">Blogs</a> &rsaquo; <span>${n.title}</span>
            </div>

            <h1 class="pw-article-h1">${n.title}</h1>
            
            <div class="pw-article-meta-header">
                <span>By <strong>${n.author}</strong></span>
                <span>•</span>
                <span>📅 ${s}</span>
                <span>•</span>
                <span>⏱️ ${n.readTime||`5 min read`}</span>
            </div>

            <div class="pw-article-cover-banner">
                <img src="${n.coverImage}" alt="${n.title}" />
            </div>

            <div class="pw-article-body">
                ${c}
                ${l}
                
            <div class="pw-article-faqs">
                <h3 class="pw-faqs-title">Frequently Asked Questions (FAQs)</h3>
                <div class="pw-faq-item">
                    <div class="pw-faq-q">Q1. How often are EduRain study materials and blogs updated?</div>
                    <div class="pw-faq-a">Our editorial and academic teams update materials daily in accordance with the latest NTA (JEE/NEET) and CBSE guidelines.</div>
                </div>
                <div class="pw-faq-item">
                    <div class="pw-faq-q">Q2. Where can I solve topic-wise Previous Year Questions (PYQs)?</div>
                    <div class="pw-faq-a">You can download chapter-wise PYQ PDFs and attempt mock test series directly on the EduRain App and Web platform.</div>
                </div>
            </div>
        
            </div>

            <div class="pw-article-footer-bar">
                <button id="btn-close-modal-bottom" class="btn btn-primary" style="background: #16a34a; border: none; padding: 0.5rem 1.35rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
                    &larr; Back to All Blogs
                </button>
            </div>
        `;let f=D.filter(e=>e.id!==n.id).slice(0,3);o.innerHTML=`
            <h3 class="pw-related-title">Related Articles</h3>
            <div class="pw-related-grid">
                ${f.map(e=>`
                    <div class="pw-related-card btn-open-blog" data-blog-id="${e.id}">
                        <img src="${e.coverImage}" alt="${e.title}" />
                        <div class="pw-related-info">
                            <h4>${e.title}</h4>
                            <span>${new Date(e.date).toLocaleDateString(`en-IN`,{month:`short`,day:`numeric`,year:`numeric`})}</span>
                        </div>
                    </div>
                `).join(``)}
            </div>
        `,r.style.display=`none`,i.style.display=`block`;let p=document.getElementById(`blogs`);p?p.scrollIntoView({behavior:`smooth`}):window.scrollTo({top:0,behavior:`smooth`});let m=document.getElementById(`btn-close-modal-bottom`);m&&m.addEventListener(`click`,d),o.querySelectorAll(`.btn-open-blog`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-blog-id`);n&&u(n)})}),t&&history.pushState(null,null,`#blogs/`+n.id)}function d(){i.style.display=`none`,r.style.display=`block`,history.pushState(null,null,`#blogs`);let e=document.getElementById(`blogs`);e&&e.scrollIntoView({behavior:`smooth`})}function f(){n.querySelectorAll(`.er-pw-blog-card`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=e.getAttribute(`data-blog-id`);n&&u(n)})})}f();let p=window.location.hash.split(`?`)[0].split(`/`);if(p.length>1&&p[0]===`#blogs`){let e=p[1];u(e,!1)}}function M(){return`
        <section class="er-about-hero" id="about">
            <!-- Beautiful gradient mesh background -->
            <div class="er-about-bg-mesh">
                <div class="mesh-orb mesh-orb-1"></div>
                <div class="mesh-orb mesh-orb-2"></div>
                <div class="mesh-orb mesh-orb-3"></div>
            </div>
            
            <div class="er-about-container">
                <!-- Hero Header -->
                <div class="er-about-header">
                    <h1 class="er-about-title">About Us</h1>
                    <p class="er-about-subtitle">Join today, results tomorrow.</p>
                </div>

                <div class="er-about-grid">
                    <!-- Left Column: Who we are & Story -->
                    <div class="er-about-col-left">
                        <div class="er-glass-card er-about-card">
                            <div class="er-card-icon"></div>
                            <h2>Who We Are</h2>
                            <p>At EduRain, we believe quality education shouldn't depend on where you live or how much you can afford to spend on coaching. We started EduRain with one simple goal: to bring foundation learning for Classes 6 to 10 and online coaching for IIT-JEE and NEET preparation to every student who's serious about their future, no matter which city or town they're studying from.</p>
                        </div>
                        
                        <div class="er-glass-card er-about-card">
                            <div class="er-card-icon"></div>
                            <h2>Our Story</h2>
                            <p>We saw how the internet was changing the way students in India prepare for competitive exams. We also saw a gap: many students still struggle to find a platform that combines strong fundamentals with focused JEE and NEET preparation, at a pace and price that actually works for them. That's the gap we built EduRain to fill.</p>
                        </div>
                    </div>

                    <!-- Right Column: What we offer & Why Us -->
                    <div class="er-about-col-right">
                        <div class="er-glass-card er-about-card er-card-highlight">
                            <div class="er-card-icon"></div>
                            <h2>What We Offer</h2>
                            <ul class="er-about-list">
                                <li><strong>Foundation Courses (Classes 6–10):</strong> We help students build strong concepts in Maths and Science early on, so the transition to JEE and NEET preparation later feels natural, not overwhelming.</li>
                                <li><strong>IIT-JEE Preparation:</strong> Structured online classes, regular practice tests, and doubt-solving sessions designed around the JEE syllabus and exam pattern.</li>
                                <li><strong>NEET Preparation:</strong> Focused Biology, Physics, and Chemistry coaching built around what NEET actually demands — accuracy, speed, and conceptual clarity.</li>
                                <li><strong>Live and Recorded Classes:</strong> So students can learn at a time and pace that suits them, whether they're keeping up in real time or revising later.</li>
                            </ul>
                        </div>
                        
                        <div class="er-glass-card er-about-card">
                            <div class="er-card-icon"></div>
                            <h2>Why Students Choose EduRain</h2>
                            <p>We're not trying to be the biggest online coaching platform. We're trying to be the one that genuinely cares whether a student understands a concept, not just whether they've watched a video. Our teachers focus on building a strong foundation first, because we've seen that students who understand the "why" behind a formula perform far better in JEE and NEET than those who simply memorize.</p>
                        </div>
                    </div>
                </div>

                <!-- Promise Section (Full width at bottom) -->
                <div class="er-glass-card er-about-promise-card text-center">
                    <div class="er-card-icon"></div>
                    <h2>Our Promise</h2>
                    <p>Every student who comes to EduRain gets the same thing from us: honest teaching, real support, and a team that wants to see them succeed. Whether a student is in Class 6 just starting to enjoy Maths, or in Class 12 preparing for the final NEET or JEE attempt, our focus stays the same.</p>
                    <h3 class="er-promise-tagline">EduRain — Foundation today, results tomorrow.</h3>
                </div>
            </div>
        </section>
    `}var N=[{id:`r1`,name:`Aarav Patel`,course:`Full Stack Web Development Bootcamp`,rating:5,quote:`This bootcamp completely transformed my career. The projects were practical, and I landed a great job right after completion!`,avatar:`/images/avatar-1.jpg`},{id:`r2`,name:`Diya Sharma`,course:`Physics Masterclass for JEE Advanced`,rating:5,quote:`Aisha ma'am makes complex physics concepts so easy to understand. I finally feel confident about my JEE preparation.`,avatar:`/images/avatar-2.jpg`},{id:`r3`,name:`Rohan Gupta`,course:`Data Structures and Algorithms in Python`,rating:5,quote:`The best DSA course I've ever taken. Amit sir's explanation of dynamic programming was phenomenal.`,avatar:`/images/avatar-3.jpg`},{id:`r4`,name:`Ananya Singh`,course:`Biology for NEET - Complete Syllabus`,rating:5,quote:`Dr. Reddy's teaching style is engaging and highly informative. The mock tests provided were exactly what I needed.`,avatar:`/images/avatar-4.jpg`},{id:`r5`,name:`Karan Malhotra`,course:`Vedic Mathematics for Lightning Fast Calculations`,rating:5,quote:`I used to struggle with calculations during exams. Vedic math techniques have literally doubled my speed!`,avatar:`/images/avatar-1.jpg`},{id:`r6`,name:`Megha Nair`,course:`Spoken English Fluency Course`,rating:5,quote:`Priya ma'am helped me overcome my fear of public speaking. Highly recommend this to anyone looking to improve fluency.`,avatar:`/images/avatar-2.jpg`},{id:`r7`,name:`Ishaan Desai`,course:`Advanced Mathematics: Calculus & Linear Algebra`,rating:5,quote:`Brilliant course for engineering students. The visual explanations for linear algebra made everything click.`,avatar:`/images/avatar-3.jpg`},{id:`r8`,name:`Sneha Iyer`,course:`Machine Learning Foundations`,rating:5,quote:`A perfect introduction to AI. The hands-on projects gave me the practical experience I needed to start my ML journey.`,avatar:`/images/avatar-4.jpg`}];function P(){return`
        <section class="reviews-section" id="reviews">
            <div class="section-header">
                <h2>What Our Students Say</h2>
                <p>Real stories from our learners</p>
            </div>
            <div class="reviews-carousel">
                <button class="carousel-btn carousel-prev">&larr;</button>
                <div class="carousel-viewport">
                    <div class="carousel-track" id="review-track">
                        ${N.map((e,t)=>{let n=[`linear-gradient(135deg, #10b981 0%, #059669 100%)`,`linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)`,`linear-gradient(135deg, #ec4899 0%, #be185d 100%)`,`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,`linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)`,`linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)`];return`
        <div class="glass-card review-card">
            <div class="er-review-avatar-badge" style="background: ${n[t%n.length]}; margin: 0 auto 1rem auto;">
                ${e.name[0]}
            </div>
            <div class="review-stars">⭐⭐⭐⭐⭐</div>
            <p class="review-quote">"${e.quote}"</p>
            <h4>${e.name}</h4>
            <p class="review-course">${e.course}</p>
        </div>
        `}).join(``)}
                    </div>
                </div>
                <button class="carousel-btn carousel-next">&rarr;</button>
                <div class="carousel-dots" id="carousel-dots">
                    ${N.map((e,t)=>`<span class="dot ${t===0?`active`:``}" data-index="${t}"></span>`).join(``)}
                </div>
            </div>
        </section>
    `}function F(){let e=document.getElementById(`review-track`),t=document.querySelector(`.carousel-prev`),n=document.querySelector(`.carousel-next`),r=document.querySelectorAll(`.carousel-dots .dot`),i=document.getElementById(`er-reviews`)||e?.closest(`section`),a=0,o=r.length,s,c=!1;if(!e||o===0)return;function l(){e.style.transform=`translateX(-${a*100}%)`,r.forEach(e=>e.classList.remove(`active`)),r[a]&&r[a].classList.add(`active`)}function u(){a=(a+1)%o,l()}function d(){a=(a-1+o)%o,l()}function f(){p(),c&&(s=setInterval(u,4e3))}function p(){s&&=(clearInterval(s),null)}t&&t.addEventListener(`click`,()=>{d(),p(),f()}),n&&n.addEventListener(`click`,()=>{u(),p(),f()}),r.forEach(e=>{e.addEventListener(`click`,e=>{a=parseInt(e.target.dataset.index),l(),p(),f()})});let m=document.querySelector(`.reviews-carousel`);m&&(m.addEventListener(`mouseenter`,p),m.addEventListener(`mouseleave`,f));let h=0;e&&(e.addEventListener(`touchstart`,e=>{h=e.changedTouches[0].screenX}),e.addEventListener(`touchend`,e=>{let t=e.changedTouches[0].screenX;h-t>50&&u(),h-t<-50&&d()})),`IntersectionObserver`in window&&i?new IntersectionObserver(e=>{e.forEach(e=>{c=e.isIntersecting,c?f():p()})},{threshold:.1}).observe(i):(c=!0,f())}function I(){return`
        <section class="contact-section" id="contact">
            <div class="section-header">
                <h2>Get In Touch</h2>
                <p>We'd love to hear from you</p>
            </div>
            <div class="contact-layout">
                <div class="contact-info">
                    <h3>Let's Connect</h3>
                    <p>Have questions about our courses or platform? Reach out to our team and we'll get back to you within 24 hours.</p>
                    <div class="contact-items">
                        <div class="contact-item">
                            <span class="contact-icon">📧</span>
                            <div>
                                <strong>Email</strong>
                                <p><a href="mailto:support@edurain.in" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">support@edurain.in</a></p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📞</span>
                            <div>
                                <strong>Phone</strong>
                                <p>
                                    <a href="tel:+918797443910" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">+91 87974 43910</a>
                                    <span style="margin: 0 5px; opacity: 0.5;">|</span>
                                    <a href="https://wa.me/918797443910" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none; font-size: 1.1em;" title="Chat on WhatsApp"><i class="fab fa-whatsapp"></i></a>
                                </p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📍</span>
                            <div>
                                <strong>Location</strong>
                                <p>Delhi, India</p>
                            </div>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="https://www.instagram.com/edurain_official/" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/edurainofficial/" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <div class="social-dropdown-wrapper">
                            <button type="button" class="social-icon social-dropdown-toggle" title="YouTube Channels" aria-label="YouTube Channels">
                                <i class="fab fa-youtube"></i>
                            </button>
                            <div class="social-dropdown-menu">
                                <div class="dropdown-header">YouTube Channels</div>
                                <a href="https://www.youtube.com/@Eduraininstitute" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                                    <i class="fab fa-youtube"></i>
                                    <span>EduRain Institute</span>
                                </a>
                                <a href="https://www.youtube.com/@EduRain9th10th" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                                    <i class="fab fa-youtube"></i>
                                    <span>EduRain 9th &amp; 10th</span>
                                </a>
                                <a href="https://www.youtube.com/@EduRainNEETJEE" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                                    <i class="fab fa-youtube"></i>
                                    <span>EduRain NEET / JEE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-form-wrapper">
                    <form class="contact-form glass-card" id="contact-form">
                        <div class="form-group">
                            <input type="text" id="contact-name" placeholder="Your Name" required minlength="2" />
                        </div>
                        <div class="form-group">
                            <input type="email" id="contact-email" placeholder="Your Email" required />
                        </div>
                        <div class="form-group">
                            <textarea id="contact-message" placeholder="Your Message" required minlength="10" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-accent btn-lg btn-full" id="contact-submit">Send Message</button>
                        <div class="form-message" id="form-message"></div>
                    </form>
                </div>
            </div>
        </section>
    `}function L(){let e=document.getElementById(`contact-form`),t=document.getElementById(`form-message`);e&&e.addEventListener(`submit`,async n=>{n.preventDefault();let r=document.getElementById(`contact-name`).value.trim(),i=document.getElementById(`contact-email`).value.trim(),a=document.getElementById(`contact-message`).value.trim();if(r.length<2){t.textContent=`Please enter your name (min 2 characters).`,t.className=`form-message error`;return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){t.textContent=`Please enter a valid email address.`,t.className=`form-message error`;return}if(a.length<10){t.textContent=`Message must be at least 10 characters.`,t.className=`form-message error`;return}let o=document.getElementById(`contact-submit`);o.disabled=!0,o.textContent=`Sending...`;try{await _(r,i,a),t.textContent=`✅ Message sent successfully! We will get back to you soon.`,t.className=`form-message success`,e.reset()}catch{t.textContent=`❌ Failed to send message. Please try again.`,t.className=`form-message error`}finally{o.disabled=!1,o.textContent=`Send Message`}})}function R(){return`
        <div class="auth-modal-overlay" id="auth-modal" style="display:none;">
            <div class="auth-modal glass-card">
                <button class="modal-close" id="modal-close">&times;</button>
                <div class="auth-modal-header">
                    <div class="logo"><span class="text-white">Edu</span><span class="text-accent">Rain</span></div>
                    <p>Welcome back! Please login or create an account.</p>
                </div>
                <div class="auth-tabs">
                    <button class="auth-tab active" data-target="login-form">Login</button>
                    <button class="auth-tab" data-target="signup-form">Sign Up</button>
                </div>

                <form class="auth-form" id="login-form">
                    <div class="form-group">
                        <input type="email" id="login-email" placeholder="Email Address" required />
                    </div>
                    <div class="form-group password-group">
                        <input type="password" id="login-password" placeholder="Password" required />
                        <button type="button" class="toggle-password" data-target="login-password">👁</button>
                    </div>
                    <div id="login-error" class="auth-error"></div>
                    <button type="submit" class="btn btn-accent btn-lg btn-full">
                        <span class="btn-text">Login</span>
                        <div class="spinner" style="display:none;"></div>
                    </button>
                    <p class="auth-switch-text">Don't have an account? <a href="#" class="switch-form" data-target="signup-form">Sign Up</a></p>
                </form>

                <form class="auth-form" id="signup-form" style="display:none;">
                    <div class="form-group">
                        <input type="text" id="signup-name" placeholder="Full Name" required minlength="2" />
                    </div>
                    <div class="form-group">
                        <input type="email" id="signup-email" placeholder="Email Address" required />
                    </div>
                    <div class="form-group password-group">
                        <input type="password" id="signup-password" placeholder="Password (min 6 chars)" required minlength="6" />
                        <button type="button" class="toggle-password" data-target="signup-password">👁</button>
                    </div>
                    <div class="form-group">
                        <input type="password" id="signup-confirm" placeholder="Confirm Password" required minlength="6" />
                    </div>
                    <div id="signup-error" class="auth-error"></div>
                    <button type="submit" class="btn btn-accent btn-lg btn-full">
                        <span class="btn-text">Create Account</span>
                        <div class="spinner" style="display:none;"></div>
                    </button>
                    <p class="auth-switch-text">Already have an account? <a href="#" class="switch-form" data-target="login-form">Login</a></p>
                </form>
            </div>
        </div>
    `}function z(){let e=document.getElementById(`auth-modal`),t=document.getElementById(`modal-close`),n=document.getElementById(`login-form`),r=document.getElementById(`signup-form`);if(!e)return;document.addEventListener(`open-auth-modal`,()=>{e.style.display=`flex`,document.body.style.overflow=`hidden`});let i=()=>{e.style.display=`none`,document.body.style.overflow=``};t&&t.addEventListener(`click`,i),e.addEventListener(`click`,t=>{t.target===e&&i()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.style.display===`flex`&&i()});let a=e=>{document.querySelectorAll(`.auth-tab`).forEach(e=>e.classList.remove(`active`));let t=document.querySelector(`.auth-tab[data-target="${e}"]`);t&&t.classList.add(`active`),n.style.display=e===`login-form`?`block`:`none`,r.style.display=e===`signup-form`?`block`:`none`};document.querySelectorAll(`.auth-tab`).forEach(e=>{e.addEventListener(`click`,e=>a(e.target.dataset.target))}),document.querySelectorAll(`.switch-form`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),a(e.target.dataset.target)})}),document.querySelectorAll(`.toggle-password`).forEach(e=>{e.addEventListener(`click`,()=>{let t=document.getElementById(e.dataset.target);t&&(t.type=t.type===`password`?`text`:`password`,e.textContent=t.type===`password`?`👁`:`🙈`)})}),n&&n.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`login-email`).value.trim(),r=document.getElementById(`login-password`).value,a=document.getElementById(`login-error`),o=n.querySelector(`.btn-text`),s=n.querySelector(`.spinner`);a.textContent=``,o.style.display=`none`,s.style.display=`inline-block`;try{await y(t,r),i(),n.reset()}catch(e){a.textContent=e.message||`Login failed. Please try again.`}finally{o.style.display=`inline`,s.style.display=`none`}}),r&&r.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`signup-name`).value.trim(),n=document.getElementById(`signup-email`).value.trim(),a=document.getElementById(`signup-password`).value,o=document.getElementById(`signup-confirm`).value,s=document.getElementById(`signup-error`),c=r.querySelector(`.btn-text`),l=r.querySelector(`.spinner`);if(s.textContent=``,t.length<2){s.textContent=`Please enter your full name.`;return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)){s.textContent=`Please enter a valid email address.`;return}if(a.length<6){s.textContent=`Password must be at least 6 characters.`;return}if(a!==o){s.textContent=`Passwords do not match.`;return}c.style.display=`none`,l.style.display=`inline-block`;try{await v(t,n,a),i(),r.reset()}catch(e){s.textContent=e.message||`Registration failed. Please try again.`}finally{c.style.display=`inline`,l.style.display=`none`}})}function B(){return`
    <div class="low-light-page low-light-bg indigo-pulse-bg">
        <!-- ═══ HEADER / INTRO BANNER ═══ -->
        <section class="er-section" style="padding: var(--space-2xl) 0 var(--space-xl) 0;">
            <div class="er-container text-center">
                <span class="badge-indigo" style="background: rgba(99, 102, 241, 0.18); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); padding: 0.382rem 1rem; border-radius: 50px; font-weight: 600; font-size: 0.875rem; letter-spacing: 0.05em; text-transform: uppercase;">
                    ✨ Low-Light Introspection Space
                </span>
                <h1 style="font-size: var(--fs-4xl); font-weight: 800; color: #ffffff; margin-top: var(--space-md); margin-bottom: var(--space-sm);">
                    Journey & <span style="background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Reflection</span>
                </h1>
                <p style="font-size: var(--fs-lg); color: #9ca3af; max-width: 680px; margin: 0 auto; line-height: 1.618;">
                    Explore your personal learning trajectory, evaluate intelligent multi-agent architectures, and record introspective reflection logs in a quiet, low-light atmosphere.
                </p>
            </div>
        </section>

        <section class="er-section" style="padding: var(--space-xl) 0;">
            <div class="er-container">
                <div class="text-center" style="margin-bottom: var(--space-2xl);">
                    <h2 style="font-size: var(--fs-3xl); font-weight: 700; color: #ffffff;">
                        Featured Agent Systems & Architecture
                    </h2>
                    <p style="color: #9ca3af; margin-top: var(--space-xs); font-size: var(--fs-base);">
                        Autonomous multi-agent intelligence workflows built for predictive analytics and diagnostic decision making.
                    </p>
                </div>

                <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: var(--space-xl);">
                    
                    <!-- PROJECT CARD 1: Credit Risk -->
                    <div class="glass-card-dark project-card" style="padding: var(--space-xl); position: relative; overflow: hidden;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-md);">
                            <span style="font-size: 2rem;">💳</span>
                            <span style="background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4); padding: 0.2rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Financial Intelligence</span>
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: 700; color: #ffffff; margin-bottom: var(--space-sm);">Credit Risk Assessment Agent</h3>
                        <p style="color: #9ca3af; font-size: 0.95rem; line-height: 1.618; margin-bottom: var(--space-lg);">
                            A dynamic multi-agent system evaluating applicant solvency, transaction anomalies, income stability, and automated credit decisioning with explainable risk telemetry.
                        </p>
                        <button class="btn btn-indigo view-architecture-btn" data-project="credit-risk" style="width: 100%; background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%); color: #fff; border: none; padding: var(--space-sm) var(--space-lg); border-radius: var(--radius-md); font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer; transition: all 0.3s ease;">
                            <i class="fas fa-project-diagram"></i> System Architecture
                        </button>
                    </div>

                    <!-- PROJECT CARD 2: Disease Prediction -->
                    <div class="glass-card-dark project-card" style="padding: var(--space-xl); position: relative; overflow: hidden;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-md);">
                            <span style="font-size: 2rem;">🧬</span>
                            <span style="background: rgba(236, 72, 153, 0.2); color: #f472b6; border: 1px solid rgba(236, 72, 153, 0.4); padding: 0.2rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Healthcare AI</span>
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: 700; color: #ffffff; margin-bottom: var(--space-sm);">Disease Prediction Diagnostic Agent</h3>
                        <p style="color: #9ca3af; font-size: 0.95rem; line-height: 1.618; margin-bottom: var(--space-lg);">
                            An intelligent clinical diagnostic workflow analyzing patient vitals, genetic markers, medical lab data, and cross-checking differential diagnosis probability models.
                        </p>
                        <button class="btn btn-indigo view-architecture-btn" data-project="disease-prediction" style="width: 100%; background: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%); color: #fff; border: none; padding: var(--space-sm) var(--space-lg); border-radius: var(--radius-md); font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer; transition: all 0.3s ease;">
                            <i class="fas fa-project-diagram"></i> System Architecture
                        </button>
                    </div>

                </div>
            </div>
        </section>

        <!-- ═══ HORIZONTALLY SYMMETRIC SECTION: JOURNEY REFLECTION ═══ -->
        <section class="er-section" style="padding: var(--space-2xl) 0;">
            <div class="er-container">
                <div class="symmetric-row">
                    <!-- LEFT COLUMN: Visually balanced illustration card -->
                    <div class="symmetric-col">
                        <div class="glass-card-dark" style="padding: var(--space-xl); text-align: center;">
                            <div style="width: 120px; height: 120px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(79,70,229,0.1) 70%); margin: 0 auto var(--space-lg) auto; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(129,140,248,0.4); box-shadow: 0 0 30px rgba(99,102,241,0.3);">
                                <span style="font-size: 3.5rem;">🌌</span>
                            </div>
                            <h3 style="color: #ffffff; font-size: 1.5rem; font-weight: 700; margin-bottom: var(--space-xs);">Growth & Introspection</h3>
                            <p style="color: #9ca3af; font-size: 0.95rem; line-height: 1.618;">
                                Learning is a continuous cycle of execution, analysis, and silent reflection. Track your milestones and maintain mental clarity under low-light focus.
                            </p>
                            <div style="margin-top: var(--space-lg); display: flex; justify-content: center; gap: var(--space-md);">
                                <div style="text-align: center;">
                                    <div style="font-size: 1.5rem; font-weight: 800; color: #818cf8;">98.4%</div>
                                    <div style="font-size: 0.75rem; color: #6b7280;">Consistency Rate</div>
                                </div>
                                <div style="width: 1px; background: rgba(255,255,255,0.1);"></div>
                                <div style="text-align: center;">
                                    <div style="font-size: 1.5rem; font-weight: 800; color: #34d399;">142</div>
                                    <div style="font-size: 0.75rem; color: #6b7280;">Hours Focused</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT COLUMN: Interactive Journal Form -->
                    <div class="symmetric-col">
                        <div class="glass-card-dark" style="padding: var(--space-xl);">
                            <h3 style="color: #ffffff; font-size: 1.5rem; font-weight: 700; margin-bottom: var(--space-xs);">Daily Reflection Log</h3>
                            <p style="color: #9ca3af; font-size: 0.9rem; margin-bottom: var(--space-md);">Record your key learnings and breakthroughs today.</p>
                            
                            <form id="reflection-journal-form" style="display: flex; flex-direction: column; gap: var(--space-md);">
                                <div>
                                    <label style="display: block; color: #cbd5e1; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.382rem;">Key Topic / Focus Area</label>
                                    <input type="text" id="journal-topic" placeholder="e.g. Multi-Agent Systems & Neural Optimization" required style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: var(--space-sm) var(--space-md); border-radius: var(--radius-sm); outline: none;">
                                </div>
                                <div>
                                    <label style="display: block; color: #cbd5e1; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.382rem;">Introspective Insights</label>
                                    <textarea id="journal-insight" rows="3" placeholder="What concepts clicked today? Where did you encounter ambiguity?" required style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: var(--space-sm) var(--space-md); border-radius: var(--radius-sm); outline: none; resize: vertical;"></textarea>
                                </div>
                                <button type="submit" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: #fff; border: none; padding: var(--space-sm) var(--space-lg); border-radius: var(--radius-sm); font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                                    Save Reflection Entry
                                </button>
                            </form>
                            <div id="journal-status" style="margin-top: var(--space-sm); font-size: 0.875rem; color: #34d399; display: none;">
                                ✓ Reflection logged successfully!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══ MERMAID DIAGRAM MODAL CONTAINERS ═══ -->
        <div class="mermaid-modal-overlay" id="architecture-modal">
            <div class="mermaid-modal-container">
                <button class="mermaid-modal-close" id="modal-close-btn">&times;</button>
                <div id="modal-content-area">
                    <h3 id="modal-title" style="font-size: 1.5rem; font-weight: 700; color: #818cf8; margin-bottom: var(--space-md);">
                        System Architecture
                    </h3>
                    <div id="mermaid-diagram-container" style="background: #09090b; padding: var(--space-lg); border-radius: var(--radius-md); overflow-x: auto; border: 1px solid rgba(99,102,241,0.2);">
                        <!-- Dynamic Mermaid chart gets injected here -->
                    </div>
                </div>
            </div>
        </div>

    </div>
    `}function V(){let e=document.getElementById(`architecture-modal`),t=document.getElementById(`modal-close-btn`),n=document.getElementById(`modal-title`),r=document.getElementById(`mermaid-diagram-container`);document.querySelectorAll(`.view-architecture-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let i=t.dataset.project,a=`System Architecture`,o=``;if(i===`credit-risk`?(a=`💳 Credit Risk Assessment — Multi-Agent Architecture`,o=`
    graph TD
        A["Input Data: Credit Bureau & Bank Statements"] --> B["Data Preprocessing Agent"]
        B --> C["Feature Extraction & Risk Scoring Agent"]
        C --> D{"Solvency Check Evaluator"}
        D -- "Low Risk" --> E["Automated Loan Approver Agent"]
        D -- "Medium Risk" --> F["Underwriter Validation Agent"]
        D -- "High Risk" --> G["Default Risk Mitigation Agent"]
        E --> H["Final Credit Report & Decision API"]
        F --> H
        G --> H
        
        style A fill:#1e1b4b,stroke:#818cf8,stroke-width:2px,color:#ffffff
        style C fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#ffffff
        style D fill:#312e81,stroke:#a5b4fc,stroke-width:2px,color:#ffffff
        style H fill:#4c1d95,stroke:#c084fc,stroke-width:2px,color:#ffffff
    `):i===`disease-prediction`&&(a=`🧬 Disease Prediction Diagnostic — Multi-Agent Architecture`,o=`
    graph TD
        A["Patient Vitals, Symptoms & Biomarkers"] --> B["Clinical Data Ingestion Agent"]
        B --> C["Genomic & EHR Feature Mapping Agent"]
        C --> D["Multi-Model Ensemble Diagnostic Agent"]
        D --> E{"Risk Probability Matrix"}
        E -- "Low Likelihood" --> F["Preventative Wellness Recommendation Agent"]
        E -- "Moderate/High Risk" --> G["Differential Clinical Specialist Agent"]
        F --> H["Comprehensive Diagnostic Report Generator"]
        G --> H
        
        style A fill:#0c4a6e,stroke:#38bdf8,stroke-width:2px,color:#ffffff
        style D fill:#831843,stroke:#f472b6,stroke-width:2px,color:#ffffff
        style E fill:#1e1b4b,stroke:#818cf8,stroke-width:2px,color:#ffffff
        style H fill:#065f46,stroke:#34d399,stroke-width:2px,color:#ffffff
    `),n.textContent=a,r.innerHTML=`<div class="mermaid">${o}</div>`,e.classList.add(`active`),window.mermaid)try{window.mermaid.initialize({startOnLoad:!1,theme:`dark`}),window.mermaid.run({nodes:r.querySelectorAll(`.mermaid`)})}catch(e){console.error(`Mermaid render error:`,e)}})}),t&&t.addEventListener(`click`,()=>{e.classList.remove(`active`)}),e&&e.addEventListener(`click`,t=>{t.target===e&&e.classList.remove(`active`)});let i=document.getElementById(`reflection-journal-form`),a=document.getElementById(`journal-status`);i&&i.addEventListener(`submit`,e=>{e.preventDefault(),a&&(a.style.display=`block`,setTimeout(()=>{a.style.display=`none`,i.reset()},3e3))})}function H(){return`
        <section class="er-privacy-section fade-in-section visible" id="privacy" style="padding: 120px 5%; background: var(--bg-dark); color: var(--text-main); min-height: 100vh;">
            <div class="er-privacy-container" style="max-width: 1000px; margin: 0 auto;">
                <div class="er-privacy-header text-center" style="margin-bottom: 60px;">
                    <h1 class="text-gradient" style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; margin-bottom: 1rem;">Privacy Policy</h1>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">Last Updated: August 7, 2026</p>
                </div>

                <div class="er-glass-card" style="padding: clamp(2rem, 4vw, 4rem); border-radius: 24px; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); line-height: 1.8; color: rgba(255, 255, 255, 0.85);">
                    
                    <p style="margin-bottom: 2rem; font-size: 1.1rem;">Please read the following Privacy Policy carefully before using the services available on <strong><a href="https://edurain.in" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent);">https://edurain.in</a></strong> or the EduRain mobile application (collectively referred to as the <strong>"Platform"</strong>).</p>
                    
                    <p style="margin-bottom: 2rem; font-size: 1.1rem;">This Privacy Policy explains how <strong>EduRain Institute Private Limited ("EduRain", "We", "Us", or "Our")</strong> collects, uses, stores, and protects Your information when You access or use Our Platform.</p>
                    
                    <p style="margin-bottom: 2rem; font-size: 1.1rem;">By accessing or using the Platform, You agree to the collection, use, and disclosure of Your information in accordance with this Privacy Policy. If You do not agree with any part of this Privacy Policy, please do not use the Platform.</p>
                    
                    <p style="margin-bottom: 3rem; font-size: 1.1rem;">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and Your continued use of the Platform after such changes constitutes Your acceptance of the updated Privacy Policy.</p>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 600;">1. Collection of Personal Information</h2>
                    
                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 2rem; margin-bottom: 1rem; font-weight: 500;">1.1 Information We Collect</h3>
                    <p style="margin-bottom: 1rem;">To provide Our educational services effectively, We may collect the following information:</p>
                    <ul style="list-style-type: none; padding-left: 0; margin-bottom: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 0.5rem;">
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Full Name</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Mobile Number</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Email Address</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Residential Address (if required)</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Date of Birth</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Parent/Guardian Details</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Class, Course and Academic Info</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> School/College Name</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> City and State</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Profile Photograph (if uploaded)</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Identity Documents (where required)</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Payment Information</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> IP Address</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Browser & Device Information</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Operating System</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Network Information</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Cookies and Usage Data</li>
                    </ul>
                    <p style="margin-bottom: 2rem; font-style: italic; color: rgba(255,255,255,0.6);">Plus any information voluntarily submitted through enquiry forms, admissions, support requests, surveys, contests, or feedback.</p>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 2rem; margin-bottom: 1rem; font-weight: 500;">1.2 Registration Information</h3>
                    <p style="margin-bottom: 1rem;">While creating an EduRain account, You may be asked to provide: Name, Email Address, Mobile Number, Password, Class/Course, School or College Name, City, Profile Photo (Optional).</p>
                    <p style="margin-bottom: 2rem;">This information helps Us create and manage Your student account.</p>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 2rem; margin-bottom: 1rem; font-weight: 500;">1.3 Login Through Third-Party Platforms</h3>
                    <p style="margin-bottom: 2rem;">Where available, You may choose to sign in using services such as Google or other supported providers. If You choose this option, You authorize Us to access the information permitted by that provider's privacy settings. Your use of such services is also governed by their respective Privacy Policies.</p>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 2rem; margin-bottom: 1rem; font-weight: 500;">1.4 Account Security</h3>
                    <p style="margin-bottom: 1rem;">We store Your account information using industry-standard security measures. Passwords are encrypted and cannot be viewed in plain text.</p>
                    <p style="margin-bottom: 1rem;">You are solely responsible for:</p>
                    <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 1rem; color: rgba(255,255,255,0.7);">
                        <li>Keeping Your password confidential.</li>
                        <li>Preventing unauthorized access to Your account.</li>
                        <li>Maintaining accurate and updated account information.</li>
                        <li>Immediately informing Us if You suspect unauthorized access.</li>
                    </ul>
                    <p style="margin-bottom: 2rem;">EduRain shall not be liable for any loss arising from Your failure to protect Your login credentials.</p>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 2rem; margin-bottom: 1rem; font-weight: 500;">1.5 Optional Information</h3>
                    <p style="margin-bottom: 2rem;">Providing certain information is optional. However, if required information is not provided, We may be unable to offer certain services, courses, examinations, certificates, or customer support.</p>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 2rem; margin-bottom: 1rem; font-weight: 500;">1.6 Automatically Collected Information</h3>
                    <p style="margin-bottom: 1rem;">When You visit Our Platform, We may automatically collect information such as: IP Address, Browser Type, Device Type, Operating System, Pages Visited, Time Spent on Website, Referral URL, Clickstream Data, Crash Reports, App Usage Statistics.</p>
                    <p style="margin-bottom: 2rem;">This information helps Us improve performance, security, and user experience.</p>

                    <h3 style="color: var(--accent); font-size: 1.3rem; margin-top: 2rem; margin-bottom: 1rem; font-weight: 500;">1.7 Cookies</h3>
                    <p style="margin-bottom: 1rem;">EduRain uses cookies and similar technologies to remember user preferences, improve website performance, analyze website traffic, personalize user experience, and enhance security.</p>
                    <p style="margin-bottom: 2rem;">You may disable cookies through Your browser settings; however, certain features of the Platform may not function properly.</p>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 600;">2. Use of Personal Information</h2>
                    <p style="margin-bottom: 1rem;">We use Your information for purposes including but not limited to:</p>
                    <ul style="list-style-type: none; padding-left: 0; margin-bottom: 2rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 0.5rem;">
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Creating and managing Your account</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Providing online classes & services</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Course enrollment & Live class access</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Test Series and Assessments</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Study Material Delivery</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Student Performance Analysis</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Customer Support</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Sending important notifications</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Processing payments & Issuing certificates</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Improving Our Platform</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Preventing fraud and misuse</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Maintaining security & Conducting analytics</li>
                        <li><i class="fas fa-check" style="color: var(--accent); margin-right: 10px;"></i> Sending promotional offers (where permitted)</li>
                    </ul>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 600;">3. Sharing of Personal Information</h2>
                    <p style="margin-bottom: 1.5rem;">EduRain values Your privacy and does not sell Your personal information. However, We may share information with:</p>
                    
                    <div style="display: grid; gap: 1.5rem;">
                        <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                            <h3 style="color: var(--accent); font-size: 1.2rem; margin-bottom: 0.5rem;">3.1 Payment Service Providers</h3>
                            <p style="margin: 0;">For secure payment processing.</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                            <h3 style="color: var(--accent); font-size: 1.2rem; margin-bottom: 0.5rem;">3.2 Technology Partners</h3>
                            <p style="margin: 0;">For hosting, cloud services, analytics, SMS, email delivery, customer support, and platform maintenance.</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                            <h3 style="color: var(--accent); font-size: 1.2rem; margin-bottom: 0.5rem;">3.3 Legal Authorities</h3>
                            <p style="margin: 0;">Where required by applicable law, court order, or government authority.</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                            <h3 style="color: var(--accent); font-size: 1.2rem; margin-bottom: 0.5rem;">3.4 Business Transfers</h3>
                            <p style="margin: 0;">In case of merger, acquisition, restructuring, or sale of assets, user information may be transferred to the successor organization subject to applicable privacy obligations.</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                            <h3 style="color: var(--accent); font-size: 1.2rem; margin-bottom: 0.5rem;">3.5 Educational Partners</h3>
                            <p style="margin: 0;">Where necessary for examinations, certifications, academic collaborations, or student verification.</p>
                        </div>
                    </div>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 600;">4. Data Security</h2>
                    <p style="margin-bottom: 1rem;">We implement appropriate administrative, technical, and physical safeguards to protect Your information against unauthorized access, disclosure, alteration, or destruction.</p>
                    <p style="margin-bottom: 2rem;">Despite Our efforts, no online system is completely secure, and therefore We cannot guarantee absolute security.</p>

                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 600;">5. Data Retention</h2>
                    <p style="margin-bottom: 1rem;">We retain Your information only for as long as necessary to: Provide educational services, Comply with legal obligations, Resolve disputes, Enforce Our agreements, Maintain academic records.</p>
                    <p style="margin-bottom: 2rem;">After this period, information may be securely deleted or anonymized.</p>

                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 600;">6. Your Rights</h2>
                    <p style="margin-bottom: 1rem;">You may: Access Your information, Update incorrect information, Request correction of personal data, Request deletion where legally permissible, Withdraw consent where applicable, Opt out of promotional communications.</p>
                    <p style="margin-bottom: 2rem;">For any such requests, please contact Us using the details provided below.</p>

                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 600;">7. Children's Privacy</h2>
                    <p style="margin-bottom: 1rem;">EduRain provides educational services for school students. Where required, registration may be completed by parents or legal guardians.</p>
                    <p style="margin-bottom: 2rem;">Parents or guardians are encouraged to supervise the online activities of minors.</p>

                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 600;">8. Third-Party Links</h2>
                    <p style="margin-bottom: 1rem;">Our Platform may contain links to third-party websites. EduRain is not responsible for the privacy practices or content of such external websites.</p>
                    <p style="margin-bottom: 2rem;">Users are advised to read the privacy policies of those websites before providing any personal information.</p>

                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 600;">9. Changes to this Privacy Policy</h2>
                    <p style="margin-bottom: 1rem;">We reserve the right to modify this Privacy Policy at any time. Any updates will be published on this page along with the revised "Last Updated" date.</p>
                    <p style="margin-bottom: 2rem;">Continued use of the Platform after such updates constitutes acceptance of the revised Privacy Policy.</p>

                    <hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">

                    <h2 style="color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 600;">10. Contact Us</h2>
                    <p style="margin-bottom: 1.5rem;">If You have any questions, concerns, or requests regarding this Privacy Policy, You may contact Us:</p>
                    
                    <div style="background: rgba(255,255,255,0.03); padding: 2rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); text-align: center;">
                        <h3 style="color: var(--text-main); font-size: 1.4rem; margin-bottom: 1rem;">EduRain Institute Private Limited</h3>
                        <p style="margin-bottom: 0.5rem;"><i class="fas fa-globe" style="color: var(--accent); margin-right: 10px;"></i> <a href="https://edurain.in" target="_blank" rel="noopener noreferrer" style="color: var(--text-main); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-main)'">https://edurain.in</a></p>
                        <p style="margin-bottom: 0.5rem;"><i class="fas fa-envelope" style="color: var(--accent); margin-right: 10px;"></i> <a href="mailto:support@edurain.in" style="color: var(--text-main); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-main)'">support@edurain.in</a></p>
                        <p style="margin-bottom: 0.5rem;">
                            <i class="fas fa-phone" style="color: var(--accent); margin-right: 10px;"></i> 
                            <a href="tel:+918796443910" style="color: var(--text-main); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-main)'" title="Call Us">+91 8796443910</a>
                            <span style="margin: 0 10px; color: rgba(255,255,255,0.2);">|</span>
                            <a href="https://wa.me/918796443910" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none; transition: opacity 0.3s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'" title="Chat on WhatsApp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        </p>
                        <p style="margin-bottom: 0;"><i class="fas fa-map-marker-alt" style="color: var(--accent); margin-right: 10px;"></i> Sec 132 Urbtech Noida</p>
                    </div>

                    <div style="text-align: center; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.05);">
                        <p style="font-size: 1.1rem; color: rgba(255,255,255,0.7); font-style: italic;">By accessing or using the EduRain Platform, You acknowledge that You have read, understood, and agreed to this Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </section>
    `}function U(){return`
        <section class="er-privacy-section fade-in-section visible" id="terms" style="padding: 120px 5%; background: var(--bg-dark); color: var(--text-main); min-height: 100vh;">
            <div class="er-container" style="max-width: 900px; margin: 0 auto;">
                <div class="er-glass-card glass-card fade-in-section visible" style="padding: 3rem; margin-bottom: 2rem;">
                    
                    <h1 style="font-size: 2.5rem; font-weight: 800; color: var(--accent); margin-bottom: 0.5rem; text-align: center;">Terms and Conditions – Edurain</h1>
                    <p style="text-align: center; color: var(--text-muted); font-size: 0.95rem; margin-bottom: 2.5rem;"><strong>Last Updated:</strong> 7 August 2026</p>

                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        Welcome to Edurain ("Edurain", "we", "us", "our"), accessible at <a href="https://edurain.in" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none;">edurain.in</a>, along with our mobile application(s), and any related online learning services we operate (collectively, the "Platform"). These Terms and Conditions ("Terms") form a legally binding agreement between you ("User", "Student", "you") and Edurain.
                    </p>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        By creating an account, browsing the Platform, purchasing a course, or using any of our services, you confirm that you have read, understood, and agreed to these Terms. If you do not agree, please discontinue use of the Platform.
                    </p>
                    <div style="background: rgba(250, 204, 21, 0.1); border-left: 4px solid var(--accent); padding: 1rem; margin-bottom: 2.5rem; border-radius: 4px;">
                        <p style="margin: 0; font-size: 0.95rem;"><strong>Note for parents/guardians:</strong> If a student using Edurain is under 18 years of age, use of the Platform must be supervised/authorized by a parent or legal guardian, who accepts these Terms on the student's behalf.</p>
                    </div>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">1. Who Can Use Edurain</h2>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        <li style="margin-bottom: 0.5rem;">Users below 18 years must have consent from a parent/guardian to register and make purchases.</li>
                        <li style="margin-bottom: 0.5rem;">You agree to provide accurate, current, and complete information while registering (name, email, phone number, class/grade, location, etc.).</li>
                        <li style="margin-bottom: 0.5rem;">One account is meant for individual use only; sharing login credentials to allow unauthorized access to paid content is not permitted.</li>
                    </ul>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">2. Information We Collect and How We Use It</h2>
                    <p style="margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.6;">When you use Edurain, we may collect:</p>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        <li style="margin-bottom: 0.5rem;"><strong>Account details</strong> – name, age/date of birth, email, phone number, city, class/exam preparing for.</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Usage data</strong> – courses viewed, videos watched, test scores, doubts asked, time spent on Platform.</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Payment-related data</strong> – processed through secure third-party payment gateways; we do not store your card/UPI credentials.</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Device/technical data</strong> – IP address, browser type, device ID, cookies.</li>
                    </ul>
                    <p style="margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.6;">We use this information to:</p>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        <li style="margin-bottom: 0.5rem;">Give you access to purchased courses and personalize recommendations.</li>
                        <li style="margin-bottom: 0.5rem;">Send updates about batches, live classes, results, and offers (you may opt out of promotional messages any time).</li>
                        <li style="margin-bottom: 0.5rem;">Improve our teaching content and Platform performance.</li>
                        <li style="margin-bottom: 0.5rem;">Respond to support queries and resolve disputes.</li>
                        <li style="margin-bottom: 0.5rem;">Meet legal and regulatory obligations.</li>
                    </ul>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        We do not sell your personal data to third parties. We may share limited data with trusted vendors (payment processors, cloud hosting, SMS/email providers, analytics tools) strictly to operate the Platform, and with authorities where legally required.
                    </p>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">3. Cookies</h2>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        Edurain uses cookies and similar technologies to remember your login session, understand how you use the Platform, and improve your experience. You can disable cookies from your browser settings, though some features (like staying logged in) may stop working properly.
                    </p>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">4. Course Content and Intellectual Property</h2>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        <li style="margin-bottom: 0.5rem;">All recorded lectures, live class content, notes, PDFs, test series, question banks, graphics, and the Edurain name/logo are the intellectual property of Edurain or its content creators/licensors.</li>
                        <li style="margin-bottom: 0.5rem;">Purchasing a course gives you a personal, non-transferable, revocable license to view the content for self-study — it does not transfer any ownership.</li>
                        <li style="margin-bottom: 0.5rem;">You may not download (unless an explicit download feature is provided), screen-record, re-upload, sell, share logins, or redistribute Edurain's content on YouTube, Telegram, WhatsApp groups, or any other platform.</li>
                        <li style="margin-bottom: 0.5rem;">Violation of this clause may lead to immediate account suspension without refund, and Edurain reserves the right to pursue legal action for copyright infringement.</li>
                    </ul>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">5. Purchases, Pricing, and Refunds</h2>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        <li style="margin-bottom: 0.5rem;">Prices for courses/batches are as displayed on the Platform at the time of purchase and may change without prior notice for future purchases.</li>
                        <li style="margin-bottom: 0.5rem;">Once a paid course is activated/accessed, it is generally non-refundable, since it involves instant access to digital content.</li>
                        <li style="margin-bottom: 0.5rem;">If you purchased the wrong batch/course by mistake, you may request a one-time switch to an equivalent-value course within 7 days of purchase, subject to our review, provided the original course has not been substantially consumed.</li>
                        <li style="margin-bottom: 0.5rem;">Refunds, where approved (e.g., duplicate payment, technical failure on our end), will be processed to the original payment method within a reasonable timeframe.</li>
                        <li style="margin-bottom: 0.5rem;">For any physical study material (books/kits) damaged in transit, you may request a replacement within 48 hours of delivery with proof (unboxing video/photos).</li>
                    </ul>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">6. Doubt-Solving, Discussion Forums & Community Features</h2>
                    <p style="margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.6;">If Edurain offers doubt forums, live chat, or comment sections:</p>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        <li style="margin-bottom: 0.5rem;">Content you post there becomes visible to other users; do not share personal information (phone number, address, etc.) publicly.</li>
                        <li style="margin-bottom: 0.5rem;">Be respectful — abusive, discriminatory, spam, or plagiarized content may be removed, and repeat offenders may be banned.</li>
                        <li style="margin-bottom: 0.5rem;">Edurain is not responsible for the accuracy of answers posted by other students in open community sections (only content from verified Edurain educators is Platform-endorsed).</li>
                    </ul>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">7. Use of Testimonials and Achievements</h2>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        If you share your exam results, rank, review, or testimonial with us, you grant Edurain permission to feature your name, photo, and statement on our website, app, and social media/marketing channels for promotional purposes, unless you explicitly withdraw this consent in writing.
                    </p>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">8. Account Suspension and Termination</h2>
                    <p style="margin-bottom: 1rem; font-size: 1.05rem; line-height: 1.6;">We may suspend or terminate your account, without refund, if you:</p>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        <li style="margin-bottom: 0.5rem;">Share or misuse login credentials,</li>
                        <li style="margin-bottom: 0.5rem;">Attempt to pirate or redistribute paid content,</li>
                        <li style="margin-bottom: 0.5rem;">Use the Platform for any unlawful purpose, or</li>
                        <li style="margin-bottom: 0.5rem;">Violate any part of these Terms.</li>
                    </ul>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        You may also request deletion of your account by writing to us, subject to applicable data retention laws.
                    </p>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">9. Disclaimer of Warranties</h2>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        Edurain strives to provide accurate, updated, and high-quality educational content, but we do not guarantee specific exam results, ranks, or outcomes from using our Platform — learning outcomes also depend on the student's own effort.<br><br>
                        The Platform is provided on an "as is" and "as available" basis. We do not guarantee uninterrupted or error-free access at all times (e.g., during server maintenance or technical issues).
                    </p>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">10. Limitation of Liability</h2>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        To the maximum extent permitted by law, Edurain, its founders, employees, and educators shall not be liable for any indirect, incidental, or consequential loss (including loss of study time or data) arising from your use of, or inability to use, the Platform.
                    </p>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">11. Changes to These Terms</h2>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        We may update these Terms periodically to reflect new features, legal requirements, or business changes. Continued use of the Platform after such updates constitutes your acceptance of the revised Terms. We recommend checking this page occasionally.
                    </p>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">12. Governing Law</h2>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        These Terms shall be governed by and interpreted in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts at Noida.
                    </p>

                    <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">13. Contact Us</h2>
                    <p style="margin-bottom: 1.5rem; font-size: 1.05rem; line-height: 1.6;">
                        For any questions, concerns, or complaints regarding these Terms, please reach out to us:
                    </p>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; font-size: 1.05rem; line-height: 1.6; list-style-type: none;">
                        <li style="margin-bottom: 0.5rem;"><strong>Website:</strong> <a href="https://www.edurain.in" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: none;">https://www.edurain.in</a></li>
                        <li style="margin-bottom: 0.5rem;"><strong>Email:</strong> <a href="mailto:support@edurain.in" style="color: var(--accent); text-decoration: none;">support@edurain.in</a></li>
                        <li style="margin-bottom: 0.5rem;"><strong>Address:</strong> sec 132, Noida</li>
                    </ul>
                </div>
            </div>
        </section>
    `}function W(){return`
        <section class="er-sitemap-section fade-in-section visible" id="sitemap" style="padding: 120px 5%; background: var(--bg-dark); color: var(--text-main); min-height: 100vh;">
            <div class="er-container" style="max-width: 900px; margin: 0 auto;">
                <div class="er-glass-card glass-card fade-in-section visible" style="padding: 3rem; margin-bottom: 2rem;">
                    
                    <h1 style="font-size: 2.5rem; font-weight: 800; color: var(--accent); margin-bottom: 2rem; text-align: center;">Site Map</h1>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                        <!-- Main Pages -->
                        <div>
                            <h2 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">Main Pages</h2>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><a href="#home" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Home</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#about" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">About Us</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#courses" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">All Courses</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#blogs" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Blogs</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#journey" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Journey & Reflection</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#reviews" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Student Reviews</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#contact" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Contact Us</a></li>
                            </ul>
                        </div>

                        <!-- Course Categories -->
                        <div>
                            <h2 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">Course Categories</h2>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><a href="#jeecourses" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">JEE Preparation</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#neetcourses" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">NEET Preparation</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#foundationcourses" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Foundation (6th-10th)</a></li>
                            </ul>
                        </div>

                        <!-- Legal -->
                        <div>
                            <h2 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">Legal & Support</h2>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><a href="#privacy" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Privacy Policy</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="#terms" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `}function ne(e){let t=`⭐`.repeat(Math.round(e.rating)),n=e.students>=1e3?`${(e.students/1e3).toFixed(1)}K`:e.students;return`
        <div class="glass-card course-card fade-in-section visible" data-category="${e.category}" data-link="${e.link||`#`}">
            <div class="course-thumb">
                <a href="${e.link||`#`}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%;">
                    <img src="${e.thumbnail||`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80`}" alt="${e.title}" />
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
    `}function G(e,t,n){let r=w.filter(e=>e.category===n),i=r.length>0?r.map(ne).join(``):`<p style="text-align: center; width: 100%; color: var(--text-muted);">No courses available in this category yet.</p>`;return`
        <section class="courses-section" style="padding-top: 120px;">
            <div class="section-header">
                <h2>${e}</h2>
                <p>${t}</p>
            </div>
            <div class="filter-row">
                <a href="#courses" class="filter-btn" style="text-decoration: none;">All</a>
                <a href="#jeecourses" class="filter-btn ${n===`JEE`?`active`:``}" style="text-decoration: none;">JEE</a>
                <a href="#neetcourses" class="filter-btn ${n===`NEET`?`active`:``}" style="text-decoration: none;">NEET</a>
                <a href="#foundationcourses" class="filter-btn ${n===`FOUNDATION`?`active`:``}" style="text-decoration: none;">FOUNDATION</a>
            </div>
            <div class="courses-grid" style="margin-top: 40px;">
                ${i}
            </div>
        </section>
    `}function K(){return G(`JEE Courses`,`Comprehensive preparation for IIT-JEE exams. Build a strong foundation and master the concepts to secure your seat in top engineering colleges.`,`JEE`)}function q(){return G(`NEET Courses`,`Focused coaching for medical aspirants. In-depth coverage of Biology, Physics, and Chemistry to help you crack NEET with top scores.`,`NEET`)}function J(){return G(`Foundation Courses`,`Strengthen your core concepts in Science and Mathematics from Class 6 to 10. The perfect stepping stone for future competitive exams.`,`FOUNDATION`)}function Y(){return`
    <!-- ═══ SECTION A: HERO AUTO-SCROLL BANNER (Restored Original Layout & Aspect Ratio) ═══ -->
    <div class="er-hero-banner-wrapper">
      <section id="er-hero-banner" style="position:relative; width:100%; overflow:hidden; background:#0e3a24;">

        <div id="er-slider-track" style="display:flex; transition:transform 0.7s cubic-bezier(0.4,0,0.2,1); will-change:transform;">

          <!-- SLIDE 1 — FOUNDATION COURSES BANNER -->
          <a href="#courses?filter=Foundation" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <img src="https://cdn.phototourl.com/free/2026-08-11-9182f96d-b0d3-40b7-a92d-52fa39089fe8.png" alt="Foundation Courses for Class 6th - 10th" style="width:100%; height:100%; object-fit:contain; display:block;" />
          </a>

          <!-- SLIDE 2 — NEET BATCH -->
          <a href="#courses?filter=Foundation" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <img src="https://cdn.phototourl.com/free/2026-08-11-e4468359-9693-4f56-9f6a-88775f0b4e55.png" alt="Foundation Courses for Class 6th - 10th" style="width:100%; height:100%; object-fit:contain; display:block;" />
          </a>


          <!-- SLIDE 3 — FOUNDATION COURSES BANNER -->
          <a href="#courses?filter=Foundation" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <img src="https://cdn.phototourl.com/free/2026-08-11-619f7a94-6a9a-453c-908b-1651484fe7d5.png" alt="Foundation Courses for Class 6th - 10th" style="width:100%; height:100%; object-fit:contain; display:block;" />
          </a>

          <!-- SLIDE 4 — JOURNEY & INTROSPECTION -->
          <a href="#courses?filter=Foundation" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <img src="https://cdn.phototourl.com/free/2026-08-14-1e9adc87-cc2a-4bcf-8378-cb876b01aba8.png" alt="Foundation Courses for Class 6th - 10th" style="width:100%; height:100%; object-fit:contain; display:block;" />
          </a>

        </div>

        <!-- LEFT arrow -->
        <button id="er-arrow-prev" class="er-arrow er-arrow-prev" aria-label="Previous slide">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- RIGHT arrow -->
        <button id="er-arrow-next" class="er-arrow er-arrow-next" aria-label="Next slide">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

      </section>

      <!-- Dot pagination (Outside the banner) -->
      <div id="er-dots" class="er-banner-dots">
        <button class="er-dot er-dot-active" data-index="0" aria-label="Slide 1"></button>
        <button class="er-dot" data-index="1" aria-label="Slide 2"></button>
        <button class="er-dot" data-index="2" aria-label="Slide 3"></button>
        <button class="er-dot" data-index="3" aria-label="Slide 4"></button>
      </div>
    </div>
  `}function X(){let e=document.getElementById(`er-slider-track`),t=document.querySelectorAll(`.er-dot`),n=document.querySelectorAll(`.er-slide`),r=document.getElementById(`er-arrow-prev`),i=document.getElementById(`er-arrow-next`);if(!e||!n.length)return;let a=0,o;function s(r){a=(r%n.length+n.length)%n.length,e.style.transform=`translateX(-${a*100}%)`,t.forEach((e,t)=>{e.classList.toggle(`er-dot-active`,t===a)})}function c(){l(),o=setInterval(()=>s(a+1),3500)}function l(){clearInterval(o)}t.forEach(e=>{e.addEventListener(`click`,()=>{l(),s(parseInt(e.dataset.index)),c()})}),r&&r.addEventListener(`click`,e=>{e.preventDefault(),l(),s(a-1),c()}),i&&i.addEventListener(`click`,e=>{e.preventDefault(),l(),s(a+1),c()});let u=0;e.addEventListener(`touchstart`,e=>{u=e.changedTouches[0].screenX},{passive:!0}),e.addEventListener(`touchend`,e=>{let t=u-e.changedTouches[0].screenX;Math.abs(t)>50&&(l(),s(a+(t>0?1:-1)),c())}),e.addEventListener(`mouseenter`,l),e.addEventListener(`mouseleave`,c),s(0),c()}function Z(){return`
    <!-- ═══ SECTION B: POPULAR COURSES ═══ -->
    <section id="er-popular-courses" class="er-section" style="background:linear-gradient(160deg,#e8f5ee 0%,#d4eddf 50%,#c5e8d5 100%);">
        <div class="er-container">
            <h2 class="er-section-heading er-reveal visible" style="color:#0e3a24; font-weight: 800;"> Explore Our <span style="color:#1f7d4e;">Courses</span></h2>
            <p class="er-section-sub er-reveal visible" style="color:#2a5e3a;">
                Find the best course for your JEE, NEET, or foundation preparation and start learning today.
            </p>
            <div class="er-courses-grid">
                ${[{icon:`🔬`,iconBg:`#ef4444`,blobColor:`#fca5a5`,category:`Medical`,title:`NEET 2027`,link:`#courses?filter=NEET`,tags:[`Class 11`,`Class 12`,`Dropper`]},{icon:`📐`,iconBg:`#3b82f6`,blobColor:`#93c5fd`,category:`Engineering`,title:`JEE 2027`,link:`#courses?filter=JEE`,tags:[`Class 11`,`Class 12`,`Dropper`]},{icon:`📚`,iconBg:`#f59e0b`,blobColor:`#fde68a`,category:`School`,title:`Foundation (6-10)`,link:`#courses?filter=FOUNDATION`,tags:[`Class 8`,`Class 9`,`Class 10`]}].map((e,t)=>`
        <div class="er-course-card glass-card er-reveal visible" style="background: #ffffff !important; border: 1px solid rgba(22, 163, 74, 0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
            <div class="er-course-blob" style="background:${e.blobColor};"></div>
            <div class="er-course-icon" style="background:${e.iconBg}; color: #ffffff;">${e.icon}</div>
            <span class="er-course-cat" style="color: #15803d; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.05em;">${e.category}</span>
            <h3 class="er-course-title" style="color: #0e3a24; font-weight: 800; font-size: 1.5rem; margin-top: 0.25rem;">${e.title}</h3>
          
            <!-- Tags Section -->
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1rem; margin-top: 1rem;">
                ${e.tags.map(e=>`
                    <span style="padding: 6px 16px; border: 1px solid #cbd5e1; border-radius: 50px; font-size: 14px; color: #334155; background: #f8fafc; font-weight: 600;">
                        ${e}
                    </span>
                `).join(``)}
            </div>

            <a href="${e.link}" class="er-explore-link" style="color: #16a34a; font-weight: 700;">
                Explore Course
                <span class="er-explore-arrow" style="background: #16a34a; color: #ffffff;">→</span>
            </a>
        </div>
    `).join(``)}
            </div>
            <div style="text-align:center;margin-top:3rem;" class="er-reveal visible">
                <a href="#courses" class="er-view-all-btn">View All Courses →</a>
            </div>
        </div>
    </section>
    `}function re(){return`
    <!-- ═══ SECTION C: BOOK FREE DEMO ═══ -->
    <section id="er-free-demo" class="er-section" style="background:linear-gradient(135deg,#f0faf4 0%,#d8f3e3 100%);">
        <div class="er-container">
            <div class="er-demo-layout">

                <!-- LEFT — Text -->
                <div class="er-demo-text er-reveal visible">
                    <h2 class="er-demo-heading">
                        Book your
                        <span class="er-demo-highlight">
                            Free Demo
                            <svg class="er-underline-svg" viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 7 Q50 3 100 7 Q150 11 198 7" stroke="#FACC15" stroke-width="4" stroke-linecap="round" fill="none"/>
                            </svg>
                        </span>
                        session
                    </h2>
                    <p class="er-demo-sub">Experience how we teach before you commit to anything. Join a free session with India's top educators, ask your doubts, and see if it's the right fit for you.</p>

                    <ul class="er-demo-checklist">
                        <li><span class="er-check">✓</span> Live class with expert faculty</li>
                        <li><span class="er-check">✓</span> Discover a study plan designed around your goals</li>
                        <li><span class="er-check">✓</span> Learn free, experience it, then decide</li>
                    </ul>

                    <a href="#contact" class="er-demo-cta">
                        📅 Book a Free Demo
                    </a>
                </div>

                <!-- RIGHT — Image placeholder -->
                <div class="er-demo-image-wrap er-reveal visible">
                    <div class="er-demo-glow-ring"></div>
                    <img
                        src="https://cdn.phototourl.com/free/2026-07-29-95aea96d-d417-49bd-a2f3-cd7f4725e628.png"
                        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
                        alt="Free Demo — Teacher with student"
                        class="er-demo-img"
                    />
                    <!-- Fallback placeholder shown when no image exists -->
                    <div class="er-demo-placeholder" style="display:none;">
                        <span style="font-size:5rem;">👨‍🏫</span>
                        <p style="color:#2a9d62;font-weight:700;margin-top:1rem;">Add your teacher image here</p>
                        <p style="color:#4a6156;font-size:0.85rem;">Place file at: ./images/demo-teacher.png</p>
                    </div>
                    <span class="er-sparkle er-sparkle-1">✨</span>
                    <span class="er-sparkle er-sparkle-2">⭐</span>
                    <span class="er-sparkle er-sparkle-3">+</span>
                </div>

            </div>
        </div>
    </section>
    `}function ie(){return`
    <!-- ═══ FACULTY SECTION ═══ -->
    <section id="er-faculty" class="er-section" style="background: linear-gradient(180deg, #f0faf4 0%, #ffffff 100%); padding: 4.236rem 0;">
        <div class="er-container">
            <div class="er-faculty-header text-center mb-12" style="text-align: center;">
                <h2 class="er-section-heading er-reveal visible" style="color: #0e3a24; font-size: 2.25rem; font-weight: 800; display: inline-block; position: relative;">
                    Meet Our Faculty
                    <svg class="er-underline-svg" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; bottom: -8px; left: 0; width: 100%; height: 10px;">
                        <path d="M2 8 Q50 2 100 8 Q150 14 198 8" stroke="#16a34a" stroke-width="4" stroke-linecap="round" fill="none"/>
                        <path d="M20 10 Q70 4 120 10 Q170 16 180 10" stroke="#facc15" stroke-width="2" stroke-linecap="round" fill="none"/>
                    </svg>
                </h2>
                <p class="er-section-sub er-reveal visible" style="color: #374151; margin-top: 1rem; font-size: 1.05rem;">
                    Learn from India's most experienced educators and subject experts dedicated to your success.
                </p>
            </div>

            <!-- Faculty Carousel Container -->
            <div class="er-faculty-carousel-wrapper" style="position: relative;">
                <button class="er-carousel-nav er-nav-prev" id="er-faculty-prev" aria-label="Previous Faculty">&larr;</button>
                
                <div class="er-faculty-track-container" id="er-faculty-container">
                    <div class="er-faculty-grid" id="er-faculty-track">
                        ${[{name:`Mr. Manoj sir`,subject:`English`,exp:`14 Years Exp.`,desc:`He is a passionate English mentor dedicated to mastering language skills, literature, and communication excellence.`,image:`./images/home teachers image/1.png`,icon:`📖`},{name:`Mrs. Ritu ma'am`,subject:`Chemistry`,exp:`14 Years Exp.`,desc:`She is dedicated to building strong fundamentals and developing problem-solving excellence in students.`,image:`./images/home teachers image/2.png`,icon:`🧪`},{name:`Mr. Diwakar sir`,subject:`Physics`,exp:`15 Years Exp.`,desc:`He is recognized for his concept-driven teaching approach and consistent success in guiding NEET aspirants toward top ranks.`,image:`./images/home teachers image/3.png`,icon:`⚡`},{name:`Mr. Nitin sir`,subject:`Biology`,exp:`16 Years Exp.`,desc:`A highly respected Biology mentor, He is known for making complex concepts simple and helping students achieve NEET results.`,image:`./images/home teachers image/4.png`,icon:`🧬`},{name:`Ms. Khushbu ma'am`,subject:`Social Studies`,exp:`5 Years Exp.`,desc:`Passionate Social Studies mentor with 5 years of teaching experience, making History, Civics, and Geography engaging and accessible.`,image:`./images/home teachers image/5.png`,icon:`🌍`},{name:`Mr. Debashish Banerjee sir`,subject:`Mathematics`,exp:`13 Years Exp.`,desc:`Expert Mathematics mentor with 13 years of experience, specializing in Class 11th & 12th and JEE preparation.`,image:`./images/home teachers image/6.png`,icon:`🔢`}].map((e,t)=>(e.name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/,``).split(` `).map(e=>e[0]).join(``),`
        <div class="er-faculty-card glass-card er-reveal visible">
            <div class="er-faculty-img-wrap">
                <img src="${e.image}" class="er-faculty-img" alt="${e.name}" style="width: 100%; height: 100%; object-fit: contain; object-position: bottom center;">
                <div class="er-faculty-studio-badge" style="position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); z-index: 2; width: max-content;">
                    <span class="er-studio-icon">${e.icon}</span> ${e.subject} Specialist
                </div>
            </div>
            <div class="er-faculty-info">
                <h3 class="er-faculty-name">${e.name}</h3>
                <span class="er-faculty-subject">${e.subject}</span>
                <span class="er-faculty-badge">${e.exp}</span>
                <p class="er-faculty-desc">${e.desc}</p>
            </div>
        </div>
        `)).join(``)}
                    </div>
                </div>

                <button class="er-carousel-nav er-nav-next" id="er-faculty-next" aria-label="Next Faculty">&rarr;</button>
            </div>
        </div>
    </section>
    `}function ae(){let e=document.getElementById(`er-faculty-container`),t=document.getElementById(`er-faculty-track`),n=document.getElementById(`er-faculty-prev`),r=document.getElementById(`er-faculty-next`),i=document.getElementById(`er-faculty`);if(!e||!t)return;let a=null,o=!1;function s(){let e=t.querySelector(`.er-faculty-card`);if(!e)return 340;let n=window.getComputedStyle(e);return parseFloat(n.marginRight),e.offsetWidth+32}function c(){let t=e.scrollWidth-e.clientWidth;e.scrollLeft>=t-20?e.scrollTo({left:0,behavior:`smooth`}):e.scrollBy({left:s(),behavior:`smooth`})}function l(){if(e.scrollLeft<=10){let t=e.scrollWidth-e.clientWidth;e.scrollTo({left:t,behavior:`smooth`})}else e.scrollBy({left:-s(),behavior:`smooth`})}function u(){d(),o&&(a=setInterval(c,3500))}function d(){a&&=(clearInterval(a),null)}n&&n.addEventListener(`click`,()=>{l(),d(),u()}),r&&r.addEventListener(`click`,()=>{c(),d(),u()}),e.addEventListener(`mouseenter`,d),e.addEventListener(`mouseleave`,u),e.addEventListener(`touchstart`,d,{passive:!0}),e.addEventListener(`touchend`,u,{passive:!0}),`IntersectionObserver`in window&&i?new IntersectionObserver(e=>{e.forEach(e=>{o=e.isIntersecting,o?u():d()})},{threshold:.1}).observe(i):(o=!0,u())}function oe(){let e=[{name:`Kavya Sen.`,rating:5,quote:`Yahan ke experienced teachers har concept ko detail mein samjhate hain aur doubts ko patiently clear karte hain. Regular tests, detailed performance analysis, aur consistent guidance ne meri accuracy aur confidence dono ko improve kiya .`,bg:`linear-gradient(135deg, #10b981 0%, #059669 100%)`},{name:`Vivek Singh`,rating:4,quote:`I was struggling with Biology and Chemistry before joining EduRain and teachers explained every topic in a very simple way and doubt sessions were really helpful. Highly recommended for NEET aspirants.`,bg:`linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)`},{name:`Neha Yadav`,rating:4,quote:`Mujhe sabse achha yeh laga ki teachers sirf syllabus complete karne par focus nahi karte, balki concepts ko achhe se clear karwate hain. NEET preparation ke liye EduRain perfect platform hai`,bg:`linear-gradient(135deg, #ec4899 0%, #be185d 100%)`},{name:`Aarav Sharma`,rating:5,quote:`The mock test series and detailed rank analysis gave me real exam environment experience. Solved all my doubts instantly in live sessions.`,bg:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`},{name:`Ananya Roy`,rating:5,quote:`EduRain's interactive live classes and recorded sessions gave me the flexibility to revise complex physics formulas anytime. Scored 680+ in NEET!`,bg:`linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)`},{name:`Rohan Gupta`,rating:5,quote:`Faculty members are super approachable. They solved every single doubt even after class hours. Best platform for JEE preparation.`,bg:`linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)`}],t=e=>{let t=``;for(let n=0;n<5;n++)t+=n<e?`★`:`☆`;return t};return`
    <!-- ═══ REVIEWS SECTION ═══ -->
    <section id="er-home-reviews" class="er-section" style="background: #f8fafc; padding: 4.236rem 0;">
        <div class="er-container">
            <div class="er-reviews-header text-center mb-12" style="text-align: center;">
                <h2 class="er-section-heading er-reveal visible" style="color: #0e3a24; font-size: 2.25rem; font-weight: 800; display: inline-block; position: relative;">
                    What Our Students Say
                    <svg class="er-underline-svg" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; bottom: -8px; left: 0; width: 100%; height: 10px;">
                        <path d="M2 8 Q50 2 100 8 Q150 14 198 8" stroke="#16a34a" stroke-width="4" stroke-linecap="round" fill="none"/>
                        <path d="M20 10 Q70 4 120 10 Q170 16 180 10" stroke="#facc15" stroke-width="2" stroke-linecap="round" fill="none"/>
                    </svg>
                </h2>
                <p class="er-section-sub er-reveal visible" style="color: #4b5563; margin-top: 1rem; font-size: 1.05rem;">
                    Join thousands of students learning and growing with us every day.
                </p>
            </div>

            <!-- Floating Reviews Slider Track with Left & Right Arrows -->
            <div class="er-reviews-carousel-wrapper" style="position: relative;">
                <button class="er-carousel-nav er-nav-prev" id="er-reviews-prev" aria-label="Previous Review">&larr;</button>

                <div class="er-reviews-marquee-wrapper" id="er-reviews-wrapper">
                    <div class="er-reviews-grid" id="er-home-reviews-track">
                        ${e.map(e=>`
        <div class="er-review-card er-reveal visible" style="background: #ffffff !important; border: 1px solid #e5e7eb; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.08);">
            <div class="er-review-card-top">
                <div class="er-google-rating">
                    <svg class="er-google-icon" viewBox="0 0 24 24" width="20" height="20">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span class="er-review-stars" style="color: #eab308; font-size: 1.1rem; font-weight: 700;">${t(e.rating)}</span>
                </div>
                <span class="er-quote-mark" style="color: #fde047;">”</span>
            </div>

            <p class="er-review-quote" style="color: #1f2937; font-size: 0.95rem; line-height: 1.6; font-style: italic;">"${e.quote}"</p>

            <div class="er-review-author">
                <div class="er-review-avatar-badge" style="background: ${e.bg}; color: #ffffff;">
                    ${e.name[0]}
                </div>
                <span class="er-review-author-name" style="color: #0e3a24; font-weight: 700; font-size: 1rem;">${e.name}</span>
            </div>
        </div>
        `).join(``)}
                    </div>
                </div>

                <button class="er-carousel-nav er-nav-next" id="er-reviews-next" aria-label="Next Review">&rarr;</button>
            </div>
        </div>
    </section>
    `}function se(){let e=document.getElementById(`er-home-reviews-track`),t=document.getElementById(`er-reviews-wrapper`),n=document.getElementById(`er-reviews-prev`),r=document.getElementById(`er-reviews-next`);if(!e||!t)return;let i=null;function a(){let e=t.scrollWidth-t.clientWidth;t.scrollLeft>=e-20?t.scrollTo({left:0,behavior:`smooth`}):t.scrollBy({left:380,behavior:`smooth`})}function o(){if(t.scrollLeft<=10){let e=t.scrollWidth-t.clientWidth;t.scrollTo({left:e,behavior:`smooth`})}else t.scrollBy({left:-380,behavior:`smooth`})}function s(){c(),i=setInterval(a,3500)}function c(){i&&=(clearInterval(i),null)}n&&n.addEventListener(`click`,()=>{o(),c(),s()}),r&&r.addEventListener(`click`,()=>{a(),c(),s()});let l=!1,u,d;t.addEventListener(`mousedown`,e=>{l=!0,u=e.pageX-t.offsetLeft,d=t.scrollLeft,c()}),t.addEventListener(`mouseleave`,()=>{l=!1,s()}),t.addEventListener(`mouseenter`,c),t.addEventListener(`mouseup`,()=>{l=!1,s()}),t.addEventListener(`mousemove`,e=>{if(!l)return;e.preventDefault();let n=(e.pageX-t.offsetLeft-u)*2;t.scrollLeft=d-n}),t.addEventListener(`touchstart`,c,{passive:!0}),t.addEventListener(`touchend`,s,{passive:!0}),s()}function ce(){return`
    <!-- ═══ SECTION D: IMPACT NUMBERS ═══ -->
    <section id="er-impact" class="er-section" style="background:#ffffff; padding: 4.236rem 0;">
        <div class="er-container">
            <h2 class="er-section-heading er-reveal visible" style="color:#0e3a24; font-weight: 800; font-size: 2.25rem;">
                Trusted by Thousands, Proven by Results
            </h2>
            <p class="er-section-sub er-reveal visible" style="color:#4a6156; margin-top: 0.75rem; font-size: 1.05rem;">
                Join thousands of students learning and growing with us every day. 
            </p>

            <div class="er-impact-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.618rem; margin-top: 2.618rem;">

                <!-- Card 1 — Students -->
                <div class="er-impact-card glass-card er-reveal visible" data-color="#16a34a" style="background: #f0fdf4 !important; border: 1px solid rgba(22, 163, 74, 0.25); border-radius: 1.618rem; padding: 1.618rem; box-shadow: 0 10px 25px -5px rgba(22, 163, 74, 0.1); position: relative; overflow: hidden; transition: all 0.3s ease;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                        <span style="font-size: 2.5rem;">🎓</span>
                        <span style="background: rgba(22, 163, 74, 0.15); color: #15803d; border-radius: 50px; padding: 0.25rem 0.75rem; font-size: 0.75rem; font-weight: 700;">Community</span>
                    </div>
                    <div>
                        <p class="er-impact-number" style="color:#0e3a24; font-size: 2.5rem; font-weight: 800; margin: 0; line-height: 1.2;">
                            <span class="er-count" data-target="15" data-suffix="k+">15k+</span>
                        </p>
                        <p class="er-impact-label" style="color:#166534; font-weight: 700; font-size: 1rem; margin-top: 0.25rem;">Happy Students</p>
                        <div class="er-impact-bar-wrap" style="height: 4px; background: rgba(22, 163, 74, 0.15); border-radius: 4px; margin-top: 1rem; overflow: hidden;">
                            <div class="er-impact-bar er-bar-expanded" style="height: 100%; background: linear-gradient(90deg, #16a34a, #22c55e); width: 100%; border-radius: 4px;"></div>
                        </div>
                    </div>
                </div>

                <!-- Card 2 — Mock Tests -->
                <div class="er-impact-card glass-card er-reveal visible" data-color="#ef4444" style="background: #fef2f2 !important; border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 1.618rem; padding: 1.618rem; box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.1); position: relative; overflow: hidden; transition: all 0.3s ease;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                        <span style="font-size: 2.5rem;">📝</span>
                        <span style="background: rgba(239, 68, 68, 0.15); color: #b91c1c; border-radius: 50px; padding: 0.25rem 0.75rem; font-size: 0.75rem; font-weight: 700;">Test Series</span>
                    </div>
                    <div>
                        <p class="er-impact-number" style="color:#7f1d1d; font-size: 2.5rem; font-weight: 800; margin: 0; line-height: 1.2;">
                            <span class="er-count" data-target="2400" data-suffix="+">2,400+</span>
                        </p>
                        <p class="er-impact-label" style="color:#991b1b; font-weight: 700; font-size: 1rem; margin-top: 0.25rem;">Mock Tests</p>
                        <div class="er-impact-bar-wrap" style="height: 4px; background: rgba(239, 68, 68, 0.15); border-radius: 4px; margin-top: 1rem; overflow: hidden;">
                            <div class="er-impact-bar er-bar-expanded" style="height: 100%; background: linear-gradient(90deg, #ef4444, #f87171); width: 100%; border-radius: 4px;"></div>
                        </div>
                    </div>
                </div>

                <!-- Card 3 — Video Lectures -->
                <div class="er-impact-card glass-card er-reveal visible" data-color="#0284c7" style="background: #f0f9ff !important; border: 1px solid rgba(2, 132, 199, 0.25); border-radius: 1.618rem; padding: 1.618rem; box-shadow: 0 10px 25px -5px rgba(2, 132, 199, 0.1); position: relative; overflow: hidden; transition: all 0.3s ease;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                        <span style="font-size: 2.5rem;">🎬</span>
                        <span style="background: rgba(2, 132, 199, 0.15); color: #0369a1; border-radius: 50px; padding: 0.25rem 0.75rem; font-size: 0.75rem; font-weight: 700;">Content</span>
                    </div>
                    <div>
                        <p class="er-impact-number" style="color:#0c4a6e; font-size: 2.5rem; font-weight: 800; margin: 0; line-height: 1.2;">
                            <span class="er-count" data-target="1400" data-suffix="+">1,400+</span>
                        </p>
                        <p class="er-impact-label" style="color:#075985; font-weight: 700; font-size: 1rem; margin-top: 0.25rem;">Video Lectures</p>
                        <div class="er-impact-bar-wrap" style="height: 4px; background: rgba(2, 132, 199, 0.15); border-radius: 4px; margin-top: 1rem; overflow: hidden;">
                            <div class="er-impact-bar er-bar-expanded" style="height: 100%; background: linear-gradient(90deg, #0284c7, #38bdf8); width: 100%; border-radius: 4px;"></div>
                        </div>
                    </div>
                </div>

                <!-- Card 4 — Practice Papers -->
                <div class="er-impact-card glass-card er-reveal visible" data-color="#7c3aed" style="background: #faf5ff !important; border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 1.618rem; padding: 1.618rem; box-shadow: 0 10px 25px -5px rgba(124, 58, 237, 0.1); position: relative; overflow: hidden; transition: all 0.3s ease;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                        <span style="font-size: 2.5rem;">📄</span>
                        <span style="background: rgba(124, 58, 237, 0.15); color: #6d28d9; border-radius: 50px; padding: 0.25rem 0.75rem; font-size: 0.75rem; font-weight: 700;">Practice</span>
                    </div>
                    <div>
                        <p class="er-impact-number" style="color:#4c1d95; font-size: 2.5rem; font-weight: 800; margin: 0; line-height: 1.2;">
                            <span class="er-count" data-target="3000" data-suffix="+">3,000+</span>
                        </p>
                        <p class="er-impact-label" style="color:#5b21b6; font-weight: 700; font-size: 1rem; margin-top: 0.25rem;">Practice Papers</p>
                        <div class="er-impact-bar-wrap" style="height: 4px; background: rgba(124, 58, 237, 0.15); border-radius: 4px; margin-top: 1rem; overflow: hidden;">
                            <div class="er-impact-bar er-bar-expanded" style="height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); width: 100%; border-radius: 4px;"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    `}function le(){let e=document.querySelectorAll(`.er-count`),t=!1;function n(e){let t=parseInt(e.dataset.target,10),n=e.dataset.suffix||``,r=0;function i(e){return t>=1e6?(e/1e6).toFixed(0)+n:e.toLocaleString(`en-IN`)+n}e.textContent=i(0);let a=setInterval(()=>{r=Math.min(r+Math.ceil(t/80),t),e.textContent=i(r),r>=t&&(clearInterval(a),e.textContent=i(t),e.style.animation=`erCountPing 0.4s ease-out`,setTimeout(()=>{e.style.animation=``},400))},25)}let r=document.getElementById(`er-impact`);r&&(new IntersectionObserver(r=>{r.forEach(r=>{r.isIntersecting&&!t&&(t=!0,e.forEach(e=>n(e)))})},{threshold:.25}).observe(r),document.querySelectorAll(`.er-impact-card`).forEach(e=>{let t=e.querySelector(`.er-impact-bar`);e.addEventListener(`mouseenter`,()=>{t&&t.classList.add(`er-bar-expanded`),e.style.transform=`translateY(-6px)`}),e.addEventListener(`mouseleave`,()=>{t&&t.classList.remove(`er-bar-expanded`),e.style.transform=`translateY(0)`})}))}function ue(){return`

    <section id="er-app-download" class="er-section er-app-bg">

        <div class="er-app-blob er-app-blob-1"></div>
        <div class="er-app-blob er-app-blob-2"></div>

        <div class="er-container" style="position:relative;z-index:1;">
            <div class="er-app-layout">

                <!-- LEFT — Text & store buttons -->
                <div class="er-app-text er-reveal visible">

                    <h2 class="er-app-heading">
                        Learn from
                        <span class="er-app-anywhere">
                            anywhere
                            <svg class="er-underline-svg" viewBox="0 0 160 10" fill="none">
                                <path d="M2 7 Q40 3 80 7 Q120 11 158 7" stroke="#FACC15" stroke-width="4" stroke-linecap="round" fill="none"/>
                            </svg>
                        </span>
                    </h2>

                    <p class="er-app-sub">We're available on Android &amp; iOS devices and platforms.</p>
                    <p class="er-app-desc">Study from anywhere at your convenience — offline videos, live classes, AI-powered practice, and doubt solving all in one place.</p>

                    <ul class="er-app-features">
                        <li><span class="er-app-check">✔</span> Offline video downloads</li>
                        <li><span class="er-app-check">✔</span> Live doubt solving 24/7</li>
                        <li><span class="er-app-check">✔</span> AI-powered personalised practice</li>
                    </ul>

                    <!-- Store Buttons -->
                    <div class="er-store-buttons">
                        <a href="https://play.google.com/store/apps/details?id=co.lynde.fpdwe&hl=en_IN" target="_blank" rel="noopener noreferrer" class="er-store-btn er-store-btn-play">
                            <svg class="er-store-icon" viewBox="0 0 48 48">
                                <path fill="#00D2FF" d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"></path>
                                <path fill="#00E676" d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"></path>
                                <path fill="#FF3D00" d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"></path>
                                <path fill="#FFC107" d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z"></path>
                            </svg>
                            <div>
                                <div class="er-store-small">GET IT ON</div>
                                <div class="er-store-name">Google Play</div>
                            </div>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" class="er-store-btn er-store-btn-apple">
                            <svg class="er-store-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.05.13zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <div>
                                <div class="er-store-small">DOWNLOAD ON THE</div>
                                <div class="er-store-name">App Store</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- RIGHT — Floating phone mockup -->
                <div class="er-app-phone-wrap er-reveal visible">
                    <div class="er-app-glow-ring"></div>

                    <div class="er-phone-frame">
                        <!-- Notch -->
                        <div class="er-phone-notch"></div>
                        <!-- Screen -->
                        <div class="er-phone-screen">
                            <img src="./images/floating%20phone.jpeg" alt="EduRain App" style="width:100%; height:100%; object-fit:cover; display:block;" />
                        </div>
                    </div>

                    <!-- Floating subject badges -->
                    <div class="er-badge-float er-badge-float-1"><span>⚗️</span> Chemistry</div>
                    <div class="er-badge-float er-badge-float-2"><span>📐</span> Maths</div>
                    <div class="er-badge-float er-badge-float-3 er-badge-yellow"><span>🌟</span> Live Class</div>

                    <!-- Decorative icons -->
                    <span class="er-deco er-deco-1">✨</span>
                    <span class="er-deco er-deco-2">🔬</span>
                    <span class="er-deco er-deco-3">💡</span>
                </div>

            </div>
        </div>
    </section>
    `}function de(){document.addEventListener(`click`,e=>{e.target.closest(`.er-store-btn-apple`)&&(e.preventDefault(),fe())})}function fe(){if(document.getElementById(`ios-app-popup-overlay`))return;let e=document.createElement(`div`);e.id=`ios-app-popup-overlay`,e.className=`mobile-popup-overlay`,e.style.alignItems=`center`,e.style.justifyContent=`center`;let t=document.createElement(`div`);t.className=`mobile-popup-content`,t.style.position=`relative`,t.style.margin=`auto`,t.style.maxWidth=`400px`,t.style.borderRadius=`16px`,window.innerWidth<=768&&(t.style.margin=`auto auto 0 auto`,t.style.borderBottomLeftRadius=`0`,t.style.borderBottomRightRadius=`0`),t.innerHTML=`
        <button class="mobile-popup-close-x" id="ios-popup-btn-x" aria-label="Close" style="top: 15px; right: 15px;">
            <i class="fas fa-times"></i>
        </button>
        <div style="padding: 2rem 1.5rem; text-align: center;">
            <div style="margin-bottom: 1rem;">
                <svg viewBox="0 0 24 24" fill="#000000" style="width: 48px; height: 48px; display: inline-block;">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.05.13zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
            </div>
            <div class="mobile-popup-title" style="font-size: 1.25rem; color: #1a1a1a; font-weight: 700; margin-bottom: 0.75rem;">
                Almost there!
            </div>
            <div class="mobile-popup-subtitle" style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem; color: #4b5563;">
                You will be redirected to the <strong>MyInstitute</strong> app on the App Store. To access EduRain, please enter our organization code:
            </div>
            <div style="background: #f3f4f6; padding: 1rem; border-radius: 8px; font-size: 1.75rem; font-weight: 800; letter-spacing: 3px; color: #1f2937; margin-bottom: 1.5rem; user-select: all; text-transform: uppercase; border: 2px dashed #d1d5db;">
                rwoaln
            </div>
            <button class="btn btn-primary mobile-popup-btn-open" id="ios-popup-btn-continue" style="width: 100%; margin-bottom: 0.75rem; padding: 12px; font-weight: 600; font-size: 1rem;">
                Copy Code & Go to App Store
            </button>
            <button class="mobile-popup-btn-close" id="ios-popup-btn-cancel" style="width: 100%; font-weight: 500;">
                Cancel
            </button>
        </div>
    `,e.appendChild(t),document.body.appendChild(e),setTimeout(()=>{e.classList.add(`visible`),t.classList.add(`visible`)},50);let n=()=>{e.classList.remove(`visible`),t.classList.remove(`visible`),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},400)};document.getElementById(`ios-popup-btn-cancel`).addEventListener(`click`,n),document.getElementById(`ios-popup-btn-x`).addEventListener(`click`,n),e.addEventListener(`click`,t=>{t.target===e&&n()}),document.getElementById(`ios-popup-btn-continue`).addEventListener(`click`,()=>{navigator.clipboard.writeText(`rwoaln`).catch(e=>console.log(`Clipboard error:`,e)),window.open(`https://apps.apple.com/in/app/myinstitute/id1472483563`,`_blank`),n()})}function Q(e,t){document.title=e;let n=document.querySelector(`meta[name="description"]`);n||(n=document.createElement(`meta`),n.name=`description`,document.head.appendChild(n)),n.content=t}var pe={"#home":{render:()=>Y()+Z()+re()+ie()+oe()+ce()+ue(),postRender:()=>{X(),ae(),se(),le(),$()}},"#courses":{render:()=>T(),postRender:()=>E()},"#blogs":{render:()=>k(),postRender:()=>j()},"#journey":{render:()=>B(),postRender:()=>V()},"#about":{render:()=>M(),postRender:()=>{}},"#reviews":{render:()=>P(),postRender:()=>F()},"#contact":{render:()=>I(),postRender:()=>L()},"#privacy":{render:()=>H(),postRender:()=>{}},"#terms":{render:()=>U(),postRender:()=>Q(`Terms and Conditions - EduRain`,`Terms and conditions of use for Edurain`)},"#sitemap":{render:()=>W(),postRender:()=>Q(`Sitemap - EduRain`,`Sitemap for EduRain`)},"#jeecourses":{render:()=>K(),postRender:()=>Q(`JEE Courses - EduRain`,`Comprehensive preparation for IIT-JEE exams. Build a strong foundation and master the concepts to secure your seat in top engineering colleges.`)},"#neetcourses":{render:()=>q(),postRender:()=>Q(`NEET Courses - EduRain`,`Focused coaching for medical aspirants. In-depth coverage of Biology, Physics, and Chemistry to help you crack NEET with top scores.`)},"#foundationcourses":{render:()=>J(),postRender:()=>Q(`Foundation Courses - EduRain`,`Strengthen your core concepts in Science and Mathematics from Class 6 to 10. The perfect stepping stone for future competitive exams.`)}};function $(){let e=document.querySelectorAll(`.er-reveal`);if(!e.length)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{threshold:.12});e.forEach(e=>t.observe(e))}var me=()=>{let e=document.getElementById(`app`),t=()=>{let t=window.location.hash;if(!t||t===`#`){t=`#home`,window.location.hash=t;return}let n=t.split(`?`)[0].split(`/`)[0],r=pe[n]||{render:()=>`<div class="page-404"><h1>404</h1><p>Page not found</p><a href="#home" class="btn btn-accent">Go Home</a></div>`,postRender:()=>{}},i=te(),a=r.render(),o=S(),s=R();e.innerHTML=`
      ${i}
      <main class="main-content fade-in-section">
        ${a}
      </main>
      ${o}
      ${s}
    `,requestAnimationFrame(()=>{let t=e.querySelector(`.main-content`);t&&t.classList.add(`visible`)}),document.querySelectorAll(`.nav-link`).forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)===n)}),window.scrollTo({top:0,behavior:`instant`}),x(),z(),C(),de(),r.postRender(),window.observeFadeElements&&window.observeFadeElements()};window.addEventListener(`hashchange`,t),t()};function he(){let e=document.createElement(`div`);e.id=`er-fab-container`,e.innerHTML=`
        <!-- AI Chat Window (Hidden by default) -->
        <div id="er-chat-window" class="er-chat-hidden">
            <div class="er-chat-header">
                <div class="er-chat-title">
                    <div class="er-chat-avatar">AI</div>
                    <div>
                        <div style="font-weight:700;font-size:0.95rem;">EduRain AI Assistant</div>
                        <div style="font-size:0.75rem;color:#a7f3d0;">Online</div>
                    </div>
                </div>
                <button class="er-chat-close" id="er-chat-close">&times;</button>
            </div>
            
            <div class="er-chat-body" id="er-chat-body">
                <div class="er-chat-msg er-msg-ai">
                    <p>Hello! Welcome to EduRain. How can I assist you with your preparation today?</p>
                </div>
            </div>
            
            <div class="er-chat-footer">
                <button class="er-chat-live-btn">Connect to Live Executive</button>
                <div class="er-chat-input-area">
                    <input type="text" id="er-chat-input" placeholder="Type your message..." autocomplete="off">
                    <button id="er-chat-send">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- FAB Stack -->
        <div class="er-fab-stack">
            <button class="er-fab-btn er-fab-small" id="er-fab-scroll" aria-label="Scroll to top" title="Scroll to Top">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </button>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" class="er-fab-btn er-fab-whatsapp" aria-label="WhatsApp" title="Chat on WhatsApp">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
            <button class="er-fab-btn er-fab-chat" id="er-fab-chat" aria-label="AI Assistant" title="AI Assistant">
                <div class="er-fab-pulse"></div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><circle cx="9" cy="11" r="1" fill="currentColor"/><circle cx="15" cy="11" r="1" fill="currentColor"/><path d="M9 15c.5 1 2 1.5 3 1.5s2.5-.5 3-1.5"/></svg>
            </button>
        </div>
    `,document.body.appendChild(e);let t=document.getElementById(`er-fab-scroll`),n=document.getElementById(`er-fab-chat`),r=document.getElementById(`er-chat-close`),i=document.getElementById(`er-chat-window`);window.addEventListener(`scroll`,()=>{window.scrollY>300?t.classList.add(`er-fab-visible`):t.classList.remove(`er-fab-visible`)}),t.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})});let a=()=>{i.classList.toggle(`er-chat-hidden`)};n.addEventListener(`click`,a),r.addEventListener(`click`,a)}function ge(){window.innerWidth>768||setTimeout(()=>{_e()},3e3)}function _e(){if(document.getElementById(`mobile-app-popup-overlay`))return;let e=document.createElement(`div`);e.id=`mobile-app-popup-overlay`,e.className=`mobile-popup-overlay`;let t=document.createElement(`div`);t.className=`mobile-popup-content`,t.innerHTML=`
        <button class="mobile-popup-close-x" id="popup-btn-x" aria-label="Close">
            <i class="fas fa-times"></i>
        </button>
        <div class="mobile-popup-banner">
            <img src="./images/mobile_popup_banner.png" alt="EduRain App on Mobile Phones">
        </div>
        <div class="mobile-popup-body">
            <div class="mobile-popup-title">Get EduRain App for</div>
            <div class="mobile-popup-subtitle">Access live & recorded classes on the go</div>
            
            <div class="mobile-popup-dynamic-text-container">
                <div id="popup-dynamic-text" class="mobile-popup-dynamic-text">Exclusive App-Only Features</div>
            </div>

            <button class="btn btn-primary mobile-popup-btn-open" id="popup-btn-open">
                Open in App
            </button>
            
            <button class="mobile-popup-btn-close" id="popup-btn-close">
                Continue in Web
            </button>
        </div>
        
        <!-- iOS Org Code View (Initially Hidden) -->
        <div class="mobile-popup-ios-view" id="mobile-popup-ios-view" style="display: none; padding: 1.5rem; text-align: center;">
            <div class="mobile-popup-title" style="font-size: 1.1rem; color: #1a1a1a; font-weight: 600; margin-bottom: 1rem;">
                Almost there!
            </div>
            <div class="mobile-popup-subtitle" style="font-size: 0.95rem; line-height: 1.4; margin-bottom: 1.5rem;">
                You will be redirected to the <strong>MyInstitute</strong> app. To access EduRain, please enter our organization code:
            </div>
            <div style="background: #f0f4f8; padding: 1rem; border-radius: 8px; font-size: 1.5rem; font-weight: 800; letter-spacing: 2px; color: #5a4bda; margin-bottom: 1.5rem; user-select: all; text-transform: uppercase;">
                rwoaln
            </div>
            <button class="btn btn-primary mobile-popup-btn-open" id="popup-btn-ios-continue">
                Copy Code & Go to App Store
            </button>
            <button class="mobile-popup-btn-close" id="popup-btn-ios-cancel">
                Cancel
            </button>
        </div>
    `,e.appendChild(t),document.body.appendChild(e),setTimeout(()=>{e.classList.add(`visible`),t.classList.add(`visible`)},50);let n=[`Exclusive App-Only Features`,`Your Entire Prep in One App`,`Learning Anytime, Anywhere`],r=0,i=document.getElementById(`popup-dynamic-text`),a=setInterval(()=>{if(!i){clearInterval(a);return}i.style.opacity=`0`,i.style.transform=`translateY(10px)`,setTimeout(()=>{r=(r+1)%n.length,i.textContent=n[r],i.style.opacity=`1`,i.style.transform=`translateY(0)`},300)},3e3),o=()=>{clearInterval(a),e.classList.remove(`visible`),t.classList.remove(`visible`),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},400)};document.getElementById(`popup-btn-close`).addEventListener(`click`,o),document.getElementById(`popup-btn-x`).addEventListener(`click`,o),e.addEventListener(`click`,t=>{t.target===e&&o()});let s=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;document.getElementById(`popup-btn-open`).addEventListener(`click`,()=>{s?(document.querySelector(`.mobile-popup-body`).style.display=`none`,document.getElementById(`mobile-popup-ios-view`).style.display=`block`):(window.open(`https://play.google.com/store/apps/details?id=co.lynde.fpdwe&hl=en_IN`,`_blank`),o())}),document.getElementById(`popup-btn-ios-cancel`).addEventListener(`click`,()=>{document.getElementById(`mobile-popup-ios-view`).style.display=`none`,document.querySelector(`.mobile-popup-body`).style.display=`block`}),document.getElementById(`popup-btn-ios-continue`).addEventListener(`click`,()=>{navigator.clipboard.writeText(`rwoaln`).catch(e=>console.log(`Clipboard error:`,e)),window.open(`https://apps.apple.com/in/app/myinstitute/id1472483563`,`_blank`),o()})}`scrollRestoration`in history&&(history.scrollRestoration=`manual`),document.addEventListener(`DOMContentLoaded`,()=>{me(),he(),ge(),ee(e=>{document.querySelectorAll(`.auth-btn-area`).forEach(t=>{let n=t.classList.contains(`mobile-menu-footer`);if(e)t.innerHTML=`
          <span class="user-greeting">Hi, ${e.displayName||e.email.split(`@`)[0]}</span>
          <button class="btn btn-outline btn-sm logout-btn" ${n?`style="width: 100%;"`:``}>Logout</button>
        `;else{t.innerHTML=`
          <button class="btn btn-accent login-btn" ${n?`style="width: 100%;"`:``}>${n?`Login/Register`:`Login`}</button>
        `;let e=t.querySelector(`.login-btn`);e&&e.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`open-auth-modal`))})}})});let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`visible`),e.unobserve(t.target))})},{root:null,rootMargin:`0px`,threshold:.1});window.observeFadeElements=()=>{document.querySelectorAll(`.fade-in-section:not(.visible)`).forEach(t=>e.observe(t))},window.observeFadeElements()});