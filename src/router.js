// Global Shell Components (Eagerly loaded)
import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderFooter, initFooter } from './components/footer.js';
import { renderAuthModal, initAuthModal } from './components/authModal.js';
import { initIosAppPopup } from './components/iosAppPopup.js';

// Helper to update SEO meta tags dynamically (DO NOT CHANGE)
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

// Caching Object
const routeCache = {};

const routes = {
  '/': {
    load: async () => {
      const [
        { renderBanner, initBanner },
        { renderPopularCourses },
        { renderFreeDemo },
        { renderFaculty, initFaculty },
        { renderHomeReviews, initHomeReviews },
        { renderImpact, initImpact },
        { renderAppDownload }
      ] = await Promise.all([
        import('./components/banner.js'),
        import('./components/popularCourses.js'),
        import('./components/freeDemo.js'),
        import('./components/faculty.js'),
        import('./components/homeReviews.js'),
        import('./components/impact.js'),
        import('./components/appDownload.js')
      ]);
      return {
        render: () => renderBanner() + renderPopularCourses() + renderFreeDemo() + renderFaculty() + renderHomeReviews() + renderImpact() + renderAppDownload(),
        postRender: () => {
          initBanner(); initFaculty(); initHomeReviews(); initImpact(); initScrollReveal();
          setMetaTags("Best Online Coaching for IIT-JEE, NEET & Class 6-10 | EduRain", "EduRain is an online education platform providing academic learning and exam preparation for Class 6–12, Foundation, NEET and IIT-JEE.", "https://www.edurain.in/");
        }
      };
    }
  },
  '/courses': {
    load: async () => {
      const { renderCourses, initCourses } = await import('./components/courses.js');
      return {
        render: () => renderCourses(),
        postRender: () => {
          initCourses();
          setMetaTags("Explore Our All Courses – IIT JEE, NEET & Foundation (Class 6-10)", "Explore IIT JEE, NEET & Foundation courses for Class 6-10 with expert faculty, structured curriculum & proven results. Take the first step toward success", "https://www.edurain.in/courses");
        }
      };
    }
  },
  '/blogs': {
    load: async () => {
      const { renderBlogs, initBlogs } = await import('./components/blogs.js');
      return {
        render: () => renderBlogs(),
        postRender: () => {
          initBlogs();
          setMetaTags("IIT JEE, NEET & Foundation Blogs | EduRain", "Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides", "https://www.edurain.in/blogs");
        }
      };
    }
  },
  '/journey': {
    load: async () => {
      const { renderJourney, initJourney } = await import('./components/journey.js');
      return { render: () => renderJourney(), postRender: () => initJourney() };
    }
  },
  '/about-us': {
    load: async () => {
      const { renderAbout } = await import('./components/about.js');
      return { 
        render: () => renderAbout(), 
        postRender: () => setMetaTags("About Us | EduRain's Mission to Make Learning Accessible", "At EduRain, our mission is to make quality education accessible for every student from Class 6-10 foundation to IIT-JEE & NEET success. Know our story", "https://www.edurain.in/about-us") 
      };
    }
  },
  '/reviews': {
    load: async () => {
      const { renderReviews, initReviews } = await import('./components/reviews.js');
      return { render: () => renderReviews(), postRender: () => initReviews() };
    }
  },
  '/contact-us': {
    load: async () => {
      const { renderContact, initContact } = await import('./components/contact.js');
      return {
        render: () => renderContact(),
        postRender: () => { 
          initContact(); 
          setMetaTags("Contact Us | Get in Touch with EduRain", "Have questions about our courses for Class 6-10, IIT-JEE or NEET? Contact EduRain's team for admissions support, course details or a free demo class", "https://www.edurain.in/contact-us"); 
        }
      };
    }
  },
  '/privacy': {
    load: async () => {
      const { renderPrivacy } = await import('./components/privacy.js');
      return { render: () => renderPrivacy(), postRender: () => setMetaTags("Privacy Policy - EduRain", "Privacy policy of EduRain", "https://www.edurain.in/privacy") };
    }
  },
  '/terms': {
    load: async () => {
      const { renderTerms } = await import('./components/terms.js');
      return { render: () => renderTerms(), postRender: () => setMetaTags("Terms and Conditions - EduRain", "Terms and conditions of use for Edurain") };
    }
  },
  '/sitemap': {
    load: async () => {
      const { renderSitemap } = await import('./components/sitemap.js');
      return { render: () => renderSitemap(), postRender: () => setMetaTags("Sitemap - EduRain", "Sitemap for EduRain") };
    }
  },
  '/courses/iit-jee': {
    load: async () => {
      const [{ renderJEECourses }, { initFAQ }] = await Promise.all([import('./components/categoryCourses.js'), import('./components/faq.js')]);
      return {
        render: () => renderJEECourses(),
        postRender: () => { initFAQ(); setMetaTags("Best IIT JEE Online Coaching for JEE Main & Advanced | EduRain", "Crack IIT JEE with EduRain: live classes, expert faculty, and structured material for complete JEE Main & Advanced exam preparation", "https://www.edurain.in/courses/iit-jee"); }
      };
    }
  },
  '/courses/neet': {
    load: async () => {
      const [{ renderNEETCourses }, { initFAQ }] = await Promise.all([import('./components/categoryCourses.js'), import('./components/faq.js')]);
      return {
        render: () => renderNEETCourses(),
        postRender: () => { initFAQ(); setMetaTags("NEET 2027-28 Complete Online Preparation with EduRain", "Start your NEET 2027-28 online preparation with EduRain: live classes, expert faculty, and structured NCERT-based material with regular tests.", "https://www.edurain.in/courses/neet"); }
      };
    }
  },
  '/courses/foundation': {
    load: async () => {
      const [{ renderFoundationCourses }, { initFAQ }] = await Promise.all([import('./components/categoryCourses.js'), import('./components/faq.js')]);
      return {
        render: () => renderFoundationCourses(),
        postRender: () => { initFAQ(); setMetaTags("Best Online Coaching for Classes 6 to 10 | Live Interactive Classes", "Live online classes for Class 6 to 10 with expert-led Math, Science & more: building a strong IIT JEE & NEET foundation. Interactive learning, real results", "https://www.edurain.in/courses/foundation"); }
      };
    }
  },
  '/blogadmin': {
    load: async () => {
      const { renderBlogAdmin, initBlogAdmin } = await import('./components/blogAdmin.js');
      return { render: () => renderBlogAdmin(), postRender: () => initBlogAdmin() };
    }
  },
  '/blogadmin/login': {
    load: async () => {
      const { renderBlogAdminLogin, initBlogAdminLogin } = await import('./components/blogAdminLogin.js');
      return { render: () => renderBlogAdminLogin(), postRender: () => initBlogAdminLogin() };
    }
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

// Global prefetch utility
window.prefetchRoute = (path) => {
  if (routes[path] && !routeCache[path]) {
    routes[path].load(); // Trigger the import without waiting for render
  }
};

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

  // Intercept all clicks and handle intent-based prefetching
  document.body.addEventListener('mouseover', e => {
    const link = e.target.closest('a');
    if (link && link.href) {
      try {
        const url = new URL(link.href);
        if (url.origin === window.location.origin) {
          let path = url.pathname;
          if (path.endsWith('/') && path !== '/') path = path.slice(0, -1);
          window.prefetchRoute(path);
        }
      } catch (err) {}
    }
  });

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

  window.renderRoute = async () => {
    let path = window.location.pathname;
    const originalPath = path;
    
    // Normalize path
    if (path === '' || path === '/') {
      path = '/';
    } else if (path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    // Remove trailing slash from URL bar silently
    if (originalPath !== path && path !== '/') {
      window.history.replaceState(window.history.state, "", path + window.location.search + window.location.hash);
    }

    let routeConfig = routes[path];
    
    if (!routeConfig && path.startsWith('/blogs/')) {
      routeConfig = routes['/blogs'];
    }
    
    let route;
    
    if (routeConfig) {
      if (!routeCache[path]) {
        routeCache[path] = await routeConfig.load();
      }
      route = routeCache[path];
    } else {
      route = {
        render: () => `<div class="page-404"><h1>404</h1><p>Page not found</p><a href="/" class="btn btn-accent">Go Home</a></div>`,
        postRender: () => { }
      };
    }

    const navbarHTML = path.startsWith('/blogadmin') ? '' : renderNavbar();
    const footerHTML = path.startsWith('/blogadmin') ? '' : renderFooter();
    const authModalHTML = path.startsWith('/blogadmin') ? '' : renderAuthModal();
    
    const pageHTML = route.render();

    app.innerHTML = `
      ${navbarHTML}
      <main class="main-content fade-in-section" ${path.startsWith('/blogadmin') ? 'style="padding:0; margin:0; max-width: 100%;"' : ''}>
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
