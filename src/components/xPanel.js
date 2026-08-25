export function renderXPanel() {
  return `
    <div class="x-panel-wrapper" style="display: flex; min-height: 100vh; background: #0b0f19; color: #e2e8f0; font-family: var(--font-family); background-image: radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 40%), radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.1), transparent 40%);">
      
      <!-- LEFT SIDEBAR (Consistent but Darker) -->
      <aside class="dashboard-sidebar" style="width: 250px; background: rgba(0,0,0,0.6); backdrop-filter: blur(16px); border-right: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; padding: var(--space-md) 0;">
        <div style="padding: 0 var(--space-md); margin-bottom: var(--space-xl); text-align: center;">
          <img src="/images/logo.png" alt="EduRain" style="max-height: 40px; filter: drop-shadow(0 0 12px rgba(255,255,255,0.2));">
        </div>
        
        <nav class="sidebar-nav" style="display: flex; flex-direction: column; gap: var(--space-xs);">
          <a href="/study" class="sidebar-link" style="padding: var(--space-md) var(--space-lg); display: flex; align-items: center; gap: var(--space-sm); color: #94a3b8; text-decoration: none; transition: background 0.2s;">
            <i class="fas fa-book-open" style="width: 20px; text-align: center;"></i> Study
          </a>
          <a href="/study/x-panel" class="sidebar-link active" style="padding: var(--space-md) var(--space-lg); display: flex; align-items: center; justify-content: space-between; color: #fff; background: linear-gradient(90deg, rgba(99,102,241,0.2) 0%, transparent 100%); border-left: 3px solid #818cf8; text-decoration: none; font-weight: bold; box-shadow: inset 20px 0 20px -20px rgba(99,102,241,0.5);">
            <div style="display: flex; align-items: center; gap: var(--space-sm);">
              <i class="fas fa-cube" style="width: 20px; text-align: center; color: #818cf8; text-shadow: 0 0 10px #818cf8;"></i> X-PANEL
            </div>
          </a>
          <a href="#" class="sidebar-link" style="padding: var(--space-md) var(--space-lg); display: flex; align-items: center; gap: var(--space-sm); color: #94a3b8; text-decoration: none; transition: background 0.2s;">
            <i class="fas fa-swatchbook" style="width: 20px; text-align: center;"></i> Library
          </a>
        </nav>
      </aside>

      <!-- MAIN X-PANEL CONTENT -->
      <main class="x-panel-main" style="flex: 1; display: flex; flex-direction: column; position: relative; overflow: hidden;">
        
        <!-- HEADER -->
        <header class="x-header" style="height: 80px; padding: 0 var(--space-xl); display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.2); backdrop-filter: blur(10px);">
          <div class="x-title">
            <h1 style="font-size: 1.5rem; font-weight: 800; background: linear-gradient(to right, #818cf8, #34d399); -webkit-background-clip: text; color: transparent; letter-spacing: 1px;">X-PANEL <span style="font-size: 0.8rem; color: #94a3b8; font-weight: normal; letter-spacing: 0;">| ELITE AREA</span></h1>
          </div>
          
          <!-- Reward Points Widget -->
          <div class="reward-widget" style="display: flex; align-items: center; gap: 16px; background: rgba(0,0,0,0.4); border: 1px solid rgba(99,102,241,0.3); padding: 6px 16px; border-radius: 30px; box-shadow: 0 0 15px rgba(99,102,241,0.1);">
            <div style="display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-coins" style="color: #fbbf24; font-size: 1.2rem; filter: drop-shadow(0 0 5px rgba(251,191,36,0.5));"></i>
              <span style="font-weight: bold; font-size: 1.1rem; color: #fff;">120</span> <span style="color: #94a3b8; font-size: 0.8rem;">PTS</span>
            </div>
            <div style="width: 1px; height: 20px; background: rgba(255,255,255,0.1);"></div>
            <div style="color: #34d399; font-weight: bold; font-size: 0.9rem;">
              ₹ 2.40
            </div>
          </div>
        </header>

        <!-- DASHBOARD GRID -->
        <div class="x-grid-container" style="padding: var(--space-xl); overflow-y: auto; flex: 1; display: grid; grid-template-columns: 1fr 350px; gap: var(--space-xl);">
          
          <!-- LEFT COLUMN (Main Features) -->
          <div class="x-left-col" style="display: flex; flex-direction: column; gap: var(--space-xl);">
            
            <!-- CBT Test Pass -->
            <div class="glass-panel" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 16px; padding: var(--space-xl); position: relative; overflow: hidden;">
              <div style="position: absolute; top: 0; right: 0; width: 150px; height: 150px; background: radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%); transform: translate(50%, -50%);"></div>
              
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-md);">
                <div>
                  <div style="display: inline-block; background: rgba(16, 185, 129, 0.1); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; letter-spacing: 1px; margin-bottom: 12px;">TEST PASS</div>
                  <h2 style="font-size: 1.5rem; color: #fff; margin-bottom: 4px;">JEE Advanced Full Mock 01</h2>
                  <p style="color: #94a3b8; font-size: 0.9rem;">Computer Based Test (CBT) • 180 Minutes</p>
                </div>
                <div style="text-align: right;">
                  <div style="font-family: monospace; font-size: 1.8rem; font-weight: bold; color: #f87171; text-shadow: 0 0 10px rgba(248,113,113,0.3);">03:00:00</div>
                  <div style="color: #94a3b8; font-size: 0.75rem;">Strict Timer</div>
                </div>
              </div>

              <div style="display: flex; gap: 16px; margin-top: var(--space-lg);">
                <button style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(99,102,241,0.3); transition: transform 0.2s;">
                  <i class="fas fa-play" style="margin-right: 8px;"></i> Start Free Test
                </button>
                <button style="background: transparent; color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.4); padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.2s;">
                  <i class="fas fa-crown" style="margin-right: 8px;"></i> Buy Test Pass
                </button>
              </div>
            </div>

            <!-- AI Mentor Analytics -->
            <div class="glass-panel" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: var(--space-xl);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-lg);">
                <h3 style="font-size: 1.2rem; color: #fff; display: flex; align-items: center; gap: 12px;">
                  <i class="fas fa-robot" style="color: #60a5fa; font-size: 1.5rem; text-shadow: 0 0 10px rgba(96,165,250,0.4);"></i> AI Mentor Analysis
                </h3>
                <span style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; color: #94a3b8;">Locked: Full Report</span>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                <div style="background: rgba(0,0,0,0.3); padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.03);">
                  <div style="color: #94a3b8; font-size: 0.8rem; margin-bottom: 8px;">Avg. Time / Question</div>
                  <div style="color: #34d399; font-size: 1.4rem; font-weight: bold;">1m 42s</div>
                  <div style="font-size: 0.7rem; color: #10b981; margin-top: 4px;"><i class="fas fa-arrow-down"></i> 12s faster</div>
                </div>
                <div style="background: rgba(0,0,0,0.3); padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.03);">
                  <div style="color: #94a3b8; font-size: 0.8rem; margin-bottom: 8px;">Accuracy (Physics)</div>
                  <div style="color: #fff; font-size: 1.4rem; font-weight: bold;">76%</div>
                  <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; margin-top: 8px; overflow: hidden;"><div style="width: 76%; height: 100%; background: #60a5fa;"></div></div>
                </div>
                <div style="background: rgba(0,0,0,0.3); padding: 16px; border-radius: 12px; border: 1px dashed rgba(99,102,241,0.3); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s;">
                  <i class="fas fa-unlock" style="color: #818cf8; font-size: 1.2rem; margin-bottom: 8px;"></i>
                  <div style="color: #818cf8; font-size: 0.8rem; font-weight: bold;">Unlock Full Analysis</div>
                </div>
              </div>
            </div>

          </div>

          <!-- RIGHT COLUMN (Gamification) -->
          <div class="x-right-col" style="display: flex; flex-direction: column; gap: var(--space-xl);">
            
            <!-- Daily Streak & Rewards -->
            <div class="glass-panel" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: var(--space-lg);">
              <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: var(--space-md);"><i class="fas fa-fire" style="color: #ef4444; margin-right: 8px;"></i> Daily Streak</h3>
              
              <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; opacity: 0.5;">
                  <div style="width: 24px; height: 24px; border-radius: 50%; background: #34d399; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #000;"><i class="fas fa-check"></i></div>
                  <div style="font-size: 0.65rem;">Mon</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; opacity: 0.5;">
                  <div style="width: 24px; height: 24px; border-radius: 50%; background: #34d399; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #000;"><i class="fas fa-check"></i></div>
                  <div style="font-size: 0.65rem;">Tue</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; opacity: 0.5;">
                  <div style="width: 24px; height: 24px; border-radius: 50%; background: #34d399; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #000;"><i class="fas fa-check"></i></div>
                  <div style="font-size: 0.65rem;">Wed</div>
                </div>
                <!-- TODAY -->
                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                  <div style="width: 28px; height: 28px; border-radius: 50%; background: transparent; border: 2px solid #6366f1; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; color: #fff; box-shadow: 0 0 10px rgba(99,102,241,0.5);">4</div>
                  <div style="font-size: 0.65rem; color: #6366f1; font-weight: bold;">Thu</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                  <div style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #94a3b8;">5</div>
                  <div style="font-size: 0.65rem; color: #94a3b8;">Fri</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                  <div style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #94a3b8;">6</div>
                  <div style="font-size: 0.65rem; color: #94a3b8;">Sat</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                  <div style="width: 24px; height: 24px; border-radius: 50%; background: rgba(251, 191, 36, 0.2); border: 1px solid #fbbf24; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: #fbbf24;"><i class="fas fa-gift"></i></div>
                  <div style="font-size: 0.65rem; color: #fbbf24;">Sun</div>
                </div>
              </div>
              <p style="color: #94a3b8; font-size: 0.8rem; text-align: center; margin-top: 12px;">Log in for 3 more days to get a <strong>10 Point Bonus!</strong></p>
            </div>

            <!-- Spin The Wheel -->
            <div class="glass-panel" style="background: linear-gradient(180deg, rgba(30, 27, 75, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: var(--space-xl); text-align: center; position: relative;">
              <div style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 12px; font-size: 0.7rem; color: #cbd5e1;"><i class="fas fa-ticket-alt"></i> 1 Ticket</div>
              <h3 style="font-size: 1.2rem; color: #fff; margin-bottom: 8px;">Lucky Spin</h3>
              <p style="color: #94a3b8; font-size: 0.8rem; margin-bottom: 20px;">Win up to 500 Reward Points!</p>
              
              <div style="width: 140px; height: 140px; border-radius: 50%; border: 4px solid #8b5cf6; margin: 0 auto 20px; background: conic-gradient(#3b82f6 0deg 60deg, #8b5cf6 60deg 120deg, #ec4899 120deg 180deg, #f59e0b 180deg 240deg, #10b981 240deg 300deg, #6366f1 300deg 360deg); position: relative; box-shadow: 0 0 20px rgba(139,92,246,0.3);">
                <div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 20px solid #fff; z-index: 2;"></div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 30px; height: 30px; background: #fff; border-radius: 50%; z-index: 1;"></div>
              </div>
              
              <button style="background: #8b5cf6; color: white; border: none; padding: 10px 30px; border-radius: 20px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 10px rgba(139,92,246,0.4); text-transform: uppercase; letter-spacing: 1px;">Spin Now</button>
            </div>

            <!-- AIR Leaderboard -->
            <div class="glass-panel" style="background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: var(--space-lg);">
              <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between;">
                <span><i class="fas fa-trophy" style="color: #fbbf24; margin-right: 8px;"></i> Leaderboard</span>
                <span style="font-size: 0.75rem; color: #94a3b8; font-weight: normal;">JEE Mains Mock</span>
              </h3>
              
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <!-- Rank 1 -->
                <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(251,191,36,0.1); padding: 8px 12px; border-radius: 8px; border: 1px solid rgba(251,191,36,0.2);">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #fbbf24; color: #000; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem;">1</div>
                    <span style="color: #fff; font-size: 0.9rem;">Rahul Verma</span>
                  </div>
                  <span style="color: #fbbf24; font-weight: bold; font-size: 0.9rem;">290</span>
                </div>
                <!-- Rank 2 -->
                <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.02); padding: 8px 12px; border-radius: 8px;">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #cbd5e1; color: #000; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem;">2</div>
                    <span style="color: #cbd5e1; font-size: 0.9rem;">Neha Singh</span>
                  </div>
                  <span style="color: #94a3b8; font-weight: bold; font-size: 0.9rem;">285</span>
                </div>
                <!-- Rank 3 -->
                <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.02); padding: 8px 12px; border-radius: 8px;">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #b45309; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem;">3</div>
                    <span style="color: #cbd5e1; font-size: 0.9rem;">Aarav Patel</span>
                  </div>
                  <span style="color: #94a3b8; font-weight: bold; font-size: 0.9rem;">278</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  `;
}
