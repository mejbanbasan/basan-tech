import React from 'react';
import { PageView, ServiceId, Service } from '../types';
import { ContactSection } from './ContactSection';
import { 
  ArrowUpRight, 
  Check, 
  Code2, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Globe, 
  Smartphone, 
  Laptop, 
  ShoppingBag, 
  Sparkles,
  HelpCircle,
  MessageCircle,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface ServiceDetailPageProps {
  service: Service;
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  service, 
  onNavigate 
}) => {
  const getServiceIcon = (id: ServiceId, className = "w-8 h-8") => {
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

  const whatsappInquiryUrl = `https://wa.me/919624895641?text=${encodeURIComponent(
    `Hello BasanTech Team, I would like to discuss a project regarding ${service.title}.\n\nPlease let me know your availability for a quick consultation.`
  )}`;

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* 1. Sleek Top Navigation Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <button 
          onClick={() => onNavigate('home')} 
          className="hover:text-[#00976C] transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>/</span>
        <button 
          onClick={() => onNavigate('services')} 
          className="hover:text-[#00976C] transition-colors cursor-pointer"
        >
          Services
        </button>
        <span>/</span>
        <span className="text-[#022A4E] font-semibold">{service.title}</span>
      </nav>

      {/* 2. Hero Section */}
      <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200/90 shadow-xs space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#022A4E] tracking-tight leading-[1.1]">
              {service.title}
            </h1>

            <p className="text-slate-800 text-lg sm:text-xl font-medium leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => {
                  const contactEl = document.getElementById('service-contact-container');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigate('contact', service.id);
                  }
                }}
                className="px-7 py-3.5 rounded-full bg-[#022A4E] hover:bg-[#00976C] text-white text-xs font-bold transition-all duration-200 flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Initiate {service.title} Project</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-300" />
              </button>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-emerald-700 text-xs font-semibold border border-slate-300 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#00976C]" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Service Icon Badge */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-[#00976C] shrink-0 self-start lg:self-center hidden sm:flex items-center justify-center shadow-2xs">
            {getServiceIcon(service.id, "w-16 h-16")}
          </div>

        </div>

        {/* Core Value Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-[11px] font-mono text-slate-500 uppercase">Estimated Timeline</span>
            <div className="text-sm font-bold text-[#022A4E]">{service.typicalTimeline || '2 - 6 Weeks'}</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-[11px] font-mono text-slate-500 uppercase">IP Ownership</span>
            <div className="text-sm font-bold text-[#022A4E]">100% Client Transfer</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-[11px] font-mono text-slate-500 uppercase">Architecture</span>
            <div className="text-sm font-bold text-[#022A4E]">Modern Full-Stack</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-[11px] font-mono text-slate-500 uppercase">Quality Warranty</span>
            <div className="text-sm font-bold text-[#022A4E]">30 Days Included</div>
          </div>
        </div>
      </div>

      {/* 3. Key Capabilities / Architectural Features */}
      {service.features && service.features.length > 0 && (
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <Sparkles className="w-3.5 h-3.5 text-[#00976C]" />
              <span>CAPABILITIES &amp; ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#022A4E] tracking-tight">
              Engineering Features &amp; Technical Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.features.map((feat, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-[#00976C] flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#022A4E]">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Deliverables & Production Tech Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Deliverables Checklist */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#00976C] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>What is Included</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E]">
              Standard Project Deliverables
            </h3>
          </div>

          <div className="space-y-3">
            {service.deliverables.map((item, dIdx) => (
              <div key={dIdx} className="flex items-start gap-3 text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="leading-snug font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Production Tech Stack */}
        <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#00976C] font-bold flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>Frameworks &amp; Tooling</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E]">
              Production Technology Stack
            </h3>
          </div>

          <div className="space-y-5">
            {service.techStack && service.techStack.length > 0 ? (
              service.techStack.map((category, cIdx) => (
                <div key={cIdx} className="space-y-2">
                  <div className="text-xs font-semibold text-slate-500 font-mono">
                    {category.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500">Industry standard full-stack frameworks.</p>
            )}
          </div>
        </div>

      </div>

      {/* 5. Real-World Use Cases */}
      {service.useCases && service.useCases.length > 0 && (
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#00976C] font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Practical Applications</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E]">
              Common Business Applications &amp; Scenarios
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.useCases.map((uc, uIdx) => (
              <div 
                key={uIdx}
                className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium shadow-2xs"
              >
                <div className="w-2 h-2 rounded-full bg-[#00976C] shrink-0" />
                <span>{uc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#00976C] font-bold flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions &amp; Answers</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#022A4E]">
              Frequently Asked Questions About {service.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.faqs.map((faq, fIdx) => (
              <div 
                key={fIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5"
              >
                <h4 className="text-base font-bold text-[#022A4E]">
                  {faq.question}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. Dedicated Contact / Consultation Section */}
      <div id="service-contact-container" className="pt-8 border-t border-slate-200">
        <ContactSection 
          onNavigate={onNavigate} 
          preselectedService={service.id} 
        />
      </div>

    </div>
  );
};
