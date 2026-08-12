import{a as e,c as t,d as n,f as r,i,l as a,n as o,o as s,p as c,r as l,s as u,t as d,u as f}from"./vendor-4Cj2Jx5L.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var p=c({apiKey:`AIzaSyBLw5eneJGCi4-YshAf5wgBA-yDT8o70Mc`,authDomain:`edurain-pvt.firebaseapp.com`,projectId:`edurain-pvt`,storageBucket:`edurain-pvt.firebasestorage.app`,messagingSenderId:`5660601224`,appId:`1:5660601224:web:e12194bc33e38cd1e8e83d`,measurementId:`G-JL0D0KVQYZ`}),m=t(p),h=e(p),g=async(e,t,n)=>{try{await o(i(h,`users`,e),{name:t,email:n,created_at:s()})}catch(e){throw Error(`Could not save user data: `+e.message)}},_=async(e,t,n)=>{try{await d(l(h,`contacts`),{name:e,email:t,message:n,created_at:s()})}catch(e){throw Error(`Could not send message: `+e.message)}},v=async(e,t,n)=>{try{let i=(await u(m,t,n)).user;return await r(i,{displayName:e}),await g(i.uid,e,t),i}catch(e){throw Error(e.message||`Registration failed`)}},y=async(e,t)=>{try{return(await f(m,e,t)).user}catch(e){throw Error(e.message||`Login failed`)}},b=async()=>{try{await n(m)}catch(e){throw Error(e.message||`Logout failed`)}},x=e=>a(m,e);function S(){return`
        <nav class="navbar" id="main-nav">
            <div class="navbar-container">
                <div class="logo">
                    <span class="text-white">Edu</span><span class="text-accent">Rain</span> 🎓
                </div>
                <div class="nav-links">
                    <a href="#home" class="nav-link active">Home</a>
                    <a href="#courses" class="nav-link">Our Courses</a>
                    <a href="#blogs" class="nav-link">Blogs</a>
                    <a href="#about" class="nav-link">About Us</a>
                    <a href="#contact" class="nav-link">Contact Us</a>
                </div>
                <div class="auth-btn-area" id="auth-btn-area">
                    <button class="btn btn-accent" id="login-btn">Login/Signup</button>
                </div>
                <button class="hamburger" id="hamburger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="mobile-menu" id="mobile-menu">
                <a href="#home" class="nav-link active">Home</a>
                <a href="#courses" class="nav-link">Our Courses</a>
                <a href="#blogs" class="nav-link">Blogs</a>
                <a href="#about" class="nav-link">About Us</a>
                <a href="#contact" class="nav-link">Contact Us</a>
            </div>
        </nav>
    `}function C(){let e=document.getElementById(`hamburger-btn`),t=document.getElementById(`mobile-menu`),n=document.querySelectorAll(`.mobile-menu .nav-link`),r=document.getElementById(`login-btn`),i=document.getElementById(`auth-btn-area`),a=document.getElementById(`main-nav`);e&&t&&e.addEventListener(`click`,()=>{e.classList.toggle(`active`),t.classList.toggle(`active`)}),n.forEach(n=>{n.addEventListener(`click`,()=>{e&&t&&(e.classList.remove(`active`),t.classList.remove(`active`))})}),r&&r.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`open-auth-modal`))}),i&&i.addEventListener(`click`,e=>{e.target.id===`logout-btn`&&b()}),window.addEventListener(`scroll`,()=>{window.scrollY>50?a.classList.add(`scrolled`):a.classList.remove(`scrolled`)})}function w(){return`
        <footer class="site-footer">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo">
                        <span class="text-white">Edu</span><span class="text-accent">Rain</span> 🎓
                    </div>
                    <p>Empowering learners across India with accessible,<br>high-quality education and expert guidance.</p>
                    <div class="social-icons">
                        <span class="social-icon"><i class="fab fa-instagram"></i></span>
                        <span class="social-icon"><i class="fab fa-linkedin-in"></i></span>
                        <span class="social-icon"><i class="fab fa-youtube"></i></span>
                        <span class="social-icon"><i class="fab fa-x-twitter"></i></span>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="#home">&gt; Home</a></li>
                        <li><a href="#courses">&gt; Courses</a></li>
                        <li><a href="#blogs">&gt; Blogs</a></li>
                        <li><a href="#about">&gt; About</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <p><i class="fas fa-phone"></i> +91 98765 43210</p>
                    <p><i class="fas fa-phone"></i> +91 91234 56789</p>
                    <p><i class="fas fa-envelope"></i> hello@edurain.in</p>
                    <p><i class="fas fa-envelope"></i> support@edurain.in</p>
                </div>
                <div class="footer-col">
                    <h4>Get the App</h4>
                    <p>Learn on the go. Download the EduRain app today.</p>
                    <div class="app-buttons">
                        <button class="btn-store">
                            <i class="fab fa-google-play"></i>
                            <span><small>GET IT ON</small><br>Google Play</span>
                        </button>
                        <button class="btn-store">
                            <i class="fab fa-apple"></i>
                            <span><small>Download on the</small><br>App Store</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 <span class="text-accent">EduRain</span>. All rights reserved.</p>
                <p class="made-with-love">💚 Made with love in India</p>
                <div class="legal-links">
                    <a href="#privacy">Privacy Policy</a> |
                    <a href="#terms">Terms of Service</a> |
                    <a href="#sitemap">Sitemap</a>
                </div>
            </div>
        </footer>
    `}var T=[{id:`c1`,title:`Dropper JEE 2027 Batch`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Banarjee`,rating:4.2,students:500,price:`₹12,520`,thumbnail:`https://www.image2url.com/r2/default/images/1785241678586-e366f596-5395-4f47-8046-e3da0a27c9d1.png`,category:`JEE`,description:`Master the fundamentals of Calculus and Linear Algebra. Perfect for engineering aspirants.`},{id:`c2`,title:`CLASS 11TH MATHEMATICS`,instructor:`Mr.Banarjee Sir`,rating:4.5,students:302,price:`₹2,520`,thumbnail:`https://www.image2url.com/r2/default/images/1785224597331-747f9012-6f61-4100-8093-a6fb60ec85fb.png`,category:`JEE`,description:`Master the fundamentals of Calculus and Linear Algebra. Perfect for engineering aspirants.`},{id:`c3`,title:`9th English`,instructor:`Mr.Manoj Sir`,rating:4.9,students:200,price:`₹3020`,thumbnail:``,category:`FOUNDATION`,description:`In-depth physics concepts tailored for competitive exams. Includes problem-solving sessions.`},{id:`c4`,title:`CLASS 12TH Physics`,instructor:`Mr.Diwakar Sir`,rating:4.7,students:236,price:`₹2,520`,thumbnail:`/images/course-3.jpg`,category:`NEET`,description:`Learn to build modern web applications from scratch using MERN stack.`},{id:`c5`,title:`BIOLOGY CLASS 12TH`,instructor:`Mr.Nitin Sir`,rating:4.6,students:150,price:`2,520`,thumbnail:`/images/course-4.jpg`,category:`NEET`,description:`Improve your spoken English skills for professional and everyday use.`},{id:`c6`,title:`CLASS 12TH MATHEMATICS`,instructor:`Mr.Banarjee Sir`,rating:4.8,students:132,price:`₹2,520`,thumbnail:`/images/course-1.jpg`,category:`JEE`,description:`Crack product-based company interviews with robust DSA concepts.`},{id:`c7`,title:`CLASS 11TH PCB(NEET)`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Nitin`,rating:4.5,students:620,price:`₹5,020`,thumbnail:`/images/course-2.jpg`,category:`NEET`,description:`Clear your basics in Organic Chemistry with reaction mechanisms and practical examples.`},{id:`c8`,title:`DROPPER NEET 2027 BATCH`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Nitin`,rating:4.7,students:1800,price:`₹12,520`,thumbnail:`/images/course-3.jpg`,category:`NEET`,description:`Boost your calculation speed using ancient Vedic Math techniques.`},{id:`c9`,title:`CLASS 11TH PCB(JEE)`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Banarjee`,rating:4.9,students:1200,price:`₹5,020`,thumbnail:`/images/course-4.jpg`,category:`JEE`,description:`A complete beginner's guide to understanding, reading, and speaking Hindi.`},{id:`c10`,title:`CLASS 8TH`,instructor:`Manoj Sir,Khushbu ma'am ,Nandini ma'am,Sujeet sir`,rating:4.8,students:1120,price:`₹4,520`,thumbnail:`/images/course-1.jpg`,category:`FOUNDATION`,description:`Step into the world of AI with practical Machine Learning algorithms and tools.`},{id:`c11`,title:`CLASS 7TH`,instructor:`Manoj Sir,Khushbu ma'am ,Nandini ma'am,Sujeet sir`,rating:4.9,students:320,price:`₹3,520`,thumbnail:`/images/course-2.jpg`,category:`NEET`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c12`,title:`CLASS 12TH English`,instructor:`Mr.Manoj Sir`,rating:4.1,students:126,price:`₹2,520`,thumbnail:`/images/course-2.jpg`,category:`ALL`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c13`,title:`CLASS 6TH`,instructor:`Manoj Sir,Khushbu ma'am ,Nandini ma'am,Sujeet sir`,rating:3.9,students:234,price:`₹3,520`,thumbnail:`/images/course-2.jpg`,category:`FOUNDATION`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c14`,title:`CLASS 11TH ENGLISH`,instructor:`Mr.Manoj Sir`,rating:4.3,students:105,price:`₹2,520`,thumbnail:`/images/course-2.jpg`,category:`ENGLISH`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c15`,title:`CLASS 9TH SUPER CAMPIONS`,instructor:`Manoj Sir,Khushbu ma'am ,Nandini ma'am,Sujeet sir`,rating:4.4,students:370,price:`₹4,520`,thumbnail:`/images/course-2.jpg`,category:`FOUNDATION`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c16`,title:`CLASS 10TH DISHA BATCH`,instructor:`Manoj Sir,Khushbu ma'am ,Nandini ma'am,Sujeet sir`,rating:4.7,students:249,price:`₹4,020`,thumbnail:`/images/course-2.jpg`,category:`FOUNDATION`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c17`,title:`TARGET JEE 2027 -12TH CLASS BATCH`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Banarjee`,rating:4.45,students:425,price:`₹4,820`,thumbnail:`/images/course-2.jpg`,category:`JEE`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c18`,title:`NEET WHITE COAT 2027 -CLASS 12th`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Nitin`,rating:4.9,students:770,price:`₹4,820`,thumbnail:`/images/course-2.jpg`,category:`NEET`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c19`,title:`MISSION NEET 3.0 BATCH 2028`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Nitin`,rating:4.1,students:505,price:`₹9,019`,thumbnail:`/images/course-2.jpg`,category:`NEET`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c20`,title:`CLASS 10TH ENGLISH`,instructor:`Mr.Manoj Sir`,rating:4.2,students:120,price:`₹3,020`,thumbnail:`/images/course-2.jpg`,category:`FOUNDATION`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c21`,title:`CHEMISTRY CLASS 11TH `,instructor:`Ms.Ritu ma'am`,rating:4.7,students:304,price:`₹3,020`,thumbnail:`/images/course-2.jpg`,category:`NEET`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c22`,title:`CHEMISTRY CLASS 12TH`,instructor:`Ms.Ritu ma'am`,rating:4,students:321,price:`₹3,620`,thumbnail:`/images/course-2.jpg`,category:`NEET`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`},{id:`c23`,title:`JEE Mantra 3.0 Batch 2028`,instructor:`Ms.Ritu , Mr.Diwakar ,Mr.Banarjee`,rating:3.89,students:890,price:`₹9,019`,thumbnail:`/images/course-2.jpg`,category:`JEE`,description:`Comprehensive biology course designed specifically for medical aspirants targeting NEET.`}];function E(){return`
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
                ${T.map(e=>{let t=`⭐`.repeat(Math.round(e.rating)),n=e.students>=1e3?`${(e.students/1e3).toFixed(1)}K`:e.students;return`
            <div class="glass-card course-card fade-in-section" data-category="${e.category}">
                <div class="course-thumb" style="background-image: url('${e.thumbnail}')"></div>
                <span class="course-category">${e.category}</span>
                <h3>${e.title}</h3>
                <p class="course-instructor">by ${e.instructor}</p>
                <div class="course-meta">
                    <span class="course-rating">${t} ${e.rating}</span>
                    <span class="course-students">${n} students</span>
                </div>
                <div class="course-bottom">
                    <span class="course-price">${e.price}</span>
                    <button class="btn btn-accent btn-sm">View Details</button>
                </div>
            </div>
        `}).join(``)}
            </div>
        </section>
    `}function D(){let e=document.querySelectorAll(`.filter-btn`),t=document.querySelectorAll(`.course-card`);function n(n){let r=!1;e.forEach(e=>{let t=e.dataset.filter===n;e.classList.toggle(`active`,t),t&&(r=!0)}),!r&&e.length&&(e[0].classList.add(`active`),n=`All`),t.forEach(e=>{n===`All`||e.dataset.category===n?(e.style.display=``,e.classList.add(`fade-in-section`,`visible`)):e.style.display=`none`})}let r=`All`,i=window.location.hash;i.includes(`?filter=`)&&(r=decodeURIComponent(i.split(`?filter=`)[1])),n(r),e.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.filter;n(t);let r=t===`All`?`#courses`:`#courses?filter=${t}`;window.location.hash!==r&&history.replaceState(null,``,r)})})}var O=[{id:`b1`,title:`Top 10 Study Hacks for Competitive Exams in India`,excerpt:`Discover proven strategies to maximize your retention and ace exams like JEE and NEET. Time management and strategic planning play a vital role.`,author:`Ravi Shastri`,date:`2026-06-15T09:00:00Z`,category:`Study Tips`,coverImage:`/images/blog-1.jpg`},{id:`b2`,title:`Why Python is the Best First Programming Language`,excerpt:`Explore why Python's readable syntax and vast ecosystem make it perfect for beginners. Start your coding journey the right way.`,author:`Anjali Mehta`,date:`2026-07-02T14:30:00Z`,category:`Programming`,coverImage:`/images/blog-2.jpg`},{id:`b3`,title:`The Future of EdTech in Rural India`,excerpt:`How mobile internet and vernacular content are bridging the educational divide. A look at the next decade of digital learning.`,author:`Siddharth Rao`,date:`2026-07-10T11:15:00Z`,category:`Education Trends`,coverImage:`/images/blog-3.jpg`},{id:`b4`,title:`Mastering English Grammar for Professionals`,excerpt:`A deep dive into common grammatical errors and how to avoid them in corporate communications. Elevate your professional presence.`,author:`Priya Desai`,date:`2026-07-18T08:45:00Z`,category:`Languages`,coverImage:`/images/blog-1.jpg`},{id:`b5`,title:`Mental Health for Students: Balancing Academics and Life`,excerpt:`Stress management techniques for students dealing with high-pressure academic environments. Prioritizing mental well-being is crucial.`,author:`Dr. Kavita Joshi`,date:`2026-07-20T16:00:00Z`,category:`Wellness`,coverImage:`/images/blog-2.jpg`},{id:`b6`,title:`Demystifying Calculus: It's Easier Than You Think`,excerpt:`Breaking down complex calculus concepts into simple, intuitive ideas. Stop fearing math and start enjoying the logic.`,author:`Dr. Rajesh Kumar`,date:`2026-07-22T10:20:00Z`,category:`Mathematics`,coverImage:`/images/blog-3.jpg`}];function k(){return`
        <section class="blogs-section" id="blogs">
            <div class="section-header">
                <h2>Latest from Our Blog</h2>
                <p>Insights, tips, and news from EduRain</p>
            </div>
            <div class="blogs-grid">
                ${O.map(e=>{let t=new Date(e.date).toLocaleDateString(`en-IN`,{year:`numeric`,month:`short`,day:`numeric`});return`
            <div class="glass-card blog-card fade-in-section">
                <div class="blog-cover" style="background-image: url('${e.coverImage}')"></div>
                <div class="blog-body">
                    <span class="blog-tag">${e.category}</span>
                    <h3>${e.title}</h3>
                    <p>${e.excerpt}</p>
                    <div class="blog-meta">
                        <span class="blog-author">${e.author}</span>
                        <span class="blog-date">${t}</span>
                        <a href="#" class="read-more">Read More &rarr;</a>
                    </div>
                </div>
            </div>
        `}).join(``)}
            </div>
        </section>
    `}function A(){return`
        <section class="about-section low-light-bg" id="about">
            <div class="section-header">
                <h2 class="text-light">About EduRain</h2>
            </div>
            <div class="about-content">
                <div class="about-left">
                    <div class="glass-card mission-card">
                        <h3>Our Mission</h3>
                        <p>To democratize quality education across India using technology.</p>
                    </div>
                    <div class="glass-card vision-card">
                        <h3>Our Vision</h3>
                        <p>To become India's most trusted and accessible learning platform by 2030.</p>
                    </div>
                </div>
                <div class="about-right text-light">
                    <h3>Our Story</h3>
                    <p>Founded in 2024, EduRain was born from a simple idea: education should be accessible to everyone, everywhere. What started as a small initiative has quickly grown into a comprehensive learning ecosystem.</p>
                    <p>We believe in combining the best educators with cutting-edge technology to deliver personalized, engaging, and effective learning experiences.</p>
                    <div class="about-stats">
                        <div class="stat">Founded 2024</div>
                        <div class="stat">10K+ Students</div>
                        <div class="stat">50+ Expert Educators</div>
                    </div>
                </div>
            </div>
            <div class="values-row">
                <div class="glass-card value-card">
                    <h4>Innovation</h4>
                    <p>Constantly improving the learning experience.</p>
                </div>
                <div class="glass-card value-card">
                    <h4>Accessibility</h4>
                    <p>Education for everyone, anywhere.</p>
                </div>
                <div class="glass-card value-card">
                    <h4>Excellence</h4>
                    <p>Uncompromising quality in everything we do.</p>
                </div>
            </div>
        </section>
    `}var j=[{id:`r1`,name:`Aarav Patel`,course:`Full Stack Web Development Bootcamp`,rating:5,quote:`This bootcamp completely transformed my career. The projects were practical, and I landed a great job right after completion!`,avatar:`/images/avatar-1.jpg`},{id:`r2`,name:`Diya Sharma`,course:`Physics Masterclass for JEE Advanced`,rating:5,quote:`Aisha ma'am makes complex physics concepts so easy to understand. I finally feel confident about my JEE preparation.`,avatar:`/images/avatar-2.jpg`},{id:`r3`,name:`Rohan Gupta`,course:`Data Structures and Algorithms in Python`,rating:5,quote:`The best DSA course I've ever taken. Amit sir's explanation of dynamic programming was phenomenal.`,avatar:`/images/avatar-3.jpg`},{id:`r4`,name:`Ananya Singh`,course:`Biology for NEET - Complete Syllabus`,rating:5,quote:`Dr. Reddy's teaching style is engaging and highly informative. The mock tests provided were exactly what I needed.`,avatar:`/images/avatar-4.jpg`},{id:`r5`,name:`Karan Malhotra`,course:`Vedic Mathematics for Lightning Fast Calculations`,rating:5,quote:`I used to struggle with calculations during exams. Vedic math techniques have literally doubled my speed!`,avatar:`/images/avatar-1.jpg`},{id:`r6`,name:`Megha Nair`,course:`Spoken English Fluency Course`,rating:5,quote:`Priya ma'am helped me overcome my fear of public speaking. Highly recommend this to anyone looking to improve fluency.`,avatar:`/images/avatar-2.jpg`},{id:`r7`,name:`Ishaan Desai`,course:`Advanced Mathematics: Calculus & Linear Algebra`,rating:5,quote:`Brilliant course for engineering students. The visual explanations for linear algebra made everything click.`,avatar:`/images/avatar-3.jpg`},{id:`r8`,name:`Sneha Iyer`,course:`Machine Learning Foundations`,rating:5,quote:`A perfect introduction to AI. The hands-on projects gave me the practical experience I needed to start my ML journey.`,avatar:`/images/avatar-4.jpg`}];function M(){return`
        <section class="reviews-section" id="reviews">
            <div class="section-header">
                <h2>What Our Students Say</h2>
                <p>Real stories from our learners</p>
            </div>
            <div class="reviews-carousel">
                <button class="carousel-btn carousel-prev">&larr;</button>
                <div class="carousel-viewport">
                    <div class="carousel-track" id="review-track">
                        ${j.map((e,t)=>{let n=[`linear-gradient(135deg, #10b981 0%, #059669 100%)`,`linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)`,`linear-gradient(135deg, #ec4899 0%, #be185d 100%)`,`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,`linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)`,`linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)`];return`
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
                    ${j.map((e,t)=>`<span class="dot ${t===0?`active`:``}" data-index="${t}"></span>`).join(``)}
                </div>
            </div>
        </section>
    `}function N(){let e=document.getElementById(`review-track`),t=document.querySelector(`.carousel-prev`),n=document.querySelector(`.carousel-next`),r=document.querySelectorAll(`.carousel-dots .dot`),i=0,a=r.length,o;if(!e||a===0)return;function s(){e.style.transform=`translateX(-${i*100}%)`,r.forEach(e=>e.classList.remove(`active`)),r[i]&&r[i].classList.add(`active`)}function c(){i=(i+1)%a,s()}function l(){i=(i-1+a)%a,s()}function u(){o=setInterval(c,4e3)}function d(){clearInterval(o)}t&&t.addEventListener(`click`,()=>{l(),d(),u()}),n&&n.addEventListener(`click`,()=>{c(),d(),u()}),r.forEach(e=>{e.addEventListener(`click`,e=>{i=parseInt(e.target.dataset.index),s(),d(),u()})});let f=document.querySelector(`.reviews-carousel`);f&&(f.addEventListener(`mouseenter`,d),f.addEventListener(`mouseleave`,u));let p=0;e&&(e.addEventListener(`touchstart`,e=>{p=e.changedTouches[0].screenX}),e.addEventListener(`touchend`,e=>{let t=e.changedTouches[0].screenX;p-t>50&&c(),t-p>50&&l()})),u()}function ee(){return`
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
                                <p>hello@edurain.in</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📞</span>
                            <div>
                                <strong>Phone</strong>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📍</span>
                            <div>
                                <strong>Location</strong>
                                <p>Mumbai, India</p>
                            </div>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#" class="social-icon" title="Twitter">𝕏</a>
                        <a href="#" class="social-icon" title="LinkedIn">in</a>
                        <a href="#" class="social-icon" title="Instagram">📷</a>
                        <a href="#" class="social-icon" title="YouTube">▶</a>
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
    `}function P(){let e=document.getElementById(`contact-form`),t=document.getElementById(`form-message`);e&&e.addEventListener(`submit`,async n=>{n.preventDefault();let r=document.getElementById(`contact-name`).value.trim(),i=document.getElementById(`contact-email`).value.trim(),a=document.getElementById(`contact-message`).value.trim();if(r.length<2){t.textContent=`Please enter your name (min 2 characters).`,t.className=`form-message error`;return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){t.textContent=`Please enter a valid email address.`,t.className=`form-message error`;return}if(a.length<10){t.textContent=`Message must be at least 10 characters.`,t.className=`form-message error`;return}let o=document.getElementById(`contact-submit`);o.disabled=!0,o.textContent=`Sending...`;try{await _(r,i,a),t.textContent=`✅ Message sent successfully! We will get back to you soon.`,t.className=`form-message success`,e.reset()}catch{t.textContent=`❌ Failed to send message. Please try again.`,t.className=`form-message error`}finally{o.disabled=!1,o.textContent=`Send Message`}})}function F(){return`
        <div class="auth-modal-overlay" id="auth-modal" style="display:none;">
            <div class="auth-modal glass-card">
                <button class="modal-close" id="modal-close">&times;</button>
                <div class="auth-modal-header">
                    <div class="logo"><span class="text-white">Edu</span><span class="text-accent">Rain</span> 🎓</div>
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
    `}function I(){let e=document.getElementById(`auth-modal`),t=document.getElementById(`modal-close`),n=document.getElementById(`login-form`),r=document.getElementById(`signup-form`);if(!e)return;document.addEventListener(`open-auth-modal`,()=>{e.style.display=`flex`,document.body.style.overflow=`hidden`});let i=()=>{e.style.display=`none`,document.body.style.overflow=``};t&&t.addEventListener(`click`,i),e.addEventListener(`click`,t=>{t.target===e&&i()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.style.display===`flex`&&i()});let a=e=>{document.querySelectorAll(`.auth-tab`).forEach(e=>e.classList.remove(`active`));let t=document.querySelector(`.auth-tab[data-target="${e}"]`);t&&t.classList.add(`active`),n.style.display=e===`login-form`?`block`:`none`,r.style.display=e===`signup-form`?`block`:`none`};document.querySelectorAll(`.auth-tab`).forEach(e=>{e.addEventListener(`click`,e=>a(e.target.dataset.target))}),document.querySelectorAll(`.switch-form`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),a(e.target.dataset.target)})}),document.querySelectorAll(`.toggle-password`).forEach(e=>{e.addEventListener(`click`,()=>{let t=document.getElementById(e.dataset.target);t&&(t.type=t.type===`password`?`text`:`password`,e.textContent=t.type===`password`?`👁`:`🙈`)})}),n&&n.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`login-email`).value.trim(),r=document.getElementById(`login-password`).value,a=document.getElementById(`login-error`),o=n.querySelector(`.btn-text`),s=n.querySelector(`.spinner`);a.textContent=``,o.style.display=`none`,s.style.display=`inline-block`;try{await y(t,r),i(),n.reset()}catch(e){a.textContent=e.message||`Login failed. Please try again.`}finally{o.style.display=`inline`,s.style.display=`none`}}),r&&r.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`signup-name`).value.trim(),n=document.getElementById(`signup-email`).value.trim(),a=document.getElementById(`signup-password`).value,o=document.getElementById(`signup-confirm`).value,s=document.getElementById(`signup-error`),c=r.querySelector(`.btn-text`),l=r.querySelector(`.spinner`);if(s.textContent=``,t.length<2){s.textContent=`Please enter your full name.`;return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)){s.textContent=`Please enter a valid email address.`;return}if(a.length<6){s.textContent=`Password must be at least 6 characters.`;return}if(a!==o){s.textContent=`Passwords do not match.`;return}c.style.display=`none`,l.style.display=`inline-block`;try{await v(t,n,a),i(),r.reset()}catch(e){s.textContent=e.message||`Registration failed. Please try again.`}finally{c.style.display=`inline`,l.style.display=`none`}})}function L(){return`
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
    `}function R(){let e=document.getElementById(`architecture-modal`),t=document.getElementById(`modal-close-btn`),n=document.getElementById(`modal-title`),r=document.getElementById(`mermaid-diagram-container`);document.querySelectorAll(`.view-architecture-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let i=t.dataset.project,a=`System Architecture`,o=``;if(i===`credit-risk`?(a=`💳 Credit Risk Assessment — Multi-Agent Architecture`,o=`
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
    `),n.textContent=a,r.innerHTML=`<div class="mermaid">${o}</div>`,e.classList.add(`active`),window.mermaid)try{window.mermaid.initialize({startOnLoad:!1,theme:`dark`}),window.mermaid.run({nodes:r.querySelectorAll(`.mermaid`)})}catch(e){console.error(`Mermaid render error:`,e)}})}),t&&t.addEventListener(`click`,()=>{e.classList.remove(`active`)}),e&&e.addEventListener(`click`,t=>{t.target===e&&e.classList.remove(`active`)});let i=document.getElementById(`reflection-journal-form`),a=document.getElementById(`journal-status`);i&&i.addEventListener(`submit`,e=>{e.preventDefault(),a&&(a.style.display=`block`,setTimeout(()=>{a.style.display=`none`,i.reset()},3e3))})}function z(){return`
    <!-- ═══ SECTION A: HERO AUTO-SCROLL BANNER (Restored Original Layout & Aspect Ratio) ═══ -->
    <section id="er-hero-banner" style="position:relative; width:100%; overflow:hidden; background:#0e3a24;">

      <div id="er-slider-track" style="display:flex; transition:transform 0.7s cubic-bezier(0.4,0,0.2,1); will-change:transform;">

        <!-- SLIDE 1 — FOUNDATION COURSES BANNER -->
        <a href="#courses?filter=Foundation" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
          <img src="https://cdn.phototourl.com/free/2026-08-11-a7030a92-dc08-48c2-b85c-b8e62024f50c.png" alt="Foundation Courses for Class 6th - 10th" style="width:100%; height:100%; object-fit:cover; display:block;" />
        </a>

        <!-- SLIDE 2 — NEET BATCH -->
        <a href="#courses?filter=Foundation" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
          <img src="https://cdn.phototourl.com/free/2026-08-11-9182f96d-b0d3-40b7-a92d-52fa39089fe8.png" alt="Foundation Courses for Class 6th - 10th" style="width:100%; height:100%; object-fit:cover; display:block;" />
        </a>


        <!-- SLIDE 3 — FOUNDATION COURSES BANNER -->
        <a href="#courses?filter=Foundation" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
          <img src="https://cdn.phototourl.com/free/2026-08-11-e4468359-9693-4f56-9f6a-88775f0b4e55.png" alt="Foundation Courses for Class 6th - 10th" style="width:100%; height:100%; object-fit:cover; display:block;" />
        </a>

        <!-- SLIDE 4 — JOURNEY & INTROSPECTION -->
        <a href="#courses?filter=Foundation" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
          <img src="https://cdn.phototourl.com/free/2026-08-11-619f7a94-6a9a-453c-908b-1651484fe7d5.png" alt="Foundation Courses for Class 6th - 10th" style="width:100%; height:100%; object-fit:cover; display:block;" />
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

      <!-- Dot pagination -->
      <div id="er-dots" style="position:absolute; bottom:16px; left:50%; transform:translateX(-50%); display:flex; gap:10px; z-index:20;">
        <button class="er-dot er-dot-active" data-index="0" aria-label="Slide 1"></button>
        <button class="er-dot" data-index="1" aria-label="Slide 2"></button>
        <button class="er-dot" data-index="2" aria-label="Slide 3"></button>
        <button class="er-dot" data-index="3" aria-label="Slide 4"></button>
      </div>
    </section>
  `}function B(){let e=document.getElementById(`er-slider-track`),t=document.querySelectorAll(`.er-dot`),n=document.querySelectorAll(`.er-slide`),r=document.getElementById(`er-arrow-prev`),i=document.getElementById(`er-arrow-next`);if(!e||!n.length)return;let a=0,o;function s(r){a=(r%n.length+n.length)%n.length,e.style.transform=`translateX(-${a*100}%)`,t.forEach((e,t)=>{e.classList.toggle(`er-dot-active`,t===a)})}function c(){l(),o=setInterval(()=>s(a+1),3500)}function l(){clearInterval(o)}t.forEach(e=>{e.addEventListener(`click`,()=>{l(),s(parseInt(e.dataset.index)),c()})}),r&&r.addEventListener(`click`,e=>{e.preventDefault(),l(),s(a-1),c()}),i&&i.addEventListener(`click`,e=>{e.preventDefault(),l(),s(a+1),c()});let u=0;e.addEventListener(`touchstart`,e=>{u=e.changedTouches[0].screenX},{passive:!0}),e.addEventListener(`touchend`,e=>{let t=u-e.changedTouches[0].screenX;Math.abs(t)>50&&(l(),s(a+(t>0?1:-1)),c())}),e.addEventListener(`mouseenter`,l),e.addEventListener(`mouseleave`,c),s(0),c()}function V(){return`
    <!-- ═══ SECTION B: POPULAR COURSES ═══ -->
    <section id="er-popular-courses" class="er-section" style="background:linear-gradient(160deg,#e8f5ee 0%,#d4eddf 50%,#c5e8d5 100%);">
        <div class="er-container">
            <h2 class="er-section-heading er-reveal visible" style="color:#0e3a24; font-weight: 800;"> Explore Our Popular <span style="color:#1f7d4e;">Courses</span></h2>
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
    `}function H(){return`
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
    `}function U(){return`
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
                        ${[{name:`Mrs. Ritu ma'am`,subject:`Chemistry`,exp:`14 Years Exp.`,desc:`She is dedicated to building strong fundamentals and developing problem-solving excellence in students.`,avatarBg:`linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)`,icon:`🧪`},{name:`Mr. Diwakar sir`,subject:`Physics`,exp:`15 Years Exp.`,desc:`He is recognized for his concept-driven teaching approach and consistent success in guiding NEET aspirants toward top ranks.`,avatarBg:`linear-gradient(135deg, #065f46 0%, #10b981 100%)`,icon:`⚡`},{name:`Mr. Nitin sir`,subject:`Biology`,exp:`16 Years Exp.`,desc:`A highly respected Biology mentor, He is known for making complex concepts simple and helping students achieve NEET results.`,avatarBg:`linear-gradient(135deg, #7c2d12 0%, #f97316 100%)`,icon:`🧬`},{name:`Dr. Aakash Sharma`,subject:`Organic Chemistry`,exp:`12 Years Exp.`,desc:`Specialist in reaction mechanisms, helping students master organic chemistry with logical flow and memory maps.`,avatarBg:`linear-gradient(135deg, #581c87 0%, #a855f7 100%)`,icon:`🔬`},{name:`Ms. Priya Verma`,subject:`Mathematics`,exp:`10 Years Exp.`,desc:`Focused on short-cut techniques and speed math for JEE Advanced, building student confidence step-by-step.`,avatarBg:`linear-gradient(135deg, #831843 0%, #ec4899 100%)`,icon:`📐`},{name:`Mr. Rajesh Kumar`,subject:`Physical Chemistry`,exp:`14 Years Exp.`,desc:`Simplifies numerical problem solving and formula applications with real-world practical illustrations.`,avatarBg:`linear-gradient(135deg, #1e293b 0%, #64748b 100%)`,icon:`⚗️`}].map((e,t)=>{let n=e.name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/,``).split(` `).map(e=>e[0]).join(``);return`
        <div class="er-faculty-card glass-card er-reveal visible">
            <div class="er-faculty-img-wrap" style="background: ${e.avatarBg};">
                <div class="er-faculty-avatar-fallback" style="display:flex;">
                    <div class="er-avatar-circle">
                        <span class="er-avatar-initials">${n}</span>
                    </div>
                    <div class="er-faculty-studio-badge">
                        <span class="er-studio-icon">${e.icon}</span> ${e.subject} Specialist
                    </div>
                </div>
            </div>
            <div class="er-faculty-info">
                <h3 class="er-faculty-name">${e.name}</h3>
                <span class="er-faculty-subject">${e.subject}</span>
                <span class="er-faculty-badge">${e.exp}</span>
                <p class="er-faculty-desc">${e.desc}</p>
            </div>
        </div>
        `}).join(``)}
                    </div>
                </div>

                <button class="er-carousel-nav er-nav-next" id="er-faculty-next" aria-label="Next Faculty">&rarr;</button>
            </div>
        </div>
    </section>
    `}function W(){let e=document.getElementById(`er-faculty-container`),t=document.getElementById(`er-faculty-track`),n=document.getElementById(`er-faculty-prev`),r=document.getElementById(`er-faculty-next`);if(!e||!t)return;let i=null;function a(){let t=e.scrollWidth-e.clientWidth;e.scrollLeft>=t-20?e.scrollTo({left:0,behavior:`smooth`}):e.scrollBy({left:340,behavior:`smooth`})}function o(){if(e.scrollLeft<=10){let t=e.scrollWidth-e.clientWidth;e.scrollTo({left:t,behavior:`smooth`})}else e.scrollBy({left:-340,behavior:`smooth`})}function s(){c(),i=setInterval(a,3500)}function c(){i&&=(clearInterval(i),null)}n&&n.addEventListener(`click`,()=>{o(),c(),s()}),r&&r.addEventListener(`click`,()=>{a(),c(),s()}),e.addEventListener(`mouseenter`,c),e.addEventListener(`mouseleave`,s),e.addEventListener(`touchstart`,c,{passive:!0}),e.addEventListener(`touchend`,s,{passive:!0}),s()}function G(){let e=[{name:`Kavya Sen.`,rating:5,quote:`Yahan ke experienced teachers har concept ko detail mein samjhate hain aur doubts ko patiently clear karte hain. Regular tests, detailed performance analysis, aur consistent guidance ne meri accuracy aur confidence dono ko improve kiya .`,bg:`linear-gradient(135deg, #10b981 0%, #059669 100%)`},{name:`Vivek Singh`,rating:4,quote:`I was struggling with Biology and Chemistry before joining EduRain and teachers explained every topic in a very simple way and doubt sessions were really helpful. Highly recommended for NEET aspirants.`,bg:`linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)`},{name:`Neha Yadav`,rating:4,quote:`Mujhe sabse achha yeh laga ki teachers sirf syllabus complete karne par focus nahi karte, balki concepts ko achhe se clear karwate hain. NEET preparation ke liye EduRain perfect platform hai`,bg:`linear-gradient(135deg, #ec4899 0%, #be185d 100%)`},{name:`Aarav Sharma`,rating:5,quote:`The mock test series and detailed rank analysis gave me real exam environment experience. Solved all my doubts instantly in live sessions.`,bg:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`},{name:`Ananya Roy`,rating:5,quote:`EduRain's interactive live classes and recorded sessions gave me the flexibility to revise complex physics formulas anytime. Scored 680+ in NEET!`,bg:`linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)`},{name:`Rohan Gupta`,rating:5,quote:`Faculty members are super approachable. They solved every single doubt even after class hours. Best platform for JEE preparation.`,bg:`linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)`}],t=e=>{let t=``;for(let n=0;n<5;n++)t+=n<e?`★`:`☆`;return t};return`
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
    `}function K(){let e=document.getElementById(`er-home-reviews-track`),t=document.getElementById(`er-reviews-wrapper`),n=document.getElementById(`er-reviews-prev`),r=document.getElementById(`er-reviews-next`);if(!e||!t)return;let i=null;function a(){let e=t.scrollWidth-t.clientWidth;t.scrollLeft>=e-20?t.scrollTo({left:0,behavior:`smooth`}):t.scrollBy({left:380,behavior:`smooth`})}function o(){if(t.scrollLeft<=10){let e=t.scrollWidth-t.clientWidth;t.scrollTo({left:e,behavior:`smooth`})}else t.scrollBy({left:-380,behavior:`smooth`})}function s(){c(),i=setInterval(a,3500)}function c(){i&&=(clearInterval(i),null)}n&&n.addEventListener(`click`,()=>{o(),c(),s()}),r&&r.addEventListener(`click`,()=>{a(),c(),s()});let l=!1,u,d;t.addEventListener(`mousedown`,e=>{l=!0,u=e.pageX-t.offsetLeft,d=t.scrollLeft,c()}),t.addEventListener(`mouseleave`,()=>{l=!1,s()}),t.addEventListener(`mouseenter`,c),t.addEventListener(`mouseup`,()=>{l=!1,s()}),t.addEventListener(`mousemove`,e=>{if(!l)return;e.preventDefault();let n=(e.pageX-t.offsetLeft-u)*2;t.scrollLeft=d-n}),t.addEventListener(`touchstart`,c,{passive:!0}),t.addEventListener(`touchend`,s,{passive:!0}),s()}function q(){return`
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
    `}function J(){let e=document.querySelectorAll(`.er-count`),t=!1;function n(e){let t=parseInt(e.dataset.target,10),n=e.dataset.suffix||``,r=0;function i(e){return t>=1e6?(e/1e6).toFixed(0)+n:e.toLocaleString(`en-IN`)+n}e.textContent=i(0);let a=setInterval(()=>{r=Math.min(r+Math.ceil(t/80),t),e.textContent=i(r),r>=t&&(clearInterval(a),e.textContent=i(t),e.style.animation=`erCountPing 0.4s ease-out`,setTimeout(()=>{e.style.animation=``},400))},25)}let r=document.getElementById(`er-impact`);r&&(new IntersectionObserver(r=>{r.forEach(r=>{r.isIntersecting&&!t&&(t=!0,e.forEach(e=>n(e)))})},{threshold:.25}).observe(r),document.querySelectorAll(`.er-impact-card`).forEach(e=>{let t=e.querySelector(`.er-impact-bar`);e.addEventListener(`mouseenter`,()=>{t&&t.classList.add(`er-bar-expanded`),e.style.transform=`translateY(-6px)`}),e.addEventListener(`mouseleave`,()=>{t&&t.classList.remove(`er-bar-expanded`),e.style.transform=`translateY(0)`})}))}function Y(){return`
    <!-- ═══ SECTION E: APP DOWNLOAD ═══ -->
    <section id="er-app-download" class="er-section er-app-bg">

        <!-- Background decorative blobs -->
        <div class="er-app-blob er-app-blob-1"></div>
        <div class="er-app-blob er-app-blob-2"></div>

        <div class="er-container" style="position:relative;z-index:1;">
            <div class="er-app-layout">

                <!-- LEFT — Text & store buttons -->
                <div class="er-app-text er-reveal visible">
                    <div class="er-app-platform-badge">📱 Now Available on All Platforms</div>

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
                            <div class="er-phone-content">
                                <div style="font-size:2.5rem;margin-bottom:0.5rem;">📱</div>
                                <p style="font-weight:800;font-size:1rem;color:#fff;">EduRain App</p>
                                <p style="font-size:0.7rem;color:#a7f3d0;margin-top:0.25rem;">Victory Starts Here</p>
                                <div class="er-phone-icons">
                                    <div class="er-phone-icon">📚</div>
                                    <div class="er-phone-icon">🧪</div>
                                    <div class="er-phone-icon">📐</div>
                                    <div class="er-phone-icon">🎬</div>
                                    <div class="er-phone-icon er-phone-icon-accent">⭐</div>
                                    <div class="er-phone-icon">📊</div>
                                </div>
                                <div style="margin-top:1rem;background:rgba(255,255,255,0.1);border-radius:8px;padding:0.4rem 0.75rem;font-size:0.7rem;color:#FACC15;font-weight:600;">🔴 LIVE Class starting now</div>
                            </div>
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
    `}var X={"#home":{render:()=>z()+V()+H()+U()+G()+q()+Y(),postRender:()=>{B(),W(),K(),J(),Z()}},"#courses":{render:()=>E(),postRender:()=>D()},"#blogs":{render:()=>k(),postRender:()=>{}},"#journey":{render:()=>L(),postRender:()=>R()},"#about":{render:()=>A(),postRender:()=>{}},"#reviews":{render:()=>M(),postRender:()=>N()},"#contact":{render:()=>ee(),postRender:()=>P()}};function Z(){let e=document.querySelectorAll(`.er-reveal`);if(!e.length)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{threshold:.12});e.forEach(e=>t.observe(e))}var Q=()=>{let e=document.getElementById(`app`),t=()=>{let t=window.location.hash;if(!t||t===`#`){t=`#home`,window.location.hash=t;return}let n=t.split(`?`)[0],r=X[n]||{render:()=>`<div class="page-404"><h1>404</h1><p>Page not found</p><a href="#home" class="btn btn-accent">Go Home</a></div>`,postRender:()=>{}},i=S(),a=r.render(),o=w(),s=F();e.innerHTML=`
      ${i}
      <main class="main-content fade-in-section">
        ${a}
      </main>
      ${o}
      ${s}
    `,requestAnimationFrame(()=>{let t=e.querySelector(`.main-content`);t&&t.classList.add(`visible`)}),document.querySelectorAll(`.nav-link`).forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`href`)===n)}),window.scrollTo({top:0,behavior:`instant`}),C(),I(),r.postRender(),window.observeFadeElements&&window.observeFadeElements()};window.addEventListener(`hashchange`,t),t()};function $(){let e=document.createElement(`div`);e.id=`er-fab-container`,e.innerHTML=`
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
    `,document.body.appendChild(e);let t=document.getElementById(`er-fab-scroll`),n=document.getElementById(`er-fab-chat`),r=document.getElementById(`er-chat-close`),i=document.getElementById(`er-chat-window`);window.addEventListener(`scroll`,()=>{window.scrollY>300?t.classList.add(`er-fab-visible`):t.classList.remove(`er-fab-visible`)}),t.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})});let a=()=>{i.classList.toggle(`er-chat-hidden`)};n.addEventListener(`click`,a),r.addEventListener(`click`,a)}document.addEventListener(`DOMContentLoaded`,()=>{Q(),$(),x(e=>{let t=document.getElementById(`auth-btn-area`);if(t)if(e)t.innerHTML=`
        <span class="user-greeting">Hi, ${e.displayName||e.email.split(`@`)[0]}</span>
        <button class="btn btn-outline btn-sm" id="logout-btn">Logout</button>
      `;else{t.innerHTML=`
        <button class="btn btn-accent" id="login-btn">Login</button>
      `;let e=document.getElementById(`login-btn`);e&&e.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`open-auth-modal`))})}});let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`visible`),e.unobserve(t.target))})},{root:null,rootMargin:`0px`,threshold:.1});window.observeFadeElements=()=>{document.querySelectorAll(`.fade-in-section:not(.visible)`).forEach(t=>e.observe(t))},window.observeFadeElements()});