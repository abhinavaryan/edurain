export function renderBanner() {
  const isMobile = window.innerWidth <= 768;
  const slide5Html = isMobile ? `
          <!-- SLIDE 5 — MOBILE ONLY BANNER -->
          <a href="#appDownload" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <img src="https://cdn.phototourl.com/free/2026-08-19-ee9828c6-8b2b-462d-9031-6ebc47017cad.png" alt="Download App" style="width:100%; height:100%; object-fit:contain; display:block;" />
          </a>
  ` : '';

  const dot5Html = isMobile ? `<button class="er-dot" data-index="4" aria-label="Slide 5"></button>` : '';

  return `
    <!-- ═══ SECTION A: HERO AUTO-SCROLL BANNER (Restored Original Layout & Aspect Ratio) ═══ -->
    <div class="er-hero-banner-wrapper">
      <section id="er-hero-banner" style="position:relative; width:100%; overflow:hidden; background:#0e3a24;">

        <div id="er-slider-track" style="display:flex; transition:transform 0.7s cubic-bezier(0.4,0,0.2,1); will-change:transform;">

          <!-- SLIDE 1 — FOUNDATION COURSES BANNER -->
          <a href="#foundationcourses" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <img src="https://cdn.phototourl.com/free/2026-08-19-a7d0b97b-514f-440f-a353-c2002218aa92.jpg" alt="Foundation Courses" style="width:100%; height:100%; object-fit:contain; display:block;" />
          </a>

          <!-- SLIDE 2 — NEET BATCH -->
          <a href="#neetcourses" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <img src="https://cdn.phototourl.com/free/2026-08-19-b81703e4-9625-45ba-9dd9-a78611892cbe.jpg" alt="NEET Courses" style="width:100%; height:100%; object-fit:contain; display:block;" />
          </a>


          <!-- SLIDE 3 — JEE COURSES BANNER -->
          <a href="#jeecourses" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <img src="https://cdn.phototourl.com/free/2026-08-19-d0350913-854a-4e54-a80e-ca16951ba57d.jpg" alt="JEE Courses" style="width:100%; height:100%; object-fit:contain; display:block;" />
          </a>

          <!-- SLIDE 4 — JOURNEY & INTROSPECTION -->
          <a href="#journey" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <img src="https://cdn.phototourl.com/free/2026-08-14-1e9adc87-cc2a-4bcf-8378-cb876b01aba8.png" alt="Journey" style="width:100%; height:100%; object-fit:contain; display:block;" />
          </a>

          ${slide5Html}
        </div>

        <!-- LEFT arrow -->
        <button id="er-arrow-prev" class="er-arrow er-arrow-prev" aria-label="Previous slide">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- RIGHT arrow -->
        <button id="er-arrow-next" class="er-arrow er-arrow-next" aria-label="Next slide">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

      </section>

      <!-- Dot pagination (Outside the banner) -->
      <div id="er-dots" class="er-banner-dots">
        <button class="er-dot er-dot-active" data-index="0" aria-label="Slide 1"></button>
        <button class="er-dot" data-index="1" aria-label="Slide 2"></button>
        <button class="er-dot" data-index="2" aria-label="Slide 3"></button>
        <button class="er-dot" data-index="3" aria-label="Slide 4"></button>
        ${dot5Html}
      </div>
    </div>
  `;
}

export function initBanner() {
  const track = document.getElementById('er-slider-track');
  const dots = document.querySelectorAll('.er-dot');
  const slides = document.querySelectorAll('.er-slide');
  const btnPrev = document.getElementById('er-arrow-prev');
  const btnNext = document.getElementById('er-arrow-next');
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

  function start() {
    stop();
    timer = setInterval(() => goTo(current + 1), 3500);
  }
  function stop() { clearInterval(timer); }

  dots.forEach(dot => {
    dot.addEventListener('click', () => { stop(); goTo(parseInt(dot.dataset.index)); start(); });
  });

  if (btnPrev) btnPrev.addEventListener('click', (e) => { e.preventDefault(); stop(); goTo(current - 1); start(); });
  if (btnNext) btnNext.addEventListener('click', (e) => { e.preventDefault(); stop(); goTo(current + 1); start(); });

  let tx = 0;
  track.addEventListener('touchstart', e => { tx = e.changedTouches[0].screenX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = tx - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) { stop(); goTo(current + (diff > 0 ? 1 : -1)); start(); }
  });

  track.addEventListener('mouseenter', stop);
  track.addEventListener('mouseleave', start);

  goTo(0);
  start();
}
