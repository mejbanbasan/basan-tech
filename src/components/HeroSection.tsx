import React from 'react';
import { PageView, ServiceId } from '../types';
import { AGENCY_STATS, VERIFIED_CLIENT_PLATFORMS } from '../data/agencyData';
import { AnimatedCounter } from './AnimatedCounter';
import { 
  ArrowUpRight, 
  ArrowRight,
  Globe, 
  Smartphone, 
  Cpu, 
  Sparkles,
  Layers,
  Code2,
  Server,
  Layout,
  ExternalLink
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="hero-section" className="relative min-h-[90vh] pt-32 pb-16 flex flex-col justify-center bg-slate-50/60 border-b border-slate-200">
      
      {/* Subtle ambient background grid with brand navy tint */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Studio Status Marker */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#022A4E] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#00976C] animate-pulse"></span>
            <span>BASANTECH • SOFTWARE &amp; DIGITAL STUDIO</span>
          </div>
        </div>

        {/* Hero Title & Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#022A4E] leading-[1.08]">
              BasanTech — Engineering <span className="text-[#00976C]">bespoke software</span>, web apps, and digital platforms.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              BasanTech builds clean, reliable, and high-performance digital solutions. We partner with founders and businesses to engineer <strong className="text-[#022A4E] font-semibold">Custom Software</strong>, <strong className="text-[#022A4E] font-semibold">Web Applications</strong>, <strong className="text-[#022A4E] font-semibold">Mobile Apps</strong>, and <strong className="text-[#022A4E] font-semibold">AI Solutions</strong> focused on long-term value.
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
                Core Practices
              </span>
              <span className="text-xs font-semibold text-[#00976C] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                08 Capabilities
              </span>
            </div>

            <div className="space-y-1">
              {[
                { id: 'custom-software' as ServiceId, label: 'Custom Software Development', icon: Cpu, desc: 'Bespoke Business Logic & Systems' },
                { id: 'web-dev' as ServiceId, label: 'Web Development', icon: Globe, desc: 'Modern React & Cloud Platforms' },
                { id: 'mobile-app' as ServiceId, label: 'Mobile App Development', icon: Smartphone, desc: 'Cross-Platform iOS & Android Apps' },
                { id: 'ai-solutions' as ServiceId, label: 'AI Solutions', icon: Sparkles, desc: 'Generative AI & LLM Automation' },
                { id: 'hubspot-dev' as ServiceId, label: 'HubSpot Development', icon: Layers, desc: 'Custom CMS & Automated CRM' },
                { id: 'reactjs-dev' as ServiceId, label: 'ReactJS Development', icon: Code2, desc: 'Modular SPAs & Frontends' },
                { id: 'wordpress-dev' as ServiceId, label: 'WordPress Development', icon: Layout, desc: 'High-Speed Custom Themes' },
                { id: 'nodejs-dev' as ServiceId, label: 'Node.js Development', icon: Server, desc: 'Scalable APIs & Microservices' },
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
                <span>Explore All 8 Services in Detail</span>
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

        {/* Real Projects & Verifiable Platforms Section */}
        <div className="pt-10 border-t border-slate-200">
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold">
                    Proven Delivery • Real Live Platforms
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Explore verifiable production systems engineered and deployed by BasanTech.
                </p>
              </div>

              <button
                onClick={() => onNavigate('portfolio')}
                className="text-xs font-semibold text-[#022A4E] hover:text-[#00976C] flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>View Full Portfolio Showcase</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00976C]" />
              </button>
            </div>

            {/* Real Client Platforms Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
              {VERIFIED_CLIENT_PLATFORMS.map((platform, idx) => (
                <div
                  key={idx}
                  id={`hero-platform-card-${platform.caseStudyId}`}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#00976C] hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors">
                        {platform.name}
                      </span>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded-md text-slate-400 hover:text-[#022A4E] hover:bg-slate-100 transition-colors"
                        title={`Visit live site ${platform.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <p className="text-[11px] text-slate-500 font-mono leading-tight">
                      {platform.category}
                    </p>
                  </div>

                  <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-600 truncate max-w-[130px]">
                      {platform.tagline}
                    </span>
                    <button
                      onClick={() => onNavigate('portfolio')}
                      className="text-[11px] font-semibold text-slate-700 group-hover:text-[#00976C] flex items-center gap-0.5 shrink-0 cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3 h-3 text-[#00976C]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
