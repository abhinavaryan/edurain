import { logoutUser } from '../firebase/auth.js';

export function renderNavbar() {
    return `
        <nav class="navbar" id="main-nav">
            <div class="navbar-container">
                <div class="logo">
                    <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 4px;">
                        <img src="/images/logo.png" alt="EduRain Logo" style="height: 55px; width: auto; max-width: 65px; object-fit: contain;">
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
                        <img src="/images/logo.png" alt="EduRain Logo" style="height: 40px; width: auto; max-width: 50px; object-fit: contain;">
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
    `;
}

export function initNavbar() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
    const loginBtns = document.querySelectorAll('.login-btn');
    const authBtnAreas = document.querySelectorAll('.auth-btn-area');
    const navbar = document.getElementById('main-nav');

    const toggleMenu = () => {
        hamburgerBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.toggle('active');
    };

    const closeMenu = () => {
        if (hamburgerBtn) hamburgerBtn.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
    };

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    loginBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('open-auth-modal'));
            closeMenu();
        });
    });
    
    authBtnAreas.forEach(area => {
        area.addEventListener('click', (e) => {
            if(e.target.classList.contains('logout-btn')) {
                logoutUser();
                closeMenu();
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}
