export function renderFooter() {
    return `
        <footer class="site-footer">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo">
                        <span class="text-white">Edu</span><span class="text-accent">Rain</span> 🎓
                    </div>
                    <p>Empowering learners across India with accessible,<br>high-quality education and expert guidance.</p>
                    <div class="social-icons">
                        <span class="social-icon"><i class="fab fa-instagram"></i></span>
                        <span class="social-icon"><i class="fab fa-linkedin-in"></i></span>
                        <span class="social-icon"><i class="fab fa-youtube"></i></span>
                        <span class="social-icon"><i class="fab fa-x-twitter"></i></span>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="#home">&gt; Home</a></li>
                        <li><a href="#courses">&gt; Courses</a></li>
                        <li><a href="#blogs">&gt; Blogs</a></li>
                        <li><a href="#about">&gt; About</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <p><i class="fas fa-phone"></i> +91 98765 43210</p>
                    <p><i class="fas fa-phone"></i> +91 91234 56789</p>
                    <p><i class="fas fa-envelope"></i> hello@edurain.in</p>
                    <p><i class="fas fa-envelope"></i> support@edurain.in</p>
                </div>
                <div class="footer-col">
                    <h4>Get the App</h4>
                    <p>Learn on the go. Download the EduRain app today.</p>
                    <div class="app-buttons">
                        <button class="btn-store">
                            <i class="fab fa-google-play"></i>
                            <span><small>GET IT ON</small><br>Google Play</span>
                        </button>
                        <button class="btn-store">
                            <i class="fab fa-apple"></i>
                            <span><small>Download on the</small><br>App Store</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 <span class="text-accent">EduRain</span>. All rights reserved.</p>
                <p class="made-with-love">💚 Made with love in India</p>
                <div class="legal-links">
                    <a href="#privacy">Privacy Policy</a> |
                    <a href="#terms">Terms of Service</a> |
                    <a href="#sitemap">Sitemap</a>
                </div>
            </div>
        </footer>
    `;
}
