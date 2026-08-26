import { onAuthChange } from '../firebase/auth.js';

export function renderDashboard() {
  return `
    <div class="dashboard-wrapper" style="display: flex; min-height: 100vh; background: var(--charcoal); color: var(--text-primary); font-family: var(--font-family);">
      
      <!-- LEFT SIDEBAR -->
      <aside class="dashboard-sidebar" style="width: 250px; background: rgba(0,0,0,0.3); backdrop-filter: blur(10px); border-right: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; padding: var(--space-md) 0;">
        <div style="padding: 0 var(--space-md); margin-bottom: var(--space-xl); text-align: center;">
          <img src="images/logo.png" alt="EduRain" style="max-height: 40px; filter: drop-shadow(0 0 8px var(--primary-glow));">
        </div>
        
        <nav class="sidebar-nav" style="display: flex; flex-direction: column; gap: var(--space-xs);">
          <a href="/study" class="sidebar-link active" style="padding: var(--space-md) var(--space-lg); display: flex; align-items: center; gap: var(--space-sm); color: var(--accent); background: rgba(250,204,21,0.1); border-left: 3px solid var(--accent); text-decoration: none; font-weight: 600;">
            <i class="fas fa-book-open" style="width: 20px; text-align: center;"></i> Study
          </a>
          <a href="/study/x-panel" class="sidebar-link" style="padding: var(--space-md) var(--space-lg); display: flex; align-items: center; justify-content: space-between; color: var(--text-secondary); text-decoration: none; transition: background 0.2s;">
            <div style="display: flex; align-items: center; gap: var(--space-sm);">
              <i class="fas fa-cube" style="width: 20px; text-align: center;"></i> X-PANEL
            </div>
            <span style="background: var(--error); color: white; font-size: 0.65rem; padding: 2px 6px; border-radius: 12px; font-weight: bold; letter-spacing: 0.5px; animation: pulse-red 2s infinite;">NEW</span>
          </a>
          <a href="#" class="sidebar-link" style="padding: var(--space-md) var(--space-lg); display: flex; align-items: center; gap: var(--space-sm); color: var(--text-secondary); text-decoration: none; transition: background 0.2s;">
            <i class="fas fa-swatchbook" style="width: 20px; text-align: center;"></i> Library
          </a>
          
          <div style="margin: var(--space-md) var(--space-lg) var(--space-xs); color: var(--text-muted); font-size: 0.75rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">Study Packs</div>
          <a href="#" class="sidebar-link" style="padding: var(--space-md) var(--space-lg); display: flex; align-items: center; gap: var(--space-sm); color: var(--text-secondary); text-decoration: none; transition: background 0.2s;">
            <i class="fas fa-desktop" style="width: 20px; text-align: center;"></i> Batches
          </a>
          <a href="#" class="sidebar-link" style="padding: var(--space-md) var(--space-lg); display: flex; align-items: center; gap: var(--space-sm); color: var(--text-secondary); text-decoration: none; transition: background 0.2s;">
            <i class="fas fa-bolt" style="width: 20px; text-align: center;"></i> Power Batch
          </a>
          <a href="#" class="sidebar-link" style="padding: var(--space-md) var(--space-lg); display: flex; align-items: center; gap: var(--space-sm); color: var(--text-secondary); text-decoration: none; transition: background 0.2s;">
            <i class="fas fa-clipboard-list" style="width: 20px; text-align: center;"></i> Test Series
          </a>
          <a href="#" class="sidebar-link" style="padding: var(--space-md) var(--space-lg); display: flex; align-items: center; gap: var(--space-sm); color: var(--text-secondary); text-decoration: none; transition: background 0.2s;">
            <i class="fas fa-pencil-alt" style="width: 20px; text-align: center;"></i> My Test
          </a>
        </nav>
      </aside>

      <!-- MAIN CONTENT AREA -->
      <main class="dashboard-main" style="flex: 1; display: flex; flex-direction: column;">
        
        <!-- TOP NAVBAR -->
        <header class="dashboard-topbar" style="height: 70px; padding: 0 var(--space-xl); display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.1);">
          <div class="class-selector" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <span style="color: var(--accent);"><i class="fas fa-graduation-cap"></i></span>
            12th - IIT JEE
            <i class="fas fa-chevron-down" style="font-size: 0.7rem; color: var(--text-muted);"></i>
          </div>

          <div class="topbar-right" style="display: flex; align-items: center; gap: var(--space-lg);">
            <!-- Streak & XP -->
            <div style="display: flex; align-items: center; gap: var(--space-md); background: rgba(0,0,0,0.3); padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);">
              <div style="display: flex; align-items: center; gap: 6px; font-weight: bold; font-size: 0.9rem;">
                <span style="color: #ef4444;"><i class="fas fa-fire"></i></span> 0
              </div>
              <div style="width: 1px; height: 16px; background: rgba(255,255,255,0.2);"></div>
              <div style="display: flex; align-items: center; gap: 6px; font-weight: bold; font-size: 0.9rem;">
                <span style="color: #3b82f6;"><i class="fas fa-star"></i></span> XP <span style="color: var(--text-secondary);">0</span>
              </div>
            </div>

            <!-- Profile -->
            <div style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
              <span id="dashboard-user-name" style="font-weight: 600; font-size: 0.9rem; text-transform: uppercase;">Hi, Student</span>
              <img src="/images/avatar-placeholder.png" alt="Profile" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; background: var(--primary); border: 2px solid var(--accent);">
            </div>
          </div>
        </header>

        <!-- DASHBOARD SCROLLABLE CONTENT -->
        <div class="dashboard-content" style="padding: var(--space-xl); overflow-y: auto; flex: 1;">
          <h1 style="font-size: var(--fs-xl); margin-bottom: var(--space-md); font-weight: 600;">Study</h1>

          <!-- MY LEARNING SECTION -->
          <div class="glass-card" style="padding: var(--space-xl); border-radius: 16px; margin-bottom: var(--space-xl); background: rgba(255,255,255,0.02);">
            <h2 style="font-size: var(--fs-lg); margin-bottom: var(--space-lg);">My Learning</h2>
            
            <div class="learning-cards-wrapper" style="display: flex; gap: var(--space-md); overflow-x: auto; padding-bottom: 8px;">
              
              <!-- My Batches -->
              <div class="learning-card" style="flex: 1; min-width: 250px; background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 12px; padding: var(--space-md); transition: transform 0.2s, background 0.2s; cursor: pointer;">
                <div style="width: 40px; height: 40px; background: white; color: #4f46e5; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin-bottom: var(--space-sm);">
                  <i class="fas fa-book-open"></i>
                </div>
                <h3 style="font-size: 1.1rem; margin-bottom: 4px;">My Batches</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.4;">View list of the batches in which you are enrolled</p>
              </div>

              <!-- Recent Learning -->
              <div class="learning-card" style="flex: 1; min-width: 250px; background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px; padding: var(--space-md); transition: transform 0.2s, background 0.2s; cursor: pointer;">
                <div style="width: 40px; height: 40px; background: white; color: #d97706; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin-bottom: var(--space-sm);">
                  <i class="fas fa-history"></i>
                </div>
                <h3 style="font-size: 1.1rem; margin-bottom: 4px;">Recent Learning</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.4;">View your past learning history</p>
              </div>

              <!-- My Doubts -->
              <div class="learning-card" style="flex: 1; min-width: 250px; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: var(--space-md); transition: transform 0.2s, background 0.2s; cursor: pointer;">
                <div style="width: 40px; height: 40px; background: white; color: #059669; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin-bottom: var(--space-sm);">
                  <i class="fas fa-question"></i>
                </div>
                <h3 style="font-size: 1.1rem; margin-bottom: 4px;">My Doubts</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.4;">View the list of your asked doubts in the lectures</p>
              </div>

            </div>
          </div>

          <!-- STUDY RESOURCES (MOCK DATA) -->
          <div style="margin-top: var(--space-xl); margin-bottom: var(--space-xl);">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: var(--space-lg);">
              <h2 style="font-size: var(--fs-lg); font-weight: 600;">Study Resources</h2>
              <a href="#" style="color: var(--accent); font-size: 0.9rem; text-decoration: none; font-weight: 600;">View All</a>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: calc(var(--space-md) * 1.618);">
              
              <!-- Notes -->
              <div class="resource-card" style="background: rgba(255,255,255,0.05); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: var(--space-lg); transition: all 0.3s ease; cursor: pointer; display: flex; flex-direction: column; gap: var(--space-md); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: radial-gradient(circle, rgba(52, 211, 153, 0.2) 0%, transparent 70%); transform: translate(30%, -30%);"></div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div style="width: 48px; height: 48px; background: rgba(52, 211, 153, 0.1); color: #34d399; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; border: 1px solid rgba(52, 211, 153, 0.2);">
                    <i class="fas fa-file-pdf"></i>
                  </div>
                  <span style="background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: var(--text-secondary);">12 PDFs</span>
                </div>
                <div>
                  <h3 style="font-size: 1.1rem; margin-bottom: 4px; font-weight: 600;">Physics Notes</h3>
                  <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5;">Thermodynamics & Optics (Chapter 4-6)</p>
                </div>
                <div style="margin-top: auto; display: flex; align-items: center; gap: 8px; color: var(--accent); font-size: 0.9rem; font-weight: 600;">
                  <span>Open Notes</span> <i class="fas fa-arrow-right" style="font-size: 0.8rem; transition: transform 0.2s;"></i>
                </div>
              </div>

              <!-- E-Books -->
              <div class="resource-card" style="background: rgba(255,255,255,0.05); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: var(--space-lg); transition: all 0.3s ease; cursor: pointer; display: flex; flex-direction: column; gap: var(--space-md); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%); transform: translate(30%, -30%);"></div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div style="width: 48px; height: 48px; background: rgba(96, 165, 250, 0.1); color: #60a5fa; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; border: 1px solid rgba(96, 165, 250, 0.2);">
                    <i class="fas fa-book"></i>
                  </div>
                  <span style="background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: var(--text-secondary);">3 Books</span>
                </div>
                <div>
                  <h3 style="font-size: 1.1rem; margin-bottom: 4px; font-weight: 600;">Chemistry E-Books</h3>
                  <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5;">Organic Chemistry Vol. 1 & 2</p>
                </div>
                <div style="margin-top: auto; display: flex; align-items: center; gap: 8px; color: var(--accent); font-size: 0.9rem; font-weight: 600;">
                  <span>Read Now</span> <i class="fas fa-arrow-right" style="font-size: 0.8rem; transition: transform 0.2s;"></i>
                </div>
              </div>

              <!-- Mock Test -->
              <div class="resource-card" style="background: rgba(255,255,255,0.05); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: var(--space-lg); transition: all 0.3s ease; cursor: pointer; display: flex; flex-direction: column; gap: var(--space-md); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: radial-gradient(circle, rgba(244, 63, 94, 0.2) 0%, transparent 70%); transform: translate(30%, -30%);"></div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div style="width: 48px; height: 48px; background: rgba(244, 63, 94, 0.1); color: #f43f5e; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; border: 1px solid rgba(244, 63, 94, 0.2);">
                    <i class="fas fa-stopwatch"></i>
                  </div>
                  <span style="background: rgba(244, 63, 94, 0.2); padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #fecdd3; animation: pulse-red 2s infinite;">Live Now</span>
                </div>
                <div>
                  <h3 style="font-size: 1.1rem; margin-bottom: 4px; font-weight: 600;">Weekly Mock Test</h3>
                  <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5;">JEE Mains Full Syllabus Test #04</p>
                </div>
                <div style="margin-top: auto; display: flex; align-items: center; gap: 8px; color: var(--accent); font-size: 0.9rem; font-weight: 600;">
                  <span>Start Test</span> <i class="fas fa-arrow-right" style="font-size: 0.8rem; transition: transform 0.2s;"></i>
                </div>
              </div>

              <!-- Live Classes -->
              <div class="resource-card" style="background: rgba(255,255,255,0.05); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: var(--space-lg); transition: all 0.3s ease; cursor: pointer; display: flex; flex-direction: column; gap: var(--space-md); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%); transform: translate(30%, -30%);"></div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div style="width: 48px; height: 48px; background: rgba(167, 139, 250, 0.1); color: #a78bfa; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; border: 1px solid rgba(167, 139, 250, 0.2);">
                    <i class="fas fa-video"></i>
                  </div>
                  <span style="background: rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: var(--text-secondary);">In 2 hrs</span>
                </div>
                <div>
                  <h3 style="font-size: 1.1rem; margin-bottom: 4px; font-weight: 600;">Mathematics Live</h3>
                  <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5;">Calculus Integration Techniques</p>
                </div>
                <div style="margin-top: auto; display: flex; align-items: center; gap: 8px; color: var(--accent); font-size: 0.9rem; font-weight: 600;">
                  <span>Join Room</span> <i class="fas fa-arrow-right" style="font-size: 0.8rem; transition: transform 0.2s;"></i>
                </div>
              </div>

            </div>
          </div>

          <!-- BOOST YOUR LEARNING SECTION -->
          <h2 style="font-size: var(--fs-lg); margin-bottom: var(--space-md);">Boost Your Learning</h2>
          <div class="boost-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: var(--space-md);">
            
            <div class="glass-card" style="padding: var(--space-md); border-radius: 12px; display: flex; gap: 16px; align-items: center; background: linear-gradient(135deg, rgba(6,78,59,0.2), rgba(250,204,21,0.05)); border: 1px solid rgba(255,255,255,0.05);">
               <div style="width: 60px; height: 60px; background: rgba(0,0,0,0.3); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--accent);">
                 <i class="fas fa-chart-line"></i>
               </div>
               <div>
                 <h4 style="font-size: 1.05rem; margin-bottom: 4px;">Performance Analytics</h4>
                 <p style="color: var(--text-muted); font-size: 0.8rem;">Check your growth graph</p>
               </div>
            </div>

            <div class="glass-card" style="padding: var(--space-md); border-radius: 12px; display: flex; gap: 16px; align-items: center; background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(0,0,0,0.1)); border: 1px solid rgba(255,255,255,0.05);">
               <div style="width: 60px; height: 60px; background: rgba(0,0,0,0.3); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #a78bfa;">
                 <i class="fas fa-trophy"></i>
               </div>
               <div>
                 <h4 style="font-size: 1.05rem; margin-bottom: 4px;">All India Test Series</h4>
                 <p style="color: var(--text-muted); font-size: 0.8rem;">Compete globally</p>
               </div>
            </div>

          </div>

        </div>
      </main>

    </div>
    <style>
      .sidebar-link:hover:not(.active) {
        background: rgba(255,255,255,0.05);
      }
      .learning-card:hover {
        transform: translateY(-4px);
        background: rgba(255,255,255,0.03) !important;
      }
      .resource-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.4);
        border-color: rgba(250,204,21,0.4) !important;
        background: rgba(255,255,255,0.08) !important;
      }
      .resource-card:hover .fa-arrow-right {
        transform: translateX(5px);
      }
      @keyframes pulse-red {
        0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
        70% { box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
        100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
      }
    </style>
  `;
}

export function initDashboard() {
  onAuthChange((user) => {
    if (user) {
      const nameEl = document.getElementById('dashboard-user-name');
      if (nameEl) {
        nameEl.textContent = 'Hi, ' + (user.displayName || user.email.split('@')[0]);
      }
    }
  });
}
