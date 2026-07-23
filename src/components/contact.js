import { saveContactMessage } from '../firebase/firestore.js';

export function renderContact() {
    return `
        <section class="contact-section" id="contact">
            <div class="section-header">
                <h2>Get In Touch</h2>
                <p>We'd love to hear from you</p>
            </div>
            <div class="contact-layout">
                <div class="contact-info">
                    <h3>Let's Connect</h3>
                    <p>Have questions about our courses or platform? Reach out to our team and we'll get back to you within 24 hours.</p>
                    <div class="contact-items">
                        <div class="contact-item">
                            <span class="contact-icon">📧</span>
                            <div>
                                <strong>Email</strong>
                                <p>hello@edurain.in</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📞</span>
                            <div>
                                <strong>Phone</strong>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📍</span>
                            <div>
                                <strong>Location</strong>
                                <p>Mumbai, India</p>
                            </div>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#" class="social-icon" title="Twitter">𝕏</a>
                        <a href="#" class="social-icon" title="LinkedIn">in</a>
                        <a href="#" class="social-icon" title="Instagram">📷</a>
                        <a href="#" class="social-icon" title="YouTube">▶</a>
                    </div>
                </div>
                <div class="contact-form-wrapper">
                    <form class="contact-form glass-card" id="contact-form">
                        <div class="form-group">
                            <input type="text" id="contact-name" placeholder="Your Name" required minlength="2" />
                        </div>
                        <div class="form-group">
                            <input type="email" id="contact-email" placeholder="Your Email" required />
                        </div>
                        <div class="form-group">
                            <textarea id="contact-message" placeholder="Your Message" required minlength="10" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-accent btn-lg btn-full" id="contact-submit">Send Message</button>
                        <div class="form-message" id="form-message"></div>
                    </form>
                </div>
            </div>
        </section>
    `;
}

export function initContact() {
    const form = document.getElementById('contact-form');
    const messageArea = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            // Validation
            if (name.length < 2) {
                messageArea.textContent = 'Please enter your name (min 2 characters).';
                messageArea.className = 'form-message error';
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                messageArea.textContent = 'Please enter a valid email address.';
                messageArea.className = 'form-message error';
                return;
            }
            if (message.length < 10) {
                messageArea.textContent = 'Message must be at least 10 characters.';
                messageArea.className = 'form-message error';
                return;
            }

            const submitBtn = document.getElementById('contact-submit');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                await saveContactMessage(name, email, message);
                messageArea.textContent = '✅ Message sent successfully! We will get back to you soon.';
                messageArea.className = 'form-message success';
                form.reset();
            } catch (err) {
                messageArea.textContent = '❌ Failed to send message. Please try again.';
                messageArea.className = 'form-message error';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        });
    }
}
