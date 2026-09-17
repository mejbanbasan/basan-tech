import React from 'react';
import { PageView } from '../types';
import { TESTIMONIALS_DATA, CLIENT_COMMITMENTS } from '../data/agencyData';
import { 
  Star, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  Quote,
  Check
} from 'lucide-react';

interface TestimonialsSectionProps {
  onNavigate: (page: PageView) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onNavigate }) => {
  return (
    <section id="testimonials-section" className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
              <span>TESTIMONIALS &amp; REPUTATION</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
              What Our Clients Say
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Real feedback from founders and project leads who trusted BasanTech to engineer, launch, and support their digital platforms.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs flex items-center gap-4 shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-[#022A4E] ml-1.5">5.0 / 5.0</span>
              </div>
              <div className="text-[11px] text-slate-500 font-mono mt-1">
                Consistently Rated for Delivery &amp; Quality
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="rounded-3xl bg-white border border-slate-200 hover:border-[#00976C] p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                {/* Rating Stars & Service Tag */}
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

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed font-normal italic relative">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info & Verification */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#022A4E] to-[#00976C] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors leading-tight">
                      {t.clientName}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-tight">
                      {t.clientTitle} • {t.companyName}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-full border border-emerald-200/50">
                  <Check className="w-3 h-3 text-[#00976C]" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Client Commitments: How We Work With Every Client */}
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
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-[#00976C] transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C]">
                    {c.icon === 'Users' && <Users className="w-5 h-5" />}
                    {c.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                    {c.icon === 'CheckCircle2' && <CheckCircle2 className="w-5 h-5" />}
                    {c.icon === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                  </div>

                  <h4 className="text-sm font-bold text-[#022A4E]">
                    {c.title}
                  </h4>

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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#022A4E] hover:bg-[#00976C] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Partner With BasanTech On Your Next Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
          </button>
        </div>

      </div>

    </section>
  );
};
