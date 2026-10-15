export interface Course {
  id: string;
  name: string;
  arabicName?: string;
  shortDescription: string;
  fullDescription: string | string[];
  ageGroup: string;
  level: string;
  format: string;
  duration: string;
  keyTopics: string[];
  outcomes: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  designation?: string;
  image?: string;
  qualification: string;
  specialisation: string;
  bio: string;
  experiencePlaceholder: string;
  languages: string[];
}

export interface StudentPerformanceItem {
  id: string;
  title: string;
  category: 'Quran Recitation' | 'Hifz' | 'Tajweed' | 'Islamic Activities' | 'Student Reflections';
  studentName: string;
  ageLevel: string;
  description: string;
  duration: string;
  surahOrTopic: string;
  reflectionQuote?: string;
}

export interface Testimonial {
  id: string;
  type: 'text' | 'video';
  parentName: string;
  childInfo: string;
  location: string;
  content: string;
  videoDuration?: string;
  keyHighlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const MADRASA_CONFIG = {
  name: "Islah International Academy",
  domain: "www.islahonlinemadrasa.com",
  phoneDisplay: "[CLIENT PHONE NUMBER]",
  phoneNumber: "447000000000", // Placeholder for wa.me link
  emailDisplay: "admissions@islahonlinemadrasa.com",
  whatsappBaseUrl: "https://wa.me/447000000000",
  instagramPlaceholder: "[INSTAGRAM URL - @islahonlinemadrasa]",
  youtubePlaceholder: "[YOUTUBE URL - Islah International Academy]",
  establishedYear: "[ESTABLISHED YEAR]",
  studentsCount: "[NUMBER OF STUDENTS]",
  teachersCount: "[NUMBER OF TEACHERS]",
};

export const TRUST_POINTS = [
  {
    title: "Qualified Teachers",
    description: "Vetted instructors trained in Tajweed, pedagogy, and patient child mentorship.",
  },
  {
    title: "Structured Curriculum",
    description: "Step-by-step milestones rooted firmly in the Qur'an and authentic Sunnah.",
  },
  {
    title: "Personal Attention",
    description: "Dedicated 1-on-1 and small group settings tailored to your child's pace.",
  },
  {
    title: "Safe Online Learning",
    description: "Secure virtual classrooms with respectful, family-monitored environments.",
  },
  {
    title: "Parent Progress Updates",
    description: "Regular feedback, recitation milestone recordings, and teacher check-ins.",
  },
];

export const WHY_ISLAH_PRINCIPLES = [
  {
    id: "quran",
    title: "Qur'an at the Center",
    tagline: "Correct recitation and daily bonding",
    description:
      "Beyond mere phonetic reading, we nurture a living relationship with Allah's words—teaching accurate Makharij, measured Tajweed, and deep reverent listening.",
  },
  {
    id: "knowledge",
    title: "Authentic Islamic Knowledge",
    tagline: "Firmly grounded in Qur'an & Sunnah",
    description:
      "Children learn clear Aqeedah, the loving life of Prophet Muhammad (ﷺ), and essential Fiqh of worship presented with purity and balance.",
  },
  {
    id: "character",
    title: "Character & Akhlaaq",
    tagline: "Nurturing beautiful prophetic conduct",
    description:
      "Islamic education is incomplete without manners. We emphasize honesty, kindness to parents, humility, and graceful speech in every interaction.",
  },
  {
    id: "discipline",
    title: "Discipline & Consistency",
    tagline: "Gentle routine that builds lifelong habits",
    description:
      "Small, consistent daily steps create lasting mastery. Our teachers instill steady dedication without undue stress or exhaustion.",
  },
  {
    id: "confidence",
    title: "Confident Muslim Identity",
    tagline: "Standing proud and clear in faith",
    description:
      "Living in a modern, fast-paced world, Muslim children need a safe space where their faith is understood, celebrated, and deeply appreciated.",
  },
  {
    id: "understanding",
    title: "Understanding & Meaning",
    tagline: "Knowing what they recite and pray",
    description:
      "Children understand the foundational meanings of their daily Surahs, Salah prayers, and morning/evening Adhkar so their worship is felt in the heart.",
  },
  {
    id: "love",
    title: "Love for the Deen",
    tagline: "Learning inspired by warmth and encouragement",
    description:
      "We replace intimidation with affectionate guidance. Children look forward to their classes because our teachers listen, encourage, and care.",
  },
];

export const COURSES: Course[] = [
  {
    id: "comprehensive-islamic-education-for-school-going-students",
    name: "Comprehensive Islamic Education for School-Going Students",
    arabicName: "القاعدة النورانية",
    shortDescription: "Foundational Arabic phonetics, alphabet recognition, and letter joining for beginners.",
    fullDescription: ["Give your child the opportunity to learn Islam alongside their regular school education.",
      "Our Evening Online Madrasa provides structured Islamic education for school-going children, helping them develop a sound understanding of their religion while balancing their academic responsibilities.",
      "Through engaging lessons, guided learning, and regular interaction with teachers, students gradually build their Islamic knowledge, improve their Qur’an recitation, and develop good manners based on the Qur’an and authentic Sunnah.",
      "Our goal is not simply to teach children what Islam says, but to help them understand its teachings and apply them in their daily lives."
    ],
    ageGroup: "School-going children (5 - 18 years)",
    level: "Evening Online Madrasa",
    format: "Live online group interactive classes",
    duration: "1 hour per session | 4 days a week",
    keyTopics: ["Qur’an Reading and Recitation with perfection", "Islamic Studies", "Authentic daily Duas and Adhkar.", "Hadith and their practical lessons.", "Arabic Language", "Character Development"],
    outcomes: "A child who grows in Islamic knowledge, Qur’an recitation, good character, and confidence in practising Islam."
  },
  {
    id: "start-your-childs-day-with-islamic-learning",
    name: "Start Your Child's Day with Islamic Learning",
    arabicName: "تلاوة القرآن الكريم",
    shortDescription: "Fluent reading directly from the Mushaf with continuous teacher guidance.",
    fullDescription: ["Make Islamic learning a meaningful part of your child's daily routine.",
      "Our Morning Online Madrasa is designed for families who prefer morning Islamic classes for their children. It provides a structured learning environment where students can study the Qur’an and essential Islamic subjects before beginning their other daily activities.",
      "With regular classes and a planned curriculum, children develop consistency in their learning while building a stronger connection with their religion.",
      "Whether your child is beginning their Islamic education or continuing their learning journey, our program aims to nurture knowledge, discipline, and good character."
    ],
    ageGroup: "Children whose daily schedules suit morning classes (5 - 18 years )",
    level: "Morning Online Madrasa",
    format: "Live online group interactive classes",
    duration: "1 hour per session | 4 days a week",
    keyTopics: ["Qur’an Reading and Recitation with perfection", "Islamic Studies", "Authentic daily Duas and Adhkar.", " Hadith and their practical lessons.", " Arabic Language", "Character Development"],
    outcomes: "Complete independent recitation of the Holy Quran from cover to cover with clear rhythm."
  },
  {
    id: "begin-your-child's-journey-with-the-book-of-allah-qaida-tilawa-hifdh",
    name: "Begin Your Child's Journey with the Book of Allah - Qaida | Tilawa | Hifdh",
    arabicName: "حفظ القرآن الكريم",
    shortDescription: "Structured memorisation paths with strict retention and daily revision routines.",
    fullDescription: ["Every child's journey with the Qur’an begins with learning to read it correctly.",
      "Our Qur’an Classes for Kids are designed to help children develop the skills and confidence needed to read the Book of Allah, beginning with the Arabic alphabet and progressing towards fluent Qur’an recitation.",
      "We offer three learning pathways according to each child's current reading level: Qaida, Qur’an Tilawa and Hifdh.",
      "Our teachers guide students step by step, helping them recognise Arabic letters, pronounce them correctly, and gradually develop accurate recitation.",
      "Choose Your Learning Path :",
      "A. Qaida — Learn to Read Arabic",
      "Ideal for children who are beginners or need to strengthen their Arabic reading foundation."
    ],
    ageGroup: "5 - 8 years",
    level: "Qur’an Classes for Kids",
    format: "Live 1-to-1 / small group online classes",
    duration: "45–60 mins / 4–5 days weekly",
    keyTopics: ["Read Qur’anic verses with increasing fluency.", "Improve the pronunciation of Arabic letters.", "Learn and practise essential Tajweed rules.", "Apply appropriate stopping and starting rules as taught.", "Develop accuracy and confidence through regular recitation.", "Build a consistent relationship with the Qur’an."],
    outcomes: "A student who develops a consistent Islamic learning routine and builds a strong foundation in Qur’an and Islamic knowledge."
  },
  {
    id: "learn-the-quran-with-confidence-at-your-own-pace",
    name: "Learn the Qur’an with Confidence, at Your Own Pace",
    arabicName: "أحكام التجويد",
    shortDescription: "In-depth study of recitation rules, articulation points, and vocal characteristics.",
    fullDescription: ["It is never too late to begin learning the Qur’an or improve your recitation.",
      "Our Qur’an Classes for Ladies provide an opportunity for women to learn from the comfort and privacy of their homes, regardless of whether they are complete beginners or already able to read the Qur’an.",
      "Whether you wish to learn the Arabic alphabet from the beginning or refine your Qur’an recitation, our classes are structured around your current level and learning needs.",
      "We offer two learning pathways: Qaida and Qur’an Tilawa."
    ],
    ageGroup: "Ladies and women of all adult age groups",
    level: "Qur’an Classes for Ladies",
    format: "Live online classes",
    duration: "",
    keyTopics: ["Improve fluency and accuracy in recitation.", "Work on the correct pronunciation of Arabic letters.", "Learn and practise Tajweed rules.", "Identify and correct common recitation mistakes.", "Improve stopping and starting during recitation.", "Develop consistency in reading the Qur’an."],
    outcomes: "A student who develops a consistent Islamic learning routine and builds a strong foundation in Qur’an and Islamic knowledge."
  },
  {
    id: "memorise-the-quran-with-guidance-consistency-and-care",
    name: "Memorise the Qur’an with Guidance, Consistency and Care",
    arabicName: "الدراسات الإسلامية والعقيدة",
    shortDescription: "Essential pillars of Iman, Seerah of the Prophet (ﷺ), and moral worldview.",
    fullDescription: ["The memorisation of the Qur’an is a noble journey that requires dedication, consistency, and proper guidance.",
      "Our Hifdh Batches are designed for students who wish to memorise the Qur’an systematically under the guidance of a teacher.",
      "Students work towards their memorisation goals through structured lessons, regular revision, and recitation assessments. Equal importance is given to strengthening previously memorised portions so that students can retain and confidently recite what they have learnt.",
      "We aim to help students develop discipline, patience, and a lifelong connection with the Book of Allah."
    ],
    ageGroup: "Children and students who are ready for Qur’an memorisation; eligibility to be confirmed",
    level: "Hifdh Batches",
    format: " Live online memorisation classes",
    duration: "",
    keyTopics: ["Initial Assessment", "Structured Memorisation", "Daily and Regular Revision", "Recitation Accuracy", "Progress Monitoring"],
    outcomes: "A student who progresses towards Qur’an memorisation with proper guidance, regular revision, and a sustainable learning routine."
  },
  {
    id: "supporting-students-in-their-academic-personal-and-islamic-development",
    name: "Supporting Students in Their Academic, Personal and Islamic Development",
    arabicName: "الأدعية والأذكار اليومية",
    shortDescription: "Sunnah prayers for morning, evening, food, travel, and sleep with meanings.",
    fullDescription: ["Every student faces challenges at different stages of life. Some struggle with motivation or study habits, while others need guidance in managing their time, developing discipline, or navigating everyday challenges.",
      "Our Student Counselling service aims to provide students and families with structured guidance to help students develop healthy habits, make responsible decisions, and work towards their personal and academic goals.",
      "With an emphasis on Islamic values, personal responsibility, and practical solutions, the programme seeks to help students grow in confidence, character, and self-discipline.",
      "The counselling approach and session format can be tailored to the student's age and individual needs."
    ],
    ageGroup: "School-going students and teenagers.",
    level: "Student Counselling",
    format: "Online one-to-one counselling sessions",
    duration: "Based on the student's needs and the counselling programme offered",
    keyTopics: ["Understanding the Student's Needs", "Academic Guidance", "Personal Development", "Islamic Character Development", "Progress and Follow-Up"],
    outcomes: "A student who is better equipped to manage everyday challenges, develop positive habits, and work towards academic and personal goals."
  },
  {
    id: "comprehensive-islamic-education-for-school-going-students",
    name: "Comprehensive Islamic Education for School-Going Students",
    arabicName: "القاعدة النورانية",
    shortDescription: "Foundational Arabic phonetics, alphabet recognition, and letter joining for beginners.",
    fullDescription: ["Give your child the opportunity to learn Islam alongside their regular school education.",
      "Our Evening Online Madrasa provides structured Islamic education for school-going children, helping them develop a sound understanding of their religion while balancing their academic responsibilities.",
      "Through engaging lessons, guided learning, and regular interaction with teachers, students gradually build their Islamic knowledge, improve their Qur’an recitation, and develop good manners based on the Qur’an and authentic Sunnah.",
      "Our goal is not simply to teach children what Islam says, but to help them understand its teachings and apply them in their daily lives."
    ],
    ageGroup: "School-going children (5 - 18 years)",
    level: "Evening Online Madrasa",
    format: "Live online group interactive classes",
    duration: "1 hour per session | 4 days a week",
    keyTopics: ["Qur’an Reading and Recitation with perfection", "Islamic Studies", "Authentic daily Duas and Adhkar.", "Hadith and their practical lessons.", "Arabic Language", "Character Development"],
    outcomes: "A child who grows in Islamic knowledge, Qur’an recitation, good character, and confidence in practising Islam."
  },
  {
    id: "start-your-childs-day-with-islamic-learning",
    name: "Start Your Child's Day with Islamic Learning",
    arabicName: "تلاوة القرآن الكريم",
    shortDescription: "Fluent reading directly from the Mushaf with continuous teacher guidance.",
    fullDescription: ["Make Islamic learning a meaningful part of your child's daily routine.",
      "Our Morning Online Madrasa is designed for families who prefer morning Islamic classes for their children. It provides a structured learning environment where students can study the Qur’an and essential Islamic subjects before beginning their other daily activities.",
      "With regular classes and a planned curriculum, children develop consistency in their learning while building a stronger connection with their religion.",
      "Whether your child is beginning their Islamic education or continuing their learning journey, our program aims to nurture knowledge, discipline, and good character."
    ],
    ageGroup: "Children whose daily schedules suit morning classes (5 - 18 years )",
    level: "Morning Online Madrasa",
    format: "Live online group interactive classes",
    duration: "1 hour per session | 4 days a week",
    keyTopics: ["Qur’an Reading and Recitation with perfection", "Islamic Studies", "Authentic daily Duas and Adhkar.", " Hadith and their practical lessons.", " Arabic Language", "Character Development"],
    outcomes: "Complete independent recitation of the Holy Quran from cover to cover with clear rhythm."
  },
  {
    id: "begin-your-child's-journey-with-the-book-of-allah-qaida-tilawa-hifdh",
    name: "Begin Your Child's Journey with the Book of Allah - Qaida | Tilawa | Hifdh",
    arabicName: "حفظ القرآن الكريم",
    shortDescription: "Structured memorisation paths with strict retention and daily revision routines.",
    fullDescription: ["Every child's journey with the Qur’an begins with learning to read it correctly.",
      "Our Qur’an Classes for Kids are designed to help children develop the skills and confidence needed to read the Book of Allah, beginning with the Arabic alphabet and progressing towards fluent Qur’an recitation.",
      "We offer three learning pathways according to each child's current reading level: Qaida, Qur’an Tilawa and Hifdh.",
      "Our teachers guide students step by step, helping them recognise Arabic letters, pronounce them correctly, and gradually develop accurate recitation.",
      "Choose Your Learning Path :",
      "A. Qaida — Learn to Read Arabic",
      "Ideal for children who are beginners or need to strengthen their Arabic reading foundation."
    ],
    ageGroup: "5 - 8 years",
    level: "Qur’an Classes for Kids",
    format: "Live 1-to-1 / small group online classes",
    duration: "45–60 mins / 4–5 days weekly",
    keyTopics: ["Read Qur’anic verses with increasing fluency.", "Improve the pronunciation of Arabic letters.", "Learn and practise essential Tajweed rules.", "Apply appropriate stopping and starting rules as taught.", "Develop accuracy and confidence through regular recitation.", "Build a consistent relationship with the Qur’an."],
    outcomes: "A student who develops a consistent Islamic learning routine and builds a strong foundation in Qur’an and Islamic knowledge."
  },
  {
    id: "learn-the-quran-with-confidence-at-your-own-pace",
    name: "Learn the Qur’an with Confidence, at Your Own Pace",
    arabicName: "أحكام التجويد",
    shortDescription: "In-depth study of recitation rules, articulation points, and vocal characteristics.",
    fullDescription: ["It is never too late to begin learning the Qur’an or improve your recitation.",
      "Our Qur’an Classes for Ladies provide an opportunity for women to learn from the comfort and privacy of their homes, regardless of whether they are complete beginners or already able to read the Qur’an.",
      "Whether you wish to learn the Arabic alphabet from the beginning or refine your Qur’an recitation, our classes are structured around your current level and learning needs.",
      "We offer two learning pathways: Qaida and Qur’an Tilawa."
    ],
    ageGroup: "Ladies and women of all adult age groups",
    level: "Qur’an Classes for Ladies",
    format: "Live online classes",
    duration: "",
    keyTopics: ["Improve fluency and accuracy in recitation.", "Work on the correct pronunciation of Arabic letters.", "Learn and practise Tajweed rules.", "Identify and correct common recitation mistakes.", "Improve stopping and starting during recitation.", "Develop consistency in reading the Qur’an."],
    outcomes: "A student who develops a consistent Islamic learning routine and builds a strong foundation in Qur’an and Islamic knowledge."
  },
  {
    id: "memorise-the-quran-with-guidance-consistency-and-care",
    name: "Memorise the Qur’an with Guidance, Consistency and Care",
    arabicName: "الدراسات الإسلامية والعقيدة",
    shortDescription: "Essential pillars of Iman, Seerah of the Prophet (ﷺ), and moral worldview.",
    fullDescription: ["The memorisation of the Qur’an is a noble journey that requires dedication, consistency, and proper guidance.",
      "Our Hifdh Batches are designed for students who wish to memorise the Qur’an systematically under the guidance of a teacher.",
      "Students work towards their memorisation goals through structured lessons, regular revision, and recitation assessments. Equal importance is given to strengthening previously memorised portions so that students can retain and confidently recite what they have learnt.",
      "We aim to help students develop discipline, patience, and a lifelong connection with the Book of Allah."
    ],
    ageGroup: "Children and students who are ready for Qur’an memorisation; eligibility to be confirmed",
    level: "Hifdh Batches",
    format: " Live online memorisation classes",
    duration: "",
    keyTopics: ["Initial Assessment", "Structured Memorisation", "Daily and Regular Revision", "Recitation Accuracy", "Progress Monitoring"],
    outcomes: "A student who progresses towards Qur’an memorisation with proper guidance, regular revision, and a sustainable learning routine."
  },
  {
    id: "supporting-students-in-their-academic-personal-and-islamic-development",
    name: "Supporting Students in Their Academic, Personal and Islamic Development",
    arabicName: "الأدعية والأذكار اليومية",
    shortDescription: "Sunnah prayers for morning, evening, food, travel, and sleep with meanings.",
    fullDescription: ["Every student faces challenges at different stages of life. Some struggle with motivation or study habits, while others need guidance in managing their time, developing discipline, or navigating everyday challenges.",
      "Our Student Counselling service aims to provide students and families with structured guidance to help students develop healthy habits, make responsible decisions, and work towards their personal and academic goals.",
      "With an emphasis on Islamic values, personal responsibility, and practical solutions, the programme seeks to help students grow in confidence, character, and self-discipline.",
      "The counselling approach and session format can be tailored to the student's age and individual needs."
    ],
    ageGroup: "School-going students and teenagers.",
    level: "Student Counselling",
    format: "Online one-to-one counselling sessions",
    duration: "Based on the student's needs and the counselling programme offered",
    keyTopics: ["Understanding the Student's Needs", "Academic Guidance", "Personal Development", "Islamic Character Development", "Progress and Follow-Up"],
    outcomes: "A student who is better equipped to manage everyday challenges, develop positive habits, and work towards academic and personal goals."
  },
];

export const LEARNING_JOURNEY_STEPS = [
  {
    step: "01",
    title: "Assessment",
    subtitle: "Personalized Diagnostic",
    description: "A patient diagnostic session to identify your child's exact reading speed, pronunciation habits, and ideal learning style."
  },
  {
    step: "02",
    title: "Personalised Learning",
    subtitle: "Customized Pace & Goals",
    description: "Every child is unique. Whether your child needs extra patience on tricky letters or is ready for accelerated Hifz, we adapt the roadmap."
  },
  {
    step: "03",
    title: "1-on-1 or Small Groups",
    subtitle: "Undivided Attention",
    description: "No crowded virtual rooms where children get lost. The teacher listens intently to every single letter and breath."
  },
  {
    step: "04",
    title: "Regular Practice",
    subtitle: "Habit-Forming Routine",
    description: "Consistent 1 hour sessions scheduled around your family's timezone, ensuring steady progress without homework fatigue."
  },
  {
    step: "05",
    title: "Progress Feedback",
    subtitle: "Transparent Parent Partnership",
    description: "Voice notes, attendance records, and direct WhatsApp updates after lessons so you are always connected to their growth."
  }
];

export const TEACHING_METHOD_STEPS = [
  {
    number: "01",
    name: "Assessment",
    summary: "Personalized Diagnostic",
    details: "A patient diagnostic session to identify your child's exact reading speed, pronunciation habits, and ideal learning style."
  },
  {
    number: "02",
    name: "Personalised Learning",
    summary: "Customized Pace & Goals",
    details: "Every child is unique. Whether your child needs extra patience on tricky letters or is ready for accelerated Hifz, we adapt the roadmap."
  },
  {
    number: "03",
    name: "1-on-1 or Small Groups",
    summary: "Undivided Attention",
    details: "No crowded virtual rooms where children get lost. The teacher listens intently to every single letter and breath."
  },
  {
    number: "04",
    name: "Regular Practice",
    summary: "Habit-Forming Routine",
    details: "Consistent 30 to 45-minute sessions scheduled around your family's timezone, ensuring steady progress without homework fatigue."
  },
  {
    number: "05",
    name: "Progress Feedback",
    summary: "Transparent Parent Partnership",
    details: "Voice notes, attendance records, and direct WhatsApp updates after lessons so you are always connected to their growth."
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: "teacher-1",
    name: "Shaykh Ahmad Al-Azhari",
    title: "Head of Tajweed & Recitation",
    designation: "Head of Tajweed & Recitation",
    image: "/assets/img/teacher-1.jpg",
    qualification: "Certified Ijazah in Ten Minor Qira'at (Al-Azhar Al-Sharif)",
    specialisation: "Tajweed Mastery, Hafs 'an 'Asim, Tarteel & Child Pedagogy",
    bio: "Dedicated senior Quran teacher with over 12 years of experience mentoring students worldwide. Celebrated for patient encouragement, deep phonetics mastery, and warm rapport with children.",
    experiencePlaceholder: "12+ Years Experience",
    languages: ["English", "Arabic", "Urdu"]
  },
  {
    id: "teacher-2",
    name: "Ustadha Fatima Al-Mansoor",
    title: "Senior Female Quran & Hifz Educator",
    designation: "Senior Female Quran & Hifz Educator",
    image: "/assets/img/teacher-5.jpg",
    qualification: "Sanad in Recitation & B.A. in Islamic Studies",
    specialisation: "Noorani Qaida, Girls' Hifz Circle, Early Childhood Phonetics",
    bio: "Specializes in early childhood Arabic phonetics and foundational Quran literacy. Creates an encouraging, gentle learning space that nurtures an enduring, affectionate love for the Holy Quran.",
    experiencePlaceholder: "9+ Years Experience",
    languages: ["English", "Arabic"]
  },
  {
    id: "teacher-3",
    name: "Ustadh Tariq Al-Madani",
    title: "Instructor of Seerah & Adab",
    designation: "Instructor of Seerah & Adab",
    image: "/assets/img/teacher-3.jpg",
    qualification: "Degree in Usul al-Din (Islamic University of Madinah)",
    specialisation: "Prophetic Biography, Youth Character Development, Daily Sunnah",
    bio: "Dynamic Islamic mentor who connects classical Islamic wisdom to the everyday challenges of modern Muslim youth, instilling high moral character, prayer discipline, and spiritual confidence.",
    experiencePlaceholder: "7+ Years Experience",
    languages: ["English", "Arabic"]
  },
  {
    id: "teacher-4",
    name: "Ustadha Maryam Al-Hashemi",
    title: "Qaida & Early Phonetics Specialist",
    designation: "Qaida & Early Phonetics Specialist",
    image: "/assets/img/teacher-1.jpg",
    qualification: "Ijazah in Noorani Qaida & Child Education Diploma",
    specialisation: "Pronunciation Fundamentals, Interactive Letter Recognition, Child Motivation",
    bio: "Expert in early childhood Quran foundation. Gentle, patient and creative with beginner learners starting their first Arabic letters.",
    experiencePlaceholder: "8+ Years Experience",
    languages: ["English", "Arabic"]
  },
  {
    id: "teacher-5",
    name: "Qari Zayd Al-Iraqi",
    title: "Senior Tarteel & Maqamat Instructor",
    designation: "Senior Tarteel & Maqamat Instructor",
    image: "/assets/img/teacher-5.jpg",
    qualification: "Master of Quranic Sciences & Dual Ijazah",
    specialisation: "Advanced Tajweed, Melodic Recitation (Maqamat), Breath Control",
    bio: "Master recitation instructor guiding advanced youth and adult students in melodic beautification and mastery of recitation rules.",
    experiencePlaceholder: "11+ Years Experience",
    languages: ["English", "Arabic"]
  },
  {
    id: "teacher-6",
    name: "Ustadha Aisha Rahman",
    title: "Youth Mentorship & Islamic Studies",
    designation: "Youth Mentorship & Islamic Studies",
    image: "/assets/img/teacher-3.jpg",
    qualification: "B.A. in Islamic Jurisprudence & Youth Counselling",
    specialisation: "Islamic History, Contemporary Morals, Daily Duas & Fiqh Basics",
    bio: "Dedicated mentor connecting Islamic morals with modern teen experiences, nurturing self-confidence, identity, and love for prayer.",
    experiencePlaceholder: "6+ Years Experience",
    languages: ["English", "Arabic", "Urdu"]
  }
];

export const STUDENT_PERFORMANCE_ITEMS: StudentPerformanceItem[] = [
  {
    id: "perf-1",
    title: "Surah Ad-Duha with Measured Tajweed",
    category: "Quran Recitation",
    studentName: "[STUDENT - AGE 9]",
    ageLevel: "Level 3 - Tajweed Course",
    description: "Demonstrating clear articulation of difficult letters (Daad and Haa) and smooth melodic pacing during online review.",
    duration: "1:45",
    surahOrTopic: "Surah Ad-Duha (93)",
    reflectionQuote: "Alhamdulillah, I used to struggle with joining the letters, but my teacher practiced with me every day until it became easy."
  },
  {
    id: "perf-2",
    title: "Juz Amma Completion Milestone",
    category: "Hifz",
    studentName: "[STUDENT - AGE 11]",
    ageLevel: "Hifz Track - Stage 1",
    description: "Reciting consecutive Surahs from memory during the quarterly oral retention examination without hesitation.",
    duration: "2:30",
    surahOrTopic: "Surah Al-Alaq & Al-Qadr",
    reflectionQuote: "The Manzil revision cycle helped me keep all my Surahs fresh in my mind."
  },
  {
    id: "perf-3",
    title: "Makharij & Noon Sakinah Precision Drill",
    category: "Tajweed",
    studentName: "[STUDENT - AGE 8]",
    ageLevel: "Noorani Qaida Graduate",
    description: "Clear practical differentiation between Idgham with Ghunnah and Izhar during live oral recitation.",
    duration: "1:15",
    surahOrTopic: "Surah Al-Balad Excerpt"
  },
  {
    id: "perf-4",
    title: "Sunnah Morning & Evening Athkar Presentation",
    category: "Islamic Activities",
    studentName: "[STUDENT - AGE 7]",
    ageLevel: "Daily Duas & Manners",
    description: "Reciting protective supplications with their clear English meanings and reflection on thanking Allah.",
    duration: "1:50",
    surahOrTopic: "Sayyid al-Istighfar & Protection Duas"
  },
  {
    id: "perf-5",
    title: "Why I Love My Quran Class",
    category: "Student Reflections",
    studentName: "[STUDENT - AGE 10]",
    ageLevel: "Quran & Islamic Studies",
    description: "Sharing how learning online with Islah helped build confidence at school and love for Salah.",
    duration: "1:20",
    surahOrTopic: "Student Voice Reflection"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    type: "text",
    parentName: "Sister Amina K.",
    childInfo: "Mother of 2 students (Ages 7 and 10)",
    location: "London, United Kingdom",
    content: "Finding an online madrasa where teachers are both academically qualified and genuinely kind was difficult until we found Islah. My 7-year-old was shy and hesitant to read Arabic; now she eagerly sits at her desk before the lesson starts. The progress reports on WhatsApp give us complete peace of mind.",
    keyHighlight: "Patience and gentle encouragement transformed our daughter's confidence."
  },
  {
    id: "test-2",
    type: "video",
    parentName: "Brother Tariq M.",
    childInfo: "Father of a 9-year-old Hifz student",
    location: "Ontario, Canada",
    content: "The one-on-one attention is unmatched. The teacher focuses on correct Makharij from day one, not just rushing through pages. Having flexible scheduling that fits our school routine made all the difference for our family.",
    videoDuration: "1:35",
    keyHighlight: "True one-on-one attention without rushing pages."
  },
  {
    id: "test-3",
    type: "text",
    parentName: "Sister Fatima R.",
    childInfo: "Mother of a 6-year-old beginner",
    location: "Texas, United States",
    content: "As parents living in the West, establishing a strong Islamic foundation for our children is our highest priority. Islah International Academy provided that safe, respectful, and structured environment. The admission process over WhatsApp was refreshingly simple.",
    keyHighlight: "Safe, respectful environment that fits modern family schedules."
  },
  {
    id: "test-4",
    type: "video",
    parentName: "Brother Yusuf A.",
    childInfo: "Father of two students (Ages 8 and 12)",
    location: "Sydney, Australia",
    content: "We appreciate the balance between Qur'an memorisation and character building. The teacher doesn't just teach the words; he explains the moral lessons behind the verses in a way that resonates with our boys.",
    videoDuration: "2:05",
    keyHighlight: "Harmonious balance of Quran recitation and Islamic manners."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What age groups do you teach?",
    answer: "We primarily teach children from age 4 onwards, as well as teenagers and youth. Course difficulty and lesson pacing are carefully tailored to each student's developmental age."
  },
  {
    question: "Are classes one-to-one or group classes?",
    answer: "Our primary offering is dedicated 1-on-1 private classes to ensure your child receives the teacher's full, undivided attention. We also offer very small interactive sibling or peer groups (maximum 2 to 3 students) upon request."
  },
  {
    question: "How are classes conducted?",
    answer: "Classes are held live online through secure video meeting software. Students and teachers interact in real time with digital Quran copies, interactive phonetics boards, and live vocal feedback."
  },
  {
    question: "How long is each class?",
    answer: "Standard class durations are typically 30 minutes for young beginners (to maintain peak focus and enthusiasm) or 45 to 60 minutes for older children and intensive Hifz students."
  },
  {
    question: "What courses are available?",
    answer: "We offer Noorani Qaida, Quran Reading (Nazirah), Quran Memorisation (Hifz), Tajweed Mastery, Islamic Studies & Aqeedah, Daily Duas & Supplications, Salah & Manners (Adab), and Arabic Language Basics."
  },
  {
    question: "Can parents track their child's progress?",
    answer: "Yes, absolutely. Teachers provide regular feedback via WhatsApp after lessons, along with monthly progress overviews and audio clips of recitation milestones."
  },
  {
    question: "Do you offer trial classes?",
    answer: "Yes! We offer a completely free, no-obligation trial class. This allows your child to meet the teacher, experience the online classroom, and receive a friendly initial assessment."
  },
  {
    question: "What are the class timings?",
    answer: "Because we serve Muslim families globally (UK, Europe, USA, Canada, Australia, and the Middle East), our classes operate on flexible scheduling across multiple time zones throughout weekdays and weekends."
  },
  {
    question: "What happens after admission?",
    answer: "After you confirm your schedule and trial assessment, we pair your child with their designated Ustadh or Ustadha, provide your custom student timetable, and you begin your regular learning journey with direct WhatsApp teacher support."
  }
];
