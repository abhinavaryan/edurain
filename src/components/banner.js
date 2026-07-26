export function renderBanner() {
    return `
    <!-- ═══ SECTION A: HERO AUTO-SCROLL BANNER ═══ -->
    <section id="er-hero-banner" style="position:relative;width:100%;overflow:hidden;background:#0e3a24;">

      <div id="er-slider-track" style="display:flex;transition:transform 0.7s cubic-bezier(0.4,0,0.2,1);will-change:transform;">

        <!-- SLIDE 1 -->
        <a href="#courses" class="er-slide" style="position:relative;flex-shrink:0;width:100%;display:block;aspect-ratio:4096/773;text-decoration:none;">
          <div style="position:absolute;inset:0;background:linear-gradient(135deg,#0e3a24 0%,#2a9d62 60%,#4ab880 100%);display:flex;align-items:center;padding:0 6%;">
            <div style="max-width:600px;color:#fff;z-index:2;">
              <span class="er-badge">🏆 India's #1 EdTech Platform</span>
              <h1 class="er-slide-h1"><span class="er-yellow">Victory</span> Starts Here.</h1>
              <p class="er-slide-p">Expert-led courses for JEE, NEET, CUET &amp; more. Start your journey today.</p>
              <span class="er-cta-btn">Explore Courses →</span>
            </div>
            <div class="er-slide-emoji er-float">🎓</div>
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

      <!-- Dot pagination -->
      <div id="er-dots" style="position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;gap:10px;z-index:20;">
        <button class="er-dot er-dot-active" data-index="0" aria-label="Slide 1"></button>
        <button class="er-dot" data-index="1" aria-label="Slide 2"></button>
        <button class="er-dot" data-index="2" aria-label="Slide 3"></button>
        <button class="er-dot" data-index="3" aria-label="Slide 4"></button>
        <button class="er-dot" data-index="4" aria-label="Slide 5"></button>
      </div>
    </section>

    <!-- Scroll cue -->
    <div class="er-scroll-cue">
      <p class="er-scroll-cue-text">Scroll to explore</p>
      <svg class="er-scroll-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
    `;
}

export function initBanner() {
    const track  = document.getElementById('er-slider-track');
    const dots   = document.querySelectorAll('.er-dot');
    const slides = document.querySelectorAll('.er-slide');
    if (!track || !slides.length) return;

    let current = 0;
    let timer;

    function goTo(index) {
        current = ((index % slides.length) + slides.length) % slides.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => {
            if (i === current) {
                d.classList.add('er-dot-active');
            } else {
                d.classList.remove('er-dot-active');
            }
        });
    }

    function start() { timer = setInterval(() => goTo(current + 1), 5000); }
    function stop()  { clearInterval(timer); }

    dots.forEach(dot => {
        dot.addEventListener('click', () => { stop(); goTo(parseInt(dot.dataset.index)); start(); });
    });

    // Touch swipe
    let tx = 0;
    track.addEventListener('touchstart', e => { tx = e.changedTouches[0].screenX; }, { passive: true });
    track.addEventListener('touchend',   e => {
        const diff = tx - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) { stop(); goTo(current + (diff > 0 ? 1 : -1)); start(); }
    });
    track.addEventListener('mouseenter', stop);
    track.addEventListener('mouseleave', start);

    goTo(0);
    start();
}
