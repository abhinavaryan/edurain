const faqsData = {
    ALL: [
        { question: "What courses does EduRain offer?", answer: "Covers Class 6–12 academics, Foundation courses, and NEET/IIT-JEE exam preparation." },
        { question: "Are practice tests and mock exams included in the course?", answer: "Yes, mock tests and weekly tests are available, helping NEET/IIT-JEE and board exam aspirants regularly track their preparation level and performance." },
        { question: "Are the courses live or recorded?", answer: "Yes, both are available. Students get live classes as well as recorded lectures, so they can learn in real-time or revise anytime at their own pace." },
        { question: "Can I access study material and video lectures on mobile?", answer: "Yes, both mobile apps and websites are available. Students can study from the EduRain app or directly from the website, whichever is convenient." },
        { question: "Is there a free demo class before purchasing?", answer: "Yes, EduRain offers a free demo class so students can experience the teaching style and course quality before enrolling." },
        { question: "What support is available if I have doubts during the course?", answer: "We provide dedicated doubt-clearing sessions, personal mentor support, and regular teacher interaction to ensure all your questions are answered." }
    ],
    // JEE FAQs from the doc "Best JEE Main 2027 Online Coaching and Complete Preparation with EduRain"
    JEE: [
        { question: "Are the JEE courses at EduRain live or recorded?", answer: "EduRain offers both live and recorded classes. You can attend interactive live sessions and also watch recorded lectures anytime for revision." },
        { question: "What subjects are covered in the JEE batches?", answer: "EduRain JEE batches cover all the subjects required for the exam: Physics, Chemistry and Mathematics." },
        { question: "How can I enroll in a JEE batch at EduRain?", answer: "Visit the EduRain website, choose the batch that suits you (Class 11, Class 12 or Dropper) and complete the registration online." },
        { question: "Are mock tests included in the JEE batches?", answer: "Yes, EduRain JEE batches include regular mock tests, sectional tests, and practice questions, so you can check your preparation and improve your performance." },
        { question: "What kind of support do teachers provide in these batches?", answer: "Teachers provide live doubt-solving support, feedback on your performance and guidance throughout your preparation. A dedicated doubt-resolution facility is also available." },
        { question: "What is the last date for JEE Main 2027 registration?", answer: "JEE Main 2027 Session 1 registration started on 24 October 2026, and the last date to apply is 22 November 2026 (11:50 pm). Always confirm the dates on the official NTA website." },
        { question: "What are the JEE Main 2027 exam dates?", answer: "Session 1 is scheduled for 20, 21, 22, 23, 24 and 28 January 2027, and Session 2 for 2 to 7 April 2027. Dates can change, so follow the official NTA notice." },
        { question: "Which JEE batch should I choose: Class 11, Class 12 or Dropper?", answer: "Choose the batch that matches your current academic level. Class 11 students build a strong base early, Class 12 students balance board exams with JEE Main, and droppers get a full-year revision and test-focused plan. Not sure? Talk to an EduRain counsellor for guidance." },
        { question: "Who teaches the JEE batches at EduRain?", answer: "EduRain's JEE faculty includes Mr. Diwakar for Physics, Ms. Ritu for Chemistry and Mr. Debashish Banerjee for Mathematics. See the faculty section above for each teacher's experience." },
        { question: "Is there a free demo class for the JEE batches?", answer: "Yes. You can book a free demo session, see how our teachers explain concepts and then decide which batch to join." }
    ],
    /* Old JEE FAQs, replaced by the ones above. Kept for reference.
    JEE: [
        { question: "What is covered in the IIT-JEE course Mains, Advanced, or both?", answer: "We tell you exactly whether the course prepares you for JEE Mains, JEE Advanced, or both, so you know what you're signing up for." },
        { question: "Which subjects and topics are included in the IIT-JEE syllabus here?", answer: "The course covers Physics, Chemistry, and Maths as per the latest JEE syllabus, so nothing important gets missed." },
        { question: "Are live classes and recorded lectures both available for IIT-JEE prep?", answer: "Yes, you get live classes to learn in real-time, plus recorded lectures so you can revise anytime at your own pace." },
        { question: "Are mock tests and weekly tests included for JEE preparation?", answer: "Yes, regular mock tests and weekly tests are part of the course, helping you track your rank and preparation level as you go." },
        { question: "Who are the faculty teaching the IIT-JEE course?", answer: "Meet the experienced teachers behind the course because for an exam like JEE, knowing who's teaching you matters." },
        { question: "Is there a free demo class before enrolling in the IIT-JEE course?", answer: "Yes, EduRain offers a free demo class for IIT-JEE preparation so students can experience the teaching style and course quality before enrolling." }
    ],
    */
    // NEET FAQs from the doc "Best NEET 2027 Online Coaching and Complete NEET 2027 Online Preparation with EduRain"
    NEET: [
        { question: "Does EduRain offer NEET 2027 online coaching for Class 11, Class 12 and droppers?", answer: "Yes. EduRain has separate batches for Class 11, Class 12 and dropper students. Each batch follows the latest NEET pattern." },
        { question: "Will NEET 2027 be conducted online (CBT)?", answer: "The Education Ministry has announced that NEET UG moves to computer-based testing from 2027, and NTA is working towards it. The official notification with the full schedule is still awaited, so check neet.nta.nic.in for the final word." },
        { question: "When will NEET 2027 registration start?", answer: "The NTA has not announced the dates yet. Registration is expected to start in February 2027, so keep your documents ready. Always confirm the dates on neet.nta.nic.in." },
        { question: "When is the NEET 2027 exam date?", answer: "Not officially announced. NEET is usually held on the first Sunday of May, which is 2 May 2027, but a CBT may be spread over several days. See our <a href='https://www.edurain.in/blogs/neet-ug-2027-exam-date-expected-schedule-updates' style='color: #60a5fa; font-weight: 600; text-decoration: none;'>exam date update</a>." },
        { question: "Are the classes live or recorded?", answer: "Both. You can join live classes and ask doubts in real time. You can also watch recordings later for revision." },
        { question: "Are mock tests and weekly tests included?", answer: "Yes. Every batch includes regular mock tests and weekly tests, along with a performance analysis after each test." },
        { question: "What are the fees for NEET online coaching at EduRain?", answer: "Fees depend on the batch you choose. At the time of writing, batches are listed from ₹4,820 to ₹12,500. Open your batch page to see the current fee and everything the batch includes. You can also talk to an EduRain counsellor, who will help you pick the right batch." },
        { question: "Who are the faculty for NEET at EduRain?", answer: "EduRain's NEET faculty includes Mrs. Ritu (Chemistry), Mr. Diwakar (Physics) and Mr. Nitin (Biology), who have taught NEET aspirants for years. See the faculty section above for each teacher's subject and experience." },
        { question: "Is there a free demo class?", answer: "Yes. You can attend a free demo class before you enroll and then decide." },
        { question: "Can I clear NEET with online coaching?", answer: "Yes, many students do. Online coaching works when you follow a fixed study plan, attend classes, practice PYQs, and take mock tests regularly." },
        { question: "Can a student without math appear for NEET?", answer: "Yes. NEET needs Physics, Chemistry, and Biology. Mathematics is not compulsory." }
    ],
    /* Old NEET FAQs, replaced by the ones above. Kept for reference.
    NEET: [
        { question: "What subjects are covered in the NEET course?", answer: "Confirms coverage of Physics, Chemistry, and Biology as per the latest NEET syllabus." },
        { question: "Are live classes and recorded lectures both available for NEET prep?", answer: "Yes, both are available. Students get live classes to learn in real-time, plus recorded lectures so they can revise anytime at their own pace." },
        { question: "Are mock tests and weekly tests included for NEET preparation?", answer: "Yes, regular mock tests and weekly tests are part of the course, helping students track their score and preparation level as they go." },
        { question: "Who are the faculty teaching the NEET course?", answer: "Addresses trust students want to know teacher experience and qualifications for a high-stakes exam such as NEET." },
        { question: "Is there a free demo class before enrolling in the NEET course?", answer: "Yes, available students can attend a free demo class first and decide if the teaching style works for them before enrolling." }
    ],
    */
    FOUNDATION: [
        { question: "What is a Foundation course and who is it for?", answer: "The Foundation course is for students in Class 6th to 12th. It helps you understand your subjects clearly and also prepares you early for big exams such as NEET and IIT-JEE in the future." },
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
        ${JSON.stringify(
            category === 'ALL' ? {
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "CollectionPage",
                        "@id": "https://www.edurain.in/courses/#webpage",
                        "url": "https://www.edurain.in/courses/",
                        "name": "Online Courses for Class 6-12, IIT-JEE & NEET | EduRain",
                        "description": "EduRain offers online coaching for Class 6-12, foundation courses, IIT-JEE preparation, NEET coaching, board exams and competitive exam preparation.",
                        "isPartOf": {
                            "@id": "https://www.edurain.in/#website"
                        },
                        "about": {
                            "@id": "https://www.edurain.in/#organization"
                        },
                        "inLanguage": "en-IN"
                    },
                    {
                        "@type": "ItemList",
                        "@id": "https://www.edurain.in/courses/#courses",
                        "name": "EduRain Courses",
                        "description": "Online courses offered by EduRain for Class 6-12 academics, Foundation, IIT-JEE, NEET, board exams and competitive exam preparation."
                    },
                    {
                        "@type": "BreadcrumbList",
                        "@id": "https://www.edurain.in/courses/#breadcrumb",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.edurain.in/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Courses",
                                "item": "https://www.edurain.in/courses/"
                            }
                        ]
                    },
                    {
                        "@type": "FAQPage",
                        "@id": "https://www.edurain.in/courses/#faq",
                        "mainEntity": currentFaqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    }
                ]
            } : category === 'JEE' ? {
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "WebPage",
                        "@id": "https://www.edurain.in/courses/iit-jee/#webpage",
                        "url": "https://www.edurain.in/courses/iit-jee/",
                        "name": "IIT-JEE Online Preparation | EduRain",
                        "description": "EduRain offers online IIT-JEE preparation with Physics, Chemistry and Mathematics classes, live and recorded lectures, mock tests, weekly tests and exam preparation support.",
                        "isPartOf": {
                            "@id": "https://www.edurain.in/#website"
                        },
                        "about": {
                            "@id": "https://www.edurain.in/#organization"
                        },
                        "mainEntity": {
                            "@id": "https://www.edurain.in/courses/iit-jee/#course"
                        },
                        "inLanguage": "en-IN"
                    },
                    {
                        "@type": "Course",
                        "@id": "https://www.edurain.in/courses/iit-jee/#course",
                        "name": "IIT-JEE Online Preparation",
                        "description": "Online IIT-JEE preparation covering Physics, Chemistry and Mathematics with live classes, recorded lectures, mock tests, weekly tests and structured exam preparation.",
                        "url": "https://www.edurain.in/courses/iit-jee/",
                        "provider": {
                            "@type": "Organization",
                            "@id": "https://www.edurain.in/#organization",
                            "name": "EduRain",
                            "url": "https://www.edurain.in/"
                        },
                        "inLanguage": "en-IN",
                        "about": [
                            "JEE Main",
                            "JEE Advanced",
                            "Physics",
                            "Chemistry",
                            "Mathematics"
                        ]
                    },
                    {
                        "@type": "BreadcrumbList",
                        "@id": "https://www.edurain.in/courses/iit-jee/#breadcrumb",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.edurain.in/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Courses",
                                "item": "https://www.edurain.in/courses/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "IIT-JEE",
                                "item": "https://www.edurain.in/courses/iit-jee/"
                            }
                        ]
                    },
                    {
                        "@type": "FAQPage",
                        "@id": "https://www.edurain.in/courses/iit-jee/#faq",
                        "mainEntity": currentFaqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    }
                ]
            } : category === 'NEET' ? {
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "WebPage",
                        "@id": "https://www.edurain.in/courses/neet/#webpage",
                        "url": "https://www.edurain.in/courses/neet/",
                        "name": "NEET Online Preparation | EduRain",
                        "description": "EduRain offers online NEET preparation covering Physics, Chemistry and Biology with live classes, recorded lectures, mock tests, weekly tests and structured exam preparation.",
                        "isPartOf": {
                            "@id": "https://www.edurain.in/#website"
                        },
                        "about": {
                            "@id": "https://www.edurain.in/#organization"
                        },
                        "mainEntity": {
                            "@id": "https://www.edurain.in/courses/neet/#course"
                        },
                        "inLanguage": "en-IN"
                    },
                    {
                        "@type": "Course",
                        "@id": "https://www.edurain.in/courses/neet/#course",
                        "name": "NEET Online Preparation",
                        "description": "Online NEET preparation covering Physics, Chemistry and Biology with live classes, recorded lectures, mock tests, weekly tests and structured exam preparation.",
                        "url": "https://www.edurain.in/courses/neet/",
                        "provider": {
                            "@id": "https://www.edurain.in/#organization"
                        },
                        "inLanguage": "en-IN",
                        "about": [
                            "NEET",
                            "Physics",
                            "Chemistry",
                            "Biology"
                        ]
                    },
                    {
                        "@type": "BreadcrumbList",
                        "@id": "https://www.edurain.in/courses/neet/#breadcrumb",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.edurain.in/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Courses",
                                "item": "https://www.edurain.in/courses/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "NEET",
                                "item": "https://www.edurain.in/courses/neet/"
                            }
                        ]
                    },
                    {
                        "@type": "FAQPage",
                        "@id": "https://www.edurain.in/courses/neet/#faq",
                        "mainEntity": currentFaqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    }
                ]
            } : category === 'FOUNDATION' ? {
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "Course",
                        "@id": "https://www.edurain.in/courses/foundation/#course",
                        "name": "Foundation Course for Class 6 to 12",
                        "description": "EduRain Foundation Course is designed for students in Class 6th to 12th to build a strong foundation in Maths, Science and English while preparing early for future competitive exams such as IIT-JEE and NEET.",
                        "url": "https://www.edurain.in/courses/foundation/",
                        "provider": {
                            "@type": "Organization",
                            "name": "EduRain",
                            "url": "https://www.edurain.in/"
                        },
                        "educationalLevel": "Class 6 to Class 12",
                        "teaches": [
                            "Mathematics",
                            "Science",
                            "English",
                            "Foundation Preparation for IIT-JEE",
                            "Foundation Preparation for NEET"
                        ]
                    },
                    {
                        "@type": "FAQPage",
                        "@id": "https://www.edurain.in/courses/foundation/#faq",
                        "mainEntity": currentFaqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    }
                ]
            } : {
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
            }
        )}
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
