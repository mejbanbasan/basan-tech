import React from 'react';
import { PageView } from '../types';
import { CLIENT_COMMITMENTS, VERIFIED_CLIENT_PLATFORMS } from '../data/agencyData';
import { 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  ExternalLink,
  MessageSquare,
  Lock,
  Clock,
  HeartHandshake
} from 'lucide-react';

interface TestimonialsSectionProps {
  onNavigate: (page: PageView) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onNavigate }) => {
  return (
    <section id="testimonials-section" className="py-24 bg-zinc-50 border-b border-zinc-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-mono font-medium text-zinc-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>CLIENT COMMITMENT & WORK STANDARDS</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 tracking-tight leading-tight">
              What Our Clients Say
            </h2>
            
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              We build genuine, long-term partnerships grounded in transparent communication, clean maintainable code, and dependable milestone delivery.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs flex items-center gap-4 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Our Guarantee
              </div>
              <div className="text-xs font-bold text-zinc-900 mt-0.5">
                100% Dedicated Builder Attention
              </div>
              <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3" />
                <span>Zero Vendor Lock-In</span>
              </div>
            </div>
          </div>
        </div>

        {/* Honest Newly Launched Trust Notice Card */}
        <div className="rounded-2xl bg-white border border-zinc-200 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 text-xs font-mono text-zinc-700 font-medium">
              <MessageSquare className="w-3.5 h-3.5 text-zinc-950" />
              <span>Transparent & Authentic Client Feedback</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              Client feedback and verified reviews will be added as we complete more project milestones.
            </h3>

            <p className="text-zinc-600 text-sm leading-relaxed">
              As a growing technology studio, we believe our real work is our strongest proof. Rather than showcasing artificial testimonials or inflated numbers, we invite you to inspect the live software platforms we have built and deployed for real businesses and community organizations.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Inspect Verified Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 rounded-full text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-white hover:bg-zinc-100 border border-zinc-300 transition-colors cursor-pointer"
              >
                <span>Speak Directly With Our Team</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Client Commitments Grid */}
        <div className="space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            How We Work With Every Client
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_COMMITMENTS.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs hover:shadow-sm hover:border-zinc-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900">
                    {c.icon === 'Users' && <Users className="w-5 h-5" />}
                    {c.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                    {c.icon === 'CheckCircle2' && <CheckCircle2 className="w-5 h-5" />}
                    {c.icon === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                  </div>

                  <h4 className="font-display text-base font-bold text-zinc-950">
                    {c.title}
                  </h4>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Live Proof Showcase Bar */}
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 sm:p-10 text-white space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Live Proof of Work
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                Inspect Real Platforms Built by Basan Tech
              </h3>
            </div>

            <button
              onClick={() => onNavigate('portfolio')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-100 transition-colors flex items-center gap-2 self-start sm:self-auto cursor-pointer"
            >
              <span>Explore All Case Studies</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
            {VERIFIED_CLIENT_PLATFORMS.map((platform, idx) => (
              <a
                key={idx}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-800/80 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="font-display text-xs font-bold text-white group-hover:text-zinc-200 transition-colors">
                      {platform.name}
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-white" />
                  </div>
                  <p className="text-[10px] text-zinc-400 font-mono line-clamp-1">
                    {platform.category}
                  </p>
                </div>

                <div className="text-[10px] text-zinc-500 mt-2 pt-2 border-t border-zinc-700/60 flex items-center justify-between">
                  <span>Visit Live</span>
                  <span className="text-emerald-400 font-mono">Live ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
