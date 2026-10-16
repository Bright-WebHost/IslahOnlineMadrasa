import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Quote, Play, MapPin } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/madrasaData';
import { HeroBgPattern } from './IslamicPattern';

interface TestimonialsSectionProps {
  onPlayVideoTestimonial: (item: Testimonial) => void;
}

const AUTO_INTERVAL = 4500;

/** Returns how many cards are visible based on current window width */
function getVisibleCount(): number {
  if (typeof window === 'undefined') return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onPlayVideoTestimonial }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartX = useRef(0);
  const dragging = useRef(false);

  const total = TESTIMONIALS.length;
  // Maximum index we can scroll to (so last group is fully visible)
  const maxIndex = Math.max(0, total - visibleCount);

  // Update visible count on resize
  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const goTo = useCallback((idx: number) => {
    // Clamp so we don't go past the last full group; wrap around to 0
    const clamped = idx > maxIndex ? 0 : idx < 0 ? maxIndex : idx;
    setCurrent(clamped);
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => goTo(current + 1), AUTO_INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, goTo]);

  // Clamp current when visibleCount changes (e.g. on resize)
  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [maxIndex, current]);

  // Drag / swipe
  const onDragStart = (clientX: number) => {
    dragging.current = true;
    dragStartX.current = clientX;
  };
  const onDragEnd = (clientX: number) => {
    if (!dragging.current) return;
    dragging.current = false;
    const delta = clientX - dragStartX.current;
    if (delta < -50) goTo(current + 1);
    else if (delta > 50) goTo(current - 1);
  };

  // translateX: each card takes (100 / visibleCount)% of the track
  const cardWidth = 100 / visibleCount;
  const translateX = current * cardWidth;

  return (
    <section
      id="testimonials"
      className="relative py-10 lg:py-18 bg-[#F6F1E7]/70 border-t border-[#082D7B]/10 overflow-hidden"
    >
      <HeroBgPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
            Parent Confidence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-bold tracking-tight text-balance">
            What Parents Say <br />
            <span>About Islah Online Madrasa</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
            Real reflections from families who entrust their children's Qur'an journey to our instructors.
          </p>
        </div>

        {/* Viewport */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { setPaused(false); dragging.current = false; }}
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseUp={(e) => onDragEnd(e.clientX)}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
          style={{ cursor: 'grab' }}
        >
          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-2.5 box-border"
                style={{
                  width: `${cardWidth}%`,
                  userSelect: 'none',
                }}
              >
                <div className="rounded-2xl bg-white p-6 sm:p-7 border border-[#082D7B]/10 shadow-xs flex flex-col hover:shadow-md transition-shadow h-full min-h-[260px]">

                  {/* Stars + type badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-0.5 text-[#C9A45C]">
                      {[...Array(5)].map((_, i) => <span key={i} className="text-xs">★</span>)}
                    </div>
                    {item.type === 'video' ? (
                      <button
                        onClick={() => onPlayVideoTestimonial(item)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#082D7B] text-[#F6F1E7] text-[11px] font-medium hover:bg-[#001E3C] transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current text-[#C9A45C]" />
                        <span>Watch Video ({item.videoDuration})</span>
                      </button>
                    ) : (
                      <Quote className="w-6 h-6 text-[#C9A45C]/50" />
                    )}
                  </div>

                  {/* Content paragraphs */}
                  <div className="space-y-2.5 mb-6 flex-1">
                    {(Array.isArray(item.content) ? item.content : [item.content]).map((para, i, arr) => (
                      <p key={i} className="text-xs sm:text-sm text-[#151918]/75 leading-relaxed font-sans">
                        {i === 0 && '"'}{para}{i === arr.length - 1 && '"'}
                      </p>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-[#082D7B]/8 flex items-center justify-between mt-auto">
                    <h4 className="text-sm font-semibold text-[#082D7B]">{item.parentName}</h4>
                    <div className="flex items-center gap-1 text-[11px] text-[#151918]/50">
                      <MapPin className="w-3 h-3 text-[#C9A45C]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8" role="tablist">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === current}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => { goTo(idx); setPaused(false); }}
              className={`rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                idx === current
                  ? 'w-6 h-2 bg-[#082D7B]'
                  : 'w-2 h-2 bg-[#082D7B]/25 hover:bg-[#082D7B]/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
