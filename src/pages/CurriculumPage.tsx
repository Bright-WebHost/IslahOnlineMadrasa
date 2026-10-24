import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  Compass,
  GraduationCap,
  Heart,
  ShieldCheck,
  Award,
  Users,
  Check,
  ChevronRight,
  X,
  Calendar,
  Eye,
  Star
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { HeroBgPattern } from '../components/IslamicPattern';

interface CurriculumPageProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
}

const openDirectWhatsAppBooking = (courseName: string) => {
  const message = encodeURIComponent(
    `As-salamu alaykum Islah International Academy, I would like to enquire about ${courseName}.`
  );
  window.open(`https://wa.me/+919945002120?text=${message}`, '_blank');
};  

export const CurriculumPage: React.FC<CurriculumPageProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'all' | 'quran-aqeedah' | 'fiqh-sunnah' | 'language-adab'>('all');
  const [activeStage, setActiveStage] = useState<number>(0);
  const [selectedSubjectModal, setSelectedSubjectModal] = useState<any | null>(null);

  useEffect(() => {
    document.title = "Online Islamic Studies Curriculum for Kids | Islah Madrasa";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // 6 Core Disciplines (Minimal & scannable)
  const SUBJECTS = [
    {
      id: "quran",
      title: "Qur'an & Tajweed",
      arabicTitle: "تلاوة القرآن وحفظه",
      category: "quran-aqeedah",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=80",
      tagline: "Recite the Qur'an with accuracy and confidence.",
      summary: ["Students learn to read the Qur'an correctly, improve their pronunciation, and apply the essential rules of Tajweed. Beginning with Arabic reading foundations where necessary, they gradually develop fluency and accuracy in recitation.",
        "Our aim is to help every student improve their recitation and develop a lasting connection with the Book of Allah."
      ],
      tags: ["Makharij Precision", "Step-by-Step Tajweed", "Structured Hifz"],
      targetAge: "Ages 5 – 16",
      pace: "2 to 5 sessions / week",
      details: [
        "Phonetic letter exit points (Makharij) and articulation",
        "Essential Tajweed: Ghunnah, Ikhfa, Idgham, Qalqalah, and Madd",
        "Individualized Hifz goals with Muraja'ah (revision) checkpoints",
        "Reverent etiquette (Adab) of holding and reciting the Qur'an"
      ]
    },
    {
      id: "aqeedah",
      title: "Aqeedah (Islamic Creed)",
      arabicTitle: "العقيدة الإسلامية",
      category: "quran-aqeedah",
      image: "/assets/img/29.webp",
      tagline: "Build your faith upon authentic Islamic teachings.",
      summary: ["Students learn the fundamental beliefs of Islam based on the Qur'an and authentic Sunnah. They develop an understanding of Tawheed, the purpose of their creation, belief in Allah and the pillars of Iman, and the importance of worshipping Allah alone.",
        "Our aim is to nurture students with sound Islamic beliefs and a clear understanding of their relationship with their Creator."
      ],
      tags: ["Tawheed & Iman", "Names of Allah", "Guarding Faith"],
      targetAge: "Ages 7 – 16",
      pace: "Integrated weekly module",
      details: [
        "Tawheed in Lordship, Worship, and Beautiful Names (Asma wa Sifat)",
        "The Six Pillars of Iman explained through thoughtful reflection",
        "Fostering love, awe, and awareness of Allah (Taqwa & Muraqabah)",
        "Addressing contemporary questions and cultural confusion with gentle logic"
      ]
    },
    {
      id: "fiqh",
      title: "Fiqh (Islamic Jurisprudence)",
      arabicTitle: "الفقه الإسلامي العملي",
      category: "fiqh-sunnah",
      image: "/assets/img/30.webp",
      tagline: "Learn how to practise Islam in everyday life.",
      summary: ["Students learn the essential rulings of Islamic worship and daily practices. Topics include purification, Salah, fasting, Zakah, Hajj, and other age-appropriate matters.",
        "Through structured lessons, students understand not only what to do but also how to perform acts of worship correctly according to authentic Islamic teachings."
      ],
      tags: ["Independent Salah", "Wudu Mastery", "Halal Living"],
      targetAge: "Ages 7 – 16",
      pace: "Core practical module",
      details: [
        "Hands-on practice and teacher correction of Wudu and five daily prayers",
        "Understanding conditions (Shuroot), pillars (Arkan), and Sunnahs of Salah",
        "Practical Fiqh of fasting in Ramadan and the purpose of Zakat",
        "Discerning Halal vs Haram in food, daily dealings, and digital habits"
      ]
    },
    {
      id: "tafseer",
      title: "Tafseer (Understanding the Qur'an)",
      arabicTitle: "تفسير القرآن الكريم",
      category: "fiqh-sunnah",
      image: "/assets/img/31.webp",
      tagline: "Understand the message of Allah's Book.",
      summary: ["Students explore selected Surahs and verses of the Qur'an, learning their meanings, explanations, and practical lessons. Through age-appropriate Tafseer, they discover the guidance, wisdom, and reminders contained in Allah's words.",
        "Our aim is to help students move beyond recitation towards understanding, reflection, and applying Qur'anic guidance in their lives."
      ],
      tags: ["Prophetic Seerah", "40 Hadith Ethics", "Sahabah Heroes"],
      targetAge: "Ages 6 – 16",
      pace: "Weekly narrative session",
      details: [
        "Selected 40 Hadith of Imam Nawawi adapted with child-friendly lessons",
        "The Makkan and Madinan phases of the Seerah focusing on mercy and resilience",
        "Stories of the Sahabah (Companions) as timeless real-life heroes",
        "Extracting daily ethical conduct from the Sunnah for school and home life"
      ]
    },
    {
      id: "hadeeth",
      title: "Hadeeth (Teachings of Prophet Muhammad ﷺ)",
      arabicTitle: "الحديث (تعاليم النبي محمد ﷺ)",
      category: "language-adab",
      image: "/assets/img/32.webp",
      tagline: "Learn from the words and guidance of the Messenger of Allah ﷺ.",
      summary: ["Students study authentic Hadith that teach important Islamic beliefs, acts of worship, manners, and everyday conduct. They learn the meanings of these narrations and understand how to apply their lessons in daily life.",
        "Through the authentic Sunnah, students develop a deeper understanding of Islam and learn to follow the example of Prophet Muhammad ﷺ."
      ],
      tags: ["Qur'anic Vocabulary", "Conversational Drills", "Native Educators"],
      targetAge: "Ages 8 – 16",
      pace: "Conversational tracks",
      details: [
        "High-frequency Qur'anic vocabulary to make listening in Salah meaningful",
        "Everyday spoken dialogues: greetings, family, school, and feelings",
        "Sentence construction drills and interactive speaking games",
        "Authentic phonetics taught by native Arabic-speaking educators"
      ]
    },
    {
      id: "duas",
      title: "Authentic Duas and Adhkar",
      arabicTitle: "الأدعية والأذكار الصحيحة",
      category: "language-adab",
      image: "/assets/img/33.webp",
      tagline: "Remember Allah throughout the day.",
      summary: ["Students memorise authentic supplications and words of remembrance from the Qur'an and Sunnah. These include Duas for daily activities, Salah, seeking knowledge, protection, gratitude, and other important occasions.",
        "Students learn the Arabic text, meanings, and appropriate occasions for reciting these Duas, helping them develop the habit of remembering Allah in their everyday lives."
      ],
      tags: ["Masnoon Duas", "Etiquette (Adab)", "Habit Checklists"],
      targetAge: "All Ages (5 – 16)",
      pace: "Daily integration in each class",
      details: [
        "Essential Masnoon Duas: waking, eating, leaving home, travelling, and sleeping",
        "Morning and evening Adhkar for spiritual protection and peace of mind",
        "Prophetic manners: honoring parents, truthfulness, humility, and modesty",
        "Dua memorisation flashcards and practical weekly habit tracker"
      ]
    },
    {
      id: "arabic",
      title: "Arabic Language",
      arabicTitle: "اللغة العربية",
      category: "language-adab",
      image: "/assets/img/34.webp",
      tagline: "Connect with the language of the Qur'an",
      summary: ["Students develop their Arabic language skills through age-appropriate vocabulary, essential expressions, and simple conversations. As they progress, they build familiarity with Arabic words and structures that support their Islamic learning.",
        "Our aim is to make Arabic learning engaging and meaningful while helping students develop a stronger connection with the language of the Qur'an."
      ],
      tags: ["Masnoon Duas", "Etiquette (Adab)", "Habit Checklists"],
      targetAge: "All Ages (5 – 16)",
      pace: "Core subject",
      details: [
        "Interactive alphabet learning with correct pronunciation of each letter",
        "Reading short Arabic sentences and phrases relevant to Islamic topics",
        "Basic grammar concepts introduced through simple, clear examples",
        "Vocabulary building with everyday Arabic words used in the Qur'an and Sunnah"
      ]
    },
    {
      id: "character-development",
      title: "Character Development Workshops",
      arabicTitle: "تطوير الشخصية",
      category: "character-development",
      image: "/assets/img/35.webp",
      tagline: "Transform Islamic knowledge into everyday character.",
      summary: ["Islamic education should be reflected in a student's behaviour, choices, and interactions with others.",
        "Our character development workshops focus on helping students practise Islamic manners and values, including honesty, kindness, patience, humility, respect, responsibility, and self-discipline.",
        "Through interactive discussions, practical examples, and guided reflection, students learn how to apply Islamic teachings at home, in school, with friends, and in society.",
        "Our goal is to nurture students whose character reflects the beautiful teachings of Islam."
      ],
      tags: ["Masnoon Duas", "Etiquette (Adab)", "Habit Checklists"],
      targetAge: "All Ages (5 – 16)",
      pace: "Core subject",
      details: [
        "Interactive alphabet learning with correct pronunciation of each letter",
        "Reading short Arabic sentences and phrases relevant to Islamic topics",
        "Basic grammar concepts introduced through simple, clear examples",
        "Vocabulary building with everyday Arabic words used in the Qur'an and Sunnah"
      ]
    },
    {
      id: "activities",
      title: "Islamic Activities",
      arabicTitle: "الأنشطة الإسلامية",
      category: "activities",
      image: "/assets/img/36.webp",
      tagline: "Learn Islam through participation and practice.",
      summary: ["Our Islamic activities make learning enjoyable, engaging, and practical. Students participate in age-appropriate activities that reinforce what they learn in their lessons and encourage active participation.",
        "These may include Islamic projects, creative assignments, group activities, knowledge-based games, presentations, and practical learning tasks.",
        "Through these experiences, students strengthen their understanding, develop confidence, and enjoy learning about their religion."
      ],
      tags: ["Masnoon Duas", "Etiquette (Adab)", "Habit Checklists"],
      targetAge: "All Ages (5 – 16)",
      pace: "Core subject",
      details: [
        "Interactive alphabet learning with correct pronunciation of each letter",
        "Reading short Arabic sentences and phrases relevant to Islamic topics",
        "Basic grammar concepts introduced through simple, clear examples",
        "Vocabulary building with everyday Arabic words used in the Qur'an and Sunnah"
      ]
    },
  ];

  // Scrolling Gallery Items (Images Scrolling Section Animation)
  const SCROLLING_IMAGES_ROW_1 = [
    {
      title: "Tajweed Precision",
      arabic: "أحكام التجويد",
      tag: "Qur'an Lab",
      image: "/assets/img/book1.webp",
      caption: "Measured articulation, Ghunnah & Makharij rules"
    },
    {
      title: "Young Reciters",
      arabic: "جيل القرآن",
      tag: "Ages 5–7",
      image: "/assets/img/book2.webp",
      caption: "Gentle phonetics and Noorani Qaida foundational joy"
    },
    {
      title: "Sacred Classical Roots",
      arabic: "التراث الأصيل",
      tag: "Heritage",
      image: "/assets/img/book3.webp",
      caption: "Authentic text study rooted in sound scholarship"
    },
    {
      title: "Daily Masnoon Adhkar",
      arabic: "أذكار الصباح",
      tag: "Daily Duas",
      image: "/assets/img/book4.webp",
      caption: "Connecting waking, eating, and resting routines to Allah"
    },
    {
      title: "Prophetic Seerah",
      arabic: "السيرة العطرة",
      tag: "Role Models",
      image: "/assets/img/book5.webp",
      caption: "Living the mercy and resilience of Rasulullah ﷺ"
    },
    {
      title: "Qur'anic Arabic Phrasing",
      arabic: "لغة القرآن",
      tag: "Vocabulary",
      image: "/assets/img/book6.webp",
      caption: "Understanding high-frequency words recited in Salah"
    }
  ];

  // const SCROLLING_IMAGES_ROW_2 = [
  //   {
  //     title: "Practical Salah Clinic",
  //     arabic: "إقامة الصلاة",
  //     tag: "Fiqh Demo",
  //     image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
  //     caption: "Step-by-step posture check, Wudu, and mindful presence"
  //   },
  //   {
  //     title: "Aqeedah Foundations",
  //     arabic: "عقيدة التوحيد",
  //     tag: "Firm Belief",
  //     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  //     caption: "Anchoring the 6 Pillars of Iman against modern doubts"
  //   },
  //   {
  //     title: "Sanad-Certified Faculty",
  //     arabic: "شيوخ الإجازة",
  //     tag: "1-on-1 Care",
  //     image: "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=800&q=80",
  //     caption: "100% University degreed teachers with child empathy"
  //   },
  //   {
  //     title: "Living Noble Character",
  //     arabic: "مكارم الأخلاق",
  //     tag: "Akhlaaq",
  //     image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  //     caption: "Modesty, honoring parents, and truthfulness in life"
  //   },
  //   {
  //     title: "Structured Hifz Muraja'ah",
  //     arabic: "حفظ ومراجعة",
  //     tag: "Memorisation",
  //     image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  //     caption: "Steady pace with daily revision preventing memory loss"
  //   },
  //   {
  //     title: "Focused Micro-Classes",
  //     arabic: "بيئة هادئة",
  //     tag: "Online Sanctuary",
  //     image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  //     caption: "Private 1-on-1 lessons designed around family routines"
  //   }
  // ];

  


  const filteredSubjects = activeTab === 'all'
    ? SUBJECTS
    : SUBJECTS.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#151918] selection:bg-[#C9A45C]/25 ">
      
      {/* 1. HERO INNER BANNER */}
      <InnerBanner
        title="Structured Islamic Curriculum"
        breadcrumb="Curriculum"
        subtitle="A progressive, 6-pillar Islamic education crafted for modern diaspora children—balancing correct Qur'anic articulation with living Sunnah character."
      />

      


      {/* ============================================================== */}
      {/* 3. IMAGES SCROLLING SECTION ANIMATIONS (Continuous Marquee)     */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <HeroBgPattern opacity={0.02} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/6 border border-[#082D7B]/12 text-xs text-[#082D7B] font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Living Classroom Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=" text-2xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] tracking-tight mb-3"
          >
            A Sanctuary of Authentic Islamic Learning
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto"
          >
            Step into our study moments—from gentle Noorani Qaida phonetics to fluent Tajweed recitations and daily living Akhlaaq.
          </motion.p>
        </div>

        {/* Dual-Track Flowing Image Marquee */}
        <div className="space-y-4 sm:space-y-5 relative">
          
          {/* Subtle edge vignette fades */}
          <div className="absolute left-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Leftward Flow */}
          <div className="overflow-hidden flex">
            <div className="animate-marquee flex gap-4 sm:gap-5">
              {[...SCROLLING_IMAGES_ROW_1, ...SCROLLING_IMAGES_ROW_1].map((item, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="w-[270px] sm:w-[310px] h-[180px] sm:h-[195px] rounded-2xl overflow-hidden relative group shrink-0 shadow-sm hover:shadow-md border border-[#082D7B]/10 bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#061C48]/90 via-[#061C48]/30 to-transparent" /> */}
                  
                  {/* Arabic Badge Top Right */}
                  {/* <div className="absolute top-2.5 right-3 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[10.5px] font-arabic text-white">
                    {item.arabic}
                  </div> */}

                  {/* Caption Bottom */}
                  {/* <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#DFBA74] block mb-0.5">
                      {item.tag}
                    </span>
                    <h4 className=" text-sm sm:text-base font-bold leading-tight drop-shadow-xs">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div> */}
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
              <HeroBgPattern opacity={0.02} />
      
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
      
                  {/* Left Narrative / Title (Col 1: 4 cols) */}
                  <div className="lg:col-span-4 flex flex-col justify-center text-center sm:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EDF9] border border-[#CCD8F0] text-xs text-[#082D7B] font-semibold mb-6 shadow-xs w-fit mx-auto sm:mx-0"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#082D7B]" />
                      <span className="uppercase tracking-widest text-[10.5px] sm:text-[11px] font-bold text-[#082D7B]">
                        Our Curriculum
                      </span>
                    </motion.div>
      
                    <motion.h2
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="text-3xl sm:text-4xl lg:text-[36] xl:text-[44px] font-extrabold text-[#082D7B] leading-[1.26] tracking-tight mx-auto"
                    >
                      Knowledge That Inspires.
                      <span className="whitespace-nowrap"> Character</span><br />
                      <span className="whitespace-nowrap">That Reflects </span>
                      Islam
                    </motion.h2>
                  </div>
      
                  {/* Center Arched Image (Col 2: 4 cols) */}
                  <div className="lg:col-span-4 flex justify-center items-center py-4 lg:py-0">
                    <motion.div
                      initial={{ opacity: 0, y: 90 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="relative"
                    >
                      {/* Outer delicate gold oval/capsule frame */}
                      <div className="relative w-[265px] sm:w-[295px] lg:w-[315px] xl:w-[330px] h-[385px] sm:h-[435px] lg:h-[465px] xl:h-[485px] rounded-full p-2.5 sm:p-3 border-[1.5px] border-[#C5A059] bg-transparent shadow-xs transition-transform duration-500 hover:scale-[1.02]">
                        {/* Inner clipped image container */}
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#F0EDE6] shadow-sm relative group">
                          <img
                            src="/assets/img/home-about.webp"
                            alt="Muslim student learning enthusiastically in online Islamic workshop"
                            className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                            loading="eager"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
      
                  {/* Right Narrative Paragraphs (Col 3: 4 cols) */}
                  <div className="lg:col-span-4 flex flex-col justify-center text-center sm:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-6 text-[#475569] text-sm sm:text-base lg:text-[15.5px] xl:text-[16px] leading-relaxed"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        At Islah Online Madrasa, our curriculum goes beyond teaching Islamic knowledge. We aim to nurture students who understand their religion, practise Islam in their daily lives, and develop excellent character.
                      </motion.p>
      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        Our structured curriculum combines the study of the Qur'an and authentic Sunnah with essential Islamic sciences, Arabic language learning, and practical character development.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        Through engaging lessons, interactive activities, and guided learning, we help students build a strong Islamic foundation and develop a lifelong connection with their religion.
                      </motion.p>
                    </motion.div>
                  </div>
      
                </div>
              </div>
            </section>

      {/* ============================================================== */}
      {/* 4. THE 6 CORE DISCIPLINE PILLARS (Minimalist Bento Layout)       */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D7B]/6 border border-[#082D7B]/12 text-xs text-[#082D7B] font-semibold mb-3">
                <Layers className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Explore Our Subjects</span>
              </div>
              <h2 className=" text-2xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] tracking-tight">
                Six Pillars of Islamic Excellence
              </h2>
            </div>

            {/* Filter Tabs */}
            {/* <div className="flex items-center gap-1.5 p-1 bg-[#F5F2EB] rounded-full self-start md:self-auto overflow-x-auto scrollbar-none">
              {[
                { id: 'all', label: 'All Pillars' },
                { id: 'quran-aqeedah', label: "Qur'an & Creed" },
                { id: 'fiqh-sunnah', label: 'Fiqh & Seerah' },
                { id: 'language-adab', label: 'Arabic & Adab' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#082D7B] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#082D7B]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div> */}
          </div>

          {/* 6 Disciplines Grid (Sleek, minimal, scannable) */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence>
              {filteredSubjects.map((sub, idx) => (
                <motion.div
                  layout
                  key={sub.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedSubjectModal(sub)}
                  className="group relative rounded-2xl bg-[#FAF8F5] border border-[#082D7B]/10 hover:border-[#082D7B]/30 hover:shadow-xl transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Top Row: Arabic title + Serial */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-arabic text-[10px] sm:text-sm text-[#082D7B]/80 font-medium">
                        {sub.arabicTitle}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-500 border border-slate-200">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Subject Title & Tagline */}
                    <h3 className=" text-sm sm:text-xl font-bold text-[#082D7B] mb-1 group-hover:text-[#0568BD] transition-colors flex items-center justify-between">
                      <span>{sub.title}</span>
                      {/* <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#082D7B] group-hover:translate-x-1 transition-all" /> */}
                    </h3>
                    <p className="text-[11px] font-normal sm:font-medium text-[#C9A45C] mb-3">
                      {sub.tagline}
                    </p>

                    {/* Summary */}
                    {/* <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {sub.summary}
                    </p> */}

                    {/* Tag Pills */}
                    {/* <div className="flex flex-wrap gap-1.5 mb-5">
                      {sub.tags.map((t, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[10.5px] px-2.5 py-1 rounded-lg bg-white border border-[#082D7B]/8 text-[#082D7B]"
                        >
                          <Check className="w-2.5 h-2.5 text-[#C9A45C]" />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div> */}
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-3.5 border-t border-[#082D7B]/8 flex items-center justify-between text-[11px] text-slate-500">
                    {/* <span className="font-medium text-[#082D7B]">{sub.targetAge}</span> */}
                    <span className="text-xs font-semibold text-[#082D7B] group-hover:underline flex items-center gap-1">
                      Explore Syllabus <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      



      {/* ============================================================== */}
      {/* BEYOND THE CLASSROOM: COMPETITIONS & ENRICHMENT ACTIVITIES     */}
      {/* ============================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#061C48] overflow-hidden rounded-[50px]">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A45C]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A45C]/30 to-transparent" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#082D7B]/60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#C9A45C]/8 blur-3xl" />
          {/* Subtle geometric grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#C9A45C 1px, transparent 1px), linear-gradient(90deg, #C9A45C 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-18">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A45C]/15 border border-[#C9A45C]/30 text-[#C9A45C] font-semibold mb-5"
            >
              <Award className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Beyond the Classroom</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5"
            >
              Competitions, Challenges &{' '}
              <span className="text-[#C9A45C]">Enrichment Activities</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            >
              Competitions are more than just opportunities to win prizes. When planned well, they encourage
              students to revise their lessons, build confidence, improve their skills, and develop a healthy
              spirit of participation.
            </motion.p>
          </div>

          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-7 sm:p-9 mb-10 sm:mb-14 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C9A45C] to-[#C9A45C]/20 rounded-l-2xl" />
            <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[#C9A45C]/5 blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  Making Islamic Learning Engaging and Rewarding
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  At Islah Online Madrasa, we encourage students to put their knowledge into practice
                  through engaging competitions and enrichment activities.
                </p>
              </div>
              <div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  These experiences provide opportunities for students to demonstrate their learning,
                  challenge themselves, and develop confidence while strengthening their connection with Islam.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#C9A45C] text-xs font-bold uppercase tracking-widest mb-6 text-center"
          >
            Our competitions may include
          </motion.p>

          {/* Competition Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "Qur'an Recitation",
                description: "Demonstrate correct pronunciation, fluency, and Tajweed.",
                accent: "#C9A45C",
                num: "01"
              },
              {
                icon: <Star className="w-5 h-5" />,
                title: "Hifdh Competitions",
                description: "Showcase Qur'an memorisation and revision.",
                accent: "#7BB3FF",
                num: "02"
              },
              {
                icon: <GraduationCap className="w-5 h-5" />,
                title: "Islamic Quiz Competitions",
                description: "Test knowledge of Aqeedah, Fiqh, Seerah, Hadith, and other Islamic subjects.",
                accent: "#86EFAC",
                num: "03"
              },
              {
                icon: <Heart className="w-5 h-5" />,
                title: "Dua Memorisation",
                description: "Recite authentic Duas and demonstrate understanding of their meanings.",
                accent: "#F9A8D4",
                num: "04"
              },
              {
                icon: <MessageCircle className="w-5 h-5" />,
                title: "Islamic Presentations",
                description: "Share knowledge of Islamic topics and develop communication skills.",
                accent: "#A5F3FC",
                num: "05"
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "Creative Islamic Challenges",
                description: "Participate in age-appropriate activities that encourage learning, reflection, and creativity.",
                accent: "#C9A45C",
                num: "06"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="group relative rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 p-6 overflow-hidden cursor-default"
              >
                {/* Subtle corner glow on hover */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: `${item.accent}18` }}
                />

                {/* Number badge */}
                <span className="absolute top-4 right-4 text-[10px] font-mono font-bold text-white/20 group-hover:text-white/40 transition-colors">
                  {item.num}
                </span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${item.accent}20`, color: item.accent }}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <h4 className="text-white font-bold text-sm sm:text-base mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ backgroundColor: item.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. MODAL: DETAILED SYLLABUS INSPECTION                         */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedSubjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSubjectModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#082D7B]/10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-44 w-full shrink-0">
                <img
                  src={selectedSubjectModal.image}
                  alt={selectedSubjectModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061C48]/90 via-[#061C48]/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedSubjectModal(null)}
                  className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-5 right-5 text-white">
                  <div className="flex items-center justify-between text-xs mb-0.5">
                    {/* <span className="text-[#DFBA74] font-semibold">{selectedSubjectModal.targetAge}</span> */}
                    <span className="font-arabic text-[#DFBA74] font-normal text-sm">{selectedSubjectModal.arabicTitle}</span>
                  </div>
                  <h3 className=" text-2xl font-bold">
                    {selectedSubjectModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto">
                <div className="space-y-3 mb-4">
                  {(Array.isArray(selectedSubjectModal.summary)
                    ? selectedSubjectModal.summary
                    : [selectedSubjectModal.summary]
                  ).map((para: string, i: number) => (
                    <p key={i} className="text-xs text-slate-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* <h4 className="text-xs font-bold uppercase tracking-wider text-[#082D7B] mb-2.5">
                  Core Learning Highlights:
                </h4> */}
                {/* <div className="space-y-2 mb-6">
                  {selectedSubjectModal.details.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div> */}

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      const title = selectedSubjectModal.title;
                      setSelectedSubjectModal(null);
                      openDirectWhatsAppBooking(title);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#082D7B] hover:bg-[#051C4E] transition-all text-center cursor-pointer shadow-sm"
                  >
                    Enquire for this Subject
                  </button>
                  {/* <button
                    onClick={() => {
                      setSelectedSubjectModal(null);
                      onOpenWhatsApp();
                    }}
                    className="py-3 px-4 rounded-xl text-xs font-semibold text-[#082D7B] bg-[#082D7B]/8 hover:bg-[#082D7B]/15 transition-all text-center cursor-pointer"
                  >
                    Ask on WhatsApp
                  </button> */}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
