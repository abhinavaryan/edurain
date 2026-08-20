import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config.js';

export function renderBlogAdminLogin() {
    return `
    <section class="er-admin-login-wrapper" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background-color: #0d1f14;">
        <div class="er-admin-login-box glass-card" style="width: 100%; max-width: 400px; padding: 2.5rem; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; backdrop-filter: blur(10px);">
            <div style="text-align: center; margin-bottom: 2rem;">
                <h2 style="color: #4ade80; font-size: 1.8rem; margin-bottom: 0.5rem; font-weight: 700;">Admin Login</h2>
                <p style="color: #94a3b8; font-size: 0.95rem;">EduRain Blog Management</p>
            </div>
            
            <form id="er-admin-login-form">
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; color: #cbd5e1; font-size: 0.9rem; margin-bottom: 0.5rem;">Email Address</label>
                    <input type="email" id="er-admin-email" required 
                           style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.2); color: white; outline: none;"
                           placeholder="Enter admin email" />
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <label style="display: block; color: #cbd5e1; font-size: 0.9rem; margin-bottom: 0.5rem;">Password</label>
                    <input type="password" id="er-admin-password" required 
                           style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.2); color: white; outline: none;"
                           placeholder="Enter password" />
                </div>
                
                <div id="er-admin-login-error" style="color: #ef4444; font-size: 0.85rem; margin-bottom: 1rem; display: none;"></div>
                
                <button type="submit" id="er-admin-login-btn" 
                        style="width: 100%; padding: 0.85rem; border-radius: 8px; background: #16a34a; color: white; font-weight: 600; border: none; cursor: pointer; transition: background 0.3s;">
                    Login to Dashboard
                </button>
            </form>
            <div style="text-align: center; margin-top: 1.5rem;">
                <a href="/" style="color: #94a3b8; font-size: 0.9rem; text-decoration: none;">&larr; Back to Website</a>
            </div>
        </div>
    </section>
    `;
}

export function initBlogAdminLogin() {
    const form = document.getElementById('er-admin-login-form');
    const emailInput = document.getElementById('er-admin-email');
    const passwordInput = document.getElementById('er-admin-password');
    const errorDiv = document.getElementById('er-admin-login-error');
    const loginBtn = document.getElementById('er-admin-login-btn');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Security check - client side (Firebase Rules will enforce backend)
        if (email !== 'edurainseowork@gmail.com') {
            errorDiv.textContent = 'Unauthorized email address.';
            errorDiv.style.display = 'block';
            return;
        }

        loginBtn.textContent = 'Authenticating...';
        loginBtn.disabled = true;
        errorDiv.style.display = 'none';

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // On success, redirect to dashboard
            window.location.href = '/blogadmin';
        } catch (error) {
            console.error('Login Error:', error);
            errorDiv.textContent = 'Invalid credentials or login failed.';
            errorDiv.style.display = 'block';
            loginBtn.textContent = 'Login to Dashboard';
            loginBtn.disabled = false;
        }
    });
}
