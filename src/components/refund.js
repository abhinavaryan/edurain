export function renderRefund() {
    return `
        <section class="er-privacy-section fade-in-section visible" id="refund" style="padding: 120px 5%; background: var(--bg-dark); color: var(--text-main); min-height: 100vh;">
            <div class="er-privacy-container" style="max-width: 1000px; margin: 0 auto;">
                <div class="er-privacy-header text-center" style="margin-bottom: 60px;">
                    <h1 class="text-gradient" style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; margin-bottom: 1rem;">Refund/Cancellation Policy</h1>
                    <p style="color: var(--text-muted); font-size: 1.1rem;">Transparent and Fair Policy</p>
                </div>

                <div class="er-glass-card" style="padding: clamp(2rem, 4vw, 4rem); border-radius: 24px; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); line-height: 1.8; color: rgba(255, 255, 255, 0.85);">
                    <div style="display: flex; justify-content: center; margin-bottom: 30px;">
                        <span style="background: rgba(255, 255, 255, 0.05); color: var(--accent); display: flex; align-items: center; justify-content: center; width: 80px; height: 80px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.1);">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </span>
                    </div>
                    
                    <h2 style="color: var(--text-main); font-size: 1.8rem; text-align: center; margin-bottom: 25px; font-weight: 600;">24-Hour Policy</h2>
                    
                    <p style="font-size: 1.15rem; line-height: 1.8; color: rgba(255,255,255,0.85); text-align: center; margin-bottom: 25px;">
                        Please read the subscription terms and conditions carefully before purchasing any course, as once you have purchased you cannot change or cancel your course after <strong style="color: var(--accent);">24 hours (1 day)</strong>.
                    </p>
                    
                    <hr style="border-color: rgba(255,255,255,0.1); margin: 35px 0;">
                    
                    <p style="font-size: 1.15rem; line-height: 1.8; color: rgba(255,255,255,0.85); text-align: center;">
                        Once you enroll and make the required payment, it shall be final and cannot be changed or modified after <strong style="color: var(--accent);">24 hours</strong>, and neither will there be any refund.
                    </p>
                </div>
            </div>
        </section>
    `;
}
