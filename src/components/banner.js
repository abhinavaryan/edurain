export function renderBanner() {
  return `
    <!-- ═══ SECTION A: HERO AUTO-SCROLL BANNER (Restored Original Layout & Aspect Ratio) ═══ -->
    <div class="er-hero-banner-wrapper">
      <section id="er-hero-banner" style="position:relative; width:100%; overflow:hidden; background:#0e3a24;">

        <div id="er-slider-track" style="display:flex; transition:transform 0.7s cubic-bezier(0.4,0,0.2,1); will-change:transform;">

          <!-- SLIDE 1 — FOUNDATION COURSES BANNER -->
          <a href="/courses/foundation" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <picture style="width:100%; height:100%; display:block;">
              <source media="(max-width: 640px)" srcset="/images/mobile%20banner%20images/1.webp" width="780" height="346">
              <img src="https://cdn.phototourl.com/free/2026-08-21-e1e824c4-9305-4f2c-94d1-571c81f25773.webp" alt="Foundation Courses" fetchpriority="high" loading="eager" width="4096" height="773" style="width:100%; height:100%; object-fit:cover; display:block;" />
            </picture>
          </a>

          <!-- SLIDE 2 — NEET BATCH -->
          <a href="/courses/neet" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <picture style="width:100%; height:100%; display:block;">
              <source media="(max-width: 640px)" srcset="/images/mobile%20banner%20images/2.webp" width="780" height="346">
              <img src="https://cdn.phototourl.com/free/2026-08-21-274d5d83-fe71-4e62-a475-a1f104e2301d.webp" alt="NEET Courses" loading="lazy" width="4096" height="773" style="width:100%; height:100%; object-fit:cover; display:block;" />
            </picture>
          </a>


          <!-- SLIDE 3 — JEE COURSES BANNER -->
          <a href="/courses/iit-jee" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <picture style="width:100%; height:100%; display:block;">
              <source media="(max-width: 640px)" srcset="/images/mobile%20banner%20images/3.webp" width="780" height="346">
              <img src="https://cdn.phototourl.com/free/2026-08-21-f1aec8fe-4134-4b91-8e86-aa7347b8640d.webp" alt="JEE Courses" loading="lazy" width="4096" height="773" style="width:100%; height:100%; object-fit:cover; display:block;" />
            </picture>
          </a>

          <!-- SLIDE 4 — JOURNEY & INTROSPECTION -->
          <div class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <picture style="width:100%; height:100%; display:block;">
              <source media="(max-width: 640px)" srcset="/images/mobile%20banner%20images/4.webp" width="780" height="346">
              <img src="https://cdn.phototourl.com/free/2026-08-21-dfdd2f3b-ad00-442a-8933-f958f8c33eca.webp" alt="Journey" loading="lazy" width="4096" height="773" style="width:100%; height:100%; object-fit:cover; display:block;" />
            </picture>
          </div>

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
