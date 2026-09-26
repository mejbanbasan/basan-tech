import React from 'react';
import { PageView, ServiceId } from '../types';
import { AGENCY_STATS } from '../data/agencyData';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  ArrowUpRight, 
  ArrowRight,
  Globe, 
  Smartphone, 
  Cpu, 
  Sparkles,
  Laptop,
  ShoppingBag
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="hero-section" className="relative min-h-[85vh] pt-24 sm:pt-32 pb-12 sm:pb-16 flex flex-col justify-center bg-slate-50/60 border-b border-slate-200">
      
      {/* Subtle ambient background grid with brand navy tint */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Studio Status Marker */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#022A4E] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#00976C] animate-pulse"></span>
            <span>BASAN TECH • SOFTWARE &amp; DIGITAL STUDIO</span>
          </div>
        </div>

        {/* Hero Title & Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-10 sm:mb-16">
          
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#022A4E] leading-[1.08]">
              Basan Tech — Engineering <span className="text-[#00976C]">bespoke software</span>, web apps, and digital platforms.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Basan Tech builds clean, reliable, and high-performance digital solutions. We partner with founders and businesses to engineer <strong className="text-[#022A4E] font-semibold">Custom Software</strong>, <strong className="text-[#022A4E] font-semibold">Web Applications</strong>, <strong className="text-[#022A4E] font-semibold">Mobile Apps</strong>, and <strong className="text-[#022A4E] font-semibold">AI Solutions</strong> focused on long-term value.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-contact-btn"
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#00976C] hover:bg-[#00825B] transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-[1.01] cursor-pointer"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-100" />
              </button>

              <button
                id="hero-portfolio-btn"
                onClick={() => onNavigate('portfolio')}
                className="px-7 py-3.5 rounded-full text-sm font-semibold text-[#022A4E] hover:text-[#00976C] bg-white hover:bg-emerald-50/40 border border-slate-300 hover:border-[#00976C] transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
              >
                <span>View Real Work &amp; Case Studies</span>
                <ArrowRight className="w-4 h-4 text-[#00976C]" />
              </button>
            </div>
          </div>

          {/* Quick Practice Index */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:border-[#00976C]/50 transition-colors">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Core Services
              </span>
              <span className="text-xs font-semibold text-[#00976C] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                06 Capabilities
              </span>
            </div>

            <div className="space-y-1">
              {[
                { id: 'website-dev' as ServiceId, label: 'Website Development', icon: Globe, desc: 'High-Speed Web & SaaS Platforms' },
                { id: 'app-dev' as ServiceId, label: 'App Development (Android & iOS)', icon: Smartphone, desc: 'Native & Cross-Platform Mobile Apps' },
                { id: 'custom-software' as ServiceId, label: 'Custom Software Development', icon: Cpu, desc: 'Bespoke Business Logic & Systems' },
                { id: 'desktop-software' as ServiceId, label: 'Desktop Software Development', icon: Laptop, desc: 'Windows, macOS & Linux Applications' },
                { id: 'ecommerce-dev' as ServiceId, label: 'E-commerce Development', icon: ShoppingBag, desc: 'Scalable Stores & Checkout Funnels' },
                { id: 'ai-solutions' as ServiceId, label: 'AI Solutions', icon: Sparkles, desc: 'Custom LLMs, Agents & Automations' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    id={`hero-practice-card-${item.id}`}
                    onClick={() => onNavigate('service-detail', item.id)}
                    className="w-full group flex items-start gap-3 p-2 rounded-xl hover:bg-emerald-50/40 text-left transition-colors cursor-pointer border border-transparent hover:border-emerald-200"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-50 text-[#00976C] group-hover:bg-[#00976C] group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors truncate">
                          {item.label}
                        </span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#00976C] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <button
                id="hero-view-all-services-link"
                onClick={() => onNavigate('services')}
                className="w-full text-center text-xs font-semibold text-[#022A4E] hover:text-[#00976C] py-1 transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Explore All 6 Services in Detail</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00976C]" />
              </button>
            </div>
          </div>

        </div>

        {/* Realistic Animated Studio Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 py-8 border-t border-slate-200">
          {AGENCY_STATS.map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#00976C] transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-[#022A4E] tracking-tight flex items-baseline">
                {stat.numericValue !== undefined ? (
                  <AnimatedCounter 
                    end={stat.numericValue} 
                    suffix={stat.suffix || ''} 
                  />
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>
              <div className="text-xs text-slate-800 mt-1 font-semibold">
                {stat.label}
              </div>
              {stat.desc && (
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.desc}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
