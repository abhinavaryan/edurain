import reviewsData from '../data/reviews.json';

export function renderReviews() {
    const reviewsHtml = reviewsData.map(review => `
        <div class="glass-card review-card">
            <img src="${review.avatar}" alt="${review.name}" class="review-avatar" />
            <div class="review-stars">⭐⭐⭐⭐⭐</div>
            <p class="review-quote">"${review.quote}"</p>
            <h4>${review.name}</h4>
            <p class="review-course">${review.course}</p>
        </div>
    `).join('');

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
    let currentIndex = 0;
    const totalReviews = dots.length;
    let interval;

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
        interval = setInterval(nextSlide, 4000);
    }

    function stopAutoScroll() {
        clearInterval(interval);
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
            if (touchEndX - touchStartX > 50) prevSlide();
        });
    }

    startAutoScroll();
}
