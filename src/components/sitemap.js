export function renderSitemap() {
    return `
        <section class="er-sitemap-section fade-in-section visible" id="sitemap" style="padding: 120px 5%; background: var(--bg-dark); color: var(--text-main); min-height: 100vh;">
            <div class="er-container" style="max-width: 900px; margin: 0 auto;">
                <div class="er-glass-card glass-card fade-in-section visible" style="padding: 3rem; margin-bottom: 2rem;">
                    
                    <h1 style="font-size: 2.5rem; font-weight: 800; color: var(--accent); margin-bottom: 2rem; text-align: center;">Site Map</h1>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                        <!-- Main Pages -->
                        <div>
                            <h2 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">Main Pages</h2>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><a href="/" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Home</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="/about" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">About Us</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="/courses" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">All Courses</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="/blogs" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Blogs</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="/journey" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Journey & Reflection</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="/reviews" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Student Reviews</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="/contact" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Contact Us</a></li>
                            </ul>
                        </div>

                        <!-- Course Categories -->
                        <div>
                            <h2 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">Course Categories</h2>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><a href="/jeecourses" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">JEE Preparation</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="/neetcourses" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">NEET Preparation</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="/foundationcourses" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Foundation (6th-10th)</a></li>
                            </ul>
                        </div>

                        <!-- Legal -->
                        <div>
                            <h2 style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">Legal & Support</h2>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 0.5rem;"><a href="/privacy" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Privacy Policy</a></li>
                                <li style="margin-bottom: 0.5rem;"><a href="/terms" style="color: var(--text-muted); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `;
}
