export function renderAbout() {
    return `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap');
        
        .about-page-wrapper {
          background-color: #001711;
          color: #c2ebdc;
          font-family: 'Playfair Display', serif;
          overflow-x: hidden;
        }
        .about-page-wrapper .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }
        .about-page-wrapper h1, .about-page-wrapper h2, .about-page-wrapper h3, .about-page-wrapper h4, .about-page-wrapper .font-extrabold {
            font-family: 'Playfair Display', serif;
            letter-spacing: -0.02em;
        }
        .about-page-wrapper p, .about-page-wrapper span, .about-page-wrapper div {
            font-family: 'Playfair Display', serif;
        }
        /* Specific override for mono elements */
        .about-page-wrapper .font-mono, .about-page-wrapper .font-mono * {
            font-family: 'JetBrains Mono', monospace !important;
        }
        .glass-emerald-card {
          background: linear-gradient(135deg, rgba(6, 32, 25, 0.88) 0%, rgba(0, 23, 17, 0.95) 100%);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(16, 185, 129, 0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .glass-emerald-card:hover {
          border-color: rgba(250, 204, 21, 0.5);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px -4px rgba(16, 185, 129, 0.3);
          transform: translateY(-6px) scale(1.02);
        }
        .text-gradient-gold {
          background: linear-gradient(135deg, #FFF6D1 0%, #FACC15 60%, #EAB308 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-gradient-emerald {
          background: linear-gradient(135deg, #A7F3D0 0%, #34D399 50%, #10B981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .phone-shadow {
          box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.9), 0 0 45px rgba(16, 185, 129, 0.22);
          transition: all 0.5s ease;
        }
        .phone-shadow:hover {
            transform: translateY(-10px) rotate(-2deg);
            box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.9), 0 0 60px rgba(16, 185, 129, 0.4);
        }
        .ripple-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .ripple-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(250, 204, 21, 0.4);
        }
        .ripple-btn::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform .5s, opacity 1s;
        }
        .ripple-btn:active::after {
          transform: scale(0, 0);
          opacity: 0.3;
          transition: 0s;
        }
      </style>
      
      <div class="about-page-wrapper selection:bg-yellow-400 selection:text-black bg-[#001711] text-[#c2ebdc] min-h-screen py-10 sm:py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14 relative">
          <!-- Subtle Ambient Glow -->
          <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <!-- SECTION 1: Mission and Vision -->
          <section class="relative" data-purpose="mission-vision-container" id="vision-mission">
            <div class="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3 shadow-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Core Manifesto
              </div>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Built on Mission.<br/>Driven by Purpose.
              </h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <!-- Card 1: Our Mission -->
              <div class="glass-emerald-card rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between" data-purpose="mission-card">
                <div class="absolute -right-12 -top-12 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <div>
                  <div class="w-11 h-11 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-4 shadow-inner">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                  </div>
                  <span class="text-yellow-400 font-mono text-xs tracking-widest uppercase font-semibold">01 / The Mission</span>
                  <h3 class="text-xl sm:text-2xl font-bold text-white mt-1.5 mb-2.5 leading-snug">
                    Democratize Master Coaching for Every Pincode in India.
                  </h3>
                  <p class="text-emerald-100 text-sm leading-relaxed mb-5 font-normal">
                    For decades, top-tier IIT-JEE, NEET, and Olympiad ranks were confined to students from select coaching hubs who could afford exorbitant fees. Edu Rain demolishes this monopoly.
                  </p>
                  <ul class="space-y-2.5 text-emerald-100 text-xs sm:text-sm mb-6">
                    <li class="flex items-start gap-2.5">
                      <span class="text-yellow-400 font-bold shrink-0">✓</span>
                      <span><strong class="text-white">Equity First:</strong> Premium live interactive classrooms at less than 1/10th traditional cost.</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-yellow-400 font-bold shrink-0">✓</span>
                      <span><strong class="text-white">Zero Bandwidth Barrier:</strong> Proprietary lightweight streaming that runs on 3G speeds.</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-yellow-400 font-bold shrink-0">✓</span>
                      <span><strong class="text-white">24/7 AI-Tutor:</strong> Real-time doubt clearance guaranteeing no student sleeps with queries.</span>
                    </li>
                  </ul>
                </div>
                <div class="pt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs text-emerald-300/80 font-mono">
                  <span>Commitment: Radical Affordability</span>
                  <span class="text-yellow-400 font-semibold flex items-center gap-1 hover:text-yellow-300 transition-colors cursor-pointer">Verified Impact &rarr;</span>
                </div>
              </div>
              
              <!-- Card 2: Our Vision -->
              <div class="glass-emerald-card rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between" data-purpose="vision-card">
                <div class="absolute -right-12 -bottom-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <div>
                  <div class="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4 shadow-inner">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                  </div>
                  <span class="text-emerald-400 font-mono text-xs tracking-widest uppercase font-semibold">02 / The Vision</span>
                  <h3 class="text-xl sm:text-2xl font-bold text-white mt-1.5 mb-2.5 leading-snug">
                    To Build the World’s Most Intelligent &amp; Empathetic Learning Engine.
                  </h3>
                  <p class="text-emerald-100 text-sm leading-relaxed mb-5 font-normal">
                    We envision a future where learning is an individualized evolutionary journey, blending heartfelt teacher empathy with neuroscience-backed cognitive algorithms.
                  </p>
                  <ul class="space-y-2.5 text-emerald-100 text-xs sm:text-sm mb-6">
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-400 font-bold shrink-0">✓</span>
                      <span><strong class="text-white">10 Million Leaders:</strong> Preparing exam toppers, critical thinkers, and scientific pioneers by 2030.</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-400 font-bold shrink-0">✓</span>
                      <span><strong class="text-white">Adaptive Mastery:</strong> Real-time weakness diagnostics customizing test difficulties per student.</span>
                    </li>
                    <li class="flex items-start gap-2.5">
                      <span class="text-emerald-400 font-bold shrink-0">✓</span>
                      <span><strong class="text-white">Holistic Support:</strong> Integrated stress-management coaches and mindset mentors embedded.</span>
                    </li>
                  </ul>
                </div>
                <div class="pt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs text-emerald-300/80 font-mono">
                  <span>Goal: 100% Student Potential Realized</span>
                  <span class="text-emerald-400 font-semibold flex items-center gap-1 hover:text-emerald-300 transition-colors cursor-pointer">The 2030 Roadmap &rarr;</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Visual Connector -->
          <div class="flex items-center justify-center -my-3 sm:-my-4">
            <div class="h-6 w-px bg-gradient-to-b from-emerald-500/20 via-emerald-400/60 to-emerald-500/20"></div>
          </div>

          <!-- SECTION 2: Why Traditional EdTech Falls Short -->
          <section class="relative" data-purpose="why-we-exist-section" id="why-we-exist">
            <div class="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
              <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold mb-1.5">
                Our Structural Differentiator
              </div>
              <h3 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">Why Traditional EdTech Falls Short</h3>
              <p class="mt-2 text-emerald-100 text-sm sm:text-base leading-relaxed">
                Most platforms digitized traditional chalkboards without solving core pedagogical bottlenecks. Edu Rain re-engineers instruction from ground zero.
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div class="glass-emerald-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between" data-purpose="pillar-item">
                <div>
                  <div class="w-11 h-11 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-4 border border-yellow-400/20">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                  </div>
                  <h4 class="text-lg sm:text-xl font-bold text-white mb-2">Pedagogy First, Tech In Service</h4>
                  <p class="text-emerald-100 text-sm leading-relaxed mb-4">
                    Technology without pedagogical soul is just cold pixels. At Edu Rain, rockstar educators explain complex quantum physics &amp; organic mechanisms through relatable intuition.
                  </p>
                </div>
                <div class="pt-3.5 border-t border-emerald-900/60 flex items-center text-xs text-yellow-400 font-mono font-semibold">
                  <span>Dual-Teacher Classroom Protocol</span>
                </div>
              </div>
              
              <div class="glass-emerald-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between" data-purpose="pillar-item">
                <div>
                  <div class="w-11 h-11 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-400/20">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                  </div>
                  <h4 class="text-lg sm:text-xl font-bold text-white mb-2">Deep Micro-Analytics</h4>
                  <p class="text-emerald-100 text-sm leading-relaxed mb-4">
                    We monitor attention drops, conceptual stumbling blocks, and question attempt velocities in real-time. Students receive immediate targeted revision modules before blindspots compound.
                  </p>
                </div>
                <div class="pt-3.5 border-t border-emerald-900/60 flex items-center text-xs text-emerald-400 font-mono font-semibold">
                  <span>Adaptive Predictive Score Engine</span>
                </div>
              </div>
              
              <div class="glass-emerald-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between" data-purpose="pillar-item">
                <div>
                  <div class="w-11 h-11 rounded-xl bg-teal-400/10 text-teal-300 flex items-center justify-center mb-4 border border-teal-400/20">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                  </div>
                  <h4 class="text-lg sm:text-xl font-bold text-white mb-2">Grassroot Inclusivity</h4>
                  <p class="text-emerald-100 text-sm leading-relaxed mb-4">
                    Education should not be dictated by postal pin codes. From Srinagar to Kanyakumari, every student gets the identical master faculty that trains AIR 1 rankers in Kota and Delhi.
                  </p>
                </div>
                <div class="pt-3.5 border-t border-emerald-900/60 flex items-center text-xs text-teal-300 font-mono font-semibold">
                  <span>Vernacular Multi-Lingual Tracks</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Visual Connector -->
          <div class="flex items-center justify-center -my-3 sm:-my-4">
            <div class="h-6 w-px bg-gradient-to-b from-emerald-500/20 via-emerald-400/60 to-emerald-500/20"></div>
          </div>

          <!-- SECTION 3: Key Metrics Strip -->
          <section class="relative" data-purpose="metrics-banner" id="metrics">
            <div class="glass-emerald-card rounded-2xl p-5 sm:p-7 border border-emerald-500/25 relative overflow-hidden">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-900/60">
                <div class="pt-2 md:pt-0 transform transition-transform hover:scale-110" data-purpose="metric-item">
                  <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gradient-gold">14.8M+</div>
                  <div class="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">Active Learners</div>
                  <p class="text-[11px] sm:text-xs text-emerald-200 mt-1">Across 740+ Indian Districts</p>
                </div>
                <div class="pt-2 md:pt-0 transform transition-transform hover:scale-110" data-purpose="metric-item">
                  <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gradient-emerald">8,400+</div>
                  <div class="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">IIT / NEET Qualifiers</div>
                  <p class="text-[11px] sm:text-xs text-emerald-200 mt-1">Class of 2023 - 2024</p>
                </div>
                <div class="pt-2 md:pt-0 transform transition-transform hover:scale-110" data-purpose="metric-item">
                  <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-yellow-400">99.4%</div>
                  <div class="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">Doubt Resolution</div>
                  <p class="text-[11px] sm:text-xs text-emerald-200 mt-1">Median Response Time &lt; 4 mins</p>
                </div>
                <div class="pt-2 md:pt-0 transform transition-transform hover:scale-110" data-purpose="metric-item">
                  <div class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-400">4.9 / 5</div>
                  <div class="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">Parent Trust Index</div>
                  <p class="text-[11px] sm:text-xs text-emerald-200 mt-1">Over 2.2M Verified Reviews</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Visual Connector -->
          <div class="flex items-center justify-center -my-3 sm:-my-4">
            <div class="h-6 w-px bg-gradient-to-b from-emerald-500/20 via-emerald-400/60 to-emerald-500/20"></div>
          </div>

          <!-- SECTION 4: Meet Our Founders -->
          <section class="relative" data-purpose="founders-leadership" id="founders">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <div class="text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold mb-1">
                  Architects of the Vision
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Meet Our Founders</h2>
              </div>
              <p class="text-emerald-100 max-w-lg text-sm leading-relaxed">
                Educators at heart, engineers by discipline. Leaving corporate chairs to spend over a decade shaping the future of Indian education.
              </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
              <!-- Founder 1 -->
              <article class="glass-emerald-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group" data-purpose="founder-card-1">
                <div>
                  <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                    <div class="relative shrink-0">
                      <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-yellow-400/50 shadow-xl relative">
                        <img alt="Dr. Vikramaditya Sharma" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/images/home teachers image/1.webp"/>
                      </div>
                      <div class="absolute -bottom-2 -right-2 bg-[#001711] border border-yellow-400/50 text-yellow-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-md">IIT Delhi</div>
                    </div>
                    <div class="text-center sm:text-left flex-1">
                      <span class="text-[11px] font-mono uppercase tracking-wider text-yellow-400 font-semibold">Founder &amp; Chief Mentor</span>
                      <h3 class="text-2xl sm:text-3xl font-bold text-white mt-1">Dr. Vikramaditya Sharma</h3>
                      <p class="text-emerald-100 text-xs mt-1 font-mono">20+ Years Teaching Physics | Ex-HOD Premier Kota Institute</p>
                      <blockquote class="mt-3 p-3 rounded-lg bg-yellow-400/[0.05] border-l-4 border-yellow-400 text-emerald-50 text-sm italic leading-relaxed">
                        "Our aim is not just to prepare students to crack an entrance test, but to ignite a lifelong passion for scientific inquiry in every household of Bharat."
                      </blockquote>
                    </div>
                  </div>
                  <div class="mt-6 text-emerald-100 text-sm leading-relaxed space-y-3 border-t border-emerald-900/60 pt-5">
                    <p>
                      Having taught over 250,000 students directly in Kota and online, Dr. Sharma spearheaded Edu Rain with one core philosophy: <span class="text-white font-medium">True education speaks the language of the student.</span> He pioneered modular concept mapping and curates daily physics curricula.
                    </p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-emerald-900/40 flex items-center justify-between">
                  <span class="text-sm text-yellow-400 font-semibold cursor-pointer hover:underline">Teaching Journey &rarr;</span>
                </div>
              </article>
              
              <!-- Founder 2 -->
              <article class="glass-emerald-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group" data-purpose="founder-card-2">
                <div>
                  <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                    <div class="relative shrink-0">
                      <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-emerald-400/50 shadow-xl relative">
                        <img alt="Ananya Roy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/images/home teachers image/2.png"/>
                      </div>
                      <div class="absolute -bottom-2 -right-2 bg-[#001711] border border-emerald-400/50 text-emerald-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md shadow-md">IIT B &amp; Stanford</div>
                    </div>
                    <div class="text-center sm:text-left flex-1">
                      <span class="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">Co-Founder &amp; CPO</span>
                      <h3 class="text-2xl sm:text-3xl font-bold text-white mt-1">Ananya Roy</h3>
                      <p class="text-emerald-100 text-xs mt-1 font-mono">Ex-Head of AI Learning Systems | Tech Architect</p>
                      <blockquote class="mt-3 p-3 rounded-lg bg-emerald-400/[0.05] border-l-4 border-emerald-400 text-emerald-50 text-sm italic leading-relaxed">
                        "Technology must never intimidate the learner; it must silently support them, predict where their understanding falters, and illuminate their next step."
                      </blockquote>
                    </div>
                  </div>
                  <div class="mt-6 text-emerald-100 text-sm leading-relaxed space-y-3 border-t border-emerald-900/60 pt-5">
                    <p>
                      Ananya engineered hyper-scale distributed algorithms for real-time video analytics before partnering with Dr. Sharma to architect Edu Rain’s ultra-low latency learning environment, allowing real-time doubts during live streams.
                    </p>
                  </div>
                </div>
                <div class="mt-6 pt-4 border-t border-emerald-900/40 flex items-center justify-between">
                  <span class="text-sm text-emerald-400 font-semibold cursor-pointer hover:underline">Tech Manifesto &rarr;</span>
                </div>
              </article>
            </div>
          </section>

          <!-- Visual Connector -->
          <div class="flex items-center justify-center -my-3 sm:-my-4">
            <div class="h-6 w-px bg-gradient-to-b from-emerald-500/20 via-emerald-400/60 to-emerald-500/20"></div>
          </div>

          <!-- SECTION 5: The Edu Rain Milestone Journey Timeline -->
          <section class="relative" data-purpose="journey-timeline" id="journey">
            <div class="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
              <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold mb-1.5">
                Our Evolution
              </div>
              <h3 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">The Edu Rain Milestone Journey</h3>
              <p class="mt-2 text-emerald-100 text-sm sm:text-base leading-relaxed">
                From a humble YouTube room to India’s most technologically advanced test prep ecosystem.
              </p>
            </div>
            
            <div class="relative border-l-2 border-emerald-700/40 ml-4 sm:ml-8 md:ml-16 space-y-4 sm:space-y-6 pl-6 sm:pl-10">
              <!-- Step 1 -->
              <div class="relative group" data-purpose="timeline-step">
                <div class="absolute -left-[31px] sm:-left-[47px] top-3.5 w-4 h-4 rounded-full bg-[#001711] border-2 border-yellow-400 group-hover:scale-150 transition-transform shadow-[0_0_12px_rgba(250,204,21,0.8)]"></div>
                <div class="glass-emerald-card p-6 sm:p-8 rounded-xl transition-all">
                  <span class="text-xs font-mono font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded border border-yellow-400/20">2019 — Genesis</span>
                  <h4 class="text-xl sm:text-2xl font-bold text-white mt-3 mb-2">Free Open-Source Chemistry &amp; Physics Lectures</h4>
                  <p class="text-emerald-100 text-sm sm:text-base leading-relaxed">
                    Dr. Sharma began recording white-board lectures late at night. Within 12 months, over 1 Million students from regional towns tuned in daily for authentic concept breakdown.
                  </p>
                </div>
              </div>
              
              <!-- Step 2 -->
              <div class="relative group" data-purpose="timeline-step">
                <div class="absolute -left-[31px] sm:-left-[47px] top-3.5 w-4 h-4 rounded-full bg-[#001711] border-2 border-emerald-400 group-hover:scale-150 transition-transform shadow-[0_0_12px_rgba(52,211,153,0.8)]"></div>
                <div class="glass-emerald-card p-6 sm:p-8 rounded-xl transition-all">
                  <span class="text-xs font-mono font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded border border-emerald-400/20">2021 — Platform Launch</span>
                  <h4 class="text-xl sm:text-2xl font-bold text-white mt-3 mb-2">Edu Rain App v1.0 &amp; Dual-Teacher Model</h4>
                  <p class="text-emerald-100 text-sm sm:text-base leading-relaxed">
                    Partnering with Ananya Roy, Edu Rain engineered India's first low-bandwidth synchronous live streaming classroom. Over 100,000 students enrolled on launch day.
                  </p>
                </div>
              </div>
              
              <!-- Step 3 -->
              <div class="relative group" data-purpose="timeline-step">
                <div class="absolute -left-[31px] sm:-left-[47px] top-3.5 w-4 h-4 rounded-full bg-[#001711] border-2 border-teal-400 group-hover:scale-150 transition-transform shadow-[0_0_12px_rgba(45,212,191,0.8)]"></div>
                <div class="glass-emerald-card p-6 sm:p-8 rounded-xl transition-all">
                  <span class="text-xs font-mono font-bold text-teal-300 bg-teal-400/10 px-3 py-1 rounded border border-teal-400/20">2023 — National Impact</span>
                  <h4 class="text-xl sm:text-2xl font-bold text-white mt-3 mb-2">All India Rank 1 &amp; 450+ Top 1,000 Selections</h4>
                  <p class="text-emerald-100 text-sm sm:text-base leading-relaxed">
                    Scholars from remote villages secured single and double digit ranks in JEE Advanced and NEET UG, proving that physical coaching capital presence is no longer mandatory.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- SECTION 6: Dedicated Premium Download App Section -->
          <section class="relative mt-20" data-purpose="download-app-section" id="download-app">
            <div class="rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden bg-gradient-to-br from-[#062019] via-[#00251c] to-[#001711] border border-emerald-500/40 shadow-2xl">
              <!-- Radial glow accents -->
              <div class="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div class="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-3xl pointer-events-none"></div>
              
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                <!-- Left: Content & Actions -->
                <div class="lg:col-span-7 space-y-6">
                  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    MOBILE EXPERIENCE &bull; ACCESSIBLE ANYWHERE
                  </div>
                  
                  <div>
                    <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                      Master Prep in Your Pocket &mdash; Get the Edu Rain App
                    </h2>
                    <p class="mt-4 text-emerald-100 text-base sm:text-lg leading-relaxed">
                      Over 14 Million students learning offline and online. Stream HD classes on 3G speeds, scan doubts 24/7 with our AI tutor, and solve daily adaptive quizzes.
                    </p>
                  </div>
                  
                  <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
                    <!-- Google Play -->
                    <a class="ripple-btn flex items-center justify-center sm:justify-start gap-4 px-6 py-3.5 rounded-xl bg-[#062019] hover:bg-[#162e28] border border-emerald-500/50 hover:border-yellow-400/80 text-white transition-all shadow-xl group" href="#" title="Download on Google Play">
                      <svg class="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186a2.036 2.036 0 0 1-.22-.924V2.738c0-.342.08-.659.22-.924zm11.3 11.3l2.25 2.25-11.23 6.42 8.98-8.67zm0-2.228L5.93 2.215l11.23 6.42-2.251 2.251zm1.604.814l3.526 2.015c.954.545.954 1.433 0 1.978l-3.526 2.015-1.92-1.92 1.92-2.088z"></path>
                      </svg>
                      <div class="text-left leading-none">
                        <div class="text-[11px] uppercase font-mono tracking-wider text-emerald-300">Get it on</div>
                        <div class="text-lg font-bold text-white mt-1">Google Play</div>
                      </div>
                    </a>
                  </div>
                </div>
                
                <!-- Right: Mobile Phone Mockup -->
                <div class="lg:col-span-5 flex justify-center items-center py-4 perspective-1000">
                  <div class="relative w-[320px] h-[640px] phone-shadow rounded-[48px] bg-[#0c1814] border-[8px] border-slate-700/80 p-2.5 group">
                    <div class="absolute inset-0 rounded-[40px] border border-white/10 pointer-events-none"></div>
                    <div class="w-full h-full rounded-[36px] bg-[#001711] overflow-hidden flex flex-col justify-between border border-emerald-900/60 relative">
                      
                      <div class="pt-3 px-5 pb-2">
                        <div class="flex items-center justify-between text-[12px] text-slate-300 font-mono font-semibold px-1">
                          <span>09:41</span>
                          <div class="w-28 h-5 bg-black rounded-full flex items-center justify-center gap-1.5 border border-white/5 shadow-inner">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span class="w-2 h-2 rounded-full bg-slate-700"></span>
                          </div>
                          <div class="flex items-center gap-1 text-[11px]">
                            <span>5G</span>
                            <span>88%</span>
                          </div>
                        </div>
                        
                        <div class="flex items-center justify-between mt-4 pb-3 border-b border-emerald-900/50">
                          <div class="flex items-center gap-2.5">
                            <div class="w-8 h-8 rounded-lg bg-yellow-400 text-slate-950 font-black text-sm flex items-center justify-center font-mono shadow-md">ER</div>
                            <span class="text-sm font-bold text-white tracking-tight">Edu Rain Live</span>
                          </div>
                          <span class="text-[10px] font-mono text-emerald-400 bg-emerald-950/90 border border-emerald-500/40 px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5 shadow-sm">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> 3G READY
                          </span>
                        </div>
                      </div>
                      
                      <div class="px-4 space-y-4 flex-1 overflow-hidden py-2">
                        <div class="rounded-xl p-4 bg-gradient-to-br from-[#062019] to-[#00251c] border border-emerald-500/30 relative overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                          <div class="flex items-center justify-between text-xs mb-2">
                            <span class="text-yellow-400 font-bold font-mono tracking-wide">PHYSICS ADVANCED</span>
                            <span class="text-rose-400 font-mono font-bold flex items-center gap-1">
                              <span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span> LIVE 48.2k
                            </span>
                          </div>
                          <div class="h-28 w-full rounded-lg bg-emerald-950/80 border border-emerald-500/30 relative flex items-center justify-center overflow-hidden mb-3">
                            <div class="absolute inset-0 opacity-30 bg-[radial-gradient(#4de082_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>
                            <div class="w-10 h-10 rounded-full bg-yellow-400/90 text-slate-950 flex items-center justify-center shadow-xl font-bold text-sm pl-1 hover:scale-110 transition-transform cursor-pointer">▶</div>
                            <div class="absolute bottom-2 right-2 text-[9px] font-mono bg-black/90 px-1.5 py-0.5 rounded text-white font-bold">4K 60fps</div>
                          </div>
                          <div class="text-sm font-bold text-white leading-tight">Rotational Dynamics &amp; Inertia</div>
                          <div class="text-xs text-emerald-200 mt-1 flex items-center justify-between">
                            <span>Dr. Vikramaditya Sharma</span>
                            <span class="text-emerald-400 font-mono text-[10px] font-bold">Ch 07 &bull; Part 2</span>
                          </div>
                          <div class="w-full bg-black/80 h-1.5 rounded-full mt-3 overflow-hidden">
                            <div class="bg-gradient-to-r from-emerald-400 to-yellow-400 h-full w-[75%] rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                          </div>
                        </div>
                        
                        <div class="rounded-xl p-3 bg-[#062019] border border-emerald-500/30 flex items-center gap-3 shadow-md transition-transform hover:scale-[1.02] cursor-pointer">
                          <div class="w-10 h-10 rounded-lg bg-teal-400/15 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0 text-lg">
                            📷
                          </div>
                          <div class="flex-1 min-w-0">
                            <div class="text-xs font-bold text-white flex items-center gap-1.5">
                              AI Doubt Lens 2.0
                              <span class="text-[9px] bg-yellow-400 text-slate-950 font-black px-1.5 py-0.5 rounded shadow-sm">FAST</span>
                            </div>
                            <div class="text-[10px] text-emerald-300/90 truncate mt-0.5">Snap formula &amp; get step solution</div>
                          </div>
                        </div>
                      </div>
                      
                      <div class="px-4 pb-2 pt-3 border-t border-emerald-900/60 bg-[#00140f] z-10">
                        <div class="flex items-center justify-around text-slate-400 text-xs py-1.5">
                          <div class="flex flex-col items-center gap-1 text-yellow-400 transition-transform hover:-translate-y-1 cursor-pointer">
                            <span class="text-lg">🏠</span>
                            <span class="text-[9px] font-bold">Home</span>
                          </div>
                          <div class="flex flex-col items-center gap-1 text-slate-400 transition-transform hover:-translate-y-1 cursor-pointer hover:text-emerald-300">
                            <span class="text-lg">📚</span>
                            <span class="text-[9px] font-bold">Batches</span>
                          </div>
                          <div class="flex flex-col items-center gap-1 text-slate-400 transition-transform hover:-translate-y-1 cursor-pointer hover:text-emerald-300">
                            <span class="text-lg">⚡</span>
                            <span class="text-[9px] font-bold">Doubts</span>
                          </div>
                          <div class="flex flex-col items-center gap-1 text-slate-400 transition-transform hover:-translate-y-1 cursor-pointer hover:text-emerald-300">
                            <span class="text-lg">👤</span>
                            <span class="text-[9px] font-bold">Profile</span>
                          </div>
                        </div>
                        <div class="w-32 h-1.5 bg-slate-500/80 rounded-full mx-auto mt-3 mb-1.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    \`;
}
