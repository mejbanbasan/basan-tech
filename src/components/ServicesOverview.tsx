import React from 'react';
import { PageView, ServiceId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Laptop, 
  ShoppingBag, 
  Sparkles,
  ArrowUpRight, 
  Check, 
  ArrowRight,
  Code2
} from 'lucide-react';

interface ServicesOverviewProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
  showBreadcrumb?: boolean;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ 
  onNavigate, 
  showBreadcrumb = false
}) => {
  const getServiceIcon = (id: ServiceId, className = "w-6 h-6") => {
    switch (id) {
      case 'website-dev':
      case 'web-dev':
        return <Globe className={className} />;
      case 'app-dev':
      case 'mobile-app':
        return <Smartphone className={className} />;
      case 'custom-software':
        return <Cpu className={className} />;
      case 'desktop-software':
        return <Laptop className={className} />;
      case 'ecommerce-dev':
      case 'ecommerce':
        return <ShoppingBag className={className} />;
      case 'ai-solutions':
        return <Sparkles className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  const getTechPills = (id: ServiceId): string[] => {
    switch (id) {
      case 'website-dev':
      case 'web-dev':
        return ['Next.js 15', 'React', 'TypeScript', 'Tailwind', 'SEO'];
      case 'app-dev':
      case 'mobile-app':
        return ['React Native', 'Flutter', 'iOS & Android', 'Offline SQLite'];
      case 'custom-software':
        return ['Node.js', 'Python', 'PostgreSQL', 'Microservices', 'RBAC'];
      case 'desktop-software':
        return ['Electron', 'Tauri', 'Windows / macOS / Linux', 'Local DB'];
      case 'ecommerce-dev':
      case 'ecommerce':
        return ['Next.js Commerce', 'Payment Gateways', 'Multi-Vendor', 'Redis'];
      case 'ai-solutions':
        return ['OpenAI GPT-4o', 'Claude 3.5', 'RAG / Vector DB', 'AI Agents'];
      default:
        return ['Modern Stack'];
    }
  };

  return (
    <section id="services-section" className={`${showBreadcrumb ? 'pt-28 sm:pt-36 pb-24' : 'py-20 sm:py-28'} bg-slate-50/70 border-b border-slate-200 relative`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            {showBreadcrumb && (
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pb-1">
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#00976C] transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>/</span>
                <span className="text-[#022A4E] font-semibold">Services</span>
              </nav>
            )}

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
              <span className="font-mono uppercase tracking-wider text-[11px] font-bold text-[#00976C]">
                ENGINEERING PRACTICES • 06 CORE SERVICES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#022A4E] leading-[1.15]">
              Software Engineering &amp; Digital Services
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              We design and engineer dependable digital solutions for businesses worldwide. Every service includes full source code ownership, clean architecture, and direct developer communication.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#00976C] hover:bg-[#00825B] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
            >
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-200" />
            </button>
          </div>
        </div>

        {/* 6 Services Grid: Clean, professional, direct (No tabs, no AI glowing blurs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const techPills = getTechPills(service.id);

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group bg-white border border-slate-200 hover:border-[#00976C] rounded-2xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-[#00976C] flex items-center justify-center transition-colors group-hover:bg-[#00976C] group-hover:text-white">
                      {getServiceIcon(service.id, "w-6 h-6")}
                    </div>

                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 
                      onClick={() => onNavigate('service-detail', service.id)}
                      className="text-xl font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors tracking-tight leading-snug cursor-pointer"
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                      <Code2 className="w-3 h-3 text-[#00976C]" />
                      <span>Key Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {techPills.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono font-semibold text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Included Deliverables List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Standard Deliverables
                    </div>
                    <div className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug text-slate-600 font-medium">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Actions Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    id={`service-explore-btn-${service.id}`}
                    onClick={() => onNavigate('service-detail', service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#022A4E] hover:text-[#00976C] transition-colors cursor-pointer"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00976C]" />
                  </button>

                  <button
                    id={`service-inquire-btn-${service.id}`}
                    onClick={() => onNavigate('contact', service.id)}
                    className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#022A4E] hover:bg-[#00976C] transition-all duration-200 shadow-2xs cursor-pointer"
                  >
                    Start Project
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Full-Stack Integration Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-[#022A4E] text-white shadow-md relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-semibold text-emerald-300 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>CROSS-PLATFORM &amp; FULL-STACK SYSTEMS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Need a unified solution combining Web, Mobile, and Custom Backends?
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                We engineer unified digital platforms where web apps, mobile apps, desktop systems, and AI workflows share seamless APIs, single-sign-on (SSO), and real-time database synchronizations.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold text-[#022A4E] bg-white hover:bg-emerald-50 transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Book Architecture Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#00976C]" />
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Delivered Platforms</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
