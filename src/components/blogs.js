import coursesData from '../data/courses.json';
import { db } from '../firebase/config.js';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';

const POPULAR_TAGS = [
    "All Blogs",
    "Study Hacks",
    "JEE Mains PYQ",
    "NEET Test Series",
    "CBSE Class 10 PYQ",
    "CBSE Class 12 PYQ",
    "Foundation 9th-10th"
];

let liveBlogsData = []; // To store fetched blogs

export function renderBlogs() {
    const tagsHtml = POPULAR_TAGS.map((tag, idx) => `
        <button class="er-tag-pill ${idx === 0 ? 'active' : ''}" data-tag="${tag}">
            ${tag}
        </button>
    `).join('');

    const recommendedCourses = coursesData.slice(0, 3);
    const recommendedCoursesHtml = recommendedCourses.map(course => `
        <div class="pw-sidebar-course-card">
            <img loading="lazy" src="${course.thumbnail}" alt="${course.title}" class="pw-sidebar-course-img" />
            <div class="pw-sidebar-course-info">
                <h4 class="pw-sidebar-course-title">${course.title}</h4>
                <div class="pw-sidebar-course-price">
                    <span class="price-current">${course.price}</span>
                    <span class="price-discount-badge">25% OFF</span>
                </div>
                <a href="${course.link || '#courses'}" target="_blank" rel="noopener" class="pw-sidebar-enroll-btn">
                    Enroll Now
                </a>
            </div>
        </div>
    `).join('');

    return `
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
                            ${tagsHtml}
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
                                <div class="pw-sidebar-courses-list">
                                    ${recommendedCoursesHtml}
                                </div>
                            </div>

                            <div class="pw-sidebar-widget pw-app-promo-widget">
                                <h3>EduRain Learning App</h3>
                                <p>Get live classes, DPPs, doubt solving & mock test series on your phone.</p>
                                <a href="https://play.google.com/store/apps/details?id=co.lynde.fpdwe&hl=en_IN" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="width: 100%; text-align: center; margin-top: 0.5rem; background: #16a34a; border: none; border-radius: 8px;">
                                    Download App Free
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Related Articles Carousel Footer -->
                    <div class="pw-reader-related-section" id="pw-reader-related-container"></div>
                </div>
            </div>
        </section>
    `;
}

function renderBlogGridItems(blogs) {
    if (!blogs || blogs.length === 0) {
        return `
            <div class="er-no-blogs-found" style="text-align: center; padding: 3rem; color: #94a3b8;">
                <h3>No articles found</h3>
                <p>Try searching for a different keyword or selecting another tag.</p>
            </div>
        `;
    }

    const items = blogs.map(blog => {
        let dateStr = 'Recently';
        if (blog.date) {
            // Check if it's a Firestore Timestamp
            const d = blog.date.toDate ? blog.date.toDate() : new Date(blog.date);
            dateStr = d.toLocaleDateString('en-IN', {
                year: 'numeric', month: 'long', day: 'numeric'
            });
        }

        return `
            <div class="er-pw-blog-card glass-card" data-blog-id="${blog.id}" style="cursor:pointer; animation: fadeIn 0.5s ease forwards;">
                <div class="er-pw-card-cover">
                    <img loading="lazy" src="${blog.coverImage || '/images/default-blog.jpg'}" onerror="this.onerror=null; this.src='https://placehold.co/600x400/064e3b/ffffff?text=EduRain+Blog';" alt="${blog.title}" class="er-pw-card-img" style="width:100%; height:200px; object-fit:cover;" />
                    <span class="er-pw-card-badge">${blog.category || 'Exam Prep'}</span>
                </div>
                <div class="er-pw-card-body">
                    <h3 class="er-pw-card-title" style="font-size:1.2rem; margin-bottom:0.5rem;">${blog.title}</h3>
                    <p class="er-pw-card-excerpt" style="font-size:0.95rem; color:#64748b; margin-bottom:1rem; display:-webkit-box; -webkit-line-clamp:3; line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">${blog.excerpt || ''}</p>
                    <div class="er-pw-card-meta" style="color: #fbbf24;">
                        <span class="er-pw-card-author">By ${blog.author || 'EduRain Team'}</span>
                        <span class="er-pw-card-date">${dateStr}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="er-pw-blogs-grid">
            ${items}
        </div>
    `;
}

export async function initBlogs() {
    const searchInput = document.getElementById('er-blog-search-input');
    const tagsContainer = document.getElementById('er-tags-container');
    const gridContainer = document.getElementById('er-blogs-grid-container');
    const listView = document.getElementById('blog-list-view');
    const readerView = document.getElementById('blog-reader-view');
    const modalMain = document.getElementById('pw-reader-main-content');
    const modalRelated = document.getElementById('pw-reader-related-container');

    if (!gridContainer || !readerView) return;

    let activeTag = "All Blogs";
    let searchQuery = "";

    // Fetch live blogs from Firestore
    try {
        const blogsRef = collection(db, 'blogs');
        // Only order by date. Filtering by status is done client-side to avoid manual Firestore Index creation.
        const q = query(blogsRef, orderBy('date', 'desc'));
        const snapshot = await getDocs(q);
        
        liveBlogsData = snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(b => b.status === 'published'); // Client-side filter

        filterAndRender();

        // Check if URL has a slug or ID on initial load
        const pathParts = window.location.pathname.split('/');
        if (pathParts.length > 2 && pathParts[1] === 'blogs') {
            const initialSlug = pathParts[2];
            openBlog(initialSlug, false);
        } else {
            // Fallback for old hash URLs
            const hashParts = window.location.hash.split('?')[0].split('/');
            if (hashParts.length > 1 && hashParts[0] === '#blogs') {
                const initialBlogId = hashParts[1];
                openBlog(initialBlogId, false);
            }
        }

    } catch (error) {
        console.error("Error fetching blogs:", error);
        gridContainer.innerHTML = `<div style="text-align: center; padding: 2rem; color: #ef4444;">Failed to load blogs. Please try again later.</div>`;
    }

    function filterAndRender() {
        let filtered = liveBlogsData.filter(b => {
            // In Firestore schema, tags is an array. Handling both array and string (for old data)
            const tags = Array.isArray(b.tags) ? b.tags.map(t=>t.toLowerCase()) : ((b.tag || '').toLowerCase().split(',').map(t=>t.trim()));
            
            const matchesTag = (activeTag === "All Blogs") || 
                (b.category && b.category.toLowerCase().includes(activeTag.toLowerCase())) ||
                (tags.includes(activeTag.toLowerCase())) ||
                (b.title && b.title.toLowerCase().includes(activeTag.toLowerCase()));
            
            const matchesQuery = !searchQuery || 
                (b.title && b.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (b.excerpt && b.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (b.category && b.category.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesTag && matchesQuery;
        });

        gridContainer.innerHTML = renderBlogGridItems(filtered);
        attachCardClickListeners();
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            filterAndRender();
        });
    }

    if (tagsContainer) {
        tagsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.er-tag-pill');
            if (!btn) return;

            tagsContainer.querySelectorAll('.er-tag-pill').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            activeTag = btn.getAttribute('data-tag');
            filterAndRender();
        });
    }

    function openBlog(blogId, updateUrl = true) {
        const blog = liveBlogsData.find(b => b.id === blogId || b.slug === blogId);
        if (!blog) return;

        let dateStr = 'Recently';
        if (blog.date) {
            const d = blog.date.toDate ? blog.date.toDate() : new Date(blog.date);
            dateStr = d.toLocaleDateString('en-IN', {
                year: 'numeric', month: 'long', day: 'numeric'
            });
        }

        // Support both old JSON format and new Quill HTML format
        let contentHtml = '';
        if (Array.isArray(blog.content)) {
            // Old JSON array of objects format
            contentHtml = blog.content.map(block => {
                if (block.type === 'heading') return `<h3 class="pw-article-h3">${block.text}</h3>`;
                return `<p class="pw-article-p">${block.text}</p>`;
            }).join('');
        } else {
            // New Quill HTML format
            contentHtml = `<div class="quill-content">${blog.content || `<p class="pw-article-p">${blog.excerpt}</p>`}</div>`;
        }

        // Apply SEO Meta Tags dynamically
        if (blog.seo) {
            document.title = blog.seo.metaTitle || blog.title;
            let metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.content = blog.seo.metaDescription || blog.excerpt;
        }

        modalMain.innerHTML = `
            <div class="pw-article-breadcrumbs">
                <a href="/">Home</a> &rsaquo; <button id="btn-bc-blogs" style="background:none;border:none;color:#2563eb;cursor:pointer;padding:0;">Blogs</button> &rsaquo; <span style="color:#64748b;">${blog.title}</span>
            </div>

            <h1 class="pw-article-h1" style="font-size:2.5rem; margin: 1rem 0; color:#1e293b; font-weight:800;">${blog.title}</h1>
            
            <div class="pw-article-meta-header" style="margin-bottom: 2rem; color: #64748b; font-size: 0.95rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem;">
                <span>By <strong>${blog.author || 'EduRain Team'}</strong></span>
                <span style="margin: 0 10px;">•</span>
                <span>📅 ${dateStr}</span>
            </div>

            <div class="pw-article-cover-banner" style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
                <img loading="lazy" src="${blog.coverImage}" alt="${blog.title}" style="width: 100%; display: block;" />
            </div>

            <div class="pw-article-body" style="font-size: 1.1rem; line-height: 1.8; color: #334155;">
                ${contentHtml}
            </div>

            <div class="pw-article-footer-bar" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e2e8f0;">
                <button id="btn-close-modal-bottom" class="btn btn-primary" style="background: #16a34a; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
                    &larr; Back to All Blogs
                </button>
            </div>
        `;

        const related = liveBlogsData.filter(b => b.id !== blog.id).slice(0, 3);
        modalRelated.innerHTML = `
            <h3 class="pw-related-title" style="margin-bottom: 1.5rem; color: #1e293b;">Related Articles</h3>
            <div class="pw-related-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
                ${related.map(r => `
                    <div class="pw-related-card btn-open-blog" data-blog-id="${r.id}" style="cursor:pointer; background:white; border-radius:12px; overflow:hidden; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1); border:1px solid #e2e8f0; transition: transform 0.2s;">
                        <img loading="lazy" src="${r.coverImage}" alt="${r.title}" style="width:100%; height:160px; object-fit:cover;" />
                        <div class="pw-related-info" style="padding: 1rem;">
                            <h4 style="margin:0 0 0.5rem 0; font-size:1.05rem; color:#1e293b;">${r.title}</h4>
                            <span style="font-size:0.85rem; color:#64748b;">${r.date?.toDate ? r.date.toDate().toLocaleDateString() : 'Recently'}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        listView.style.display = 'none';
        readerView.style.display = 'block';

        const blogsSection = document.getElementById('blogs');
        if (blogsSection) blogsSection.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });

        document.getElementById('btn-bc-blogs')?.addEventListener('click', closeBlog);
        document.getElementById('btn-close-modal-bottom')?.addEventListener('click', closeBlog);
        
        modalRelated.querySelectorAll('.btn-open-blog').forEach(c => {
            c.addEventListener('click', (e) => {
                e.stopPropagation();
                const bId = c.getAttribute('data-blog-id');
                if (bId) openBlog(bId);
            });
        });

        if (updateUrl) history.pushState(null, null, '/blogs/' + (blog.slug || blog.id));
    }

    function closeBlog() {
        readerView.style.display = 'none';
        listView.style.display = 'block';
        history.pushState(null, null, '/blogs');
        
        // Reset SEO Tags to default blogs page
        document.title = "IIT JEE, NEET & Foundation Blogs | EduRain";
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = "Read blogs on IIT JEE preparation, NEET exam strategy, and Foundation (6th-10th) study guides";
        
        const blogsSection = document.getElementById('blogs');
        if (blogsSection) blogsSection.scrollIntoView({ behavior: 'smooth' });
    }

    function attachCardClickListeners() {
        gridContainer.querySelectorAll('.er-pw-blog-card').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const blogId = el.getAttribute('data-blog-id');
                if (blogId) openBlog(blogId);
            });
        });
    }
}
