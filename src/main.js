import './style.css';
import './fab.css';
import { initRouter } from './router.js';
import { onAuthChange } from './firebase/auth.js';
import { initFab } from './components/fab.js';

// Prevent browser from automatically restoring scroll position on reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize SPA Router
  initRouter();
  
  // Initialize Floating Action Buttons & Chat
  initFab();

  // Listen to Auth State Changes and update navbar
  onAuthChange((user) => {
    const authBtnAreas = document.querySelectorAll('.auth-btn-area');
    
    authBtnAreas.forEach(area => {
      const isMobileMenu = area.classList.contains('mobile-menu-footer');
      if (user) {
        const displayName = user.displayName || user.email.split('@')[0];
        area.innerHTML = `
          <span class="user-greeting">Hi, ${displayName}</span>
          <button class="btn btn-outline btn-sm logout-btn" ${isMobileMenu ? 'style="width: 100%;"' : ''}>Logout</button>
        `;
      } else {
        area.innerHTML = `
          <button class="btn btn-accent login-btn" ${isMobileMenu ? 'style="width: 100%;"' : ''}>${isMobileMenu ? 'Login/Register' : 'Login'}</button>
        `;
        // Re-attach login button event within this area
        const loginBtn = area.querySelector('.login-btn');
        if (loginBtn) {
          loginBtn.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('open-auth-modal'));
          });
        }
      }
    });
  });

  // Setup Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Global function to observe new elements after route changes
  window.observeFadeElements = () => {
    const elements = document.querySelectorAll('.fade-in-section:not(.visible)');
    elements.forEach(el => observer.observe(el));
  };

  // Initial observation
  window.observeFadeElements();
});
