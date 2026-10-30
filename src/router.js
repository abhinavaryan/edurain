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
          if (window.location.pathname === '/blogs' || window.location.pathname === '/blogs/') {
            setMetaTags("IIT JEE, NEET & Foundation Blogs | EduRain", "Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides", "https://www.edurain.in/blogs");
          }
        }
      };
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

  '/about-new': {
    load: async () => {
      const { renderAbout, initAboutNew } = await import('./components/about-new.js');
      return { 
        render: () => renderAbout(), 
        postRender: () => {
          setMetaTags("About Us (New) | EduRain", "Check out our new About Us page.", "https://www.edurain.in/about-new");
          if (initAboutNew) initAboutNew();
        }
      };
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
  '/refund-policy': {
    load: async () => {
      const { renderRefund } = await import('./components/refund.js');
      return { render: () => renderRefund(), postRender: () => setMetaTags("Refund/Cancellation Policy - EduRain", "Refund and cancellation policy for EduRain", "https://www.edurain.in/refund-policy") };
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
        postRender: () => { 
            initFAQ(); 
            setMetaTags("Best IIT JEE 2027 Online Coaching for JEE Main & Advanced | EduRain", "Crack IIT JEE 2027 with EduRain: live classes, expert faculty, and structured material for complete JEE Main & Advanced exam preparation.", "https://www.edurain.in/courses/iit-jee"); 
            if (window.anime) {
                window.anime({
                    targets: '.er-anime-reveal',
                    translateY: [40, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 1200,
                    delay: window.anime.stagger(150, {start: 300})
                });
            }
        }
      };
    }
  },
  '/courses/neet': {
    load: async () => {
      const [{ renderNEETCourses }, { initFAQ }] = await Promise.all([import('./components/categoryCourses.js'), import('./components/faq.js')]);
      return {
        render: () => renderNEETCourses(),
        postRender: () => { 
            initFAQ(); 
            setMetaTags("NEET 2027-28 Complete Online Preparation with EduRain", "Start your NEET 2027-28 online preparation with EduRain: live classes, expert faculty, and structured NCERT-based material with regular tests.", "https://www.edurain.in/courses/neet"); 
            if (window.anime) {
                window.anime({
                    targets: '.er-anime-reveal',
                    translateY: [40, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 1200,
                    delay: window.anime.stagger(150, {start: 300})
                });
            }
        }
      };
    }
  },
  '/courses/foundation': {
    load: async () => {
      const [{ renderFoundationCourses }, { initFAQ }] = await Promise.all([import('./components/categoryCourses.js'), import('./components/faq.js')]);
      return {
        render: () => renderFoundationCourses(),
        postRender: () => { 
            initFAQ(); 
            setMetaTags("Best Online Coaching for Classes 6 to 10 | Live Interactive Classes", "Live online classes for Class 6 to 10 with expert-led Math, Science & more: building a strong IIT JEE & NEET foundation. Interactive learning, real results", "https://www.edurain.in/courses/foundation"); 
            if (window.anime) {
                window.anime({
                    targets: '.er-anime-reveal',
                    translateY: [40, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 1200,
                    delay: window.anime.stagger(150, {start: 300})
                });
            }
        }
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
  },
  '/study': {
    load: async () => {
      window.location.href = '/study/';
      return { render: () => '', postRender: () => {} };
    }
  }
};

// Admin Route Aliases (Supports /blogs-admin, /blog-admin, /admin, /blogsadmin, /blogs/admin)
routes['/blog-admin'] = routes['/blogadmin'];
routes['/blogs-admin'] = routes['/blogadmin'];
routes['/blogsadmin'] = routes['/blogadmin'];
routes['/admin'] = routes['/blogadmin'];
routes['/blogs/admin'] = routes['/blogadmin'];

routes['/blog-admin/login'] = routes['/blogadmin/login'];
routes['/blogs-admin/login'] = routes['/blogadmin/login'];
routes['/blogsadmin/login'] = routes['/blogadmin/login'];
routes['/admin/login'] = routes['/blogadmin/login'];
routes['/blogs/admin/login'] = routes['/blogadmin/login'];

// Removed DEV ONLY block for /study as it is now a separate React app

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
  let isInitialLoad = true;

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
              url.pathname.startsWith('/foundationcourse') ||
              url.pathname.startsWith('/study')) {
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
    
    // Explicitly check for admin routes before generic /blogs/ prefix
    if (!routeConfig && (path === '/blogs/admin' || path === '/blogs/admin/')) {
      routeConfig = routes['/blogadmin'];
    } else if (!routeConfig && (path === '/blogs/admin/login' || path === '/blogs/admin/login/')) {
      routeConfig = routes['/blogadmin/login'];
    } else if (!routeConfig && path.startsWith('/blogs/')) {
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

    // Hydration check: On initial page load, if #app is already prerendered by SSG,
    // only preserve DOM nodes if the prerendered HTML actually matches the current route.
    // If arriving via GitHub Pages 404 redirect (?p=...) or visiting an admin/dynamic page,
    // we MUST execute full client render so user doesn't get stuck on the homepage.
    const isFrom404Redirect = Boolean(urlParams.get('p'));
    const isAdminRoute = path.includes('admin');
    // Blog pages are intentionally not listed: their prerendered HTML is a simplified
    // version for search engines, and initBlogs() needs the real layout (search,
    // categories, reader view), so /blogs and /blogs/<slug> always render client-side.
    const isPrerenderedMatch = !isFrom404Redirect && !isAdminRoute && (
      (path === '/' && app.querySelector('.banner-section')) ||
      (path.startsWith('/courses') && app.querySelector('.courses-section')) ||
      (path === '/about-us' && app.querySelector('.about-section')) ||
      (path === '/contact-us' && app.querySelector('.contact-section')) ||
      (['/privacy', '/terms', '/refund-policy'].includes(path) && app.querySelector('.er-privacy-section')) ||
      (path === '/sitemap' && app.querySelector('.er-sitemap-section'))
    );

    if (isInitialLoad && isPrerenderedMatch) {
      isInitialLoad = false;
      initNavbar();
      initAuthModal();
      initFooter();
      initIosAppPopup();
      if (route.postRender) route.postRender();
      if (window.observeFadeElements) {
        window.observeFadeElements();
      }
      return;
    }
    isInitialLoad = false;

    const isStandalonePage = isAdminRoute || path.startsWith('/study');
    const navbarHTML = isStandalonePage ? '' : renderNavbar();
    const footerHTML = isStandalonePage ? '' : renderFooter();
    const authModalHTML = (!isAdminRoute && import.meta.env.DEV) ? renderAuthModal() : '';
    
    const pageHTML = route.render();

    app.innerHTML = `
      ${navbarHTML}
      <main class="main-content fade-in-section" ${isStandalonePage ? 'style="padding:0; margin:0; max-width: 100%;"' : ''}>
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
