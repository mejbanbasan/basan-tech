import React, { useState } from 'react';
import { PageView, ServiceId, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/agencyData';
import { 
  ArrowUpRight, 
  X, 
  Check, 
  Layers,
  ExternalLink,
  Globe,
  Sparkles,
  Smartphone,
  CheckCircle2,
  Code2,
  Laptop
} from 'lucide-react';

interface PortfolioShowcaseProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
  limit?: number;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onNavigate, limit }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'education', label: 'Education & Learning' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'healthcare', label: 'Healthcare & Wellness' },
    { id: 'ngo', label: 'NGO & Community' },
    { id: 'incubation', label: 'Incubation & Tech' },
  ];

  const filteredStudies = CASE_STUDIES.filter(study => {
    if (selectedFilter === 'all') return true;
    return study.category === selectedFilter;
  });

  const displayedStudies = limit ? filteredStudies.slice(0, limit) : filteredStudies;

  return (
    <section id="portfolio-section" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-[#00976C]"></span>
              <span>VERIFIED REAL-WORLD CLIENT PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
              Our Work &amp; Delivered Projects
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Explore production platforms built by BasanTech. Every project features clean engineering, responsive design, and verified live platform links.
            </p>
          </div>

          {limit && (
            <button
              id="portfolio-view-all-header-btn"
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#022A4E] hover:text-[#00976C] bg-white hover:bg-slate-50 border border-slate-300 transition-colors shrink-0 shadow-2xs cursor-pointer"
            >
              <span>View All {CASE_STUDIES.length} Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00976C]" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {filters.map((f) => (
            <button
              key={f.id}
              id={`portfolio-filter-${f.id}`}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                selectedFilter === f.id
                  ? 'bg-[#00976C] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-[#00976C] hover:border-emerald-300 hover:bg-emerald-50/30 border border-slate-200 shadow-2xs'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedStudies.map((study) => (
            <div
              key={study.id}
              id={`case-card-${study.id}`}
              className="group rounded-3xl bg-white border border-slate-200 hover:border-[#00976C] overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5"
              onClick={() => setActiveModalStudy(study)}
            >
              {/* Media Preview */}
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022A4E]/90 via-[#022A4E]/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#022A4E]/85 backdrop-blur-md text-white border border-slate-600/50 font-medium">
                      {study.categoryLabel}
                    </span>
                  </div>

                  {/* Live Link Button on Card Image */}
                  {study.liveUrl && (
                    <div className="absolute top-4 right-4">
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 rounded-full bg-white/95 hover:bg-[#00976C] text-slate-800 hover:text-white backdrop-blur-md transition-all inline-flex items-center gap-1 shadow-xs text-[11px] font-semibold group/live"
                        title={`Open live platform: ${study.title}`}
                      >
                        <Globe className="w-3 h-3 text-[#00976C] group-hover/live:text-white" />
                        <span>Live Site</span>
                        <ExternalLink className="w-2.5 h-2.5 text-slate-400 group-hover/live:text-white" />
                      </a>
                    </div>
                  )}

                  {/* Bottom info banner */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-200 font-mono">
                    <span className="font-semibold text-white truncate max-w-[200px]">{study.client}</span>
                    <span className="text-emerald-300">{study.year}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors line-clamp-1">
                        {study.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#00976C] transition-colors shrink-0" />
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  {/* What We Built Highlight */}
                  <div className="p-3 rounded-xl bg-emerald-50/40 border border-emerald-200/70 space-y-1">
                    <div className="text-[10px] font-mono uppercase font-bold text-[#00976C] flex items-center gap-1">
                      <Code2 className="w-3 h-3 text-[#00976C]" />
                      <span>What We Built</span>
                    </div>
                    <p className="text-xs text-slate-800 line-clamp-2 leading-snug">
                      {study.whatWeBuilt || study.solution}
                    </p>
                  </div>

                  {/* Technologies Used Pills */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono uppercase font-semibold text-zinc-400">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {study.techStack?.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 text-zinc-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.techStack && study.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-zinc-100 text-zinc-500 font-medium">
                          +{study.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
                <button
                  onClick={() => setActiveModalStudy(study)}
                  className="text-xs font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-800 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 transition-colors flex items-center gap-1"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* View All CTA on Home */}
        {limit && (
          <div className="pt-6 text-center">
            <button
              id="portfolio-explore-all-cta"
              onClick={() => onNavigate('portfolio')}
              className="px-8 py-3.5 rounded-full text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Explore All {CASE_STUDIES.length} Delivered Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Comprehensive Project Detail Modal */}
      {activeModalStudy && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
          onClick={() => setActiveModalStudy(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white border border-zinc-200 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between sticky top-0 z-20">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 border border-zinc-200 text-zinc-900 font-semibold">
                  {activeModalStudy.categoryLabel}
                </span>
                <span className="text-xs text-zinc-600 font-mono">
                  Client / Platform: <strong className="text-zinc-950">{activeModalStudy.client}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2">
                {activeModalStudy.liveUrl && (
                  <a
                    href={activeModalStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 transition-colors shadow-2xs"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  id="close-case-study-modal"
                  onClick={() => setActiveModalStudy(null)}
                  className="p-1.5 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
              
              {/* Hero Banner with Title */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                <img
                  src={activeModalStudy.heroImage}
                  alt={activeModalStudy.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl sm:text-3xl font-bold text-white">
                      {activeModalStudy.title}
                    </h2>
                    <p className="text-zinc-200 text-sm mt-1 max-w-xl">
                      {activeModalStudy.tagline}
                    </p>
                  </div>
                  {activeModalStudy.liveUrl && (
                    <a
                      href={activeModalStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-100 transition-colors shrink-0 inline-flex items-center gap-1.5 shadow-md self-start sm:self-auto"
                    >
                      <Globe className="w-3.5 h-3.5 text-zinc-950" />
                      <span>Open Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Problem / Objective & What We Built */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                    Problem & Objectives
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    {activeModalStudy.problemObjective || activeModalStudy.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                    What Basan Tech Built
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    {activeModalStudy.whatWeBuilt || activeModalStudy.solution}
                  </p>
                </div>
              </div>

              {/* Key Features List */}
              {activeModalStudy.keyFeatures && activeModalStudy.keyFeatures.length > 0 && (
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-zinc-950" />
                    <span>Delivered Features & Functionality</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalStudy.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Blueprint */}
              {activeModalStudy.architecture && activeModalStudy.architecture.length > 0 && (
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold flex items-center gap-2">
                    <Layers className="w-4 h-4 text-zinc-700" />
                    <span>Engineered Architecture & System Stack</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalStudy.architecture.map((arch, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 mt-1.5 shrink-0" />
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Technologies Utilized
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModalStudy.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-800 font-medium shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
              <div className="text-xs text-zinc-600">
                Ready to build a reliable platform with Basan Tech?
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                {activeModalStudy.liveUrl && (
                  <a
                    href={activeModalStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-100 border border-zinc-300 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-950" />
                  </a>
                )}
                <button
                  id="modal-inquire-similar-btn"
                  onClick={() => {
                    setActiveModalStudy(null);
                    onNavigate('contact');
                  }}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#022A4E] hover:bg-[#00976C] transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Start Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
