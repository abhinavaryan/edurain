import{a as e,d as t,g as n,i as r,l as i,o as a,p as o,r as s,s as c,t as l,u,v as d}from"./vendor-Boxe3_tG.js";import{n as f,r as p}from"./main-_mLCMi-V.js";var m=[{id:`b1`,title:`Top 10 Study Hacks for Competitive Exams in India (JEE & NEET)`,excerpt:`Discover proven strategies to maximize your retention, manage time efficiently, and ace competitive exams like JEE and NEET with confidence.`,author:`EduRain Editorial Team`,date:`2026-08-14T09:00:00Z`,category:`Study Tips`,tag:`Study Hacks`,readTime:`5 min read`,coverImage:`https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80`,isPublished:!0,content:[{type:`heading`,text:`1. Master the 80/20 Rule (Pareto Principle)`},{type:`paragraph`,text:`Focus 80% of your energy on the top 20% high-yield topics that carry the maximum weightage in JEE & NEET examinations. Analyze previous 10-year question papers (PYQs) to identify recurring patterns in Physics, Chemistry, and Mathematics/Biology.`},{type:`heading`,text:`2. Active Recall & Spaced Repetition`},{type:`paragraph`,text:`Passive reading leads to the illusion of competence. Test yourself regularly using flashcards and formula sheets without looking at solutions. Revisit complex topics at expanding intervals: Day 1, Day 3, Day 7, and Day 30.`},{type:`heading`,text:`3. The Pomodoro Technique with Focused Bursts`},{type:`paragraph`,text:`Study in uninterrupted 50-minute blocks followed by 10-minute restorative breaks. During focus sessions, keep your phone in another room or turn on Do Not Disturb.`},{type:`heading`,text:`4. Mock Test Analysis Strategy`},{type:`paragraph`,text:`Writing mock tests is only half the battle. Spend at least 2 hours analyzing every incorrect attempt. Categorize errors into conceptual mistakes, calculation slips, and time-pressure panics to systematically eliminate weaknesses.`},{type:`heading`,text:`5. Maintain Consistency and Physical Well-being`},{type:`paragraph`,text:`Consistency beats cramming every single time. Prioritize 7 to 8 hours of quality sleep to solidify memory consolidation, stay hydrated, and practice light mindfulness exercises daily.`}],keyTakeaways:[`Analyze PYQs to prioritize high-weightage topics.`,`Use active recall instead of passive reading.`,`Thoroughly analyze every mock test error.`,`Maintain 7-8 hours of sleep for optimal memory retention.`]}];function h(){return`
    <div id="er-blog-admin-wrapper" style="display: none; min-height: 100vh; background-color: #0d1f14; color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        
        <!-- Sidebar -->
        <aside style="width: 260px; background: #064e3b; position: fixed; height: 100vh; border-right: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column;">
            <div style="padding: 2rem 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
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
        <main style="margin-left: 260px; padding: 2rem 3rem; flex: 1;">
            
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
                    
                    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
                        <!-- Left Column: Content -->
                        <div>
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Blog Title *</label>
                                <input type="text" id="blog-title" required style="width: 100%; padding: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; font-size: 1.1rem; outline: none;">
                            </div>
                            
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Excerpt (Short description)</label>
                                <textarea id="blog-excerpt" rows="3" style="width: 100%; padding: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; font-size: 1rem; outline: none; resize: vertical;"></textarea>
                            </div>
                            
                            <div style="margin-bottom: 1.5rem;">
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Content *</label>
                                <div style="background: white; color: black; border-radius: 8px; overflow: hidden;">
                                    <div id="quill-editor" style="height: 400px;"></div>
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
                                <input type="text" id="blog-category" placeholder="e.g. Exam Prep" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">

                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Tags (Comma separated)</label>
                                <input type="text" id="blog-tags" placeholder="e.g. NEET, Strategy" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Author</label>
                                <input type="text" id="blog-author" value="EduRain Team" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                            </div>
                            
                            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                                <h3 style="margin-top: 0; color: #4ade80;">SEO Meta Data</h3>
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Meta Title</label>
                                <input type="text" id="seo-title" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Meta Description</label>
                                <textarea id="seo-desc" rows="3" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;"></textarea>
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Primary Keyword</label>
                                <input type="text" id="seo-keyword" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
                                
                                <label style="display: block; margin-bottom: 0.5rem; color: #cbd5e1; font-weight: 600;">Secondary Keyword</label>
                                <input type="text" id="seo-secondary-keyword" style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 8px; outline: none;">
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
    `}function g(){let h=document.getElementById(`er-blog-admin-wrapper`),g=document.getElementById(`er-admin-auth-loading`);if(!h)return;let _,v=n(f,e=>{e&&e.email===`edurainseowork@gmail.com`?(g.style.display=`none`,h.style.display=`flex`,y(),C()):window.location.href=`/blogadmin/login`});document.getElementById(`admin-logout-btn`)?.addEventListener(`click`,async()=>{await d(f),window.location.href=`/blogadmin/login`});function y(){let e=document.getElementById(`view-all-blogs`),t=document.getElementById(`view-add-blog`),n=document.getElementById(`nav-all-blogs`),r=document.getElementById(`nav-add-blog`),i=document.getElementById(`btn-create-new`);function a(i){i===`all`?(e.style.display=`block`,t.style.display=`none`,n.style.background=`#16a34a`,n.style.color=`white`,r.style.background=`transparent`,r.style.color=`#cbd5e1`,C()):(e.style.display=`none`,t.style.display=`block`,r.style.background=`#16a34a`,r.style.color=`white`,n.style.background=`transparent`,n.style.color=`#cbd5e1`,_||b())}n.addEventListener(`click`,()=>a(`all`)),r.addEventListener(`click`,()=>{S(),a(`add`)}),i.addEventListener(`click`,()=>{S(),a(`add`)});let c=document.getElementById(`btn-migrate-blogs`);c.addEventListener(`click`,async()=>{if(confirm(`Are you sure you want to migrate JSON blogs to Firestore? This will push all blogs from blogs.json to the database.`)){c.textContent=`Migrating...`,c.disabled=!0;try{let e=u(p,`blogs`);for(let t of m){let n={},r=``;r=Array.isArray(t.content)?t.content.map(e=>e.type===`heading`?`<h3 class="pw-article-h3">${e.text}</h3>`:`<p class="pw-article-p">${e.text}</p>`).join(``):t.content||`<p class="pw-article-p">${t.excerpt||``}</p>`,await s(e,{title:t.title||`Untitled`,excerpt:t.excerpt||``,content:r,status:t.isPublished===!1?`draft`:`published`,coverImage:t.coverImage||`/images/default-blog.jpg`,category:t.category||`General`,tags:t.tag?t.tag.split(`,`).map(e=>e.trim()):[],author:t.author||`EduRain Team`,date:t.date?new Date(t.date):o(),seo:n,updatedAt:o()})}alert(`Migration Complete! Blogs are now in Firestore.`),C()}catch(e){console.error(`Migration failed:`,e),alert(`Migration failed! `+e.message)}c.textContent=`Migrate JSON Blogs`,c.disabled=!1}}),document.getElementById(`admin-blog-form`).addEventListener(`submit`,T)}function b(){_=new l(`#quill-editor`,{theme:`snow`,modules:{toolbar:{container:[[{header:[1,2,3,4,5,6,!1]}],[`bold`,`italic`,`underline`,`strike`],[{color:[]},{background:[]}],[{list:`ordered`},{list:`bullet`}],[`link`,`image`,`video`],[`clean`]],handlers:{image:x}}}})}function x(){let e=prompt(`Please enter the Direct URL of the image (ending in .jpg or .png):`);if(e){let t=_.getSelection();_.insertEmbed(t.index,`image`,e)}}function S(){document.getElementById(`admin-blog-form`).reset(),document.getElementById(`blog-id`).value=``,document.getElementById(`editor-title`).textContent=`Create New Blog`,document.getElementById(`save-status`).textContent=``,_&&(_.root.innerHTML=``)}async function C(){let n=document.getElementById(`admin-blogs-list`);try{let i=await e(c(u(p,`blogs`),a(`date`,`desc`)));if(i.empty){n.innerHTML=`<tr><td colspan="5" style="padding: 2rem; text-align: center;">No blogs found. Create one!</td></tr>`;return}let o=``;i.forEach(e=>{let t=e.data(),n=e.id,r=t.date?.toDate?t.date.toDate().toLocaleDateString():`Draft`,i=t.status===`published`?`<span style="background:#16a34a; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">Published</span>`:`<span style="background:#94a3b8; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;">Draft</span>`;o+=`
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
                `}),n.innerHTML=o,document.querySelectorAll(`.btn-edit-blog`).forEach(e=>{e.addEventListener(`click`,async e=>{await w(e.target.getAttribute(`data-id`),i)})}),document.querySelectorAll(`.btn-delete-blog`).forEach(e=>{e.addEventListener(`click`,async e=>{let n=e.target.getAttribute(`data-id`);confirm(`Are you sure you want to delete this blog?`)&&(await r(t(p,`blogs`,n)),C())})})}catch(e){console.error(`Error loading blogs:`,e),n.innerHTML=`<tr><td colspan="5" style="padding: 2rem; text-align: center; color: #ef4444;">Error loading blogs. Check console.</td></tr>`}}async function w(e,t){let n=t.docs.find(t=>t.id===e);if(!n)return;let r=n.data();document.getElementById(`editor-title`).textContent=`Edit Blog`,document.getElementById(`blog-id`).value=e,document.getElementById(`blog-title`).value=r.title||``,document.getElementById(`blog-excerpt`).value=r.excerpt||``,document.getElementById(`blog-status`).value=r.status||`draft`,document.getElementById(`blog-cover`).value=r.coverImage||``,document.getElementById(`blog-category`).value=r.category||``,document.getElementById(`blog-tags`).value=(r.tags||[]).join(`, `),document.getElementById(`blog-author`).value=r.author||`EduRain Team`,r.seo&&(document.getElementById(`seo-title`).value=r.seo.metaTitle||``,document.getElementById(`seo-desc`).value=r.seo.metaDescription||``,document.getElementById(`seo-keyword`).value=r.seo.primaryKeyword||``,document.getElementById(`seo-secondary-keyword`).value=r.seo.secondaryKeyword||``),document.getElementById(`view-all-blogs`).style.display=`none`,document.getElementById(`view-add-blog`).style.display=`block`,document.getElementById(`nav-add-blog`).style.background=`#16a34a`,document.getElementById(`nav-add-blog`).style.color=`white`,document.getElementById(`nav-all-blogs`).style.background=`transparent`,document.getElementById(`nav-all-blogs`).style.color=`#cbd5e1`,_||b(),_.root.innerHTML=r.content||``}async function T(e){e.preventDefault();let n=document.getElementById(`btn-save-blog`),r=document.getElementById(`save-status`);n.disabled=!0,n.textContent=`Saving...`,r.textContent=``;try{let e=document.getElementById(`blog-id`).value,n={title:document.getElementById(`blog-title`).value,excerpt:document.getElementById(`blog-excerpt`).value,content:_.root.innerHTML,status:document.getElementById(`blog-status`).value,coverImage:document.getElementById(`blog-cover`).value,category:document.getElementById(`blog-category`).value,tags:document.getElementById(`blog-tags`).value.split(`,`).map(e=>e.trim()).filter(e=>e),author:document.getElementById(`blog-author`).value,seo:{metaTitle:document.getElementById(`seo-title`).value,metaDescription:document.getElementById(`seo-desc`).value,primaryKeyword:document.getElementById(`seo-keyword`).value,secondaryKeyword:document.getElementById(`seo-secondary-keyword`).value},updatedAt:o()};if(e)await i(t(p,`blogs`,e),n),r.textContent=`Blog updated successfully!`,r.style.color=`#4ade80`;else{n.date=o();let e=await s(u(p,`blogs`),n);document.getElementById(`blog-id`).value=e.id,document.getElementById(`editor-title`).textContent=`Edit Blog`,r.textContent=`New blog published successfully!`,r.style.color=`#4ade80`}}catch(e){console.error(`Save Error:`,e),r.textContent=`Error saving blog: `+e.message,r.style.color=`#ef4444`}n.disabled=!1,n.textContent=`Save & Publish Blog`}return()=>v()}export{g as initBlogAdmin,h as renderBlogAdmin};