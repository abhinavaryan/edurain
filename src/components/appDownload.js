export function renderAppDownload() {
    return `

    <section id="er-app-download" class="er-section er-app-bg">

        <div class="er-app-blob er-app-blob-1"></div>
        <div class="er-app-blob er-app-blob-2"></div>

        <div class="er-container" style="position:relative;z-index:1;">
            <div class="er-app-layout">

                <!-- LEFT — Text & store buttons -->
                <div class="er-app-text er-reveal visible">

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
                        <a href="https://play.google.com/store/apps/details?id=co.lynde.fpdwe&hl=en_IN" target="_blank" rel="noopener noreferrer" class="er-store-btn er-store-btn-play">
                            <svg class="er-store-icon" viewBox="0 0 48 48">
                                <path fill="#00D2FF" d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"></path>
                                <path fill="#00E676" d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"></path>
                                <path fill="#FF3D00" d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"></path>
                                <path fill="#FFC107" d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z"></path>
                            </svg>
                            <div>
                                <div class="er-store-small">GET IT ON</div>
                                <div class="er-store-name">Google Play</div>
                            </div>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" class="er-store-btn er-store-btn-apple">
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
                <div class="er-app-phone-wrap er-reveal visible">
                    <div class="er-app-glow-ring"></div>

                    <div class="er-phone-frame">
                        <!-- Notch -->
                        <div class="er-phone-notch"></div>
                        <!-- Screen -->
                        <div class="er-phone-screen">
                            <img loading="lazy" src="/images/floating%20phone.jpg" alt="EduRain App" style="width:100%; height:100%; object-fit:cover; display:block;" />
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
