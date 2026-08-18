export function renderFaculty() {
    const faculties = [
        {
            name: "Mr. Manoj sir",
            subject: "English",
            exp: "14 Years Exp.",
            desc: "He is a passionate English mentor dedicated to mastering language skills, literature, and communication excellence.",
            image: "./images/home teachers image/1.png",
            icon: "📖"
        },
        {
            name: "Mrs. Ritu ma'am",
            subject: "Chemistry",
            exp: "14 Years Exp.",
            desc: "She is dedicated to building strong fundamentals and developing problem-solving excellence in students.",
            image: "./images/home teachers image/2.png",
            icon: "🧪"
        },
        {
            name: "Mr. Diwakar sir",
            subject: "Physics",
            exp: "15 Years Exp.",
            desc: "He is recognized for his concept-driven teaching approach and consistent success in guiding NEET aspirants toward top ranks.",
            image: "./images/home teachers image/3.png",
            icon: "⚡"
        },
        {
            name: "Mr. Nitin sir",
            subject: "Biology",
            exp: "16 Years Exp.",
            desc: "A highly respected Biology mentor, He is known for making complex concepts simple and helping students achieve NEET results.",
            image: "./images/home teachers image/4.png",
            icon: "🧬"
        },
        {
            name: "Ms. Khushbu ma'am",
            subject: "Social Studies",
            exp: "5 Years Exp.",
            desc: "Passionate Social Studies mentor with 5 years of teaching experience, making History, Civics, and Geography engaging and accessible.",
            image: "./images/home teachers image/5.png",
            icon: "🌍"
        },
        {
            name: "Mr. Debashish Banerjee sir",
            subject: "Mathematics",
            exp: "13 Years Exp.",
            desc: "Expert Mathematics mentor with 13 years of experience, specializing in Class 11th & 12th and JEE preparation.",
            image: "./images/home teachers image/6.png",
            icon: "🔢"
        }

    ];

    const cardsHtml = faculties.map((f, i) => {
        const initials = f.name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/, '').split(' ').map(n => n[0]).join('');

        return `
        <div class="er-faculty-card glass-card er-reveal visible">
            <div class="er-faculty-img-wrap">
                <img src="${f.image}" class="er-faculty-img" alt="${f.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: top center;">
                <div class="er-faculty-studio-badge" style="position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); z-index: 2; width: max-content;">
                    <span class="er-studio-icon">${f.icon}</span> ${f.subject} Specialist
                </div>
            </div>
            <div class="er-faculty-info">
                <h3 class="er-faculty-name">${f.name}</h3>
                <span class="er-faculty-subject">${f.subject}</span>
                <span class="er-faculty-badge">${f.exp}</span>
                <p class="er-faculty-desc">${f.desc}</p>
            </div>
        </div>
        `;
    }).join('');

    return `
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
                        ${cardsHtml}
                    </div>
                </div>

                <button class="er-carousel-nav er-nav-next" id="er-faculty-next" aria-label="Next Faculty">&rarr;</button>
            </div>
        </div>
    </section>
    `;
}

export function initFaculty() {
    const container = document.getElementById('er-faculty-container');
    const track = document.getElementById('er-faculty-track');
    const prevBtn = document.getElementById('er-faculty-prev');
    const nextBtn = document.getElementById('er-faculty-next');
    const facultySection = document.getElementById('er-faculty');

    if (!container || !track) return;

    let autoScrollInterval = null;
    let isIntersecting = false;

    // Dynamically calculate the card width + gap based on the first card
    function getScrollAmount() {
        const firstCard = track.querySelector('.er-faculty-card');
        if (!firstCard) return 340; // fallback
        const style = window.getComputedStyle(firstCard);
        const margin = parseFloat(style.marginRight) || 0;
        // The container gap is applied via Flexbox, so we measure the distance between two cards if possible.
        // But simply taking offsetWidth + a rough gap estimate or just clientWidth of container is safer for 100% width cards.
        // For mobile (100% width), we want to scroll the exact container width.
        // For desktop, it's card width + gap.
        const cardWidth = firstCard.offsetWidth;
        const gap = 32; // var(--space-lg) is usually 2rem (32px)
        return cardWidth + gap;
    }

    function scrollNext() {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 20) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        }
    }

    function scrollPrev() {
        if (container.scrollLeft <= 10) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        }
    }

    function startAutoScroll() {
        stopAutoScroll();
        // Only start if the section is visible
        if (isIntersecting) {
            autoScrollInterval = setInterval(scrollNext, 3500);
        }
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

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

    // Pause on hover or touch
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);
    container.addEventListener('touchstart', stopAutoScroll, { passive: true });
    container.addEventListener('touchend', startAutoScroll, { passive: true });

    // Intersection Observer to only scroll when visible
    if ('IntersectionObserver' in window && facultySection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    startAutoScroll();
                } else {
                    stopAutoScroll();
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% visible
        observer.observe(facultySection);
    } else {
        // Fallback for older browsers
        isIntersecting = true;
        startAutoScroll();
    }
}
