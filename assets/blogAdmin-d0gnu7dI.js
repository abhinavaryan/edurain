import{a as e,d as t,g as n,i as r,l as i,o as a,p as o,r as s,s as c,t as l,u,v as d}from"./vendor-Boxe3_tG.js";import{n as f,r as p}from"./main-PDJwojVT.js";import{t as m}from"./courses-BD523hjT.js";var h=[{id:`b1`,title:`Top 10 Study Hacks for Competitive Exams in India (JEE & NEET)`,excerpt:`Discover proven strategies to maximize your retention, manage time efficiently, and ace competitive exams like JEE and NEET with confidence.`,author:`EduRain Editorial Team`,date:`2026-08-14T09:00:00Z`,category:`Study Tips`,tag:`Study Hacks`,readTime:`5 min read`,coverImage:`https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80`,isPublished:!0,content:[{type:`heading`,text:`1. Master the 80/20 Rule (Pareto Principle)`},{type:`paragraph`,text:`Focus 80% of your energy on the top 20% high-yield topics that carry the maximum weightage in JEE & NEET examinations. Analyze previous 10-year question papers (PYQs) to identify recurring patterns in Physics, Chemistry, and Mathematics/Biology.`},{type:`heading`,text:`2. Active Recall & Spaced Repetition`},{type:`paragraph`,text:`Passive reading leads to the illusion of competence. Test yourself regularly using flashcards and formula sheets without looking at solutions. Revisit complex topics at expanding intervals: Day 1, Day 3, Day 7, and Day 30.`},{type:`heading`,text:`3. The Pomodoro Technique with Focused Bursts`},{type:`paragraph`,text:`Study in uninterrupted 50-minute blocks followed by 10-minute restorative breaks. During focus sessions, keep your phone in another room or turn on Do Not Disturb.`},{type:`heading`,text:`4. Mock Test Analysis Strategy`},{type:`paragraph`,text:`Writing mock tests is only half the battle. Spend at least 2 hours analyzing every incorrect attempt. Categorize errors into conceptual mistakes, calculation slips, and time-pressure panics to systematically eliminate weaknesses.`},{type:`heading`,text:`5. Maintain Consistency and Physical Well-being`},{type:`paragraph`,text:`Consistency beats cramming every single time. Prioritize 7 to 8 hours of quality sleep to solidify memory consolidation, stay hydrated, and practice light mindfulness exercises daily.`}],keyTakeaways:[`Analyze PYQs to prioritize high-weightage topics.`,`Use active recall instead of passive reading.`,`Thoroughly analyze every mock test error.`,`Maintain 7-8 hours of sleep for optimal memory retention.`]}];function g(){return`
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
                                    ${m.map(e=>`
                                        <label style="display: flex; align-items: center; gap: 0.5rem; color: #cbd5e1; cursor: pointer; font-size: 0.9rem;">
                                            <input type="checkbox" name="recommended-course-checkbox" value="${e.id}" style="cursor: pointer;">
                                            <span>[${e.category}] ${e.title}</span>
                                        </label>
                                    `).join(``)}
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
    `}function _(){let m=document.getElementById(`er-blog-admin-wrapper`),g=document.getElementById(`er-admin-auth-loading`);if(!m)return;let _,v=n(f,e=>{e&&e.email===`edurainseowork@gmail.com`?(g.style.display=`none`,m.style.display=`flex`,y(),T()):window.location.href=`/blogadmin/login`});document.getElementById(`admin-logout-btn`)?.addEventListener(`click`,async()=>{await d(f),window.location.href=`/blogadmin/login`});function y(){let e=!0,t=document.getElementById(`admin-sidebar-toggle`),n=document.getElementById(`admin-sidebar`),r=document.getElementById(`admin-main-content`);t.addEventListener(`click`,()=>{e=!e,e?(n.style.transform=`translateX(0)`,r.style.marginLeft=`260px`):(n.style.transform=`translateX(-100%)`,r.style.marginLeft=`0`)});function i(){e=!1,n.style.transform=`translateX(-100%)`,r.style.marginLeft=`0`}let a=document.getElementById(`view-all-blogs`),c=document.getElementById(`view-add-blog`),l=document.getElementById(`nav-all-blogs`),d=document.getElementById(`nav-add-blog`),f=document.getElementById(`btn-create-new`);function m(e){e===`all`?(a.style.display=`block`,c.style.display=`none`,l.style.background=`#16a34a`,l.style.color=`white`,d.style.background=`transparent`,d.style.color=`#cbd5e1`,T()):(a.style.display=`none`,c.style.display=`block`,d.style.background=`#16a34a`,d.style.color=`white`,l.style.background=`transparent`,l.style.color=`#cbd5e1`,_||b())}l.addEventListener(`click`,()=>{m(`all`),i()}),d.addEventListener(`click`,()=>{w(),m(`add`),i()}),f.addEventListener(`click`,()=>{w(),m(`add`)});let g=document.getElementById(`btn-migrate-blogs`);g.addEventListener(`click`,async()=>{if(confirm(`Are you sure you want to migrate JSON blogs to Firestore? This will push all blogs from blogs.json to the database.`)){g.textContent=`Migrating...`,g.disabled=!0;try{let e=u(p,`blogs`);for(let t of h){let n={},r=``;r=Array.isArray(t.content)?t.content.map(e=>e.type===`heading`?`<h3 class="pw-article-h3">${e.text}</h3>`:`<p class="pw-article-p">${e.text}</p>`).join(``):t.content||`<p class="pw-article-p">${t.excerpt||``}</p>`,await s(e,{title:t.title||`Untitled`,excerpt:t.excerpt||``,content:r,status:t.isPublished===!1?`draft`:`published`,coverImage:t.coverImage||`/images/default-blog.jpg`,category:t.category||`General`,tags:t.tag?t.tag.split(`,`).map(e=>e.trim()):[],author:t.author||`EduRain Team`,date:t.date?new Date(t.date):o(),seo:n,updatedAt:o()})}alert(`Migration Complete! Blogs are now in Firestore.`),T()}catch(e){console.error(`Migration failed:`,e),alert(`Migration failed! `+e.message)}g.textContent=`Migrate JSON Blogs`,g.disabled=!1}});let v=document.getElementById(`blog-category-select`),y=document.getElementById(`blog-category-new`);v.addEventListener(`change`,e=>{e.target.value===`_add_new_`?(y.style.display=`block`,y.focus()):y.style.display=`none`,C()}),document.getElementById(`admin-blog-form`).addEventListener(`submit`,D),_||b(),S()}function b(){let e=l.import(`attributors/style/align`);l.register(e,!0),_=new l(`#quill-editor`,{theme:`snow`,modules:{toolbar:{container:[[{header:[1,2,3,4,5,6,!1]}],[`bold`,`italic`,`underline`,`strike`],[{color:[]},{background:[]}],[{align:[]}],[{list:`ordered`},{list:`bullet`}],[`link`,`image`,`video`],[`clean`]],handlers:{image:x}},clipboard:{matchVisual:!1}}})}function x(){let e=prompt(`Please enter the Direct URL of the image (ending in .jpg or .png):`);if(e){let t=_.getSelection();_.insertEmbed(t.index,`image`,e)}}function S(){let e=document.getElementById(`blog-title`),t=document.getElementById(`seo-title`),n=document.getElementById(`seo-desc`),r=document.getElementById(`seo-keyword`),i=document.getElementById(`seo-grade-badge`),a=document.getElementById(`seo-score-text`),o=document.getElementById(`seo-bar`),s=document.getElementById(`seo-checklist`);function c(){let c=r.value.trim().toLowerCase();if(!c){s.innerHTML=`<div style="color: #94a3b8; font-style: italic;">Start typing and enter a Primary Keyword to see SEO analysis.</div>`,i.textContent=`N/A`,i.style.background=`#94a3b8`,o.style.width=`0%`,a.textContent=`0 / 100`;return}let l=(t.value||e.value||``).trim(),u=(n.value||``).trim(),d=(document.getElementById(`blog-slug`).value||``).trim().toLowerCase(),f=(document.getElementById(`seo-secondary-keyword`).value||``).trim().toLowerCase(),p=_.getText()||``,m=_.root.innerHTML||``,h=0,g=``,v=e=>e?`<span style="color:#16a34a; font-weight:bold; width: 20px; display:inline-block;">✓</span>`:`<span style="color:#ef4444; font-weight:bold; width: 20px; display:inline-block;">✗</span>`;g+=`<strong style="color:white; margin-top:0.5rem; display:block;">Page Title</strong>`;let y=l.length>=50&&l.length<=60;h+=+!!y,g+=`<div>${v(y)} The Page Title length is strictly optimal (50-60 chars). Current: ${l.length}</div>`;let b=l.toLowerCase().includes(c);h+=+!!b,g+=`<div>${v(b)} The focus keyword appears in the Page Title</div>`;let x=l.toLowerCase().split(/\\s+/).slice(0,3).join(` `).includes(c.split(/\\s+/)[0]);h+=+!!x,g+=`<div>${v(x)} Focus keyword starts within the first 3 words of the Title.</div>`;let S=[`best`,`ultimate`,`guide`,`secret`,`proven`,`top`,`how to`,`easy`,`simple`,`fast`,`complete`,`essential`].some(e=>l.toLowerCase().includes(e));h+=+!!S,g+=`<div>${v(S)} Title contains a Power Word (e.g., Best, Ultimate, Guide).</div>`;let C=/\\d/.test(l);h+=+!!C,g+=`<div>${v(C)} Title contains a Number.</div>`,g+=`<strong style="color:white; margin-top:0.5rem; display:block;">Meta Description & URL</strong>`;let w=u.length>=120&&u.length<=160;h+=+!!w,g+=`<div>${v(w)} The Meta Description length is optimal (120-160 chars). Current: ${u.length}</div>`;let T=u.toLowerCase().includes(c);h+=+!!T,g+=`<div>${v(T)} The focus keyword appears in the Meta Description</div>`;let E=d.length>0&&d.includes(c.replace(/\\s+/g,`-`));h+=+!!E,g+=`<div>${v(E)} The custom URL slug contains the focus keyword.</div>`;let D=d.length>0&&d.length<=60;h+=+!!D,g+=`<div>${v(D)} URL slug is short and concise (under 60 chars).</div>`,g+=`<strong style="color:white; margin-top:0.5rem; display:block;">Content & Readability</strong>`;let O=p.trim().split(/\\s+/).filter(e=>e.length>0),k=O.length,A=k>=800;h+=+!!A,g+=`<div>${v(A)} The text contains ${k} words (strict min 800 words for deep SEO).</div>`;let j=O.slice(0,100).join(` `).toLowerCase().includes(c);h+=+!!j,g+=`<div>${v(j)} The focus keyword appears in the first 100 words (introduction).</div>`;let M=document.createElement(`div`);M.innerHTML=m;let N=M.querySelectorAll(`h1, h2, h3, h4, h5, h6`),P=Array.from(N).some(e=>e.textContent.toLowerCase().includes(c));h+=+!!P,g+=`<div>${v(P)} The focus keyword is used in at least one subheading (H2, H3, etc.).</div>`;let F=new RegExp(c,`gi`),I=(p.match(F)||[]).length,L=k>0?(I/k*100).toFixed(2):0,R=L>=.75&&L<=1.5;h+=+!!R,g+=`<div>${v(R)} Strict keyword density is ${L}% (Target: 0.75% - 1.5%). Overstuffing penalizes.</div>`;let z=f.length>0&&p.toLowerCase().includes(f);h+=+!!z,g+=`<div>${v(z)} Secondary keyword is present in the content.</div>`;let B=M.querySelectorAll(`p`),V=B.length>0&&Array.from(B).every(e=>e.textContent.split(/\\s+/).length<=150);h+=+!!V,g+=`<div>${v(V)} High readability: No single paragraph exceeds 150 words.</div>`,g+=`<strong style="color:white; margin-top:0.5rem; display:block;">Media & Links</strong>`;let H=m.includes(`<img`);h+=+!!H,g+=`<div>${v(H)} Content contains at least one image/media.</div>`;let U=m.includes(`<a `);h+=+!!U,g+=`<div>${v(U)} Content contains an outbound or internal hyperlink.</div>`,s.innerHTML=g;let W=Math.round(h/17*100);a.textContent=`${W} / 100`,o.style.width=`${W}%`,W<50?(o.style.background=`#ef4444`,i.textContent=`Low`,i.style.background=`#ef4444`):W<85?(o.style.background=`#facc15`,i.textContent=`Medium`,i.style.background=`#eab308`):(o.style.background=`#16a34a`,i.textContent=`High`,i.style.background=`#16a34a`)}let l=()=>{c(),C()};e.addEventListener(`input`,l),t.addEventListener(`input`,l),n.addEventListener(`input`,l),r.addEventListener(`input`,l),_&&_.on(`text-change`,l),window.addEventListener(`resize`,C),l()}function C(){let e=document.getElementById(`btn-save-blog`)?.parentElement,t=document.getElementById(`quill-editor`);!e||!t||requestAnimationFrame(()=>{let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.bottom-r.top;if(i>400){t.style.maxHeight=`${i}px`;let e=t.querySelector(`.ql-editor`);e&&(e.style.maxHeight=`${i-50}px`,e.style.overflowY=`auto`)}})}function w(){document.getElementById(`admin-blog-form`).reset(),document.getElementById(`blog-id`).value=``,document.getElementById(`editor-title`).textContent=`Create New Blog`,document.getElementById(`save-status`).textContent=``,document.getElementById(`blog-category-select`).value=``,document.getElementById(`blog-category-new`).value=``,document.getElementById(`blog-category-new`).style.display=`none`,document.querySelectorAll(`input[name="recommended-course-checkbox"]`).forEach(e=>e.checked=!1),document.getElementById(`blog-sidebar-banner-img`).value=``,document.getElementById(`blog-sidebar-banner-link`).value=``,_&&(_.root.innerHTML=``)}async function T(){let n=document.getElementById(`admin-blogs-list`);try{let i=await e(c(u(p,`blogs`),a(`date`,`desc`)));if(i.empty){n.innerHTML=`<tr><td colspan="5" style="padding: 2rem; text-align: center;">No blogs found. Create one!</td></tr>`;return}let o=``,s=new Set;i.forEach(e=>{let t=e.data(),n=e.id;t.category&&s.add(t.category);let r=t.date?.toDate?t.date.toDate().toLocaleDateString():`Draft`,i=t.status===`published`?`<span style="background:#16a34a; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">Published</span>`:`<span style="background:#94a3b8; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">Draft</span>`;o+=`
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <td style="padding: 1rem; font-weight: 600;">${t.title}</td>
                        <td style="padding: 1rem;">${t.category||`General`}</td>
                        <td style="padding: 1rem;">${i}</td>
                        <td style="padding: 1rem; color: #94a3b8;">${r}</td>
                        <td style="padding: 1rem; text-align: right;">
                            <button class="btn-edit-blog" data-id="${n}" style="background: transparent; color: #facc15; border: 1px solid #facc15; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer; margin-right: 0.5rem;">Edit</button>
                            <button class="btn-delete-blog" data-id="${n}" style="background: transparent; color: #ef4444; border: 1px solid #ef4444; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer;">Delete</button>
                        </td>
                    </tr>
                `}),n.innerHTML=o;let l=document.getElementById(`blog-category-select`);l&&(l.innerHTML=`
                    <option value="" style="color: black;">Select Category...</option>
                    ${Array.from(s).map(e=>`<option value="${e}" style="color: black;">${e}</option>`).join(``)}
                    <option value="_add_new_" style="color: black; font-weight: bold;">+ Add New Category</option>
                `),document.querySelectorAll(`.btn-edit-blog`).forEach(e=>{e.addEventListener(`click`,async e=>{await E(e.target.getAttribute(`data-id`),i)})}),document.querySelectorAll(`.btn-delete-blog`).forEach(e=>{e.addEventListener(`click`,async e=>{let n=e.target.getAttribute(`data-id`);confirm(`Are you sure you want to delete this blog?`)&&(await r(t(p,`blogs`,n)),T())})})}catch(e){console.error(`Error loading blogs:`,e),n.innerHTML=`<tr><td colspan="5" style="padding: 2rem; text-align: center; color: #ef4444;">Error loading blogs. Check console.</td></tr>`}}async function E(e,t){let n=t.docs.find(t=>t.id===e);if(!n)return;let r=n.data();document.getElementById(`editor-title`).textContent=`Edit Blog`,document.getElementById(`blog-id`).value=e,document.getElementById(`blog-title`).value=r.title||``,document.getElementById(`blog-excerpt`).value=r.excerpt||``,document.getElementById(`blog-status`).value=r.status||`draft`,document.getElementById(`blog-cover`).value=r.coverImage||``;let i=document.getElementById(`blog-category-select`),a=document.getElementById(`blog-category-new`);r.category&&Array.from(i.options).some(e=>e.value===r.category)?(i.value=r.category,a.style.display=`none`,a.value=``):r.category?(i.value=`_add_new_`,a.style.display=`block`,a.value=r.category):(i.value=``,a.style.display=`none`,a.value=``),document.getElementById(`blog-tags`).value=(r.tags||[]).join(`, `),document.getElementById(`blog-author`).value=r.author||`EduRain Team`,document.getElementById(`blog-slug`).value=r.slug||``;let o=r.recommendedCourses||[];document.querySelectorAll(`input[name="recommended-course-checkbox"]`).forEach(e=>{e.checked=o.includes(e.value)}),document.getElementById(`blog-sidebar-banner-img`).value=r.sidebarBannerImage||``,document.getElementById(`blog-sidebar-banner-link`).value=r.sidebarBannerLink||``,r.seo&&(document.getElementById(`seo-title`).value=r.seo.metaTitle||``,document.getElementById(`seo-desc`).value=r.seo.metaDescription||``,document.getElementById(`seo-keyword`).value=r.seo.primaryKeyword||``,document.getElementById(`seo-secondary-keyword`).value=r.seo.secondaryKeyword||``),document.getElementById(`view-all-blogs`).style.display=`none`,document.getElementById(`view-add-blog`).style.display=`block`,document.getElementById(`nav-add-blog`).style.background=`#16a34a`,document.getElementById(`nav-add-blog`).style.color=`white`,document.getElementById(`nav-all-blogs`).style.background=`transparent`,document.getElementById(`nav-all-blogs`).style.color=`#cbd5e1`,_||b(),_.root.innerHTML=r.content||``,document.getElementById(`seo-keyword`).dispatchEvent(new Event(`input`))}async function D(e){e.preventDefault();let n=document.getElementById(`btn-save-blog`),r=document.getElementById(`save-status`);n.disabled=!0,n.textContent=`Saving...`,r.textContent=``;try{let e=document.getElementById(`blog-id`).value,n=document.getElementById(`blog-title`).value,a=document.getElementById(`blog-excerpt`).value,c=_.root.innerHTML,l=document.getElementById(`blog-status`).value,d=document.getElementById(`blog-cover`).value,f=document.getElementById(`blog-category-select`).value;f===`_add_new_`&&(f=document.getElementById(`blog-category-new`).value.trim());let m=document.getElementById(`blog-tags`).value.split(`,`).map(e=>e.trim()).filter(e=>e),h=document.getElementById(`blog-author`).value,g=document.getElementById(`blog-slug`).value.trim().toLowerCase();g&&=g.replace(/[^a-z0-9]+/g,`-`).replace(/(^-|-$)/g,``);let v={metaTitle:document.getElementById(`seo-title`).value,metaDescription:document.getElementById(`seo-desc`).value,primaryKeyword:document.getElementById(`seo-keyword`).value,secondaryKeyword:document.getElementById(`seo-secondary-keyword`).value},y=Array.from(document.querySelectorAll(`input[name="recommended-course-checkbox"]:checked`)).map(e=>e.value),b=document.getElementById(`blog-sidebar-banner-img`).value.trim(),x=document.getElementById(`blog-sidebar-banner-link`).value.trim(),S={title:n,slug:g,excerpt:a,content:c,status:l,coverImage:d,category:f,tags:m,author:h,seo:v,recommendedCourses:y,sidebarBannerImage:b,sidebarBannerLink:x,updatedAt:o()};if(e)await i(t(p,`blogs`,e),S),r.textContent=`Blog updated successfully!`,r.style.color=`#4ade80`;else{S.date=o();let e=await s(u(p,`blogs`),S);document.getElementById(`blog-id`).value=e.id,document.getElementById(`editor-title`).textContent=`Edit Blog`,r.textContent=`New blog published successfully!`,r.style.color=`#4ade80`}}catch(e){console.error(`Save Error:`,e),r.textContent=`Error saving blog: `+e.message,r.style.color=`#ef4444`}n.disabled=!1,n.textContent=`Save & Publish Blog`}return()=>{v(),window.removeEventListener(`resize`,C)}}export{_ as initBlogAdmin,g as renderBlogAdmin};