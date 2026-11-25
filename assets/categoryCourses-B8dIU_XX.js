import{renderFAQ as e}from"./faq-dX0g2TOo.js";import{n as t,t as n}from"./webappCourses-CRc5TpuC.js";function r(e){let t=`⭐`.repeat(Math.round(e.rating)),n=e.students>=1e3?`${(e.students/1e3).toFixed(1)}K`:e.students;return`
        <div class="glass-card course-card fade-in-section visible" data-category="${e.category}" data-link="${e.link||`#`}">
            <div class="course-thumb">
                <a href="${e.link||`#`}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%;">
                    <img loading="lazy" src="${e.thumbnail||`/images/demo.webp`}" alt="${e.title}" width="400" height="295" style="aspect-ratio: 1.355/1; object-fit: cover; object-position: top center;" />
                </a>
            </div>
            <span class="course-category">${e.category}</span>
            <h3>
                <a href="${e.link||`#`}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
                    ${e.title}
                </a>
            </h3>
            <p class="course-instructor">by ${e.instructor}</p>
            <div class="course-meta">
                <span class="course-rating">${t} ${e.rating}</span>
                <span class="course-students">${n} students</span>
            </div>
            <div class="course-bottom">
                <span class="course-price">${e.price}</span>
                <a href="${e.link||`#`}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;">
                    View Details
                </a>
            </div>
        </div>
    `}function i(t,i,a,o=``){let s=n().filter(e=>e.category===a),c=s.length>0?s.map(r).join(``):`<p style="text-align: center; width: 100%; color: var(--text-muted);">No courses available in this category yet.</p>`;return`
        <section class="courses-section">
            <div class="section-header">
                <h1>${t}</h1>
                <p>${i}</p>
            </div>
            <div class="filter-row">
                <a href="/courses" class="filter-btn" style="text-decoration: none;">All</a>
                <a href="/courses/iit-jee" class="filter-btn ${a===`JEE`?`active`:``}" style="text-decoration: none;">JEE</a>
                <a href="/courses/neet" class="filter-btn ${a===`NEET`?`active`:``}" style="text-decoration: none;">NEET</a>
                <a href="/courses/foundation" class="filter-btn ${a===`FOUNDATION`?`active`:``}" style="text-decoration: none;">FOUNDATION</a>
            </div>
            <div class="courses-grid" style="margin-top: 40px;">
                ${c}
            </div>
        </section>
        
        ${o}
        
        ${e(a)}
    `}var a=`color: #f8fafc; font-size: 1.8rem; margin: 0 0 1rem; font-weight: 800; line-height: 1.25; letter-spacing: -0.02em; font-family: 'Inter', sans-serif;`,o=`color: #f1f5f9; font-size: 1.3rem; margin: 1.6rem 0 0.7rem; font-weight: 700; line-height: 1.3; font-family: 'Inter', sans-serif;`,s=`margin: 0 0 1.1rem; color: #cbd5e1; line-height: 1.7; font-size: 1.05rem; max-width: 85ch;`,c=`list-style: disc; margin: 0 0 1.2rem; padding-left: 1.4rem; color: #cbd5e1; line-height: 1.7; font-size: 1.05rem;`,l=`margin-bottom: 0.4rem;`,u=`text-align: left; padding: 0.7rem 0.9rem; border: 1px solid rgba(255, 255, 255, 0.22); background: rgba(255, 255, 255, 0.08); color: #f8fafc; font-weight: 700;`,d=`padding: 0.7rem 0.9rem; border: 1px solid rgba(255, 255, 255, 0.22); vertical-align: top;`,f=`<div style="width: 50px; height: 3px; background: #3b82f6; border-radius: 2px; margin: 2.5rem 0 1.5rem;"></div>`,p=(e,t)=>e.startsWith(`https://courses.`)?`<a href="${e}" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; font-weight: 600; text-decoration: none;">${t}</a>`:`<a href="${e}" style="color: #60a5fa; font-weight: 600; text-decoration: none;">${t}</a>`,m=(e,t)=>`
                <div style="overflow-x: auto; margin: 0.4rem 0 1.4rem;">
                    <table style="width: 100%; border-collapse: collapse; color: #cbd5e1; font-size: 1rem; line-height: 1.5;">
                        <thead><tr>${e.map(e=>`<th style="${u}">${e}</th>`).join(``)}</tr></thead>
                        <tbody>${t.map(e=>`<tr>${e.map(e=>`<td style="${d}">${e}</td>`).join(``)}</tr>`).join(``)}</tbody>
                    </table>
                </div>`,h=e=>`<ul style="${c}">${e.map(e=>`<li style="${l}">${e}</li>`).join(``)}</ul>`,g=e=>`<ol style="${c.replace(`list-style: disc`,`list-style: decimal`)}">${e.map(e=>`<li style="${l}">${e}</li>`).join(``)}</ol>`,_=e=>`<strong style="color: #f1f5f9;">${e}</strong>`,v=e=>`<p style="margin: 1.2rem 0 0.5rem; color: #f1f5f9; font-weight: 700; font-size: 1.05rem;">${e}</p>`,y=e=>`
        <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
            <div style="position: relative; z-index: 1;">
                ${e}
            </div>
        </section>
    `,b=(e,t)=>`
                    <div>
                        <h3 style="${o}">${e}</h3>
                        ${m([`Teacher Name`,`Experience`],t)}
                    </div>`,x=(e,t)=>`
                    <div style="padding: 1.1rem 1.2rem; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; background: rgba(255, 255, 255, 0.02);">
                        <h3 style="color: #f1f5f9; font-size: 1.1rem; margin: 0 0 0.4rem; font-weight: 700; font-family: 'Inter', sans-serif;">${e}</h3>
                        <p style="margin: 0; color: #cbd5e1; line-height: 1.6; font-size: 1rem;">${t}</p>
                    </div>`;function S(){return y(`
                <div class="er-anime-reveal">
                    <h2 style="${a}">JEE Main 2027 Registration: Eligibility, Documents, and Application Process</h2>
                    <p style="${s}">JEE Main 2027 Session 1 registration began on 24 October 2026 on the official NTA website, and the last date to apply is 22 November 2026 (11:50 pm). Candidates who want admission to B.E./B.Tech, B.Arch and B.Planning courses at NITs, IIITs and other participating institutes can apply online.</p>
                    <p style="${s}">Before you fill the application form, check the JEE Main 2027 eligibility criteria, the documents required, the application fee and the registration steps. You will typically need a recent photograph, your signature, Class 10 details and a valid ID, but always confirm the exact list in the official NTA notice. Keep your documents ready and check the latest updates on the application form, exam schedule, syllabus and other notifications regularly, so that you never miss a deadline.</p>
                    <p style="${s}">Read our detailed guide: ${p(`https://www.edurain.in/blogs/jee-main-2027-registration-steps-documents-and-fee/`,`JEE Main 2027 registration steps, documents and fee`)}. You can also check the ${p(`https://www.edurain.in/blogs/jee-main-2027-session-1-registration-date/`,`JEE Main 2027 Session 1 registration date`)}.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">JEE Main &amp; Advanced 2027 Important Dates</h2>
                    <p style="${s}">Staying updated with the JEE Main and JEE Advanced 2027 important dates helps you plan your exam preparation and admission process. From registration and exam dates to answer keys, results, and counselling, track every event so that you never miss a deadline. The dates below follow the NTA schedule as reported by news sources, so confirm them on the official NTA notice at jeemain.nta.nic.in. For a detailed breakdown, read our ${p(`https://www.edurain.in/blogs/jee-mains-2027-form-date-exam-date-session-1-2/`,`JEE Main 2027 form date and exam date guide`)}.</p>
                    ${m([`Event`,`Details`],[[`JEE Main 2027 Session 1 Registration`,`24 October to 22 November 2026`],[`Session 1 Correction Window`,`27 to 29 November 2026`],[`Session 1 City Intimation Slip`,`31 December 2026`],[`Session 1 Admit Card`,`13 January 2027`],[`JEE Main 2027 Session 1 Exam Dates`,`20, 21, 22, 23, 24 and 28 January 2027`],[`Session 1 Answer Key and Result`,`February 2027 (expected)`],[`JEE Main 2027 Session 2 Registration`,`5 January to 3 February 2027`],[`JEE Main 2027 Session 2 Exam Dates`,`2 to 7 April 2027`],[`Session 2 Result`,`April 2027 (expected)`],[`JEE Advanced 2027 Exam Date`,`May 2027 (expected)`],[`JEE Advanced 2027 Result`,`June 2027 (expected)`]])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Complete JEE 2027 Preparation Support at EduRain</h2>
                    <p style="${s}">With JEE Main 2027 approaching, it is time to shift your focus to focused, structured preparation. EduRain helps you prepare effectively with dedicated courses, regular revision, a complete test series and personal guidance, so that you strengthen your concepts and maximise your performance. If you are looking for a plan, read our ${p(`https://www.edurain.in/blogs/jee-main-2027-preparation-strategy-complete-6-month-plan/`,`JEE Main 2027 preparation strategy: complete 6-month plan`)}. Short on time? Follow the ${p(`https://www.edurain.in/blogs/jee-main-2027-in-90-days-99-percentile-preparation-plan/`,`JEE Main 2027 in 90 days roadmap to score 99 percentile`)}, or start with our ${p(`https://www.edurain.in/blogs/how-to-prepare-for-jee-2027-complete-study-plan-tips/`,`complete JEE 2027 strategy, syllabus and study plan`)}.</p>

                    <h3 style="${o}">1. Courses</h3>
                    <p style="${s}">EduRain offers dedicated JEE 2027 batches for:</p>
                    ${h([`Class 11: ${p(`https://courses.edurain.in/courses/846771`,`CLASS 11TH PCB (JEE)`)} and ${p(`https://courses.edurain.in/courses/813811`,`JEE Mantra 3.0 Batch 2028`)}`,`Class 12: ${p(`https://courses.edurain.in/courses/814178`,`TARGET JEE 2027 - 12TH CLASS BATCH`)} and ${p(`https://courses.edurain.in/courses/857872`,`CLASS 12TH MATHEMATICS`)}`,`Droppers: ${p(`https://courses.edurain.in/courses/849750`,`Dropper JEE 2027 Batch`)}`])}
                    <p style="${s}">Choose the batch that matches your academic level and preparation needs.</p>

                    <h3 style="${o}">2. JEE Mock Tests and Chapter-Wise Tests</h3>
                    <p style="${s}">Regular testing is the best way to improve speed and accuracy. At EduRain you get Daily Practice Problems (DPPs) for every chapter, plus 2,400+ mock tests and sectional tests. These tests show you your weak areas and help you improve through consistent practice.</p>

                    <h3 style="${o}">3. JEE PYQs and Practice Questions</h3>
                    <p style="${s}">Solving previous year questions (PYQs) along with regular practice is one of the most effective ways to prepare for JEE Main. It helps you understand the exam pattern, the types of questions and the difficulty level. EduRain gives you 3,000+ practice papers so that you can practise every topic thoroughly and with confidence.</p>

                    <h3 style="${o}">4. Live Classes and Recorded Lectures</h3>
                    <p style="${s}">Regular learning and timely revision matter a lot in JEE preparation. EduRain offers live classes and 1,400+ recorded video lectures. Attend live sessions for real-time learning, and go back to recorded lectures anytime for revision and extra clarity.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">JEE Preparation Guided by Experienced Faculty</h2>
                    <p style="${s}">Dedicated guidance plays a key role in JEE preparation. EduRain's IIT-JEE faculty includes experienced teachers across Physics, Chemistry and Mathematics, with 10+ years of teaching experience each.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0 1.5rem;">
                        ${b(`Physics`,[[`Diwakar Sir`,`17+ years`],[`Rahul Sir`,`10+ years`]])}
                        ${b(`Physical Chemistry`,[[`Ritu Ma'am`,`14+ years`],[`Rahul Sir`,`10+ years`]])}
                        ${b(`Organic Chemistry`,[[`Ritu Ma'am`,`14+ years`],[`Rahul Sir`,`10+ years`]])}
                        ${b(`Inorganic Chemistry`,[[`Ritu Ma'am`,`14+ years`],[`Rahul Sir`,`10+ years`]])}
                        ${b(`Mathematics`,[[`Mr. Debashish Banerjee Sir`,`18+ years`],[`Meghna Ma'am`,`11+ years`]])}
                    </div>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Why Choose EduRain Online Coaching for IIT JEE Main?</h2>
                    <p style="${s}">EduRain's ${p(`https://www.edurain.in/courses/`,`online JEE courses`)} are designed to support you at every stage of your preparation. Our IIT JEE online coaching has features that help you learn clearly, practice regularly, and improve continuously.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin-top: 1.2rem;">
                        ${x(`Live Classes`,`Attend interactive live classes where you can ask questions and talk to teachers in real time. Doubts get cleared immediately, which improves your understanding.`)}
                        ${x(`Recorded Sessions`,`Missed a live class? Recorded sessions let you study at your own pace and revise difficult topics whenever you need.`)}
                        ${x(`Study Material`,`Get complete study material, including video lectures, notes, and practice questions. It covers the full ${p(`https://www.edurain.in/blogs/jee-main-2027-syllabus-important-chapters/`,`JEE Main 2027 syllabus and important chapters`)} in a clear and organized way.`)}
                        ${x(`Doubt Resolution`,`A dedicated doubt-clearing facility is available for you. Questions asked during or after class are answered through live doubt-solving support that is available 24/7, so you get timely help.`)}
                        ${x(`Mock Tests`,`Regular mock tests let you experience the real JEE Main exam pattern. They help you check your preparation level and improve accuracy and time management.`)}
                        ${x(`Performance Tracking`,`A performance dashboard helps you track your progress, attendance, and test scores, so it is easy to spot your strengths and the areas that need work.`)}
                        ${x(`Peer Interaction`,`Take part in peer-to-peer doubt-solving sessions. Collaborative learning builds a supportive academic environment.`)}
                        ${x(`Personalized Learning Plans`,`Get a customized study plan based on your needs and strengths. It helps you focus on the important areas and prepare more effectively. AI-powered personalized practice adapts to your weak topics.`)}
                        ${x(`Regular Feedback`,`Teachers give consistent feedback on your performance, which keeps you motivated and helps you improve steadily.`)}
                        ${x(`Mobile App Access`,`Access classes, study material, and tests through the mobile app, so your learning can continue anytime and anywhere. You can also download video lectures and watch them offline.`)}
                    </div>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Mock Tests, PYQs, and Study Material</h2>
                    <p style="${s}">Smart JEE Main preparation rests on three habits: test regularly, practice previous year questions, and revise from reliable notes. EduRain gives you all three in one place.</p>

                    <h3 style="${o}">JEE Test Series: Chapter-Wise and Full-Length Mocks</h3>
                    <p style="${s}">Our JEE test series includes chapter-wise tests, sectional tests and full-length mock tests for Class 11, Class 12 and dropper students. Each test follows the latest JEE Main pattern, so you get used to the real exam, learn time management, and improve speed and accuracy. After every test, your performance report shows your weak chapters, so you know exactly what to revise next.</p>

                    <h3 style="${o}">JEE Previous Year Questions (PYQs)</h3>
                    <p style="${s}">PYQs show you which topics are asked again and again and how tough the questions are. At EduRain you get solved JEE Main PYQs with clear explanations, along with topic-wise practice sets. Start with our ${p(`https://www.edurain.in/blogs/jee-mains-physics-important-questions-with-solutions/`,`JEE Mains physics important questions with solutions`)}, our list of ${p(`https://www.edurain.in/blogs/high-weightage-chapters-for-jee-main-2027/`,`high-weightage chapters for JEE Main 2027`)} and the ${p(`https://www.edurain.in/blogs/most-important-physics-chapters-for-jee-2027/`,`most important physics chapters for JEE 2027`)} to decide where to spend your time.</p>
                    <p style="${s}">Also read our ${p(`https://www.edurain.in/blogs/jee-mains-important-chapters-and-topics-for-2027-exam`,`JEE Mains important chapters and topics for 2027 exam`)} and see which ${p(`https://www.edurain.in/blogs/top-10-jee-advanced-repeated-topics`,`topics repeat every year in JEE Advanced`)}.</p>

                    <h3 style="${o}">Study Material, Modules, and Notes</h3>
                    <p style="${s}">EduRain provides complete study material for Physics, Chemistry and Mathematics, including chapter-wise notes, modules, DPPs and practice questions. Everything is arranged according to the JEE syllabus, so you do not need to search for extra resources.</p>
                    ${h([`Concept notes and formula sheets for quick revision`,`Daily Practice Problems (DPPs) for every chapter`,`Mock and sectional test papers with detailed solutions`,`Previous year question collections for JEE Main`])}
                    <p style="${s}">Free resources from the EduRain blog to support your JEE Main preparation:</p>
                    ${h([p(`https://www.edurain.in/blogs/master-mechanics-numericals-in-jee-main-physics`,`How to solve mechanics numericals in JEE Main physics`),p(`https://www.edurain.in/blogs/vectors-class-11-iit-jee`,`Vectors for Class 11 JEE: concepts, formulas and questions`),p(`https://www.edurain.in/blogs/class-11-vectors-and-newton-s-laws-of-motion`,`Class 11 vectors and Newton's laws of motion: the foundation of JEE mechanics`),p(`https://www.edurain.in/blogs/units-and-measurements-for-class-11`,`Units and measurements for Class 11 physics and JEE`),p(`https://www.edurain.in/blogs/organic-chemistry-for-iit-jee-concepts-tips`,`Organic chemistry for IIT JEE: concepts, reactions and tips`),p(`https://www.edurain.in/blogs/chemical-kinetics-jee-hard-topics-explained-tips`,`Chemical kinetics: JEE hard topics explained`),p(`https://www.edurain.in/blogs/chemical-equilibrium-class-11-iit-jee`,`Chemical equilibrium for Class 11 and IIT JEE`),p(`https://www.edurain.in/blogs/basic-maths-for-jee-main-advanced`,`Basic maths for JEE Main and Advanced: concepts, formulas and tricks`),p(`https://www.edurain.in/blogs/continuity-differentiability-for-class-12-jee-mains`,`Continuity and differentiability for Class 12 and JEE Mains 2027`),p(`https://www.edurain.in/blogs/class-12-maths-chapter-6-application-of-derivatives-for-jee`,`Application of derivatives: formulas and important questions for JEE Main 2027`),p(`https://www.edurain.in/blogs/differential-equations-jee-common-mistakes-tips`,`Differential equations in JEE: common mistakes to avoid`),p(`https://www.edurain.in/blogs/jee-main-statistics-formulas-complete-cheat-sheet`,`JEE Main statistics formulas: complete one-page cheat sheet`)])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">How To Plan Your Next Step from JEE Main to IIT Admission?</h2>
                    <p style="${s}">For many students, JEE Main is the gateway to JEE Advanced and, finally, the IITs. If your percentile meets the required cutoff, you become eligible to appear for JEE Advanced 2027.</p>
                    <p style="${s}">At this stage your strategy needs a small shift. JEE Main focuses on speed, accuracy and broad syllabus coverage, while JEE Advanced tests deeper concept clarity, multi-concept application and advanced problem-solving.</p>
                    <p style="${s}">EduRain supports this transition by:</p>
                    ${h([`Strengthening your core concepts during JEE Main preparation`,`Providing advanced-level problem practice`,`Including previous year questions (PYQs) for both JEE Main and JEE Advanced`,`Offering structured mock tests that follow the advanced-level pattern`,`Ensuring continuous doubt resolution and performance tracking`])}
                    <p style="${s}">Want to know which topics matter most? Read our list of the ${p(`https://www.edurain.in/blogs/top-10-jee-advanced-repeated-topics/`,`top 10 JEE Advanced repeated topics`)}.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">JEE Advanced 2027 Syllabus</h2>
                    <p style="${s}">After you complete JEE Main and qualify as per the required cutoff, you become eligible to apply for JEE Advanced. To prepare well, understand the depth, scope and application level of topics in Physics, chemistry, and mathematics in advance. Start with the ${p(`https://www.edurain.in/blogs/jee-main-2027-syllabus-important-chapters/`,`JEE Main 2027 syllabus and important chapters`)}, since most of the JEE Advanced syllabus builds on it.</p>
                    <p style="${s}">Download the complete subject-wise JEE Advanced syllabus in good time, so that you can align your preparation with it.</p>
                </div>
    `)}function C(){return i(`Best JEE Main 2027 Online Coaching and Complete Preparation with EduRain`,`JEE Main 2027 Session 1 registration is open until 22 November 2026. EduRain's online JEE coaching helps Class 11, Class 12 and dropper students prepare for JEE Main 2027 with live classes, recorded lectures, mock tests and doubt support. Below you will find the latest updates on registration, application form, eligibility criteria, exam dates, syllabus, admit card and preparation tips.`,`JEE`,S())}function w(){let e=`https://www.edurain.in/courses/neet`;return y(`
                <div class="er-anime-reveal">
                    <h2 style="${a}">NEET 2027 Latest Updates (as of 19 November 2026)</h2>
                    ${h([`${_(`Exam mode: computer-based test (CBT).`)} The Union Education Minister announced in May 2026 that NEET UG will move to CBT from 2027, and reports say NTA has told the Supreme Court the same. So prepare for an on-screen exam. Read our ${p(`https://www.edurain.in/blogs/neet-2027-cbt-mode-official-updates-preparation-guide`,`NEET 2027 CBT mode preparation guide`)}.`,`${_(`Official notification is still pending.`)} NTA has not yet published the NEET UG 2027 information bulletin, so the exact dates, number of shifts and final pattern are not confirmed. Track ${p(`https://www.edurain.in/blogs/neet-ug-2027-exam-date-expected-schedule-updates`,`NEET UG 2027 exam date updates`)} and ${p(`https://www.edurain.in/blogs/is-neet-ug-2027-expected-in-may-2027-official-update`,`Is NEET UG 2027 expected in May 2027?`)}.`,`${_(`NEET UG 2026 recap.`)} NTA cancelled the 3 May 2026 exam after paper-leak allegations and held Re-NEET on 21 June 2026. The result came out on 16 July 2026, and about 11.21 lakh candidates qualified. See the trends in ${p(`https://www.edurain.in/blogs/neet-ug-statistics-2019-to-2026-complete-data-analysis`,`NEET UG statistics 2019 to 2026`)}.`,`${_(`Class 12 board dates are out.`)} CBSE released the Class 12 date sheet on 6 November 2026, with theory exams from 16 February to 9 April 2027. Plan boards and NEET together using our ${p(`https://www.edurain.in/blogs/cbse-class-12-date-sheet-2027-full-subject-wise-dates`,`CBSE Class 12 date sheet 2027 guide`)}.`])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">NEET 2027 Registration and Important Dates</h2>
                    <p style="${s}">The NTA has not yet released the official NEET UG 2027 notification. Based on past years, registration is expected to begin in February 2027, and the exam is likely to be held in the first week of May 2027. Because the exam is moving to CBT and may run over more than one day, treat every date below as tentative. Always confirm the final schedule on the official NTA website, neet.nta.nic.in.</p>
                    ${m([`Event`,`Details (Expected)`],[[`NEET UG 2027 Registration Starts`,`2nd week of February 2027`],[`Last Date to Apply`,`2nd week of March 2027`],[`Application Correction Window`,`3rd week of March 2027`],[`City Intimation Slip`,`2nd week of April 2027`],[`NEET UG 2027 Admit Card`,`Last week of April 2027`],[`NEET UG 2027 Exam Date`,`2 May 2027 (expected, first Sunday of May)`],[`Provisional Answer Key`,`1st week of May 2027`],[`Final Answer Key`,`Last week of May 2027`],[`NEET UG 2027 Result`,`June 2027`],[`Counselling`,`June / July 2027`]])}
                    <p style="${s}">${_(`Application fee (NEET UG 2026 fee, 2027 fee to be confirmed by NTA):`)} General ₹1,700, EWS/OBC ₹1,600, SC/ST/PwBD ₹1,000.</p>
                    <p style="${s}">Read our detailed guides on ${p(`https://www.edurain.in/blogs/neet-ug-2027-registration-dates-steps-fees-documents`,`NEET UG 2027 registration dates, steps, fees and documents`)} and ${p(`https://www.edurain.in/blogs/neet-ug-2027-registration-date-eligibility-guide`,`NEET UG 2027 eligibility criteria`)}.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">All-in-One Support for NEET 2027 Online Preparation at EduRain</h2>
                    <p style="${s}">Strong NEET 2027 online preparation needs a clear plan, regular practice and timely revision. EduRain gives you all three in one place. You get structured courses, daily practice, full-length tests and teachers who guide you at every step. As a result, you always know what to study next and how well you are doing.</p>

                    <h3 style="${o}">1. Courses</h3>
                    <p style="${s}">EduRain offers dedicated NEET 2027 and 2028 batches for three kinds of students:</p>
                    ${h([`${_(`Class 11:`)} 2 batches (Class 11th PCB and Mission NEET 3.0 Batch 2028)`,`${_(`Class 12:`)} 1 batch (NEET White Coat 2027)`,`${_(`Droppers:`)} 1 batch (Dropper NEET 2027)`])}
                    <p style="${s}">First, pick the batch that matches your current class. Then follow the plan for that batch. Our batches cover the full syllabus, build concepts step by step, and include regular assessments.</p>

                    <h3 style="${o}">2. NEET PYQs and Practice Questions</h3>
                    <p style="${s}">Previous year questions (PYQs) show how NEET asks questions and which topics repeat. Because of this, they are the best way to understand the exam. EduRain gives you chapter-wise PYQs and practice questions with clear solutions, backed by 3,000+ practice papers and 2,400+ mock tests on the platform. Start with our ${p(`https://www.edurain.in/blogs/neet-previous-year-questions`,`NEET previous year questions chapter-wise`)} guide, the ${p(`https://www.edurain.in/blogs/edurain-in-cell-cycle-expect-questions-with-solutions`,`top 40 repeated PYQs in Cell Biology and Biomolecules`)}, and our ${p(`https://www.edurain.in/blogs/neet-2027-important-questions-physics-biology`,`NEET 2027 important questions for Physics and Biology`)}.</p>

                    <h3 style="${o}">3. Live Classes and Recorded Lectures</h3>
                    <p style="${s}">Live classes let you ask doubts in the moment. If you miss one, the recording is ready for you. You can also replay difficult topics before a test. EduRain has 1,400+ video lectures, so you can learn at your pace without falling behind. For a step-by-step plan, read our ${p(`https://www.edurain.in/blogs/neet-2027-preparation-strategy-6-month-plan-tips`,`NEET 2027 preparation strategy: 6-month subject-wise study plan`)} and ${p(`https://www.edurain.in/blogs/how-to-prepare-for-neet-2027-complete-study-plan`,`how to prepare for NEET 2027`)}.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">EduRain NEET 2027 Online Coaching Batches</h2>
                    <p style="${s}">EduRain runs separate NEET online coaching batches for Class 11, Class 12, and dropper students. Each batch follows the latest NEET pattern and includes live classes, tests, and doubt support. Compare the batches below and choose the one that fits you. You can also ${p(e,`view all EduRain NEET courses`)}.</p>
                    ${m([`Batch`,`Best for`,`Listed fee`],[[p(`https://courses.edurain.in/courses/855893`,`Class 11th PCB`),`Class 11 students who want an early start in Physics, Chemistry and Biology`,`₹5,020`],[p(`https://courses.edurain.in/courses/814170`,`NEET White Coat 2027`),`Class 12 students who balance boards with NEET`,`₹4,820`],[p(`https://courses.edurain.in/courses/814073`,`Mission NEET 3.0 Batch 2028`),`Class 11 students targeting NEET 2028 who want a long runway to build fundamentals`,`₹9,019`],[p(`https://courses.edurain.in/courses/849748?mainCategory=0&amp;subCatList=%5B358541%5D`,`Dropper NEET 2027`),`Droppers who want a focused rebuild and revision before NEET 2027`,`₹12,500`]])}
                    <p style="${s}">Fees are as listed on the course pages and can change, so check the batch page for the latest fee and inclusions. Not sure which batch to choose? Book a free demo class and talk to an EduRain counsellor first.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">How Online NEET Exam Preparation Works at EduRain</h2>
                    <p style="${s}">Online NEET exam preparation at EduRain is simple. You learn from home, but you are never alone. Follow these four steps to begin.</p>
                    ${g([`${_(`Choose your batch.`)} Pick the Class 11, Class 12, or dropper batch from the table above.`,`${_(`Attend a free demo class.`)} See how our teachers explain concepts. Then decide.`,`${_(`Join live classes and ask questions.`)} Communication runs both ways in every class, so doubts get solved on the spot.`,`${_(`Practice, test, and revise.`)} Solve DPPs and PYQs, take weekly tests and mock tests, and use the performance analysis to improve.`])}
                    <p style="${s}">Because teachers and students talk to each other, you stay active in every class. Moreover, you can clear doubts one-on-one after class, so nothing stays confusing for long.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">NEET 2027 Preparation Guided by Dedicated Faculty</h2>
                    <p style="${s}">Good teachers make hard topics simple. EduRain's NEET faculty teaches Physics, Chemistry, Botany, and Zoology, and every teacher has years of experience with NEET aspirants. Our NEET faculty has an average teaching experience of over 15 years.</p>
                    ${m([`Subject`,`Teacher`,`Experience`],[[`Physics`,`Mr. Diwakar`,`17+ years`],[`Chemistry (Physical, Organic, Inorganic)`,`Mrs. Ritu`,`14 years`],[`Botany and Zoology`,`Mr. Nitin`,`15+ years`]])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Why Choose EduRain for the Best NEET 2027 Online Coaching?</h2>
                    <p style="${s}">NEET is cleared by students who understand concepts, not by those who only memorise. EduRain builds its NEET 2027 online coaching around this idea. Trusted by 15,000+ students, here is what you get when you join.</p>
                    ${h([`${_(`Live classes:`)} Join live classes and ask your questions in real time. Doubts do not pile up, and every concept is clear before you move on.`,`${_(`Two-way communication with teachers:`)} Ask a question during class and get an answer right away. After class, reach your teacher for one-on-one doubt clearing.`,`${_(`Recorded lectures:`)} Missed a class? Watch the recording later, or use it to revise difficult chapters before a test.`,`${_(`One-on-one doubt clearing:`)} Some doubts need personal attention, so no question stays unanswered.`,`${_(`Experienced NEET teachers:`)} They know the exam pattern, the common mistakes, and the topics that carry the most marks.`,`${_(`Regular tests with performance analysis:`)} Weekly tests and mock tests show your score, your weak chapters, and what to revise next.`,`${_(`NCERT-based study material:`)} Our notes and practice questions follow NCERT and stay updated with the latest NEET pattern.`,`${_(`Free demo class:`)} Attend a demo first. Then decide whether the batch is right for you.`,`${_(`Mobile app access:`)} Use the EduRain app to attend classes, read notes, download videos and take tests anytime, anywhere.`])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">NEET 2027 Syllabus and Exam Pattern</h2>
                    <p style="${s}">The NEET 2027 syllabus covers Physics, Chemistry, and Biology (Botany and Zoology) from NCERT Class 11 and Class 12. Therefore, you should know the full syllabus before you start. Then break it into chapters and plan each one. Read our ${p(`https://www.edurain.in/blogs/neet-ug-2027-syllabus-chapter-list-weightage`,`NEET UG 2027 syllabus with chapter list and weightage`)} for the complete list, and see the ${p(`https://www.edurain.in/blogs/high-weightage-chapters-for-neet-2027`,`high-weightage chapters for NEET 2027`)}.</p>
                    <p style="${s}">The pattern below follows the last NEET UG exam. The NTA may change it, so check the official notice when it comes out.</p>
                    ${m([`Subject`,`Questions`,`Marks`],[[`Physics`,`45`,`180`],[`Chemistry`,`45`,`180`],[`Biology (Botany and Zoology)`,`90`,`360`],[_(`Total`),_(`180`),_(`720`)]])}
                    <p style="${s}">Each correct answer gives +4 marks, and each wrong answer gives -1 mark. Unanswered questions get no marks. The last NEET UG paper was three hours long; confirm the duration in the official bulletin.</p>

                    <h3 style="${o}">NEET 2027 will be a CBT: how to prepare</h3>
                    <p style="${s}">NEET UG moves from pen and paper (OMR) to a computer-based test from 2027. The syllabus does not change because of this, but your exam skills do. Practise reading long questions on screen, switching between questions quickly, and managing three hours without rough paper habits you rely on today. Take some of your weekly mock tests on a computer, not only on printed papers. Our guide on ${p(`https://www.edurain.in/blogs/neet-2027-cbt-mode-official-updates-preparation-guide`,`NEET 2027 CBT mode updates and preparation`)} explains how. For marks, duration, and the full pattern, see our ${p(`https://www.edurain.in/blogs/neet-ug-2027-exam-pattern-marks-duration-preparation`,`NEET UG 2027 exam pattern guide`)}.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">NEET 2027 Preparation Resources</h2>
                    <p style="${s}">You need the right resources at the right time. Some students want a quick revision. Others want a full course. EduRain has both. Use the free resources to start, and join a batch when you want complete guidance.</p>

                    <h3 style="${o}">Free NEET Resources</h3>
                    <p style="${s}">The EduRain blog has free notes, tips, and practice for NEET 2027 online preparation.</p>
                    ${v(`Exam updates and strategy`)}
                    ${h([p(`https://www.edurain.in/blogs/neet-2027-preparation-strategy-6-month-plan-tips`,`NEET 2027 preparation strategy: 6-month subject-wise study plan`),p(`https://www.edurain.in/blogs/how-to-prepare-for-neet-2027-complete-study-plan`,`How to prepare for NEET 2027: complete study plan`),p(`https://www.edurain.in/blogs/neet-ug-2027-exam-date-expected-schedule-updates`,`NEET UG 2027 exam date: expected schedule and updates`),p(`https://www.edurain.in/blogs/neet-ug-statistics-2019-to-2026-complete-data-analysis`,`NEET UG statistics 2019 to 2026`),p(`https://www.edurain.in/blogs/neet-important-questions-for-2027-exam-with-solutions`,`NEET important questions for 2027 with solutions: Physics, Chemistry and Biology`),p(`https://www.edurain.in/blogs/neet-2027-physics-important-chapters-formulas`,`NEET 2027 Physics important chapters and formula sheet`),p(`https://www.edurain.in/blogs/neet-2027-biology-important-chapters`,`NEET 2027 Biology most important chapters`)])}
                    ${v(`Physics`)}
                    ${h([p(`https://www.edurain.in/blogs/how-to-solve-physics-numericals-for-neet`,`How to solve Physics numericals for NEET`),p(`https://www.edurain.in/blogs/neet-physics-thermal-physics-and-waves`,`Thermal physics and waves: formula sheet`),p(`https://www.edurain.in/blogs/electromagnetic-induction-and-alternating-current-neet`,`Electromagnetic induction and alternating current`),p(`https://www.edurain.in/blogs/thermodynamics-for-class-11-neet-2027`,`Thermodynamics for Class 11 NEET 2027`),p(`https://www.edurain.in/blogs/rotational-motion-neet-physics`,`Rotational motion for NEET Physics`),p(`https://www.edurain.in/blogs/physics-properties-of-solids-and-liquids-for-neet-exam`,`Properties of solids and liquids`),p(`https://www.edurain.in/blogs/vectors-class-11-physics`,`Vectors, Class 11 Physics`),p(`https://www.edurain.in/blogs/electrostatics-and-capacitance-notes-formulas`,`Electrostatics and capacitance`),p(`https://www.edurain.in/blogs/ncert-solutions-for-class-12-physics-chapter-10-wave-optics`,`Class 12 Physics Chapter 10: Wave Optics`),p(`https://www.edurain.in/blogs/ncert-solutions-class-12-physics-chapter-11-for-neet-2027`,`Class 12 Physics Chapter 11: Dual Nature of Radiation and Matter`)])}
                    ${v(`Biology`)}
                    ${h([p(`https://www.edurain.in/blogs/class-11-cell-cycle-and-cell-division-complete-neet-guide`,`Cell cycle and cell division: complete NEET guide`),p(`https://www.edurain.in/blogs/edurain-in-cell-cycle-expect-questions-with-solutions`,`Top 40 repeated PYQs in Cell Biology and Biomolecules`),p(`https://www.edurain.in/blogs/human-physiology-neet-notes-digestion-to-excretion`,`Human physiology NEET notes: digestion to excretion`),p(`https://www.edurain.in/blogs/class-11-human-edurain-in-physiology-neet-notes-weightage-tips`,`Class 11 Human Physiology NCERT complete guide`),p(`https://www.edurain.in/blogs/class-11-biology-chapter-4-animal-kingdom`,`Class 11 Animal Kingdom: phylum-wise classification`),p(`https://www.edurain.in/blogs/locomotion-and-movement-diagrams-for-neet-biology`,`Locomotion and movement diagrams`),p(`https://www.edurain.in/blogs/human-reproduction-neet-biology`,`Human reproduction: NCERT notes and diagrams`),p(`https://www.edurain.in/blogs/reproduction-in-organisms-neet`,`Reproduction in organisms`),p(`https://www.edurain.in/blogs/class-12-biology-chapter-5-molecular-basis-of-inheritance`,`Molecular basis of inheritance (Class 12 Chapter 5)`),p(`https://www.edurain.in/blogs/class-12-biology-chapter-9-biotechnology-for-neet-ug-2027`,`Biotechnology: principles and processes (Class 12 Chapter 9)`),p(`https://www.edurain.in/blogs/edurain-in-master-biotechnology-for-neet-ncert-diagrams-key-tips`,`Biotechnology and its applications: complete diagrams`),p(`https://www.edurain.in/blogs/neet-2027-gene-therapy-ncert-notes-vectors-practice`,`Gene therapy: principles, applications and important questions`),p(`https://www.edurain.in/blogs/plant-hormones-neet-2027`,`Plant hormones: important questions and PYQs`),p(`https://www.edurain.in/blogs/plant-hormone-tricks-for-neet-aspirants`,`Mnemonics and tricks for plant growth regulators`)])}

                    <h3 style="${o}">Paid NEET Batches</h3>
                    <p style="${s}">Paid batches give you the full package: live classes, recorded lectures, study material, doubt support, and regular tests. Choose from our Class 11, Class 12 and dropper batches in the batches section above, or ${p(e,`view all EduRain NEET courses`)}.</p>

                    <h3 style="${o}">Study Material, DPPs, and Practice</h3>
                    <p style="${s}">EduRain gives you chapter-wise notes, DPPs, sample papers, MCQs, mind maps, and formula sheets for Physics, Chemistry, and Biology. Together, they help you learn, practice, and revise in a steady routine.</p>
                    ${h([`Concept notes and formula sheets for quick revision`,`Daily Practice Problems (DPPs) for every chapter`,`NEET sample papers and mock tests with solutions`,`NEET MCQs and mind maps for fast revision`,`Previous year question collections for NEET`])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">NEET 2027 Preparation Tips</h2>
                    <p style="${s}">NEET UG 2027 is expected in early May, so you have just over five months left. These five tips will make your NEET 2027 online preparation more focused. Start with the first one today.</p>
                    ${g([`${_(`Read NCERT first.`)} NEET questions come mostly from NCERT, especially in Biology and Chemistry. So, read every NCERT chapter line by line and underline key terms and diagrams.`,`${_(`Make a daily plan and follow it.`)} Give each subject fixed time every day. Start with the high-weightage chapters for NEET 2027. Our ${p(`https://www.edurain.in/blogs/neet-2027-preparation-strategy-6-month-plan-tips`,`6-month NEET 2027 study plan`)} shows you how.`,`${_(`Practice PYQs and mock tests every week, some of them on screen.`)} PYQs show you the exam style. Mock tests show you your speed. Since NEET 2027 is a CBT, take a few full-length tests on a computer to get used to the format and to manage time on a three-hour paper.`,`${_(`Revise often with short notes.`)} Use mind maps, formula sheets, and diagrams for quick revision. Revise each chapter at least three times before the exam.`,`${_(`Fix your weak topics early.`)} After every test, list the topics you got wrong. Then study them again and attempt fresh questions. Ask your teacher if a doubt remains.`])}
                    <p style="${s}">Finally, stay consistent. Steady daily work beats a few long nights of study.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Start Your NEET 2027 Online Preparation Today</h2>
                    <p style="${s}">Your NEET 2027 online preparation begins with one step: choose a batch. Book a free demo class to see how EduRain teaches. Then join the batch that suits you, and start with the first chapter. You can ${p(e,`view all EduRain NEET courses`)} or call and WhatsApp us on ${p(`tel:+91 84480 97535`,`+91 84480 97535`)} for help.</p>
                </div>
    `)}function T(){return i(`Best NEET 2027 Online Coaching and Complete NEET 2027 Online Preparation with EduRain`,`Looking for the best NEET 2027 online coaching? EduRain helps Class 11, Class 12, and dropper students with NEET 2027 online preparation through live classes, recorded lectures, PYQs, DPPs, and mock tests. This page covers our batches, faculty, syllabus, latest exam updates, study resources, and preparation tips in one place.`,`NEET`,w())}function E(){let e=(e,t)=>p(`https://www.edurain.in/blogs/${e}`,t);return y(`
                <div class="er-anime-reveal">
                    <p style="${s}">Class 6 to 12 is where concepts are built and then put to the test. A child who understands fractions, force or grammar properly in Class 7 finds Class 10 boards easier, and Class 11 and 12 Physics, Chemistry, Maths and Biology become far less stressful, along with JEE or NEET. At EduRain you attend live classes, watch recordings when you need them again, practise with DPPs and tests, and get your doubts cleared by teachers, all from home. Our batches follow the latest CBSE syllabus and are planned for the 2026-27 session and the 2027 board exams.</p>

                    <h2 style="${a} margin-top: 1.6rem;">Online batches for Class 6 to 12</h2>
                    <p style="${s}">Every batch covers its core subjects with live and recorded classes, tests and doubt support. Class 9 to 12 batches also give special attention to board-pattern questions.</p>
                    ${m([`Class`,`Batch`,`Best for`,`Teachers`,`Price`],[[`6`,p(`https://courses.edurain.in/courses/830607`,`Class 6th Batch`),`Building a strong base in Maths, Science and English with simple, step-by-step lessons`,`Khushboo ma'am, Abhishek Sir, Manoj Sir, Yamini ma'am`,`₹3,520`],[`7`,p(`https://courses.edurain.in/courses/830943`,`Class 7th Batch`),`Moving from basics to deeper understanding, with regular practice, weekly tests and answer-writing`,`Khushboo ma'am, Abhishek Sir, Manoj Sir, Yamini ma'am`,`₹3,520`],[`8`,p(`https://courses.edurain.in/courses/830945`,`Class 8th Batch`),`Algebra, mensuration, physics and chemistry basics, so Class 9 does not feel like a sudden jump`,`Khushboo ma'am, Abhishek Sir, Manoj Sir, Yamini ma'am`,`₹4,520`],[`9`,p(`https://courses.edurain.in/courses/814577`,`Class 9th Super Champions Batch`),`CBSE students who want an early start on board exams, with chapter-wise teaching and regular tests`,`Manoj Sir, Khushboo ma'am, Nandini ma'am, Sujeet Sir`,`₹4,520`],[`10`,p(`https://courses.edurain.in/courses/814204`,`Class 10th Disha Batch`),`Board-focused preparation: full syllabus, revision, mock tests and answer-writing practice`,`Khushboo ma'am, Meghna ma'am, Manoj Sir, Yamini ma'am`,`₹4,020`]])}
                    <p style="${s}">Not sure which batch fits? Book a free demo class and our team will guide you.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Why choose EduRain online classes for Class 6 to 12?</h2>
                    ${h([`${_(`Live online classes.`)} Attend live classes from home and ask questions the moment they come to mind. Teachers explain, solve examples on the board and keep the class active.`,`${_(`Recorded lectures for revision.`)} Missed a class or want to revisit a chapter before the exam? Watch the recording again as many times as you need.`,`${_(`DPPs for every chapter.`)} Daily Practice Problems make practice a daily habit instead of a last-week rush.`,`${_(`Weekly tests and mock tests.`)} Weekly tests show where you stand, and mock tests prepare you for the real exam hall. After every test, review your weak topics and fix them.`,`${_(`Doubt-clearing support.`)} Ask doubts in class or through our doubt support and get simple, clear explanations from teachers.`,`${_(`Board exam preparation.`)} From Class 9 onwards, and especially in Class 10 and 12, we keep the board pattern in mind: NCERT-based teaching, important questions, previous-year question practice, revision and answer-writing.`,`${_(`Free demo class.`)} Attend a free demo class, see how we teach and then decide.`,`${_(`App and web access.`)} Study on the EduRain app or website, on a phone, tablet or laptop, whenever it suits you.`])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Subjects covered in Class 6 to 12 online coaching</h2>
                    ${h([`${_(`Maths:`)} number systems, algebra, geometry, mensuration, trigonometry and statistics in Class 6 to 10, and sets, functions, calculus, vectors, probability and more in Class 11 and 12, taught with solved examples and practice sets.`,`${_(`Science:`)} physics, chemistry and biology explained with diagrams, real-life examples and numerical practice. In Class 11 and 12, Physics, Chemistry and Biology are taught as separate subjects.`,`${_(`English:`)} grammar, writing skills and reading comprehension for better school and board exam answers.`,`${_(`Social Science (SST):`)} history, geography, civics and economics for Class 6 to 10, with chapter-wise notes and answer-writing practice, taught by Khushboo ma'am.`])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">How a typical week looks</h2>
                    ${g([`Attend live classes on the chapter of the week.`,`Revise the same day with the recorded lecture and notes.`,`Solve DPPs on that chapter.`,`Clear doubts with teachers.`,`Take the weekly test and review your mistakes.`])}
                    <p style="${s}">This simple cycle of learn, practise, test and improve is what turns average marks into good marks.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Who should join EduRain online batches?</h2>
                    ${h([`Students of Class 6 to 12 who want strong basics in Maths and Science.`,`Class 9 to 12 students preparing for CBSE board exams 2027 who want regular tests and answer-writing practice.`,`Students who find school teaching too fast and need a second round of explanation.`,`Parents who want a safe, home-based way for their child to learn, with regular tests and progress tracking.`,`Students from smaller towns who want quality teaching without travelling to a coaching centre.`,`Class 11 and 12 students, and JEE and NEET aspirants, who want to build exam-ready concepts alongside school studies.`])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">From foundation to JEE and NEET: why start early?</h2>
                    <p style="${s}">Many toppers say their rank was built in Class 9 and 10. Chapters like motion, force, atoms and molecules, life processes, electricity and algebra are the roots of Class 11 and 12 Physics, Chemistry, Biology and Maths. When these basics are clear early, serious exam preparation in Class 11 and 12 becomes smoother and less stressful. And once your child reaches Class 11 and 12, the same EduRain classroom carries them through school exams, boards and entrance tests together.</p>
                    <p style="${s}">When your child is ready for the next step, explore our ${p(`https://www.edurain.in/courses/iit-jee`,`JEE Main 2027 online coaching`)} and ${p(`https://www.edurain.in/courses/neet`,`NEET 2027 online coaching`)} programs. You can also read how the toppers' path starts with strong basics in ${e(`class-9-science-atoms-and-molecules`,`Class 9 Science: Atoms and Molecules`)} and ${e(`force-and-laws-of-motion-class-9`,`Force and Laws of Motion Class 9`)}.</p>
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Meet our Class 6 to 12 faculty</h2>
                    <p style="${s}">Learn from teachers who know the CBSE syllabus and how to make concepts easy.</p>
                    ${m([`Teacher`,`Subject`,`Classes`,`Experience`],[[`Abhishek Sir`,`Maths`,`6th-8th`,`5+ years`],[`Meghna Ma'am`,`Maths`,`9th-10th`,`8+ years`],[`Yamini Ma'am`,`Science`,`6th-10th`,`7+ years`],[`Manoj Sir`,`English`,`6th-10th`,`15+ years`],[`Khushboo Ma'am`,`SST`,`6th-10th`,`5+ years`]])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Tests, DPPs and doubt support</h2>
                    ${h([`${_(`Experienced teachers.`)} Our teachers explain concepts in simple language and keep every class interactive.`,`${_(`Daily Practice Problems (DPPs).`)} You get DPPs for every chapter, so practice happens daily and not just before exams.`,`${_(`Weekly and mock tests.`)} Chapter-wise and weekly tests check your understanding, and mock tests build exam confidence. After every test, review weak topics, fix them and try again.`,`${_(`Two-way communication.`)} Students talk to teachers in class and get doubts solved, so learning is a conversation and not a one-way video.`])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Free study resources for Class 6 to 12</h2>
                    <p style="${s}">Read our free guides to see how we explain topics.</p>
                    ${v(`Class 10 board exam 2027`)}
                    ${h([e(`edurain-in-class-10-board-exam-preparation-tips-for-cbse-students`,`Class 10 Board Exam Preparation Tips for CBSE Students`),e(`cbse-class-10-board-exam-2027-date-sheet-pdf-download`,`CBSE Class 10 Board Exam 2027 Date Sheet`),e(`cbse-class-10-maths-important-questions-chapter-wise`,`CBSE Class 10 Maths Important Questions Chapter-Wise`),`CBSE Class 10 Maths Formula Sheet 2027`,e(`class-10-maths-chapter-wise-mcqs-with-answers`,`Class 10 Maths Chapter-wise MCQs with Answers for 2027 Exams`),e(`quadratic-equations-class-10`,`Quadratic Equations Class 10: Tricky Questions Solved Step by Step`),e(`most-important-class-10-science-question`,`Most Important Class 10 Science Question Types with Sample Papers`),`CBSE Class 10 Science Previous Year Repeated Questions (2021-2025)`,e(`chemical-reactions-and-equations-class-10-notes-tips`,`Chemical Reactions and Equations Class 10 Notes`),`Class 10 SST Chapter-Wise Strategy for Board 2027`])}
                    ${v(`Class 9`)}
                    ${h([e(`class-9-science-atoms-and-molecules`,`Class 9 Science: Atoms and Molecules`),e(`force-and-laws-of-motion-class-9`,`Force and Laws of Motion Class 9 Notes for Quick Revision`)])}
                    ${v(`Class 6 to 8`)}
                    ${h([`New guides on Maths and Science for Class 6, 7 and 8 are coming soon.`])}
                </div>

                ${f}
                <div class="er-anime-reveal">
                    <h2 style="${a}">Start learning with EduRain today</h2>
                    <p style="${s}">Give your child a strong start with online coaching for Class 6 to 12. Attend a free demo class, pick your batch and begin. Call ${p(`tel:+918448097535`,`+91 84480 97535`)} or message us on ${p(`https://wa.me/918448097535`,`WhatsApp`)} to enroll.</p>
                </div>
    `)}function D(){return i(`Best Online Coaching for Class 6 to 12 | CBSE, ICSE, UP Board Classes`,`EduRain offers online coaching for students of Class 6, 7, 8, 9, 10, 11 and 12 who want strong basics in Maths, Science (Physics, Chemistry, Biology), English and Social Science, and a calm, steady path to good marks in CBSE, ICSE and UP Board exams. This page shows our class-wise batches, how our classes run and how we help you from school exams to board exams and beyond.`,`FOUNDATION`,E())}var O=e=>t(e,r);export{O as refreshCategoryTiles,r as renderCourseCard,D as renderFoundationCourses,C as renderJEECourses,T as renderNEETCourses};