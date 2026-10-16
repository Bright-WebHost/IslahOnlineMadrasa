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
  content: string | string[];
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
  phoneNumber: "9945002120", // Placeholder for wa.me link
  emailDisplay: "admissions@islahonlinemadrasa.com",
  whatsappBaseUrl: "https://wa.me/9945002120",
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
    parentName: "Hadi and Hud",
    childInfo: "Mother of 2 students",
    location: "Saudi, Arabia",
    content: ["Alhamdulillah, my sons Hadi (Grade 2) and Hud (Grade 1) have learned so much about Islam, the stories of our Prophets, Arabic words that they now use in their daily lives, Surahs, and how to perform Salah. I am truly grateful to the parent who recommended Islah Online Madrasa to us.",
      "When our relatives heard my children reciting Surahs, they were so happy and impressed. They even asked which madrasa my children attend. In sha Allah, they may also enroll their children at Islah.",
      "I would also like to sincerely thank all the teachers for their patience, kindness, and dedication in teaching the children. May Allah bless the teachers and the entire Islah team and reward them abundantly for their efforts. Ameen."
    ],
    keyHighlight: "Patience and gentle encouragement transformed our daughter's confidence."
  },
  {
    id: "test-2",
    type: "text",
    parentName: "Saira",
    childInfo: "Father of a 9-year-old Hifz student",
    location: "Saudi Arabia",
    content: ["Alhamdulillah, we are very happy with Islah Online Madrasa. After years of searching for the right madrasa, we are truly grateful to have found one that meets our expectations. The limited number of students in each class ensures that every child receives individual attention. We also appreciate the way the teacher for the younger grades teaches, with a loud, clear, and easily understandable manner of speaking.",
      "Jazakillahu khairan for all the effort and dedication you put into nurturing our children’s Islamic knowledge and values. May Allah bless the entire team and make Islah Online Madrasa a source of sadaqah jariyah. Ameen. 🤍"
    ],
    videoDuration: "1:35",
    keyHighlight: "True one-on-one attention without rushing pages."
  },
  {
    id: "test-3",
    type: "text",
    parentName: "Harzan, Zahran",
    childInfo: "Mother of a 6-year-old beginner",
    location: "India",
    content: ["Alhamdulillah, my two children have learned so much through Islah Online Madrasa. They have learned many duas, Surahs, and important Islamic teachings. I am especially happy to see them learning and memorizing Surahs and growing in their Islamic knowledge.",
      "You are a wonderful teacher who teaches our children with so much love, patience, and care, making their learning experience enjoyable and meaningful.",
      "Jazakillahu khairan for all your efforts and dedication in teaching our children and helping them learn and understand Islam. May Allah bless you, reward you abundantly for your hard work, and make your efforts a source of sadaqah jariyah. Ameen. 🤲❤️"
    ],
    keyHighlight: "Safe, respectful environment that fits modern family schedules."
  },
  {
    id: "test-4",
    type: "text",
    parentName: "Saad, Zayd",
    childInfo: "Father of two students (Ages 8 and 12)",
    location: "Qatar",
    content: "Alhamdulillah, I am extremely pleased with Islah Online madrasa. One of the biggest challenges with online classes is keeping children focused and engaged. However, the teachers here do an excellent job of capturing the children’s attention through fun, interactive, and engaging teaching methods. They make learning enjoyable while ensuring that children remain interested and actively participate in the lessons. I truly appreciate the teachers’ patience, dedication, and creativity in making Quranic and Islamic education a positive experience for kids. I would wholeheartedly recommend this online madrasa to any parent looking for quality Islamic education for their children.  May Allah bless them and reward them abundantly for their sincere efforts. Ameen. 🤍",
    videoDuration: "2:05",
    keyHighlight: "Harmonious balance of Quran recitation and Islamic manners."
  },
  {
    id: "test-5",
    type: "text",
    parentName: "Eira",
    childInfo: "Father of two students (Ages 8 and 12)",
    location: "Dubai",
    content: ["Alhamdulillah, this is my daughter's 5th year with Islamic Online Madrasa, and our experience throughout these years has been truly wonderful. We have seen her grow in her Quran recitation, Islamic knowledge, and understanding of our deen. The teachers have always been patient, dedicated, and encouraging, making learning enjoyable and comfortable for her. What we appreciate most is the consistency and care shown towards every child. We are very grateful to Islamic Online Madrasa for being a beautiful part of our daughter's learning journey over the past five years.🤍"
    ],
    keyHighlight: ""
  },
  {
    id: "test-6",
    type: "text",
    parentName: "Anam, Aizah",
    childInfo: "",
    location: "Dubai",
    content: ["Alhamdulillah, my kids have been studying with the Islamic Online Madrasa for the past 5 years, and it has been a wonderful journey.🌸",
      "They have gained so much knowledge in Quran and Islamic studies, and we truly appreciate the dedication and patience of all the teachers. It has been a great platform for our children to learn and grow in their deen.",
      "Jazakumullahu khairan for everything you do."
    ],
    keyHighlight: ""
  },
  {
    id: "test-7",
    type: "text",
    parentName: "Maher",
    childInfo: "",
    location: "Dubai",
    content: ["Alhamdulillah my two kids are studying at Islamic online madrasa. Son starter his madrasa life from Islamic online madrasa in 2020 since then never got to worry about his Deeni education Alhamdulillah.",
      "Every year he is growing to be a better person in every possible way.",
      "He gets to learn new everyday and have memorized many Suhras. Teachers are always really helpful and patient with kids also they make sure each and every kid in the class is taken care of about their studies",
      "We parents are also at peace as they are getting the right Islamic education regularly Alhamdulillah."
    ],
    keyHighlight: ""
  },
  {
    id: "test-8",
    type: "text",
    parentName: "Saira",
    childInfo: "",
    location: "Saudi Arabia",
    content: ["Alhamdulillah my two kids are studying at Islamic online madrasa. Son starter his madrasa life from Islamic online madrasa in 2020 since then never got to worry about his Deeni education Alhamdulillah.",
      "Every year he is growing to be a better person in every possible way.",
      "He gets to learn new everyday and have memorized many Suhras. Teachers are always really helpful and patient with kids also they make sure each and every kid in the class is taken care of about their studies"
    ],
    keyHighlight: ""
  },
  {
    id: "test-9",
    type: "text",
    parentName: "Zaroon",
    childInfo: "",
    location: "Dubai",
    content: ["I have enrolled my son in IOM since 4yrs and Alhamdulillah we are very satisfied by the level of teaching. My son has been improved a lot in Quran. Barakallahu feekum and the teachers are outstanding, they monitor the kids individually.classes are held on time. Reply to our concerns immediately.. We would like to continue in IOM In Sha Allah. Highly recommended online class."
    ],
    keyHighlight: ""
  },
  {
    id: "test-10",
    type: "text",
    parentName: "Latheen",
    childInfo: "",
    location: "India",
    content: ["My child has completed 2years with IOM and the experience has only been pleasant. The teachers have been both kind and strict when they needed to be.",
"The children nowadays get pampered so much in school, I felt the need to have a madrassa which had a similar environment. I wanted my child to love to learn about Islam and the Quran.",
"Alhamdulillah my daughter has been enthusiastic about learning the Quran, not disappointing her teachers and looks forward to sitting for madrassa. The class is made fun with all the small games and the stories of the prophets that are included in the classes."

    ],
    keyHighlight: ""
  },
  {
    id: "test-11",
    type: "text",
    parentName: "Mohammad Ayaan, Ibrahim Amaan, Aamina Ayat Shameeyulla",
    childInfo: "",
    location: "Saudi Arabia",
    content: ["Alhumdulillah our 5-year journey with Islamic Online Madrasa has been an outstanding experience. Over these five years, my child has made wonderful progress, significantly improving both his Tajweed and his overall Islamic knowledge. The brilliant teaching methods and the dedicated teachers have been an immense help to our family. They make sure every single lesson is crystal clear, helping the students truly grasp the concepts. We deeply appreciate how approachable the teachers are, as they always take the time to answer any questions and clear the children's doubts with great patience. Furthermore, there is excellent interaction and coordination between parents and teachers, with frequent meetings that keep us closely involved in our child's learning journey."
    ],
    keyHighlight: ""
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
