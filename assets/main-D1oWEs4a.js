const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/auth-Cq5kfh30.js","assets/config-DJ-3s7d_.js","assets/firestore--LyqouHK.js","assets/courses-ol5JWIYQ.js","assets/courses-Cg5Nsa6A.js","assets/faq-Bo7AT8JC.js","assets/blogs-BcnD4dUL.js","assets/s3Upload-B4Xg6tWQ.js","assets/preload-helper-Czpn1I53.js","assets/contact-CyeKImTi.js","assets/categoryCourses-Bn31NAdy.js","assets/blogAdmin-D18-4LNW.js","assets/rolldown-runtime-QTnfLwEv.js","assets/blogAdmin-DVB7LGv8.css","assets/blogAdminLogin-EkIzh3-5.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Dezn_h7o.js";import{t as e}from"./preload-helper-Czpn1I53.js";function t(e=``){let t=e||(typeof window<`u`&&window.location?window.location.pathname:`/`),n=t===``||t===`/`,r=t.startsWith(`/courses`)||t.startsWith(`courses`),i=t.startsWith(`/blogs`)||t.startsWith(`blogs`),a=t.includes(`about`),o=t.includes(`contact`);return`
        <nav class="navbar" id="main-nav">
            <div class="navbar-container">
                <div class="logo">
                    <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 4px;">
                        <img src="/images/logo.webp" fetchpriority="high" alt="EduRain Logo" width="65" height="55" style="height: 55px; width: auto; max-width: 65px; object-fit: contain;">
                        <div style="display: flex; flex-direction: column; line-height: 1.2; align-items: center;">
                            <div>
                                <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                            </div>
                            <span style="font-size: 0.45rem; color: #a7f3d0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; margin-left: -4px;">Victory Starts Here</span>
                        </div>
                    </a>
                </div>
                <div class="nav-links">
                    <a href="/" class="nav-link ${n?`active`:``}">Home</a>
                    <a href="/courses" class="nav-link ${r?`active`:``}">Our Courses</a>
                    <a href="/blogs" class="nav-link ${i?`active`:``}">Blogs</a>
                    <a href="/about-us" class="nav-link ${a?`active`:``}">About Us</a>
                    <a href="/contact-us" class="nav-link ${o?`active`:``}">Contact Us</a>
                </div>
                <div class="auth-btn-area"></div>
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
                <a href="/" class="nav-link ${n?`active`:``}">Home</a>
                <a href="/courses" class="nav-link ${r?`active`:``}">Our Courses</a>
                <a href="/blogs" class="nav-link ${i?`active`:``}">Blogs</a>
                <a href="/about-us" class="nav-link ${a?`active`:``}">About Us</a>
                <a href="/contact-us" class="nav-link ${o?`active`:``}">Contact Us</a>
            </div>
            <div class="mobile-menu-footer auth-btn-area"></div>
        </div>
    `}function n(){let t=document.getElementById(`hamburger-btn`),n=document.getElementById(`mobile-menu`),r=document.getElementById(`mobile-menu-overlay`),i=document.getElementById(`mobile-menu-close`),a=document.querySelectorAll(`.mobile-menu .nav-link`),o=document.querySelectorAll(`.login-btn`),s=document.querySelectorAll(`.auth-btn-area`),c=document.getElementById(`main-nav`),l=()=>{t.classList.toggle(`active`),n.classList.toggle(`active`),r&&r.classList.toggle(`active`)},u=()=>{t&&t.classList.remove(`active`),n&&n.classList.remove(`active`),r&&r.classList.remove(`active`)};t&&n&&t.addEventListener(`click`,l),r&&r.addEventListener(`click`,u),i&&i.addEventListener(`click`,u),a.forEach(e=>{e.addEventListener(`click`,u)}),o.forEach(e=>{e.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`open-auth-modal`)),u()})}),s.forEach(t=>{t.addEventListener(`click`,async t=>{if(t.target.classList.contains(`logout-btn`)){let{logoutUser:t}=await e(async()=>{let{logoutUser:e}=await import(`./auth-Cq5kfh30.js`);return{logoutUser:e}},__vite__mapDeps([0,1,2]));await t(),u()}})}),window.addEventListener(`scroll`,()=>{window.scrollY>50?c.classList.add(`scrolled`):c.classList.remove(`scrolled`)})}function r(){return`
        ${typeof window<`u`&&window.location&&window.location.pathname.includes(`/contact-us`)?``:`<div class="footer-separator"></div>`}
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
                    <p style="margin-top: 0.5rem; font-size: 0.85rem;"><i class="fas fa-shield-alt"></i> Grievance Officer: <a href="mailto:info@edurain.in" style="color: inherit; text-decoration: underline;">info@edurain.in</a></p>
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
                    <a href="/terms">Terms and Conditions</a> |
                    <a href="/refund-policy">Refund/Cancellation Policy</a> |
                    <a href="/privacy#grievance">Grievance Redressal</a> |
                    <a href="/contact-us">Contact Us</a>
                </div>
            </div>
        </footer>
    `}function i(){document.querySelectorAll(`.social-dropdown-toggle`).forEach(e=>{let t=e.closest(`.social-dropdown-wrapper`);t&&e.addEventListener(`click`,e=>{e.stopPropagation(),document.querySelectorAll(`.social-dropdown-wrapper.active`).forEach(e=>{e!==t&&e.classList.remove(`active`)}),t.classList.toggle(`active`)})}),document.addEventListener(`click`,e=>{document.querySelectorAll(`.social-dropdown-wrapper.active`).forEach(t=>{t.contains(e.target)||t.classList.remove(`active`)})})}function a(e){return e?String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`):``}function o(e){let t=document.createElement(`div`);if(t.style.cssText=`
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: var(--charcoal); z-index: 99999;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        color: white; font-family: var(--font-family);
    `,t.innerHTML=`
        <div class="logo-container" style="font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; opacity: 0; transform: translateY(20px);">
            <span class="text-white">Edu</span><span class="text-accent">Rain</span>
        </div>
        <div class="text-container" style="font-size: 1.2rem; margin-bottom: 1.5rem; color: var(--text-secondary); letter-spacing: 0.5px; opacity: 0;">Configuring your premium dashboard...</div>
        <div style="width: 300px; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; position: relative; margin-bottom: 1rem; opacity: 0;" class="bar-container">
            <div id="loading-progress-bar" style="width: 0%; height: 100%; background: var(--accent); border-radius: 4px; box-shadow: 0 0 15px var(--accent);"></div>
        </div>
        <div id="loading-progress-text" style="font-weight: bold; color: var(--accent); font-size: 1.5rem; text-shadow: 0 0 10px rgba(250, 204, 21, 0.5); opacity: 0;" class="text-counter">0%</div>
    `,document.body.appendChild(t),window.anime){anime.timeline({easing:`easeOutExpo`}).add({targets:`.logo-container`,opacity:[0,1],translateY:[20,0],duration:800}).add({targets:`.text-container, .bar-container, .text-counter`,opacity:[0,1],translateY:[10,0],duration:600,delay:anime.stagger(100)},`-=400`);let n={val:0};anime({targets:n,val:100,round:1,easing:`easeInOutSine`,duration:1500,delay:1e3,update:function(){let e=document.getElementById(`loading-progress-text`),t=document.getElementById(`loading-progress-bar`);e&&(e.innerHTML=n.val+`%`),t&&(t.style.width=n.val+`%`)},complete:function(){anime({targets:t,opacity:0,duration:500,easing:`easeInQuad`,complete:function(){t.parentNode&&t.parentNode.removeChild(t),e&&e()}})}})}else setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t),e&&e()},1e3)}function s(){let t=document.getElementById(`auth-modal`),n=document.getElementById(`modal-close`),r=document.getElementById(`login-form`),i=document.getElementById(`signup-form`);if(!t)return;document.addEventListener(`open-auth-modal`,()=>{t.style.display=`flex`,document.body.style.overflow=`hidden`});let s=()=>{t.style.display=`none`,document.body.style.overflow=``};n&&n.addEventListener(`click`,s),t.addEventListener(`click`,e=>{e.target===t&&s()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&t.style.display===`flex`&&s()});let c=e=>{document.querySelectorAll(`.auth-tab`).forEach(e=>e.classList.remove(`active`));let t=document.querySelector(`.auth-tab[data-target="${e}"]`);t&&t.classList.add(`active`),r.style.display=e===`login-form`?`block`:`none`,i.style.display=e===`signup-form`?`block`:`none`};document.querySelectorAll(`.auth-tab`).forEach(e=>{e.addEventListener(`click`,e=>c(e.target.dataset.target))}),document.querySelectorAll(`.switch-form`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),c(e.target.dataset.target)})}),document.querySelectorAll(`.toggle-password`).forEach(e=>{e.addEventListener(`click`,()=>{let t=document.getElementById(e.dataset.target);t&&(t.type=t.type===`password`?`text`:`password`,e.textContent=t.type===`password`?`👁`:`🙈`)})}),r&&r.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`login-email`).value.trim(),i=document.getElementById(`login-password`).value,a=document.getElementById(`login-error`),c=r.querySelector(`.btn-text`),l=r.querySelector(`.spinner`);a.textContent=``,c.style.display=`none`,l.style.display=`inline-block`;try{let{loginUser:t}=await e(async()=>{let{loginUser:e}=await import(`./auth-Cq5kfh30.js`);return{loginUser:e}},__vite__mapDeps([0,1,2]));await t(n,i),s(),r.reset(),o(()=>{window.appRouter?window.appRouter.navigate(`/study`):window.location.href=`/study`})}catch(e){a.textContent=e.message||`Login failed. Please try again.`}finally{c.style.display=`inline`,l.style.display=`none`}}),i&&i.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`signup-name`).value.trim(),r=document.getElementById(`signup-email`).value.trim(),c=document.getElementById(`signup-password`).value,l=document.getElementById(`signup-confirm`).value,u=document.getElementById(`signup-consent-terms`)?.checked,d=document.getElementById(`signup-consent-age`)?.checked,f=document.getElementById(`signup-error`),p=i.querySelector(`.btn-text`),m=i.querySelector(`.spinner`);if(f.textContent=``,!u){f.textContent=`Please accept the Terms & Conditions and Privacy Policy.`;return}if(!d){f.textContent=`Please confirm age or parental consent.`;return}if(n.length<2){f.textContent=`Please enter your full name.`;return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){f.textContent=`Please enter a valid email address.`;return}if(c.length<6){f.textContent=`Password must be at least 6 characters.`;return}if(c!==l){f.textContent=`Passwords do not match.`;return}let h=a(n);p.style.display=`none`,m.style.display=`inline-block`;try{let{registerUser:t}=await e(async()=>{let{registerUser:e}=await import(`./auth-Cq5kfh30.js`);return{registerUser:e}},__vite__mapDeps([0,1,2]));await t(h,r,c),s(),i.reset(),o(()=>{window.appRouter?window.appRouter.navigate(`/study`):window.location.href=`/study`})}catch(e){f.textContent=e.message||`Registration failed. Please try again.`}finally{p.style.display=`inline`,m.style.display=`none`}})}function c(){document.addEventListener(`click`,e=>{e.target.closest(`.er-store-btn-apple`)&&(e.preventDefault(),l())})}function l(){if(document.getElementById(`ios-app-popup-overlay`))return;let e=document.createElement(`div`);e.id=`ios-app-popup-overlay`,e.className=`mobile-popup-overlay`,e.style.alignItems=`center`,e.style.justifyContent=`center`;let t=document.createElement(`div`);t.className=`mobile-popup-content`,t.style.position=`relative`,t.style.margin=`auto`,t.style.maxWidth=`400px`,t.style.borderRadius=`16px`,window.innerWidth<=768&&(t.style.margin=`auto auto 0 auto`,t.style.borderBottomLeftRadius=`0`,t.style.borderBottomRightRadius=`0`),t.innerHTML=`
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
    `,e.appendChild(t),document.body.appendChild(e),setTimeout(()=>{e.classList.add(`visible`),t.classList.add(`visible`)},50);let n=()=>{e.classList.remove(`visible`),t.classList.remove(`visible`),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},400)};document.getElementById(`ios-popup-btn-cancel`).addEventListener(`click`,n),document.getElementById(`ios-popup-btn-x`).addEventListener(`click`,n),e.addEventListener(`click`,t=>{t.target===e&&n()}),document.getElementById(`ios-popup-btn-continue`).addEventListener(`click`,()=>{navigator.clipboard.writeText(`rwoaln`).catch(e=>console.log(`Clipboard error:`,e)),window.open(`https://apps.apple.com/in/app/myinstitute/id1472483563`,`_blank`),n()})}function u(e,t,n){document.title=e;let r=document.querySelector(`meta[name="description"]`);if(r||(r=document.createElement(`meta`),r.name=`description`,document.head.appendChild(r)),r.content=t,n){let e=document.querySelector(`link[rel="canonical"]`);e||(e=document.createElement(`link`),e.rel=`canonical`,document.head.appendChild(e)),e.href=n}}var d={},f={"/":{load:async()=>{let[{renderBanner:t,initBanner:n},{renderPopularCourses:r},{renderFreeDemo:i},{renderFaculty:a,initFaculty:o},{renderHomeReviews:s,initHomeReviews:c},{renderImpact:l,initImpact:d},{renderAppDownload:f}]=await Promise.all([e(()=>import(`./banner-DSsD3iGx.js`),[]),e(()=>import(`./popularCourses-DAVAKFrG.js`),[]),e(()=>import(`./freeDemo-C_eJBm1n.js`),[]),e(()=>import(`./faculty-CJQ_rU8-.js`),[]),e(()=>import(`./homeReviews-CwWF1ON-.js`),[]),e(()=>import(`./impact-BAudM9QS.js`),[]),e(()=>import(`./appDownload-N3TINJ8Z.js`),[])]);return{render:()=>t()+r()+i()+a()+s()+l()+f(),postRender:()=>{n(),o(),c(),d(),p(),u(`Best Online Coaching for IIT-JEE, NEET & Class 6-10 | EduRain`,`EduRain is an online education platform providing academic learning and exam preparation for Class 6–12, Foundation, NEET and IIT-JEE.`,`https://www.edurain.in/`)}}}},"/courses":{load:async()=>{let{renderCourses:t,initCourses:n}=await e(async()=>{let{renderCourses:e,initCourses:t}=await import(`./courses-ol5JWIYQ.js`);return{renderCourses:e,initCourses:t}},__vite__mapDeps([3,4,5]));return{render:()=>t(),postRender:()=>{n(),u(`Explore Our All Courses – IIT JEE, NEET & Foundation (Class 6-10)`,`Explore IIT JEE, NEET & Foundation courses for Class 6-10 with expert faculty, structured curriculum & proven results. Take the first step toward success`,`https://www.edurain.in/courses`)}}}},"/blogs":{load:async()=>{let{renderBlogs:t,initBlogs:n}=await e(async()=>{let{renderBlogs:e,initBlogs:t}=await import(`./blogs-BcnD4dUL.js`);return{renderBlogs:e,initBlogs:t}},__vite__mapDeps([6,1,4,7,8]));return{render:()=>t(),postRender:()=>{n(),(window.location.pathname===`/blogs`||window.location.pathname===`/blogs/`)&&u(`IIT JEE, NEET & Foundation Blogs | EduRain`,`Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides`,`https://www.edurain.in/blogs`)}}}},"/about-us":{load:async()=>{let{renderAbout:t}=await e(async()=>{let{renderAbout:e}=await import(`./about-By50-aw2.js`);return{renderAbout:e}},[]);return{render:()=>t(),postRender:()=>u(`About Us | EduRain's Mission to Make Learning Accessible`,`At EduRain, our mission is to make quality education accessible for every student from Class 6-10 foundation to IIT-JEE & NEET success. Know our story`,`https://www.edurain.in/about-us`)}}},"/about-new":{load:async()=>{let{renderAbout:t,initAboutNew:n}=await e(async()=>{let{renderAbout:e,initAboutNew:t}=await import(`./about-new-B80N6-lW.js`);return{renderAbout:e,initAboutNew:t}},[]);return{render:()=>t(),postRender:()=>{u(`About Us (New) | EduRain`,`Check out our new About Us page.`,`https://www.edurain.in/about-new`),n&&n()}}}},"/contact-us":{load:async()=>{let{renderContact:t,initContact:n}=await e(async()=>{let{renderContact:e,initContact:t}=await import(`./contact-CyeKImTi.js`);return{renderContact:e,initContact:t}},__vite__mapDeps([9,8]));return{render:()=>t(),postRender:()=>{n(),u(`Contact Us | Get in Touch with EduRain`,`Have questions about our courses for Class 6-10, IIT-JEE or NEET? Contact EduRain's team for admissions support, course details or a free demo class`,`https://www.edurain.in/contact-us`)}}}},"/privacy":{load:async()=>{let{renderPrivacy:t}=await e(async()=>{let{renderPrivacy:e}=await import(`./privacy-DLZHr8bu.js`);return{renderPrivacy:e}},[]);return{render:()=>t(),postRender:()=>u(`Privacy Policy - EduRain`,`Privacy policy of EduRain`,`https://www.edurain.in/privacy`)}}},"/terms":{load:async()=>{let{renderTerms:t}=await e(async()=>{let{renderTerms:e}=await import(`./terms-D07tXMN4.js`);return{renderTerms:e}},[]);return{render:()=>t(),postRender:()=>u(`Terms and Conditions - EduRain`,`Terms and conditions of use for Edurain`)}}},"/refund-policy":{load:async()=>{let{renderRefund:t}=await e(async()=>{let{renderRefund:e}=await import(`./refund-C5VAe-tu.js`);return{renderRefund:e}},[]);return{render:()=>t(),postRender:()=>u(`Refund/Cancellation Policy - EduRain`,`Refund and cancellation policy for EduRain`,`https://www.edurain.in/refund-policy`)}}},"/sitemap":{load:async()=>{let{renderSitemap:t}=await e(async()=>{let{renderSitemap:e}=await import(`./sitemap-Dlz_MZbc.js`);return{renderSitemap:e}},[]);return{render:()=>t(),postRender:()=>u(`Sitemap - EduRain`,`Sitemap for EduRain`)}}},"/courses/iit-jee":{load:async()=>{let[{renderJEECourses:t},{initFAQ:n}]=await Promise.all([e(()=>import(`./categoryCourses-Bn31NAdy.js`),__vite__mapDeps([10,4,5])),e(()=>import(`./faq-Bo7AT8JC.js`),[])]);return{render:()=>t(),postRender:()=>{n(),u(`Best IIT JEE 2027 Online Coaching for JEE Main & Advanced | EduRain`,`Crack IIT JEE 2027 with EduRain: live classes, expert faculty, and structured material for complete JEE Main & Advanced exam preparation.`,`https://www.edurain.in/courses/iit-jee`),window.anime&&window.anime({targets:`.er-anime-reveal`,translateY:[40,0],opacity:[0,1],easing:`easeOutExpo`,duration:1200,delay:window.anime.stagger(150,{start:300})})}}}},"/courses/neet":{load:async()=>{let[{renderNEETCourses:t},{initFAQ:n}]=await Promise.all([e(()=>import(`./categoryCourses-Bn31NAdy.js`),__vite__mapDeps([10,4,5])),e(()=>import(`./faq-Bo7AT8JC.js`),[])]);return{render:()=>t(),postRender:()=>{n(),u(`NEET 2027-28 Complete Online Preparation with EduRain`,`Start your NEET 2027-28 online preparation with EduRain: live classes, expert faculty, and structured NCERT-based material with regular tests.`,`https://www.edurain.in/courses/neet`),window.anime&&window.anime({targets:`.er-anime-reveal`,translateY:[40,0],opacity:[0,1],easing:`easeOutExpo`,duration:1200,delay:window.anime.stagger(150,{start:300})})}}}},"/courses/foundation":{load:async()=>{let[{renderFoundationCourses:t},{initFAQ:n}]=await Promise.all([e(()=>import(`./categoryCourses-Bn31NAdy.js`),__vite__mapDeps([10,4,5])),e(()=>import(`./faq-Bo7AT8JC.js`),[])]);return{render:()=>t(),postRender:()=>{n(),u(`Best Online Coaching for Classes 6 to 10 | Live Interactive Classes`,`Live online classes for Class 6 to 10 with expert-led Math, Science & more: building a strong IIT JEE & NEET foundation. Interactive learning, real results`,`https://www.edurain.in/courses/foundation`),window.anime&&window.anime({targets:`.er-anime-reveal`,translateY:[40,0],opacity:[0,1],easing:`easeOutExpo`,duration:1200,delay:window.anime.stagger(150,{start:300})})}}}},"/blogadmin":{load:async()=>{let{renderBlogAdmin:t,initBlogAdmin:n}=await e(async()=>{let{renderBlogAdmin:e,initBlogAdmin:t}=await import(`./blogAdmin-D18-4LNW.js`);return{renderBlogAdmin:e,initBlogAdmin:t}},__vite__mapDeps([11,12,1,4,7,8,13]));return{render:()=>t(),postRender:()=>n()}}},"/blogadmin/login":{load:async()=>{let{renderBlogAdminLogin:t,initBlogAdminLogin:n}=await e(async()=>{let{renderBlogAdminLogin:e,initBlogAdminLogin:t}=await import(`./blogAdminLogin-EkIzh3-5.js`);return{renderBlogAdminLogin:e,initBlogAdminLogin:t}},__vite__mapDeps([14,1]));return{render:()=>t(),postRender:()=>n()}}},"/study":{load:async()=>(window.location.href=`/study/`,{render:()=>``,postRender:()=>{}})}};f[`/blog-admin`]=f[`/blogadmin`],f[`/blogs-admin`]=f[`/blogadmin`],f[`/blogsadmin`]=f[`/blogadmin`],f[`/admin`]=f[`/blogadmin`],f[`/blogs/admin`]=f[`/blogadmin`],f[`/blog-admin/login`]=f[`/blogadmin/login`],f[`/blogs-admin/login`]=f[`/blogadmin/login`],f[`/blogsadmin/login`]=f[`/blogadmin/login`],f[`/admin/login`]=f[`/blogadmin/login`],f[`/blogs/admin/login`]=f[`/blogadmin/login`];function p(){let e=document.querySelectorAll(`.er-reveal`);if(!e.length)return;let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{threshold:.12});e.forEach(e=>t.observe(e))}window.prefetchRoute=e=>{f[e]&&!d[e]&&f[e].load()};var m=e=>{window.history.pushState({},``,e),window.renderRoute&&window.renderRoute()},h=()=>{let e=document.getElementById(`app`),a=!0,o=new URLSearchParams(window.location.search),l=o.get(`p`);l&&window.history.replaceState(null,null,l),document.body.addEventListener(`mouseover`,e=>{let t=e.target.closest(`a`);if(t&&t.href)try{let e=new URL(t.href);if(e.origin===window.location.origin){let t=e.pathname;t.endsWith(`/`)&&t!==`/`&&(t=t.slice(0,-1)),window.prefetchRoute(t)}}catch{}}),document.body.addEventListener(`click`,e=>{if(e.defaultPrevented)return;let t=e.target.closest(`a`);if(t&&t.href){if(t.getAttribute(`href`)===`#`)return;try{let n=new URL(t.href);if(n.origin===window.location.origin){if(t.target===`_blank`||n.pathname.startsWith(`/jeecourse`)||n.pathname.startsWith(`/neetcourse`)||n.pathname.startsWith(`/foundationcourse`)||n.pathname.startsWith(`/study`))return;e.preventDefault(),m(n.pathname)}}catch{}}}),window.renderRoute=async()=>{let l=window.location.pathname,u=l;l===``||l===`/`?l=`/`:l.endsWith(`/`)&&(l=l.slice(0,-1)),u!==l&&l!==`/`&&window.history.replaceState(window.history.state,``,l+window.location.search+window.location.hash);let p=f[l];!p&&(l===`/blogs/admin`||l===`/blogs/admin/`)?p=f[`/blogadmin`]:!p&&(l===`/blogs/admin/login`||l===`/blogs/admin/login/`)?p=f[`/blogadmin/login`]:!p&&l.startsWith(`/blogs/`)&&(p=f[`/blogs`]);let m;p?(d[l]||(d[l]=await p.load()),m=d[l]):m={render:()=>`<div class="page-404"><h1>404</h1><p>Page not found</p><a href="/" class="btn btn-accent">Go Home</a></div>`,postRender:()=>{}};let h=!!o.get(`p`),g=l.includes(`admin`),_=!h&&!g&&(l===`/`&&e.querySelector(`.banner-section`)||l.startsWith(`/courses`)&&e.querySelector(`.courses-section`)||l.startsWith(`/blogs`)&&(e.querySelector(`.blogs-section`)||e.querySelector(`.blog-post-page`))||l===`/about-us`&&e.querySelector(`.about-section`)||l===`/contact-us`&&e.querySelector(`.contact-section`)||[`/privacy`,`/terms`,`/refund-policy`,`/sitemap`].includes(l)&&e.querySelector(`.policy-page`));if(a&&_){a=!1,n(),s(),i(),c(),m.postRender&&m.postRender(),window.observeFadeElements&&window.observeFadeElements();return}a=!1;let v=g||l.startsWith(`/study`),y=v?``:t(),b=v?``:r(),x=m.render();e.innerHTML=`
      ${y}
      <main class="main-content fade-in-section" ${v?`style="padding:0; margin:0; max-width: 100%;"`:``}>
        ${x}
      </main>
      ${b}
      
    `,requestAnimationFrame(()=>{let t=e.querySelector(`.main-content`);t&&t.classList.add(`visible`)}),document.querySelectorAll(`.nav-link`).forEach(e=>{try{let t=new URL(e.href).pathname,n=t.endsWith(`/`)&&t!==`/`?t.slice(0,-1):t;e.classList.toggle(`active`,n===l)}catch{}}),window.scrollTo({top:0,behavior:`instant`}),n(),s(),i(),c(),m.postRender(),window.observeFadeElements&&window.observeFadeElements()},window.addEventListener(`popstate`,window.renderRoute),window.renderRoute()};function g(){let e=document.createElement(`div`);e.id=`er-fab-container`,e.innerHTML=`
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
Team Edurain`.replace(/\n/g,`<br>`)}</p>`,c.appendChild(e)},1200)};s.addEventListener(`click`,u),o.addEventListener(`keypress`,e=>{e.key===`Enter`&&u()})}function _(){window.innerWidth>768||setTimeout(()=>{v()},3e3)}function v(){if(document.getElementById(`mobile-app-popup-overlay`))return;let e=document.createElement(`div`);e.id=`mobile-app-popup-overlay`,e.className=`mobile-popup-overlay`;let t=document.createElement(`div`);t.className=`mobile-popup-content`,t.innerHTML=`
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
    `,e.appendChild(t),document.body.appendChild(e),setTimeout(()=>{e.classList.add(`visible`),t.classList.add(`visible`)},50);let n=[`Exclusive App-Only Features`,`Your Entire Prep in One App`,`Learning Anytime, Anywhere`],r=0,i=document.getElementById(`popup-dynamic-text`),a=setInterval(()=>{if(!i){clearInterval(a);return}i.style.opacity=`0`,i.style.transform=`translateY(10px)`,setTimeout(()=>{r=(r+1)%n.length,i.textContent=n[r],i.style.opacity=`1`,i.style.transform=`translateY(0)`},300)},3e3),o=()=>{clearInterval(a),e.classList.remove(`visible`),t.classList.remove(`visible`),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e)},400)};document.getElementById(`popup-btn-close`).addEventListener(`click`,o),document.getElementById(`popup-btn-x`).addEventListener(`click`,o),e.addEventListener(`click`,t=>{t.target===e&&o()});let s=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;document.getElementById(`popup-btn-open`).addEventListener(`click`,()=>{s?(document.querySelector(`.mobile-popup-body`).style.display=`none`,document.getElementById(`mobile-popup-ios-view`).style.display=`block`):(window.open(`https://play.google.com/store/apps/details?id=co.lynde.fpdwe&hl=en_IN`,`_blank`),o())}),document.getElementById(`popup-btn-ios-cancel`).addEventListener(`click`,()=>{document.getElementById(`mobile-popup-ios-view`).style.display=`none`,document.querySelector(`.mobile-popup-body`).style.display=`block`}),document.getElementById(`popup-btn-ios-continue`).addEventListener(`click`,()=>{navigator.clipboard.writeText(`rwoaln`).catch(e=>console.log(`Clipboard error:`,e)),window.open(`https://apps.apple.com/in/app/myinstitute/id1472483563`,`_blank`),o()})}`scrollRestoration`in history&&(history.scrollRestoration=`manual`),document.addEventListener(`DOMContentLoaded`,()=>{if(h(),g(),_(),window.location.pathname.includes(`admin`)){let t=()=>{e(async()=>{let{onAuthChange:e}=await import(`./auth-Cq5kfh30.js`);return{onAuthChange:e}},__vite__mapDeps([0,1,2])).then(({onAuthChange:e})=>{e(e=>{document.querySelectorAll(`.auth-btn-area`).forEach(t=>{let n=t.classList.contains(`mobile-menu-footer`);e?t.innerHTML=`
                <span class="user-greeting">Hi, ${e.displayName||e.email.split(`@`)[0]}</span>
                <button class="btn btn-outline btn-sm logout-btn" ${n?`style="width: 100%;"`:``}>Logout</button>
              `:t.innerHTML=``})})}).catch(()=>{})};`requestIdleCallback`in window?requestIdleCallback(t,{timeout:3e3}):setTimeout(t,2e3)}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{root:null,rootMargin:`0px`,threshold:.1});window.observeFadeElements=()=>{document.querySelectorAll(`.fade-in-section:not(.visible)`).forEach(e=>t.observe(e))},window.observeFadeElements()});