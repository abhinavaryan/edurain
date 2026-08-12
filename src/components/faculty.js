export function renderFaculty() {
    const faculties = [
        {
            name: "Mrs. Ritu ma'am",
            subject: "Chemistry",
            exp: "14 Years Exp.",
            desc: "She is dedicated to building strong fundamentals and developing problem-solving excellence in students.",
            avatarBg: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
            icon: "🧪"
        },
        {
            name: "Mr. Diwakar sir",
            subject: "Physics",
            exp: "15 Years Exp.",
            desc: "He is recognized for his concept-driven teaching approach and consistent success in guiding NEET aspirants toward top ranks.",
            avatarBg: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
            icon: "⚡"
        },
        {
            name: "Mr. Nitin sir",
            subject: "Biology",
            exp: "16 Years Exp.",
            desc: "A highly respected Biology mentor, He is known for making complex concepts simple and helping students achieve NEET results.",
            avatarBg: "linear-gradient(135deg, #7c2d12 0%, #f97316 100%)",
            icon: "🧬"
        },
        {
            name: "Dr. Aakash Sharma",
            subject: "Organic Chemistry",
            exp: "12 Years Exp.",
            desc: "Specialist in reaction mechanisms, helping students master organic chemistry with logical flow and memory maps.",
            avatarBg: "linear-gradient(135deg, #581c87 0%, #a855f7 100%)",
            icon: "🔬"
        },
        {
            name: "Ms. Priya Verma",
            subject: "Mathematics",
            exp: "10 Years Exp.",
            desc: "Focused on short-cut techniques and speed math for JEE Advanced, building student confidence step-by-step.",
            avatarBg: "linear-gradient(135deg, #831843 0%, #ec4899 100%)",
            icon: "📐"
        },
        {
            name: "Mr. Rajesh Kumar",
            subject: "Physical Chemistry",
            exp: "14 Years Exp.",
            desc: "Simplifies numerical problem solving and formula applications with real-world practical illustrations.",
            avatarBg: "linear-gradient(135deg, #1e293b 0%, #64748b 100%)",
            icon: "⚗️"
        },

    ];

    const cardsHtml = faculties.map((f, i) => {
        const initials = f.name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/, '').split(' ').map(n => n[0]).join('');

        return `
        <div class="er-faculty-card glass-card er-reveal visible">
            <div class="er-faculty-img-wrap" style="background: ${f.avatarBg};">
                <div class="er-faculty-avatar-fallback" style="display:flex;">
                    <div class="er-avatar-circle">
                        <span class="er-avatar-initials">${initials}</span>
                    </div>
                    <div class="er-faculty-studio-badge">
                        <span class="er-studio-icon">${f.icon}</span> ${f.subject} Specialist
                    </div>
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

    if (!container || !track) return;

    const cardWidth = 340;
    let autoScrollInterval = null;

    function scrollNext() {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 20) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    }

    function scrollPrev() {
        if (container.scrollLeft <= 10) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            container.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
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

    // Start auto scrolling loop
    startAutoScroll();
}
