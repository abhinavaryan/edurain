import './style.css';
import { initRouter } from './router.js';
import { onAuthChange } from './firebase/auth.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize SPA Router
  initRouter();

  // Listen to Auth State Changes and update navbar
  onAuthChange((user) => {
    const authBtnArea = document.getElementById('auth-btn-area');
    if (!authBtnArea) return;

    if (user) {
      const displayName = user.displayName || user.email.split('@')[0];
      authBtnArea.innerHTML = `
        <span class="user-greeting">Hi, ${displayName}</span>
        <button class="btn btn-outline btn-sm" id="logout-btn">Logout</button>
      `;
    } else {
      authBtnArea.innerHTML = `
        <button class="btn btn-accent" id="login-btn">Login</button>
      `;
      // Re-attach login button event
      const loginBtn = document.getElementById('login-btn');
      if (loginBtn) {
        loginBtn.addEventListener('click', () => {
          document.dispatchEvent(new CustomEvent('open-auth-modal'));
        });
      }
    }
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
