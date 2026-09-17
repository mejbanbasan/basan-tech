import React from 'react';
import { PageView, ServiceId } from '../types';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  ShieldCheck, 
  ArrowUpRight, 
  Zap, 
  Target, 
  Code2, 
  CheckCircle2 
} from 'lucide-react';

interface AboutAgencyProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
  isAboutPage?: boolean;
}

export const AboutAgency: React.FC<AboutAgencyProps> = ({ onNavigate, isAboutPage = false }) => {
  return (
    <section id="about-section" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Studio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
              <span>ABOUT BASANTECH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
              An engineering-led software company built on quality and proven delivery.
            </h2>

            <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
              BasanTech is a technology studio dedicated to building clean, dependable digital solutions for businesses looking to grow online.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We focus on craftsmanship and long-term value: clients work directly with the developers building their software. Every project is engineered with modern full-stack frameworks, clean architecture, responsive UX design, and complete transfer of source code and intellectual property.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-2xl sm:text-3xl font-bold text-[#022A4E] flex items-baseline">
                  <AnimatedCounter end={5} />
                </div>
                <div className="text-xs text-slate-800 mt-1 font-semibold">Live Platforms</div>
                <div className="text-[11px] text-slate-500">In active production</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-2xl sm:text-3xl font-bold text-[#00976C] flex items-baseline">
                  <AnimatedCounter end={6} />
                </div>
                <div className="text-xs text-slate-800 mt-1 font-semibold">Core Services</div>
                <div className="text-[11px] text-slate-500">Web, Mobile, AI &amp; Software</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-2xl sm:text-3xl font-bold text-[#022A4E] flex items-baseline">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-xs text-slate-800 mt-1 font-semibold">IP Ownership</div>
                <div className="text-[11px] text-slate-500">100% Repository Transfer</div>
              </div>
            </div>
          </div>

          {/* Studio Image / Value Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm space-y-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="BasanTech Engineering Collaboration"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-100 pb-2 font-medium">
                  <span className="text-[#022A4E] font-bold">COMPANY VALUES</span>
                  <span className="text-[#00976C] font-semibold">DIRECT ACCESS</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We eliminate bureaucratic layers. You collaborate directly with technical builders who understand modern full-stack ecosystems, deadlines, and business goals.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00976C]" />
                  <span>Transparent sprint milestones &amp; live staging links</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Principles */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
              Engineering Standard
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#022A4E]">
              Our Operating Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Code2 className="w-5 h-5 text-[#00976C]" />,
                title: 'Clean, Modern Code',
                desc: 'Type-safe TypeScript, modular components, maintainable architectures, and zero bloated dependencies.'
              },
              {
                icon: <Zap className="w-5 h-5 text-[#00976C]" />,
                title: 'Predictable Delivery',
                desc: 'Regular staging demos, clear sprint goals, and direct communication channels with your developers.'
              },
              {
                icon: <Target className="w-5 h-5 text-[#00976C]" />,
                title: 'Business-Focused',
                desc: 'We engineer solutions tailored to your operational workflows, user engagement, and revenue growth.'
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-[#00976C]" />,
                title: 'Full Code Ownership',
                desc: 'You own every line of code, cloud configuration, and design asset upon project delivery.'
              }
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#00976C] transition-colors space-y-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 w-fit border border-emerald-100">
                  {pillar.icon}
                </div>
                <h4 className="text-base font-bold text-[#022A4E]">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Pitch */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00976C] font-semibold block">
              Direct Technical Collaboration
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E]">
              Work directly with dedicated software builders.
            </h3>
            <p className="text-xs text-slate-600">
              No account managers or sales runarounds. Direct technical discovery and transparent milestones.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-full text-xs font-bold text-white bg-[#00976C] hover:bg-[#00825B] transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md shrink-0 cursor-pointer"
          >
            <span>Initiate Project Inquiry</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-100" />
          </button>
        </div>

      </div>
    </section>
  );
};
