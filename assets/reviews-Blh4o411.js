var e=[{id:`r1`,name:`Aarav Patel`,course:`Full Stack Web Development Bootcamp`,rating:5,quote:`This bootcamp completely transformed my career. The projects were practical, and I landed a great job right after completion!`,avatar:`/images/avatar-1.jpg`},{id:`r2`,name:`Diya Sharma`,course:`Physics Masterclass for JEE Advanced`,rating:5,quote:`Aisha ma'am makes complex physics concepts so easy to understand. I finally feel confident about my JEE preparation.`,avatar:`/images/avatar-2.jpg`},{id:`r3`,name:`Rohan Gupta`,course:`Data Structures and Algorithms in Python`,rating:5,quote:`The best DSA course I've ever taken. Amit sir's explanation of dynamic programming was phenomenal.`,avatar:`/images/avatar-3.jpg`},{id:`r4`,name:`Ananya Singh`,course:`Biology for NEET - Complete Syllabus`,rating:5,quote:`Dr. Reddy's teaching style is engaging and highly informative. The mock tests provided were exactly what I needed.`,avatar:`/images/avatar-4.jpg`},{id:`r5`,name:`Karan Malhotra`,course:`Vedic Mathematics for Lightning Fast Calculations`,rating:5,quote:`I used to struggle with calculations during exams. Vedic math techniques have literally doubled my speed!`,avatar:`/images/avatar-1.jpg`},{id:`r6`,name:`Megha Nair`,course:`Spoken English Fluency Course`,rating:5,quote:`Priya ma'am helped me overcome my fear of public speaking. Highly recommend this to anyone looking to improve fluency.`,avatar:`/images/avatar-2.jpg`},{id:`r7`,name:`Ishaan Desai`,course:`Advanced Mathematics: Calculus & Linear Algebra`,rating:5,quote:`Brilliant course for engineering students. The visual explanations for linear algebra made everything click.`,avatar:`/images/avatar-3.jpg`},{id:`r8`,name:`Sneha Iyer`,course:`Machine Learning Foundations`,rating:5,quote:`A perfect introduction to AI. The hands-on projects gave me the practical experience I needed to start my ML journey.`,avatar:`/images/avatar-4.jpg`}];function t(){return`
        <section class="reviews-section" id="reviews">
            <div class="section-header">
                <h2>What Our Students Say</h2>
                <p>Real stories from our learners</p>
            </div>
            <div class="reviews-carousel">
                <button class="carousel-btn carousel-prev" aria-label="Previous Review">&larr;</button>
                <div class="carousel-viewport">
                    <div class="carousel-track" id="review-track">
                        ${e.map((e,t)=>{let n=[`linear-gradient(135deg, #10b981 0%, #059669 100%)`,`linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)`,`linear-gradient(135deg, #ec4899 0%, #be185d 100%)`,`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,`linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)`,`linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)`];return`
        <div class="glass-card review-card">
            <div class="er-review-avatar-badge" style="background: ${n[t%n.length]}; margin: 0 auto 1rem auto;">
                ${e.name[0]}
            </div>
            <div class="review-stars">⭐⭐⭐⭐⭐</div>
            <p class="review-quote">"${e.quote}"</p>
            <h3>${e.name}</h3>
            <p class="review-course">${e.course}</p>
        </div>
        `}).join(``)}
                    </div>
                </div>
                <button class="carousel-btn carousel-next" aria-label="Next Review">&rarr;</button>
                <div class="carousel-dots" id="carousel-dots">
                    ${e.map((e,t)=>`<span class="dot ${t===0?`active`:``}" data-index="${t}"></span>`).join(``)}
                </div>
            </div>
        </section>
    `}function n(){let e=document.getElementById(`review-track`),t=document.querySelector(`.carousel-prev`),n=document.querySelector(`.carousel-next`),r=document.querySelectorAll(`.carousel-dots .dot`),i=document.getElementById(`er-reviews`)||e?.closest(`section`),a=0,o=r.length,s,c=!1;if(!e||o===0)return;function l(){e.style.transform=`translateX(-${a*100}%)`,r.forEach(e=>e.classList.remove(`active`)),r[a]&&r[a].classList.add(`active`)}function u(){a=(a+1)%o,l()}function d(){a=(a-1+o)%o,l()}function f(){p(),c&&(s=setInterval(u,4e3))}function p(){s&&=(clearInterval(s),null)}t&&t.addEventListener(`click`,()=>{d(),p(),f()}),n&&n.addEventListener(`click`,()=>{u(),p(),f()}),r.forEach(e=>{e.addEventListener(`click`,e=>{a=parseInt(e.target.dataset.index),l(),p(),f()})});let m=document.querySelector(`.reviews-carousel`);m&&(m.addEventListener(`mouseenter`,p),m.addEventListener(`mouseleave`,f));let h=0;e&&(e.addEventListener(`touchstart`,e=>{h=e.changedTouches[0].screenX}),e.addEventListener(`touchend`,e=>{let t=e.changedTouches[0].screenX;h-t>50&&u(),h-t<-50&&d()})),`IntersectionObserver`in window&&i?new IntersectionObserver(e=>{e.forEach(e=>{c=e.isIntersecting,c?f():p()})},{threshold:.1}).observe(i):(c=!0,f())}export{n as initReviews,t as renderReviews};