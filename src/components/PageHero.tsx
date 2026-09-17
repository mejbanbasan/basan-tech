import React from 'react';
import { PageView } from '../types';
import { ChevronRight, ArrowUpRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  page?: PageView;
}

export interface PageHeroStat {
  label: string;
  value: string;
  highlight?: boolean;
}

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  badge: string;
  title: React.ReactNode;
  description: string;
  stats?: PageHeroStat[];
  ctaText?: string;
  ctaPage?: PageView;
  onNavigate: (page: PageView) => void;
}

export const PageHero: React.FC<PageHeroProps> = ({
  breadcrumbs,
  badge,
  title,
  description,
  stats,
  ctaText,
  ctaPage = 'contact',
  onNavigate,
}) => {
  return (
    <section className="relative pt-32 pb-14 sm:pb-18 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200 overflow-hidden">
      
      {/* Ambient background glow cones */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#022A4E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-[#00976C] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {crumb.page ? (
                <button
                  onClick={() => onNavigate(crumb.page!)}
                  className="hover:text-[#00976C] transition-colors cursor-pointer"
                >
                  {crumb.label}
                </button>
              ) : (
                <span className="text-[#022A4E] font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Hero Main Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#00976C] animate-pulse"></span>
              <span className="font-mono uppercase tracking-wider text-[11px] text-[#00976C] font-bold">
                {badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#022A4E] leading-[1.1]">
              {title}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {description}
            </p>

            {ctaText && (
              <div className="pt-2">
                <button
                  onClick={() => onNavigate(ctaPage)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#00976C] hover:bg-[#00825B] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>{ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-100" />
                </button>
              </div>
            )}
          </div>

          {/* Quick Stats Column (if provided) */}
          {stats && stats.length > 0 && (
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 sm:gap-4 p-5 rounded-3xl bg-white border border-slate-200 shadow-xs">
              {stats.map((stat, sIdx) => (
                <div key={sIdx} className="space-y-1">
                  <div className={`text-xl sm:text-2xl font-bold tracking-tight ${stat.highlight ? 'text-[#00976C]' : 'text-[#022A4E]'}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </section>
  );
};
