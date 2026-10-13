import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Trophy,
  Award,
  Play,
  Volume2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Star,
  Quote,
  Users,
  ShieldCheck,
  Heart,
  Video,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { HeroBgPattern } from '../components/IslamicPattern';
import { useNavigate } from '../router';

interface StudentAchievementsPageProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
  onSelectPerformance?: (item: any) => void;
  onSelectTestimonial?: (item: any) => void;
}

export const StudentAchievementsPage: React.FC<StudentAchievementsPageProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
  onSelectPerformance,
  onSelectTestimonial,
}) => {
  const navigate = useNavigate();
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const [hoveredTestimonialIndex, setHoveredTestimonialIndex] = useState<number | null>(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState<number | null>(1);

  useEffect(() => {
    document.title = "Student Qur'an Recitation & Islamic Learning Achievements | Islah";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const RECITATIONS = [
    {
      id: "rec-1",
      studentName: "Zayd M.",
      age: "Age 8 • Dubai, UAE",
      surah: "Surah Al-Mulk (Verses 1–12)",
      level: "Quran with Tajweed",
      duration: "2:45",
      note: "Flawless Madd (elongation) and accurate Makhraj of letters Qaf and 'Ayn.",
      category: "Recitation"
    },
    {
      id: "rec-2",
      studentName: "Maryam A.",
      age: "Age 10 • Riyadh, Saudi Arabia",
      surah: "Surah An-Naba' (Complete)",
      level: "Juz Amma Hifz",
      duration: "3:10",
      note: "Steady rhythm, beautiful Tarteel, and natural pause points (Waqf).",
      category: "Hifz"
    },
    {
      id: "rec-3",
      studentName: "Hamza K.",
      age: "Age 6 • London, UK",
      surah: "Surah Al-Balad & Ash-Shams",
      level: "Noorani Qaida Graduate",
      duration: "1:55",
      note: "Progressed from Arabic alphabet recognition to fluent recitation in 7 months.",
      category: "Early Reader"
    },
    {
      id: "rec-4",
      studentName: "Amina S.",
      age: "Age 12 • Doha, Qatar",
      surah: "Surah Ar-Rahman (Verses 1–30)",
      level: "Advanced Tajweed",
      duration: "3:40",
      note: "Exquisite Ghunnah and Ikhfa control with soulful recitation tone.",
      category: "Tajweed"
    }
  ];

  const PRESENTATIONS = [
    {
      id: "pres-1",
      title: "Lessons From the Migration (Hijrah)",
      student: "Omar T. (Age 11 • Abu Dhabi)",
      topic: "Seerah Summary",
      desc: "Delivered a vivid presentation on the loyalty of Abu Bakr (RA) and the lessons of trust in Allah during difficult times.",
      badge: "Seerah Presentation"
    },
    {
      id: "pres-2",
      title: "Hadith: 'Actions Are By Intentions'",
      student: "Fatima R. (Age 9 • Jeddah)",
      topic: "Hadith Explanation",
      desc: "Explained the profound wisdom of Hadith 1 of Nawawi with relatable examples on doing chores to please Allah and parents.",
      badge: "Hadith Showcase"
    },
    {
      id: "pres-3",
      title: "The Five Pillars of Islam in Daily Life",
      student: "Ibrahim H. (Age 7 • Kuwait)",
      topic: "Islamic Studies Topic",
      desc: "An illustrated talk demonstrating what each pillar represents and why Salah acts as our direct conversation with Allah.",
      badge: "Core Beliefs"
    }
  ];

  const DUAS_ARABIC = [
    {
      title: "Masnoon Duas of the Day",
      student: "Ayaan & Bilal (Ages 7 & 9 • Sharjah)",
      format: "Dua Recitation & Meaning",
      desc: "Reciting the Duas before sleeping, waking up, leaving the house, and after meals with clear English translations and pronunciation.",
      badge: "Dua Mastery"
    },
    {
      title: "At the Arabic Market: Spoken Dialogue",
      student: "Sarah & Layla (Ages 11 • Bahrain)",
      format: "Conversational Arabic",
      desc: "An unscripted conversational performance in Fusha Arabic between customer and shopkeeper, demonstrating confident conversational fluency.",
      badge: "Spoken Arabic"
    }
  ];

  const MILESTONE_AWARDS = [
    {
      title: "Noorani Qaida Completion",
      student: "Yusuf N. (Age 6 • Muscat)",
      achievement: "Graduated to reading directly from the Mushaf after mastering all phonetic rules.",
      award: "Gold Certificate of Completion"
    },
    {
      title: "Juz 30 (Juz Amma) Hifz Milestone",
      student: "Hafsah B. (Age 10 • UK)",
      achievement: "Memorised all 37 Surahs of Juz Amma with verified Tajweed examination.",
      award: "Hifz Milestone Plaque"
    },
    {
      title: "100-Day Consistent Attendance & Akhlaaq",
      student: "Rayyan M. (Age 8 • Dammam)",
      achievement: "Never missed a single online class, always punctual with camera on and glowing Adab.",
      award: "Exemplary Student Award"
    },
    {
      title: "Prophetic Manners in Practice",
      student: "Zahra K. (Age 12 • Canada)",
      achievement: "Honored for daily kindness journal tracking and outstanding empathy towards peers.",
      award: "Akhlaaq Excellence"
    }
  ];

  const TESTIMONIAL_CARD_CONFIGS = [
    {
      bg: '#0D2D72', // Deep navy
      starsColor: '#C9A45C', // Gold
      accentPill: 'bg-white/10 text-white/90 border border-white/15',
      rotation: -6,
      mobileRotation: -2,
      yOffset: 14,
    },
    {
      bg: '#0B7EE2', // Vibrant blue
      starsColor: '#061838', // Dark stars
      accentPill: 'bg-black/15 text-white/95 border border-black/10',
      rotation: 4,
      mobileRotation: -5,
      yOffset: -10,
    },
    {
      bg: '#0D2D72', // Deep navy
      starsColor: '#C9A45C',
      accentPill: 'bg-white/10 text-white/90 border border-white/15',
      rotation: -3,
      mobileRotation: 4,
      yOffset: 8,
    },
    {
      bg: '#0B7EE2', // Vibrant blue
      starsColor: '#061838',
      accentPill: 'bg-black/15 text-white/95 border border-black/10',
      rotation: 5,
      mobileRotation: -4,
      yOffset: -8,
    },
    {
      bg: '#0D2D72', // Deep navy
      starsColor: '#C9A45C',
      accentPill: 'bg-white/10 text-white/90 border border-white/15',
      rotation: -4,
      mobileRotation: 3,
      yOffset: 12,
    },
  ];

  const TESTIMONIALS = [
    {
      parent: "Umm Zayd",
      location: "Dubai, United Arab Emirates",
      quote:
        "My son used to dread weekend Arabic classes. Since joining Islah, he reminds me 15 minutes before class starts. His teacher Ustadh Ahmad is remarkably gentle, patient, and knowledgeable.",
      highlight: "Enthusiastic Learner"
    },
    {
      parent: "Dr. Tariq Al-Mansoor",
      location: "Riyadh, Saudi Arabia",
      quote:
        "The structured curriculum is what won us over. Every month we receive an audio report and teacher comments. Seeing our 8-year-old recite Surah Al-Mulk with proper Makharij brings tears of gratitude.",
      highlight: "Structured Monthly Reports"
    },
    {
      parent: "Sister Amina & Br. Farooq",
      location: "London, United Kingdom",
      quote:
        "Living in the West, finding authentic Islamic education with teachers who communicate warmly in English was our greatest worry. Islah has been an absolute blessing for both of our daughters.",
      highlight: "Strong Identity in the West"
    },
    {
      parent: "Sister Fatima R.",
      location: "Texas, United States",
      quote:
        "Establishing a solid Quranic foundation early was essential for us. Islah provided that safe, respectful, and structured environment with true one-on-one attention without rushing pages.",
      highlight: "Safe & Respectful"
    },
    {
      parent: "Brother Yusuf A.",
      location: "Sydney, Australia",
      quote:
        "We appreciate the balance between Qur'an memorisation and character building. The teacher doesn't just teach the words; he explains the moral lessons behind the verses with sincere care.",
      highlight: "Quran & Character Harmony"
    }
  ];

  const toggleAudio = (id: string) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#151918]">

      {/* 1. HERO INNER BANNER */}
      <InnerBanner
        title="Inspiring Student Achievements"
        breadcrumb="Student Achievements"
        subtitle="Celebrating the dedication, beautiful recitations, and inspiring character transformations of our young learners worldwide."
      />

      {/* 2. SECTION 1: BUILDING CONFIDENCE & RESPECT */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center"
          >
            {/* Visual Display Composition */}
            <div className="relative w-full max-w-[960px] mx-auto">
              <div className="flex items-start">

                {/* Left Area: Top Header + Rounded Blue Card */}
                <div className="flex-1 min-w-0 pr-2 sm:pr-3 md:pr-5">
                  {/* Top Outline Header: BUILDING CONFIDENCE */}
                  <div
                    aria-hidden="true"
                    className="select-none pointer-events-none "
                  >
                    <span
                      className="font-sans font-black tracking-tight uppercase whitespace-nowrap text-[28px] xs:text-[34px] sm:text-[50px] md:text-[64px] lg:text-[74px] leading-none block"
                      style={{
                        WebkitTextStroke: '1.6px #082D7B',
                        color: 'transparent',
                      }}
                    >
                      BUILDING CONFIDENCE
                    </span>
                  </div>

                  {/* Central Rounded Blue Study Photo Card */}
                  <div className="relative z-10 w-full aspect-[834/336] rounded-[18px] xs:rounded-[24px] sm:rounded-[32px] md:rounded-[36px] overflow-hidden shadow-xs ">
                    <img
                      src="/assets/img/confidence-blue-card.png"
                      alt="Islah International Academy Study Desk with Laptop, Books, and Graduation Cap"
                      className="w-full h-full object-cover select-none"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Right Column: & (aligned with top header) + RESPECT (alongside card) */}
                <div
                  aria-hidden="true"
                  className="flex flex-col items-center select-none pointer-events-none shrink-0"
                >
                  <span
                    className="font-sans font-black uppercase text-[28px] xs:text-[34px] sm:text-[50px] md:text-[64px] lg:text-[94px] leading-none select-none"
                    style={{
                      WebkitTextStroke: '1.6px #082D7B',
                      color: 'transparent',
                    }}
                  >
                    &
                  </span>

                  <span
                    className="font-sans font-black uppercase tracking-[0.04em] sm:tracking-[0.08em] text-[23px] xs:text-[28px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-none [writing-mode:vertical-rl] select-none text-center mt-2.5 sm:mt-4 md:mt-5"
                    style={{
                      WebkitTextStroke: '1.6px #082D7B',
                      color: 'transparent',
                    }}
                  >
                    RESPECT
                  </span>
                </div>

              </div>
            </div>

            {/* Bottom Statement Narrative in Live Typography */}
            <p className="mt-2 sm:mt-3 md:mt-3 text-center text-[#082D7B] font-medium text-xs xs:text-sm sm:text-[15.5px] md:text-[16.5px] leading-relaxed max-w-[900px] mx-auto px-4 font-sans">
              At Islah International Academy, achievements are not measured simply by trophies or test percentages. We celebrate every child who overcomes a stutter to articulate a difficult Arabic letter, every student who memorises their first Surah, and every young Muslim who begins praying five times daily with devotion.
            </p>

          </motion.div>
        </div>
      </section>

      {/* 3. SECTION 2: QUR'AN RECITATION HIGHLIGHTS */}
      {/* <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Volume2 className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Vocal Excellence</span>
            </div>
            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Qur'an Recitation & Tajweed Performances
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Listen to the measured, melodious recitations of our young learners practicing correct Tajweed under the guidance of certified teachers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RECITATIONS.map((rec) => {
              const isPlaying = playingAudioId === rec.id;
              return (
                <div
                  key={rec.id}
                  className="rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#082D7B]/10 text-[#082D7B] font-bold">
                        {rec.category}
                      </span>
                      <span className="text-xs text-[#C9A45C] font-semibold">
                        {rec.level}
                      </span>
                    </div>

                    <h3 className=" text-xl sm:text-2xl font-bold text-[#082D7B] mb-1">
                      {rec.surah}
                    </h3>

                    <div className="text-xs text-[#64748B] mb-4">
                      {rec.studentName} • {rec.age}
                    </div>

                    <p className="text-xs text-[#475569] leading-relaxed mb-6 italic bg-white p-3 rounded-xl border border-[#082D7B]/5">
                      Teacher Feedback: "{rec.note}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#082D7B]/10 flex items-center justify-between gap-4">
                    <button
                      onClick={() => toggleAudio(rec.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${isPlaying
                          ? 'bg-[#C9A45C] text-[#082D7B]'
                          : 'bg-[#082D7B] text-white hover:bg-[#062360]'
                        }`}
                    >
                      {isPlaying ? (
                        <>
                          <Volume2 className="w-4 h-4 animate-pulse" />
                          <span>Playing Audio...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>Listen Sample ({rec.duration})</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onOpenTrialModal(rec.surah)}
                      className="text-xs font-semibold text-[#082D7B] hover:text-[#C9A45C] transition-colors cursor-pointer"
                    >
                      Book Trial For This Level →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section> */}

      {/* 4. SECTION 3: ISLAMIC KNOWLEDGE PRESENTATIONS */}
      {/* <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Scholarly Expression</span>
            </div>
            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Islamic Knowledge Presentations
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Students demonstrate comprehension of Seerah, Hadith, and Islamic topics through structured oral presentations and visual slides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRESENTATIONS.map((pres) => (
              <div
                key={pres.id}
                className="p-8 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#082D7B]/10 text-[#082D7B] uppercase mb-4 inline-block">
                    {pres.badge}
                  </span>

                  <h3 className=" text-xl font-bold text-[#082D7B] mb-2">
                    {pres.title}
                  </h3>

                  <div className="text-xs text-[#C9A45C] font-semibold mb-4">
                    {pres.student}
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {pres.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#082D7B]/10 text-[11px] text-[#64748B] flex items-center justify-between">
                  <span>Topic: {pres.topic}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#082D7B]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* 5. SECTION 4: DUAS & ARABIC CONVERSATION */}
      {/* <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Daily Adab & Language</span>
            </div>
            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Duas & Spoken Arabic Showcases
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Showcasing practical fluency: everyday supplications and spontaneous dialogues between young students and native Arabic teachers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DUAS_ARABIC.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#082D7B]/10 text-[#082D7B] uppercase">
                      {item.badge}
                    </span>
                    <span className="text-xs text-[#C9A45C] font-semibold">{item.format}</span>
                  </div>

                  <h3 className=" text-2xl font-bold text-[#082D7B] mb-2">
                    {item.title}
                  </h3>

                  <div className="text-xs text-[#64748B] mb-4">
                    {item.student}
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#082D7B]/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#082D7B]">Parental Feedback Score: 5.0 / 5.0</span>
                  <div className="flex items-center gap-1 text-[#C9A45C]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* 6. SECTION 5: STUDENT HIGHLIGHTS & AWARDS */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Certificates & Honors</span>
            </div>
            <h2 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Student Highlights & Milestone Awards
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Every milestone reached represents months of dedication, patient teacher guidance, and loving parental encouragement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONE_AWARDS.map((aw, idx) => {
              const themes = [
                {
                  hoverBg: "hover:bg-gradient-to-br hover:from-[#082D7B] hover:via-[#0D2D72] hover:to-[#0568BD]",
                  hoverBorder: "hover:border-[#C9A45C]/50",
                  hoverShadow: "hover:shadow-[0_20px_45px_rgba(8,45,123,0.3)]",
                  badgeHoverBg: "group-hover:bg-[#C9A45C]/25 group-hover:text-[#F8E7C0]",
                  iconHoverBg: "group-hover:bg-[#C9A45C] group-hover:text-[#082D7B]",
                },
                {
                  hoverBg: "hover:bg-gradient-to-br hover:from-[#0B3B82] hover:via-[#0950A0] hover:to-[#0E70C7]",
                  hoverBorder: "hover:border-[#DFBA74]/50",
                  hoverShadow: "hover:shadow-[0_20px_45px_rgba(11,59,130,0.3)]",
                  badgeHoverBg: "group-hover:bg-white/20 group-hover:text-white",
                  iconHoverBg: "group-hover:bg-[#DFBA74] group-hover:text-[#0B3B82]",
                },
                {
                  hoverBg: "hover:bg-gradient-to-br hover:from-[#072566] hover:via-[#0B347E] hover:to-[#174EA6]",
                  hoverBorder: "hover:border-[#C9A45C]/50",
                  hoverShadow: "hover:shadow-[0_20px_45px_rgba(7,37,102,0.3)]",
                  badgeHoverBg: "group-hover:bg-[#C9A45C]/25 group-hover:text-[#F8E7C0]",
                  iconHoverBg: "group-hover:bg-[#C9A45C] group-hover:text-[#072566]",
                },
                {
                  hoverBg: "hover:bg-gradient-to-br hover:from-[#092B6B] hover:via-[#0D4494] hover:to-[#1B68C2]",
                  hoverBorder: "hover:border-[#DFBA74]/50",
                  hoverShadow: "hover:shadow-[0_20px_45px_rgba(9,43,107,0.3)]",
                  badgeHoverBg: "group-hover:bg-white/20 group-hover:text-white",
                  iconHoverBg: "group-hover:bg-[#DFBA74] group-hover:text-[#092B6B]",
                },
              ];
              const theme = themes[idx % themes.length];

              return (
                <div
                  key={idx}
                  className={`group relative p-6 sm:p-7 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden ${theme.hoverBg} ${theme.hoverBorder} ${theme.hoverShadow}`}
                >
                  {/* Subtle top glow orb on hover */}
                  <div className="absolute -top-14 -right-14 w-28 h-28 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className={`w-11 h-11 rounded-2xl bg-[#C9A45C]/15 text-[#C9A45C] flex items-center justify-center mb-5 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 ${theme.iconHoverBg}`}>
                      <Trophy className="w-5 h-5 transition-transform duration-500" />
                    </div>

                    <span className={`inline-block text-[10px] text-[#082D7B] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#082D7B]/8 mb-2.5 transition-colors duration-300 ${theme.badgeHoverBg}`}>
                      {aw.award}
                    </span>

                    <h3 className="text-lg font-bold text-[#082D7B] mb-1.5 transition-colors duration-300 group-hover:text-white leading-snug">
                      {aw.title}
                    </h3>

                    <div className="text-xs text-[#64748B] mb-3.5 transition-colors duration-300 group-hover:text-white/80 font-medium">
                      {aw.student}
                    </div>

                    <p className="text-xs text-[#475569] leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                      {aw.achievement}
                    </p>
                  </div>

                  {/* Animated Bottom Gold Accent Line */}
                  <div className="relative z-10 pt-4 mt-4 border-t border-[#082D7B]/10 group-hover:border-white/20 transition-colors duration-300">
                    <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-[#C9A45C] via-[#F3D58C] to-transparent rounded-full transition-all duration-500 ease-out" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. SECTION 6: PARENT TESTIMONIALS (Homepage Third Section Type - Overlapping Fanned Card Deck) */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[#F9F6EF] overflow-hidden border-t border-[#082D7B]/10">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 lg:mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold mb-1">
              Verified Parent Reflections
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#082D7B] font-bold tracking-tight">
              Real Experiences From Families Worldwide
            </h2>
            {/* <p className="font-sans text-xs sm:text-sm text-[#475569] mt-2.5 leading-relaxed">
              Read how Islah International Academy is helping families across the GCC, UK, US, and beyond nurture strong faith at home.
            </p> */}
          </div>

          {/* Mobile View: Vertical Cascading Overlapping Fanned Card Stack */}
          <div className="lg:hidden w-full relative px-2 py-4">
            <div className="relative max-w-[340px] xs:max-w-[355px] mx-auto flex flex-col items-center">
              {TESTIMONIALS.map((t, index) => {
                const config = TESTIMONIAL_CARD_CONFIGS[index % TESTIMONIAL_CARD_CONFIGS.length];
                const isActive = activeTestimonialIndex === index;
                const baseZ = 40 - index;
                const zIndex = isActive ? 50 : baseZ;

                return (
                  <motion.div
                    key={t.parent}
                    initial={{ opacity: 0, y: 35, rotate: config.mobileRotation }}
                    whileInView={{ opacity: 1, y: 0, rotate: config.mobileRotation }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    onClick={() => setActiveTestimonialIndex(activeTestimonialIndex === index ? null : index)}
                    style={{
                      backgroundColor: config.bg,
                      zIndex,
                      rotate: isActive ? 0 : config.mobileRotation,
                    }}
                    className={`relative w-full rounded-[26px] p-5 sm:p-6 text-white cursor-pointer transition-all duration-300 shadow-[0_14px_36px_rgba(0,0,0,0.28)] border border-white/15 select-none ${index > 0 ? '-mt-14 xs:-mt-16' : ''
                      } ${isActive ? 'scale-[1.03] ring-2 ring-white/40 shadow-[0_22px_50px_rgba(0,0,0,0.45)]' : 'hover:scale-[1.01]'}`}
                  >
                    {/* Top Header: 5 Stars + Brand Pill with Chevron */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className="w-3.5 h-3.5 fill-current"
                            style={{ color: config.starsColor }}
                          />
                        ))}
                      </div>

                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm ${config.accentPill}`}
                      >
                        <span>ISLAH PARENT</span>
                        <div className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                          <ChevronRight className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>
                    </div>

                    {/* Middle Content: Quote Description */}
                    <div className="my-auto py-1.5">
                      <p className="font-sans text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Bottom Footer: Author & Location */}
                    <div className="pt-3 mt-2 border-t border-white/15 flex items-center justify-between">
                      <div>
                        <h4 className="font-sans text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                          {t.parent}
                        </h4>
                        <p className="font-sans text-[11px] text-white/70 mt-0.5">
                          {t.location}
                        </p>
                      </div>
                      <span className="text-[10px] font-semibold text-[#C9A45C] bg-white/10 px-2 py-0.5 rounded-md border border-white/10">
                        {t.highlight}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop View: Overlapping Horizontal Fanned Card Deck */}
          <div className="hidden lg:flex w-full justify-center overflow-visible py-10 px-6">
            <div className="relative flex items-center justify-center -space-x-16 xl:-space-x-20">
              {TESTIMONIALS.map((t, index) => {
                const config = TESTIMONIAL_CARD_CONFIGS[index % TESTIMONIAL_CARD_CONFIGS.length];
                const isHovered = hoveredTestimonialIndex === index;
                const hasHover = hoveredTestimonialIndex !== null;

                return (
                  <motion.div
                    key={t.parent}
                    initial={{ x: -280, opacity: 0, rotate: config.rotation - 12 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      rotate: config.rotation,
                      y: config.yOffset,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.75,
                      delay: index * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: config.yOffset - 28,
                      rotate: 0,
                      zIndex: 50,
                      transition: { type: 'spring', stiffness: 350, damping: 25 },
                    }}
                    onHoverStart={() => setHoveredTestimonialIndex(index)}
                    onHoverEnd={() => setHoveredTestimonialIndex(null)}
                    style={{
                      backgroundColor: config.bg,
                      transformOrigin: 'bottom center',
                      zIndex: isHovered ? 50 : index + 10,
                    }}
                    className={`relative w-[255px] xl:w-[270px] h-[340px] rounded-3xl p-6 lg:p-7 flex flex-col justify-between text-white cursor-pointer transition-shadow duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.45)] border border-white/10 ${hasHover && !isHovered ? 'opacity-90' : 'opacity-100'
                      }`}
                  >
                    {/* Top Header: 5 Stars + Brand Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        {[...Array(5)].map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className="w-3.5 h-3.5 fill-current"
                            style={{ color: config.starsColor }}
                          />
                        ))}
                      </div>

                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm ${config.accentPill}`}
                      >
                        <span>ISLAH</span>
                        <div className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                          <ChevronRight className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>
                    </div>

                    {/* Middle Content: Parent Quote */}
                    <div className="my-auto py-2">
                      <Quote className="w-6 h-6 text-white/30 mb-2" />
                      <p className="font-sans text-xs sm:text-[12.5px] xl:text-[13px] text-white/90 leading-relaxed font-normal line-clamp-6">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Bottom Footer Metadata */}
                    <div className="pt-3 border-t border-white/15 flex flex-col gap-1">
                      <div className="flex items-center justify-between text-[11px] text-white">
                        <span className="font-bold truncate mr-2">
                          {t.parent}
                        </span>
                        <span className="text-[10px] text-[#C9A45C] font-semibold shrink-0">
                          {t.highlight}
                        </span>
                      </div>
                      <span className="text-[10px] text-white/60 truncate">
                        {t.location}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 8. MAJOR CTA: START YOUR CHILD'S LEARNING JOURNEY */}
      {/* <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#082D7B] via-[#0D2D72] to-[#0568BD] text-white text-center overflow-hidden">
        <HeroBgPattern isDark opacity={0.07} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C9A45C] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest text-[10px] sm:text-xs">Your Child's Turn to Shine</span>
          </div>

          <h2 className=" text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Start Your Child's Learning Journey Today
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every great journey begins with a single step. Book a complimentary trial session and see the Islah difference in your child's very first class.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenTrialModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>Start Your Child's Learning Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Talk to Admissions on WhatsApp</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-white/60">
            Free 1-on-1 assessment • Tailored pace • Certified Islamic scholars
          </div>
        </div>
      </section> */}

    </div>
  );
};
