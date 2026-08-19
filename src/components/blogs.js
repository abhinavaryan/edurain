import blogsData from '../data/blogs.json';
import coursesData from '../data/courses.json';

const POPULAR_TAGS = [
    "All Blogs",
    "Study Hacks",
    "JEE Mains PYQ",
    "NEET Test Series",
    "CBSE Class 10 PYQ",
    "CBSE Class 12 PYQ",
    "Foundation 9th-10th"
];

export function renderBlogs() {
    const publishedBlogs = blogsData.filter(b => b.isPublished !== false);

    // Group blogs by main categories for PW-style sectioning
    const categories = Array.from(new Set(publishedBlogs.map(b => b.category || 'General')));

    const tagsHtml = POPULAR_TAGS.map((tag, idx) => `
        <button class="er-tag-pill ${idx === 0 ? 'active' : ''}" data-tag="${tag}">
            ${tag}
        </button>
    `).join('');

    // Initial render of all blogs in grid
    const initialGridHtml = renderBlogGridItems(publishedBlogs);

    // Recommended courses for sidebar
    const recommendedCourses = coursesData.slice(0, 3);
    const recommendedCoursesHtml = recommendedCourses.map(course => `
        <div class="pw-sidebar-course-card">
            <img src="${course.thumbnail}" alt="${course.title}" class="pw-sidebar-course-img" />
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
                        <input type="text" id="er-blog-search-input" class="er-pw-search-input" placeholder="Search articles, exam tips, PYQs, or topics..." />
                    </div>

                    <!-- Our Popular Tags Filter -->
                    <div class="er-pw-tags-section">
                        <div class="er-pw-tags-label">#Ourpopulartags</div>
                        <div class="er-pw-tags-list" id="er-tags-container">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>

                <!-- Blog Grid Section -->
                <div class="er-pw-grid-section" id="er-blogs-grid-container">
                    ${initialGridHtml}
                </div>

            </div>

            <!-- PW Style Full Article Reader View (Inline) -->
            <div id="blog-reader-view" class="blog-reader-view-container" style="display: none;">
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
                                <a href="/appDownload" class="btn btn-primary btn-sm" style="width: 100%; text-align: center; margin-top: 0.5rem; background: #16a34a; border: none; border-radius: 8px;">
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

    // Group by category if showing all, or flat grid if searching
    const items = blogs.map(blog => {
        const date = new Date(blog.date).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'long', day: 'numeric'
        });

        return `
            <div class="er-pw-blog-card glass-card fade-in-section" data-blog-id="${blog.id}">
                <div class="er-pw-card-cover">
                    <img src="${blog.coverImage}" alt="${blog.title}" class="er-pw-card-img" />
                    <span class="er-pw-card-badge">${blog.category || 'Exam Prep'}</span>
                </div>
                <div class="er-pw-card-body">
                    <h3 class="er-pw-card-title">${blog.title}</h3>
                    <p class="er-pw-card-excerpt">${blog.excerpt}</p>
                    <div class="er-pw-card-meta">
                        <span class="er-pw-card-author">By ${blog.author}</span>
                        <span class="er-pw-card-date">${date}</span>
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

export function initBlogs() {
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

    function filterAndRender() {
        const published = blogsData.filter(b => b.isPublished !== false);
        
        let filtered = published.filter(b => {
            const matchesTag = (activeTag === "All Blogs") || 
                (b.category && b.category.toLowerCase().includes(activeTag.toLowerCase())) ||
                (b.tag && b.tag.toLowerCase().includes(activeTag.toLowerCase())) ||
                (b.title && b.title.toLowerCase().includes(activeTag.toLowerCase()));
            
            const matchesQuery = !searchQuery || 
                b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (b.category && b.category.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesTag && matchesQuery;
        });

        gridContainer.innerHTML = renderBlogGridItems(filtered);
        attachCardClickListeners();
    }

    // Search Input Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            filterAndRender();
        });
    }

    // Tag Filter Listener
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
        const blog = blogsData.find(b => b.id === blogId) || blogsData[0];
        if (!blog) return;

        const date = new Date(blog.date).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'long', day: 'numeric'
        });

        let contentHtml = '';
        if (Array.isArray(blog.content)) {
            contentHtml = blog.content.map(block => {
                if (block.type === 'heading') {
                    return `<h3 class="pw-article-h3">${block.text}</h3>`;
                }
                return `<p class="pw-article-p">${block.text}</p>`;
            }).join('');
        } else {
            contentHtml = `<p class="pw-article-p">${blog.excerpt}</p>`;
        }

        let takeawaysHtml = '';
        if (Array.isArray(blog.keyTakeaways) && blog.keyTakeaways.length > 0) {
            takeawaysHtml = `
                <div class="pw-takeaways-box">
                    <h4>💡 Key Takeaways & Action Plan</h4>
                    <ul>
                        ${blog.keyTakeaways.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // FAQs Section
        const faqsHtml = `
            <div class="pw-article-faqs">
                <h3 class="pw-faqs-title">Frequently Asked Questions (FAQs)</h3>
                <div class="pw-faq-item">
                    <div class="pw-faq-q">Q1. How often are EduRain study materials and blogs updated?</div>
                    <div class="pw-faq-a">Our editorial and academic teams update materials daily in accordance with the latest NTA (JEE/NEET) and CBSE guidelines.</div>
                </div>
                <div class="pw-faq-item">
                    <div class="pw-faq-q">Q2. Where can I solve topic-wise Previous Year Questions (PYQs)?</div>
                    <div class="pw-faq-a">You can download chapter-wise PYQ PDFs and attempt mock test series directly on the EduRain App and Web platform.</div>
                </div>
            </div>
        `;

        modalMain.innerHTML = `
            <div class="pw-article-breadcrumbs">
                <a href="/">Home</a> &rsaquo; <a href="/blogs">Blogs</a> &rsaquo; <span>${blog.title}</span>
            </div>

            <h1 class="pw-article-h1">${blog.title}</h1>
            
            <div class="pw-article-meta-header">
                <span>By <strong>${blog.author}</strong></span>
                <span>•</span>
                <span>📅 ${date}</span>
                <span>•</span>
                <span>⏱️ ${blog.readTime || '5 min read'}</span>
            </div>

            <div class="pw-article-cover-banner">
                <img src="${blog.coverImage}" alt="${blog.title}" />
            </div>

            <div class="pw-article-body">
                ${contentHtml}
                ${takeawaysHtml}
                ${faqsHtml}
            </div>

            <div class="pw-article-footer-bar">
                <button id="btn-close-modal-bottom" class="btn btn-primary" style="background: #16a34a; border: none; padding: 0.5rem 1.35rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
                    &larr; Back to All Blogs
                </button>
            </div>
        `;

        // Related Blogs
        const related = blogsData.filter(b => b.id !== blog.id).slice(0, 3);
        modalRelated.innerHTML = `
            <h3 class="pw-related-title">Related Articles</h3>
            <div class="pw-related-grid">
                ${related.map(r => `
                    <div class="pw-related-card btn-open-blog" data-blog-id="${r.id}">
                        <img src="${r.coverImage}" alt="${r.title}" />
                        <div class="pw-related-info">
                            <h4>${r.title}</h4>
                            <span>${new Date(r.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        listView.style.display = 'none';
        readerView.style.display = 'block';

        // Scroll to the top of the blogs section smoothly
        const blogsSection = document.getElementById('blogs');
        if (blogsSection) {
            blogsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const bottomCloseBtn = document.getElementById('btn-close-modal-bottom');
        if (bottomCloseBtn) bottomCloseBtn.addEventListener('click', closeBlog);
        
        // Add listeners for related cards inside reader
        modalRelated.querySelectorAll('.btn-open-blog').forEach(c => {
            c.addEventListener('click', (e) => {
                e.stopPropagation();
                const bId = c.getAttribute('data-blog-id');
                if (bId) openBlog(bId);
            });
        });

        if (updateUrl) {
            history.pushState(null, null, '#blogs/' + blog.id);
        }
    }

    function closeBlog() {
        readerView.style.display = 'none';
        listView.style.display = 'block';
        
        history.pushState(null, null, '#blogs');
        
        const blogsSection = document.getElementById('blogs');
        if (blogsSection) {
            blogsSection.scrollIntoView({ behavior: 'smooth' });
        }
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

    attachCardClickListeners();

    // Check if URL has a blog ID on initial load
    const hashParts = window.location.hash.split('?')[0].split('/');
    if (hashParts.length > 1 && hashParts[0] === '#blogs') {
        const initialBlogId = hashParts[1];
        openBlog(initialBlogId, false);
    }
}
