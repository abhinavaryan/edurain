const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/courses-B-wzLdpa.js","assets/courses-BD523hjT.js","assets/faq-Bo7AT8JC.js","assets/blogs-TSeTXogD.js","assets/vendor-Boxe3_tG.js","assets/vendor-DVB7LGv8.css","assets/categoryCourses-BkJkkEYJ.js","assets/blogAdmin-BbhtMj2c.js","assets/blogAdminLogin-C68gFfFr.js"])))=>i.map(i=>d[i]);
import{_ as e,b as t,c as n,d as r,f as i,g as a,h as o,m as s,n as c,p as l,r as u,u as d,v as f,y as p}from"./vendor-Boxe3_tG.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var m=t({apiKey:`AIzaSyBLw5eneJGCi4-YshAf5wgBA-yDT8o70Mc`,authDomain:`edurain-pvt.firebaseapp.com`,projectId:`edurain-pvt`,storageBucket:`edurain-pvt.firebasestorage.app`,messagingSenderId:`5660601224`,appId:`1:5660601224:web:e12194bc33e38cd1e8e83d`,measurementId:`G-JL0D0KVQYZ`}),h=o(m),g=i(m);c(m);var _=async(e,t,i)=>{try{await n(r(g,`users`,e),{name:t,email:i,created_at:l()})}catch(e){throw Error(`Could not save user data: `+e.message)}},v=async(e,t,n)=>{try{await u(d(g,`contacts`),{name:e,email:t,message:n,created_at:l()})}catch(e){throw Error(`Could not send message: `+e.message)}},y=async(e,t,n)=>{try{let r=(await s(h,t,n)).user;return await p(r,{displayName:e}),await _(r.uid,e,t),r}catch(e){throw Error(e.message||`Registration failed`)}},b=async(t,n)=>{try{return(await e(h,t,n)).user}catch(e){throw Error(e.message||`Login failed`)}},x=async()=>{try{await f(h)}catch(e){throw Error(e.message||`Logout failed`)}},S=e=>a(h,e);function C(){return`
        <nav class="navbar" id="main-nav">
            <div class="navbar-container">
                <div class="logo">
                    <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 4px;">
                        <img src="/images/logo.webp" alt="EduRain Logo" width="65" height="55" style="height: 55px; width: auto; max-width: 65px; object-fit: contain;">
                        <div style="display: flex; flex-direction: column; line-height: 1.2; align-items: center;">
                            <div>
                                <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                            </div>
                            <span style="font-size: 0.45rem; color: #a7f3d0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; margin-left: -4px;">Victory Starts Here</span>
                        </div>
                    </a>
                </div>
                <div class="nav-links">
                    <a href="/" class="nav-link active">Home</a>
                    <a href="/courses" class="nav-link">Our Courses</a>
                    <a href="/blogs" class="nav-link">Blogs</a>
                    <a href="/about-us" class="nav-link">About Us</a>
                    <a href="/contact-us" class="nav-link">Contact Us</a>
                </div>
                <div class="auth-btn-area">
                    <button class="btn btn-accent login-btn">Login</button>
                </div>
                <button class="hamburger" id="hamburger-btn" aria-label="Open Mobile Menu">
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
                        <img src="/images/logo.webp" alt="EduRain Logo" width="50" height="40" style="height: 40px; width: auto; max-width: 50px; object-fit: contain;">
                        <div style="display: flex; flex-direction: column; line-height: 1.2;">
                            <div>
                                <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                            </div>
                        </div>
                    </a>
                </div>
                <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Close Mobile Menu">&times;</button>
            </div>
            <div class="mobile-menu-body">
                <a href="/" class="nav-link active">Home</a>
                <a href="/courses" class="nav-link">Our Courses</a>
                <a href="/blogs" class="nav-link">Blogs</a>
                <a href="/about-us" class="nav-link">About Us</a>
                <a href="/contact-us" class="nav-link">Contact Us</a>
            </div>
            <div class="mobile-menu-footer auth-btn-area">
                <button class="btn btn-accent login-btn" style="width: 100%;">Login/Register</button>
            </div>
        </div>
    `}function w(){let e=document.getElementById(`hamburger-btn`),t=document.getElementById(`mobile-menu`),n=document.getElementById(`mobile-menu-overlay`),r=document.getElementById(`mobile-menu-close`),i=document.querySelectorAll(`.mobile-menu .nav-link`),a=document.querySelectorAll(`.login-btn`),o=document.querySelectorAll(`.auth-btn-area`),s=document.getElementById(`main-nav`),c=()=>{e.classList.toggle(`active`),t.classList.toggle(`active`),n&&n.classList.toggle(`active`)},l=()=>{e&&e.classList.remove(`active`),t&&t.classList.remove(`active`),n&&n.classList.remove(`active`)};e&&t&&e.addEventListener(`click`,c),n&&n.addEventListener(`click`,l),r&&r.addEventListener(`click`,l),i.forEach(e=>{e.addEventListener(`click`,l)}),a.forEach(e=>{e.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`open-auth-modal`)),l()})}),o.forEach(e=>{e.addEventListener(`click`,e=>{e.target.classList.contains(`logout-btn`)&&(x(),l())})}),window.addEventListener(`scroll`,()=>{window.scrollY>50?s.classList.add(`scrolled`):s.classList.remove(`scrolled`)})}function T(){return`
        ${window.location.pathname.includes(`/contact-us`)?``:`<div class="footer-separator"></div>`}
        <footer class="site-footer">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo" style="margin-bottom: 1rem;">
                        <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 4px;">
                            <img loading="lazy" src="/images/logo.webp" alt="EduRain Logo" width="65" height="55" style="height: 55px; width: auto; max-width: 65px; object-fit: contain;">
                            <div style="display: flex; flex-direction: column; line-height: 1.2; align-items: center;">
                                <div>
                                    <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                                </div>
                                <span style="font-size: 0.45rem; color: #a7f3d0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; margin-left: -4px;">Victory Starts Here</span>
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
                                    <span>EduRain</span>
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
                    <h2 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Quick Links</h2>
                    <ul class="footer-links">
                        <li><a href="/courses/iit-jee">&gt; JEE Courses</a></li>
                        <li><a href="/courses/neet">&gt; NEET Courses</a></li>
                        <li><a href="/courses/foundation">&gt; Foundation Courses</a></li>
                        <li><a href="/blogs">&gt; Blogs</a></li>
                        <li><a href="/about-us">&gt; About</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h2 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Contact Us</h2>
                    <p>
                        <i class="fas fa-phone"></i> 
                        <a href="tel:+918796443910" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">+91 87964 43910</a>
                        <span style="margin: 0 5px; opacity: 0.5;">|</span>
                        <a href="https://wa.me/918796443910" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none; font-size: 1.1em;" title="Chat on WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </p>
                    <p><i class="fas fa-envelope"></i> <a href="mailto:support@edurain.in" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">support@edurain.in</a></p>
                </div>
                <div class="footer-col">
                    <h2 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em;">Get the App</h2>
                    <p>Take your lessons anywhere. Download the EduRain app</p>
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
                    <a href="/privacy">Privacy Policy</a> |
                    <a href="/terms">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    `}function E(){document.querySelectorAll(`.social-dropdown-toggle`).forEach(e=>{let t=e.closest(`.social-dropdown-wrapper`);t&&e.addEventListener(`click`,e=>{e.stopPropagation(),document.querySelectorAll(`.social-dropdown-wrapper.active`).forEach(e=>{e!==t&&e.classList.remove(`active`)}),t.classList.toggle(`active`)})}),document.addEventListener(`click`,e=>{document.querySelectorAll(`.social-dropdown-wrapper.active`).forEach(t=>{t.contains(e.target)||t.classList.remove(`active`)})})}function D(){return`
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
    `}function O(){let e=document.getElementById(`auth-modal`),t=document.getElementById(`modal-close`),n=document.getElementById(`login-form`),r=document.getElementById(`signup-form`);if(!e)return;document.addEventListener(`open-auth-modal`,()=>{e.style.display=`flex`,document.body.style.overflow=`hidden`});let i=()=>{e.style.display=`none`,document.body.style.overflow=``};t&&t.addEventListener(`click`,i),e.addEventListener(`click`,t=>{t.target===e&&i()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.style.display===`flex`&&i()});let a=e=>{document.querySelectorAll(`.auth-tab`).forEach(e=>e.classList.remove(`active`));let t=document.querySelector(`.auth-tab[data-target="${e}"]`);t&&t.classList.add(`active`),n.style.display=e===`login-form`?`block`:`none`,r.style.display=e===`signup-form`?`block`:`none`};document.querySelectorAll(`.auth-tab`).forEach(e=>{e.addEventListener(`click`,e=>a(e.target.dataset.target))}),document.querySelectorAll(`.switch-form`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),a(e.target.dataset.target)})}),document.querySelectorAll(`.toggle-password`).forEach(e=>{e.addEventListener(`click`,()=>{let t=document.getElementById(e.dataset.target);t&&(t.type=t.type===`password`?`text`:`password`,e.textContent=t.type===`password`?`👁`:`🙈`)})}),n&&n.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`login-email`).value.trim(),r=document.getElementById(`login-password`).value,a=document.getElementById(`login-error`),o=n.querySelector(`.btn-text`),s=n.querySelector(`.spinner`);a.textContent=``,o.style.display=`none`,s.style.display=`inline-block`;try{await b(t,r),i(),n.reset()}catch(e){a.textContent=e.message||`Login failed. Please try again.`}finally{o.style.display=`inline`,s.style.display=`none`}}),r&&r.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`signup-name`).value.trim(),n=document.getElementById(`signup-email`).value.trim(),a=document.getElementById(`signup-password`).value,o=document.getElementById(`signup-confirm`).value,s=document.getElementById(`signup-error`),c=r.querySelector(`.btn-text`),l=r.querySelector(`.spinner`);if(s.textContent=``,t.length<2){s.textContent=`Please enter your full name.`;return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)){s.textContent=`Please enter a valid email address.`;return}if(a.length<6){s.textContent=`Password must be at least 6 characters.`;return}if(a!==o){s.textContent=`Passwords do not match.`;return}c.style.display=`none`,l.style.display=`inline-block`;try{await y(t,n,a),i(),r.reset()}catch(e){s.textContent=e.message||`Registration failed. Please try again.`}finally{c.style.display=`inline`,l.style.display=`none`}})}function k(){document.addEventListener(`click`,e=>{e.target.closest(`.er-store-btn-apple`)&&(e.preventDefault(),A())})}function A(){if(document.getElementById(`ios-app-popup-overlay`))return;let e=document.createElement(`div`);e.id=`ios-app-popup-overlay`,e.className=`mobile-popup-overlay`,e.style.alignItems=`center`,e.style.justifyContent=`center`;let t=document.createElement(`div`);t.className=`mobile-popup-content`,t.style.position=`relative`,t.style.margin=`auto`,t.style.maxWidth=`400px`,t.style.borderRadius=`16px`,window.innerWidth<=768&&(t.style.margin=`auto auto 0 auto`,t.style.borderBottomLeftRadius=`0`,t.style.borderBottomRightRadius=`0`),t.innerHTML=`
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
    `,e.appendChild(t),document.body.appendChild(e),setTimeout(()=>{e.classList.add(`visible`),t.classList.add(`visible`)},50);let n=()=>{e.classList.remove(`visible`),t.classList.remove(`visible`),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},400)};document.getElementById(`ios-popup-btn-cancel`).addEventListener(`click`,n),document.getElementById(`ios-popup-btn-x`).addEventListener(`click`,n),e.addEventListener(`click`,t=>{t.target===e&&n()}),document.getElementById(`ios-popup-btn-continue`).addEventListener(`click`,()=>{navigator.clipboard.writeText(`rwoaln`).catch(e=>console.log(`Clipboard error:`,e)),window.open(`https://apps.apple.com/in/app/myinstitute/id1472483563`,`_blank`),n()})}var j=`modulepreload`,M=function(e){return`/`+e},N={},P=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=M(t,n),t=s(t),t in N)return;N[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:j,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function F(e,t,n){document.title=e;let r=document.querySelector(`meta[name="description"]`);if(r||(r=document.createElement(`meta`),r.name=`description`,document.head.appendChild(r)),r.content=t,n){let e=document.querySelector(`link[rel="canonical"]`);e||(e=document.createElement(`link`),e.rel=`canonical`,document.head.appendChild(e)),e.href=n}}var I={},L={"/":{load:async()=>{let[{renderBanner:e,initBanner:t},{renderPopularCourses:n},{renderFreeDemo:r},{renderFaculty:i,initFaculty:a},{renderHomeReviews:o,initHomeReviews:s},{renderImpact:c,initImpact:l},{renderAppDownload:u}]=await Promise.all([P(()=>import(`./banner-C-YUuRnB.js`),[]),P(()=>import(`./popularCourses-CDPDhKF9.js`),[]),P(()=>import(`./freeDemo-Cmbp0avJ.js`),[]),P(()=>import(`./faculty-D-Yzd8rE.js`),[]),P(()=>import(`./homeReviews-DZJizj6C.js`),[]),P(()=>import(`./impact-BAudM9QS.js`),[]),P(()=>import(`./appDownload-N3TINJ8Z.js`),[])]);return{render:()=>e()+n()+r()+i()+o()+c()+u(),postRender:()=>{t(),a(),s(),l(),R(),F(`Best Online Coaching for IIT-JEE, NEET & Class 6-10 | EduRain`,`EduRain is an online education platform providing academic learning and exam preparation for Class 6–12, Foundation, NEET and IIT-JEE.`,`https://www.edurain.in/`)}}}},"/courses":{load:async()=>{let{renderCourses:e,initCourses:t}=await P(async()=>{let{renderCourses:e,initCourses:t}=await import(`./courses-B-wzLdpa.js`);return{renderCourses:e,initCourses:t}},__vite__mapDeps([0,1,2]));return{render:()=>e(),postRender:()=>{t(),F(`Explore Our All Courses – IIT JEE, NEET & Foundation (Class 6-10)`,`Explore IIT JEE, NEET & Foundation courses for Class 6-10 with expert faculty, structured curriculum & proven results. Take the first step toward success`,`https://www.edurain.in/courses`)}}}},"/blogs":{load:async()=>{let{renderBlogs:e,initBlogs:t}=await P(async()=>{let{renderBlogs:e,initBlogs:t}=await import(`./blogs-TSeTXogD.js`);return{renderBlogs:e,initBlogs:t}},__vite__mapDeps([3,4,5,1]));return{render:()=>e(),postRender:()=>{t(),F(`IIT JEE, NEET & Foundation Blogs | EduRain`,`Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides`,`https://www.edurain.in/blogs`)}}}},"/journey":{load:async()=>{let{renderJourney:e,initJourney:t}=await P(async()=>{let{renderJourney:e,initJourney:t}=await import(`./journey-CRZRBlkv.js`);return{renderJourney:e,initJourney:t}},[]);return{render:()=>e(),postRender:()=>t()}}},"/about-us":{load:async()=>{let{renderAbout:e}=await P(async()=>{let{renderAbout:e}=await import(`./about-By50-aw2.js`);return{renderAbout:e}},[]);return{render:()=>e(),postRender:()=>F(`About Us | EduRain's Mission to Make Learning Accessible`,`At EduRain, our mission is to make quality education accessible for every student from Class 6-10 foundation to IIT-JEE & NEET success. Know our story`,`https://www.edurain.in/about-us`)}}},"/reviews":{load:async()=>{let{renderReviews:e,initReviews:t}=await P(async()=>{let{renderReviews:e,initReviews:t}=await import(`./reviews-Blh4o411.js`);return{renderReviews:e,initReviews:t}},[]);return{render:()=>e(),postRender:()=>t()}}},"/contact-us":{load:async()=>{let{renderContact:e,initContact:t}=await P(async()=>{let{renderContact:e,initContact:t}=await import(`./contact-DDX-3MKS.js`);return{renderContact:e,initContact:t}},[]);return{render:()=>e(),postRender:()=>{t(),F(`Contact Us | Get in Touch with EduRain`,`Have questions about our courses for Class 6-10, IIT-JEE or NEET? Contact EduRain's team for admissions support, course details or a free demo class`,`https://www.edurain.in/contact-us`)}}}},"/privacy":{load:async()=>{let{renderPrivacy:e}=await P(async()=>{let{renderPrivacy:e}=await import(`./privacy-B7H0r27C.js`);return{renderPrivacy:e}},[]);return{render:()=>e(),postRender:()=>F(`Privacy Policy - EduRain`,`Privacy policy of EduRain`,`https://www.edurain.in/privacy`)}}},"/terms":{load:async()=>{let{renderTerms:e}=await P(async()=>{let{renderTerms:e}=await import(`./terms-CSkLg5fH.js`);return{renderTerms:e}},[]);return{render:()=>e(),postRender:()=>F(`Terms and Conditions - EduRain`,`Terms and conditions of use for Edurain`)}}},"/sitemap":{load:async()=>{let{renderSitemap:e}=await P(async()=>{let{renderSitemap:e}=await import(`./sitemap-9E5uki61.js`);return{renderSitemap:e}},[]);return{render:()=>e(),postRender:()=>F(`Sitemap - EduRain`,`Sitemap for EduRain`)}}},"/courses/iit-jee":{load:async()=>{let[{renderJEECourses:e},{initFAQ:t}]=await Promise.all([P(()=>import(`./categoryCourses-BkJkkEYJ.js`),__vite__mapDeps([6,1,2])),P(()=>import(`./faq-Bo7AT8JC.js`),[])]);return{render:()=>e(),postRender:()=>{t(),F(`Best IIT JEE Online Coaching for JEE Main & Advanced | EduRain`,`Crack IIT JEE with EduRain: live classes, expert faculty, and structured material for complete JEE Main & Advanced exam preparation`,`https://www.edurain.in/courses/iit-jee`)}}}},"/courses/neet":{load:async()=>{let[{renderNEETCourses:e},{initFAQ:t}]=await Promise.all([P(()=>import(`./categoryCourses-BkJkkEYJ.js`),__vite__mapDeps([6,1,2])),P(()=>import(`./faq-Bo7AT8JC.js`),[])]);return{render:()=>e(),postRender:()=>{t(),F(`NEET 2027-28 Complete Online Preparation with EduRain`,`Start your NEET 2027-28 online preparation with EduRain: live classes, expert faculty, and structured NCERT-based material with regular tests.`,`https://www.edurain.in/courses/neet`)}}}},"/courses/foundation":{load:async()=>{let[{renderFoundationCourses:e},{initFAQ:t}]=await Promise.all([P(()=>import(`./categoryCourses-BkJkkEYJ.js`),__vite__mapDeps([6,1,2])),P(()=>import(`./faq-Bo7AT8JC.js`),[])]);return{render:()=>e(),postRender:()=>{t(),F(`Best Online Coaching for Classes 6 to 10 | Live Interactive Classes`,`Live online classes for Class 6 to 10 with expert-led Math, Science & more: building a strong IIT JEE & NEET foundation. Interactive learning, real results`,`https://www.edurain.in/courses/foundation`)}}}},"/blogadmin":{load:async()=>{let{renderBlogAdmin:e,initBlogAdmin:t}=await P(async()=>{let{renderBlogAdmin:e,initBlogAdmin:t}=await import(`./blogAdmin-BbhtMj2c.js`);return{renderBlogAdmin:e,initBlogAdmin:t}},__vite__mapDeps([7,4,5,1]));return{render:()=>e(),postRender:()=>t()}}},"/blogadmin/login":{load:async()=>{let{renderBlogAdminLogin:e,initBlogAdminLogin:t}=await P(async()=>{let{renderBlogAdminLogin:e,initBlogAdminLogin:t}=await import(`./blogAdminLogin-C68gFfFr.js`);return{renderBlogAdminLogin:e,initBlogAdminLogin:t}},__vite__mapDeps([8,4,5]));return{render:()=>e(),postRender:()=>t()}}}};function R(){let e=document.querySelectorAll(`.er-reveal`);if(!e.length)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{threshold:.12});e.forEach(e=>t.observe(e))}window.prefetchRoute=e=>{L[e]&&!I[e]&&L[e].load()};var z=e=>{window.history.pushState({},``,e),window.renderRoute&&window.renderRoute()},B=()=>{let e=document.getElementById(`app`),t=new URLSearchParams(window.location.search).get(`p`);t&&window.history.replaceState(null,null,t),document.body.addEventListener(`mouseover`,e=>{let t=e.target.closest(`a`);if(t&&t.href)try{let e=new URL(t.href);if(e.origin===window.location.origin){let t=e.pathname;t.endsWith(`/`)&&t!==`/`&&(t=t.slice(0,-1)),window.prefetchRoute(t)}}catch{}}),document.body.addEventListener(`click`,e=>{if(e.defaultPrevented)return;let t=e.target.closest(`a`);if(t&&t.href){if(t.getAttribute(`href`)===`#`)return;try{let n=new URL(t.href);if(n.origin===window.location.origin){if(t.target===`_blank`||n.pathname.startsWith(`/jeecourse`)||n.pathname.startsWith(`/neetcourse`)||n.pathname.startsWith(`/foundationcourse`))return;e.preventDefault(),z(n.pathname)}}catch{}}}),window.renderRoute=async()=>{let t=window.location.pathname,n=t;t===``||t===`/`?t=`/`:t.endsWith(`/`)&&(t=t.slice(0,-1)),n!==t&&t!==`/`&&window.history.replaceState(window.history.state,``,t+window.location.search+window.location.hash);let r=L[t];!r&&t.startsWith(`/blogs/`)&&(r=L[`/blogs`]);let i;r?(I[t]||(I[t]=await r.load()),i=I[t]):i={render:()=>`<div class="page-404"><h1>404</h1><p>Page not found</p><a href="/" class="btn btn-accent">Go Home</a></div>`,postRender:()=>{}};let a=t.startsWith(`/blogadmin`)?``:C(),o=t.startsWith(`/blogadmin`)?``:T(),s=t.startsWith(`/blogadmin`)?``:D(),c=i.render();e.innerHTML=`
      ${a}
      <main class="main-content fade-in-section" ${t.startsWith(`/blogadmin`)?`style="padding:0; margin:0; max-width: 100%;"`:``}>
        ${c}
      </main>
      ${o}
      ${s}
    `,requestAnimationFrame(()=>{let t=e.querySelector(`.main-content`);t&&t.classList.add(`visible`)}),document.querySelectorAll(`.nav-link`).forEach(e=>{try{let n=new URL(e.href).pathname,r=n.endsWith(`/`)&&n!==`/`?n.slice(0,-1):n;e.classList.toggle(`active`,r===t)}catch{}}),window.scrollTo({top:0,behavior:`instant`}),w(),O(),E(),k(),i.postRender(),window.observeFadeElements&&window.observeFadeElements()},window.addEventListener(`popstate`,window.renderRoute),window.renderRoute()};function V(){let e=document.createElement(`div`);e.id=`er-fab-container`,e.innerHTML=`
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
                <div class="er-chat-input-area">
                    <input type="text" id="er-chat-input" placeholder="Type your message..." autocomplete="off">
                    <button id="er-chat-send" aria-label="Send message">
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
            <a href="https://wa.me/918796443910" target="_blank" rel="noopener noreferrer" class="er-fab-btn er-fab-whatsapp" aria-label="WhatsApp" title="Chat on WhatsApp">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
            <button class="er-fab-btn er-fab-chat" id="er-fab-chat" aria-label="AI Assistant" title="AI Assistant">
                <div class="er-fab-pulse"></div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><circle cx="9" cy="11" r="1" fill="currentColor"/><circle cx="15" cy="11" r="1" fill="currentColor"/><path d="M9 15c.5 1 2 1.5 3 1.5s2.5-.5 3-1.5"/></svg>
            </button>
        </div>
    `,document.body.appendChild(e);let t=document.getElementById(`er-fab-scroll`),n=document.getElementById(`er-fab-chat`),r=document.getElementById(`er-chat-close`),i=document.getElementById(`er-chat-window`);window.addEventListener(`scroll`,()=>{window.scrollY>300?t.classList.add(`er-fab-visible`):t.classList.remove(`er-fab-visible`)}),t.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})});let a=()=>{i.classList.toggle(`er-chat-hidden`)};n.addEventListener(`click`,a),r.addEventListener(`click`,a);let o=document.getElementById(`er-chat-input`),s=document.getElementById(`er-chat-send`),c=document.getElementById(`er-chat-body`),l=(e=`send`)=>{try{let t=new(window.AudioContext||window.webkitAudioContext),n=t.createOscillator(),r=t.createGain();n.type=`sine`,e===`send`?(n.frequency.setValueAtTime(400,t.currentTime),n.frequency.exponentialRampToValueAtTime(600,t.currentTime+.1)):(n.frequency.setValueAtTime(600,t.currentTime),n.frequency.exponentialRampToValueAtTime(400,t.currentTime+.1)),r.gain.setValueAtTime(.1,t.currentTime),r.gain.exponentialRampToValueAtTime(.01,t.currentTime+.1),n.connect(r),r.connect(t.destination),n.start(),n.stop(t.currentTime+.1)}catch(e){console.log(e)}},u=()=>{let e=o.value.trim();if(!e)return;l(`send`);let t=document.createElement(`div`);t.className=`er-chat-msg er-msg-user chat-msg-enter`,t.innerHTML=`<p>${e}</p>`,c.appendChild(t),o.value=``,c.scrollTop=c.scrollHeight;let n=document.createElement(`div`);n.className=`er-typing-indicator chat-msg-enter`,n.innerHTML=`Edurain is typing<span class="typing-dots"></span>`,c.appendChild(n),c.scrollTop=c.scrollHeight,setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),l(`receive`);let e=document.createElement(`div`);e.className=`er-chat-msg er-msg-ai chat-msg-enter`,e.innerHTML=`<p style="font-size: 0.9em; line-height: 1.4;">${`WELCOME TO EDURAIN
Empowering Dreams | Building Futures | Creating Success

Hello,

At Edurain, we help students achieve academic excellence and competitive exam success through expert mentorship and personalized guidance.

PROGRAMS OFFERED:
- Classes 6th to 12th (All Boards)
- IIT-JEE & NEET Preparation
- Foundation & Olympiads
- English Speaking & Personality Development

WHY EDURAIN:
- Live Interactive Classes
- Experienced Faculty
- Daily Doubt Solving
- Mentorship & Career Guidance
- Premium Study Materials

CONNECT WITH US:
- Website: <a href="https://edurain.in/" target="_blank">https://edurain.in/</a>
- App: <a href="https://play.google.com/store/apps/details?id=co.lynde.fpdwe" target="_blank">Download EduRain App</a>
- Instagram: <a href="https://www.instagram.com/edurain_official" target="_blank">@edurain_official</a>
- YouTube: <a href="https://youtube.com/@eduraininstitute" target="_blank">EduRain YouTube</a>
- Facebook: <a href="https://www.facebook.com/share/18r8aY7qDH/" target="_blank">EduRain Facebook</a>

Please reply to this message for Course Details, Fee Structure, Demo Classes, or Admissions Assistance.

Warm Regards,
Team Edurain`.replace(/\n/g,`<br>`)}</p>`,c.appendChild(e)},1200)};s.addEventListener(`click`,u),o.addEventListener(`keypress`,e=>{e.key===`Enter`&&u()})}function H(){window.innerWidth>768||setTimeout(()=>{U()},3e3)}function U(){if(document.getElementById(`mobile-app-popup-overlay`))return;let e=document.createElement(`div`);e.id=`mobile-app-popup-overlay`,e.className=`mobile-popup-overlay`;let t=document.createElement(`div`);t.className=`mobile-popup-content`,t.innerHTML=`
        <button class="mobile-popup-close-x" id="popup-btn-x" aria-label="Close">
            <i class="fas fa-times"></i>
        </button>
        <div class="mobile-popup-banner">
            <img src="/images/mobile_popup_banner.webp" alt="EduRain App on Mobile Phones" width="390" height="280" style="width:100%; max-width:390px; height:auto; display:block; margin:0 auto;">
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
    `,e.appendChild(t),document.body.appendChild(e),setTimeout(()=>{e.classList.add(`visible`),t.classList.add(`visible`)},50);let n=[`Exclusive App-Only Features`,`Your Entire Prep in One App`,`Learning Anytime, Anywhere`],r=0,i=document.getElementById(`popup-dynamic-text`),a=setInterval(()=>{if(!i){clearInterval(a);return}i.style.opacity=`0`,i.style.transform=`translateY(10px)`,setTimeout(()=>{r=(r+1)%n.length,i.textContent=n[r],i.style.opacity=`1`,i.style.transform=`translateY(0)`},300)},3e3),o=()=>{clearInterval(a),e.classList.remove(`visible`),t.classList.remove(`visible`),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},400)};document.getElementById(`popup-btn-close`).addEventListener(`click`,o),document.getElementById(`popup-btn-x`).addEventListener(`click`,o),e.addEventListener(`click`,t=>{t.target===e&&o()});let s=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;document.getElementById(`popup-btn-open`).addEventListener(`click`,()=>{s?(document.querySelector(`.mobile-popup-body`).style.display=`none`,document.getElementById(`mobile-popup-ios-view`).style.display=`block`):(window.open(`https://play.google.com/store/apps/details?id=co.lynde.fpdwe&hl=en_IN`,`_blank`),o())}),document.getElementById(`popup-btn-ios-cancel`).addEventListener(`click`,()=>{document.getElementById(`mobile-popup-ios-view`).style.display=`none`,document.querySelector(`.mobile-popup-body`).style.display=`block`}),document.getElementById(`popup-btn-ios-continue`).addEventListener(`click`,()=>{navigator.clipboard.writeText(`rwoaln`).catch(e=>console.log(`Clipboard error:`,e)),window.open(`https://apps.apple.com/in/app/myinstitute/id1472483563`,`_blank`),o()})}`scrollRestoration`in history&&(history.scrollRestoration=`manual`),document.addEventListener(`DOMContentLoaded`,()=>{B(),V(),H(),S(e=>{document.querySelectorAll(`.auth-btn-area`).forEach(t=>{let n=t.classList.contains(`mobile-menu-footer`);if(e)t.innerHTML=`
          <span class="user-greeting">Hi, ${e.displayName||e.email.split(`@`)[0]}</span>
          <button class="btn btn-outline btn-sm logout-btn" ${n?`style="width: 100%;"`:``}>Logout</button>
        `;else{t.innerHTML=`
          <button class="btn btn-accent login-btn" ${n?`style="width: 100%;"`:``}>${n?`Login/Register`:`Login`}</button>
        `;let e=t.querySelector(`.login-btn`);e&&e.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`open-auth-modal`))})}})});let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`visible`),e.unobserve(t.target))})},{root:null,rootMargin:`0px`,threshold:.1});window.observeFadeElements=()=>{document.querySelectorAll(`.fade-in-section:not(.visible)`).forEach(t=>e.observe(t))},window.observeFadeElements()});export{h as n,g as r,v as t};