export function initFab() {
    const fabContainer = document.createElement('div');
    fabContainer.id = 'er-fab-container';
    
    // SVG Icons
    const arrowUpIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`;
    const whatsappIcon = `<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;
    const chatIcon = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><circle cx="9" cy="11" r="1" fill="currentColor"/><circle cx="15" cy="11" r="1" fill="currentColor"/><path d="M9 15c.5 1 2 1.5 3 1.5s2.5-.5 3-1.5"/></svg>`;

    fabContainer.innerHTML = `
        <!-- AI Chat Window (Hidden by default) -->
        <div id="er-chat-window" class="er-chat-hidden">
            <div class="er-chat-header">
                <div class="er-chat-title">
                    <div class="er-chat-avatar">AI</div>
                    <div>
                        <div style="font-weight:700;font-size:0.95rem;">EduRain AI Assistant</div>
                        <div style="font-size:0.75rem;color:#a7f3d0;">Online</div>
                    </div>
                </div>
                <button class="er-chat-close" id="er-chat-close">&times;</button>
            </div>
            
            <div class="er-chat-body" id="er-chat-body">
                <div class="er-chat-msg er-msg-ai">
                    <p>Hello! Welcome to EduRain. How can I assist you with your preparation today?</p>
                </div>
            </div>
            
            <div class="er-chat-footer">
                <div class="er-chat-input-area">
                    <input type="text" id="er-chat-input" placeholder="Type your message..." autocomplete="off">
                    <button id="er-chat-send" aria-label="Send message">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- FAB Stack -->
        <div class="er-fab-stack">
            <button class="er-fab-btn er-fab-small" id="er-fab-scroll" aria-label="Scroll to top" title="Scroll to Top">
                ${arrowUpIcon}
            </button>
            <a href="https://wa.me/918796443910" target="_blank" rel="noopener noreferrer" class="er-fab-btn er-fab-whatsapp" aria-label="WhatsApp" title="Chat on WhatsApp">
                ${whatsappIcon}
            </a>
            <button class="er-fab-btn er-fab-chat" id="er-fab-chat" aria-label="AI Assistant" title="AI Assistant">
                <div class="er-fab-pulse"></div>
                ${chatIcon}
            </button>
        </div>
    `;

    document.body.appendChild(fabContainer);

    // Event Listeners
    const btnScroll = document.getElementById('er-fab-scroll');
    const btnChat = document.getElementById('er-fab-chat');
    const btnClose = document.getElementById('er-chat-close');
    const chatWindow = document.getElementById('er-chat-window');

    // Scroll to Top Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnScroll.classList.add('er-fab-visible');
        } else {
            btnScroll.classList.remove('er-fab-visible');
        }
    });

    btnScroll.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Chat Toggle Logic
    const toggleChat = () => {
        chatWindow.classList.toggle('er-chat-hidden');
    };

    btnChat.addEventListener('click', toggleChat);
    btnClose.addEventListener('click', toggleChat);

    const chatInput = document.getElementById('er-chat-input');
    const chatSendBtn = document.getElementById('er-chat-send');
    const chatBody = document.getElementById('er-chat-body');

    const playSound = (type = 'send') => {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            oscillator.type = 'sine';
            if (type === 'send') {
                oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.1);
            } else {
                oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.1);
            }
            
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.1);
        } catch(e) { console.log(e); }
    };

    const handleSendMessage = () => {
        const text = chatInput.value.trim();
        if (!text) return;

        playSound('send');

        // User Message
        const userMsgDiv = document.createElement('div');
        userMsgDiv.className = 'er-chat-msg er-msg-user chat-msg-enter';
        userMsgDiv.innerHTML = `<p>${text}</p>`;
        chatBody.appendChild(userMsgDiv);
        
        // Clear input and scroll down
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;

        // Typing Indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'er-typing-indicator chat-msg-enter';
        typingDiv.innerHTML = `Edurain is typing<span class="typing-dots"></span>`;
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        // AI Message
        setTimeout(() => {
            if (typingDiv.parentNode) {
                typingDiv.parentNode.removeChild(typingDiv);
            }

            playSound('receive');

            const aiMsgDiv = document.createElement('div');
            aiMsgDiv.className = 'er-chat-msg er-msg-ai chat-msg-enter';
            
            const replyText = `WELCOME TO EDURAIN
Empowering Dreams | Building Futures | Creating Success

Hello,

At Edurain, we help students achieve academic excellence and competitive exam success through expert mentorship and personalized guidance.

PROGRAMS OFFERED:
- Classes 6th to 12th (All Boards)
- IIT-JEE & NEET Preparation
- Foundation & Olympiads
- English Speaking & Personality Development

WHY EDURAIN:
- Live Interactive Classes
- Experienced Faculty
- Daily Doubt Solving
- Mentorship & Career Guidance
- Premium Study Materials

CONNECT WITH US:
- Website: <a href="https://edurain.in/" target="_blank">https://edurain.in/</a>
- App: <a href="https://play.google.com/store/apps/details?id=co.lynde.fpdwe" target="_blank">Download EduRain App</a>
- Instagram: <a href="https://www.instagram.com/edurain_official" target="_blank">@edurain_official</a>
- YouTube: <a href="https://youtube.com/@eduraininstitute" target="_blank">EduRain YouTube</a>
- Facebook: <a href="https://www.facebook.com/share/18r8aY7qDH/" target="_blank">EduRain Facebook</a>

Please reply to this message for Course Details, Fee Structure, Demo Classes, or Admissions Assistance.

Warm Regards,
Team Edurain`.replace(/\n/g, '<br>');

            aiMsgDiv.innerHTML = `<p style="font-size: 0.9em; line-height: 1.4;">${replyText}</p>`;
            chatBody.appendChild(aiMsgDiv);
            // Intentionally not auto-scrolling so the user stays at the top of the message
        }, 1200);
    };

    chatSendBtn.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSendMessage();
    });
}
