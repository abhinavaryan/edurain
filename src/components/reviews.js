import reviewsData from '../data/reviews.json';

export function renderReviews() {
    const reviewsHtml = reviewsData.map((review, idx) => {
        const colors = [
            'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
            'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
            'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
        ];
        const bg = colors[idx % colors.length];

        return `
        <div class="glass-card review-card">
            <div class="er-review-avatar-badge" style="background: ${bg}; margin: 0 auto 1rem auto;">
                ${review.name[0]}
            </div>
            <div class="review-stars">⭐⭐⭐⭐⭐</div>
            <p class="review-quote">"${review.quote}"</p>
            <h4>${review.name}</h4>
            <p class="review-course">${review.course}</p>
        </div>
        `;
    }).join('');

    const dotsHtml = reviewsData.map((_, i) =>
        `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
    ).join('');

    return `
        <section class="reviews-section" id="reviews">
            <div class="section-header">
                <h2>What Our Students Say</h2>
                <p>Real stories from our learners</p>
            </div>
            <div class="reviews-carousel">
                <button class="carousel-btn carousel-prev">&larr;</button>
                <div class="carousel-viewport">
                    <div class="carousel-track" id="review-track">
                        ${reviewsHtml}
                    </div>
                </div>
                <button class="carousel-btn carousel-next">&rarr;</button>
                <div class="carousel-dots" id="carousel-dots">
                    ${dotsHtml}
                </div>
            </div>
        </section>
    `;
}

export function initReviews() {
    const track = document.getElementById('review-track');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const reviewSection = document.getElementById('er-reviews') || track?.closest('section');
    let currentIndex = 0;
    const totalReviews = dots.length;
    let interval;
    let isIntersecting = false;

    if (!track || totalReviews === 0) return;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(d => d.classList.remove('active'));
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalReviews;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
        updateCarousel();
    }

    function startAutoScroll() {
        stopAutoScroll();
        if (isIntersecting) {
            interval = setInterval(nextSlide, 4000);
        }
    }

    function stopAutoScroll() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); stopAutoScroll(); startAutoScroll(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); stopAutoScroll(); startAutoScroll(); });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.dataset.index);
            updateCarousel();
            stopAutoScroll();
            startAutoScroll();
        });
    });

    const carousel = document.querySelector('.reviews-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);
    }

    // Touch/swipe support
    let touchStartX = 0;
    if (track) {
        track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; });
        track.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) nextSlide();
            if (touchStartX - touchEndX < -50) prevSlide();
        });
    }

    // Intersection Observer to only scroll when visible
    if ('IntersectionObserver' in window && reviewSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    startAutoScroll();
                } else {
                    stopAutoScroll();
                }
            });
        }, { threshold: 0.1 });
        observer.observe(reviewSection);
    } else {
        isIntersecting = true;
        startAutoScroll();
    }
}
