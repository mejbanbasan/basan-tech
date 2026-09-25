import React from 'react';
import { PageView } from '../types';
import { PROJECTS_DELIVERED_FOR, CLIENT_COMMITMENTS } from '../data/agencyData';
import { 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  ExternalLink,
  Building2,
  Check,
  Star
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
  const marqueeItems = [...PROJECTS_DELIVERED_FOR, ...PROJECTS_DELIVERED_FOR];

  return (
    <section 
      id="testimonials-section" 
      className={`${showBreadcrumb ? 'pt-20 sm:pt-24 pb-12 sm:pb-16' : 'py-12 sm:py-16'} bg-slate-50/70 border-b border-slate-200 relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Section Header (No left/right arrows) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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
                    Client Deliveries
                  </li>
                </ol>
              </nav>
            )}

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
              <span>PROJECTS DELIVERED &amp; CLIENT REPUTATION</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
              Projects Delivered For
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Verified production platforms engineered by Basan Tech. Every delivery represents real-world technical execution, scalable architectures, and active client partnerships.
            </p>
          </div>

          {/* Rating / Track Record Badge */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="p-3.5 px-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-[#022A4E] ml-1.5">5.0 / 5.0</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-0.5">Verified Client Deliveries</span>
            </div>
          </div>
        </div>

        {/* 1. Clean "Projects Delivered For" / "Trusted By" Strip */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#00976C]" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-700">
                Verified Project Credit Portfolio
              </span>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-medium">
              Real Client Relationships • Active Platforms
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PROJECTS_DELIVERED_FOR.map((item) => (
              <a
                key={item.id}
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/80 hover:border-[#00976C] transition-all flex flex-col justify-between space-y-2 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors">
                    {item.clientName}
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#00976C] transition-colors" />
                </div>
                <div className="text-[11px] font-medium text-slate-600 group-hover:text-slate-900 leading-snug">
                  {item.projectCredit}
                </div>
                <div className="pt-1 flex items-center gap-1 text-[10px] font-mono text-emerald-700 font-semibold">
                  <Check className="w-2.5 h-2.5" />
                  <span>Delivered</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 2. Continuous Smooth Auto-Scrolling Marquee (Loops endlessly, pauses on hover) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Continuous Live Showcase</span>
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
              Hover over any card to pause &amp; inspect
            </span>
          </div>

          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden py-2">
            {/* Left Edge Gradient Fade */}
            <div className="pointer-events-none absolute left-0 inset-y-0 w-8 sm:w-20 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />

            {/* Right Edge Gradient Fade */}
            <div className="pointer-events-none absolute right-0 inset-y-0 w-8 sm:w-20 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />

            {/* Smooth Marquee Track */}
            <div className="animate-marquee-scroll flex gap-6 px-4">
              {marqueeItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 rounded-2xl bg-white border border-slate-200 hover:border-[#00976C] p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 select-none"
                >
                  <div className="space-y-3">
                    {/* Card Top: Initials + Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-[#022A4E] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                          {item.initials}
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#022A4E] leading-tight">
                            {item.clientName}
                          </h3>
                          <p className="text-[10px] font-mono text-[#00976C] font-semibold">
                            {item.projectCredit}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 shrink-0">
                        {item.category}
                      </span>
                    </div>

                    {/* Exact Project Credit Tag */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-[#022A4E]">
                      {item.fullLabel}
                    </div>

                    {/* Technical Outcome Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.keyOutcome}
                    </p>
                  </div>

                  {/* Tech Stack & Live Link Footer */}
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-mono text-slate-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[11px] font-mono text-slate-500 font-medium">
                        {item.metrics}
                      </span>

                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#00976C] hover:text-[#00825B] hover:underline"
                        >
                          <span>Live Platform</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Core Client Commitments */}
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

        {/* 4. Action CTA */}
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
