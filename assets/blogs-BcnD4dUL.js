import{a as e,n as t,o as n,s as r,u as i}from"./config-DJ-3s7d_.js";import{t as a}from"./courses-Cg5Nsa6A.js";import{a as o,r as s}from"./s3Upload-B4Xg6tWQ.js";var c=[`All Blogs`,`Study Hacks`,`JEE Mains PYQ`,`NEET Test Series`,`CBSE Class 10 PYQ`,`CBSE Class 12 PYQ`,`Foundation 9th-10th`],l=[];function u(){return`
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
                            ${c.map((e,t)=>`
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
    `}function d(e){return!e||typeof e!=`string`||e.includes(`phototourl.com`)?!1:e.includes(`cloudfront.net`)||e.includes(`edurain-notification.s3`)}function f(e){return!e||e.length===0?`
            <div class="er-no-blogs-found" style="text-align: center; padding: 3rem; color: #94a3b8;">
                <h3>No articles found</h3>
                <p>Try searching for a different keyword or selecting another tag.</p>
            </div>
        `:`
        <div class="er-pw-blogs-grid">
            ${e.map(e=>{let t=`Recently`;e.date&&(t=(e.date.toDate?e.date.toDate():new Date(e.date)).toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`}));let n=d(e.coverImage)?`
                <div class="er-pw-card-cover">
                    <img loading="lazy" src="${e.coverImage}" alt="${e.title}" class="er-pw-card-img" style="width:100%; height:auto; object-fit:contain;" />
                    <span class="er-pw-card-badge">${e.category||`Exam Prep`}</span>
                </div>
            `:`
                <div class="er-pw-card-cover" style="position:relative; width:100%; height:180px; background:rgba(15,23,42,0.6); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:1.2rem; border-bottom:1px dashed rgba(255,255,255,0.15);">
                    <span class="er-pw-card-badge" style="position:absolute; top:12px; left:12px;">${e.category||`Exam Prep`}</span>
                    <div style="width:42px; height:42px; border-radius:50%; background:rgba(234,179,8,0.15); display:flex; align-items:center; justify-content:center; margin-bottom:0.5rem; border:1px solid rgba(234,179,8,0.3);">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#facc15" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </div>
                    <span style="font-size:0.85rem; font-weight:700; color:#facc15; letter-spacing:0.02em;">Banner Recreate Needed</span>
                    <span style="font-size:0.75rem; color:#94a3b8; margin-top:3px;">Original Cloudflare link expired</span>
                </div>
            `;return`
            <div class="er-pw-blog-card glass-card" data-blog-id="${e.id}" style="cursor:pointer; animation: fadeIn 0.5s ease forwards;">
                ${n}
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
    `}async function p(){let c=document.getElementById(`er-blog-search-input`),u=document.getElementById(`er-tags-container`),p=document.getElementById(`er-blogs-grid-container`),m=document.getElementById(`blog-list-view`),h=document.getElementById(`blog-reader-view`),g=document.getElementById(`pw-reader-main-content`),_=document.getElementById(`pw-reader-related-container`);if(!p||!h)return;let v=`All Blogs`,y=``;try{l=(await e(r(i(t,`blogs`),n(`date`,`desc`)))).docs.map(e=>{let t=e.data(),n=o[e.id],r=n&&n.s3Cover?n.s3Cover:t.coverImage;r=s(r);let i=s(t.sidebarBannerImage);return{id:e.id,...t,coverImage:r,sidebarBannerImage:i}}).filter(e=>e.status===`published`);let a=[...new Set(l.map(e=>e.category).filter(e=>e))];u&&(u.innerHTML=`
                <button class="er-tag-pill active" data-tag="All Blogs">All Blogs</button>
                ${a.map(e=>`<button class="er-tag-pill" data-tag="${e}">${e}</button>`).join(``)}
            `),b();let c=window.location.pathname.split(`/`);if(c.length>2&&c[1]===`blogs`){let e=c[2];x(e,!1)}else{let e=window.location.hash.split(`?`)[0].split(`/`);if(e.length>1&&e[0]===`#blogs`){let t=e[1];x(t,!1)}}}catch(e){console.error(`Error fetching blogs:`,e),p.innerHTML=`<div style="text-align: center; padding: 2rem; color: #ef4444;">Failed to load blogs. Please try again later.</div>`}function b(){let e=l.filter(e=>{let t=Array.isArray(e.tags)?e.tags.map(e=>e.toLowerCase()):(e.tag||``).toLowerCase().split(`,`).map(e=>e.trim()),n=v===`All Blogs`||e.category&&e.category.toLowerCase().includes(v.toLowerCase())||t.includes(v.toLowerCase())||e.title&&e.title.toLowerCase().includes(v.toLowerCase()),r=!y||e.title&&e.title.toLowerCase().includes(y.toLowerCase())||e.excerpt&&e.excerpt.toLowerCase().includes(y.toLowerCase())||e.category&&e.category.toLowerCase().includes(y.toLowerCase());return n&&r});p.innerHTML=f(e),C()}c&&c.addEventListener(`input`,e=>{y=e.target.value.trim(),b()}),u&&u.addEventListener(`click`,e=>{let t=e.target.closest(`.er-tag-pill`);t&&(u.querySelectorAll(`.er-tag-pill`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),v=t.getAttribute(`data-tag`),b())});function x(e,t=!0){let n=l.find(t=>t.id===e||t.slug===e);if(!n)return;if(t){let e=n.slug||n.id;window.history.pushState({},``,`/blogs/${e}`)}let r=`Recently`;n.date&&(r=(n.date.toDate?n.date.toDate():new Date(n.date)).toLocaleDateString(`en-IN`,{year:`numeric`,month:`long`,day:`numeric`}));let i=``;i=Array.isArray(n.content)?n.content.map(e=>e.type===`heading`?`<h3 class="pw-article-h3">${e.text}</h3>`:`<p class="pw-article-p">${e.text}</p>`).join(``):`<div class="quill-content">${n.content||`<p class="pw-article-p">${n.excerpt}</p>`}</div>`;let o=`https://d26zb7slji2zmm.cloudfront.net`.replace(/\/+$/,``);i=i.replace(/https:\/\/edurain-notification\.s3(\.[a-z0-9-]+)?\.amazonaws\.com/gi,o);let s=document.createElement(`div`);s.innerHTML=i;let c=s.querySelectorAll(`a[href*="youtube.com"], a[href*="youtu.be"]`),u=!1;c.forEach(e=>{let t=e.querySelector(`img`);if(t&&!t.parentElement.classList.contains(`yt-play-overlay-wrapper`)){let e=document.createElement(`div`);e.className=`yt-play-overlay-wrapper`,e.style.position=`relative`,e.style.display=`inline-block`,e.style.width=`100%`,e.style.textAlign=`center`,t.parentNode.insertBefore(e,t),e.appendChild(t);let n=document.createElement(`div`);if(n.className=`yt-play-overlay`,n.style.cssText=`position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px; background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 32px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease; pointer-events: none;`,n.innerHTML=`<svg viewBox="0 0 24 24" width="40" height="40" fill="#ef4444" style="margin-left: 4px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));"><path d="M8 5v14l11-7z"/></svg>`,e.appendChild(n),!u){let e=document.createElement(`style`);e.textContent=`.yt-play-overlay-wrapper:hover .yt-play-overlay { transform: translate(-50%, -50%) scale(1.1) !important; background: rgba(255,255,255,0.25) !important; border-color: rgba(255,255,255,0.5) !important; }`,s.prepend(e),u=!0}}}),i=s.innerHTML;let f=n.seo&&n.seo.metaTitle&&n.seo.metaTitle.trim()?n.seo.metaTitle.trim():n.title||`EduRain Blog`;document.title=f;let p=n.seo&&n.seo.metaDescription&&n.seo.metaDescription.trim()?n.seo.metaDescription.trim():n.excerpt||`Read this insightful blog on EduRain`,v=document.querySelector(`meta[name="description"]`);v&&(v.content=p);let y=window.location.origin+`/blogs/${n.slug||n.id}`,b=n.coverImage||window.location.origin+`/images/og-banner.webp`,C=document.querySelector(`meta[property="og:title"]`);C&&(C.content=f);let w=document.querySelector(`meta[property="og:description"]`);w&&(w.content=p);let T=document.querySelector(`meta[property="og:url"]`);T&&(T.content=y);let E=document.querySelector(`meta[property="og:image"]`);E&&(E.content=b);let D=document.querySelector(`meta[name="twitter:title"]`);D&&(D.content=f);let O=document.querySelector(`meta[name="twitter:description"]`);O&&(O.content=p);let k=document.getElementById(`pw-sidebar-courses-list`);if(k){let e=[],t=[];Array.isArray(n.recommendedCourses)?t=n.recommendedCourses.map(e=>String(e).trim()):typeof n.recommendedCourses==`string`&&n.recommendedCourses.trim()!==``&&(t=n.recommendedCourses.split(`,`).map(e=>e.trim())),t.length>0&&(e=a.filter(e=>t.includes(String(e.id)))),e.length===0&&(e=a.slice(0,3)),k.innerHTML=e.map(e=>`
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
            `).join(``)}let A=document.getElementById(`pw-sidebar-banner-container`);if(A)if(n.sidebarBannerImage){let e=n.sidebarBannerLink||`#`,t=e.includes(`youtube.com`)||e.includes(`youtu.be`)?`
                    <div class="yt-play-overlay" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 64px; height: 64px; background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 32px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease; pointer-events: none;">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="#ef4444" style="margin-left: 4px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                `:``;A.innerHTML=`
                    <style>
                        .sidebar-banner-link-wrapper:hover .yt-play-overlay {
                            transform: translate(-50%, -50%) scale(1.1) !important;
                            background: rgba(255,255,255,0.25) !important;
                            border-color: rgba(255,255,255,0.5) !important;
                        }
                    </style>
                    <a href="${e}" target="_blank" rel="noopener noreferrer" class="sidebar-banner-link-wrapper" style="display: block; width: 100%; position: relative;">
                        <img loading="lazy" src="${n.sidebarBannerImage}" alt="Promo Banner" style="width: 100%; display: block; border-radius: 12px; object-fit: cover;" />
                        ${t}
                    </a>
                `,A.style.display=`block`}else A.style.display=`none`,A.innerHTML=``;g.innerHTML=`
            <div class="pw-article-breadcrumbs">
                <a href="/">Home</a> &rsaquo; <button id="btn-bc-blogs" style="background:none;border:none;color:#2563eb;cursor:pointer;padding:0;">Blogs</button> &rsaquo; <span style="color:#64748b;">${n.title}</span>
            </div>

            <h1 class="pw-article-h1" style="font-size:2.5rem; margin: 1rem 0; color:#1e293b; font-weight:800;">${n.title}</h1>
            
            <div class="pw-article-meta-header" style="margin-bottom: 2rem; color: #64748b; font-size: 0.95rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
                <span>By <strong>${n.author||`EduRain Team`}</strong></span>
                <span style="margin: 0 10px;">•</span>
                <span>📅 ${r}</span>
            </div>

            ${d(n.coverImage)?`
                <div class="pw-article-cover-banner" style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
                    <img loading="lazy" src="${n.coverImage}" alt="${n.title}" style="width: 100%; display: block;" />
                </div>
            `:``}

            <div class="pw-article-body" style="font-size: 1.1rem; line-height: 1.8; color: #334155;">
                ${i}
            </div>

            <div class="pw-article-footer-bar" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
                <button id="btn-close-modal-bottom" class="btn btn-primary" style="background: #16a34a; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
                    &larr; Back to All Blogs
                </button>
            </div>
        `;let j=l.filter(e=>e.id!==n.id).slice(0,3);_.innerHTML=`
            <h3 class="pw-related-title" style="margin-bottom: 1.5rem; color: #1e293b;">Related Articles</h3>
            <div class="pw-related-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
                ${j.map(e=>{let t=d(e.coverImage)?`<img loading="lazy" src="${e.coverImage}" alt="${e.title}" style="width:100%; height:160px; object-fit:cover;" />`:`<div style="width:100%; height:120px; background:#1e293b; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#facc15; font-size:0.8rem; font-weight:600; padding:1rem; text-align:center;">
                            <span>🎨 Banner Recreate Needed</span>
                            <span style="font-size:0.7rem; color:#94a3b8; font-weight:normal; margin-top:2px;">(Link expired)</span>
                           </div>`;return`
                    <div class="pw-related-card btn-open-blog" data-blog-id="${e.id}" style="cursor:pointer; background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1); border:1px solid #e2e8f0; transition: transform 0.2s;">
                        ${t}
                        <div class="pw-related-info" style="padding: 1rem;">
                            <h4 style="margin:0 0 0.5rem 0; font-size:1.05rem; color:#1e293b;">${e.title}</h4>
                            <span style="font-size:0.85rem; color:#64748b;">${e.date?.toDate?e.date.toDate().toLocaleDateString():`Recently`}</span>
                        </div>
                    </div>
                `}).join(``)}
            </div>
        `,m.style.display=`none`,h.style.display=`block`;let M=document.getElementById(`blogs`);M?M.scrollIntoView({behavior:`smooth`}):window.scrollTo({top:0,behavior:`smooth`}),document.getElementById(`btn-bc-blogs`)?.addEventListener(`click`,S),document.getElementById(`btn-close-modal-bottom`)?.addEventListener(`click`,S),_.querySelectorAll(`.btn-open-blog`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-blog-id`);n&&x(n)})})}function S(){h.style.display=`none`,m.style.display=`block`,document.title=`IIT JEE, NEET & Foundation Blogs | EduRain`;let e=document.querySelector(`meta[name="description"]`);e&&(e.content=`Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides`);let t=document.getElementById(`blogs`);t&&t.scrollIntoView({behavior:`smooth`})}function C(){p.querySelectorAll(`.er-pw-blog-card`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=e.getAttribute(`data-blog-id`);n&&x(n)})})}}export{p as initBlogs,u as renderBlogs};