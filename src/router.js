import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderFooter, initFooter } from './components/footer.js';
import { renderCourses, initCourses } from './components/courses.js';
import { renderBlogs, initBlogs } from './components/blogs.js';
import { renderAbout } from './components/about.js';
import { renderReviews, initReviews } from './components/reviews.js';
import { renderContact, initContact } from './components/contact.js';
import { renderAuthModal, initAuthModal } from './components/authModal.js';
import { renderJourney, initJourney } from './components/journey.js';
import { renderPrivacy } from './components/privacy.js';
import { renderTerms } from './components/terms.js';
import { renderSitemap } from './components/sitemap.js';
import { renderJEECourses, renderNEETCourses, renderFoundationCourses } from './components/categoryCourses.js';

// ── HOME PAGE SECTIONS (exact order) ──
import { renderBanner, initBanner } from './components/banner.js';
import { renderPopularCourses } from './components/popularCourses.js';
import { renderFreeDemo } from './components/freeDemo.js';
import { renderFaculty, initFaculty } from './components/faculty.js';
import { renderHomeReviews, initHomeReviews } from './components/homeReviews.js';
import { renderImpact, initImpact } from './components/impact.js';
import { renderAppDownload } from './components/appDownload.js';

// Helper to update SEO meta tags dynamically
function setMetaTags(title, description) {
  document.title = title;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;
}

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
    postRender: () => initBlogs()
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
  },
  '#privacy': {
    render: () => renderPrivacy(),
    postRender: () => { }
  },
  '#terms': {
    render: () => renderTerms(),
    postRender: () => setMetaTags("Terms and Conditions - EduRain", "Terms and conditions of use for Edurain")
  },
  '#sitemap': {
    render: () => renderSitemap(),
    postRender: () => setMetaTags("Sitemap - EduRain", "Sitemap for EduRain")
  },
  '#jeecourses': {
    render: () => renderJEECourses(),
    postRender: () => setMetaTags("JEE Courses - EduRain", "Comprehensive preparation for IIT-JEE exams. Build a strong foundation and master the concepts to secure your seat in top engineering colleges.")
  },
  '#neetcourses': {
    render: () => renderNEETCourses(),
    postRender: () => setMetaTags("NEET Courses - EduRain", "Focused coaching for medical aspirants. In-depth coverage of Biology, Physics, and Chemistry to help you crack NEET with top scores.")
  },
  '#foundationcourses': {
    render: () => renderFoundationCourses(),
    postRender: () => setMetaTags("Foundation Courses - EduRain", "Strengthen your core concepts in Science and Mathematics from Class 6 to 10. The perfect stepping stone for future competitive exams.")
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
    const routeKey = hash.split('?')[0].split('/')[0];
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
    initFooter();
    route.postRender();

    if (window.observeFadeElements) {
      window.observeFadeElements();
    }
  };

  window.addEventListener('hashchange', render);
  render();
};
