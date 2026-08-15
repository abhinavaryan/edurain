export function renderFooter() {
    return `
        <div class="footer-separator"></div>
        <footer class="site-footer">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo">
                        <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                    </div>
                    <p>Empowering learners across India with accessible,<br>high-quality education and expert guidance.</p>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/edurain_official/" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/edurainofficial/" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn" aria-label="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <div class="social-dropdown-wrapper">
                            <button type="button" class="social-icon social-dropdown-toggle" title="YouTube Channels" aria-label="YouTube Channels">
                                <i class="fab fa-youtube"></i>
                            </button>
                            <div class="social-dropdown-menu">
                                <div class="dropdown-header">YouTube Channels</div>
                                <a href="https://www.youtube.com/@Eduraininstitute" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                                    <i class="fab fa-youtube"></i>
                                    <span>EduRain Institute</span>
                                </a>
                                <a href="https://www.youtube.com/@EduRain9th10th" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                                    <i class="fab fa-youtube"></i>
                                    <span>EduRain 9th &amp; 10th</span>
                                </a>
                                <a href="https://www.youtube.com/@EduRainNEETJEE" target="_blank" rel="noopener noreferrer" class="dropdown-item">
                                    <i class="fab fa-youtube"></i>
                                    <span>EduRain NEET / JEE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="https://edurain.in/jeecourse" target="_blank" rel="noopener noreferrer">&gt; JEE Courses</a></li>
                        <li><a href="https://edurain.in/neetcources" target="_blank" rel="noopener noreferrer">&gt; NEET Courses</a></li>
                        <li><a href="https://edurain.in/foundationcources" target="_blank" rel="noopener noreferrer">&gt; Foundation Courses</a></li>
                        <li><a href="#blogs">&gt; Blogs</a></li>
                        <li><a href="#about">&gt; About</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <p><i class="fas fa-phone"></i> +91 87974 43910</p>
                    <p><i class="fas fa-envelope"></i> support@edurain.in</p>
                </div>
                <div class="footer-col">
                    <h4>Get the App</h4>
                    <p>Learn on the go. Download the EduRain app today.</p>
                    <div class="app-buttons">
                        <a href="https://play.google.com/store/apps/details?id=co.lynde.fpdwe&hl=en_IN" target="_blank" rel="noopener noreferrer" class="btn-store">
                            <i class="fab fa-google-play"></i>
                            <span><small>GET IT ON</small><br>Google Play</span>
                        </a>
                        <button type="button" class="btn-store">
                            <i class="fab fa-apple"></i>
                            <span><small>Download on the</small><br>App Store</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 <span class="text-accent">EduRain</span>. All rights reserved.</p>
                <div class="legal-links">
                    <a href="#privacy">Privacy Policy</a> |
                    <a href="#terms">Terms of Service</a> |
                    <a href="#sitemap">Sitemap</a>
                </div>
            </div>
        </footer>
    `;
}

export function initFooter() {
    const toggleBtn = document.querySelector('.social-dropdown-toggle');
    const wrapper = document.querySelector('.social-dropdown-wrapper');

    if (toggleBtn && wrapper) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            wrapper.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
                wrapper.classList.remove('active');
            }
        });
    }
}

