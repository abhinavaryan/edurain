export function renderJourney() {
    return `
    <div class="low-light-page low-light-bg indigo-pulse-bg">
        <!-- ═══ HEADER / INTRO BANNER ═══ -->
        <section class="er-section" style="padding: var(--space-2xl) 0 var(--space-xl) 0;">
            <div class="er-container text-center">
                <span class="badge-indigo" style="background: rgba(99, 102, 241, 0.18); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.3); padding: 0.382rem 1rem; border-radius: 50px; font-weight: 600; font-size: 0.875rem; letter-spacing: 0.05em; text-transform: uppercase;">
                    ✨ Low-Light Introspection Space
                </span>
                <h1 style="font-size: var(--fs-4xl); font-weight: 800; color: #ffffff; margin-top: var(--space-md); margin-bottom: var(--space-sm);">
                    Journey & <span style="background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Reflection</span>
                </h1>
                <p style="font-size: var(--fs-lg); color: #9ca3af; max-width: 680px; margin: 0 auto; line-height: 1.618;">
                    Explore your personal learning trajectory, evaluate intelligent multi-agent architectures, and record introspective reflection logs in a quiet, low-light atmosphere.
                </p>
            </div>
        </section>

        <section class="er-section" style="padding: var(--space-xl) 0;">
            <div class="er-container">
                <div class="text-center" style="margin-bottom: var(--space-2xl);">
                    <h2 style="font-size: var(--fs-3xl); font-weight: 700; color: #ffffff;">
                        Featured Agent Systems & Architecture
                    </h2>
                    <p style="color: #9ca3af; margin-top: var(--space-xs); font-size: var(--fs-base);">
                        Autonomous multi-agent intelligence workflows built for predictive analytics and diagnostic decision making.
                    </p>
                </div>

                <div class="projects-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: var(--space-xl);">
                    
                    <!-- PROJECT CARD 1: Credit Risk -->
                    <div class="glass-card-dark project-card" style="padding: var(--space-xl); position: relative; overflow: hidden;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-md);">
                            <span style="font-size: 2rem;">💳</span>
                            <span style="background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4); padding: 0.2rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Financial Intelligence</span>
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: 700; color: #ffffff; margin-bottom: var(--space-sm);">Credit Risk Assessment Agent</h3>
                        <p style="color: #9ca3af; font-size: 0.95rem; line-height: 1.618; margin-bottom: var(--space-lg);">
                            A dynamic multi-agent system evaluating applicant solvency, transaction anomalies, income stability, and automated credit decisioning with explainable risk telemetry.
                        </p>
                        <button class="btn btn-indigo view-architecture-btn" data-project="credit-risk" style="width: 100%; background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%); color: #fff; border: none; padding: var(--space-sm) var(--space-lg); border-radius: var(--radius-md); font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer; transition: all 0.3s ease;">
                            <i class="fas fa-project-diagram"></i> System Architecture
                        </button>
                    </div>

                    <!-- PROJECT CARD 2: Disease Prediction -->
                    <div class="glass-card-dark project-card" style="padding: var(--space-xl); position: relative; overflow: hidden;">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-md);">
                            <span style="font-size: 2rem;">🧬</span>
                            <span style="background: rgba(236, 72, 153, 0.2); color: #f472b6; border: 1px solid rgba(236, 72, 153, 0.4); padding: 0.2rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Healthcare AI</span>
                        </div>
                        <h3 style="font-size: 1.5rem; font-weight: 700; color: #ffffff; margin-bottom: var(--space-sm);">Disease Prediction Diagnostic Agent</h3>
                        <p style="color: #9ca3af; font-size: 0.95rem; line-height: 1.618; margin-bottom: var(--space-lg);">
                            An intelligent clinical diagnostic workflow analyzing patient vitals, genetic markers, medical lab data, and cross-checking differential diagnosis probability models.
                        </p>
                        <button class="btn btn-indigo view-architecture-btn" data-project="disease-prediction" style="width: 100%; background: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%); color: #fff; border: none; padding: var(--space-sm) var(--space-lg); border-radius: var(--radius-md); font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer; transition: all 0.3s ease;">
                            <i class="fas fa-project-diagram"></i> System Architecture
                        </button>
                    </div>

                </div>
            </div>
        </section>

        <!-- ═══ HORIZONTALLY SYMMETRIC SECTION: JOURNEY REFLECTION ═══ -->
        <section class="er-section" style="padding: var(--space-2xl) 0;">
            <div class="er-container">
                <div class="symmetric-row">
                    <!-- LEFT COLUMN: Visually balanced illustration card -->
                    <div class="symmetric-col">
                        <div class="glass-card-dark" style="padding: var(--space-xl); text-align: center;">
                            <div style="width: 120px; height: 120px; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(79,70,229,0.1) 70%); margin: 0 auto var(--space-lg) auto; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(129,140,248,0.4); box-shadow: 0 0 30px rgba(99,102,241,0.3);">
                                <span style="font-size: 3.5rem;">🌌</span>
                            </div>
                            <h3 style="color: #ffffff; font-size: 1.5rem; font-weight: 700; margin-bottom: var(--space-xs);">Growth & Introspection</h3>
                            <p style="color: #9ca3af; font-size: 0.95rem; line-height: 1.618;">
                                Learning is a continuous cycle of execution, analysis, and silent reflection. Track your milestones and maintain mental clarity under low-light focus.
                            </p>
                            <div style="margin-top: var(--space-lg); display: flex; justify-content: center; gap: var(--space-md);">
                                <div style="text-align: center;">
                                    <div style="font-size: 1.5rem; font-weight: 800; color: #818cf8;">98.4%</div>
                                    <div style="font-size: 0.75rem; color: #6b7280;">Consistency Rate</div>
                                </div>
                                <div style="width: 1px; background: rgba(255,255,255,0.1);"></div>
                                <div style="text-align: center;">
                                    <div style="font-size: 1.5rem; font-weight: 800; color: #34d399;">142</div>
                                    <div style="font-size: 0.75rem; color: #6b7280;">Hours Focused</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT COLUMN: Interactive Journal Form -->
                    <div class="symmetric-col">
                        <div class="glass-card-dark" style="padding: var(--space-xl);">
                            <h3 style="color: #ffffff; font-size: 1.5rem; font-weight: 700; margin-bottom: var(--space-xs);">Daily Reflection Log</h3>
                            <p style="color: #9ca3af; font-size: 0.9rem; margin-bottom: var(--space-md);">Record your key learnings and breakthroughs today.</p>
                            
                            <form id="reflection-journal-form" style="display: flex; flex-direction: column; gap: var(--space-md);">
                                <div>
                                    <label style="display: block; color: #cbd5e1; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.382rem;">Key Topic / Focus Area</label>
                                    <input type="text" id="journal-topic" placeholder="e.g. Multi-Agent Systems & Neural Optimization" required style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: var(--space-sm) var(--space-md); border-radius: var(--radius-sm); outline: none;">
                                </div>
                                <div>
                                    <label style="display: block; color: #cbd5e1; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.382rem;">Introspective Insights</label>
                                    <textarea id="journal-insight" rows="3" placeholder="What concepts clicked today? Where did you encounter ambiguity?" required style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: var(--space-sm) var(--space-md); border-radius: var(--radius-sm); outline: none; resize: vertical;"></textarea>
                                </div>
                                <button type="submit" style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: #fff; border: none; padding: var(--space-sm) var(--space-lg); border-radius: var(--radius-sm); font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                                    Save Reflection Entry
                                </button>
                            </form>
                            <div id="journal-status" style="margin-top: var(--space-sm); font-size: 0.875rem; color: #34d399; display: none;">
                                ✓ Reflection logged successfully!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══ MERMAID DIAGRAM MODAL CONTAINERS ═══ -->
        <div class="mermaid-modal-overlay" id="architecture-modal">
            <div class="mermaid-modal-container">
                <button class="mermaid-modal-close" id="modal-close-btn">&times;</button>
                <div id="modal-content-area">
                    <h3 id="modal-title" style="font-size: 1.5rem; font-weight: 700; color: #818cf8; margin-bottom: var(--space-md);">
                        System Architecture
                    </h3>
                    <div id="mermaid-diagram-container" style="background: #09090b; padding: var(--space-lg); border-radius: var(--radius-md); overflow-x: auto; border: 1px solid rgba(99,102,241,0.2);">
                        <!-- Dynamic Mermaid chart gets injected here -->
                    </div>
                </div>
            </div>
        </div>

    </div>
    `;
}

export function initJourney() {
    const modal = document.getElementById('architecture-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const diagramContainer = document.getElementById('mermaid-diagram-container');
    const buttons = document.querySelectorAll('.view-architecture-btn');

    const creditRiskMermaid = `
    graph TD
        A["Input Data: Credit Bureau & Bank Statements"] --> B["Data Preprocessing Agent"]
        B --> C["Feature Extraction & Risk Scoring Agent"]
        C --> D{"Solvency Check Evaluator"}
        D -- "Low Risk" --> E["Automated Loan Approver Agent"]
        D -- "Medium Risk" --> F["Underwriter Validation Agent"]
        D -- "High Risk" --> G["Default Risk Mitigation Agent"]
        E --> H["Final Credit Report & Decision API"]
        F --> H
        G --> H
        
        style A fill:#1e1b4b,stroke:#818cf8,stroke-width:2px,color:#ffffff
        style C fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#ffffff
        style D fill:#312e81,stroke:#a5b4fc,stroke-width:2px,color:#ffffff
        style H fill:#4c1d95,stroke:#c084fc,stroke-width:2px,color:#ffffff
    `;

    const diseasePredictionMermaid = `
    graph TD
        A["Patient Vitals, Symptoms & Biomarkers"] --> B["Clinical Data Ingestion Agent"]
        B --> C["Genomic & EHR Feature Mapping Agent"]
        C --> D["Multi-Model Ensemble Diagnostic Agent"]
        D --> E{"Risk Probability Matrix"}
        E -- "Low Likelihood" --> F["Preventative Wellness Recommendation Agent"]
        E -- "Moderate/High Risk" --> G["Differential Clinical Specialist Agent"]
        F --> H["Comprehensive Diagnostic Report Generator"]
        G --> H
        
        style A fill:#0c4a6e,stroke:#38bdf8,stroke-width:2px,color:#ffffff
        style D fill:#831843,stroke:#f472b6,stroke-width:2px,color:#ffffff
        style E fill:#1e1b4b,stroke:#818cf8,stroke-width:2px,color:#ffffff
        style H fill:#065f46,stroke:#34d399,stroke-width:2px,color:#ffffff
    `;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectType = btn.dataset.project;
            let title = 'System Architecture';
            let diagramCode = '';

            if (projectType === 'credit-risk') {
                title = '💳 Credit Risk Assessment — Multi-Agent Architecture';
                diagramCode = creditRiskMermaid;
            } else if (projectType === 'disease-prediction') {
                title = '🧬 Disease Prediction Diagnostic — Multi-Agent Architecture';
                diagramCode = diseasePredictionMermaid;
            }

            modalTitle.textContent = title;
            diagramContainer.innerHTML = `<div class="mermaid">${diagramCode}</div>`;

            modal.classList.add('active');

            if (window.mermaid) {
                try {
                    window.mermaid.initialize({ startOnLoad: false, theme: 'dark' });
                    window.mermaid.run({
                        nodes: diagramContainer.querySelectorAll('.mermaid')
                    });
                } catch (e) {
                    console.error('Mermaid render error:', e);
                }
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Journal form submission handling
    const journalForm = document.getElementById('reflection-journal-form');
    const journalStatus = document.getElementById('journal-status');
    if (journalForm) {
        journalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (journalStatus) {
                journalStatus.style.display = 'block';
                setTimeout(() => {
                    journalStatus.style.display = 'none';
                    journalForm.reset();
                }, 3000);
            }
        });
    }
}
