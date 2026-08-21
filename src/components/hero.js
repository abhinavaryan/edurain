export function renderHero() {
    return `
        <section class="hero-section" id="home">
            <div class="hero-glitch-overlay" style="position: absolute; inset: 0; z-index: 999; pointer-events: auto; background: transparent;"></div>
            <div class="hero-content">
                <div class="hero-text">
                    <span class="badge">🏆 #1 Learning Platform</span>
                    <h1><span class="text-accent">Victory</span> starts here.</h1>
                    <p>Join EduRain to access world-class education from anywhere. Empowering millions to achieve their dreams with interactive courses and expert guidance.</p>
                    <div class="search-bar">
                        <input type="text" placeholder="Search courses..." />
                        <button class="search-icon-btn" aria-label="Search">🔍</button>
                    </div>
                    <div class="cta-buttons">
                        <button class="btn btn-accent btn-lg">Download App</button>
                        <a href="/courses" class="btn btn-outline btn-lg">Explore Courses</a>
                    </div>
                    <div class="stats-row">
                        <div class="stat-item"><strong>10K+</strong> Students</div>
                        <div class="stat-item"><strong>500+</strong> Courses</div>
                        <div class="stat-item"><strong>50+</strong> Experts</div>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="hero-illustration">
                        <span class="particle particle-1"></span>
                        <span class="particle particle-2"></span>
                        <span class="particle particle-3"></span>
                    </div>
                </div>
            </div>
        </section>
    `;
}
