import { logoutUser } from '../firebase/auth.js';

export function renderNavbar() {
    return `
        <nav class="navbar" id="main-nav">
            <div class="navbar-container">
                <div class="logo">
                    <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
                        <img src="./images/logo.png" alt="EduRain Logo" style="height: 55px; width: auto; max-width: 65px; object-fit: contain;">
                        <div style="display: flex; flex-direction: column; line-height: 1.2;">
                            <div>
                                <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                            </div>
                            <span style="font-size: 0.65rem; color: #a7f3d0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">Victory Starts Here</span>
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
    `;
}

export function initNavbar() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
    const loginBtn = document.getElementById('login-btn');
    const authBtnArea = document.getElementById('auth-btn-area');
    const navbar = document.getElementById('main-nav');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburgerBtn && mobileMenu) {
                hamburgerBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('open-auth-modal'));
        });
    }
    
    if (authBtnArea) {
        authBtnArea.addEventListener('click', (e) => {
            if(e.target.id === 'logout-btn') {
                logoutUser();
            }
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}
