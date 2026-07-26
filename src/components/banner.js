export function renderBanner() {
    return `
    <!-- ═══ SECTION A: HERO AUTO-SCROLL BANNER ═══ -->
    <section id="er-hero-banner" style="position:relative;width:100%;overflow:hidden;background:#0e3a24;">

      <div id="er-slider-track" style="display:flex;transition:transform 0.7s cubic-bezier(0.4,0,0.2,1);will-change:transform;">

        <!-- SLIDE 1 — PROMOTIONAL SALE BANNER (reference image style) -->
        <a href="#courses" class="er-slide" style="position:relative;flex-shrink:0;width:100%;display:block;aspect-ratio:4096/773;text-decoration:none;">
          <div style="position:absolute;inset:0;background:linear-gradient(105deg,#064e3b 0%,#065f46 30%,#047857 70%,#059669 100%);display:flex;align-items:stretch;overflow:hidden;">

            <!-- Decorative diamonds – top-left -->
            <div style="position:absolute;top:-18px;left:-18px;width:80px;height:80px;background:rgba(250,204,21,0.18);transform:rotate(45deg);border-radius:6px;"></div>
            <div style="position:absolute;top:8px;left:8px;width:48px;height:48px;background:rgba(250,204,21,0.12);transform:rotate(45deg);border-radius:4px;"></div>
            <div style="position:absolute;bottom:-18px;left:60px;width:60px;height:60px;background:rgba(255,255,255,0.07);transform:rotate(45deg);border-radius:5px;"></div>

            <!-- Decorative diamonds – top-right -->
            <div style="position:absolute;top:-18px;right:-18px;width:80px;height:80px;background:rgba(250,204,21,0.18);transform:rotate(45deg);border-radius:6px;"></div>
            <div style="position:absolute;top:8px;right:8px;width:48px;height:48px;background:rgba(250,204,21,0.12);transform:rotate(45deg);border-radius:4px;"></div>
            <div style="position:absolute;bottom:-18px;right:60px;width:60px;height:60px;background:rgba(255,255,255,0.07);transform:rotate(45deg);border-radius:5px;"></div>

            <!-- Water-drop texture dots -->
            <div style="position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px);background-size:32px 32px;pointer-events:none;"></div>

            <!-- ── COLUMN 1: SALE BRANDING (left ~28%) ── -->
            <div style="width:28%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:5% 2%;position:relative;z-index:2;">
              <!-- MEGA SALE logo block -->
              <div style="text-align:center;line-height:1;">
                <div style="font-size:clamp(2rem,5vw,4.2rem);font-weight:900;color:#fff;letter-spacing:-1px;text-shadow:0 4px 16px rgba(0,0,0,0.4);font-style:italic;display:flex;align-items:center;gap:4px;">
                  <span>MEGA</span>
                </div>
                <div style="font-size:clamp(2.5rem,6vw,5rem);font-weight:900;color:#FACC15;letter-spacing:-2px;text-shadow:0 4px 20px rgba(250,204,21,0.4);font-style:italic;display:flex;align-items:center;gap:6px;line-height:0.9;">
                  <span>⚡</span><span>SALE</span>
                </div>
              </div>
              <!-- "Is Live Now!" tag -->
              <div style="margin-top:8px;background:#FACC15;color:#064e3b;font-size:clamp(0.6rem,1.2vw,0.9rem);font-weight:800;padding:4px 14px;border-radius:4px;letter-spacing:0.04em;text-transform:uppercase;">
                Is Live Now! 🎉
              </div>
            </div>

            <!-- Vertical divider 1 -->
            <div style="width:2px;background:linear-gradient(to bottom,transparent,rgba(255,255,255,0.25),transparent);margin:8% 0;flex-shrink:0;"></div>

            <!-- ── COLUMN 2: COURSE OFFER (center ~42%) ── -->
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:5% 4%;position:relative;z-index:2;gap:6px;">
              <!-- Course name -->
              <div style="font-size:clamp(1rem,2.2vw,1.7rem);font-weight:800;color:#fff;letter-spacing:0.01em;text-align:center;">
                Victory Batch 2.0 — 2027
              </div>
              <!-- Sub label -->
              <div style="font-size:clamp(0.65rem,1.3vw,0.95rem);color:#a7f3d0;font-weight:500;text-align:center;">
                For JEE &amp; NEET Dropper Aspirants
              </div>
              <!-- Divider line with text -->
              <div style="display:flex;align-items:center;gap:10px;width:80%;margin:4px 0;">
                <div style="flex:1;height:1.5px;background:linear-gradient(to right,transparent,#FACC15);"></div>
                <span style="color:#FACC15;font-size:clamp(0.6rem,1vw,0.8rem);font-weight:700;white-space:nowrap;">✦ Get Flat 40% Off ✦</span>
                <div style="flex:1;height:1.5px;background:linear-gradient(to left,transparent,#FACC15);"></div>
              </div>
              <!-- Batch name highlight -->
              <div style="font-size:clamp(1.1rem,2.5vw,2rem);font-weight:900;color:#FACC15;letter-spacing:0.02em;text-align:center;text-shadow:0 2px 12px rgba(250,204,21,0.35);">
                Victory 2027
              </div>
            </div>

            <!-- Vertical divider 2 -->
            <div style="width:2px;background:linear-gradient(to bottom,transparent,rgba(255,255,255,0.25),transparent);margin:8% 0;flex-shrink:0;"></div>

            <!-- ── COLUMN 3: PRICE + CTA (right ~28%) ── -->
            <div style="width:28%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:5% 3%;position:relative;z-index:2;gap:10px;">
              <!-- Price tag -->
              <div style="text-align:center;">
                <div style="font-size:clamp(0.6rem,1.1vw,0.85rem);color:#a7f3d0;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:4px;">
                  Only At:–
                </div>
                <div style="font-size:clamp(1.4rem,3vw,2.4rem);font-weight:900;color:#fff;letter-spacing:-0.5px;">
                  ₹<span style="color:#FACC15;">4,999</span><span style="font-size:0.6em;color:#a7f3d0;">/–</span>
                </div>
                <div style="font-size:clamp(0.55rem,0.9vw,0.75rem);color:#a7f3d0;text-decoration:line-through;margin-top:2px;">
                  M.R.P. ₹8,999/-
                </div>
              </div>
              <!-- CTA Button -->
              <a href="#courses" style="display:inline-block;background:#FACC15;color:#064e3b;font-weight:800;font-size:clamp(0.75rem,1.5vw,1.1rem);padding:clamp(8px,1.5vw,14px) clamp(20px,3vw,36px);border-radius:999px;box-shadow:0 6px 24px rgba(250,204,21,0.5);letter-spacing:0.02em;text-decoration:none;transition:transform 0.2s,box-shadow 0.2s;white-space:nowrap;" onmouseover="this.style.transform='scale(1.06)';this.style.boxShadow='0 10px 32px rgba(250,204,21,0.7)'" onmouseout="this.style.transform='scale(1)';this.style.boxShadow='0 6px 24px rgba(250,204,21,0.5)'">
                Enroll Now &gt;
              </a>
            </div>

          </div>
        </a>

        <!-- SLIDE 2 -->
        <a href="#courses" class="er-slide" style="position:relative;flex-shrink:0;width:100%;display:block;aspect-ratio:4096/773;text-decoration:none;">
          <div style="position:absolute;inset:0;background:linear-gradient(135deg,#134a2f 0%,#1f7d4e 50%,#2a9d62 100%);display:flex;align-items:center;padding:0 6%;">
            <div style="max-width:600px;color:#fff;z-index:2;">
              <span class="er-badge">⚡ JEE 2027 Batch Open</span>
              <h1 class="er-slide-h1">Crack <span class="er-yellow">JEE</span> With India's Best Mentors</h1>
              <p class="er-slide-p">Live classes · Daily practice · 24/7 doubt solving. Limited seats available.</p>
              <span class="er-cta-btn">Enroll Now →</span>
            </div>
            <div class="er-slide-emoji" style="animation:erFloat 6s ease-in-out 1s infinite;">⚗️</div>
          </div>
        </a>

        <!-- SLIDE 3 -->
        <a href="#courses" class="er-slide" style="position:relative;flex-shrink:0;width:100%;display:block;aspect-ratio:4096/773;text-decoration:none;">
          <div style="position:absolute;inset:0;background:linear-gradient(135deg,#0e3a24 0%,#185f3c 50%,#2a9d62 100%);display:flex;align-items:center;padding:0 6%;">
            <div style="max-width:600px;color:#fff;z-index:2;">
              <span class="er-badge">🩺 NEET 2027 — Now Enrolling</span>
              <h1 class="er-slide-h1">Your <span class="er-yellow">MBBS</span> Dream Starts Here</h1>
              <p class="er-slide-p">Comprehensive biology, chemistry &amp; physics with PCB specialists.</p>
              <span class="er-cta-btn">Join NEET Batch →</span>
            </div>
            <div class="er-slide-emoji" style="animation:erFloat 8s ease-in-out infinite;">🧬</div>
          </div>
        </a>

        <!-- SLIDE 4 -->
        <a href="#contact" class="er-slide" style="position:relative;flex-shrink:0;width:100%;display:block;aspect-ratio:4096/773;text-decoration:none;">
          <div style="position:absolute;inset:0;background:linear-gradient(135deg,#1f7d4e 0%,#2a9d62 40%,#7fd4a8 100%);display:flex;align-items:center;padding:0 6%;">
            <div style="max-width:600px;color:#fff;z-index:2;">
              <span class="er-badge">🎁 FREE — No Credit Card</span>
              <h1 class="er-slide-h1">Try a <span class="er-yellow">Free Live</span> Class Today</h1>
              <p class="er-slide-p">Experience EduRain's teaching quality firsthand. Zero commitment required.</p>
              <span class="er-cta-btn">Book Free Demo →</span>
            </div>
            <div class="er-slide-emoji" style="animation:erFloat 7s ease-in-out 0.5s infinite;">💻</div>
          </div>
        </a>

        <!-- SLIDE 5 -->
        <a href="#" class="er-slide" style="position:relative;flex-shrink:0;width:100%;display:block;aspect-ratio:4096/773;text-decoration:none;">
          <div style="position:absolute;inset:0;background:linear-gradient(135deg,#0e3a24 0%,#1f7d4e 50%,#4ab880 100%);display:flex;align-items:center;padding:0 6%;">
            <div style="max-width:600px;color:#fff;z-index:2;">
              <span class="er-badge">📱 Now on Android &amp; iOS</span>
              <h1 class="er-slide-h1">Learn from <span class="er-yellow">Anywhere</span></h1>
              <p class="er-slide-p">Download the EduRain app and study on the go. Offline mode included.</p>
              <span class="er-cta-btn">Download App →</span>
            </div>
            <div class="er-slide-emoji" style="animation:erFloat 5s ease-in-out 1.5s infinite;">📱</div>
          </div>
        </a>

      </div>

      <!-- LEFT arrow -->
      <button id="er-arrow-prev" class="er-arrow er-arrow-prev" aria-label="Previous slide">
        <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <!-- RIGHT arrow -->
      <button id="er-arrow-next" class="er-arrow er-arrow-next" aria-label="Next slide">
        <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      <!-- Dot pagination -->
      <div id="er-dots" style="position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;gap:10px;z-index:20;">
        <button class="er-dot er-dot-active" data-index="0" aria-label="Slide 1"></button>
        <button class="er-dot" data-index="1" aria-label="Slide 2"></button>
        <button class="er-dot" data-index="2" aria-label="Slide 3"></button>
        <button class="er-dot" data-index="3" aria-label="Slide 4"></button>
        <button class="er-dot" data-index="4" aria-label="Slide 5"></button>
      </div>
    </section>
    `;
}

export function initBanner() {
    const track    = document.getElementById('er-slider-track');
    const dots     = document.querySelectorAll('.er-dot');
    const slides   = document.querySelectorAll('.er-slide');
    const btnPrev  = document.getElementById('er-arrow-prev');
    const btnNext  = document.getElementById('er-arrow-next');
    if (!track || !slides.length) return;

    let current = 0;
    let timer;

    function goTo(index) {
        current = ((index % slides.length) + slides.length) % slides.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => {
            d.classList.toggle('er-dot-active', i === current);
        });
    }

    // 3 seconds stay, 0.7s transition (CSS), then 3 seconds again
    function start() {
        timer = setInterval(() => goTo(current + 1), 3000);
    }
    function stop() { clearInterval(timer); }

    // Dot clicks
    dots.forEach(dot => {
        dot.addEventListener('click', () => { stop(); goTo(parseInt(dot.dataset.index)); start(); });
    });

    // Arrow clicks
    if (btnPrev) btnPrev.addEventListener('click', (e) => { e.preventDefault(); stop(); goTo(current - 1); start(); });
    if (btnNext) btnNext.addEventListener('click', (e) => { e.preventDefault(); stop(); goTo(current + 1); start(); });

    // Touch swipe
    let tx = 0;
    track.addEventListener('touchstart', e => { tx = e.changedTouches[0].screenX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = tx - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) { stop(); goTo(current + (diff > 0 ? 1 : -1)); start(); }
    });

    // Pause on hover
    track.addEventListener('mouseenter', stop);
    track.addEventListener('mouseleave', start);

    goTo(0);
    start();
}
