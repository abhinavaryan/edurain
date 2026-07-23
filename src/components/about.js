export function renderAbout() {
    return `
        <section class="about-section low-light-bg" id="about">
            <div class="section-header">
                <h2 class="text-light">About EduRain</h2>
            </div>
            <div class="about-content">
                <div class="about-left">
                    <div class="glass-card mission-card">
                        <h3>Our Mission</h3>
                        <p>To democratize quality education across India using technology.</p>
                    </div>
                    <div class="glass-card vision-card">
                        <h3>Our Vision</h3>
                        <p>To become India's most trusted and accessible learning platform by 2030.</p>
                    </div>
                </div>
                <div class="about-right text-light">
                    <h3>Our Story</h3>
                    <p>Founded in 2024, EduRain was born from a simple idea: education should be accessible to everyone, everywhere. What started as a small initiative has quickly grown into a comprehensive learning ecosystem.</p>
                    <p>We believe in combining the best educators with cutting-edge technology to deliver personalized, engaging, and effective learning experiences.</p>
                    <div class="about-stats">
                        <div class="stat">Founded 2024</div>
                        <div class="stat">10K+ Students</div>
                        <div class="stat">50+ Expert Educators</div>
                    </div>
                </div>
            </div>
            <div class="values-row">
                <div class="glass-card value-card">
                    <h4>Innovation</h4>
                    <p>Constantly improving the learning experience.</p>
                </div>
                <div class="glass-card value-card">
                    <h4>Accessibility</h4>
                    <p>Education for everyone, anywhere.</p>
                </div>
                <div class="glass-card value-card">
                    <h4>Excellence</h4>
                    <p>Uncompromising quality in everything we do.</p>
                </div>
            </div>
        </section>
    `;
}
