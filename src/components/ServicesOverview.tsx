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
  Check,
  Code2,
  CheckCircle2,
  Layers,
  Activity,
  ShieldCheck
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
    // Navigate directly to /contact with the selected service pre-filled
    if (onNavigate) {
      onNavigate('contact', serviceId);
    }
  };

  return (
    <section
      id="services-section"
      className={`${showBreadcrumb ? 'pt-24 sm:pt-28 pb-16 sm:pb-20' : 'py-16 sm:py-24'} bg-slate-50/70 border-b border-slate-200 text-slate-900 relative`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Breadcrumb Navigation (if on dedicated /services page) */}
        {showBreadcrumb && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
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

        {/* Section Header: Pill, Main Headline, Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#00976C] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#00976C] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider font-bold">OUR SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#022A4E] leading-[1.12]">
            Scalable Digital Services
            <span className="block text-slate-500 font-medium text-2xl sm:text-4xl lg:text-5xl mt-1">
              crafted for modern businesses
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            A modern engineering suite built for founders, enterprises, and high-growth businesses seeking robust, scalable digital solutions.
          </p>
        </div>

        {/* Bento Grid Layout (Row 1: 1 Standard + 1 Featured Wide; Row 2: 3 Standard; Row 3: 1 Featured Banner) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">

          {/* CARD 1: Website Development (Standard - lg:col-span-4) */}
          <div
            id="service-card-website-dev"
            onClick={() => handleSelectService('website-dev')}
            className="group bg-white border border-slate-200 hover:border-[#00976C] rounded-2xl sm:rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 lg:col-span-4 relative overflow-hidden"
          >
            <div className="space-y-5">
              {/* Category Pill Tag with Icon */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[11px] font-mono font-semibold text-[#00976C] shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-[#00976C]" />
                <span>WEB SERVICES</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors tracking-tight leading-snug">
                  Website Development
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Tailored website solutions and ultra-fast web platforms designed to meet specific business requirements and maximize conversion.
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Code2 className="w-3 h-3 text-[#00976C]" />
                  <span>Key Technologies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono font-semibold text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables Checkmarks */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-600 font-medium">Sub-second load speed & Lighthouse 95+</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-600 font-medium">Mobile-first responsive architecture</span>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSelectService('website-dev');
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 text-[#00976C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CARD 2: App Development (Android & iOS) (FEATURED WIDE CARD - lg:col-span-8) */}
          <div
            id="service-card-app-dev"
            onClick={() => handleSelectService('app-dev')}
            className="group bg-gradient-to-br from-white via-white to-emerald-50/40 border border-slate-200 hover:border-[#00976C] rounded-2xl sm:rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 lg:col-span-8 relative overflow-hidden"
          >
            {/* Subtle floating tech preview on larger screens */}
            <div className="absolute right-6 top-6 bottom-6 w-1/3 pointer-events-none hidden xl:flex flex-col justify-center items-end gap-2.5 opacity-80 group-hover:opacity-100 transition-opacity">
              <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs text-[11px] font-mono text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00976C]" />
                <span>iOS &amp; Android Native</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs text-[11px] font-mono text-slate-700 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#00976C]" />
                <span>60 FPS Fluid Transitions</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs text-[11px] font-mono text-slate-700 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00976C]" />
                <span>Biometric &amp; Offline Sync</span>
              </div>
            </div>

            <div className="space-y-5 max-w-xl">
              {/* Category Pill Tag with Icon */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[11px] font-mono font-semibold text-[#00976C] shadow-2xs">
                <Smartphone className="w-3.5 h-3.5 text-[#00976C]" />
                <span>APP EXPERIENCE</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors tracking-tight leading-snug">
                  App Development (Android &amp; iOS)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We design and develop native and cross-platform mobile apps for iOS and Android platforms with 60fps performance, clarity, and polished user journeys.
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Code2 className="w-3 h-3 text-[#00976C]" />
                  <span>Key Technologies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono font-semibold text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables Checkmarks */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-600 font-medium">Cross-platform single codebase efficiency &amp; offline storage</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-600 font-medium">Google Play Store &amp; Apple App Store publishing assistance</span>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSelectService('app-dev');
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 text-[#00976C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CARD 3: Custom Software Development (Standard - lg:col-span-4) */}
          <div
            id="service-card-custom-software"
            onClick={() => handleSelectService('custom-software')}
            className="group bg-white border border-slate-200 hover:border-[#00976C] rounded-2xl sm:rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 lg:col-span-4"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[11px] font-mono font-semibold text-[#00976C] shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-[#00976C]" />
                <span>ENTERPRISE SYSTEMS</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors tracking-tight leading-snug">
                  Custom Software Development
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Bespoke enterprise software to streamline operations, automate repetitive workflows, and drive sustainable business growth.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Code2 className="w-3 h-3 text-[#00976C]" />
                  <span>Key Technologies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Node.js', 'PostgreSQL', 'Docker', 'REST APIs'].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono font-semibold text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-600 font-medium">Tailored business logic &amp; automated workflows</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-600 font-medium">100% source code ownership &amp; client IP transfer</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSelectService('custom-software');
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 text-[#00976C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CARD 4: Desktop Software Development (Standard - lg:col-span-4) */}
          <div
            id="service-card-desktop-software"
            onClick={() => handleSelectService('desktop-software')}
            className="group bg-white border border-slate-200 hover:border-[#00976C] rounded-2xl sm:rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 lg:col-span-4"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[11px] font-mono font-semibold text-[#00976C] shadow-2xs">
                <Laptop className="w-3.5 h-3.5 text-[#00976C]" />
                <span>DESKTOP ENGINEERING</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors tracking-tight leading-snug">
                  Desktop Software Development
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  High-performance offline-first applications for Windows, macOS, and Linux built for speed, security, and hardware access.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Code2 className="w-3 h-3 text-[#00976C]" />
                  <span>Key Technologies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Electron', 'Tauri', 'C++', 'SQLite'].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono font-semibold text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-600 font-medium">Native OS integration &amp; local-first speed</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-600 font-medium">Offline functionality with secure cloud sync</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSelectService('desktop-software');
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 text-[#00976C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CARD 5: E-commerce Development (Standard - lg:col-span-4) */}
          <div
            id="service-card-ecommerce-dev"
            onClick={() => handleSelectService('ecommerce-dev')}
            className="group bg-white border border-slate-200 hover:border-[#00976C] rounded-2xl sm:rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 lg:col-span-4"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[11px] font-mono font-semibold text-[#00976C] shadow-2xs">
                <ShoppingBag className="w-3.5 h-3.5 text-[#00976C]" />
                <span>COMMERCE &amp; RETAIL</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors tracking-tight leading-snug">
                  E-commerce Development
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Development of secure, scalable, and user-friendly online stores and multi-vendor marketplaces that drive high conversion and sales.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Code2 className="w-3 h-3 text-[#00976C]" />
                  <span>Key Technologies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js', 'Shopify', 'Stripe', 'Razorpay'].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono font-semibold text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-600 font-medium">Frictionless multi-gateway checkout flows</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug text-slate-600 font-medium">Real-time inventory management &amp; orders</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSelectService('ecommerce-dev');
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 text-[#00976C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* CARD 6: AI Solutions (FEATURED WIDE CARD - lg:col-span-12) */}
          <div
            id="service-card-ai-solutions"
            onClick={() => handleSelectService('ai-solutions')}
            className="group rounded-2xl sm:rounded-3xl p-8 sm:p-10 bg-[#022A4E] text-white shadow-md relative overflow-hidden border border-slate-800 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-8 cursor-pointer hover:shadow-xl lg:col-span-12"
          >
            {/* Ambient emerald glow accent */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-[#00976C]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00976C]/25 transition-all" />

            {/* Left Content */}
            <div className="space-y-4 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-semibold text-emerald-300 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>ARTIFICIAL INTELLIGENCE &amp; AGENTS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                AI Solutions
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Intelligent RAG pipelines, deterministic autonomous agents, document intelligence, and enterprise LLM integrations engineered to automate operational tasks with zero proprietary data leakage.
              </p>

              {/* 4 Capability Checkmarks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                {[
                  'RAG Knowledge Bases',
                  'Autonomous Tool Agents',
                  'Workflow Automation',
                  'Zero Data Retention'
                ].map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00976C] shrink-0" />
                    <span className="truncate">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Button */}
            <div className="relative z-10 shrink-0">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSelectService('ai-solutions');
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-[#022A4E] bg-white hover:bg-emerald-50 transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
              >
                <span>Learn more &amp; Inquire</span>
                <ArrowUpRight className="w-4 h-4 text-[#00976C]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
