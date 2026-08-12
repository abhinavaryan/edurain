export function renderHomeReviews() {
    const reviews = [
        {
            name: "Kavya Sen.",
            rating: 5,
            quote: "Yahan ke experienced teachers har concept ko detail mein samjhate hain aur doubts ko patiently clear karte hain. Regular tests, detailed performance analysis, aur consistent guidance ne meri accuracy aur confidence dono ko improve kiya .",
            bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
        },
        {
            name: "Vivek Singh",
            rating: 4,
            quote: "I was struggling with Biology and Chemistry before joining EduRain and teachers explained every topic in a very simple way and doubt sessions were really helpful. Highly recommended for NEET aspirants.",
            bg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
        },
        {
            name: "Neha Yadav",
            rating: 4,
            quote: "Mujhe sabse achha yeh laga ki teachers sirf syllabus complete karne par focus nahi karte, balki concepts ko achhe se clear karwate hain. NEET preparation ke liye EduRain perfect platform hai",
            bg: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)"
        },
        {
            name: "Aarav Sharma",
            rating: 5,
            quote: "The mock test series and detailed rank analysis gave me real exam environment experience. Solved all my doubts instantly in live sessions.",
            bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
        },
        {
            name: "Ananya Roy",
            rating: 5,
            quote: "EduRain's interactive live classes and recorded sessions gave me the flexibility to revise complex physics formulas anytime. Scored 680+ in NEET!",
            bg: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)"
        },
        {
            name: "Rohan Gupta",
            rating: 5,
            quote: "Faculty members are super approachable. They solved every single doubt even after class hours. Best platform for JEE preparation.",
            bg: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
        }
    ];

    const generateStars = (rating) => {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < rating ? '★' : '☆';
        }
        return stars;
    };

    const cardsHtml = reviews.map((r) => {
        return `
        <div class="er-review-card er-reveal visible" style="background: #ffffff !important; border: 1px solid #e5e7eb; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.08);">
            <div class="er-review-card-top">
                <div class="er-google-rating">
                    <svg class="er-google-icon" viewBox="0 0 24 24" width="20" height="20">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span class="er-review-stars" style="color: #eab308; font-size: 1.1rem; font-weight: 700;">${generateStars(r.rating)}</span>
                </div>
                <span class="er-quote-mark" style="color: #fde047;">”</span>
            </div>

            <p class="er-review-quote" style="color: #1f2937; font-size: 0.95rem; line-height: 1.6; font-style: italic;">"${r.quote}"</p>

            <div class="er-review-author">
                <div class="er-review-avatar-badge" style="background: ${r.bg}; color: #ffffff;">
                    ${r.name[0]}
                </div>
                <span class="er-review-author-name" style="color: #0e3a24; font-weight: 700; font-size: 1rem;">${r.name}</span>
            </div>
        </div>
        `;
    }).join('');

    return `
    <!-- ═══ REVIEWS SECTION ═══ -->
    <section id="er-home-reviews" class="er-section" style="background: #f8fafc; padding: 4.236rem 0;">
        <div class="er-container">
            <div class="er-reviews-header text-center mb-12" style="text-align: center;">
                <h2 class="er-section-heading er-reveal visible" style="color: #0e3a24; font-size: 2.25rem; font-weight: 800; display: inline-block; position: relative;">
                    What Our Students Say
                    <svg class="er-underline-svg" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; bottom: -8px; left: 0; width: 100%; height: 10px;">
                        <path d="M2 8 Q50 2 100 8 Q150 14 198 8" stroke="#16a34a" stroke-width="4" stroke-linecap="round" fill="none"/>
                        <path d="M20 10 Q70 4 120 10 Q170 16 180 10" stroke="#facc15" stroke-width="2" stroke-linecap="round" fill="none"/>
                    </svg>
                </h2>
                <p class="er-section-sub er-reveal visible" style="color: #4b5563; margin-top: 1rem; font-size: 1.05rem;">
                    Join thousands of students learning and growing with us every day.
                </p>
            </div>

            <!-- Floating Reviews Slider Track with Left & Right Arrows -->
            <div class="er-reviews-carousel-wrapper" style="position: relative;">
                <button class="er-carousel-nav er-nav-prev" id="er-reviews-prev" aria-label="Previous Review">&larr;</button>

                <div class="er-reviews-marquee-wrapper" id="er-reviews-wrapper">
                    <div class="er-reviews-grid" id="er-home-reviews-track">
                        ${cardsHtml}
                    </div>
                </div>

                <button class="er-carousel-nav er-nav-next" id="er-reviews-next" aria-label="Next Review">&rarr;</button>
            </div>
        </div>
    </section>
    `;
}

export function initHomeReviews() {
    const track = document.getElementById('er-home-reviews-track');
    const wrapper = document.getElementById('er-reviews-wrapper');
    const prevBtn = document.getElementById('er-reviews-prev');
    const nextBtn = document.getElementById('er-reviews-next');

    if (!track || !wrapper) return;

    const cardWidth = 380;
    let autoScrollInterval = null;

    // Continuous right-to-left scroll loop
    function scrollNext() {
        const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
        if (wrapper.scrollLeft >= maxScroll - 20) {
            wrapper.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            wrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    }

    function scrollPrev() {
        if (wrapper.scrollLeft <= 10) {
            const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
            wrapper.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
            wrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
    }

    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(scrollNext, 3500);
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            scrollPrev();
            stopAutoScroll();
            startAutoScroll();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            scrollNext();
            stopAutoScroll();
            startAutoScroll();
        });
    }

    let isDown = false;
    let startX;
    let scrollLeft;

    wrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
        stopAutoScroll();
    });

    wrapper.addEventListener('mouseleave', () => {
        isDown = false;
        startAutoScroll();
    });

    wrapper.addEventListener('mouseenter', stopAutoScroll);

    wrapper.addEventListener('mouseup', () => {
        isDown = false;
        startAutoScroll();
    });

    wrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 2;
        wrapper.scrollLeft = scrollLeft - walk;
    });

    wrapper.addEventListener('touchstart', stopAutoScroll, { passive: true });
    wrapper.addEventListener('touchend', startAutoScroll, { passive: true });
    startAutoScroll();
}
