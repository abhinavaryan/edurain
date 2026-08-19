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
                                <p><a href="mailto:support@edurain.in" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">support@edurain.in</a></p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📞</span>
                            <div>
                                <strong>Phone</strong>
                                <p>
                                    <a href="tel:+918796443910" style="color: inherit; text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color=''">+91 87964 43910</a>
                                    <span style="margin: 0 5px; opacity: 0.5;">|</span>
                                    <a href="https://wa.me/918796443910" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none; font-size: 1.1em;" title="Chat on WhatsApp"><i class="fab fa-whatsapp"></i></a>
                                </p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">📍</span>
                            <div>
                                <strong>Location</strong>
                                <p>Delhi, India</p>
                            </div>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="https://www.instagram.com/edurain_official/" target="_blank" rel="noopener noreferrer" class="social-icon" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/edurainofficial/" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
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
                // 1. Save to Firebase
                await saveContactMessage(name, email, message);
                
                // 2. Save to Google Spreadsheet
                try {
                    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxspWFgxEFlxdDa1O5GXLHwjeBAsytPeAwAWpOqTlum_hQ0_P4_wIHtcj-HPMTZrJNY/exec';
                    const formData = new URLSearchParams();
                    formData.append('name', name);
                    formData.append('email', email);
                    formData.append('message', message);
                    
                    await fetch(scriptUrl, {
                        method: 'POST',
                        body: formData,
                        mode: 'no-cors' // Important for Google Apps Script to prevent CORS errors on the frontend
                    });
                } catch (sheetErr) {
                    console.error('Google Sheets saving error:', sheetErr);
                }

                messageArea.textContent = '✅ Thanks for your enquiry! Our consultant will connect with you shortly.';
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
