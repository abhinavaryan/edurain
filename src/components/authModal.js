import { loginUser, registerUser } from '../firebase/auth.js';

export function renderAuthModal() {
    return `
        <div class="auth-modal-overlay" id="auth-modal" style="display:none;">
            <div class="auth-modal glass-card">
                <button class="modal-close" id="modal-close">&times;</button>
                <div class="auth-modal-header">
                    <div class="logo"><span class="text-white">Edu</span><span class="text-accent">Rain</span> 🎓</div>
                    <p>Welcome back! Please login or create an account.</p>
                </div>
                <div class="auth-tabs">
                    <button class="auth-tab active" data-target="login-form">Login</button>
                    <button class="auth-tab" data-target="signup-form">Sign Up</button>
                </div>

                <form class="auth-form" id="login-form">
                    <div class="form-group">
                        <input type="email" id="login-email" placeholder="Email Address" required />
                    </div>
                    <div class="form-group password-group">
                        <input type="password" id="login-password" placeholder="Password" required />
                        <button type="button" class="toggle-password" data-target="login-password">👁</button>
                    </div>
                    <div id="login-error" class="auth-error"></div>
                    <button type="submit" class="btn btn-accent btn-lg btn-full">
                        <span class="btn-text">Login</span>
                        <div class="spinner" style="display:none;"></div>
                    </button>
                    <p class="auth-switch-text">Don't have an account? <a href="#" class="switch-form" data-target="signup-form">Sign Up</a></p>
                </form>

                <form class="auth-form" id="signup-form" style="display:none;">
                    <div class="form-group">
                        <input type="text" id="signup-name" placeholder="Full Name" required minlength="2" />
                    </div>
                    <div class="form-group">
                        <input type="email" id="signup-email" placeholder="Email Address" required />
                    </div>
                    <div class="form-group password-group">
                        <input type="password" id="signup-password" placeholder="Password (min 6 chars)" required minlength="6" />
                        <button type="button" class="toggle-password" data-target="signup-password">👁</button>
                    </div>
                    <div class="form-group">
                        <input type="password" id="signup-confirm" placeholder="Confirm Password" required minlength="6" />
                    </div>
                    <div id="signup-error" class="auth-error"></div>
                    <button type="submit" class="btn btn-accent btn-lg btn-full">
                        <span class="btn-text">Create Account</span>
                        <div class="spinner" style="display:none;"></div>
                    </button>
                    <p class="auth-switch-text">Already have an account? <a href="#" class="switch-form" data-target="login-form">Login</a></p>
                </form>
            </div>
        </div>
    `;
}

export function initAuthModal() {
    const modal = document.getElementById('auth-modal');
    const closeBtn = document.getElementById('modal-close');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (!modal) return;

    // Open modal
    document.addEventListener('open-auth-modal', () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
    });

    // Tab switching
    const switchTab = (targetId) => {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        const targetTab = document.querySelector(`.auth-tab[data-target="${targetId}"]`);
        if (targetTab) targetTab.classList.add('active');

        loginForm.style.display = targetId === 'login-form' ? 'block' : 'none';
        signupForm.style.display = targetId === 'signup-form' ? 'block' : 'none';
    };

    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', (e) => switchTab(e.target.dataset.target));
    });

    document.querySelectorAll('.switch-form').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(e.target.dataset.target);
        });
    });

    // Password visibility toggle
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = document.getElementById(btn.dataset.target);
            if (input) {
                input.type = input.type === 'password' ? 'text' : 'password';
                btn.textContent = input.type === 'password' ? '👁' : '🙈';
            }
        });
    });

    // Login form submit
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;
            const errorDiv = document.getElementById('login-error');
            const btnText = loginForm.querySelector('.btn-text');
            const spinner = loginForm.querySelector('.spinner');

            errorDiv.textContent = '';
            btnText.style.display = 'none';
            spinner.style.display = 'inline-block';

            try {
                await loginUser(email, password);
                closeModal();
                loginForm.reset();
            } catch (err) {
                errorDiv.textContent = err.message || 'Login failed. Please try again.';
            } finally {
                btnText.style.display = 'inline';
                spinner.style.display = 'none';
            }
        });
    }

    // Signup form submit
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value;
            const confirm = document.getElementById('signup-confirm').value;
            const errorDiv = document.getElementById('signup-error');
            const btnText = signupForm.querySelector('.btn-text');
            const spinner = signupForm.querySelector('.spinner');

            errorDiv.textContent = '';

            // Validation
            if (name.length < 2) {
                errorDiv.textContent = 'Please enter your full name.';
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errorDiv.textContent = 'Please enter a valid email address.';
                return;
            }
            if (password.length < 6) {
                errorDiv.textContent = 'Password must be at least 6 characters.';
                return;
            }
            if (password !== confirm) {
                errorDiv.textContent = 'Passwords do not match.';
                return;
            }

            btnText.style.display = 'none';
            spinner.style.display = 'inline-block';

            try {
                await registerUser(name, email, password);
                closeModal();
                signupForm.reset();
            } catch (err) {
                errorDiv.textContent = err.message || 'Registration failed. Please try again.';
            } finally {
                btnText.style.display = 'inline';
                spinner.style.display = 'none';
            }
        });
    }
}
