import React, { useState } from 'react';
import { PageView, ServiceId } from '../types';
import { SERVICES_DATA } from '../data/agencyData';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Monitor, 
  Share2, 
  ShoppingBag, 
  ArrowUpRight, 
  Check, 
  ChevronDown,
  Layers,
  Sparkles,
  Maximize2,
  X,
  Code2,
  Server,
  Database,
  Cloud
} from 'lucide-react';

interface ServicesOverviewProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
  initialServiceId?: ServiceId;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ 
  onNavigate, 
  initialServiceId 
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>(initialServiceId || 'web-dev');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'web-dev': return <Globe className="w-4 h-4" />;
      case 'app-dev': return <Smartphone className="w-4 h-4" />;
      case 'custom-software': return <Cpu className="w-4 h-4" />;
      case 'desktop-software': return <Monitor className="w-4 h-4" />;
      case 'social-media': return <Share2 className="w-4 h-4" />;
      case 'ecommerce': return <ShoppingBag className="w-4 h-4" />;
    }
  };

  // Build full preview images list for current service
  const serviceImages = [
    selectedService.image,
    ...(selectedService.galleryImages || [])
  ];

  const currentPreviewImage = serviceImages[activeImageIndex] || selectedService.image;

  return (
    <section id="services-section" className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-mono text-zinc-700 font-semibold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>OUR PRACTICES & CAPABILITIES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-zinc-950 tracking-tight leading-tight">
            Engineered for performance, designed for human scale.
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            We provide specialized engineering and growth services across six core competencies. Every engagement is built with direct engineer access, high design fidelity, and full client IP ownership.
          </p>
        </div>

        {/* Practice Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-zinc-950 text-zinc-950 shadow-md ring-2 ring-zinc-950/15'
                    : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 hover:bg-zinc-100 shadow-xs'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  isSelected 
                    ? 'bg-zinc-100 text-zinc-950 border border-zinc-300 shadow-2xs' 
                    : 'bg-zinc-100 text-zinc-700'
                }`}>
                  {getServiceIcon(service.id)}
                </div>

                <div>
                  <div className="text-xs font-bold tracking-tight line-clamp-1 text-zinc-950">
                    {service.title}
                  </div>
                  <div className={`text-[11px] mt-0.5 font-mono ${isSelected ? 'text-zinc-800 font-semibold' : 'text-zinc-500'}`}>
                    {service.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Practice Detail Container */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col: Overview, Features & Deliverables */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-800 font-semibold">
                    {selectedService.badge}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-950" />
                    Bespoke Engineering
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
                  {selectedService.title}
                </h3>
                
                <p className="text-base text-zinc-800 font-medium leading-relaxed">
                  {selectedService.tagline}
                </p>
                
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Core Features / Architecture */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Architectural Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/90 hover:border-zinc-300 transition-colors">
                      <div className="text-xs font-bold text-zinc-900 mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950"></span>
                        <span>{feat.title}</span>
                      </div>
                      <div className="text-xs text-zinc-600 leading-relaxed">
                        {feat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              {selectedService.techStack && selectedService.techStack.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                    Core Technologies & Frameworks
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.techStack.map((group, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                        <div className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
                          {group.category}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-800 font-medium shadow-2xs"
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
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Deliverables & Scope Included
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
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
                  className="px-6 py-3.5 rounded-full text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Start a {selectedService.title} Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id={`service-portfolio-link-${selectedService.id}`}
                  onClick={() => onNavigate('portfolio')}
                  className="px-5 py-3.5 rounded-full text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-white hover:bg-zinc-50 border border-zinc-300 transition-colors shadow-2xs cursor-pointer"
                >
                  View Related Projects
                </button>
              </div>

            </div>

            {/* Right Col: High-Resolution Product Showcase Image & Engagements */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Visual Product & Interface Showcase Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-zinc-900" />
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold">
                      Interface & Architecture Preview
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-700 bg-white border border-zinc-200 px-2 py-0.5 rounded shadow-2xs">
                    Concept {activeImageIndex + 1}/{serviceImages.length}
                  </span>
                </div>

                {/* Main Hero Preview Image with Hover Lightbox / Zoom Action */}
                <div className="relative group rounded-xl overflow-hidden bg-white border border-zinc-200 aspect-[16/10] shadow-2xs">
                  <img 
                    src={currentPreviewImage} 
                    alt={`${selectedService.title} preview`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-zinc-950/85 backdrop-blur-md border border-zinc-700 text-white font-mono text-[11px]">
                      {selectedService.title}
                    </span>

                    <button
                      id="view-service-image-zoom"
                      onClick={() => setLightboxImage(currentPreviewImage)}
                      className="p-1.5 rounded-md bg-white/95 backdrop-blur-md border border-zinc-300 text-zinc-800 hover:text-zinc-950 hover:bg-white transition-colors shadow-xs cursor-pointer"
                      title="Expand View"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Interactive Multi-View Gallery Thumbnails */}
                {serviceImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 pt-1">
                    {serviceImages.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        id={`service-thumb-${selectedService.id}-${idx}`}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative aspect-video rounded-lg overflow-hidden border transition-all cursor-pointer ${
                          activeImageIndex === idx
                            ? 'border-zinc-950 ring-2 ring-zinc-950/20 scale-[1.02]'
                            : 'border-zinc-200 opacity-70 hover:opacity-100 hover:border-zinc-400'
                        }`}
                      >
                        <img 
                          src={imgUrl} 
                          alt={`Thumbnail ${idx + 1}`} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                )}

                <div className="text-[11px] text-zinc-500 leading-relaxed border-t border-zinc-200 pt-3">
                  Delivered with responsive precision, clean component architecture, and 100% full client IP transfer.
                </div>
              </div>

              {/* Target Scenarios */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Ideal Engagements
                </div>
                <ul className="space-y-2 text-xs text-zinc-700">
                  {selectedService.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 mt-1.5 shrink-0" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service FAQ */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold border-b border-zinc-200 pb-2">
                  Common Questions
                </div>
                <div className="space-y-2">
                  {selectedService.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="rounded-xl bg-white border border-zinc-200 overflow-hidden shadow-2xs">
                      <button
                        id={`faq-toggle-${selectedService.id}-${fIdx}`}
                        onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                        className="w-full p-3.5 text-left text-xs font-semibold text-zinc-800 hover:text-zinc-950 flex items-center justify-between gap-2 cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-zinc-500 transition-transform ${openFaqIndex === fIdx ? 'rotate-180 text-zinc-950' : ''}`} />
                      </button>
                      {openFaqIndex === fIdx && (
                        <div className="p-3.5 pt-0 text-xs text-zinc-600 border-t border-zinc-100 leading-relaxed bg-zinc-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Full-Screen Lightbox Modal for Visual Inspection */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 bg-zinc-50">
              <span className="text-xs font-mono font-semibold text-zinc-800">
                {selectedService.title} • Visual System Preview
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1 rounded-lg text-zinc-500 hover:text-zinc-950 hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-hidden flex items-center justify-center bg-zinc-100">
              <img 
                src={lightboxImage} 
                alt="Enlarged preview" 
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
