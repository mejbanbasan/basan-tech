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
  Monitor, 
  Share2, 
  ShoppingBag,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="hero-section" className="relative min-h-[90vh] pt-32 pb-16 flex flex-col justify-center bg-zinc-50 border-b border-zinc-200">
      
      {/* Subtle architectural ambient background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Studio Status Marker */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs text-zinc-700 font-mono shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>BASAN TECH • DIGITAL PRODUCT & SOFTWARE STUDIO</span>
          </div>
        </div>

        {/* Hero Title & Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-950 leading-[1.08]">
              We design and build bespoke software, platforms, and digital systems.
            </h1>
            
            <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl">
              Basan Tech is an engineering-first studio. We partner with growing businesses to deliver high-performance <strong className="text-zinc-900 font-semibold">Web Applications</strong>, <strong className="text-zinc-900 font-semibold">Mobile Apps</strong>, <strong className="text-zinc-900 font-semibold">Custom Software</strong>, <strong className="text-zinc-900 font-semibold">Desktop Systems</strong>, and <strong className="text-zinc-900 font-semibold">E-Commerce</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-contact-btn"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-zinc-950 hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-portfolio-btn"
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3.5 rounded-full text-sm font-medium text-zinc-800 hover:text-zinc-950 bg-white hover:bg-zinc-100 border border-zinc-300 transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>View Our Real Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Practice Index */}
          <div className="lg:col-span-4 bg-white border border-zinc-200 rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">Core Practices</span>
              <span className="text-xs font-mono text-zinc-700 font-semibold bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">06 Capabilities</span>
            </div>

            <div className="space-y-2">
              {[
                { id: 'web-dev' as ServiceId, label: 'Web Development', icon: Globe, desc: 'High-Performance React & Next.js Platforms' },
                { id: 'app-dev' as ServiceId, label: 'Mobile App Development', icon: Smartphone, desc: 'iOS & Android Native & Cross-Platform' },
                { id: 'custom-software' as ServiceId, label: 'Custom Software & Automation', icon: Cpu, desc: 'Tailored Business Logic & Cloud Systems' },
                { id: 'desktop-software' as ServiceId, label: 'Desktop Software', icon: Monitor, desc: 'Cross-Platform Windows & macOS Apps' },
                { id: 'social-media' as ServiceId, label: 'Social Media Strategy', icon: Share2, desc: 'Digital Presence & Growth Marketing' },
                { id: 'ecommerce' as ServiceId, label: 'E-Commerce Platforms', icon: ShoppingBag, desc: 'Online Storefronts & Custom Checkouts' }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    id={`hero-practice-card-${item.id}`}
                    onClick={() => onNavigate('service-detail', item.id)}
                    className="w-full group flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-50 text-left transition-colors cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200 group-hover:border-zinc-300 text-zinc-700 group-hover:text-zinc-950 transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-zinc-800 group-hover:text-zinc-950 transition-colors">
                          {item.label}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-zinc-500 truncate mt-0.5">{item.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-zinc-100">
              <button
                id="hero-view-all-services-link"
                onClick={() => onNavigate('services')}
                className="w-full text-center text-xs font-medium text-zinc-600 hover:text-zinc-950 py-1 transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>Explore All Practices & Capabilities</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Realistic Animated Studio Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 py-8 border-t border-zinc-200">
          {AGENCY_STATS.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 transition-colors">
              <div className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight flex items-baseline">
                {stat.numericValue !== undefined ? (
                  <AnimatedCounter 
                    end={stat.numericValue} 
                    suffix={stat.suffix || ''} 
                  />
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>
              <div className="text-xs text-zinc-800 mt-1 font-semibold">
                {stat.label}
              </div>
              {stat.desc && (
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  {stat.desc}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Real Projects & Verifiable Platforms Section */}
        <div className="pt-10 border-t border-zinc-200">
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-600 font-semibold">
                    Real Projects. Practical Solutions. Built for Business.
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Our real work is our proof. Explore live platforms engineered and delivered by Basan Tech.
                </p>
              </div>

              <button
                onClick={() => onNavigate('portfolio')}
                className="text-xs font-medium text-zinc-900 hover:text-zinc-600 flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>View Full Portfolio Showcase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Real Client Platforms Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
              {VERIFIED_CLIENT_PLATFORMS.map((platform, idx) => (
                <div
                  key={idx}
                  id={`hero-platform-card-${platform.caseStudyId}`}
                  className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                        {platform.name}
                      </span>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                        title={`Visit live site ${platform.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <p className="text-[11px] text-zinc-500 font-mono leading-tight">
                      {platform.category}
                    </p>
                  </div>

                  <div className="pt-3 mt-2 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[10px] text-zinc-600 truncate max-w-[130px]">
                      {platform.tagline}
                    </span>
                    <button
                      onClick={() => onNavigate('portfolio')}
                      className="text-[11px] font-medium text-zinc-700 group-hover:text-zinc-950 flex items-center gap-0.5 shrink-0"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3 h-3" />
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

