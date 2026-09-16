import React, { useState } from 'react';
import { PageView, ServiceId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Sparkles,
  Layers,
  Code2,
  Server,
  Layout,
  ArrowUpRight, 
  Check, 
  ChevronDown,
  Maximize2,
  X
} from 'lucide-react';

interface ServicesOverviewProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
  initialServiceId?: ServiceId;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ 
  onNavigate, 
  initialServiceId 
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>(initialServiceId || 'custom-software');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'custom-software': return <Cpu className="w-4 h-4" />;
      case 'web-dev': return <Globe className="w-4 h-4" />;
      case 'mobile-app': case 'app-dev': return <Smartphone className="w-4 h-4" />;
      case 'ai-solutions': return <Sparkles className="w-4 h-4" />;
      case 'hubspot-dev': return <Layers className="w-4 h-4" />;
      case 'reactjs-dev': return <Code2 className="w-4 h-4" />;
      case 'wordpress-dev': return <Layout className="w-4 h-4" />;
      case 'nodejs-dev': return <Server className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  // Build full preview images list for current service
  const serviceImages = [
    selectedService.image,
    ...(selectedService.galleryImages || [])
  ];

  const currentPreviewImage = serviceImages[activeImageIndex] || selectedService.image;

  return (
    <section id="services-section" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
            <span>OUR 8 CORE PRACTICES &amp; CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
            Specialized engineering for modern businesses.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From custom business software and full-stack web platforms to mobile applications and AI automations, we deliver tailored software built with clean craftsmanship.
          </p>
        </div>

        {/* 8 Practices Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedService.id === service.id;
            return (
              <button
                key={service.id}
                id={`service-tab-${service.id}`}
                onClick={() => {
                  setSelectedServiceId(service.id);
                  setActiveImageIndex(0);
                  setOpenFaqIndex(null);
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-50/40 border-[#00976C] text-[#022A4E] shadow-sm ring-2 ring-[#00976C]/30'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-[#00976C] hover:border-emerald-200 hover:bg-slate-50 shadow-2xs'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  isSelected 
                    ? 'bg-[#00976C] text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {getServiceIcon(service.id)}
                </div>

                <div>
                  <div className="text-xs font-bold tracking-tight line-clamp-2 leading-snug">
                    {service.title}
                  </div>
                  <div className={`text-[10px] mt-1 font-mono ${isSelected ? 'text-[#00976C] font-semibold' : 'text-slate-400'}`}>
                    {service.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Practice Detail Container */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col: Overview, Features & Deliverables */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                    {selectedService.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#00976C]" />
                    Full Source Code Handover
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold text-[#022A4E] tracking-tight">
                  {selectedService.title}
                </h3>
                
                <p className="text-base text-slate-800 font-medium leading-relaxed">
                  {selectedService.tagline}
                </p>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Core Features */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Core Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#00976C] transition-colors">
                      <div className="text-xs font-bold text-[#022A4E] mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00976C]"></span>
                        <span>{feat.title}</span>
                      </div>
                      <div className="text-xs text-slate-600 leading-relaxed">
                        {feat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              {selectedService.techStack && selectedService.techStack.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Core Technologies &amp; Frameworks
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.techStack.map((group, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="text-[11px] font-mono font-bold text-[#022A4E] uppercase tracking-wider mb-2">
                          {group.category}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-700 font-medium shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Deliverables &amp; Scope Included
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Kickoff CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  id={`service-inquire-btn-${selectedService.id}`}
                  onClick={() => onNavigate('contact', selectedService.id)}
                  className="px-6 py-3.5 rounded-full text-xs font-bold text-white bg-[#00976C] hover:bg-[#00825B] transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Start a {selectedService.title} Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-100" />
                </button>

                <button
                  id={`service-portfolio-link-${selectedService.id}`}
                  onClick={() => onNavigate('portfolio')}
                  className="px-5 py-3.5 rounded-full text-xs font-semibold text-[#022A4E] hover:text-[#00976C] bg-white hover:bg-emerald-50/40 border border-slate-300 hover:border-[#00976C] transition-colors shadow-2xs cursor-pointer"
                >
                  View Related Projects
                </button>
              </div>

            </div>

            {/* Right Col: Interface Showcase Image */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#022A4E]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                      Practice Overview Preview
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00976C] bg-white border border-slate-200 px-2 py-0.5 rounded shadow-2xs">
                    {selectedService.typicalTimeline || 'Active Delivery'}
                  </span>
                </div>

                {/* Primary Display */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-white aspect-video shadow-xs group">
                  <img
                    src={currentPreviewImage}
                    alt={`${selectedService.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <button
                    onClick={() => setLightboxImage(currentPreviewImage)}
                    className="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
                    title="Enlarge preview"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Thumbnail strip */}
                {serviceImages.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {serviceImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-16 h-12 rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer ${
                          activeImageIndex === idx 
                            ? 'border-[#00976C] ring-2 ring-[#00976C]/30 shadow-xs' 
                            : 'border-slate-200 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt="" 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer" 
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Service FAQs Accordion */}
              {selectedService.faqs && selectedService.faqs.length > 0 && (
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 pb-2">
                    Frequently Asked Questions
                  </div>
                  <div className="space-y-2">
                    {selectedService.faqs.map((faq, fIdx) => {
                      const isOpen = openFaqIndex === fIdx;
                      return (
                        <div key={fIdx} className="border border-slate-200 rounded-xl overflow-hidden">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                            className="w-full p-3.5 text-left text-xs font-semibold text-[#022A4E] hover:text-[#00976C] flex items-center justify-between gap-3 bg-slate-50/70 cursor-pointer transition-colors"
                          >
                            <span>{faq.question}</span>
                            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#00976C]' : ''}`} />
                          </button>
                          {isOpen && (
                            <div className="p-3.5 text-xs text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Image Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={lightboxImage} 
              alt="Enlarged preview" 
              className="max-h-[85vh] w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
