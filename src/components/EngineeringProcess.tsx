import React from 'react';
import { PageView } from '../types';
import { 
  Compass, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  HeartHandshake, 
  ArrowUpRight 
} from 'lucide-react';

interface EngineeringProcessProps {
  onNavigate: (page: PageView) => void;
}

export const EngineeringProcess: React.FC<EngineeringProcessProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Architectural Blueprint',
      desc: 'We analyze your business objectives, data schemas, API integrations, and user personas to produce a fixed-scope technical blueprint and milestone roadmap.',
      icon: Compass,
      tag: 'Blueprint Phase'
    },
    {
      num: '02',
      title: 'Iterative Sprint Sprints & Live Staging',
      desc: 'Our engineers build in rapid weekly sprints. You review interactive staging deployments on private URLs with full visibility into progress and code commits.',
      icon: Code2,
      tag: 'Build Phase'
    },
    {
      num: '03',
      title: 'Rigorous QA, Security & Performance Tuning',
      desc: 'Every endpoint, database query, and viewport is tested for OWASP security, responsive behavior, and sub-second Lighthouse Core Web Vitals.',
      icon: ShieldCheck,
      tag: 'Audit Phase'
    },
    {
      num: '04',
      title: 'Production Deployment & 100% IP Handover',
      desc: 'We deploy to production infrastructure (Vercel, AWS, Cloudflare, App Stores) and transfer 100% of all GitHub repositories, domains, and cloud accounts to you.',
      icon: Rocket,
      tag: 'Launch Phase'
    },
    {
      num: '05',
      title: '30-Day Hypercare Warranty & Ongoing Retainers',
      desc: 'Every project is backed by 30 days of complimentary bug-fixing, performance monitoring, and hands-on developer support with optional scaling retainers.',
      icon: HeartHandshake,
      tag: 'Warranty Phase'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
            <span>OUR METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
            How we engineer software from brief to deployment.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            No bureaucratic delays or ambiguous milestones. Our transparent 5-stage engineering lifecycle guarantees predictable timelines, clean code, and zero vendor lock-in.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#00976C] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-[#00976C]">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-500">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#022A4E] group-hover:bg-[#00976C] group-hover:text-white transition-colors shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm font-bold text-[#022A4E] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-[#00976C] font-semibold">
                  <span>Guaranteed Phase</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="p-6 rounded-3xl bg-emerald-50/50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="text-xs font-bold text-[#022A4E]">
              Have a project specification or brief ready?
            </div>
            <div className="text-xs text-slate-600">
              Submit your requirements and receive an engineering blueprint and quote in 24–48 hours.
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#00976C] hover:bg-[#00825B] transition-all shadow-sm shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Request Project Blueprint</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
