export function renderFreeDemo() {
    return `
    <!-- ═══ SECTION C: BOOK FREE DEMO ═══ -->
    <section id="er-free-demo" class="er-section" style="background:linear-gradient(135deg,#f0faf4 0%,#d8f3e3 100%);">
        <div class="er-container">
            <div class="er-demo-layout">

                <!-- LEFT — Text -->
                <div class="er-demo-text er-reveal">
                    <h2 class="er-demo-heading">
                        Book your
                        <span class="er-demo-highlight">
                            Free Demo
                            <svg class="er-underline-svg" viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 7 Q50 3 100 7 Q150 11 198 7" stroke="#FACC15" stroke-width="4" stroke-linecap="round" fill="none"/>
                            </svg>
                        </span>
                        session
                    </h2>
                    <p class="er-demo-sub">Get a free academic counselling session with India's top educators and discover the right learning path for you.</p>

                    <ul class="er-demo-checklist">
                        <li><span class="er-check">✓</span> Live class with expert faculty</li>
                        <li><span class="er-check">✓</span> Personalised study plan created for you</li>
                        <li><span class="er-check">✓</span> Zero cost, zero commitment</li>
                    </ul>

                    <a href="#contact" class="er-demo-cta">
                        📅 Book a Free Demo
                    </a>
                </div>

                <!-- RIGHT — Image placeholder -->
                <div class="er-demo-image-wrap er-reveal er-reveal-delay-2">
                    <div class="er-demo-glow-ring"></div>
                    <img
                        src="./images/demo-teacher.png"
                        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
                        alt="Free Demo — Teacher with student"
                        class="er-demo-img"
                    />
                    <!-- Fallback placeholder shown when no image exists -->
                    <div class="er-demo-placeholder" style="display:none;">
                        <span style="font-size:5rem;">👨‍🏫</span>
                        <p style="color:#2a9d62;font-weight:700;margin-top:1rem;">Add your teacher image here</p>
                        <p style="color:#4a6156;font-size:0.85rem;">Place file at: ./images/demo-teacher.png</p>
                    </div>
                    <span class="er-sparkle er-sparkle-1">✨</span>
                    <span class="er-sparkle er-sparkle-2">⭐</span>
                    <span class="er-sparkle er-sparkle-3">+</span>
                </div>

            </div>
        </div>
    </section>
    `;
}
