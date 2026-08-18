export function initIosAppPopup() {
    // Add a global click listener for any App Store buttons
    document.addEventListener('click', (e) => {
        const appleBtn = e.target.closest('.er-store-btn-apple');
        if (appleBtn) {
            e.preventDefault();
            showIosPopup();
        }
    });
}

function showIosPopup() {
    if (document.getElementById('ios-app-popup-overlay')) {
        return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'ios-app-popup-overlay';
    // Reusing the mobile popup styles for consistency, but making it centered
    overlay.className = 'mobile-popup-overlay';
    overlay.style.alignItems = 'center'; // Center on desktop too
    overlay.style.justifyContent = 'center';

    const content = document.createElement('div');
    content.className = 'mobile-popup-content';
    content.style.position = 'relative';
    content.style.margin = 'auto'; // Center horizontally
    content.style.maxWidth = '400px';
    content.style.borderRadius = '16px';
    
    // Check if the user is on mobile width, if so attach it to bottom like the mobile popup
    if (window.innerWidth <= 768) {
        content.style.margin = 'auto auto 0 auto'; // Push to bottom on mobile
        content.style.borderBottomLeftRadius = '0';
        content.style.borderBottomRightRadius = '0';
    }

    content.innerHTML = `
        <button class="mobile-popup-close-x" id="ios-popup-btn-x" aria-label="Close" style="top: 15px; right: 15px;">
            <i class="fas fa-times"></i>
        </button>
        <div style="padding: 2rem 1.5rem; text-align: center;">
            <div style="margin-bottom: 1rem;">
                <svg viewBox="0 0 24 24" fill="#000000" style="width: 48px; height: 48px; display: inline-block;">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.05.13zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
            </div>
            <div class="mobile-popup-title" style="font-size: 1.25rem; color: #1a1a1a; font-weight: 700; margin-bottom: 0.75rem;">
                Almost there!
            </div>
            <div class="mobile-popup-subtitle" style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem; color: #4b5563;">
                You will be redirected to the <strong>MyInstitute</strong> app on the App Store. To access EduRain, please enter our organization code:
            </div>
            <div style="background: #f3f4f6; padding: 1rem; border-radius: 8px; font-size: 1.75rem; font-weight: 800; letter-spacing: 3px; color: #1f2937; margin-bottom: 1.5rem; user-select: all; text-transform: uppercase; border: 2px dashed #d1d5db;">
                rwoaln
            </div>
            <button class="btn btn-primary mobile-popup-btn-open" id="ios-popup-btn-continue" style="width: 100%; margin-bottom: 0.75rem; padding: 12px; font-weight: 600; font-size: 1rem;">
                Copy Code & Go to App Store
            </button>
            <button class="mobile-popup-btn-close" id="ios-popup-btn-cancel" style="width: 100%; font-weight: 500;">
                Cancel
            </button>
        </div>
    `;

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    // Trigger animation
    setTimeout(() => {
        overlay.classList.add('visible');
        content.classList.add('visible');
    }, 50);

    const dismissPopup = () => {
        overlay.classList.remove('visible');
        content.classList.remove('visible');
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 400);
    };

    document.getElementById('ios-popup-btn-cancel').addEventListener('click', dismissPopup);
    document.getElementById('ios-popup-btn-x').addEventListener('click', dismissPopup);
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            dismissPopup();
        }
    });

    document.getElementById('ios-popup-btn-continue').addEventListener('click', () => {
        navigator.clipboard.writeText('rwoaln').catch(err => console.log('Clipboard error:', err));
        window.open('https://apps.apple.com/in/app/myinstitute/id1472483563', '_blank');
        dismissPopup();
    });
}
