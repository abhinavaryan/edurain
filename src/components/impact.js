export function renderImpact() {
    return `
    <!-- ═══ SECTION D: IMPACT NUMBERS ═══ -->
    <section id="er-impact" class="er-section" style="background:#fff;">
        <div class="er-container">
            <h2 class="er-section-heading er-reveal">A Platform Trusted by Students Worldwide</h2>
            <p class="er-section-sub er-reveal er-reveal-delay-1">
                Don't just take our word for it — witness the excellence for yourself!
            </p>

            <div class="er-impact-grid">

                <!-- Card 1 — Students -->
                <div class="er-impact-card er-reveal er-reveal-delay-1" data-color="#FACC15" style="background:linear-gradient(145deg,#fef9ee,#fef3c7);">
                    <div class="er-impact-shimmer"></div>
                    <div class="er-impact-icon-reveal">🎓</div>
                    <div class="er-impact-border" style="--er-hover-color:#FACC15;"></div>
                    <div style="position:relative;z-index:1;">
                        <p class="er-impact-number">
                            <span class="er-count" data-target="15" data-suffix="M+">0</span>
                        </p>
                        <p class="er-impact-label">Happy Students</p>
                        <div class="er-impact-bar-wrap">
                            <div class="er-impact-bar" style="--er-bar-color:#FACC15;"></div>
                        </div>
                    </div>
                </div>

                <!-- Card 2 — Mock Tests -->
                <div class="er-impact-card er-reveal er-reveal-delay-2" data-color="#f87171" style="background:linear-gradient(145deg,#fdf2f2,#fce7e7);">
                    <div class="er-impact-shimmer" style="--er-shimmer-color:#f87171;"></div>
                    <div class="er-impact-icon-reveal">📝</div>
                    <div class="er-impact-border" style="--er-hover-color:#f87171;"></div>
                    <div style="position:relative;z-index:1;">
                        <p class="er-impact-number">
                            <span class="er-count" data-target="24000" data-suffix="+">0</span>
                        </p>
                        <p class="er-impact-label">Mock Tests</p>
                        <div class="er-impact-bar-wrap">
                            <div class="er-impact-bar" style="--er-bar-color:#f87171;"></div>
                        </div>
                    </div>
                </div>

                <!-- Card 3 — Video Lectures -->
                <div class="er-impact-card er-reveal er-reveal-delay-3" data-color="#22d3ee" style="background:linear-gradient(145deg,#ecfeff,#cffafe);">
                    <div class="er-impact-shimmer" style="--er-shimmer-color:#22d3ee;"></div>
                    <div class="er-impact-icon-reveal">🎬</div>
                    <div class="er-impact-border" style="--er-hover-color:#22d3ee;"></div>
                    <div style="position:relative;z-index:1;">
                        <p class="er-impact-number">
                            <span class="er-count" data-target="14000" data-suffix="+">0</span>
                        </p>
                        <p class="er-impact-label">Video Lectures</p>
                        <div class="er-impact-bar-wrap">
                            <div class="er-impact-bar" style="--er-bar-color:#22d3ee;"></div>
                        </div>
                    </div>
                </div>

                <!-- Card 4 — Practice Papers -->
                <div class="er-impact-card er-reveal er-reveal-delay-4" data-color="#a78bfa" style="background:linear-gradient(145deg,#f5f3ff,#ede9fe);">
                    <div class="er-impact-shimmer" style="--er-shimmer-color:#a78bfa;"></div>
                    <div class="er-impact-icon-reveal">📄</div>
                    <div class="er-impact-border" style="--er-hover-color:#a78bfa;"></div>
                    <div style="position:relative;z-index:1;">
                        <p class="er-impact-number">
                            <span class="er-count" data-target="80000" data-suffix="+">0</span>
                        </p>
                        <p class="er-impact-label">Practice Papers</p>
                        <div class="er-impact-bar-wrap">
                            <div class="er-impact-bar" style="--er-bar-color:#a78bfa;"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
}

export function initImpact() {
    const counters = document.querySelectorAll('.er-count');
    let fired = false;

    function animateCount(el) {
        const target   = parseInt(el.dataset.target, 10);
        const suffix   = el.dataset.suffix || '';
        const steps    = 80;
        const stepTime = 2000 / steps;
        let count = 0;

        function fmt(n) {
            if (target >= 1000000) return (n / 1000000).toFixed(0) + suffix;
            return n.toLocaleString('en-IN') + suffix;
        }

        el.textContent = fmt(0);
        const iv = setInterval(() => {
            count = Math.min(count + Math.ceil(target / steps), target);
            el.textContent = fmt(count);
            if (count >= target) {
                clearInterval(iv);
                el.textContent = fmt(target);
                el.style.animation = 'erCountPing 0.4s ease-out';
                setTimeout(() => { el.style.animation = ''; }, 400);
            }
        }, stepTime);
    }

    const section = document.getElementById('er-impact');
    if (!section) return;

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !fired) {
                fired = true;
                counters.forEach(c => animateCount(c));
            }
        });
    }, { threshold: 0.25 });

    obs.observe(section);

    // Hover bar animation via CSS class toggle
    document.querySelectorAll('.er-impact-card').forEach(card => {
        const bar = card.querySelector('.er-impact-bar');
        card.addEventListener('mouseenter', () => {
            if (bar) bar.classList.add('er-bar-expanded');
        });
        card.addEventListener('mouseleave', () => {
            if (bar) bar.classList.remove('er-bar-expanded');
        });
    });
}
