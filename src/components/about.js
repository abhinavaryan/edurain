export function renderAbout() {
    return `
        <section class="er-about-hero" id="about">
            <!-- Beautiful gradient mesh background -->
            <div class="er-about-bg-mesh">
                <div class="mesh-orb mesh-orb-1"></div>
                <div class="mesh-orb mesh-orb-2"></div>
                <div class="mesh-orb mesh-orb-3"></div>
            </div>
            
            <div class="er-about-container">
                <!-- Hero Header -->
                <div class="er-about-header">
                    <h1 class="er-about-title">About Us — EduRain</h1>
                    <p class="er-about-subtitle">Foundation today, results tomorrow.</p>
                </div>

                <div class="er-about-grid">
                    <!-- Left Column: Who we are & Story -->
                    <div class="er-about-col-left">
                        <div class="er-glass-card er-about-card">
                            <div class="er-card-icon">🎯</div>
                            <h2>Who We Are</h2>
                            <p>At EduRain, we believe quality education shouldn't depend on where you live or how much you can afford to spend on coaching. We started EduRain with one simple goal: to bring foundation learning for Classes 6 to 10 and online coaching for IIT-JEE and NEET preparation to every student who's serious about their future, no matter which city or town they're studying from.</p>
                        </div>
                        
                        <div class="er-glass-card er-about-card">
                            <div class="er-card-icon">📖</div>
                            <h2>Our Story</h2>
                            <p>We saw how the internet was changing the way students in India prepare for competitive exams. We also saw a gap: many students still struggle to find a platform that combines strong fundamentals with focused JEE and NEET preparation, at a pace and price that actually works for them. That's the gap we built EduRain to fill.</p>
                        </div>
                    </div>

                    <!-- Right Column: What we offer & Why Us -->
                    <div class="er-about-col-right">
                        <div class="er-glass-card er-about-card er-card-highlight">
                            <div class="er-card-icon">✨</div>
                            <h2>What We Offer</h2>
                            <ul class="er-about-list">
                                <li><strong>Foundation Courses (Classes 6–10):</strong> We help students build strong concepts in Maths and Science early on, so the transition to JEE and NEET preparation later feels natural, not overwhelming.</li>
                                <li><strong>IIT-JEE Preparation:</strong> Structured online classes, regular practice tests, and doubt-solving sessions designed around the JEE syllabus and exam pattern.</li>
                                <li><strong>NEET Preparation:</strong> Focused Biology, Physics, and Chemistry coaching built around what NEET actually demands — accuracy, speed, and conceptual clarity.</li>
                                <li><strong>Live and Recorded Classes:</strong> So students can learn at a time and pace that suits them, whether they're keeping up in real time or revising later.</li>
                            </ul>
                        </div>
                        
                        <div class="er-glass-card er-about-card">
                            <div class="er-card-icon">🤝</div>
                            <h2>Why Students Choose EduRain</h2>
                            <p>We're not trying to be the biggest online coaching platform. We're trying to be the one that genuinely cares whether a student understands a concept, not just whether they've watched a video. Our teachers focus on building a strong foundation first, because we've seen that students who understand the "why" behind a formula perform far better in JEE and NEET than those who simply memorize.</p>
                        </div>
                    </div>
                </div>

                <!-- Promise Section (Full width at bottom) -->
                <div class="er-glass-card er-about-promise-card text-center">
                    <div class="er-card-icon">💎</div>
                    <h2>Our Promise</h2>
                    <p>Every student who comes to EduRain gets the same thing from us: honest teaching, real support, and a team that wants to see them succeed. Whether a student is in Class 6 just starting to enjoy Maths, or in Class 12 preparing for the final NEET or JEE attempt, our focus stays the same.</p>
                    <h3 class="er-promise-tagline">EduRain — Foundation today, results tomorrow.</h3>
                </div>
            </div>
        </section>
    `;
}
