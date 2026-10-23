import './style.css';
import './fab.css';
import { initRouter } from './router.js';
// onAuthChange is dynamically imported on idle
import { initFab } from './components/fab.js';
import { initMobileAppPopup } from './components/mobileAppPopup.js';

// Prevent browser from automatically restoring scroll position on reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize SPA Router
  initRouter();
  
  // Initialize Floating Action Buttons & Chat
  initFab();

  // Initialize Mobile App Pop-up
  initMobileAppPopup();

  // Lazy-load Auth State Changes only in DEV or on /blogadmin
  const shouldObserveAuth = import.meta.env.DEV || window.location.pathname.startsWith('/blogadmin');
  if (shouldObserveAuth) {
    const initAuthObserver = () => {
      import('./firebase/auth.js').then(({ onAuthChange }) => {
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
              area.innerHTML = '';
            }
          });
        });
      }).catch(() => {});
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(initAuthObserver, { timeout: 3000 });
    } else {
      setTimeout(initAuthObserver, 2000);
    }
  }

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
