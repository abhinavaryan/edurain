import{a as e,o as t,s as n,u as r}from"./vendor-Boxe3_tG.js";import{r as i}from"./main-BFf3A8Ne.js";import{t as a}from"./courses-BKPhEzz0.js";var o=[`All Blogs`,`Study Hacks`,`JEE Mains PYQ`,`NEET Test Series`,`CBSE Class 10 PYQ`,`CBSE Class 12 PYQ`,`Foundation 9th-10th`],s=[];function c(){return`
        <section class="blogs-section" id="blogs">
            <div class="er-pw-blog-container" id="blog-list-view">
                
                <!-- PW Style Hero Header -->
                <div class="er-pw-blog-hero">
                    <h1 class="er-pw-blog-title">EduRain Blog</h1>
                    <p class="er-pw-blog-subtitle">India's Leading Learning & Exam Preparation Platform for Students</p>
                    
                    <!-- Search Bar -->
                    <div class="er-pw-search-wrapper">
                        <span class="er-pw-search-icon">🔍</span>
                        <input type="text" id="er-blog-search-input" class="er-pw-search-input" aria-label="Search blogs" placeholder="Search articles, exam tips, PYQs, or topics..." />
                    </div>

                    <!-- Our Categories Filter -->
                    <div class="er-pw-tags-section">
                        <div class="er-pw-tags-label">#OurCategories</div>
                        <div class="er-pw-tags-list" id="er-tags-container">
                            ${o.map((e,t)=>`
        <button class="er-tag-pill ${t===0?`active`:``}" data-tag="${e}">
            ${e}
        </button>
    `).join(``)}
                        </div>
                    </div>
                </div>

                <!-- Blog Grid Section -->
                <div class="er-pw-grid-section" id="er-blogs-grid-container">
                    <div style="text-align: center; padding: 4rem; color: #94a3b8; font-size: 1.2rem;">
                        <span class="er-loader"></span> Fetching latest blogs...
                    </div>
                </div>

            </div>

            <!-- PW Style Full Article Reader View (Inline) -->
            <div id="blog-reader-view" class="blog-reader-view-container" style="display: none;">
                <style>
                    .pw-article-body img { max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
                </style>
                <div class="pw-reader-container">
                    
                    <div class="pw-reader-layout">
                        <!-- Left Main Content Column (~70%) -->
                        <div class="pw-reader-main" id="pw-reader-main-content"></div>
                        
                        <!-- Right Sidebar Column (~30%) -->
                        <div class="pw-reader-sidebar">
                            <div class="pw-sidebar-widget">
                                <div class="pw-sidebar-widget-header">
                                    <h3>Recommended for you</h3>
                                    <a href="/courses" class="pw-see-all">See All &rarr;</a>
                                </div>
                                <div class="pw-sidebar-courses-list" id="pw-sidebar-courses-list">
                                    ${a.slice(0,3).map(e=>`
        <div class="pw-sidebar-course-card">
            <img loading="lazy" src="${e.thumbnail}" alt="${e.title}" class="pw-sidebar-course-img" />
            <div class="pw-sidebar-course-info">
                <h4 class="pw-sidebar-course-title">${e.title}</h4>
                <div class="pw-sidebar-course-price">
                    <span class="price-current">${e.price}</span>
                    <span class="price-discount-badge">25% OFF</span>
                </div>
                <a href="${e.link||`#courses`}" target="_blank" rel="noopener" class="pw-sidebar-enroll-btn">
                    Enroll Now
                </a>
            </div>
        </div>
    `).join(``)}
                                </div>
                            </div>

                            <div class="pw-sidebar-widget pw-app-promo-widget">
                                <h3>EduRain Learning App</h3>
                                <p>Get live classes, DPPs, doubt solving & mock test series on your phone.</p>
                                <a href="https://play.google.com/store/apps/details?id=co.lynde.fpdwe&hl=en_IN" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="width: 100%; text-align: center; margin-top: 0.5rem; background: #16a34a; border: none; border-radius: 8px;">
                                    Download App Free
                                </a>
                            </div>

                            <!-- Custom Sidebar Banner Container -->
                            <div id="pw-sidebar-banner-container" style="display: none; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></div>
                        </div>
                    </div>

                    <!-- Related Articles Carousel Footer -->
                    <div class="pw-reader-related-section" id="pw-reader-related-container"></div>
                </div>
            </div>
        </section>
    `}function l(e){return!e||e.length===0?`
            <div class="er-no-blogs-found" style="text-align: center; padding: 3rem; color: #94a3b8;">
                <h3>No articles found</h3>
                <p>Try searching for a different keyword or selecting another tag.</p>
            </div>
        `:`
        <div class="er-pw-blogs-grid">
            ${e.map(e=>{let t=`Recently`;return e.date&&(t=(e.date.toDate?e.date.toDate():new Date(e.date)).toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`})),`
            <div class="er-pw-blog-card glass-card" data-blog-id="${e.id}" style="cursor:pointer; animation: fadeIn 0.5s ease forwards;">
                <div class="er-pw-card-cover">
                    <img loading="lazy" src="${e.coverImage||`/images/default-blog.jpg`}" onerror="this.onerror=null; this.src='https://placehold.co/600x400/064e3b/ffffff?text=EduRain+Blog';" alt="${e.title}" class="er-pw-card-img" style="width:100%; height:auto; object-fit:contain;" />
                    <span class="er-pw-card-badge">${e.category||`Exam Prep`}</span>
                </div>
                <div class="er-pw-card-body">
                    <h3 class="er-pw-card-title" style="font-size:1.2rem; margin-bottom:0.5rem;">${e.title}</h3>
                    <p class="er-pw-card-excerpt" style="font-size:0.95rem; color:#64748b; margin-bottom:1rem; display:-webkit-box; -webkit-line-clamp:3; line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">${e.excerpt||``}</p>
                    <div class="er-pw-card-meta" style="color: #fbbf24;">
                        <span class="er-pw-card-author">By ${e.author||`EduRain Team`}</span>
                        <span class="er-pw-card-date">${t}</span>
                    </div>
                </div>
            </div>
        `}).join(``)}
        </div>
    `}async function u(){let o=document.getElementById(`er-blog-search-input`),c=document.getElementById(`er-tags-container`),u=document.getElementById(`er-blogs-grid-container`),d=document.getElementById(`blog-list-view`),f=document.getElementById(`blog-reader-view`),p=document.getElementById(`pw-reader-main-content`),m=document.getElementById(`pw-reader-related-container`);if(!u||!f)return;let h=`All Blogs`,g=``;try{s=(await e(n(r(i,`blogs`),t(`date`,`desc`)))).docs.map(e=>({id:e.id,...e.data()})).filter(e=>e.status===`published`);let a=[...new Set(s.map(e=>e.category).filter(e=>e))];c&&(c.innerHTML=`
                <button class="er-tag-pill active" data-tag="All Blogs">All Blogs</button>
                ${a.map(e=>`<button class="er-tag-pill" data-tag="${e}">${e}</button>`).join(``)}
            `),_();let o=window.location.pathname.split(`/`);if(o.length>2&&o[1]===`blogs`){let e=o[2];v(e,!1)}else{let e=window.location.hash.split(`?`)[0].split(`/`);if(e.length>1&&e[0]===`#blogs`){let t=e[1];v(t,!1)}}}catch(e){console.error(`Error fetching blogs:`,e),u.innerHTML=`<div style="text-align: center; padding: 2rem; color: #ef4444;">Failed to load blogs. Please try again later.</div>`}function _(){let e=s.filter(e=>{let t=Array.isArray(e.tags)?e.tags.map(e=>e.toLowerCase()):(e.tag||``).toLowerCase().split(`,`).map(e=>e.trim()),n=h===`All Blogs`||e.category&&e.category.toLowerCase().includes(h.toLowerCase())||t.includes(h.toLowerCase())||e.title&&e.title.toLowerCase().includes(h.toLowerCase()),r=!g||e.title&&e.title.toLowerCase().includes(g.toLowerCase())||e.excerpt&&e.excerpt.toLowerCase().includes(g.toLowerCase())||e.category&&e.category.toLowerCase().includes(g.toLowerCase());return n&&r});u.innerHTML=l(e),b()}o&&o.addEventListener(`input`,e=>{g=e.target.value.trim(),_()}),c&&c.addEventListener(`click`,e=>{let t=e.target.closest(`.er-tag-pill`);t&&(c.querySelectorAll(`.er-tag-pill`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),h=t.getAttribute(`data-tag`),_())});function v(e,t=!0){let n=s.find(t=>t.id===e||t.slug===e);if(!n)return;let r=`Recently`;n.date&&(r=(n.date.toDate?n.date.toDate():new Date(n.date)).toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`}));let i=``;if(i=Array.isArray(n.content)?n.content.map(e=>e.type===`heading`?`<h3 class="pw-article-h3">${e.text}</h3>`:`<p class="pw-article-p">${e.text}</p>`).join(``):`<div class="quill-content">${n.content||`<p class="pw-article-p">${n.excerpt}</p>`}</div>`,n.seo){document.title=n.seo.metaTitle||n.title;let e=document.querySelector(`meta[name="description"]`);e&&(e.content=n.seo.metaDescription||n.excerpt)}let o=document.getElementById(`pw-sidebar-courses-list`);if(o){let e=[],t=[];Array.isArray(n.recommendedCourses)?t=n.recommendedCourses.map(e=>String(e).trim()):typeof n.recommendedCourses==`string`&&n.recommendedCourses.trim()!==``&&(t=n.recommendedCourses.split(`,`).map(e=>e.trim())),t.length>0&&(e=a.filter(e=>t.includes(String(e.id)))),e.length===0&&(e=a.slice(0,3)),o.innerHTML=e.map(e=>`
                <div class="pw-sidebar-course-card">
                    <img loading="lazy" src="${e.thumbnail}" alt="${e.title}" class="pw-sidebar-course-img" />
                    <div class="pw-sidebar-course-info">
                        <h4 class="pw-sidebar-course-title">${e.title}</h4>
                        <div class="pw-sidebar-course-price">
                            <span class="price-current">${e.price}</span>
                            <span class="price-discount-badge">25% OFF</span>
                        </div>
                        <a href="${e.link||`#courses`}" target="_blank" rel="noopener" class="pw-sidebar-enroll-btn">
                            Enroll Now
                        </a>
                    </div>
                </div>
            `).join(``)}let c=document.getElementById(`pw-sidebar-banner-container`);c&&(n.sidebarBannerImage?(c.innerHTML=`
                    <a href="${n.sidebarBannerLink||`#`}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%;">
                        <img loading="lazy" src="${n.sidebarBannerImage}" alt="Promo Banner" style="width: 100%; display: block; border-radius: 12px; object-fit: cover;" />
                    </a>
                `,c.style.display=`block`):(c.style.display=`none`,c.innerHTML=``)),p.innerHTML=`
            <div class="pw-article-breadcrumbs">
                <a href="/">Home</a> &rsaquo; <button id="btn-bc-blogs" style="background:none;border:none;color:#2563eb;cursor:pointer;padding:0;">Blogs</button> &rsaquo; <span style="color:#64748b;">${n.title}</span>
            </div>

            <h1 class="pw-article-h1" style="font-size:2.5rem; margin: 1rem 0; color:#1e293b; font-weight:800;">${n.title}</h1>
            
            <div class="pw-article-meta-header" style="margin-bottom: 2rem; color: #64748b; font-size: 0.95rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
                <span>By <strong>${n.author||`EduRain Team`}</strong></span>
                <span style="margin: 0 10px;">•</span>
                <span>📅 ${r}</span>
            </div>

            <div class="pw-article-cover-banner" style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
                <img loading="lazy" src="${n.coverImage}" alt="${n.title}" style="width: 100%; display: block;" />
            </div>

            <div class="pw-article-body" style="font-size: 1.1rem; line-height: 1.8; color: #334155;">
                ${i}
            </div>

            <div class="pw-article-footer-bar" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
                <button id="btn-close-modal-bottom" class="btn btn-primary" style="background: #16a34a; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
                    &larr; Back to All Blogs
                </button>
            </div>
        `;let l=s.filter(e=>e.id!==n.id).slice(0,3);m.innerHTML=`
            <h3 class="pw-related-title" style="margin-bottom: 1.5rem; color: #1e293b;">Related Articles</h3>
            <div class="pw-related-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
                ${l.map(e=>`
                    <div class="pw-related-card btn-open-blog" data-blog-id="${e.id}" style="cursor:pointer; background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1); border:1px solid #e2e8f0; transition: transform 0.2s;">
                        <img loading="lazy" src="${e.coverImage}" alt="${e.title}" style="width:100%; height:160px; object-fit:cover;" />
                        <div class="pw-related-info" style="padding: 1rem;">
                            <h4 style="margin:0 0 0.5rem 0; font-size:1.05rem; color:#1e293b;">${e.title}</h4>
                            <span style="font-size:0.85rem; color:#64748b;">${e.date?.toDate?e.date.toDate().toLocaleDateString():`Recently`}</span>
                        </div>
                    </div>
                `).join(``)}
            </div>
        `,d.style.display=`none`,f.style.display=`block`;let u=document.getElementById(`blogs`);u?u.scrollIntoView({behavior:`smooth`}):window.scrollTo({top:0,behavior:`smooth`}),document.getElementById(`btn-bc-blogs`)?.addEventListener(`click`,y),document.getElementById(`btn-close-modal-bottom`)?.addEventListener(`click`,y),m.querySelectorAll(`.btn-open-blog`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-blog-id`);n&&v(n)})}),t&&history.pushState(null,null,`/blogs/`+(n.slug||n.id))}function y(){f.style.display=`none`,d.style.display=`block`,history.pushState(null,null,`/blogs`),document.title=`IIT JEE, NEET & Foundation Blogs | EduRain`;let e=document.querySelector(`meta[name="description"]`);e&&(e.content=`Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides`);let t=document.getElementById(`blogs`);t&&t.scrollIntoView({behavior:`smooth`})}function b(){u.querySelectorAll(`.er-pw-blog-card`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=e.getAttribute(`data-blog-id`);n&&v(n)})})}}export{u as initBlogs,c as renderBlogs};