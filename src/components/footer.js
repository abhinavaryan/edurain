export function renderFooter() {
    return `
        <div class="footer-separator"></div>
        <footer class="site-footer">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo" style="margin-bottom: 1rem;">
                        <a href="https://www.edurain.in" style="text-decoration: none; display: flex; align-items: center; gap: 10px;">
                            <img src="./images/logo.png" alt="EduRain Logo" style="height: 55px; width: auto; max-width: 65px; object-fit: contain;">
                            <div>
                                <span class="text-white">Edu</span><span class="text-accent">Rain</span>
                                <div style="font-size: 0.45rem; color: #a7f3d0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">Victory Starts Here</div>
                            </div>
                        </a>
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
                        <li><a href="#jeecourses">&gt; JEE Courses</a></li>
                        <li><a href="#neetcourses">&gt; NEET Courses</a></li>
                        <li><a href="#foundationcourses">&gt; Foundation Courses</a></li>
                        <li><a href="#blogs">&gt; Blogs</a></li>
                        <li><a href="#about">&gt; About</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <p>
                        <i class="fas fa-phone"></i> 
                        <a href="tel:+918797443910" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">+91 87974 43910</a>
                        <span style="margin: 0 5px; opacity: 0.5;">|</span>
                        <a href="https://wa.me/918797443910" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none; font-size: 1.1em;" title="Chat on WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </p>
                    <p><i class="fas fa-envelope"></i> <a href="mailto:support@edurain.in" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">support@edurain.in</a></p>
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
                    <a href="#terms">Terms and Conditions</a>
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

