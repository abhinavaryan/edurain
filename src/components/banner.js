export function renderBanner() {
    return `
    <!-- ═══ SECTION A: HERO AUTO-SCROLL BANNER ═══ -->
    <section id="er-hero-banner" style="position:relative;width:100%;overflow:hidden;background:#0e3a24;">

      <div id="er-slider-track" style="display:flex;transition:transform 0.7s cubic-bezier(0.4,0,0.2,1);will-change:transform;">

        <!-- SLIDE 1 — PROMOTIONAL SALE BANNER (Uploaded Image) -->
        <a href="#courses" class="er-slide er-slide-aspect" style="position:relative;flex-shrink:0;width:100%;display:block;text-decoration:none;background:#001d66;">
          <img src="/images/promo-banner.png" alt="Promo Banner" style="width:100%;height:100%;object-fit:contain;display:block;">
        </a>

        <!-- SLIDE 2 -->
        <a href="#courses" class="er-slide er-slide-aspect" style="position:relative;flex-shrink:0;width:100%;display:block;text-decoration:none;">
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
        <a href="#courses" class="er-slide er-slide-aspect" style="position:relative;flex-shrink:0;width:100%;display:block;text-decoration:none;">
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
        <a href="#contact" class="er-slide er-slide-aspect" style="position:relative;flex-shrink:0;width:100%;display:block;text-decoration:none;">
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
        <a href="#" class="er-slide er-slide-aspect" style="position:relative;flex-shrink:0;width:100%;display:block;text-decoration:none;">
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
