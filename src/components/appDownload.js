export function renderAppDownload() {
    return `
    <!-- ═══ SECTION E: APP DOWNLOAD ═══ -->
    <section id="er-app-download" class="er-section er-app-bg">

        <!-- Background decorative blobs -->
        <div class="er-app-blob er-app-blob-1"></div>
        <div class="er-app-blob er-app-blob-2"></div>

        <div class="er-container" style="position:relative;z-index:1;">
            <div class="er-app-layout">

                <!-- LEFT — Text & store buttons -->
                <div class="er-app-text er-reveal">
                    <div class="er-app-platform-badge">📱 Now Available on All Platforms</div>

                    <h2 class="er-app-heading">
                        Learn from
                        <span class="er-app-anywhere">
                            anywhere
                            <svg class="er-underline-svg" viewBox="0 0 160 10" fill="none">
                                <path d="M2 7 Q40 3 80 7 Q120 11 158 7" stroke="#FACC15" stroke-width="4" stroke-linecap="round" fill="none"/>
                            </svg>
                        </span>
                    </h2>

                    <p class="er-app-sub">We're available on Android &amp; iOS devices and platforms.</p>
                    <p class="er-app-desc">Study from anywhere at your convenience — offline videos, live classes, AI-powered practice, and doubt solving all in one place.</p>

                    <ul class="er-app-features">
                        <li><span class="er-app-check">✔</span> Offline video downloads</li>
                        <li><span class="er-app-check">✔</span> Live doubt solving 24/7</li>
                        <li><span class="er-app-check">✔</span> AI-powered personalised practice</li>
                    </ul>

                    <!-- Store Buttons -->
                    <div class="er-store-buttons">
                        <a href="#" class="er-store-btn er-store-btn-play">
                            <svg class="er-store-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.18 23.75a1.5 1.5 0 01-1.18-1.5V1.75A1.5 1.5 0 013.18.25l11.5 11.5-11.5 12zM16.5 15.25l-2.5-2.5 2.5-2.5 3.25 1.75a1.38 1.38 0 010 2.5L16.5 15.25z"/>
                            </svg>
                            <div>
                                <div class="er-store-small">GET IT ON</div>
                                <div class="er-store-name">Google Play</div>
                            </div>
                        </a>
                        <a href="#" class="er-store-btn er-store-btn-apple">
                            <svg class="er-store-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.05.13zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <div>
                                <div class="er-store-small">DOWNLOAD ON THE</div>
                                <div class="er-store-name">App Store</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- RIGHT — Floating phone mockup -->
                <div class="er-app-phone-wrap er-reveal er-reveal-delay-2">
                    <div class="er-app-glow-ring"></div>

                    <div class="er-phone-frame">
                        <!-- Notch -->
                        <div class="er-phone-notch"></div>
                        <!-- Screen -->
                        <div class="er-phone-screen">
                            <div class="er-phone-content">
                                <div style="font-size:2.5rem;margin-bottom:0.5rem;">📱</div>
                                <p style="font-weight:800;font-size:1rem;color:#fff;">EduRain App</p>
                                <p style="font-size:0.7rem;color:#a7f3d0;margin-top:0.25rem;">Victory Starts Here</p>
                                <div class="er-phone-icons">
                                    <div class="er-phone-icon">📚</div>
                                    <div class="er-phone-icon">🧪</div>
                                    <div class="er-phone-icon">📐</div>
                                    <div class="er-phone-icon">🎬</div>
                                    <div class="er-phone-icon er-phone-icon-accent">⭐</div>
                                    <div class="er-phone-icon">📊</div>
                                </div>
                                <div style="margin-top:1rem;background:rgba(255,255,255,0.1);border-radius:8px;padding:0.4rem 0.75rem;font-size:0.7rem;color:#FACC15;font-weight:600;">🔴 LIVE Class starting now</div>
                            </div>
                        </div>
                    </div>

                    <!-- Floating subject badges -->
                    <div class="er-badge-float er-badge-float-1"><span>⚗️</span> Chemistry</div>
                    <div class="er-badge-float er-badge-float-2"><span>📐</span> Maths</div>
                    <div class="er-badge-float er-badge-float-3 er-badge-yellow"><span>🌟</span> Live Class</div>

                    <!-- Decorative icons -->
                    <span class="er-deco er-deco-1">✨</span>
                    <span class="er-deco er-deco-2">🔬</span>
                    <span class="er-deco er-deco-3">💡</span>
                </div>

            </div>
        </div>
    </section>
    `;
}
