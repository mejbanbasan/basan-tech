import React, { useState } from 'react';
import { PageView, ServiceId, Service } from '../types';
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
  ShieldCheck,
  ChevronRight,
  X,
  Layers
} from 'lucide-react';

interface ServicesOverviewProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
  initialServiceId?: ServiceId;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ 
  onNavigate, 
  initialServiceId 
}) => {
  const [selectedModalService, setSelectedModalService] = useState<Service | null>(null);

  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'website-dev':
      case 'web-dev':
        return <Globe className="w-5 h-5" />;
      case 'app-dev':
      case 'mobile-app':
        return <Smartphone className="w-5 h-5" />;
      case 'custom-software':
        return <Cpu className="w-5 h-5" />;
      case 'desktop-software':
        return <Laptop className="w-5 h-5" />;
      case 'ecommerce-dev':
      case 'ecommerce':
        return <ShoppingBag className="w-5 h-5" />;
      case 'ai-solutions':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="services-section" className="py-20 sm:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
              <span>OUR 6 CORE SERVICES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
              Specialized engineering for modern businesses.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We design and build clean, reliable digital solutions. From custom software and high-speed web platforms to cross-platform mobile apps and AI automations.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#00976C] hover:bg-[#00825B] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-100" />
            </button>
          </div>
        </div>

        {/* 6 Services Grid: 2-3 per row on desktop, 1 per row on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-white border border-slate-200/90 hover:border-[#00976C] rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-1 space-y-6"
              >
                {/* Top Row: Icon, Service Number & Badge */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#00976C] group-hover:bg-[#00976C] group-hover:text-white transition-all duration-300 shadow-2xs">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-[#00976C] transition-colors border border-slate-200/60 group-hover:border-emerald-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short 1-Line Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Key Highlights / Deliverables */}
                  <div className="space-y-2 pt-1 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Key Highlights
                    </div>
                    <div className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="leading-snug text-slate-600">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    id={`service-detail-btn-${service.id}`}
                    onClick={() => onNavigate('service-detail', service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    id={`service-inquire-btn-${service.id}`}
                    onClick={() => onNavigate('contact', service.id)}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#00976C] bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-[#00976C]/40 transition-colors cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Commitment Strip */}
        <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#022A4E]">
                Need a multi-tier solution or custom architecture?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                We design and engineer tailored combinations of web, mobile, custom software, and AI workflows for growing companies.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-full text-xs font-bold text-[#022A4E] hover:text-white bg-slate-100 hover:bg-[#022A4E] transition-all duration-200 shrink-0 cursor-pointer shadow-2xs"
          >
            Schedule Technical Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
