import { auth, db, storage } from '../firebase/config.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import blogsDataJson from '../data/blogs.json';
import coursesData from '../data/courses.json';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export function renderBlogAdmin() {
    return `
    <div id="er-blog-admin-wrapper" style="display: none; min-height: 100vh; background-color: #0d1f14; color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        
        <!-- Hamburger Toggle Button -->
        <button id="admin-sidebar-toggle" style="position: fixed; top: 1.5rem; left: 1.5rem; z-index: 1100; background: #16a34a; color: white; border: none; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); transition: 0.3s;">
            ☰
        </button>

        <!-- Sidebar -->
        <aside id="admin-sidebar" style="width: 260px; background: #064e3b; position: fixed; top: 0; left: 0; height: 100vh; border-right: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; transition: transform 0.3s ease; z-index: 1000; transform: translateX(0);">
            <div style="padding: 2rem 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-top: 5rem;">
                <h2 style="color: #4ade80; font-size: 1.5rem; margin: 0; font-weight: 800;">EduRain Admin</h2>
                <p style="color: #cbd5e1; font-size: 0.85rem; margin-top: 5px;">Blog CMS</p>
            </div>
            
            <nav style="padding: 1.5rem 1rem; flex: 1;">
                <ul style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 0.5rem;">
                        <button id="nav-all-blogs" class="admin-nav-btn active" style="width: 100%; text-align: left; padding: 0.85rem 1rem; background: #16a34a; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.3s;">
                            📚 All Blogs
                        </button>
                    </li>
                    <li style="margin-bottom: 0.5rem;">
                        <button id="nav-add-blog" class="admin-nav-btn" style="width: 100%; text-align: left; padding: 0.85rem 1rem; background: transparent; color: #cbd5e1; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.3s;">
                            ✍️ Add New Blog
                        </button>
                    </li>
                    <li style="margin-bottom: 0.5rem;">
                        <a href="/" style="display: block; width: 100%; text-align: left; padding: 0.85rem 1rem; background: transparent; color: #cbd5e1; border: none; border-radius: 8px; font-weight: 600; text-decoration: none; transition: 0.3s;">
                            🌍 View Website
                        </a>
                    </li>
                </ul>
            </nav>
            
            <div style="padding: 1.5rem 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <button id="admin-logout-btn" style="width: 100%; padding: 0.75rem; background: #ef4444; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">
                    Logout
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main id="admin-main-content" style="margin-left: 260px; padding: 2rem 3rem; padding-top: 4rem; flex: 1; transition: margin-left 0.3s ease;">
            
            <!-- View: All Blogs -->
            <div id="view-all-blogs">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <h1 style="font-size: 2rem; margin: 0;">Manage Blogs</h1>
                    <div>
                        <button id="btn-migrate-blogs" style="background: transparent; color: #94a3b8; border: 1px solid #94a3b8; padding: 0.75rem 1rem; border-radius: 8px; font-weight: bold; cursor: pointer; margin-right: 1rem;">
                            Migrate JSON Blogs
                        </button>
                        <button id="btn-create-new" style="background: #facc15; color: #333; border: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: bold; cursor: pointer;">
                            + Create New
                        </button>
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.05); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden;">
                    <table style="width: 100%; border-collapse: collapse; text-align: left;">
                        <thead>
                            <tr style="background: rgba(0,0,0,0.2); border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <th style="padding: 1rem; color: #94a3b8; font-weight: 600;">Title</th>
                                <th style="padding: 1rem; color: #94a3b8; font-weight: 600;">Category</th>
                                <th style="padding: 1rem; color: #94a3b8; font-weight: 600;">Status</th>
                                <th style="padding: 1rem; color: #94a3b8; font-weight: 600;">Date</th>
                                <th style="padding: 1rem; color: #94a3b8; font-weight: 600; text-align: right;">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="admin-blogs-list">
                            <tr><td colspan="5" style="padding: 2rem; text-align: center;">Loading blogs...</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- View: Add/Edit Blog -->
            <div id="view-add-blog" style="display: none;">
                <h1 id="editor-title" style="font-size: 2rem; margin-top: 0; margin-bottom: 2rem;">Create New Blog</h1>
                
                <form id="admin-blog-form">
                    <input type="hidden" id="blog-id" value="">
                    
                    <div style="display: grid; grid-template-columns: 1fr 380px; gap: 2rem;">
                        <!-- Left Column: Content -->
                        <div style="display: flex; flex-direction: column;">
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Blog Title *</label>
                                <input type="text" id="blog-title" required style="width: 100%; padding: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; font-size: 1.1rem; outline: none;">
                            </div>
                            
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Excerpt (Short description)</label>
                                <textarea id="blog-excerpt" rows="3" style="width: 100%; padding: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; font-size: 1rem; outline: none; resize: vertical;"></textarea>
                            </div>
                            
                            <div style="margin-bottom: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Content *</label>
                                <div style="background: white; color: black; border-radius: 8px; overflow: hidden; flex: 1; display: flex; flex-direction: column;">
                                    <style>
                                        #quill-editor {
                                            flex: 1;
                                            display: flex;
                                            flex-direction: column;
                                            min-height: 400px;
                                        }
                                        #quill-editor .ql-container {
                                            flex: 1;
                                            display: flex;
                                            flex-direction: column;
                                        }
                                        #quill-editor .ql-editor {
                                            flex: 1;
                                            overflow-y: auto;
                                            min-height: 350px;
                                        }
                                    </style>
                                    <div id="quill-editor"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Right Column: Settings & SEO -->
                        <div>
                            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                                <h3 style="margin-top: 0; color: #4ade80;">Publish Settings</h3>
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Status</label>
                                <select id="blog-status" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                    <option value="published" style="color: black;">Published</option>
                                    <option value="draft" style="color: black;">Draft</option>
                                </select>
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Cover Image URL</label>
                                <span style="display: block; font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem;">Upload your image to postimages.org or imgur.com and paste the "Direct Link" (ending in .jpg or .png) here.</span>
                                <input type="url" id="blog-cover" placeholder="https://i.imgur.com/your-image.jpg" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Category</label>
                                <select id="blog-category-select" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                    <option value="" style="color: black;">Select Category...</option>
                                    <option value="_add_new_" style="color: black; font-weight: bold;">+ Add New Category</option>
                                </select>
                                <input type="text" id="blog-category-new" placeholder="Enter new category name" style="display: none; width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">

                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Tags (Comma separated)</label>
                                <input type="text" id="blog-tags" placeholder="e.g. NEET, Strategy" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Author</label>
                                <input type="text" id="blog-author" value="EduRain Team" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                            </div>
                            
                            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                                <h3 style="margin-top: 0; color: #4ade80;">SEO Meta Data</h3>
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Custom URL Slug</label>
                                <span style="display: block; font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem;">e.g., polynomials-class-10-made-easy (leave empty to auto-generate from ID)</span>
                                <input type="text" id="blog-slug" placeholder="custom-url-slug" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Meta Title</label>
                                <input type="text" id="seo-title" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Meta Description</label>
                                <textarea id="seo-desc" rows="3" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;"></textarea>
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Primary Keyword</label>
                                <input type="text" id="seo-keyword" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Secondary Keyword</label>
                                <input type="text" id="seo-secondary-keyword" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                            </div>

                            <!-- Sidebar Customization Widget -->
                            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                                <h3 style="margin-top: 0; color: #4ade80;">Sidebar Customization</h3>
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Recommended Courses</label>
                                <span style="display: block; font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem;">Select courses to recommend in this blog's sidebar. If none selected, the default 3 courses will be shown.</span>
                                
                                <div id="courses-checkboxes-container" style="max-height: 200px; overflow-y: auto; background: rgba(0,0,0,0.2); padding: 0.75rem; border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; margin-bottom: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
                                    ${coursesData.map(c => `
                                        <label style="display: flex; align-items: center; gap: 0.5rem; color: #cbd5e1; cursor: pointer; font-size: 0.9rem;">
                                            <input type="checkbox" name="recommended-course-checkbox" value="${c.id}" style="cursor: pointer;">
                                            <span>[${c.category}] ${c.title}</span>
                                        </label>
                                    `).join('')}
                                </div>

                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Sidebar Custom Banner</label>
                                <span style="display: block; font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem;">Provide an image URL and a target destination URL to display a custom banner in the sidebar.</span>
                                
                                <label style="display: block; margin-bottom: 0.25rem; color: #cbd5e1; font-size: 0.85rem;">Banner Image URL</label>
                                <input type="url" id="blog-sidebar-banner-img" placeholder="https://i.imgur.com/banner.jpg" style="width: 100%; padding: 0.75rem; margin-bottom: 0.75rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                
                                <label style="display: block; margin-bottom: 0.25rem; color: #cbd5e1; font-size: 0.85rem;">Banner Target Link</label>
                                <input type="url" id="blog-sidebar-banner-link" placeholder="https://courses.edurain.in/..." style="width: 100%; padding: 0.75rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                            </div>
                            
                            <!-- Real-time SEO Analyzer Widget -->
                            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                                <h3 style="margin-top: 0; color: #4ade80; display: flex; justify-content: space-between; align-items: center;">
                                    SEO Analyzer
                                    <span id="seo-grade-badge" style="background: #94a3b8; color: white; padding: 4px 12px; border-radius: 12px; font-size: 0.8rem; font-weight: bold;">N/A</span>
                                </h3>
                                
                                <div style="margin-bottom: 1.5rem;">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 600; color: #cbd5e1;">
                                        <span>Optimization Score</span>
                                        <span id="seo-score-text">0 / 100</span>
                                    </div>
                                    <div style="width: 100%; background: rgba(0,0,0,0.3); border-radius: 8px; height: 10px; overflow: hidden; display: flex;">
                                        <div id="seo-bar" style="height: 100%; background: #ef4444; width: 0%; transition: width 0.3s ease, background 0.3s ease;"></div>
                                    </div>
                                </div>
                                
                                <div id="seo-checklist" style="font-size: 0.9rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.75rem;">
                                    <!-- Populated dynamically via JS -->
                                    <div style="color: #94a3b8; font-style: italic;">Start typing and enter a Primary Keyword to see SEO analysis.</div>
                                </div>
                            </div>
                            
                            <button type="submit" id="btn-save-blog" style="width: 100%; padding: 1rem; background: #16a34a; color: white; border: none; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: 0.3s;">
                                Save & Publish Blog
                            </button>
                            <div id="save-status" style="text-align: center; margin-top: 1rem; font-weight: 600;"></div>
                        </div>
                    </div>
                </form>
            </div>
            
        </main>
    </div>
    <div id="er-admin-auth-loading" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background-color: #0d1f14; color: white; font-size: 1.5rem;">
        Authenticating...
    </div>
    `;
}

export function initBlogAdmin() {
    const wrapper = document.getElementById('er-blog-admin-wrapper');
    const authLoading = document.getElementById('er-admin-auth-loading');
    
    if (!wrapper) return;

    let quill; // Quill instance

    // 1. Authentication Check
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user && user.email === 'edurainseowork@gmail.com') {
            authLoading.style.display = 'none';
            wrapper.style.display = 'flex';
            setupAdminPanel();
            loadBlogs();
        } else {
            // Not logged in or wrong email -> Redirect to login
            window.location.href = '/blogadmin/login';
        }
    });

    // Logout
    document.getElementById('admin-logout-btn')?.addEventListener('click', async () => {
        await signOut(auth);
        window.location.href = '/blogadmin/login';
    });

    // Setup Admin Panel Logic
    function setupAdminPanel() {
        let isSidebarOpen = true;
        const toggleBtn = document.getElementById('admin-sidebar-toggle');
        const sidebar = document.getElementById('admin-sidebar');
        const mainContent = document.getElementById('admin-main-content');
        
        toggleBtn.addEventListener('click', () => {
            isSidebarOpen = !isSidebarOpen;
            if(isSidebarOpen) {
                sidebar.style.transform = 'translateX(0)';
                mainContent.style.marginLeft = '260px';
            } else {
                sidebar.style.transform = 'translateX(-100%)';
                mainContent.style.marginLeft = '0';
            }
        });

        function autoCloseSidebar() {
            // Automatically close the sidebar when an item is clicked
            isSidebarOpen = false;
            sidebar.style.transform = 'translateX(-100%)';
            mainContent.style.marginLeft = '0';
        }

        const viewAll = document.getElementById('view-all-blogs');
        const viewAdd = document.getElementById('view-add-blog');
        const navAll = document.getElementById('nav-all-blogs');
        const navAdd = document.getElementById('nav-add-blog');
        const btnCreateNew = document.getElementById('btn-create-new');

        function showView(view) {
            if (view === 'all') {
                viewAll.style.display = 'block';
                viewAdd.style.display = 'none';
                navAll.style.background = '#16a34a';
                navAll.style.color = 'white';
                navAdd.style.background = 'transparent';
                navAdd.style.color = '#cbd5e1';
                loadBlogs(); // refresh list
            } else {
                viewAll.style.display = 'none';
                viewAdd.style.display = 'block';
                navAdd.style.background = '#16a34a';
                navAdd.style.color = 'white';
                navAll.style.background = 'transparent';
                navAll.style.color = '#cbd5e1';
                
                if(!quill) {
                    initQuill();
                }
            }
        }

        navAll.addEventListener('click', () => {
            showView('all');
            autoCloseSidebar();
        });
        navAdd.addEventListener('click', () => {
            resetForm();
            showView('add');
            autoCloseSidebar();
        });
        btnCreateNew.addEventListener('click', () => {
            resetForm();
            showView('add');
        });

        const btnMigrate = document.getElementById('btn-migrate-blogs');
        btnMigrate.addEventListener('click', async () => {
            if(!confirm("Are you sure you want to migrate JSON blogs to Firestore? This will push all blogs from blogs.json to the database.")) return;
            
            btnMigrate.textContent = "Migrating...";
            btnMigrate.disabled = true;
            try {
                const blogsRef = collection(db, 'blogs');
                for (const blog of blogsDataJson) {
                    let seo = {};
                    let contentHtml = '';
                    
                    if (Array.isArray(blog.content)) {
                        contentHtml = blog.content.map(block => {
                            if (block.type === 'heading') return `<h3 class="pw-article-h3">${block.text}</h3>`;
                            return `<p class="pw-article-p">${block.text}</p>`;
                        }).join('');
                    } else {
                        contentHtml = blog.content || `<p class="pw-article-p">${blog.excerpt || ''}</p>`;
                    }

                    await addDoc(blogsRef, {
                        title: blog.title || 'Untitled',
                        excerpt: blog.excerpt || '',
                        content: contentHtml,
                        status: blog.isPublished === false ? 'draft' : 'published',
                        coverImage: blog.coverImage || '/images/default-blog.jpg',
                        category: blog.category || 'General',
                        tags: blog.tag ? blog.tag.split(',').map(t=>t.trim()) : [],
                        author: blog.author || 'EduRain Team',
                        date: blog.date ? new Date(blog.date) : serverTimestamp(),
                        seo: seo,
                        updatedAt: serverTimestamp()
                    });
                }
                alert("Migration Complete! Blogs are now in Firestore.");
                loadBlogs();
            } catch (err) {
                console.error("Migration failed:", err);
                alert("Migration failed! " + err.message);
            }
            btnMigrate.textContent = "Migrate JSON Blogs";
            btnMigrate.disabled = false;
        });

        // File upload removed - using manual URL exclusively.

        // Category select logic
        const catSelect = document.getElementById('blog-category-select');
        const catNew = document.getElementById('blog-category-new');
        catSelect.addEventListener('change', (e) => {
            if (e.target.value === '_add_new_') {
                catNew.style.display = 'block';
                catNew.focus();
            } else {
                catNew.style.display = 'none';
            }
            alignEditorHeight();
        });

        // Form Submit
        const form = document.getElementById('admin-blog-form');
        form.addEventListener('submit', handleSaveBlog);
        
        // Initialize the Real-Time SEO Analyzer
        if(!quill) {
            initQuill();
        }
        initSEOAnalyzer();
    }

    // Initialize Quill Rich Text Editor
    function initQuill() {
        // Use inline styles for alignment to preserve formatting and work natively on frontend
        const AlignStyle = Quill.import('attributors/style/align');
        Quill.register(AlignStyle, true);

        quill = new Quill('#quill-editor', {
            theme: 'snow',
            modules: {
                toolbar: {
                    container: [
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'align': [] }], // Added text alignment
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['link', 'image', 'video'],
                        ['clean']
                    ],
                    handlers: {
                        image: imageHandler
                    }
                },
                clipboard: {
                    matchVisual: false // Improves pasting from Word/Blogger
                }
            }
        });
    }

    // Handle Image Upload to Firebase Storage from Quill
    function imageHandler() {
        const url = prompt("Please enter the Direct URL of the image (ending in .jpg or .png):");
        if (url) {
            const range = quill.getSelection();
            quill.insertEmbed(range.index, 'image', url);
        }
    }

    function initSEOAnalyzer() {
        const titleInput = document.getElementById('blog-title');
        const seoTitleInput = document.getElementById('seo-title');
        const seoDescInput = document.getElementById('seo-desc');
        const keywordInput = document.getElementById('seo-keyword');
        
        const gradeBadge = document.getElementById('seo-grade-badge');
        const scoreText = document.getElementById('seo-score-text');
        const seoBar = document.getElementById('seo-bar');
        const checklistDiv = document.getElementById('seo-checklist');

        function analyze() {
            const focusKeyword = keywordInput.value.trim().toLowerCase();
            if (!focusKeyword) {
                checklistDiv.innerHTML = '<div style="color: #94a3b8; font-style: italic;">Start typing and enter a Primary Keyword to see SEO analysis.</div>';
                gradeBadge.textContent = 'N/A';
                gradeBadge.style.background = '#94a3b8';
                seoBar.style.width = '0%';
                scoreText.textContent = '0 / 100';
                return;
            }

            const title = (seoTitleInput.value || titleInput.value || '').trim();
            const desc = (seoDescInput.value || '').trim();
            const slug = (document.getElementById('blog-slug').value || '').trim().toLowerCase();
            const secondaryKeyword = (document.getElementById('seo-secondary-keyword').value || '').trim().toLowerCase();
            const contentText = quill.getText() || '';
            const contentHtml = quill.root.innerHTML || '';
            
            let score = 0;
            let totalChecks = 17;
            let checksHtml = '';

            const checkIcon = (passed) => passed ? '<span style="color:#16a34a; font-weight:bold; width: 20px; display:inline-block;">✓</span>' : '<span style="color:#ef4444; font-weight:bold; width: 20px; display:inline-block;">✗</span>';

            // --- 1. Page Title Checks ---
            checksHtml += '<strong style="color:white; margin-top:0.5rem; display:block;">Page Title</strong>';
            
            // 1. Length
            let titleLength = title.length >= 50 && title.length <= 60;
            score += titleLength ? 1 : 0;
            checksHtml += `<div>${checkIcon(titleLength)} The Page Title length is strictly optimal (50-60 chars). Current: ${title.length}</div>`;

            // 2. Keyword in Title
            let kwInTitle = title.toLowerCase().includes(focusKeyword);
            score += kwInTitle ? 1 : 0;
            checksHtml += `<div>${checkIcon(kwInTitle)} The focus keyword appears in the Page Title</div>`;

            // 3. Keyword at beginning of Title
            let titleWords = title.toLowerCase().split(/\\s+/);
            let firstThreeWords = titleWords.slice(0, 3).join(' ');
            let kwAtStart = firstThreeWords.includes(focusKeyword.split(/\\s+/)[0]);
            score += kwAtStart ? 1 : 0;
            checksHtml += `<div>${checkIcon(kwAtStart)} Focus keyword starts within the first 3 words of the Title.</div>`;

            // 4. Power word
            const powerWords = ['best', 'ultimate', 'guide', 'secret', 'proven', 'top', 'how to', 'easy', 'simple', 'fast', 'complete', 'essential'];
            let hasPowerWord = powerWords.some(pw => title.toLowerCase().includes(pw));
            score += hasPowerWord ? 1 : 0;
            checksHtml += `<div>${checkIcon(hasPowerWord)} Title contains a Power Word (e.g., Best, Ultimate, Guide).</div>`;

            // 5. Number in title
            let hasNumber = /\\d/.test(title);
            score += hasNumber ? 1 : 0;
            checksHtml += `<div>${checkIcon(hasNumber)} Title contains a Number.</div>`;

            // --- 2. Meta Description & URL Checks ---
            checksHtml += '<strong style="color:white; margin-top:0.5rem; display:block;">Meta Description & URL</strong>';
            
            // 6. Meta Length
            let descLength = desc.length >= 120 && desc.length <= 160;
            score += descLength ? 1 : 0;
            checksHtml += `<div>${checkIcon(descLength)} The Meta Description length is optimal (120-160 chars). Current: ${desc.length}</div>`;

            // 7. Keyword in Meta
            let kwInDesc = desc.toLowerCase().includes(focusKeyword);
            score += kwInDesc ? 1 : 0;
            checksHtml += `<div>${checkIcon(kwInDesc)} The focus keyword appears in the Meta Description</div>`;

            // 8. Keyword in Slug
            let kwInSlug = slug.length > 0 && slug.includes(focusKeyword.replace(/\\s+/g, '-'));
            score += kwInSlug ? 1 : 0;
            checksHtml += `<div>${checkIcon(kwInSlug)} The custom URL slug contains the focus keyword.</div>`;

            // 9. Short Slug
            let shortSlug = slug.length > 0 && slug.length <= 60;
            score += shortSlug ? 1 : 0;
            checksHtml += `<div>${checkIcon(shortSlug)} URL slug is short and concise (under 60 chars).</div>`;


            // --- 3. Content Checks ---
            checksHtml += '<strong style="color:white; margin-top:0.5rem; display:block;">Content & Readability</strong>';

            let words = contentText.trim().split(/\\s+/).filter(w => w.length > 0);
            let wordCount = words.length;
            
            // 10. Word count
            let goodWordCount = wordCount >= 800;
            score += goodWordCount ? 1 : 0;
            checksHtml += `<div>${checkIcon(goodWordCount)} The text contains ${wordCount} words (strict min 800 words for deep SEO).</div>`;

            // 11. Keyword in first 100 words
            let first100 = words.slice(0, 100).join(' ').toLowerCase();
            let kwInFirst100 = first100.includes(focusKeyword);
            score += kwInFirst100 ? 1 : 0;
            checksHtml += `<div>${checkIcon(kwInFirst100)} The focus keyword appears in the first 100 words (introduction).</div>`;

            // 12. Keyword in Subheadings
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = contentHtml;
            let subheadings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
            let kwInSubheading = Array.from(subheadings).some(h => h.textContent.toLowerCase().includes(focusKeyword));
            score += kwInSubheading ? 1 : 0;
            checksHtml += `<div>${checkIcon(kwInSubheading)} The focus keyword is used in at least one subheading (H2, H3, etc.).</div>`;

            // 13. Strict Density
            let kwRegex = new RegExp(focusKeyword, 'gi');
            let kwMatches = (contentText.match(kwRegex) || []).length;
            let density = wordCount > 0 ? ((kwMatches / wordCount) * 100).toFixed(2) : 0;
            let goodDensity = density >= 0.75 && density <= 1.5;
            score += goodDensity ? 1 : 0;
            checksHtml += `<div>${checkIcon(goodDensity)} Strict keyword density is ${density}% (Target: 0.75% - 1.5%). Overstuffing penalizes.</div>`;

            // 14. Secondary Keyword
            let hasSecondary = secondaryKeyword.length > 0 && contentText.toLowerCase().includes(secondaryKeyword);
            score += hasSecondary ? 1 : 0;
            checksHtml += `<div>${checkIcon(hasSecondary)} Secondary keyword is present in the content.</div>`;

            // 15. Paragraph Readability (<150 words per para)
            let paragraphs = tempDiv.querySelectorAll('p');
            let readableParagraphs = paragraphs.length > 0 && Array.from(paragraphs).every(p => p.textContent.split(/\\s+/).length <= 150);
            score += readableParagraphs ? 1 : 0;
            checksHtml += `<div>${checkIcon(readableParagraphs)} High readability: No single paragraph exceeds 150 words.</div>`;


            // --- 4. Media & Links ---
            checksHtml += '<strong style="color:white; margin-top:0.5rem; display:block;">Media & Links</strong>';

            // 16. Image exists
            let hasImage = contentHtml.includes('<img');
            score += hasImage ? 1 : 0;
            checksHtml += `<div>${checkIcon(hasImage)} Content contains at least one image/media.</div>`;

            // 17. Link exists
            let hasLink = contentHtml.includes('<a ');
            score += hasLink ? 1 : 0;
            checksHtml += `<div>${checkIcon(hasLink)} Content contains an outbound or internal hyperlink.</div>`;

            checklistDiv.innerHTML = checksHtml;

            // Calculate overall
            let percentage = Math.round((score / totalChecks) * 100);
            scoreText.textContent = `${percentage} / 100`;
            seoBar.style.width = `${percentage}%`;

            if (percentage < 50) {
                seoBar.style.background = '#ef4444'; // Red
                gradeBadge.textContent = 'Low';
                gradeBadge.style.background = '#ef4444';
            } else if (percentage < 85) {
                seoBar.style.background = '#facc15'; // Yellow
                gradeBadge.textContent = 'Medium';
                gradeBadge.style.background = '#eab308';
            } else {
                seoBar.style.background = '#16a34a'; // Green
                gradeBadge.textContent = 'High';
                gradeBadge.style.background = '#16a34a';
            }
        }

        // Event listeners
        const triggerAnalysis = () => {
            analyze();
            alignEditorHeight();
        };

        titleInput.addEventListener('input', triggerAnalysis);
        seoTitleInput.addEventListener('input', triggerAnalysis);
        seoDescInput.addEventListener('input', triggerAnalysis);
        keywordInput.addEventListener('input', triggerAnalysis);
        
        if (quill) {
            quill.on('text-change', triggerAnalysis);
        }
        
        // Window resize listener
        window.addEventListener('resize', alignEditorHeight);
        
        // Initial run
        triggerAnalysis();
    }

    function alignEditorHeight() {
        const settingsCol = document.getElementById('btn-save-blog')?.parentElement;
        const editorEl = document.getElementById('quill-editor');
        if (!settingsCol || !editorEl) return;
        
        requestAnimationFrame(() => {
            const settingsRect = settingsCol.getBoundingClientRect();
            const editorRect = editorEl.getBoundingClientRect();
            
            // Calculate distance from editor top to bottom of settings column
            const maxEditorHeight = settingsRect.bottom - editorRect.top;
            
            if (maxEditorHeight > 400) {
                editorEl.style.maxHeight = `${maxEditorHeight}px`;
                const qlEditor = editorEl.querySelector('.ql-editor');
                if (qlEditor) {
                    qlEditor.style.maxHeight = `${maxEditorHeight - 50}px`;
                    qlEditor.style.overflowY = 'auto';
                }
            }
        });
    }

    function resetForm() {
        document.getElementById('admin-blog-form').reset();
        document.getElementById('blog-id').value = '';
        document.getElementById('editor-title').textContent = 'Create New Blog';
        document.getElementById('save-status').textContent = '';
        document.getElementById('blog-category-select').value = '';
        document.getElementById('blog-category-new').value = '';
        document.getElementById('blog-category-new').style.display = 'none';
        
        // Reset recommended courses checkboxes
        const courseCheckboxes = document.querySelectorAll('input[name="recommended-course-checkbox"]');
        courseCheckboxes.forEach(cb => cb.checked = false);
        
        // Reset custom banner inputs
        document.getElementById('blog-sidebar-banner-img').value = '';
        document.getElementById('blog-sidebar-banner-link').value = '';
        
        if(quill) {
            quill.root.innerHTML = '';
        }
    }

    // Load Blogs from Firestore
    async function loadBlogs() {
        const tbody = document.getElementById('admin-blogs-list');
        try {
            const blogsRef = collection(db, 'blogs');
            const q = query(blogsRef, orderBy('date', 'desc'));
            const snapshot = await getDocs(q);
            
            if (snapshot.empty) {
                tbody.innerHTML = '<tr><td colspan="5" style="padding: 2rem; text-align: center;">No blogs found. Create one!</td></tr>';
                return;
            }

            let html = '';
            let categories = new Set();
            snapshot.forEach(doc => {
                const data = doc.data();
                const id = doc.id;
                
                if (data.category) categories.add(data.category);
                
                const date = data.date?.toDate ? data.date.toDate().toLocaleDateString() : 'Draft';
                
                const statusBadge = data.status === 'published' 
                    ? '<span style="background:#16a34a; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">Published</span>'
                    : '<span style="background:#94a3b8; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">Draft</span>';

                html += `
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding: 1rem; font-weight: 600;">${data.title}</td>
                        <td style="padding: 1rem;">${data.category || 'General'}</td>
                        <td style="padding: 1rem;">${statusBadge}</td>
                        <td style="padding: 1rem; color: #94a3b8;">${date}</td>
                        <td style="padding: 1rem; text-align: right;">
                            <button class="btn-edit-blog" data-id="${id}" style="background: transparent; color: #facc15; border: 1px solid #facc15; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer; margin-right: 0.5rem;">Edit</button>
                            <button class="btn-delete-blog" data-id="${id}" style="background: transparent; color: #ef4444; border: 1px solid #ef4444; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer;">Delete</button>
                        </td>
                    </tr>
                `;
            });
            tbody.innerHTML = html;
            
            const selectList = document.getElementById('blog-category-select');
            if (selectList) {
                const optionsHtml = Array.from(categories).map(c => `<option value="${c}" style="color: black;">${c}</option>`).join('');
                selectList.innerHTML = `
                    <option value="" style="color: black;">Select Category...</option>
                    ${optionsHtml}
                    <option value="_add_new_" style="color: black; font-weight: bold;">+ Add New Category</option>
                `;
            }

            // Attach listeners
            document.querySelectorAll('.btn-edit-blog').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const id = e.target.getAttribute('data-id');
                    await loadBlogForEdit(id, snapshot);
                });
            });

            document.querySelectorAll('.btn-delete-blog').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const id = e.target.getAttribute('data-id');
                    if (confirm('Are you sure you want to delete this blog?')) {
                        await deleteDoc(doc(db, 'blogs', id));
                        loadBlogs(); // refresh
                    }
                });
            });

        } catch (error) {
            console.error("Error loading blogs:", error);
            tbody.innerHTML = '<tr><td colspan="5" style="padding: 2rem; text-align: center; color: #ef4444;">Error loading blogs. Check console.</td></tr>';
        }
    }

    async function loadBlogForEdit(id, snapshot) {
        const docSnap = snapshot.docs.find(d => d.id === id);
        if (!docSnap) return;
        
        const data = docSnap.data();
        
        document.getElementById('editor-title').textContent = 'Edit Blog';
        document.getElementById('blog-id').value = id;
        document.getElementById('blog-title').value = data.title || '';
        document.getElementById('blog-excerpt').value = data.excerpt || '';
        document.getElementById('blog-status').value = data.status || 'draft';
        document.getElementById('blog-cover').value = data.coverImage || '';
        const categorySelect = document.getElementById('blog-category-select');
        const categoryNew = document.getElementById('blog-category-new');
        if (data.category && Array.from(categorySelect.options).some(o => o.value === data.category)) {
            categorySelect.value = data.category;
            categoryNew.style.display = 'none';
            categoryNew.value = '';
        } else if (data.category) {
            categorySelect.value = '_add_new_';
            categoryNew.style.display = 'block';
            categoryNew.value = data.category;
        } else {
            categorySelect.value = '';
            categoryNew.style.display = 'none';
            categoryNew.value = '';
        }
        document.getElementById('blog-tags').value = (data.tags || []).join(', ');
        document.getElementById('blog-author').value = data.author || 'EduRain Team';
        document.getElementById('blog-slug').value = data.slug || '';
        
        // Populate recommended courses checkboxes
        const recCourses = data.recommendedCourses || [];
        const courseCheckboxes = document.querySelectorAll('input[name="recommended-course-checkbox"]');
        courseCheckboxes.forEach(cb => {
            cb.checked = recCourses.includes(cb.value);
        });

        // Populate custom banner fields
        document.getElementById('blog-sidebar-banner-img').value = data.sidebarBannerImage || '';
        document.getElementById('blog-sidebar-banner-link').value = data.sidebarBannerLink || '';
        
        if (data.seo) {
            document.getElementById('seo-title').value = data.seo.metaTitle || '';
            document.getElementById('seo-desc').value = data.seo.metaDescription || '';
            document.getElementById('seo-keyword').value = data.seo.primaryKeyword || '';
            document.getElementById('seo-secondary-keyword').value = data.seo.secondaryKeyword || '';
        }

        // Show edit view
        document.getElementById('view-all-blogs').style.display = 'none';
        document.getElementById('view-add-blog').style.display = 'block';
        document.getElementById('nav-add-blog').style.background = '#16a34a';
        document.getElementById('nav-add-blog').style.color = 'white';
        document.getElementById('nav-all-blogs').style.background = 'transparent';
        document.getElementById('nav-all-blogs').style.color = '#cbd5e1';

        if(!quill) initQuill();
        quill.root.innerHTML = data.content || '';
        
        // Trigger SEO Analyzer update
        document.getElementById('seo-keyword').dispatchEvent(new Event('input'));
    }

    async function handleSaveBlog(e) {
        e.preventDefault();
        const btnSave = document.getElementById('btn-save-blog');
        const statusDiv = document.getElementById('save-status');
        
        btnSave.disabled = true;
        btnSave.textContent = 'Saving...';
        statusDiv.textContent = '';

        try {
            const id = document.getElementById('blog-id').value;
            const title = document.getElementById('blog-title').value;
            const excerpt = document.getElementById('blog-excerpt').value;
            const content = quill.root.innerHTML;
            const status = document.getElementById('blog-status').value;
            const coverImage = document.getElementById('blog-cover').value;
            
            let category = document.getElementById('blog-category-select').value;
            if (category === '_add_new_') {
                category = document.getElementById('blog-category-new').value.trim();
            }
            
            const tags = document.getElementById('blog-tags').value.split(',').map(t => t.trim()).filter(t => t);
            const author = document.getElementById('blog-author').value;
            
            let slug = document.getElementById('blog-slug').value.trim().toLowerCase();
            if (slug) {
                slug = slug.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            }
            
            const seo = {
                metaTitle: document.getElementById('seo-title').value,
                metaDescription: document.getElementById('seo-desc').value,
                primaryKeyword: document.getElementById('seo-keyword').value,
                secondaryKeyword: document.getElementById('seo-secondary-keyword').value
            };

            // Get recommended courses selected
            const recommendedCourses = Array.from(document.querySelectorAll('input[name="recommended-course-checkbox"]:checked')).map(cb => cb.value);

            // Get custom banner values
            const sidebarBannerImage = document.getElementById('blog-sidebar-banner-img').value.trim();
            const sidebarBannerLink = document.getElementById('blog-sidebar-banner-link').value.trim();

            const blogData = {
                title,
                slug,
                excerpt,
                content,
                status,
                coverImage,
                category,
                tags,
                author,
                seo,
                recommendedCourses,
                sidebarBannerImage,
                sidebarBannerLink,
                updatedAt: serverTimestamp()
            };

            if (id) {
                // Update
                const blogRef = doc(db, 'blogs', id);
                await updateDoc(blogRef, blogData);
                statusDiv.textContent = 'Blog updated successfully!';
                statusDiv.style.color = '#4ade80';
            } else {
                // Create
                blogData.date = serverTimestamp(); // only set creation date on create
                const blogsRef = collection(db, 'blogs');
                const newDoc = await addDoc(blogsRef, blogData);
                document.getElementById('blog-id').value = newDoc.id; // set id so next save is update
                document.getElementById('editor-title').textContent = 'Edit Blog';
                statusDiv.textContent = 'New blog published successfully!';
                statusDiv.style.color = '#4ade80';
            }
        } catch (error) {
            console.error("Save Error:", error);
            statusDiv.textContent = 'Error saving blog: ' + error.message;
            statusDiv.style.color = '#ef4444';
        }

        btnSave.disabled = false;
        btnSave.textContent = 'Save & Publish Blog';
    }

    // Cleanup when component unmounts (handled by router usually)
    return () => {
        unsubscribe();
        window.removeEventListener('resize', alignEditorHeight);
    };
}
