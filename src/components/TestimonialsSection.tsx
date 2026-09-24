import React, { useState, useRef } from 'react';
import { PageView } from '../types';
import { TESTIMONIALS_DATA, CLIENT_COMMITMENTS } from '../data/agencyData';
import { 
  Star, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

interface TestimonialsSectionProps {
  onNavigate: (page: PageView) => void;
  showBreadcrumb?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  onNavigate,
  showBreadcrumb = false 
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const total = TESTIMONIALS_DATA.length;
  const touchStartX = useRef<number | null>(null);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 40) {
      handleNext();
    } else if (diffX < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Get current active set: on desktop 3 items, tablet 2 items, mobile 1 item
  const visibleDesktop = [
    TESTIMONIALS_DATA[startIndex % total],
    TESTIMONIALS_DATA[(startIndex + 1) % total],
    TESTIMONIALS_DATA[(startIndex + 2) % total]
  ];

  return (
    <section 
      id="testimonials-section" 
      className={`${showBreadcrumb ? 'pt-20 sm:pt-24 pb-12 sm:pb-16' : 'py-12 sm:py-16'} bg-slate-50/70 border-b border-slate-200 relative`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        
        {/* Section Header with Left/Right Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            {showBreadcrumb && (
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pb-1">
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#00976C] transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>/</span>
                <span className="text-[#022A4E] font-semibold">Testimonials</span>
              </nav>
            )}

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
              <span>TESTIMONIALS &amp; REPUTATION</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
              What Our Clients Say
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real feedback from founders and project leads who trusted Basan Tech to engineer, launch, and support their digital platforms.
            </p>
          </div>

          {/* Top Controls: Rating + Carousel Navigation Arrows */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="p-3.5 px-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hidden sm:flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-[#022A4E] ml-1.5">5.0 / 5.0</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5">Verified Reviews</span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                id="testimonial-prev-btn"
                aria-label="Previous testimonial"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-[#00976C] text-slate-700 hover:text-[#00976C] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                id="testimonial-next-btn"
                aria-label="Next testimonial"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-[#00976C] text-slate-700 hover:text-[#00976C] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel Cards: 3 on Desktop, 1 on Mobile */}
        <div>
          {/* Desktop View: Exactly 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleDesktop.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="rounded-2xl bg-white border border-slate-200 hover:border-[#00976C] p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                      {t.serviceType}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed font-normal italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#022A4E] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#022A4E] leading-tight">
                      {t.clientTitle}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                      Client Project Review
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet View: 1 card on mobile, 2 on tablet */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
            <div
              key={visibleDesktop[0].id}
              className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(visibleDesktop[0].rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    {visibleDesktop[0].serviceType}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{visibleDesktop[0].quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#022A4E] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {visibleDesktop[0].avatar}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#022A4E] leading-tight">
                    {visibleDesktop[0].clientTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    Client Project Review
                  </p>
                </div>
              </div>
            </div>

            {/* Second card visible on md (tablet) */}
            <div
              key={visibleDesktop[1].id}
              className="hidden md:flex rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(visibleDesktop[1].rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    {visibleDesktop[1].serviceType}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{visibleDesktop[1].quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#022A4E] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {visibleDesktop[1].avatar}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#022A4E] leading-tight">
                    {visibleDesktop[1].clientTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    Client Project Review
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dot Indicators with 44px touch targets */}
          <div className="flex items-center justify-center gap-1 pt-6">
            {TESTIMONIALS_DATA.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setStartIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer group"
              >
                <span
                  className={`h-2 rounded-full transition-all duration-200 block ${
                    startIndex === dotIdx 
                      ? 'w-6 bg-[#00976C]' 
                      : 'w-2 bg-slate-300 group-hover:bg-slate-400'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* 4 Client Commitments */}
        <div className="space-y-6 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Our Core Client Commitments
            </div>
            <span className="text-xs font-semibold text-[#00976C]">
              Standard On Every Engagement
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CLIENT_COMMITMENTS.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-[#00976C] transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C]">
                    {c.icon === 'Users' && <Users className="w-5 h-5" />}
                    {c.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                    {c.icon === 'CheckCircle2' && <CheckCircle2 className="w-5 h-5" />}
                    {c.icon === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                  </div>

                  <h3 className="text-sm font-bold text-[#022A4E]">
                    {c.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00976C] shrink-0" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTA */}
        <div className="pt-2 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#022A4E] hover:bg-[#00976C] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
          >
            <span>Partner With Basan Tech On Your Next Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
