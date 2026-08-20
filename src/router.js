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
import { initIosAppPopup } from './components/iosAppPopup.js';

// Helper to update SEO meta tags dynamically
function setMetaTags(title, description, canonicalUrl) {
  document.title = title;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  if (canonicalUrl) {
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;
  }
}

const routes = {
  '/': {
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
      setMetaTags("Best Online Coaching for IIT-JEE, NEET & Class 6-10 | EduRain", "EduRain offers online coaching for Class 6-10, foundation courses, IIT-JEE preparation, NEET coaching, board exams and competitive exam preparation.", "https://www.edurain.in/");
    }
  },
  '/courses': {
    render: () => renderCourses(),
    postRender: () => {
      initCourses();
      setMetaTags("Explore Our All Courses – IIT JEE, NEET & Foundation (Class 6-10)", "Explore IIT JEE, NEET & Foundation courses for Class 6-10 with expert faculty, structured curriculum & proven results. Take the first step toward success", "https://www.edurain.in/courses");
    }
  },
  '/blogs': {
    render: () => renderBlogs(),
    postRender: () => {
      initBlogs();
      setMetaTags("IIT JEE, NEET & Foundation Blogs | EduRain", "Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides", "https://www.edurain.in/blogs");
    }
  },
  '/journey': {
    render: () => renderJourney(),
    postRender: () => initJourney()
  },
  '/about-us': {
    render: () => renderAbout(),
    postRender: () => setMetaTags("About Us - EduRain", "About EduRain", "https://www.edurain.in/about-us")
  },
  '/reviews': {
    render: () => renderReviews(),
    postRender: () => initReviews()
  },
  '/contact-us': {
    render: () => renderContact(),
    postRender: () => initContact()
  },
  '/privacy': {
    render: () => renderPrivacy(),
    postRender: () => { }
  },
  '/terms': {
    render: () => renderTerms(),
    postRender: () => setMetaTags("Terms and Conditions - EduRain", "Terms and conditions of use for Edurain")
  },
  '/sitemap': {
    render: () => renderSitemap(),
    postRender: () => setMetaTags("Sitemap - EduRain", "Sitemap for EduRain")
  },
  '/courses/iit-jee': {
    render: () => renderJEECourses(),
    postRender: () => setMetaTags("Best IIT JEE Online Coaching for JEE Main & Advanced | EduRain", "Crack IIT JEE with EduRain: live classes, expert faculty, and structured material for complete JEE Main & Advanced exam preparation", "https://www.edurain.in/courses/iit-jee")
  },
  '/courses/neet': {
    render: () => renderNEETCourses(),
    postRender: () => setMetaTags("NEET 2027-28 Complete Online Preparation with EduRain", "Start your NEET 2027-28 online preparation with EduRain: live classes, expert faculty, and structured NCERT-based material with regular tests.", "https://www.edurain.in/courses/neet")
  },
  '/courses/foundation': {
    render: () => renderFoundationCourses(),
    postRender: () => setMetaTags("Best Online Coaching for Classes 6 to 10 | Live Interactive Classes", "Live online classes for Class 6 to 10 with expert-led Math, Science & more: building a strong IIT JEE & NEET foundation. Interactive learning, real results", "https://www.edurain.in/courses/foundation")
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

export const navigateTo = (path) => {
  window.history.pushState({}, "", path);
  if (window.renderRoute) {
    window.renderRoute();
  }
};

export const initRouter = () => {
  const app = document.getElementById('app');

  // Handle GitHub Pages 404 redirect hack
  const urlParams = new URLSearchParams(window.location.search);
  const redirectPath = urlParams.get('p');
  if (redirectPath) {
    window.history.replaceState(null, null, redirectPath);
  }

  // Intercept all clicks on internal links for SPA
  document.body.addEventListener('click', e => {
    if (e.defaultPrevented) return;
    const link = e.target.closest('a');
    if (link && link.href) {
      const hrefAttr = link.getAttribute('href');
      if (hrefAttr === '#') return; // Ignore empty hash links used for JS actions
      
      try {
        const url = new URL(link.href);
        // Ensure it's the same origin
        if (url.origin === window.location.origin) {
          // Exclude target="_blank" and standalone multi-page folders
          if (link.target === "_blank") return;
          if (url.pathname.startsWith('/jeecourse') || 
              url.pathname.startsWith('/neetcourse') || 
              url.pathname.startsWith('/foundationcourse')) {
             return; 
          }
          // Prevent full page reload
          e.preventDefault();
          navigateTo(url.pathname);
        }
      } catch (err) {
        // Ignore invalid URLs
      }
    }
  });

  window.renderRoute = () => {
    let path = window.location.pathname;
    
    // Normalize path
    if (path === '' || path === '/') {
      path = '/';
    } else if (path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    const route = routes[path] || {
      render: () => `<div class="page-404"><h1>404</h1><p>Page not found</p><a href="/" class="btn btn-accent">Go Home</a></div>`,
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
      try {
        const linkPath = new URL(link.href).pathname;
        const normalizedLinkPath = linkPath.endsWith('/') && linkPath !== '/' ? linkPath.slice(0, -1) : linkPath;
        link.classList.toggle('active', normalizedLinkPath === path);
      } catch (e) {}
    });

    window.scrollTo({ top: 0, behavior: 'instant' });

    initNavbar();
    initAuthModal();
    initFooter();
    initIosAppPopup();
    route.postRender();

    if (window.observeFadeElements) {
      window.observeFadeElements();
    }
  };

  window.addEventListener('popstate', window.renderRoute);
  window.renderRoute();
};
