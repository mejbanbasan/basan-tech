import React, { useState } from 'react';
import { PageView } from '../types';
import { INSIGHTS_DATA } from '../data/insightsData';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  Tag,
  ArrowUpRight,
  CheckCircle2,
  Terminal
} from 'lucide-react';

interface InsightsListProps {
  onNavigate: (page: PageView, param?: string) => void;
  showBreadcrumb?: boolean;
}

export const InsightsList: React.FC<InsightsListProps> = ({ onNavigate, showBreadcrumb = true }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Engineering & Performance', 'Strategy & Architecture', 'Artificial Intelligence & Systems'];

  const filteredArticles = selectedCategory === 'All'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter(article => article.category === selectedCategory);

  const featuredArticle = INSIGHTS_DATA.find(article => article.featured) || INSIGHTS_DATA[0];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        {showBreadcrumb && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pb-4 sm:pb-6">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#00976C] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#022A4E] font-semibold">Insights &amp; Articles</span>
          </nav>
        )}

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <Sparkles className="w-3.5 h-3.5 text-[#00976C]" />
            <span>ENGINEERING INSIGHTS &amp; STRATEGY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
            Technical analysis, software architecture &amp; digital strategy.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Authoritative guides, architectural teardowns, and engineering insights written by the team at Basan Tech to help founders and engineering leaders build faster, scalable digital platforms.
          </p>
        </div>

        {/* Featured Article Hero Card */}
        {selectedCategory === 'All' && (
          <div className="mb-14">
            <div
              onClick={() => onNavigate('insight-detail', featuredArticle.slug)}
              className="group relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 hover:border-[#00976C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-50 via-teal-50/30 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col justify-between space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#022A4E] text-white font-semibold">
                    Featured Insight
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500 ml-auto">
                    <Clock className="w-3.5 h-3.5 text-[#00976C]" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>

                <div className="space-y-3 max-w-4xl">
                  <h2 className="text-2xl sm:text-4xl font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors tracking-tight leading-snug">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {featuredArticle.subtitle}
                  </p>
                </div>

                {/* Key Takeaways Highlight Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 max-w-4xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#022A4E] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00976C]" />
                    Key Architectural Takeaways
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {featuredArticle.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00976C] font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Author & CTA Row */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 text-[#00976C] border border-emerald-200 flex items-center justify-center">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#022A4E]">Basan Tech Engineering Team</div>
                      <div className="text-[11px] text-slate-500">Software Architecture &amp; Development • {featuredArticle.publishedAt}</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00976C] group-hover:translate-x-1 transition-transform">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#022A4E] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              onClick={() => onNavigate('insight-detail', article.slug)}
              className="group rounded-3xl bg-white border border-slate-200 hover:border-[#00976C] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-semibold text-[11px] border border-emerald-200/70 truncate">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px] shrink-0">
                    <Clock className="w-3 h-3 text-[#00976C]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors tracking-tight leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {article.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Author & Read Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 text-[#00976C] border border-emerald-200/80 flex items-center justify-center shrink-0">
                    <Terminal className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-[#022A4E] text-xs">Basan Tech Team</div>
                    <div className="text-[11px] text-slate-400">{article.publishedAt}</div>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-emerald-50 flex items-center justify-center text-slate-500 group-hover:text-[#00976C] transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Newsletter / Consultation CTA Card */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-[#022A4E] text-white relative overflow-hidden shadow-md">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00976C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Direct Engineering Consultation
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Have a complex software challenge or scaling question?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect directly with our lead software engineers. We review your current architecture, provide actionable recommendations, and outline clear development roadmaps with zero sales fluff.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#022A4E] bg-white hover:bg-emerald-50 hover:text-[#00976C] transition-all duration-200 cursor-pointer shadow-xs"
              >
                Initiate Architecture Scoping
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
