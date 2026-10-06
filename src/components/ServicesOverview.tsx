import React from 'react';
import { PageView, ServiceId } from '../types';
import {
  Globe,
  Smartphone,
  Cpu,
  Laptop,
  ShoppingBag,
  Sparkles,
  ArrowUpRight,
  Code2,
  Database,
  Layers,
  Terminal,
  Activity,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface ServicesOverviewProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
  showBreadcrumb?: boolean;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onNavigate,
  showBreadcrumb = false
}) => {

  const handleSelectService = (serviceId: ServiceId) => {
    // 1. Notify parent router / state
    if (onNavigate) {
      onNavigate('home', serviceId);
    }

    // 2. Map service ID to exact dropdown value on contact form
    let mappedVal = '';
    switch (serviceId) {
      case 'website-dev':
      case 'web-dev':
        mappedVal = 'Website Development';
        break;
      case 'app-dev':
      case 'mobile-app':
        mappedVal = 'App Development (Android & iOS)';
        break;
      case 'custom-software':
        mappedVal = 'Custom Software Development';
        break;
      case 'desktop-software':
        mappedVal = 'Desktop Software Development';
        break;
      case 'ecommerce-dev':
      case 'ecommerce':
        mappedVal = 'E-commerce Development';
        break;
      case 'ai-solutions':
        mappedVal = 'AI Solutions';
        break;
      default:
        mappedVal = 'Website Development';
    }

    // 3. If contact section is in current DOM (homepage or /services page), scroll smoothly to it
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });

      // Update and focus the project type dropdown
      setTimeout(() => {
        const selectEl = document.getElementById('contact-form-project-type') as HTMLSelectElement | null;
        if (selectEl) {
          selectEl.value = mappedVal;
          selectEl.dispatchEvent(new Event('change', { bubbles: true }));
          selectEl.focus();
        }
      }, 350);
    } else {
      // If contact section is not on current page, navigate to dedicated contact page with service pre-selected
      onNavigate('contact', serviceId);
    }
  };

  return (
    <section
      id="services-section"
      className={`${showBreadcrumb ? 'pt-28 sm:pt-36 pb-24' : 'py-20 sm:py-28'} bg-[#021327] text-white relative overflow-hidden`}
    >
      {/* Dynamic Animated Line/Network Constellation Background Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Deep ambient radial glow spots matching brand navy & emerald green */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00976C]/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#022A4E]/40 rounded-full blur-[160px] translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />

        {/* SVG Network Grid & Constellation Nodes */}
        <svg
          className="absolute inset-0 w-full h-full opacity-35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00976C" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#022A4E" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00976C" stopOpacity="0.2" />
            </linearGradient>
            <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#00976C" fillOpacity="0.12" />
            </pattern>
          </defs>

          {/* Faint repeating grid */}
          <rect width="100%" height="100%" fill="url(#dotGrid)" />

          {/* Network constellation connected lines */}
          <g stroke="url(#netGrad)" strokeWidth="1" strokeDasharray="3 3">
            <line x1="8%" y1="15%" x2="24%" y2="28%" />
            <line x1="24%" y1="28%" x2="45%" y2="18%" />
            <line x1="45%" y1="18%" x2="68%" y2="25%" />
            <line x1="68%" y1="25%" x2="88%" y2="14%" />
            <line x1="24%" y1="28%" x2="20%" y2="58%" />
            <line x1="45%" y1="18%" x2="52%" y2="52%" />
            <line x1="68%" y1="25%" x2="78%" y2="60%" />
            <line x1="20%" y1="58%" x2="42%" y2="72%" />
            <line x1="52%" y1="52%" x2="42%" y2="72%" />
            <line x1="52%" y1="52%" x2="72%" y2="82%" />
            <line x1="78%" y1="60%" x2="90%" y2="85%" />
            <line x1="42%" y1="72%" x2="65%" y2="90%" />
            <line x1="72%" y1="82%" x2="65%" y2="90%" />
          </g>

          {/* Glowing Constellation Nodes */}
          <g fill="#00976C">
            <circle cx="8%" cy="15%" r="2" fillOpacity="0.6" />
            <circle cx="24%" cy="28%" r="3" fillOpacity="0.8" className="animate-pulse" />
            <circle cx="45%" cy="18%" r="2.5" fillOpacity="0.7" />
            <circle cx="68%" cy="25%" r="3" fillOpacity="0.9" className="animate-pulse" />
            <circle cx="88%" cy="14%" r="2" fillOpacity="0.5" />
            <circle cx="20%" cy="58%" r="2.5" fillOpacity="0.7" />
            <circle cx="52%" cy="52%" r="3.5" fill="#34D399" fillOpacity="0.8" className="animate-pulse" />
            <circle cx="78%" cy="60%" r="2.5" fillOpacity="0.6" />
            <circle cx="42%" cy="72%" r="3" fillOpacity="0.8" />
            <circle cx="72%" cy="82%" r="2.5" fillOpacity="0.7" />
            <circle cx="90%" cy="85%" r="2" fillOpacity="0.5" />
            <circle cx="65%" cy="90%" r="3" fillOpacity="0.8" className="animate-pulse" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Breadcrumb Navigation (if on dedicated /services page) */}
        {showBreadcrumb && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 font-medium pb-6">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-white font-semibold">Services</span>
          </nav>
        )}

        {/* Section Header: Pill, Headline, Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00976C]/10 border border-[#00976C]/30 text-xs font-semibold text-emerald-300 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00976C] animate-pulse"></span>
            <span className="font-mono text-[11px] uppercase tracking-wider font-bold">OUR SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            Scalable Digital Services
            <span className="block text-slate-300 font-medium text-2xl sm:text-4xl lg:text-5xl mt-1">
              crafted for modern businesses
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            A modern engineering suite built for founders, enterprises, and high-growth businesses seeking robust, scalable digital solutions.
          </p>
        </div>

        {/* BENTO-STYLE GRID (Row 1: 1 Standard + 1 Wide Featured; Row 2: 3 Standard; Row 3: 1 Wide Banner) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* CARD 1: Website Development (Standard - lg:col-span-4) */}
          <div
            onClick={() => handleSelectService('website-dev')}
            className="group relative rounded-3xl bg-[#06182E]/85 border border-slate-800/90 hover:border-[#00976C]/70 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-950/40 backdrop-blur-md cursor-pointer hover:-translate-y-1 lg:col-span-4"
          >
            {/* Subtle background graphic texture */}
            <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-[#00976C]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00976C]/20 transition-all duration-500" />
            <div className="absolute right-4 top-4 opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none">
              <Globe className="w-28 h-28 text-emerald-400 stroke-[1]" />
            </div>

            <div className="space-y-4 relative z-10">
              {/* Category Pill Tag with Icon */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-[11px] font-mono font-medium text-slate-300 shadow-xs">
                <Globe className="w-3.5 h-3.5 text-[#00976C]" />
                <span>WEB SERVICES</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                Website Development
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Tailored website solutions and ultra-fast web platforms designed to meet specific business requirements and maximize conversion.
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectService('website-dev');
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-[#00976C] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* CARD 2: App Development (Android & iOS) (FEATURED WIDE CARD - lg:col-span-8) */}
          <div
            onClick={() => handleSelectService('app-dev')}
            className="group relative rounded-3xl bg-[#06182E]/85 border border-slate-800/90 hover:border-[#00976C]/70 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-950/40 backdrop-blur-md cursor-pointer hover:-translate-y-1 lg:col-span-8"
          >
            {/* Visual Phone Mockup & Floating Hexagonal Badges Inspired by Reference */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden sm:flex items-center justify-end pr-8 overflow-hidden">
              <div className="relative w-64 h-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {/* Glowing phone silhouette */}
                <div className="w-36 h-56 rounded-2xl border-2 border-slate-700/70 bg-gradient-to-b from-slate-900/90 to-[#021327]/90 shadow-2xl relative p-2.5 overflow-hidden">
                  <div className="w-12 h-1 bg-slate-700 mx-auto rounded-full mb-3" />
                  <div className="space-y-2">
                    <div className="w-full h-12 rounded-lg bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="w-3/4 h-2 bg-slate-800 rounded" />
                    <div className="w-1/2 h-2 bg-slate-800 rounded" />
                  </div>
                </div>

                {/* Floating Tech Hexagonal/Round Pills (React, Apple, Android, Cloud) */}
                <div className="absolute top-8 right-6 w-9 h-9 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-md flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-10 right-10 w-9 h-9 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-md flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="absolute top-1/2 right-2 w-8 h-8 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-md flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform">
                  <Activity className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="space-y-4 relative z-10 max-w-xl">
              {/* Category Pill Tag with Icon */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-[11px] font-mono font-medium text-slate-300 shadow-xs">
                <Smartphone className="w-3.5 h-3.5 text-[#00976C]" />
                <span>APP EXPERIENCE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                App Development (Android &amp; iOS)
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                We design and develop native and cross-platform mobile apps for iOS and Android platforms with 60fps performance, clarity, and polished user journeys.
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectService('app-dev');
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-[#00976C] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* CARD 3: Custom Software Development (Standard - lg:col-span-4) */}
          <div
            onClick={() => handleSelectService('custom-software')}
            className="group relative rounded-3xl bg-[#06182E]/85 border border-slate-800/90 hover:border-[#00976C]/70 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-950/40 backdrop-blur-md cursor-pointer hover:-translate-y-1 lg:col-span-4"
          >
            {/* Ambient Background Graphic */}
            <div className="absolute right-4 top-4 opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none">
              <Cpu className="w-24 h-24 text-emerald-400 stroke-[1]" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-[11px] font-mono font-medium text-slate-300 shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-[#00976C]" />
                <span>ENTERPRISE SYSTEMS</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                Custom Software Development
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Bespoke enterprise software to streamline operations, automate repetitive workflows, and drive sustainable business growth.
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectService('custom-software');
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-[#00976C] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* CARD 4: Desktop Software Development (Standard - lg:col-span-4) */}
          <div
            onClick={() => handleSelectService('desktop-software')}
            className="group relative rounded-3xl bg-[#06182E]/85 border border-slate-800/90 hover:border-[#00976C]/70 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-950/40 backdrop-blur-md cursor-pointer hover:-translate-y-1 lg:col-span-4"
          >
            {/* Ambient Background Graphic */}
            <div className="absolute right-4 top-4 opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none">
              <Laptop className="w-24 h-24 text-emerald-400 stroke-[1]" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-[11px] font-mono font-medium text-slate-300 shadow-xs">
                <Laptop className="w-3.5 h-3.5 text-[#00976C]" />
                <span>DESKTOP ENGINEERING</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                Desktop Software Development
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                High-performance offline-first applications for Windows, macOS, and Linux built for speed, security, and hardware access.
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectService('desktop-software');
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-[#00976C] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* CARD 5: E-Commerce Development (Standard - lg:col-span-4) */}
          <div
            onClick={() => handleSelectService('ecommerce-dev')}
            className="group relative rounded-3xl bg-[#06182E]/85 border border-slate-800/90 hover:border-[#00976C]/70 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-950/40 backdrop-blur-md cursor-pointer hover:-translate-y-1 lg:col-span-4"
          >
            {/* Ambient Background Graphic */}
            <div className="absolute right-4 top-4 opacity-15 group-hover:opacity-30 transition-opacity pointer-events-none">
              <ShoppingBag className="w-24 h-24 text-emerald-400 stroke-[1]" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-[11px] font-mono font-medium text-slate-300 shadow-xs">
                <ShoppingBag className="w-3.5 h-3.5 text-[#00976C]" />
                <span>COMMERCE &amp; RETAIL</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                E-commerce Development
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Development of secure, scalable, and user-friendly online stores and multi-vendor marketplaces that drive high conversion and sales.
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectService('ecommerce-dev');
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-[#00976C] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* CARD 6: AI Solutions (FEATURED WIDE CARD - lg:col-span-12) */}
          <div
            onClick={() => handleSelectService('ai-solutions')}
            className="group relative rounded-3xl bg-[#06182E]/85 border border-slate-800/90 hover:border-[#00976C]/70 p-6 sm:p-10 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-950/40 backdrop-blur-md cursor-pointer hover:-translate-y-1 lg:col-span-12"
          >
            {/* Glowing Accent Spot */}
            <div className="absolute left-1/3 top-0 w-80 h-32 bg-[#00976C]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00976C]/25 transition-all" />

            {/* Content Left */}
            <div className="space-y-4 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-[11px] font-mono font-medium text-slate-300 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00976C]" />
                <span>ARTIFICIAL INTELLIGENCE &amp; AGENTS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                AI Solutions
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Intelligent RAG pipelines, deterministic autonomous agents, document intelligence, and enterprise LLM integrations engineered to automate operational tasks with zero proprietary data leakage.
              </p>
            </div>

            {/* Neural Interactive Preview Right */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10 shrink-0">
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00976C]" />
                  <span>RAG Knowledge Bases</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00976C]" />
                  <span>Autonomous Tool Agents</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00976C]" />
                  <span>Workflow Automation</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00976C]" />
                  <span>Zero Data Retention</span>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectService('ai-solutions');
                }}
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#00976C] hover:bg-[#00825B] transition-all flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer shrink-0"
              >
                <span>Learn more &amp; Inquire</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
