import React from 'react';
import { PageView } from '../types';
import { TESTIMONIALS_DATA, CLIENT_COMMITMENTS } from '../data/agencyData';
import { 
  Star,
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight
} from 'lucide-react';

interface TestimonialsSectionProps {
  onNavigate: (page: PageView) => void;
  showBreadcrumb?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  onNavigate,
  showBreadcrumb = false 
}) => {
  // Duplicate array so marquee scrolls continuously and seamlessly without gaps
  const marqueeItems = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section 
      id="testimonials-section" 
      className={`${showBreadcrumb ? 'pt-20 sm:pt-24 pb-12 sm:pb-16' : 'py-12 sm:py-16'} bg-slate-50/70 border-b border-slate-200 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          {showBreadcrumb && (
            <nav aria-label="Breadcrumb" className="pb-1">
              <ol className="flex items-center gap-1.5 text-xs text-slate-500 font-medium list-none p-0 m-0">
                <li>
                  <a 
                    href="/"
                    onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
                    className="hover:text-[#00976C] transition-colors cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>/</li>
                <li className="text-[#022A4E] font-semibold" aria-current="page">
                  Reviews
                </li>
              </ol>
            </nav>
          )}

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
            <span>CLIENT REVIEWS &amp; REPUTATION</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
            What Our Clients Say
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real feedback from founders and project leads who trusted BasanTech to engineer, launch, and support their digital platforms.
          </p>
        </div>

        {/* Continuous Smooth Auto-Scrolling Marquee of Client Reviews */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Continuous Client Reviews</span>
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
              Hover over any review to pause &amp; read
            </span>
          </div>

          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden py-2">
            {/* Left Edge Gradient Fade */}
            <div className="pointer-events-none absolute left-0 inset-y-0 w-8 sm:w-20 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />

            {/* Right Edge Gradient Fade */}
            <div className="pointer-events-none absolute right-0 inset-y-0 w-8 sm:w-20 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />

            {/* Smooth Marquee Track */}
            <div className="animate-marquee-scroll flex gap-5 sm:gap-6 px-4">
              {marqueeItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[290px] sm:w-[360px] md:w-[400px] shrink-0 rounded-2xl bg-white border border-slate-200 hover:border-[#00976C] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-5 select-none"
                >
                  <div className="space-y-3.5">
                    {/* Top: 5-Star Rating + Service Tag */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, sIdx) => (
                          <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 shrink-0">
                        {item.serviceType}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic font-normal">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Review Author: Initials Avatar + Role Label (No fake names) */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#022A4E] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                      {item.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-[#022A4E] leading-snug break-words">
                        {item.clientTitle}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        Client Project Review
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Client Commitments */}
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
            <span>Partner With BasanTech On Your Next Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
