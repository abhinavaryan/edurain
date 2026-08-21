const faqsData = {
    ALL: [
        { question: "What courses does EduRain offer?", answer: "Covers Class 6–12 academics, Foundation courses, and NEET/IIT-JEE exam preparation." },
        { question: "Are practice tests and mock exams included in the course?", answer: "Yes, mock tests and weekly tests are available, helping NEET/IIT-JEE and board exam aspirants regularly track their preparation level and performance." },
        { question: "Are the courses live or recorded?", answer: "Yes, both are available. Students get live classes as well as recorded lectures, so they can learn in real-time or revise anytime at their own pace." },
        { question: "Can I access study material and video lectures on mobile?", answer: "Yes, both mobile apps and websites are available. Students can study from the EduRain app or directly from the website, whichever is convenient." },
        { question: "Is there a free demo class before purchasing?", answer: "Yes, EduRain offers a free demo class so students can experience the teaching style and course quality before enrolling." },
        { question: "What support is available if I have doubts during the course?", answer: "We provide dedicated doubt-clearing sessions, personal mentor support, and regular teacher interaction to ensure all your questions are answered." }
    ],
    JEE: [
        { question: "What is covered in the IIT-JEE course Mains, Advanced, or both?", answer: "We tell you exactly whether the course prepares you for JEE Mains, JEE Advanced, or both, so you know what you're signing up for." },
        { question: "Which subjects and topics are included in the IIT-JEE syllabus here?", answer: "The course covers Physics, Chemistry, and Maths as per the latest JEE syllabus, so nothing important gets missed." },
        { question: "Are live classes and recorded lectures both available for IIT-JEE prep?", answer: "Yes, you get live classes to learn in real-time, plus recorded lectures so you can revise anytime at your own pace." },
        { question: "Are mock tests and weekly tests included for JEE preparation?", answer: "Yes, regular mock tests and weekly tests are part of the course, helping you track your rank and preparation level as you go." },
        { question: "Who are the faculty teaching the IIT-JEE course?", answer: "Meet the experienced teachers behind the course because for an exam like JEE, knowing who's teaching you matters." },
        { question: "Is there a free demo class before enrolling in the IIT-JEE course?", answer: "Yes, EduRain offers a free demo class for IIT-JEE preparation so students can experience the teaching style and course quality before enrolling." }
    ],
    NEET: [
        { question: "What subjects are covered in the NEET course?", answer: "Confirms coverage of Physics, Chemistry, and Biology as per the latest NEET syllabus." },
        { question: "Are live classes and recorded lectures both available for NEET prep?", answer: "Yes, both are available. Students get live classes to learn in real-time, plus recorded lectures so they can revise anytime at their own pace." },
        { question: "Are mock tests and weekly tests included for NEET preparation?", answer: "Yes, regular mock tests and weekly tests are part of the course, helping students track their score and preparation level as they go." },
        { question: "Who are the faculty teaching the NEET course?", answer: "Addresses trust students want to know teacher experience and qualifications for a high-stakes exam such as NEET." },
        { question: "Is there a free demo class before enrolling in the NEET course?", answer: "Yes, available students can attend a free demo class first and decide if the teaching style works for them before enrolling." }
    ],
    FOUNDATION: [
        { question: "What is a Foundation course and who is it for?", answer: "The Foundation course is for students in Class 6th to 10th. It helps you understand your subjects clearly and also prepares you early for big exams such as NEET and IIT-JEE in the future." },
        { question: "Which subjects are covered in the Foundation course?", answer: "You will study Maths, Science, and English in this course. These subjects help you build a strong base for higher classes." },
        { question: "Are live classes and recorded lectures both available in the Foundation course?", answer: "Yes! You can join live classes with your teacher, and you also get recorded videos. So if you miss a class or want to revise, you can watch it again anytime." },
        { question: "Are mock tests and weekly tests included in the Foundation course?", answer: "Yes, you get weekly tests and mock tests. This helps you check how much you have learned and where you need more practice." },
        { question: "Will this course help me with my school exams too?", answer: "Yes! Along with preparing you for future big exams, this course also helps you do well in your school exams." },
        { question: "Can I try a free demo class before joining?", answer: "Yes, you can attend a free demo class first. This way, you can see how the teacher explains things before you join the full course." }
    ]
};

export function renderFAQ(category = 'ALL') {
    const currentFaqs = faqsData[category] || faqsData['ALL'];
    const faqHtml = currentFaqs.map((faq, index) => {
        const isFirst = index === 0;
        return `
        <div class="faq-item glass-card">
            <button class="faq-question-btn" aria-expanded="${isFirst ? 'true' : 'false'}" data-index="${index}">
                <span class="faq-question-text">${faq.question}</span>
                <span class="faq-icon">
                    <span class="faq-icon-plus" style="display: ${isFirst ? 'none' : 'block'};">+</span>
                    <span class="faq-icon-minus" style="display: ${isFirst ? 'block' : 'none'};">×</span>
                </span>
            </button>
            <div class="faq-answer-container" style="display: ${isFirst ? 'block' : 'none'};">
                <p class="faq-answer-text">${faq.answer}</p>
            </div>
        </div>
    `}).join('');

    return `
        <section class="faq-section">
            <div class="section-header" style="text-align: center; margin-bottom: 40px;">
                <h2 style="color: #ffffff; display: inline-block; position: relative; font-size: 2.5rem; font-weight: 700; margin-bottom: 0; letter-spacing: 1px;">
                    Frequently Asked Questions
                    <span style="position: absolute; bottom: -10px; left: 0; width: 100%; height: 4px; background-color: #ffc107; border-radius: 2px;"></span>
                </h2>
            </div>
            <div class="faq-container" style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
                ${faqHtml}
            </div>
        </section>
        <script type="application/ld+json">
        ${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": currentFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        })}
        </script>
    `;
}

export function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question-btn');
        const answerContainer = item.querySelector('.faq-answer-container');
        const iconPlus = item.querySelector('.faq-icon-plus');
        const iconMinus = item.querySelector('.faq-icon-minus');
        const questionText = item.querySelector('.faq-question-text');

        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            
            // Close all others
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
                    otherItem.querySelector('.faq-answer-container').style.display = 'none';
                    otherItem.querySelector('.faq-icon-plus').style.display = 'block';
                    otherItem.querySelector('.faq-icon-minus').style.display = 'none';
                    otherItem.querySelector('.faq-question-text').style.color = '';
                }
            });

            if (isExpanded) {
                btn.setAttribute('aria-expanded', 'false');
                answerContainer.style.display = 'none';
                iconPlus.style.display = 'block';
                iconMinus.style.display = 'none';
                questionText.style.color = '';
            } else {
                btn.setAttribute('aria-expanded', 'true');
                answerContainer.style.display = 'block';
                iconPlus.style.display = 'none';
                iconMinus.style.display = 'block';
                questionText.style.color = '';
            }
        });
    });
}
