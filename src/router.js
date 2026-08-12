import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderCourses, initCourses } from './components/courses.js';
import { renderBlogs } from './components/blogs.js';
import { renderAbout } from './components/about.js';
import { renderReviews, initReviews } from './components/reviews.js';
import { renderContact, initContact } from './components/contact.js';
import { renderAuthModal, initAuthModal } from './components/authModal.js';
import { renderJourney, initJourney } from './components/journey.js';

// ── HOME PAGE SECTIONS (exact order) ──
import { renderBanner, initBanner } from './components/banner.js';
import { renderPopularCourses } from './components/popularCourses.js';
import { renderFreeDemo } from './components/freeDemo.js';
import { renderFaculty, initFaculty } from './components/faculty.js';
import { renderHomeReviews, initHomeReviews } from './components/homeReviews.js';
import { renderImpact, initImpact } from './components/impact.js';
import { renderAppDownload } from './components/appDownload.js';

const routes = {
  '#home': {
    // ORDER: Banner → Popular Courses → Free Demo → Faculty → Student Reviews → Impact → App Download
    render: () =>
      renderBanner() +
      renderPopularCourses() +
      renderFreeDemo() +
      renderFaculty() +
      renderHomeReviews() +
      renderImpact() +
      renderAppDownload(),
    postRender: () => {
      initBanner();
      initFaculty();
      initHomeReviews();
      initImpact();
      initScrollReveal();
    }
  },
  '#courses': {
    render: () => renderCourses(),
    postRender: () => initCourses()
  },
  '#blogs': {
    render: () => renderBlogs(),
    postRender: () => { }
  },
  '#journey': {
    render: () => renderJourney(),
    postRender: () => initJourney()
  },
  '#about': {
    render: () => renderAbout(),
    postRender: () => { }
  },
  '#reviews': {
    render: () => renderReviews(),
    postRender: () => initReviews()
  },
  '#contact': {
    render: () => renderContact(),
    postRender: () => initContact()
  }
};

// ── Scroll reveal for .er-reveal elements ──
function initScrollReveal() {
  const els = document.querySelectorAll('.er-reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

export const navigateTo = (hash) => {
  window.location.hash = hash;
};

export const initRouter = () => {
  const app = document.getElementById('app');

  const render = () => {
    let hash = window.location.hash;
    if (!hash || hash === '#') {
      hash = '#home';
      window.location.hash = hash;
      return;
    }

    const routeKey = hash.split('?')[0];

    const route = routes[routeKey] || {
      render: () => `<div class="page-404"><h1>404</h1><p>Page not found</p><a href="#home" class="btn btn-accent">Go Home</a></div>`,
      postRender: () => { }
    };

    const navbarHTML = renderNavbar();
    const pageHTML = route.render();
    const footerHTML = renderFooter();
    const authModalHTML = renderAuthModal();

    app.innerHTML = `
      ${navbarHTML}
      <main class="main-content fade-in-section">
        ${pageHTML}
      </main>
      ${footerHTML}
      ${authModalHTML}
    `;

    requestAnimationFrame(() => {
      const main = app.querySelector('.main-content');
      if (main) main.classList.add('visible');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === routeKey);
    });

    window.scrollTo({ top: 0, behavior: 'instant' });

    initNavbar();
    initAuthModal();
    route.postRender();

    if (window.observeFadeElements) {
      window.observeFadeElements();
    }
  };

  window.addEventListener('hashchange', render);
  render();
};
