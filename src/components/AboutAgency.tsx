import React from 'react';
import { PageView, ServiceId } from '../types';
import { AGENCY_STATS, VERIFIED_CLIENT_PLATFORMS } from '../data/agencyData';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  ShieldCheck, 
  ArrowUpRight, 
  Cpu,
  Zap,
  Target,
  Code2,
  Users,
  CheckCircle2
} from 'lucide-react';

interface AboutAgencyProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const AboutAgency: React.FC<AboutAgencyProps> = ({ onNavigate }) => {
  return (
    <section id="about-section" className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Studio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-mono font-semibold text-zinc-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>ABOUT BASAN TECH</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-950 tracking-tight leading-tight">
              An engineering-led software studio built on real work and proven delivery.
            </h2>

            <p className="text-zinc-800 text-base sm:text-lg leading-relaxed font-medium">
              Basan Tech is a growing technology company dedicated to building bespoke software, web applications, mobile apps, and e-commerce solutions that solve real business problems.
            </p>

            <p className="text-zinc-600 text-sm leading-relaxed">
              We believe in honest craftsmanship: clients work directly with the developers writing their software. Every project is engineered with modern full-stack frameworks, clean architecture, responsive UX design, and complete transfer of source code and intellectual property.
            </p>

            {/* Honest Portfolio Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-200">
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 flex items-baseline">
                  <AnimatedCounter end={5} />
                </div>
                <div className="text-xs text-zinc-700 mt-0.5 font-semibold">Live Platforms</div>
                <div className="text-[10px] text-zinc-500 font-mono">In active production</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 flex items-baseline">
                  <AnimatedCounter end={6} />
                </div>
                <div className="text-xs text-zinc-700 mt-0.5 font-semibold">Core Practices</div>
                <div className="text-[10px] text-zinc-500 font-mono">Web, Mobile, Software</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 flex items-baseline">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-xs text-zinc-700 mt-0.5 font-semibold">Client IP Ownership</div>
                <div className="text-[10px] text-zinc-500 font-mono">100% Repository Transfer</div>
              </div>
            </div>
          </div>

          {/* Studio Image & Identity */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm space-y-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Basan Tech Engineering Collaboration"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 border-b border-zinc-100 pb-2 font-medium">
                  <span className="text-zinc-950 font-semibold">STUDIO ETHOS</span>
                  <span>DIRECT ACCESS</span>
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed">
                  We maintain zero layers of bureaucratic overhead. You collaborate directly with experienced software builders who understand modern full-stack ecosystems.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Transparent sprint milestones & live staging links</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Principles */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Operating Standard
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950">
              Our Core Engineering Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Code2 className="w-5 h-5 text-zinc-950" />,
                title: 'Clean, Modern Code',
                desc: 'Type-safe TypeScript, modular components, maintainable architectures, and zero bloated dependencies.'
              },
              {
                icon: <Zap className="w-5 h-5 text-zinc-950" />,
                title: 'Predictable Delivery',
                desc: 'Regular staging demos, clear sprint goals, and direct communication channels with your developers.'
              },
              {
                icon: <Target className="w-5 h-5 text-zinc-950" />,
                title: 'Real Business Value',
                desc: 'We engineer solutions tailored to your operational workflows, user engagement, and revenue goals.'
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-zinc-950" />,
                title: 'Full IP & Code Ownership',
                desc: 'You own every line of code, cloud configuration, and design asset upon project delivery.'
              }
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-2xs hover:border-zinc-300 transition-colors space-y-3">
                <div className="p-2.5 rounded-xl bg-zinc-100 w-fit border border-zinc-200">
                  {pillar.icon}
                </div>
                <h4 className="font-display text-base font-bold text-zinc-950">
                  {pillar.title}
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Pitch */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold block">
              Direct Engineering Collaboration
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-zinc-950">
              Work directly with dedicated software builders.
            </h3>
            <p className="text-xs text-zinc-600">
              No account managers or sales runarounds. Direct technical discovery and transparent milestones.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-full text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-xs shrink-0 cursor-pointer"
          >
            <span>Initiate Project Inquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
