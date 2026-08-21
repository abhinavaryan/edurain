function e(){return`
    <!-- ═══ FACULTY SECTION ═══ -->
    <section id="er-faculty" class="er-section" style="background: linear-gradient(180deg, #f0faf4 0%, #ffffff 100%); padding: 4.236rem 0;">
        <div class="er-container">
            <div class="er-faculty-header text-center mb-12" style="text-align: center;">
                <h2 class="er-section-heading er-reveal visible" style="color: #0e3a24; font-size: 2.25rem; font-weight: 800; display: inline-block; position: relative;">
                    Meet Our Faculty
                    <svg class="er-underline-svg" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; bottom: -8px; left: 0; width: 100%; height: 10px;">
                        <path d="M2 8 Q50 2 100 8 Q150 14 198 8" stroke="#16a34a" stroke-width="4" stroke-linecap="round" fill="none"/>
                        <path d="M20 10 Q70 4 120 10 Q170 16 180 10" stroke="#facc15" stroke-width="2" stroke-linecap="round" fill="none"/>
                    </svg>
                </h2>
                <p class="er-section-sub er-reveal visible" style="color: #374151; margin-top: 1rem; font-size: 1.05rem;">
                    Learn from India's most experienced educators and subject experts dedicated to your success.
                </p>
            </div>

            <!-- Faculty Carousel Container -->
            <div class="er-faculty-carousel-wrapper" style="position: relative;">
                <button class="er-carousel-nav er-nav-prev" id="er-faculty-prev" aria-label="Previous Faculty">&larr;</button>
                
                <div class="er-faculty-track-container" id="er-faculty-container">
                    <div class="er-faculty-grid" id="er-faculty-track">
                        ${[{name:`Mr. Manoj sir`,subject:`English`,exp:`15+ Years Exp.`,desc:`He is a passionate English mentor dedicated to mastering language skills, literature, and communication excellence.`,image:`/images/home teachers image/1.webp`,icon:`📖`},{name:`Mrs. Ritu ma'am`,subject:`Chemistry`,exp:`14 Years Exp.`,desc:`She is dedicated to building strong fundamentals and developing problem-solving excellence in students.`,image:`/images/home teachers image/2.png`,icon:`🧪`},{name:`Mr. Debashish Banerjee sir`,subject:`Mathematics`,exp:`18 Years Exp.`,desc:`Expert Mathematics mentor with 18 years of experience, specializing in Class 11th & 12th and JEE preparation.`,image:`/images/home teachers image/6.webp`,icon:`🔢`},{name:`Mr. Diwakar sir`,subject:`Physics`,exp:`17+ Years Exp.`,desc:`He is recognized for his concept-driven teaching approach and consistent success in guiding NEET aspirants toward top ranks.`,image:`/images/home teachers image/3.png`,icon:`⚡`},{name:`Mr. Nitin sir`,subject:`Biology`,exp:`15+ Years Exp.`,desc:`A highly respected Biology mentor, He is known for making complex concepts simple and helping students achieve NEET results.`,image:`/images/home teachers image/4.png`,icon:`🧬`},{name:`Ms. Khushboo ma'am`,subject:`Social Studies`,exp:`5 Years Exp.`,desc:`Passionate Social Studies mentor with 5 years of teaching experience, making History, Civics, and Geography engaging and accessible.`,image:`/images/home teachers image/5.webp`,imgStyle:`transform: scale(1.2) translateY(5px); transform-origin: bottom center;`,icon:`🌍`}].map((e,t)=>(e.name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/,``).split(` `).map(e=>e[0]).join(``),`
        <div class="er-faculty-card glass-card er-reveal visible">
            <div class="er-faculty-img-wrap">
                <img loading="lazy" src="${e.image}" class="er-faculty-img" alt="${e.name} - ${e.subject} Specialist, ${e.exp}" style="width: 100%; height: 100%; object-fit: contain; object-position: bottom center; ${e.imgStyle||``}">
                <div class="er-faculty-studio-badge" style="position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); z-index: 2; width: max-content;">
                    <span class="er-studio-icon">${e.icon}</span> ${e.subject} Specialist
                </div>
            </div>
            <div class="er-faculty-info">
                <h3 class="er-faculty-name">${e.name}</h3>
                <span class="er-faculty-subject">${e.subject}</span>
                <span class="er-faculty-badge">${e.exp}</span>
                <p class="er-faculty-desc">${e.desc}</p>
            </div>
        </div>
        `)).join(``)}
                    </div>
                </div>

                <button class="er-carousel-nav er-nav-next" id="er-faculty-next" aria-label="Next Faculty">&rarr;</button>
            </div>
        </div>
    </section>
    `}function t(){let e=document.getElementById(`er-faculty-container`),t=document.getElementById(`er-faculty-track`),n=document.getElementById(`er-faculty-prev`),r=document.getElementById(`er-faculty-next`),i=document.getElementById(`er-faculty`);if(!e||!t)return;let a=null,o=!1;function s(){let e=t.querySelector(`.er-faculty-card`);if(!e)return 340;let n=window.getComputedStyle(e);return parseFloat(n.marginRight),e.offsetWidth+32}function c(){let t=e.scrollWidth-e.clientWidth;e.scrollLeft>=t-20?e.scrollTo({left:0,behavior:`smooth`}):e.scrollBy({left:s(),behavior:`smooth`})}function l(){if(e.scrollLeft<=10){let t=e.scrollWidth-e.clientWidth;e.scrollTo({left:t,behavior:`smooth`})}else e.scrollBy({left:-s(),behavior:`smooth`})}function u(){d(),o&&(a=setInterval(c,3500))}function d(){a&&=(clearInterval(a),null)}n&&n.addEventListener(`click`,()=>{l(),d(),u()}),r&&r.addEventListener(`click`,()=>{c(),d(),u()}),e.addEventListener(`mouseenter`,d),e.addEventListener(`mouseleave`,u),e.addEventListener(`touchstart`,d,{passive:!0}),e.addEventListener(`touchend`,u,{passive:!0}),`IntersectionObserver`in window&&i?new IntersectionObserver(e=>{e.forEach(e=>{o=e.isIntersecting,o?u():d()})},{threshold:.1}).observe(i):(o=!0,u())}export{t as initFaculty,e as renderFaculty};