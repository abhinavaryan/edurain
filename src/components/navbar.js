import { logoutUser } from '../firebase/auth.js';

export function renderNavbar() {
    return `
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
                    <a href="#reviews" class="nav-link">Reviews</a>
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
                <a href="#reviews" class="nav-link">Reviews</a>
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
