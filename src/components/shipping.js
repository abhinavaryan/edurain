// Shipping & Delivery Policy for printed book sets bought on the EduRain Platform (sold in the Android app).
// Same look as the Privacy Policy page.

const H2 = 'color: var(--text-main); font-size: 1.8rem; margin-bottom: 1.5rem; font-weight: 700;';
const P = 'margin-bottom: 1rem;';
const UL = 'list-style-type: disc; padding-left: 24px; margin-bottom: 1.5rem; color: rgba(255,255,255,0.85);';
const LI = 'margin-bottom: 0.5rem;';
const HR = '<hr style="border-color: rgba(255,255,255,0.1); margin: 3rem 0;">';
const LINK = 'color: var(--accent); text-decoration: none; border-bottom: 1px dashed var(--accent);';

const list = (items) => `<ul style="${UL}">${items.map((item) => `<li style="${LI}">${item}</li>`).join('')}</ul>`;

export function renderShipping() {
    return `
        <section class="er-privacy-section fade-in-section visible" id="shipping" style="padding: 120px 5%; background: var(--bg-dark); color: var(--text-main); min-height: 100vh;">
            <div class="er-privacy-container" style="max-width: 1000px; margin: 0 auto;">
                <div class="er-privacy-header text-center" style="margin-bottom: 60px;">
                    <h1 class="text-gradient" style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; margin-bottom: 1rem; letter-spacing: -0.02em;">Shipping & Delivery Policy</h1>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">Last Updated: November 9, 2026 | Applies to printed book sets bought on the EduRain Platform</p>
                </div>

                <div class="er-glass-card" style="padding: clamp(2rem, 4vw, 4rem); border-radius: 24px; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); line-height: 1.85; color: rgba(255, 255, 255, 0.88);">

                    <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">
                        This policy explains how <strong>EduRain (OPC) Private Limited</strong> ("EduRain", "We", "Us" or "Our") ships the printed book sets You buy from Us, for example in the EduRain app for Android. Please read it together with our <a href="/terms" style="${LINK}">Terms & Conditions</a>, <a href="/refund-policy" style="${LINK}">Refund/Cancellation Policy</a> and <a href="/privacy" style="${LINK}">Privacy Policy</a>.
                    </p>

                    <div style="background: rgba(56, 189, 248, 0.08); border-left: 4px solid #38bdf8; padding: 1.25rem 1.5rem; margin-bottom: 2.5rem; border-radius: 8px;">
                        <p style="margin: 0; font-size: 1rem; color: #e0f2fe; line-height: 1.7;">
                            <strong>In short:</strong> We deliver across India. Delivery is included in the price, so there is no extra shipping charge. Books are usually dispatched within 3–5 working days and delivered within 5–10 working days after dispatch. The free online access that comes with Your book set starts right after payment and does not wait for the books to arrive.
                        </p>
                    </div>

                    ${HR}

                    <h2 style="${H2}">1. Where We Deliver</h2>
                    <p style="${P}">We deliver to addresses in India that our courier and logistics partners can reach. We do not ship outside India. If Your pincode cannot be served, We will contact You to arrange another address in India or give You a full refund.</p>

                    ${HR}

                    <h2 style="${H2}">2. Shipping Charges</h2>
                    <p style="${P}">The price shown for a book set includes delivery to Your address in India. We do not add any shipping or packing charge at checkout.</p>

                    ${HR}

                    <h2 style="${H2}">3. Dispatch and Delivery Time</h2>
                    ${list([
                        '<strong>Dispatch:</strong> We pack and hand over Your books to the courier within <strong>3–5 working days</strong> after Your payment is confirmed. Working days are Monday to Saturday, except public holidays.',
                        '<strong>Delivery:</strong> Most orders reach You within <strong>5–10 working days</strong> after dispatch. Remote areas (for example parts of the North-East, Jammu & Kashmir, Ladakh, Andaman & Nicobar Islands and Lakshadweep) may take longer.',
                        '<strong>If a book is being printed or is out of stock:</strong> We will tell You the expected dispatch date. If You do not want to wait, You may cancel and get a full refund.',
                        '<strong>Delays We cannot control:</strong> bad weather, floods, strikes, courier network problems, government restrictions and similar events can delay delivery. We will keep You informed.',
                    ])}

                    ${HR}

                    <h2 style="${H2}">4. Online Access with Your Book Set</h2>
                    <p style="${P}">Each book set comes with free online access to the same batch in the EduRain app: live classes, study material and tests. This access starts as soon as Your payment is confirmed, so You can begin studying while the books are on their way.</p>

                    ${HR}

                    <h2 style="${H2}">5. Delivery Address and Tracking</h2>
                    ${list([
                        'At checkout You give the student\'s name, the receiver\'s name and mobile number, email address, full delivery address, city, state and pincode. Please check them carefully; We ship to the address You enter.',
                        'Keep the receiver\'s mobile number reachable. The courier may call the receiver to deliver the parcel.',
                        '<strong>Changing the address:</strong> email or WhatsApp Us before the order is dispatched. Once the parcel is handed to the courier, the address cannot be changed.',
                        '<strong>Tracking:</strong> after dispatch We share the courier name and tracking number by SMS, email or WhatsApp. You can also ask Our support team for an update at any time.',
                    ])}

                    ${HR}

                    <h2 style="${H2}">6. If Delivery Fails</h2>
                    <p style="${P}">If the courier cannot deliver the parcel (for example because the address is incomplete, the receiver cannot be reached or the parcel is refused), it may come back to Us. We will contact You to ship it again. If the parcel came back because of a wrong or incomplete address, or because the receiver was not available or refused it, You may have to pay the courier charge for sending it again.</p>

                    ${HR}

                    <h2 style="${H2}">7. Damaged, Missing or Wrong Books</h2>
                    ${list([
                        'Please check the parcel when You receive it. If the outer package is badly damaged or opened, You may refuse it or note this with the courier.',
                        'If any book is damaged, missing or wrong, tell Us within <strong>48 hours of delivery</strong> at <a href="mailto:support@edurain.in" style="' + LINK + '">support@edurain.in</a> or on WhatsApp, with Your registered mobile number and clear photos of the parcel and the books (an unboxing video helps).',
                        'After checking, We will send the replacement books at no extra cost.',
                    ])}

                    ${HR}

                    <h2 style="${H2}">8. Cancellation and Refund</h2>
                    ${list([
                        'You can cancel a book set order within <strong>24 hours of payment</strong> if it has not been dispatched yet. You will get a full refund to the original payment method, usually within 7 working days. The online access that came with the book set ends when the order is cancelled.',
                        'After dispatch, or after 24 hours, the order cannot be cancelled, as set out in our <a href="/refund-policy" style="' + LINK + '">Refund/Cancellation Policy</a>.',
                        'If We cannot deliver to Your pincode, or You choose not to wait for a book that is out of stock, We refund the full amount.',
                    ])}

                    ${HR}

                    <h2 style="${H2}">9. Contact Us</h2>
                    <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 12px; text-align: center;">
                        <p style="margin-bottom: 0.5rem;"><strong>EduRain (OPC) Private Limited</strong></p>
                        <p style="margin-bottom: 0.5rem;"><i class="fas fa-envelope" style="color: var(--accent); margin-right: 8px;"></i> <a href="mailto:support@edurain.in" style="color: var(--text-main); text-decoration: none;">support@edurain.in</a></p>
                        <p style="margin-bottom: 0.5rem;"><i class="fas fa-phone" style="color: var(--accent); margin-right: 8px;"></i> <a href="tel:+918796443910" style="color: var(--text-main); text-decoration: none;">+91 8796443910</a> | <a href="https://wa.me/918796443910" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: none;"><i class="fab fa-whatsapp"></i> WhatsApp</a></p>
                        <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem;">Sector 132, Urbtech, Expressway, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201304, India</p>
                    </div>

                </div>
            </div>
        </section>
    `;
}
