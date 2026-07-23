import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderHero } from './components/hero.js';
import { renderFeatures } from './components/features.js';
import { renderCourses, initCourses } from './components/courses.js';
import { renderBlogs } from './components/blogs.js';
import { renderAbout } from './components/about.js';
import { renderReviews, initReviews } from './components/reviews.js';
import { renderContact, initContact } from './components/contact.js';
import { renderAuthModal, initAuthModal } from './components/authModal.js';

const routes = {
  '#home': {
    render: () => renderHero() + renderFeatures(),
    postRender: () => {}
  },
  '#courses': {
    render: () => renderCourses(),
    postRender: () => initCourses()
  },
  '#blogs': {
    render: () => renderBlogs(),
    postRender: () => {}
  },
  '#about': {
    render: () => renderAbout(),
    postRender: () => {}
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
      return; // hashchange will fire and re-render
    }

    const route = routes[hash] || {
      render: () => `<div class="page-404"><h1>404</h1><p>Page not found</p><a href="#home" class="btn btn-accent">Go Home</a></div>`,
      postRender: () => {}
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

    // Trigger fade-in
    requestAnimationFrame(() => {
      const main = app.querySelector('.main-content');
      if (main) main.classList.add('visible');
    });

    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Init navbar + auth modal (they exist on every page)
    initNavbar();
    initAuthModal();

    // Page-specific post-render
    route.postRender();

    // Observe fade-in elements
    if (window.observeFadeElements) {
      window.observeFadeElements();
    }
  };

  window.addEventListener('hashchange', render);
  render();
};
