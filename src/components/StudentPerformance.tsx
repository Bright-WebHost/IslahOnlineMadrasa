import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { STUDENT_PERFORMANCE_ITEMS, StudentPerformanceItem } from '../data/madrasaData';
import { IslamicPattern, HeroBgPattern } from './IslamicPattern';

interface StudentPerformanceProps {
  onSelectPerformance: (item: StudentPerformanceItem) => void;
}

export const StudentPerformance: React.FC<StudentPerformanceProps> = ({ onSelectPerformance }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? STUDENT_PERFORMANCE_ITEMS
    : STUDENT_PERFORMANCE_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="student-progress-gallery" className="relative py-20 lg:py-28 bg-[#FBF9F5] overflow-hidden">
      <HeroBgPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
              Authentic Student Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-bold tracking-tight text-balance">
              Watch Their Learning <br className="hidden sm:inline" />
              <span className="">Come to Life</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
              Listen to real students reciting with measured Tajweed, completing Hifz milestones, and sharing reflections.
            </p>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {filteredItems.map((item) => {
            const isHovered = hoveredId === item.id;
            const hasThumbnail = !!item.thumbnailUrl;

            return (
              <div
                key={item.id}
                onClick={() => onSelectPerformance(item)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-[#082D7B]/20 hover:border-[#C9A45C]/80 shadow-md hover:shadow-2xl transition-all duration-300 aspect-[9/15] cursor-pointer"
                style={{ background: '#001E3C' }}
              >
                {/* Thumbnail image or pattern fallback */}
                {hasThumbnail ? (
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <IslamicPattern opacity={0.14} strokeColor="#C9A45C" variant="stars" />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/50 z-10" />

                {/* Hover ring glow */}
                {/* <div className="absolute inset-0 z-10 rounded-2xl ring-0 group-hover:ring-2 ring-[#C9A45C]/60 transition-all duration-300 pointer-events-none" /> */}

                {/* Top bar: category + duration */}
                <div className="relative z-20 p-3 sm:p-4 flex items-center justify-between">
                  {/* <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-[10px] font-semibold text-white leading-tight">
                    {item.category}
                  </span> */}
                  {item.duration && (
                    <span className="text-[10px] font-mono text-[#C9A45C] tabular-nums bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded">
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Central play button */}
                <div className="relative z-20 my-auto flex flex-col items-center justify-center p-4">
                  {/* Outer pulsing ring */}
                  {/* <div
                    className="absolute w-20 h-20 rounded-full border-2 border-[#C9A45C]/50 transition-all duration-500"
                    style={{
                      transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      opacity: isHovered ? 0.65 : 0,
                    }}
                  /> */}
                  <div
                    className="w-14 h-14 rounded-full bg-[#C9A45C] text-[#001E3C] flex items-center justify-center shadow-lg transition-all duration-300"
                    style={{
                      transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                      boxShadow: isHovered ? '0 0 28px rgba(201,164,92,0.55)' : '0 4px 12px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </div>
                  <span
                    className="mt-2 text-[11px] font-semibold text-white/80 tracking-wide transition-all duration-300"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(4px)',
                    }}
                  >
                    
                  </span>
                </div>

                {/* Bottom metadata */}
                <div className="relative z-20 p-3 sm:p-4 text-left">
                  <p className="text-[10px] sm:text-[11px] text-[#C9A45C] font-semibold tracking-wide uppercase leading-tight">
                    {item.surahOrTopic}
                  </p>
                  {/* <h4 className="text-sm sm:text-base text-white font-medium line-clamp-2 mt-0.5 leading-snug">
                    {item.title}
                  </h4> */}

                  {/* Slide-in description on hover */}
                  {/* <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isHovered ? '80px' : '0px', opacity: isHovered ? 1 : 0 }}
                  >
                    <div className="border-t border-white/15 pt-2 mt-2">
                      <p className="text-[10px] text-white/60 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div> */}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

