function e(){return`
    <!-- ═══ SECTION A: HERO AUTO-SCROLL BANNER (Restored Original Layout & Aspect Ratio) ═══ -->
    <div class="er-hero-banner-wrapper">
      <section id="er-hero-banner" style="position:relative; width:100%; overflow:hidden; background:#0e3a24;">

        <div id="er-slider-track" style="display:flex; transition:transform 0.7s cubic-bezier(0.4,0,0.2,1); will-change:transform;">

          <!-- SLIDE 1 — FOUNDATION COURSES BANNER -->
          <a href="/courses/foundation" aria-label="Foundation Courses" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <picture style="width:100%; height:100%; display:block;">
              <source media="(max-width: 640px)" srcset="/images/mobile%20banner%20images/1.webp" width="780" height="346">
              <img src="https://cdn.phototourl.com/free/2026-08-21-e1e824c4-9305-4f2c-94d1-571c81f25773.webp" alt="Foundation Courses" fetchpriority="high" loading="eager" width="4096" height="773" style="width:100%; height:100%; object-fit:cover; display:block;" />
            </picture>
          </a>

          <!-- SLIDE 2 — NEET BATCH -->
          <a href="/courses/neet" aria-label="NEET Courses" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
            <picture style="width:100%; height:100%; display:block;">
              <source media="(max-width: 640px)" srcset="/images/mobile%20banner%20images/2.webp" width="780" height="346">
              <img src="https://cdn.phototourl.com/free/2026-08-21-274d5d83-fe71-4e62-a475-a1f104e2301d.webp" alt="NEET Courses" loading="lazy" width="4096" height="773" style="width:100%; height:100%; object-fit:cover; display:block;" />
            </picture>
          </a>


          <!-- SLIDE 3 — JEE COURSES BANNER -->
          <a href="/courses/iit-jee" aria-label="JEE Courses" class="er-slide er-slide-aspect" style="position:relative; flex-shrink:0; width:100%; display:block; text-decoration:none;">
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
  `}function t(){let e=document.getElementById(`er-slider-track`),t=document.querySelectorAll(`.er-dot`),n=document.querySelectorAll(`.er-slide`),r=document.getElementById(`er-arrow-prev`),i=document.getElementById(`er-arrow-next`);if(!e||!n.length)return;let a=0,o;function s(r){a=(r%n.length+n.length)%n.length,e.style.transform=`translateX(-${a*100}%)`,t.forEach((e,t)=>{e.classList.toggle(`er-dot-active`,t===a)})}function c(){l(),o=setInterval(()=>s(a+1),3500)}function l(){clearInterval(o)}t.forEach(e=>{e.addEventListener(`click`,()=>{l(),s(parseInt(e.dataset.index)),c()})}),r&&r.addEventListener(`click`,e=>{e.preventDefault(),l(),s(a-1),c()}),i&&i.addEventListener(`click`,e=>{e.preventDefault(),l(),s(a+1),c()});let u=0;e.addEventListener(`touchstart`,e=>{u=e.changedTouches[0].screenX},{passive:!0}),e.addEventListener(`touchend`,e=>{let t=u-e.changedTouches[0].screenX;Math.abs(t)>50&&(l(),s(a+(t>0?1:-1)),c())}),e.addEventListener(`mouseenter`,l),e.addEventListener(`mouseleave`,c),s(0),c()}export{t as initBanner,e as renderBanner};