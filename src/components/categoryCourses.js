import coursesData from '../data/courses.json' with { type: 'json' };
import { renderFAQ } from './faq.js';
import { courseTiles, refreshCourseTiles } from '../data/webappCourses.js';

export function renderCourseCard(course) {
    const stars = '⭐'.repeat(Math.round(course.rating));
    const studentCount = course.students >= 1000
        ? `${(course.students / 1000).toFixed(1)}K`
        : course.students;

    return `
        <div class="glass-card course-card fade-in-section visible" data-category="${course.category}" data-link="${course.link || '#'}">
            <div class="course-thumb">
                <a href="${course.link || '#'}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%;">
                    <img loading="lazy" src="${course.thumbnail || '/images/demo.webp'}" alt="${course.title}" width="400" height="295" style="aspect-ratio: 1.355/1; object-fit: cover; object-position: top center;" />
                </a>
            </div>
            <span class="course-category">${course.category}</span>
            <h3>
                <a href="${course.link || '#'}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
                    ${course.title}
                </a>
            </h3>
            <p class="course-instructor">by ${course.instructor}</p>
            <div class="course-meta">
                <span class="course-rating">${stars} ${course.rating}</span>
                <span class="course-students">${studentCount} students</span>
            </div>
            <div class="course-bottom">
                <span class="course-price">${course.price}</span>
                <a href="${course.link || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm" style="text-decoration: none; display: inline-flex; align-items: center; justify-content: center;">
                    View Details
                </a>
            </div>
        </div>
    `;
}

function renderCategoryPage(title, description, categoryKey, extraContentHtml = '') {
    // Before the web app's courses: coursesData.filter(c => c.category === categoryKey);
    const filteredCourses = courseTiles().filter(c => c.category === categoryKey);
    const coursesHtml = filteredCourses.length > 0 
        ? filteredCourses.map(renderCourseCard).join('') 
        : '<p style="text-align: center; width: 100%; color: var(--text-muted);">No courses available in this category yet.</p>';

    return `
        <section class="courses-section">
            <div class="section-header">
                <h1>${title}</h1>
                <p>${description}</p>
            </div>
            <div class="filter-row">
                <a href="/courses" class="filter-btn" style="text-decoration: none;">All</a>
                <a href="/courses/iit-jee" class="filter-btn ${categoryKey === 'JEE' ? 'active' : ''}" style="text-decoration: none;">JEE</a>
                <a href="/courses/neet" class="filter-btn ${categoryKey === 'NEET' ? 'active' : ''}" style="text-decoration: none;">NEET</a>
                <a href="/courses/foundation" class="filter-btn ${categoryKey === 'FOUNDATION' ? 'active' : ''}" style="text-decoration: none;">FOUNDATION</a>
            </div>
            <div class="courses-grid" style="margin-top: 40px;">
                ${coursesHtml}
            </div>
        </section>
        
        ${extraContentHtml}
        
        ${renderFAQ(categoryKey)}
    `;
}

// Content below the course cards of the JEE and NEET pages, from the team's Google Docs. Same colours as the old
// sections; tables look like the docs' (bordered, shaded header row).
const H2_STYLE = "color: #f8fafc; font-size: 1.8rem; margin: 0 0 1rem; font-weight: 800; line-height: 1.25; letter-spacing: -0.02em; font-family: 'Inter', sans-serif;";
const H3_STYLE = "color: #f1f5f9; font-size: 1.3rem; margin: 1.6rem 0 0.7rem; font-weight: 700; line-height: 1.3; font-family: 'Inter', sans-serif;";
const P_STYLE = "margin: 0 0 1.1rem; color: #cbd5e1; line-height: 1.7; font-size: 1.05rem; max-width: 85ch;";
const UL_STYLE = "list-style: disc; margin: 0 0 1.2rem; padding-left: 1.4rem; color: #cbd5e1; line-height: 1.7; font-size: 1.05rem;";
const LI_STYLE = "margin-bottom: 0.4rem;";
const TH_STYLE = "text-align: left; padding: 0.7rem 0.9rem; border: 1px solid rgba(255, 255, 255, 0.22); background: rgba(255, 255, 255, 0.08); color: #f8fafc; font-weight: 700;";
const TD_STYLE = "padding: 0.7rem 0.9rem; border: 1px solid rgba(255, 255, 255, 0.22); vertical-align: top;";
const DIVIDER = `<div style="width: 50px; height: 3px; background: #3b82f6; border-radius: 2px; margin: 2.5rem 0 1.5rem;"></div>`;

/** A link in the page content; course links open in a new tab like the course cards. */
const contentLink = (href, text) => href.startsWith('https://courses.')
    ? `<a href="${href}" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; font-weight: 600; text-decoration: none;">${text}</a>`
    : `<a href="${href}" style="color: #60a5fa; font-weight: 600; text-decoration: none;">${text}</a>`;

/** A table like the doc's: every cell bordered, shaded header row; scrolls sideways on a narrow phone. */
const contentTable = (head, rows) => `
                <div style="overflow-x: auto; margin: 0.4rem 0 1.4rem;">
                    <table style="width: 100%; border-collapse: collapse; color: #cbd5e1; font-size: 1rem; line-height: 1.5;">
                        <thead><tr>${head.map((cell) => `<th style="${TH_STYLE}">${cell}</th>`).join('')}</tr></thead>
                        <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td style="${TD_STYLE}">${cell}</td>`).join('')}</tr>`).join('')}</tbody>
                    </table>
                </div>`;

const contentList = (items) => `<ul style="${UL_STYLE}">${items.map((item) => `<li style="${LI_STYLE}">${item}</li>`).join('')}</ul>`;

/** A numbered list (steps, tips). */
const contentSteps = (items) => `<ol style="${UL_STYLE.replace('list-style: disc', 'list-style: decimal')}">${items.map((item) => `<li style="${LI_STYLE}">${item}</li>`).join('')}</ol>`;

/** Bold lead-in text, as in the docs' "Exam mode: ..." items. */
const contentBold = (text) => `<strong style="color: #f1f5f9;">${text}</strong>`;

/** A small bold heading inside a section, for groups such as "Physics" in a list of links. */
const contentLabel = (text) => `<p style="margin: 1.2rem 0 0.5rem; color: #f1f5f9; font-weight: 700; font-size: 1.05rem;">${text}</p>`;

/** The glass box around the content, as in the old sections but with one even colour: the old sections' two corner
 *  glows end in a hard vertical line on a box this tall. Only the inner blocks fade in: the page staggers every
 *  .er-anime-reveal by 150 ms, so one per paragraph would keep the lower part of a long page hidden for seconds. */
const contentSection = (inner) => `
        <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
            <div style="position: relative; z-index: 1;">
                ${inner}
            </div>
        </section>
    `;

const facultyTable = (subject, teachers) => `
                    <div>
                        <h3 style="${H3_STYLE}">${subject}</h3>
                        ${contentTable(['Teacher Name', 'Experience'], teachers)}
                    </div>`;

const featureCard = (title, text) => `
                    <div style="padding: 1.1rem 1.2rem; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; background: rgba(255, 255, 255, 0.02);">
                        <h3 style="color: #f1f5f9; font-size: 1.1rem; margin: 0 0 0.4rem; font-weight: 700; font-family: 'Inter', sans-serif;">${title}</h3>
                        <p style="margin: 0; color: #cbd5e1; line-height: 1.6; font-size: 1rem;">${text}</p>
                    </div>`;

// JEE page, from the doc "Best JEE Main 2027 Online Coaching and Complete Preparation with EduRain"
function jeeMain2027Html() {
    return contentSection(`
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">JEE Main 2027 Registration: Eligibility, Documents, and Application Process</h2>
                    <p style="${P_STYLE}">JEE Main 2027 Session 1 registration began on 24 October 2026 on the official NTA website, and the last date to apply is 22 November 2026 (11:50 pm). Candidates who want admission to B.E./B.Tech, B.Arch and B.Planning courses at NITs, IIITs and other participating institutes can apply online.</p>
                    <p style="${P_STYLE}">Before you fill the application form, check the JEE Main 2027 eligibility criteria, the documents required, the application fee and the registration steps. You will typically need a recent photograph, your signature, Class 10 details and a valid ID, but always confirm the exact list in the official NTA notice. Keep your documents ready and check the latest updates on the application form, exam schedule, syllabus and other notifications regularly, so that you never miss a deadline.</p>
                    <p style="${P_STYLE}">Read our detailed guide: ${contentLink('https://www.edurain.in/blogs/jee-main-2027-registration-steps-documents-and-fee/', 'JEE Main 2027 registration steps, documents and fee')}. You can also check the ${contentLink('https://www.edurain.in/blogs/jee-main-2027-session-1-registration-date/', 'JEE Main 2027 Session 1 registration date')}.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">JEE Main &amp; Advanced 2027 Important Dates</h2>
                    <p style="${P_STYLE}">Staying updated with the JEE Main and JEE Advanced 2027 important dates helps you plan your exam preparation and admission process. From registration and exam dates to answer keys, results, and counselling, track every event so that you never miss a deadline. The dates below follow the NTA schedule as reported by news sources, so confirm them on the official NTA notice at jeemain.nta.nic.in. For a detailed breakdown, read our ${contentLink('https://www.edurain.in/blogs/jee-mains-2027-form-date-exam-date-session-1-2/', 'JEE Main 2027 form date and exam date guide')}.</p>
                    ${contentTable(['Event', 'Details'], [
                        ['JEE Main 2027 Session 1 Registration', '24 October to 22 November 2026'],
                        ['Session 1 Correction Window', '27 to 29 November 2026'],
                        ['Session 1 City Intimation Slip', '31 December 2026'],
                        ['Session 1 Admit Card', '13 January 2027'],
                        ['JEE Main 2027 Session 1 Exam Dates', '20, 21, 22, 23, 24 and 28 January 2027'],
                        ['Session 1 Answer Key and Result', 'February 2027 (expected)'],
                        ['JEE Main 2027 Session 2 Registration', '5 January to 3 February 2027'],
                        ['JEE Main 2027 Session 2 Exam Dates', '2 to 7 April 2027'],
                        ['Session 2 Result', 'April 2027 (expected)'],
                        ['JEE Advanced 2027 Exam Date', 'May 2027 (expected)'],
                        ['JEE Advanced 2027 Result', 'June 2027 (expected)'],
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Complete JEE 2027 Preparation Support at EduRain</h2>
                    <p style="${P_STYLE}">With JEE Main 2027 approaching, it is time to shift your focus to focused, structured preparation. EduRain helps you prepare effectively with dedicated courses, regular revision, a complete test series and personal guidance, so that you strengthen your concepts and maximise your performance. If you are looking for a plan, read our ${contentLink('https://www.edurain.in/blogs/jee-main-2027-preparation-strategy-complete-6-month-plan/', 'JEE Main 2027 preparation strategy: complete 6-month plan')}. Short on time? Follow the ${contentLink('https://www.edurain.in/blogs/jee-main-2027-in-90-days-99-percentile-preparation-plan/', 'JEE Main 2027 in 90 days roadmap to score 99 percentile')}, or start with our ${contentLink('https://www.edurain.in/blogs/how-to-prepare-for-jee-2027-complete-study-plan-tips/', 'complete JEE 2027 strategy, syllabus and study plan')}.</p>

                    <h3 style="${H3_STYLE}">1. Courses</h3>
                    <p style="${P_STYLE}">EduRain offers dedicated JEE 2027 batches for:</p>
                    ${contentList([
                        `Class 11: ${contentLink('https://courses.edurain.in/courses/846771', 'CLASS 11TH PCB (JEE)')} and ${contentLink('https://courses.edurain.in/courses/813811', 'JEE Mantra 3.0 Batch 2028')}`,
                        `Class 12: ${contentLink('https://courses.edurain.in/courses/814178', 'TARGET JEE 2027 - 12TH CLASS BATCH')} and ${contentLink('https://courses.edurain.in/courses/857872', 'CLASS 12TH MATHEMATICS')}`,
                        `Droppers: ${contentLink('https://courses.edurain.in/courses/849750', 'Dropper JEE 2027 Batch')}`,
                    ])}
                    <p style="${P_STYLE}">Choose the batch that matches your academic level and preparation needs.</p>

                    <h3 style="${H3_STYLE}">2. JEE Mock Tests and Chapter-Wise Tests</h3>
                    <p style="${P_STYLE}">Regular testing is the best way to improve speed and accuracy. At EduRain you get Daily Practice Problems (DPPs) for every chapter, plus 2,400+ mock tests and sectional tests. These tests show you your weak areas and help you improve through consistent practice.</p>

                    <h3 style="${H3_STYLE}">3. JEE PYQs and Practice Questions</h3>
                    <p style="${P_STYLE}">Solving previous year questions (PYQs) along with regular practice is one of the most effective ways to prepare for JEE Main. It helps you understand the exam pattern, the types of questions and the difficulty level. EduRain gives you 3,000+ practice papers so that you can practise every topic thoroughly and with confidence.</p>

                    <h3 style="${H3_STYLE}">4. Live Classes and Recorded Lectures</h3>
                    <p style="${P_STYLE}">Regular learning and timely revision matter a lot in JEE preparation. EduRain offers live classes and 1,400+ recorded video lectures. Attend live sessions for real-time learning, and go back to recorded lectures anytime for revision and extra clarity.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">JEE Preparation Guided by Experienced Faculty</h2>
                    <p style="${P_STYLE}">Dedicated guidance plays a key role in JEE preparation. EduRain's IIT-JEE faculty includes experienced teachers across Physics, Chemistry and Mathematics, with 10+ years of teaching experience each.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0 1.5rem;">
                        ${facultyTable('Physics', [['Diwakar Sir', '17+ years'], ['Rahul Sir', '10+ years']])}
                        ${facultyTable('Physical Chemistry', [["Ritu Ma'am", '14+ years'], ['Rahul Sir', '10+ years']])}
                        ${facultyTable('Organic Chemistry', [["Ritu Ma'am", '14+ years'], ['Rahul Sir', '10+ years']])}
                        ${facultyTable('Inorganic Chemistry', [["Ritu Ma'am", '14+ years'], ['Rahul Sir', '10+ years']])}
                        ${facultyTable('Mathematics', [['Mr. Debashish Banerjee Sir', '18+ years'], ["Meghna Ma'am", '11+ years']])}
                    </div>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Why Choose EduRain Online Coaching for IIT JEE Main?</h2>
                    <p style="${P_STYLE}">EduRain's ${contentLink('https://www.edurain.in/courses/', 'online JEE courses')} are designed to support you at every stage of your preparation. Our IIT JEE online coaching has features that help you learn clearly, practice regularly, and improve continuously.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin-top: 1.2rem;">
                        ${featureCard('Live Classes', 'Attend interactive live classes where you can ask questions and talk to teachers in real time. Doubts get cleared immediately, which improves your understanding.')}
                        ${featureCard('Recorded Sessions', 'Missed a live class? Recorded sessions let you study at your own pace and revise difficult topics whenever you need.')}
                        ${featureCard('Study Material', `Get complete study material, including video lectures, notes, and practice questions. It covers the full ${contentLink('https://www.edurain.in/blogs/jee-main-2027-syllabus-important-chapters/', 'JEE Main 2027 syllabus and important chapters')} in a clear and organized way.`)}
                        ${featureCard('Doubt Resolution', 'A dedicated doubt-clearing facility is available for you. Questions asked during or after class are answered through live doubt-solving support that is available 24/7, so you get timely help.')}
                        ${featureCard('Mock Tests', 'Regular mock tests let you experience the real JEE Main exam pattern. They help you check your preparation level and improve accuracy and time management.')}
                        ${featureCard('Performance Tracking', 'A performance dashboard helps you track your progress, attendance, and test scores, so it is easy to spot your strengths and the areas that need work.')}
                        ${featureCard('Peer Interaction', 'Take part in peer-to-peer doubt-solving sessions. Collaborative learning builds a supportive academic environment.')}
                        ${featureCard('Personalized Learning Plans', 'Get a customized study plan based on your needs and strengths. It helps you focus on the important areas and prepare more effectively. AI-powered personalized practice adapts to your weak topics.')}
                        ${featureCard('Regular Feedback', 'Teachers give consistent feedback on your performance, which keeps you motivated and helps you improve steadily.')}
                        ${featureCard('Mobile App Access', 'Access classes, study material, and tests through the mobile app, so your learning can continue anytime and anywhere. You can also download video lectures and watch them offline.')}
                    </div>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Mock Tests, PYQs, and Study Material</h2>
                    <p style="${P_STYLE}">Smart JEE Main preparation rests on three habits: test regularly, practice previous year questions, and revise from reliable notes. EduRain gives you all three in one place.</p>

                    <h3 style="${H3_STYLE}">JEE Test Series: Chapter-Wise and Full-Length Mocks</h3>
                    <p style="${P_STYLE}">Our JEE test series includes chapter-wise tests, sectional tests and full-length mock tests for Class 11, Class 12 and dropper students. Each test follows the latest JEE Main pattern, so you get used to the real exam, learn time management, and improve speed and accuracy. After every test, your performance report shows your weak chapters, so you know exactly what to revise next.</p>

                    <h3 style="${H3_STYLE}">JEE Previous Year Questions (PYQs)</h3>
                    <p style="${P_STYLE}">PYQs show you which topics are asked again and again and how tough the questions are. At EduRain you get solved JEE Main PYQs with clear explanations, along with topic-wise practice sets. Start with our ${contentLink('https://www.edurain.in/blogs/jee-mains-physics-important-questions-with-solutions/', 'JEE Mains physics important questions with solutions')}, our list of ${contentLink('https://www.edurain.in/blogs/high-weightage-chapters-for-jee-main-2027/', 'high-weightage chapters for JEE Main 2027')} and the ${contentLink('https://www.edurain.in/blogs/most-important-physics-chapters-for-jee-2027/', 'most important physics chapters for JEE 2027')} to decide where to spend your time.</p>
                    <p style="${P_STYLE}">Also read our ${contentLink('https://www.edurain.in/blogs/jee-mains-important-chapters-and-topics-for-2027-exam', 'JEE Mains important chapters and topics for 2027 exam')} and see which ${contentLink('https://www.edurain.in/blogs/top-10-jee-advanced-repeated-topics', 'topics repeat every year in JEE Advanced')}.</p>

                    <h3 style="${H3_STYLE}">Study Material, Modules, and Notes</h3>
                    <p style="${P_STYLE}">EduRain provides complete study material for Physics, Chemistry and Mathematics, including chapter-wise notes, modules, DPPs and practice questions. Everything is arranged according to the JEE syllabus, so you do not need to search for extra resources.</p>
                    ${contentList([
                        'Concept notes and formula sheets for quick revision',
                        'Daily Practice Problems (DPPs) for every chapter',
                        'Mock and sectional test papers with detailed solutions',
                        'Previous year question collections for JEE Main',
                    ])}
                    <p style="${P_STYLE}">Free resources from the EduRain blog to support your JEE Main preparation:</p>
                    ${contentList([
                        contentLink('https://www.edurain.in/blogs/master-mechanics-numericals-in-jee-main-physics', 'How to solve mechanics numericals in JEE Main physics'),
                        contentLink('https://www.edurain.in/blogs/vectors-class-11-iit-jee', 'Vectors for Class 11 JEE: concepts, formulas and questions'),
                        contentLink('https://www.edurain.in/blogs/class-11-vectors-and-newton-s-laws-of-motion', "Class 11 vectors and Newton's laws of motion: the foundation of JEE mechanics"),
                        contentLink('https://www.edurain.in/blogs/units-and-measurements-for-class-11', 'Units and measurements for Class 11 physics and JEE'),
                        contentLink('https://www.edurain.in/blogs/organic-chemistry-for-iit-jee-concepts-tips', 'Organic chemistry for IIT JEE: concepts, reactions and tips'),
                        contentLink('https://www.edurain.in/blogs/chemical-kinetics-jee-hard-topics-explained-tips', 'Chemical kinetics: JEE hard topics explained'),
                        contentLink('https://www.edurain.in/blogs/chemical-equilibrium-class-11-iit-jee', 'Chemical equilibrium for Class 11 and IIT JEE'),
                        contentLink('https://www.edurain.in/blogs/basic-maths-for-jee-main-advanced', 'Basic maths for JEE Main and Advanced: concepts, formulas and tricks'),
                        contentLink('https://www.edurain.in/blogs/continuity-differentiability-for-class-12-jee-mains', 'Continuity and differentiability for Class 12 and JEE Mains 2027'),
                        contentLink('https://www.edurain.in/blogs/class-12-maths-chapter-6-application-of-derivatives-for-jee', 'Application of derivatives: formulas and important questions for JEE Main 2027'),
                        contentLink('https://www.edurain.in/blogs/differential-equations-jee-common-mistakes-tips', 'Differential equations in JEE: common mistakes to avoid'),
                        contentLink('https://www.edurain.in/blogs/jee-main-statistics-formulas-complete-cheat-sheet', 'JEE Main statistics formulas: complete one-page cheat sheet'),
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">How To Plan Your Next Step from JEE Main to IIT Admission?</h2>
                    <p style="${P_STYLE}">For many students, JEE Main is the gateway to JEE Advanced and, finally, the IITs. If your percentile meets the required cutoff, you become eligible to appear for JEE Advanced 2027.</p>
                    <p style="${P_STYLE}">At this stage your strategy needs a small shift. JEE Main focuses on speed, accuracy and broad syllabus coverage, while JEE Advanced tests deeper concept clarity, multi-concept application and advanced problem-solving.</p>
                    <p style="${P_STYLE}">EduRain supports this transition by:</p>
                    ${contentList([
                        'Strengthening your core concepts during JEE Main preparation',
                        'Providing advanced-level problem practice',
                        'Including previous year questions (PYQs) for both JEE Main and JEE Advanced',
                        'Offering structured mock tests that follow the advanced-level pattern',
                        'Ensuring continuous doubt resolution and performance tracking',
                    ])}
                    <p style="${P_STYLE}">Want to know which topics matter most? Read our list of the ${contentLink('https://www.edurain.in/blogs/top-10-jee-advanced-repeated-topics/', 'top 10 JEE Advanced repeated topics')}.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">JEE Advanced 2027 Syllabus</h2>
                    <p style="${P_STYLE}">After you complete JEE Main and qualify as per the required cutoff, you become eligible to apply for JEE Advanced. To prepare well, understand the depth, scope and application level of topics in Physics, chemistry, and mathematics in advance. Start with the ${contentLink('https://www.edurain.in/blogs/jee-main-2027-syllabus-important-chapters/', 'JEE Main 2027 syllabus and important chapters')}, since most of the JEE Advanced syllabus builds on it.</p>
                    <p style="${P_STYLE}">Download the complete subject-wise JEE Advanced syllabus in good time, so that you can align your preparation with it.</p>
                </div>
    `);
}

export function renderJEECourses() {
    /* Old JEE content, replaced by the JEE Main 2027 content above (jeeMain2027Html). Kept for reference.
    const jeeExtraHtml = `
        <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50%; left: -20%; width: 60%; height: 100%; background: radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -30%; right: -20%; width: 50%; height: 80%; background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            
            <div style="position: relative; z-index: 1;">
                <h2 class="er-anime-reveal" style="color: #f8fafc; font-size: 2.2rem; margin-bottom: 1.2rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; font-family: 'Inter', sans-serif;">
                    IIT- JEE Preparation That Actually Builds Your Rank <span style="background: -webkit-linear-gradient(45deg, #fde047, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Not Just Your Syllabus</span>
                </h2>
                
                <p class="er-anime-reveal" style="margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem; font-weight: 400; max-width: 85ch;">
                    Cracking IIT-JEE isn't about covering the syllabus once and hoping for the best, it's about understanding concepts deeply enough to solve any question, however it's twisted in the exam. At EduRain, our JEE courses are built around this exact idea: strong fundamentals, consistent practice, and enough tests to know exactly where you stand before the real exam. Whether you're in Class 12th trying to balance boards with JEE, starting fresh in Class 11th, or repeating a year to fix what went wrong last time, there's a batch here designed specifically for that stage.
                </p>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Our Batches:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin-bottom: 2rem;">
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/849750" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Dropper JEE 2027 Batch</a> : For students repeating a year who want to rebuild their concepts properly and target a real rank improvement in JEE 2027.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/814178" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">TARGET JEE 2027 – 12th Class Batch</a> : For Class 12th students who need to manage boards and JEE prep together without either one suffering.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/813811" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">JEE Mantra 3.0 Batch 2028</a> : For Class 11th students starting their JEE journey early, with enough time to build a solid foundation before Class 12th begins.
                    </li>
                </ul>
                
                <div class="er-anime-reveal" style="width: 50px; height: 3px; background: #3b82f6; border-radius: 2px; margin-bottom: 1.8rem;"></div>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Why students choose EduRain for JEE:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Live interactive classes</strong> with faculty, not just recorded lectures.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Doubt-solving sessions</strong> where every question actually gets answered.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Experienced teachers</strong> who specialize in JEE-level teaching, not general tutoring.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Regular tests</strong> with detailed performance analysis, not just marks on a page.</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Study material</strong> and practice questions updated as per the latest JEE pattern.</span>
                    </li>
                </ul>
            </div>
        </section>
    `;
    */
    const jeeExtraHtml = jeeMain2027Html();

    return renderCategoryPage(
        /* Old heading and the line under it, replaced by the doc's title and intro:
        "Best IIT JEE 2027 Online Coaching for JEE Main & Advanced",
        "Comprehensive preparation for IIT-JEE exams. Build a strong foundation and master the concepts to secure your seat in top engineering colleges.",
        */
        "Best JEE Main 2027 Online Coaching and Complete Preparation with EduRain",
        "JEE Main 2027 Session 1 registration is open until 22 November 2026. EduRain's online JEE coaching helps Class 11, Class 12 and dropper students prepare for JEE Main 2027 with live classes, recorded lectures, mock tests and doubt support. Below you will find the latest updates on registration, application form, eligibility criteria, exam dates, syllabus, admit card and preparation tips.",
        "JEE",
        jeeExtraHtml
    );
}

// NEET page, from the doc "Best NEET 2027 Online Coaching and Complete NEET 2027 Online Preparation with EduRain"
// (everything after its intro paragraph, up to the team notes, which are not for the page)
function neetUg2027Html() {
    const neetCourses = 'https://www.edurain.in/courses/neet';
    return contentSection(`
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">NEET 2027 Latest Updates (as of 19 November 2026)</h2>
                    ${contentList([
                        `${contentBold('Exam mode: computer-based test (CBT).')} The Union Education Minister announced in May 2026 that NEET UG will move to CBT from 2027, and reports say NTA has told the Supreme Court the same. So prepare for an on-screen exam. Read our ${contentLink('https://www.edurain.in/blogs/neet-2027-cbt-mode-official-updates-preparation-guide', 'NEET 2027 CBT mode preparation guide')}.`,
                        `${contentBold('Official notification is still pending.')} NTA has not yet published the NEET UG 2027 information bulletin, so the exact dates, number of shifts and final pattern are not confirmed. Track ${contentLink('https://www.edurain.in/blogs/neet-ug-2027-exam-date-expected-schedule-updates', 'NEET UG 2027 exam date updates')} and ${contentLink('https://www.edurain.in/blogs/is-neet-ug-2027-expected-in-may-2027-official-update', 'Is NEET UG 2027 expected in May 2027?')}.`,
                        `${contentBold('NEET UG 2026 recap.')} NTA cancelled the 3 May 2026 exam after paper-leak allegations and held Re-NEET on 21 June 2026. The result came out on 16 July 2026, and about 11.21 lakh candidates qualified. See the trends in ${contentLink('https://www.edurain.in/blogs/neet-ug-statistics-2019-to-2026-complete-data-analysis', 'NEET UG statistics 2019 to 2026')}.`,
                        `${contentBold('Class 12 board dates are out.')} CBSE released the Class 12 date sheet on 6 November 2026, with theory exams from 16 February to 9 April 2027. Plan boards and NEET together using our ${contentLink('https://www.edurain.in/blogs/cbse-class-12-date-sheet-2027-full-subject-wise-dates', 'CBSE Class 12 date sheet 2027 guide')}.`,
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">NEET 2027 Registration and Important Dates</h2>
                    <p style="${P_STYLE}">The NTA has not yet released the official NEET UG 2027 notification. Based on past years, registration is expected to begin in February 2027, and the exam is likely to be held in the first week of May 2027. Because the exam is moving to CBT and may run over more than one day, treat every date below as tentative. Always confirm the final schedule on the official NTA website, neet.nta.nic.in.</p>
                    ${contentTable(['Event', 'Details (Expected)'], [
                        ['NEET UG 2027 Registration Starts', '2nd week of February 2027'],
                        ['Last Date to Apply', '2nd week of March 2027'],
                        ['Application Correction Window', '3rd week of March 2027'],
                        ['City Intimation Slip', '2nd week of April 2027'],
                        ['NEET UG 2027 Admit Card', 'Last week of April 2027'],
                        ['NEET UG 2027 Exam Date', '2 May 2027 (expected, first Sunday of May)'],
                        ['Provisional Answer Key', '1st week of May 2027'],
                        ['Final Answer Key', 'Last week of May 2027'],
                        ['NEET UG 2027 Result', 'June 2027'],
                        ['Counselling', 'June / July 2027'],
                    ])}
                    <p style="${P_STYLE}">${contentBold('Application fee (NEET UG 2026 fee, 2027 fee to be confirmed by NTA):')} General ₹1,700, EWS/OBC ₹1,600, SC/ST/PwBD ₹1,000.</p>
                    <p style="${P_STYLE}">Read our detailed guides on ${contentLink('https://www.edurain.in/blogs/neet-ug-2027-registration-dates-steps-fees-documents', 'NEET UG 2027 registration dates, steps, fees and documents')} and ${contentLink('https://www.edurain.in/blogs/neet-ug-2027-registration-date-eligibility-guide', 'NEET UG 2027 eligibility criteria')}.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">All-in-One Support for NEET 2027 Online Preparation at EduRain</h2>
                    <p style="${P_STYLE}">Strong NEET 2027 online preparation needs a clear plan, regular practice and timely revision. EduRain gives you all three in one place. You get structured courses, daily practice, full-length tests and teachers who guide you at every step. As a result, you always know what to study next and how well you are doing.</p>

                    <h3 style="${H3_STYLE}">1. Courses</h3>
                    <p style="${P_STYLE}">EduRain offers dedicated NEET 2027 and 2028 batches for three kinds of students:</p>
                    ${contentList([
                        `${contentBold('Class 11:')} 2 batches (Class 11th PCB and Mission NEET 3.0 Batch 2028)`,
                        `${contentBold('Class 12:')} 1 batch (NEET White Coat 2027)`,
                        `${contentBold('Droppers:')} 1 batch (Dropper NEET 2027)`,
                    ])}
                    <p style="${P_STYLE}">First, pick the batch that matches your current class. Then follow the plan for that batch. Our batches cover the full syllabus, build concepts step by step, and include regular assessments.</p>

                    <h3 style="${H3_STYLE}">2. NEET PYQs and Practice Questions</h3>
                    <p style="${P_STYLE}">Previous year questions (PYQs) show how NEET asks questions and which topics repeat. Because of this, they are the best way to understand the exam. EduRain gives you chapter-wise PYQs and practice questions with clear solutions, backed by 3,000+ practice papers and 2,400+ mock tests on the platform. Start with our ${contentLink('https://www.edurain.in/blogs/neet-previous-year-questions', 'NEET previous year questions chapter-wise')} guide, the ${contentLink('https://www.edurain.in/blogs/edurain-in-cell-cycle-expect-questions-with-solutions', 'top 40 repeated PYQs in Cell Biology and Biomolecules')}, and our ${contentLink('https://www.edurain.in/blogs/neet-2027-important-questions-physics-biology', 'NEET 2027 important questions for Physics and Biology')}.</p>

                    <h3 style="${H3_STYLE}">3. Live Classes and Recorded Lectures</h3>
                    <p style="${P_STYLE}">Live classes let you ask doubts in the moment. If you miss one, the recording is ready for you. You can also replay difficult topics before a test. EduRain has 1,400+ video lectures, so you can learn at your pace without falling behind. For a step-by-step plan, read our ${contentLink('https://www.edurain.in/blogs/neet-2027-preparation-strategy-6-month-plan-tips', 'NEET 2027 preparation strategy: 6-month subject-wise study plan')} and ${contentLink('https://www.edurain.in/blogs/how-to-prepare-for-neet-2027-complete-study-plan', 'how to prepare for NEET 2027')}.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">EduRain NEET 2027 Online Coaching Batches</h2>
                    <p style="${P_STYLE}">EduRain runs separate NEET online coaching batches for Class 11, Class 12, and dropper students. Each batch follows the latest NEET pattern and includes live classes, tests, and doubt support. Compare the batches below and choose the one that fits you. You can also ${contentLink(neetCourses, 'view all EduRain NEET courses')}.</p>
                    ${contentTable(['Batch', 'Best for', 'Listed fee'], [
                        [contentLink('https://courses.edurain.in/courses/855893', 'Class 11th PCB'), 'Class 11 students who want an early start in Physics, Chemistry and Biology', '₹5,020'],
                        [contentLink('https://courses.edurain.in/courses/814170', 'NEET White Coat 2027'), 'Class 12 students who balance boards with NEET', '₹4,820'],
                        [contentLink('https://courses.edurain.in/courses/814073', 'Mission NEET 3.0 Batch 2028'), 'Class 11 students targeting NEET 2028 who want a long runway to build fundamentals', '₹9,019'],
                        [contentLink('https://courses.edurain.in/courses/849748?mainCategory=0&amp;subCatList=%5B358541%5D', 'Dropper NEET 2027'), 'Droppers who want a focused rebuild and revision before NEET 2027', '₹12,500'],
                    ])}
                    <p style="${P_STYLE}">Fees are as listed on the course pages and can change, so check the batch page for the latest fee and inclusions. Not sure which batch to choose? Book a free demo class and talk to an EduRain counsellor first.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">How Online NEET Exam Preparation Works at EduRain</h2>
                    <p style="${P_STYLE}">Online NEET exam preparation at EduRain is simple. You learn from home, but you are never alone. Follow these four steps to begin.</p>
                    ${contentSteps([
                        `${contentBold('Choose your batch.')} Pick the Class 11, Class 12, or dropper batch from the table above.`,
                        `${contentBold('Attend a free demo class.')} See how our teachers explain concepts. Then decide.`,
                        `${contentBold('Join live classes and ask questions.')} Communication runs both ways in every class, so doubts get solved on the spot.`,
                        `${contentBold('Practice, test, and revise.')} Solve DPPs and PYQs, take weekly tests and mock tests, and use the performance analysis to improve.`,
                    ])}
                    <p style="${P_STYLE}">Because teachers and students talk to each other, you stay active in every class. Moreover, you can clear doubts one-on-one after class, so nothing stays confusing for long.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">NEET 2027 Preparation Guided by Dedicated Faculty</h2>
                    <p style="${P_STYLE}">Good teachers make hard topics simple. EduRain's NEET faculty teaches Physics, Chemistry, Botany, and Zoology, and every teacher has years of experience with NEET aspirants. Our NEET faculty has an average teaching experience of over 15 years.</p>
                    ${contentTable(['Subject', 'Teacher', 'Experience'], [
                        ['Physics', 'Mr. Diwakar', '17+ years'],
                        ['Chemistry (Physical, Organic, Inorganic)', 'Mrs. Ritu', '14 years'],
                        ['Botany and Zoology', 'Mr. Nitin', '15+ years'],
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Why Choose EduRain for the Best NEET 2027 Online Coaching?</h2>
                    <p style="${P_STYLE}">NEET is cleared by students who understand concepts, not by those who only memorise. EduRain builds its NEET 2027 online coaching around this idea. Trusted by 15,000+ students, here is what you get when you join.</p>
                    ${contentList([
                        `${contentBold('Live classes:')} Join live classes and ask your questions in real time. Doubts do not pile up, and every concept is clear before you move on.`,
                        `${contentBold('Two-way communication with teachers:')} Ask a question during class and get an answer right away. After class, reach your teacher for one-on-one doubt clearing.`,
                        `${contentBold('Recorded lectures:')} Missed a class? Watch the recording later, or use it to revise difficult chapters before a test.`,
                        `${contentBold('One-on-one doubt clearing:')} Some doubts need personal attention, so no question stays unanswered.`,
                        `${contentBold('Experienced NEET teachers:')} They know the exam pattern, the common mistakes, and the topics that carry the most marks.`,
                        `${contentBold('Regular tests with performance analysis:')} Weekly tests and mock tests show your score, your weak chapters, and what to revise next.`,
                        `${contentBold('NCERT-based study material:')} Our notes and practice questions follow NCERT and stay updated with the latest NEET pattern.`,
                        `${contentBold('Free demo class:')} Attend a demo first. Then decide whether the batch is right for you.`,
                        `${contentBold('Mobile app access:')} Use the EduRain app to attend classes, read notes, download videos and take tests anytime, anywhere.`,
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">NEET 2027 Syllabus and Exam Pattern</h2>
                    <p style="${P_STYLE}">The NEET 2027 syllabus covers Physics, Chemistry, and Biology (Botany and Zoology) from NCERT Class 11 and Class 12. Therefore, you should know the full syllabus before you start. Then break it into chapters and plan each one. Read our ${contentLink('https://www.edurain.in/blogs/neet-ug-2027-syllabus-chapter-list-weightage', 'NEET UG 2027 syllabus with chapter list and weightage')} for the complete list, and see the ${contentLink('https://www.edurain.in/blogs/high-weightage-chapters-for-neet-2027', 'high-weightage chapters for NEET 2027')}.</p>
                    <p style="${P_STYLE}">The pattern below follows the last NEET UG exam. The NTA may change it, so check the official notice when it comes out.</p>
                    ${contentTable(['Subject', 'Questions', 'Marks'], [
                        ['Physics', '45', '180'],
                        ['Chemistry', '45', '180'],
                        ['Biology (Botany and Zoology)', '90', '360'],
                        [contentBold('Total'), contentBold('180'), contentBold('720')],
                    ])}
                    <p style="${P_STYLE}">Each correct answer gives +4 marks, and each wrong answer gives -1 mark. Unanswered questions get no marks. The last NEET UG paper was three hours long; confirm the duration in the official bulletin.</p>

                    <h3 style="${H3_STYLE}">NEET 2027 will be a CBT: how to prepare</h3>
                    <p style="${P_STYLE}">NEET UG moves from pen and paper (OMR) to a computer-based test from 2027. The syllabus does not change because of this, but your exam skills do. Practise reading long questions on screen, switching between questions quickly, and managing three hours without rough paper habits you rely on today. Take some of your weekly mock tests on a computer, not only on printed papers. Our guide on ${contentLink('https://www.edurain.in/blogs/neet-2027-cbt-mode-official-updates-preparation-guide', 'NEET 2027 CBT mode updates and preparation')} explains how. For marks, duration, and the full pattern, see our ${contentLink('https://www.edurain.in/blogs/neet-ug-2027-exam-pattern-marks-duration-preparation', 'NEET UG 2027 exam pattern guide')}.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">NEET 2027 Preparation Resources</h2>
                    <p style="${P_STYLE}">You need the right resources at the right time. Some students want a quick revision. Others want a full course. EduRain has both. Use the free resources to start, and join a batch when you want complete guidance.</p>

                    <h3 style="${H3_STYLE}">Free NEET Resources</h3>
                    <p style="${P_STYLE}">The EduRain blog has free notes, tips, and practice for NEET 2027 online preparation.</p>
                    ${contentLabel('Exam updates and strategy')}
                    ${contentList([
                        contentLink('https://www.edurain.in/blogs/neet-2027-preparation-strategy-6-month-plan-tips', 'NEET 2027 preparation strategy: 6-month subject-wise study plan'),
                        contentLink('https://www.edurain.in/blogs/how-to-prepare-for-neet-2027-complete-study-plan', 'How to prepare for NEET 2027: complete study plan'),
                        contentLink('https://www.edurain.in/blogs/neet-ug-2027-exam-date-expected-schedule-updates', 'NEET UG 2027 exam date: expected schedule and updates'),
                        contentLink('https://www.edurain.in/blogs/neet-ug-statistics-2019-to-2026-complete-data-analysis', 'NEET UG statistics 2019 to 2026'),
                        contentLink('https://www.edurain.in/blogs/neet-important-questions-for-2027-exam-with-solutions', 'NEET important questions for 2027 with solutions: Physics, Chemistry and Biology'),
                        contentLink('https://www.edurain.in/blogs/neet-2027-physics-important-chapters-formulas', 'NEET 2027 Physics important chapters and formula sheet'),
                        contentLink('https://www.edurain.in/blogs/neet-2027-biology-important-chapters', 'NEET 2027 Biology most important chapters'),
                    ])}
                    ${contentLabel('Physics')}
                    ${contentList([
                        contentLink('https://www.edurain.in/blogs/how-to-solve-physics-numericals-for-neet', 'How to solve Physics numericals for NEET'),
                        contentLink('https://www.edurain.in/blogs/neet-physics-thermal-physics-and-waves', 'Thermal physics and waves: formula sheet'),
                        contentLink('https://www.edurain.in/blogs/electromagnetic-induction-and-alternating-current-neet', 'Electromagnetic induction and alternating current'),
                        contentLink('https://www.edurain.in/blogs/thermodynamics-for-class-11-neet-2027', 'Thermodynamics for Class 11 NEET 2027'),
                        contentLink('https://www.edurain.in/blogs/rotational-motion-neet-physics', 'Rotational motion for NEET Physics'),
                        contentLink('https://www.edurain.in/blogs/physics-properties-of-solids-and-liquids-for-neet-exam', 'Properties of solids and liquids'),
                        contentLink('https://www.edurain.in/blogs/vectors-class-11-physics', 'Vectors, Class 11 Physics'),
                        contentLink('https://www.edurain.in/blogs/electrostatics-and-capacitance-notes-formulas', 'Electrostatics and capacitance'),
                        contentLink('https://www.edurain.in/blogs/ncert-solutions-for-class-12-physics-chapter-10-wave-optics', 'Class 12 Physics Chapter 10: Wave Optics'),
                        contentLink('https://www.edurain.in/blogs/ncert-solutions-class-12-physics-chapter-11-for-neet-2027', 'Class 12 Physics Chapter 11: Dual Nature of Radiation and Matter'),
                    ])}
                    ${contentLabel('Biology')}
                    ${contentList([
                        contentLink('https://www.edurain.in/blogs/class-11-cell-cycle-and-cell-division-complete-neet-guide', 'Cell cycle and cell division: complete NEET guide'),
                        contentLink('https://www.edurain.in/blogs/edurain-in-cell-cycle-expect-questions-with-solutions', 'Top 40 repeated PYQs in Cell Biology and Biomolecules'),
                        contentLink('https://www.edurain.in/blogs/human-physiology-neet-notes-digestion-to-excretion', 'Human physiology NEET notes: digestion to excretion'),
                        contentLink('https://www.edurain.in/blogs/class-11-human-edurain-in-physiology-neet-notes-weightage-tips', 'Class 11 Human Physiology NCERT complete guide'),
                        contentLink('https://www.edurain.in/blogs/class-11-biology-chapter-4-animal-kingdom', 'Class 11 Animal Kingdom: phylum-wise classification'),
                        contentLink('https://www.edurain.in/blogs/locomotion-and-movement-diagrams-for-neet-biology', 'Locomotion and movement diagrams'),
                        contentLink('https://www.edurain.in/blogs/human-reproduction-neet-biology', 'Human reproduction: NCERT notes and diagrams'),
                        contentLink('https://www.edurain.in/blogs/reproduction-in-organisms-neet', 'Reproduction in organisms'),
                        contentLink('https://www.edurain.in/blogs/class-12-biology-chapter-5-molecular-basis-of-inheritance', 'Molecular basis of inheritance (Class 12 Chapter 5)'),
                        contentLink('https://www.edurain.in/blogs/class-12-biology-chapter-9-biotechnology-for-neet-ug-2027', 'Biotechnology: principles and processes (Class 12 Chapter 9)'),
                        contentLink('https://www.edurain.in/blogs/edurain-in-master-biotechnology-for-neet-ncert-diagrams-key-tips', 'Biotechnology and its applications: complete diagrams'),
                        contentLink('https://www.edurain.in/blogs/neet-2027-gene-therapy-ncert-notes-vectors-practice', 'Gene therapy: principles, applications and important questions'),
                        contentLink('https://www.edurain.in/blogs/plant-hormones-neet-2027', 'Plant hormones: important questions and PYQs'),
                        contentLink('https://www.edurain.in/blogs/plant-hormone-tricks-for-neet-aspirants', 'Mnemonics and tricks for plant growth regulators'),
                    ])}

                    <h3 style="${H3_STYLE}">Paid NEET Batches</h3>
                    <p style="${P_STYLE}">Paid batches give you the full package: live classes, recorded lectures, study material, doubt support, and regular tests. Choose from our Class 11, Class 12 and dropper batches in the batches section above, or ${contentLink(neetCourses, 'view all EduRain NEET courses')}.</p>

                    <h3 style="${H3_STYLE}">Study Material, DPPs, and Practice</h3>
                    <p style="${P_STYLE}">EduRain gives you chapter-wise notes, DPPs, sample papers, MCQs, mind maps, and formula sheets for Physics, Chemistry, and Biology. Together, they help you learn, practice, and revise in a steady routine.</p>
                    ${contentList([
                        'Concept notes and formula sheets for quick revision',
                        'Daily Practice Problems (DPPs) for every chapter',
                        'NEET sample papers and mock tests with solutions',
                        'NEET MCQs and mind maps for fast revision',
                        'Previous year question collections for NEET',
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">NEET 2027 Preparation Tips</h2>
                    <p style="${P_STYLE}">NEET UG 2027 is expected in early May, so you have just over five months left. These five tips will make your NEET 2027 online preparation more focused. Start with the first one today.</p>
                    ${contentSteps([
                        `${contentBold('Read NCERT first.')} NEET questions come mostly from NCERT, especially in Biology and Chemistry. So, read every NCERT chapter line by line and underline key terms and diagrams.`,
                        `${contentBold('Make a daily plan and follow it.')} Give each subject fixed time every day. Start with the high-weightage chapters for NEET 2027. Our ${contentLink('https://www.edurain.in/blogs/neet-2027-preparation-strategy-6-month-plan-tips', '6-month NEET 2027 study plan')} shows you how.`,
                        `${contentBold('Practice PYQs and mock tests every week, some of them on screen.')} PYQs show you the exam style. Mock tests show you your speed. Since NEET 2027 is a CBT, take a few full-length tests on a computer to get used to the format and to manage time on a three-hour paper.`,
                        `${contentBold('Revise often with short notes.')} Use mind maps, formula sheets, and diagrams for quick revision. Revise each chapter at least three times before the exam.`,
                        `${contentBold('Fix your weak topics early.')} After every test, list the topics you got wrong. Then study them again and attempt fresh questions. Ask your teacher if a doubt remains.`,
                    ])}
                    <p style="${P_STYLE}">Finally, stay consistent. Steady daily work beats a few long nights of study.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Start Your NEET 2027 Online Preparation Today</h2>
                    <p style="${P_STYLE}">Your NEET 2027 online preparation begins with one step: choose a batch. Book a free demo class to see how EduRain teaches. Then join the batch that suits you, and start with the first chapter. You can ${contentLink(neetCourses, 'view all EduRain NEET courses')} or call and WhatsApp us on ${contentLink('tel:+91 84480 97535', '+91 84480 97535')} for help.</p>
                </div>
    `);
}

export function renderNEETCourses() {
    /* Old NEET content, replaced by the NEET 2027 content above (neetUg2027Html). Kept for reference.
    const neetExtraHtml = `
        <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50%; left: -20%; width: 60%; height: 100%; background: radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -30%; right: -20%; width: 50%; height: 80%; background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            
            <div style="position: relative; z-index: 1;">
                <h2 class="er-anime-reveal" style="color: #f8fafc; font-size: 2.2rem; margin-bottom: 1.2rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; font-family: 'Inter', sans-serif;">
                    NEET Preparation That Focuses on Understanding, <span style="background: -webkit-linear-gradient(45deg, #fde047, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Not Cramming</span>
                </h2>
                
                <p class="er-anime-reveal" style="margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem; font-weight: 400; max-width: 85ch;">
                    NEET isn't cleared by cramming Biology, Physics and Chemistry the night before revision starts, it's cleared by students who actually understand why an answer is right, not just which one to mark. At EduRain, our NEET courses focus on that exact difference. Every topic is taught with enough depth and practice that concepts stay with you, not just for the test but for the real exam months later. Whether you're in Class 12th preparing alongside boards, in Class 11th starting your NEET journey, or repeating a year to fix what didn't work last time, there's a batch designed around exactly that stage.
                </p>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Our Batches:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin-bottom: 2rem;">
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/814170" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">NEET White Coat 2027 – Class 12th</a> : For Class 12th students who need to balance board exams with serious NEET preparation, without letting either one slip.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/814073" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Mission NEET 3.0 Batch 2028</a> : For Class 11th students starting early, giving enough time to build strong fundamentals in Biology, Physics and Chemistry before the final push.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <a href="https://courses.edurain.in/courses/849748?mainCategory=0&subCatList=%5B358541%5D" target="_blank" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Dropper NEET 2027 Batch</a> : For students repeating a year who want a fresh, proper rebuild of concepts and a real shot at a better score this time.
                    </li>
                </ul>
                
                <div class="er-anime-reveal" style="width: 50px; height: 3px; background: #3b82f6; border-radius: 2px; margin-bottom: 1.8rem;"></div>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Why students choose EduRain for NEET:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Live classes</strong> with faculty who explain the why not just the what</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>One-on-one doubt-clearing</strong> sessions, so nothing stays half-understood</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Experienced teachers</strong> who've specifically taught NEET aspirants for years</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Regular tests</strong> with detailed performance analysis to track weak areas early</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Study material</strong> and question banks updated as per the latest NEET pattern</span>
                    </li>
                </ul>
            </div>
        </section>
    `;
    */
    const neetExtraHtml = neetUg2027Html();

    return renderCategoryPage(
        /* Old heading and the line under it, replaced by the doc's title and intro:
        "NEET 2027-28 Complete Online Coaching & Preparation",
        "Crack NEET UG with expert-led coaching in Biology, Physics, and Chemistry designed to help medical aspirants secure top scores and a seat in India's best medical colleges.",
        */
        "Best NEET 2027 Online Coaching and Complete NEET 2027 Online Preparation with EduRain",
        "Looking for the best NEET 2027 online coaching? EduRain helps Class 11, Class 12, and dropper students with NEET 2027 online preparation through live classes, recorded lectures, PYQs, DPPs, and mock tests. This page covers our batches, faculty, syllabus, latest exam updates, study resources, and preparation tips in one place.",
        "NEET",
        neetExtraHtml
    );
}

// Foundation page (Class 6 to 12), from the doc "foundation-class-6-to-12". Lines the doc marks as still to fill in
// ([Class 11th Batch name], [₹ price], [Subject], ...) are left out until the team sends the real details.
function foundation2027Html() {
    const blog = (slug, text) => contentLink(`https://www.edurain.in/blogs/${slug}`, text);
    return contentSection(`
                <div class="er-anime-reveal">
                    <p style="${P_STYLE}">Class 6 to 12 is where concepts are built and then put to the test. A child who understands fractions, force or grammar properly in Class 7 finds Class 10 boards easier, and Class 11 and 12 Physics, Chemistry, Maths and Biology become far less stressful, along with JEE or NEET. At EduRain you attend live classes, watch recordings when you need them again, practise with DPPs and tests, and get your doubts cleared by teachers, all from home. Our batches follow the latest CBSE syllabus and are planned for the 2026-27 session and the 2027 board exams.</p>

                    <h2 style="${H2_STYLE} margin-top: 1.6rem;">Online batches for Class 6 to 12</h2>
                    <p style="${P_STYLE}">Every batch covers its core subjects with live and recorded classes, tests and doubt support. Class 9 to 12 batches also give special attention to board-pattern questions.</p>
                    ${contentTable(['Class', 'Batch', 'Best for', 'Teachers', 'Price'], [
                        ['6', contentLink('https://courses.edurain.in/courses/830607', 'Class 6th Batch'), 'Building a strong base in Maths, Science and English with simple, step-by-step lessons', "Khushboo ma'am, Abhishek Sir, Manoj Sir, Yamini ma'am", '₹3,520'],
                        ['7', contentLink('https://courses.edurain.in/courses/830943', 'Class 7th Batch'), 'Moving from basics to deeper understanding, with regular practice, weekly tests and answer-writing', "Khushboo ma'am, Abhishek Sir, Manoj Sir, Yamini ma'am", '₹3,520'],
                        ['8', contentLink('https://courses.edurain.in/courses/830945', 'Class 8th Batch'), 'Algebra, mensuration, physics and chemistry basics, so Class 9 does not feel like a sudden jump', "Khushboo ma'am, Abhishek Sir, Manoj Sir, Yamini ma'am", '₹4,520'],
                        ['9', contentLink('https://courses.edurain.in/courses/814577', 'Class 9th Super Champions Batch'), 'CBSE students who want an early start on board exams, with chapter-wise teaching and regular tests', "Manoj Sir, Khushboo ma'am, Nandini ma'am, Sujeet Sir", '₹4,520'],
                        ['10', contentLink('https://courses.edurain.in/courses/814204', 'Class 10th Disha Batch'), 'Board-focused preparation: full syllabus, revision, mock tests and answer-writing practice', "Khushboo ma'am, Meghna ma'am, Manoj Sir, Yamini ma'am", '₹4,020'],
                    ])}
                    <p style="${P_STYLE}">Not sure which batch fits? Book a free demo class and our team will guide you.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Why choose EduRain online classes for Class 6 to 12?</h2>
                    ${contentList([
                        `${contentBold('Live online classes.')} Attend live classes from home and ask questions the moment they come to mind. Teachers explain, solve examples on the board and keep the class active.`,
                        `${contentBold('Recorded lectures for revision.')} Missed a class or want to revisit a chapter before the exam? Watch the recording again as many times as you need.`,
                        `${contentBold('DPPs for every chapter.')} Daily Practice Problems make practice a daily habit instead of a last-week rush.`,
                        `${contentBold('Weekly tests and mock tests.')} Weekly tests show where you stand, and mock tests prepare you for the real exam hall. After every test, review your weak topics and fix them.`,
                        `${contentBold('Doubt-clearing support.')} Ask doubts in class or through our doubt support and get simple, clear explanations from teachers.`,
                        `${contentBold('Board exam preparation.')} From Class 9 onwards, and especially in Class 10 and 12, we keep the board pattern in mind: NCERT-based teaching, important questions, previous-year question practice, revision and answer-writing.`,
                        `${contentBold('Free demo class.')} Attend a free demo class, see how we teach and then decide.`,
                        `${contentBold('App and web access.')} Study on the EduRain app or website, on a phone, tablet or laptop, whenever it suits you.`,
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Subjects covered in Class 6 to 12 online coaching</h2>
                    ${contentList([
                        `${contentBold('Maths:')} number systems, algebra, geometry, mensuration, trigonometry and statistics in Class 6 to 10, and sets, functions, calculus, vectors, probability and more in Class 11 and 12, taught with solved examples and practice sets.`,
                        `${contentBold('Science:')} physics, chemistry and biology explained with diagrams, real-life examples and numerical practice. In Class 11 and 12, Physics, Chemistry and Biology are taught as separate subjects.`,
                        `${contentBold('English:')} grammar, writing skills and reading comprehension for better school and board exam answers.`,
                        `${contentBold('Social Science (SST):')} history, geography, civics and economics for Class 6 to 10, with chapter-wise notes and answer-writing practice, taught by Khushboo ma'am.`,
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">How a typical week looks</h2>
                    ${contentSteps([
                        'Attend live classes on the chapter of the week.',
                        'Revise the same day with the recorded lecture and notes.',
                        'Solve DPPs on that chapter.',
                        'Clear doubts with teachers.',
                        'Take the weekly test and review your mistakes.',
                    ])}
                    <p style="${P_STYLE}">This simple cycle of learn, practise, test and improve is what turns average marks into good marks.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Who should join EduRain online batches?</h2>
                    ${contentList([
                        'Students of Class 6 to 12 who want strong basics in Maths and Science.',
                        'Class 9 to 12 students preparing for CBSE board exams 2027 who want regular tests and answer-writing practice.',
                        'Students who find school teaching too fast and need a second round of explanation.',
                        'Parents who want a safe, home-based way for their child to learn, with regular tests and progress tracking.',
                        'Students from smaller towns who want quality teaching without travelling to a coaching centre.',
                        'Class 11 and 12 students, and JEE and NEET aspirants, who want to build exam-ready concepts alongside school studies.',
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">From foundation to JEE and NEET: why start early?</h2>
                    <p style="${P_STYLE}">Many toppers say their rank was built in Class 9 and 10. Chapters like motion, force, atoms and molecules, life processes, electricity and algebra are the roots of Class 11 and 12 Physics, Chemistry, Biology and Maths. When these basics are clear early, serious exam preparation in Class 11 and 12 becomes smoother and less stressful. And once your child reaches Class 11 and 12, the same EduRain classroom carries them through school exams, boards and entrance tests together.</p>
                    <p style="${P_STYLE}">When your child is ready for the next step, explore our ${contentLink('https://www.edurain.in/courses/iit-jee', 'JEE Main 2027 online coaching')} and ${contentLink('https://www.edurain.in/courses/neet', 'NEET 2027 online coaching')} programs. You can also read how the toppers' path starts with strong basics in ${blog('class-9-science-atoms-and-molecules', 'Class 9 Science: Atoms and Molecules')} and ${blog('force-and-laws-of-motion-class-9', 'Force and Laws of Motion Class 9')}.</p>
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Meet our Class 6 to 12 faculty</h2>
                    <p style="${P_STYLE}">Learn from teachers who know the CBSE syllabus and how to make concepts easy.</p>
                    ${contentTable(['Teacher', 'Subject', 'Classes', 'Experience'], [
                        ['Abhishek Sir', 'Maths', '6th-8th', '5+ years'],
                        ["Meghna Ma'am", 'Maths', '9th-10th', '8+ years'],
                        ["Yamini Ma'am", 'Science', '6th-10th', '7+ years'],
                        ['Manoj Sir', 'English', '6th-10th', '15+ years'],
                        ["Khushboo Ma'am", 'SST', '6th-10th', '5+ years'],
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Tests, DPPs and doubt support</h2>
                    ${contentList([
                        `${contentBold('Experienced teachers.')} Our teachers explain concepts in simple language and keep every class interactive.`,
                        `${contentBold('Daily Practice Problems (DPPs).')} You get DPPs for every chapter, so practice happens daily and not just before exams.`,
                        `${contentBold('Weekly and mock tests.')} Chapter-wise and weekly tests check your understanding, and mock tests build exam confidence. After every test, review weak topics, fix them and try again.`,
                        `${contentBold('Two-way communication.')} Students talk to teachers in class and get doubts solved, so learning is a conversation and not a one-way video.`,
                    ])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Free study resources for Class 6 to 12</h2>
                    <p style="${P_STYLE}">Read our free guides to see how we explain topics.</p>
                    ${contentLabel('Class 10 board exam 2027')}
                    ${contentList([
                        blog('edurain-in-class-10-board-exam-preparation-tips-for-cbse-students', 'Class 10 Board Exam Preparation Tips for CBSE Students'),
                        blog('cbse-class-10-board-exam-2027-date-sheet-pdf-download', 'CBSE Class 10 Board Exam 2027 Date Sheet'),
                        blog('cbse-class-10-maths-important-questions-chapter-wise', 'CBSE Class 10 Maths Important Questions Chapter-Wise'),
                        'CBSE Class 10 Maths Formula Sheet 2027',
                        blog('class-10-maths-chapter-wise-mcqs-with-answers', 'Class 10 Maths Chapter-wise MCQs with Answers for 2027 Exams'),
                        blog('quadratic-equations-class-10', 'Quadratic Equations Class 10: Tricky Questions Solved Step by Step'),
                        blog('most-important-class-10-science-question', 'Most Important Class 10 Science Question Types with Sample Papers'),
                        'CBSE Class 10 Science Previous Year Repeated Questions (2021-2025)',
                        blog('chemical-reactions-and-equations-class-10-notes-tips', 'Chemical Reactions and Equations Class 10 Notes'),
                        'Class 10 SST Chapter-Wise Strategy for Board 2027',
                    ])}
                    ${contentLabel('Class 9')}
                    ${contentList([
                        blog('class-9-science-atoms-and-molecules', 'Class 9 Science: Atoms and Molecules'),
                        blog('force-and-laws-of-motion-class-9', 'Force and Laws of Motion Class 9 Notes for Quick Revision'),
                    ])}
                    ${contentLabel('Class 6 to 8')}
                    ${contentList(['New guides on Maths and Science for Class 6, 7 and 8 are coming soon.'])}
                </div>

                ${DIVIDER}
                <div class="er-anime-reveal">
                    <h2 style="${H2_STYLE}">Start learning with EduRain today</h2>
                    <p style="${P_STYLE}">Give your child a strong start with online coaching for Class 6 to 12. Attend a free demo class, pick your batch and begin. Call ${contentLink('tel:+918448097535', '+91 84480 97535')} or message us on ${contentLink('https://wa.me/918448097535', 'WhatsApp')} to enroll.</p>
                </div>
    `);
}

export function renderFoundationCourses() {
    /* Old Foundation content, replaced by the Class 6 to 12 content above (foundation2027Html). Kept for reference.
    const foundationExtraHtml = `
        <section class="er-courses-content-section" style="max-width: 1000px; margin: 4rem auto; padding: 2.5rem; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.5); position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50%; left: -20%; width: 60%; height: 100%; background: radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -30%; right: -20%; width: 50%; height: 80%; background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%); border-radius: 50%; z-index: 0; pointer-events: none;"></div>
            
            <div style="position: relative; z-index: 1;">
                <h2 class="er-anime-reveal" style="color: #f8fafc; font-size: 2.2rem; margin-bottom: 1.2rem; font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; font-family: 'Inter', sans-serif;">
                    Class 6th to 12th: Where Real Preparation <span style="background: -webkit-linear-gradient(45deg, #fde047, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Actually Begins</span>
                </h2>
                
                <p class="er-anime-reveal" style="margin-bottom: 2rem; color: #cbd5e1; line-height: 1.6; font-size: 1.05rem; font-weight: 400; max-width: 85ch;">
                    Most students struggle in JEE or NEET prep not because the concepts are new, but because the basics from Class 6th to 12th were never solid to begin with. At EduRain, our Foundation courses focus on exactly that gap building strong fundamentals in Maths and Science early, so that by the time a student reaches Class 11th, they're not relearning basics but actually building on top of them. Each batch is designed for a specific class, keeping the difficulty level and pace right for that age group, taught by faculty who know how to make concepts click without making it feel like extra pressure.
                </p>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Our Batches:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin-bottom: 2rem;">
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <span style="color: #60a5fa; font-weight: 600;">Class 6th Foundation Batch</span>: Introduces core Maths and Science concepts in a simple, structured way, right from the start.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <span style="color: #60a5fa; font-weight: 600;">Class 8th Foundation Batch</span>: Strengthens fundamentals at a stage where subjects start getting a little more layered.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <span style="color: #60a5fa; font-weight: 600;">Class 9th Super Champions</span>: Built for students who want to get ahead early, with concepts taught at a slightly sharper pace.
                    </li>
                    <li style="margin-bottom: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1.05rem;">
                        <span style="color: #60a5fa; font-weight: 600;">Class 10th Disha Batch</span>: Focused on board exam preparation along with concept-building for what comes next in Class 11th.
                    </li>
                </ul>
                
                <div class="er-anime-reveal" style="width: 50px; height: 3px; background: #3b82f6; border-radius: 2px; margin-bottom: 1.8rem;"></div>

                <h3 class="er-anime-reveal" style="color: #f1f5f9; font-size: 1.5rem; margin-bottom: 1.2rem; font-weight: 700; font-family: 'Inter', sans-serif; letter-spacing: -0.01em;">Why parents and students choose EduRain's Foundation courses:</h3>
                
                <ul class="er-anime-reveal" style="list-style: none; padding: 0; margin: 0;">
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Age-appropriate teaching</strong> that builds concepts step by step, not all at once</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Regular tests</strong> to catch weak areas before they turn into bigger gaps</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Experienced faculty</strong> who know how to keep young students engaged, not just informed</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>Doubt-clearing sessions</strong> so no topic is left half-understood</span>
                    </li>
                    <li style="margin-bottom: 1rem; display: flex; align-items: flex-start; gap: 1rem; color: #cbd5e1; line-height: 1.5; font-size: 1rem;">
                        <i class="fas fa-check-circle" style="color: #34d399; font-size: 1.1rem; margin-top: 3px; filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.8));"></i>
                        <span><strong>A base strong enough</strong> that JEE or NEET prep later feels like a continuation, not a fresh start</span>
                    </li>
                </ul>
            </div>
        </section>
    `;
    */
    const foundationExtraHtml = foundation2027Html();

    return renderCategoryPage(
        /* Old heading and the line under it, replaced by the doc's title and intro:
        "Best Online Coaching for Classes 6 to 12 | Foundation",
        "A strong foundation changes everything. From Class 6 to 12, we make sure your concepts in Science, Maths, and English are crystal clear, the perfect stepping stone for future competitive exams.",
        */
        "Best Online Coaching for Class 6 to 12 | CBSE, ICSE, UP Board Classes",
        "EduRain offers online coaching for students of Class 6, 7, 8, 9, 10, 11 and 12 who want strong basics in Maths, Science (Physics, Chemistry, Biology), English and Social Science, and a calm, steady path to good marks in CBSE, ICSE and UP Board exams. This page shows our class-wise batches, how our classes run and how we help you from school exams to board exams and beyond.",
        "FOUNDATION",
        foundationExtraHtml
    );
}

/** After a course page shows: swaps in the web app's current courses (JEE, NEET, FOUNDATION, or null for all) */
export const refreshCategoryTiles = (categoryKey) => refreshCourseTiles(categoryKey, renderCourseCard);
