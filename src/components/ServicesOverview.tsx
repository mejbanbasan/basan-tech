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
  Layers,
  Code2,
  Clock,
  Sparkle,
  Zap,
  CheckCircle2,
  ExternalLink
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
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'software' | 'ai'>('all');

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
        return ['Next.js 15', 'React', 'TypeScript', 'Tailwind', 'Edge SEO'];
      case 'app-dev':
      case 'mobile-app':
        return ['React Native', 'Flutter', 'iOS & Android', 'Offline SQLite'];
      case 'custom-software':
        return ['Node.js', 'Python', 'PostgreSQL', 'Microservices', 'RBAC'];
      case 'desktop-software':
        return ['Electron', 'Tauri', 'Win / macOS / Linux', 'Local DB'];
      case 'ecommerce-dev':
      case 'ecommerce':
        return ['Next.js Commerce', 'Stripe / UPI', 'Multi-Vendor', 'Redis'];
      case 'ai-solutions':
        return ['OpenAI GPT-4o', 'Claude 3.5', 'RAG / Vector DB', 'Agents'];
      default:
        return ['Modern Stack'];
    }
  };

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return s.id === 'website-dev' || s.id === 'ecommerce-dev';
    if (activeFilter === 'mobile') return s.id === 'app-dev';
    if (activeFilter === 'software') return s.id === 'custom-software' || s.id === 'desktop-software';
    if (activeFilter === 'ai') return s.id === 'ai-solutions';
    return true;
  });

  return (
    <section id="services-section" className="py-24 sm:py-32 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
      
      {/* Dynamic Ambient Glowing Cones (Crazy Tech Visual) */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-emerald-400/15 via-[#00976C]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[450px] bg-gradient-to-tl from-[#022A4E]/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200/80 text-xs font-semibold text-emerald-800 shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00976C] animate-pulse"></span>
              <span className="font-mono uppercase tracking-wider text-[11px] font-bold text-[#00976C]">
                ENGINEERING EXCELLENCE • 06 CORE PRACTICES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#022A4E] leading-[1.1]">
              Specialized engineering built to <span className="bg-gradient-to-r from-[#022A4E] via-[#00976C] to-[#00976C] bg-clip-text text-transparent">scale your business</span>.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              We design and engineer bespoke software solutions with zero bloat. Every project is crafted with modern full-stack frameworks, clean architecture, and 100% intellectual property ownership transferred to you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#00976C] hover:bg-[#00825B] transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-200" />
            </button>
          </div>
        </div>

        {/* Filter Tabs Bar (Interactive Category Nav) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-4">
          {[
            { id: 'all', label: 'All Services (6)' },
            { id: 'web', label: 'Web & E-Commerce' },
            { id: 'mobile', label: 'Mobile Apps' },
            { id: 'software', label: 'Custom & Desktop Systems' },
            { id: 'ai', label: 'AI & Automation' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#022A4E] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-[#00976C] hover:bg-emerald-50/50 border border-slate-200/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Services Grid: 2-3 per row on desktop, 1 per row on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            const techPills = getTechPills(service.id);
            const formattedIndex = String(SERVICES_DATA.findIndex(s => s.id === service.id) + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-white border border-slate-200/90 hover:border-[#00976C] rounded-[2rem] p-7 sm:p-8 shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Glowing Laser Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#00976C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Watermark Numeral in Top-Right */}
                <span className="absolute top-6 right-7 text-6xl font-black text-slate-100/80 group-hover:text-emerald-100/60 transition-colors duration-300 font-mono select-none pointer-events-none">
                  {formattedIndex}
                </span>

                {/* Card Main Body */}
                <div className="space-y-6 relative z-10">
                  
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200/80 text-[#00976C] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#022A4E] group-hover:to-[#00976C] group-hover:text-white group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#00976C]/25 transition-all duration-300 shadow-2xs">
                      {getServiceIcon(service.id, "w-6 h-6")}
                    </div>

                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-900 group-hover:border-emerald-300 transition-colors shadow-2xs">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short 1-Line Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Tech Stack Chips Bar */}
                  <div className="space-y-2 pt-1 border-t border-slate-100">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                      <Code2 className="w-3 h-3 text-[#00976C]" />
                      <span>Tech Stack &amp; Tools</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {techPills.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono font-semibold text-slate-700 group-hover:bg-emerald-50/60 group-hover:border-emerald-200/90 group-hover:text-emerald-900 transition-colors shadow-2xs"
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
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3 relative z-10">
                  <button
                    id={`service-spec-btn-${service.id}`}
                    onClick={() => setSelectedModalService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#00976C]" />
                  </button>

                  <button
                    id={`service-inquire-btn-${service.id}`}
                    onClick={() => onNavigate('contact', service.id)}
                    className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#022A4E] hover:bg-[#00976C] transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer"
                  >
                    Start Project
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Impact Enterprise Architecture Banner */}
        <div className="rounded-[2.5rem] p-8 sm:p-12 bg-gradient-to-br from-[#022A4E] via-[#012240] to-[#011627] text-white shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00976C]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-semibold text-emerald-300 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>CROSS-PLATFORM &amp; FULL-STACK ECOSYSTEMS</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Need a multi-tier solution combining Web, Mobile, and Custom Backends?
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                We engineer unified digital platforms where web apps, mobile apps, desktop systems, and AI workflows share seamless APIs, single-sign-on (SSO), and real-time database synchronizations.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-7 py-4 rounded-full text-xs font-bold text-[#022A4E] bg-white hover:bg-emerald-50 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:scale-105 cursor-pointer"
              >
                <span>Book Architecture Scoping Call</span>
                <ArrowUpRight className="w-4 h-4 text-[#00976C]" />
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inspect Delivered Projects</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Specifications Deep-Dive Modal */}
      {selectedModalService && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedModalService(null)}
        >
          <div 
            className="relative bg-white border border-slate-200 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl space-y-8 my-8 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#00976C] flex items-center justify-center">
                  {getServiceIcon(selectedModalService.id, "w-6 h-6")}
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#00976C] uppercase tracking-wider">
                    {selectedModalService.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-[#022A4E] tracking-tight">
                    {selectedModalService.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedModalService(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
                {selectedModalService.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedModalService.fullDescription}
              </p>
            </div>

            {/* Timeline & Delivery Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 font-mono block text-[11px]">Typical Timeline:</span>
                <strong className="text-[#022A4E] font-bold">{selectedModalService.typicalTimeline || '2 - 8 Weeks'}</strong>
              </div>
              <div>
                <span className="text-slate-500 font-mono block text-[11px]">IP Rights:</span>
                <strong className="text-emerald-700 font-bold">100% Client Owned</strong>
              </div>
              <div>
                <span className="text-slate-500 font-mono block text-[11px]">Post-Launch Care:</span>
                <strong className="text-[#022A4E] font-bold">30-Day Included Warranty</strong>
              </div>
            </div>

            {/* Deliverables Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Included Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedModalService.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00976C] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  setSelectedModalService(null);
                  onNavigate('service-detail', selectedModalService.id);
                }}
                className="text-xs font-semibold text-slate-600 hover:text-[#00976C] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Open Dedicated Service Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedModalService(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const sid = selectedModalService.id;
                    setSelectedModalService(null);
                    onNavigate('contact', sid);
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#00976C] hover:bg-[#00825B] transition-colors shadow-sm cursor-pointer"
                >
                  Initiate Inquiry
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
