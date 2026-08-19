export function initMobileAppPopup() {
    // Only show on mobile devices (width <= 768px)
    if (window.innerWidth > 768) {
        return;
    }

    // Wait exactly 3 seconds before showing the popup
    setTimeout(() => {
        showPopup();
    }, 3000);
}

function showPopup() {
    // Don't inject multiple times
    if (document.getElementById('mobile-app-popup-overlay')) {
        return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'mobile-app-popup-overlay';
    overlay.className = 'mobile-popup-overlay';

    const content = document.createElement('div');
    content.className = 'mobile-popup-content';

    content.innerHTML = `
        <button class="mobile-popup-close-x" id="popup-btn-x" aria-label="Close">
            <i class="fas fa-times"></i>
        </button>
        <div class="mobile-popup-banner">
            <img src="/images/mobile_popup_banner.png" alt="EduRain App on Mobile Phones">
        </div>
        <div class="mobile-popup-body">
            <div class="mobile-popup-title">Get EduRain App for</div>
            <div class="mobile-popup-subtitle">Access live & recorded classes on the go</div>
            
            <div class="mobile-popup-dynamic-text-container">
                <div id="popup-dynamic-text" class="mobile-popup-dynamic-text">Exclusive App-Only Features</div>
            </div>

            <button class="btn btn-primary mobile-popup-btn-open" id="popup-btn-open">
                Open in App
            </button>
            
            <button class="mobile-popup-btn-close" id="popup-btn-close">
                Continue in Web
            </button>
        </div>
        
        <!-- iOS Org Code View (Initially Hidden) -->
        <div class="mobile-popup-ios-view" id="mobile-popup-ios-view" style="display: none; padding: 1.5rem; text-align: center;">
            <div class="mobile-popup-title" style="font-size: 1.1rem; color: #1a1a1a; font-weight: 600; margin-bottom: 1rem;">
                Almost there!
            </div>
            <div class="mobile-popup-subtitle" style="font-size: 0.95rem; line-height: 1.4; margin-bottom: 1.5rem;">
                You will be redirected to the <strong>MyInstitute</strong> app. To access EduRain, please enter our organization code:
            </div>
            <div style="background: #f0f4f8; padding: 1rem; border-radius: 8px; font-size: 1.5rem; font-weight: 800; letter-spacing: 2px; color: #5a4bda; margin-bottom: 1.5rem; user-select: all; text-transform: uppercase;">
                rwoaln
            </div>
            <button class="btn btn-primary mobile-popup-btn-open" id="popup-btn-ios-continue">
                Copy Code & Go to App Store
            </button>
            <button class="mobile-popup-btn-close" id="popup-btn-ios-cancel">
                Cancel
            </button>
        </div>
    `;

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    // Trigger animation slightly after injection
    setTimeout(() => {
        overlay.classList.add('visible');
        content.classList.add('visible');
    }, 50);

    // Setup dynamic text cycling
    const phrases = [
        "Exclusive App-Only Features",
        "Your Entire Prep in One App",
        "Learning Anytime, Anywhere"
    ];
    let currentPhraseIndex = 0;
    const dynamicTextEl = document.getElementById('popup-dynamic-text');
    
    const textInterval = setInterval(() => {
        if (!dynamicTextEl) {
            clearInterval(textInterval);
            return;
        }
        // Fade out
        dynamicTextEl.style.opacity = '0';
        dynamicTextEl.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            dynamicTextEl.textContent = phrases[currentPhraseIndex];
            // Fade in
            dynamicTextEl.style.opacity = '1';
            dynamicTextEl.style.transform = 'translateY(0)';
        }, 300); // Wait for fade out to complete
    }, 3000);

    // Event Listeners for closing
    const dismissPopup = () => {
        clearInterval(textInterval);
        overlay.classList.remove('visible');
        content.classList.remove('visible');
        
        // Remove from DOM after transition
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 400); // Matches CSS transition duration
    };

    document.getElementById('popup-btn-close').addEventListener('click', dismissPopup);
    document.getElementById('popup-btn-x').addEventListener('click', dismissPopup);
    
    // If they click the overlay (outside the modal), also dismiss it
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            dismissPopup();
        }
    });

    // Device OS Detection & Open in App Logic
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    document.getElementById('popup-btn-open').addEventListener('click', () => {
        if (isIOS) {
            // Show iOS Org Code screen
            document.querySelector('.mobile-popup-body').style.display = 'none';
            document.getElementById('mobile-popup-ios-view').style.display = 'block';
        } else {
            // Android / Others: Direct to Play Store
            window.open('https://play.google.com/store/apps/details?id=co.lynde.fpdwe&hl=en_IN', '_blank');
            dismissPopup();
        }
    });

    // iOS View Buttons
    document.getElementById('popup-btn-ios-cancel').addEventListener('click', () => {
        // Go back to main popup view
        document.getElementById('mobile-popup-ios-view').style.display = 'none';
        document.querySelector('.mobile-popup-body').style.display = 'block';
    });

    document.getElementById('popup-btn-ios-continue').addEventListener('click', () => {
        // Copy org code to clipboard
        navigator.clipboard.writeText('rwoaln').catch(err => console.log('Clipboard error:', err));
        
        // Redirect to App Store
        window.open('https://apps.apple.com/in/app/myinstitute/id1472483563', '_blank');
        dismissPopup();
    });
}
