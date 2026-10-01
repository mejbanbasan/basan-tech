import React, { useEffect } from 'react';
import { PageView } from '../types';
import { INSIGHTS_DATA } from '../data/insightsData';
import {
  Clock,
  Calendar,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code2,
  Copy,
  Check
} from 'lucide-react';

interface InsightDetailPageProps {
  slug: string;
  onNavigate: (page: PageView, param?: string) => void;
}

export const InsightDetailPage: React.FC<InsightDetailPageProps> = ({ slug, onNavigate }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);
  const [shareFeedback, setShareFeedback] = React.useState(false);

  const article = INSIGHTS_DATA.find((a) => a.slug === slug) || INSIGHTS_DATA[0];
  const relatedArticles = INSIGHTS_DATA.filter((a) => a.slug !== article.slug);

  // Inject Article / BlogPosting Schema.org JSON-LD dynamically
  useEffect(() => {
    const scriptId = 'json-ld-article-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      '@id': `https://basantech.online/insights/${article.slug}#article`,
      'headline': article.title,
      'description': article.description,
      'datePublished': '2026-10-01T00:00:00+05:30',
      'dateModified': '2026-10-01T00:00:00+05:30',
      'inLanguage': 'en-US',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `https://basantech.online/insights/${article.slug}`
      },
      'author': {
        '@type': 'Person',
        '@id': 'https://basantech.online/#founder',
        'name': article.author.name,
        'jobTitle': article.author.role,
        'url': 'https://basantech.online/about'
      },
      'publisher': {
        '@type': 'Organization',
        '@id': 'https://basantech.online/#organization',
        'name': 'Basan Tech',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://basantech.online/basantech-logo.png'
        }
      },
      'keywords': article.tags.join(', ')
    };

    scriptTag.text = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [article]);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 2500);
    }
  };

  return (
    <article className="pt-24 sm:pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Breadcrumb & Back Link */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-8">
          <button
            onClick={() => onNavigate('insights')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#00976C] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-[#022A4E] bg-white border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer shadow-2xs"
            title="Share or copy article link"
          >
            <Share2 className="w-3.5 h-3.5 text-[#00976C]" />
            <span>{shareFeedback ? 'Link Copied!' : 'Share Article'}</span>
          </button>
        </div>

        {/* Article Header Meta */}
        <header className="space-y-6 mb-10">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-[#00976C]" />
              <span>{article.publishedAt}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3.5 h-3.5 text-[#00976C]" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            {article.subtitle}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-200/70">
            <div className="w-11 h-11 rounded-full bg-[#022A4E] text-white flex items-center justify-center font-bold text-sm">
              MB
            </div>
            <div>
              <div className="text-sm font-bold text-[#022A4E]">{article.author.name}</div>
              <div className="text-xs text-slate-500">{article.author.role} at Basan Tech</div>
            </div>
          </div>
        </header>

        {/* Key Takeaways Callout Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#022A4E]">
            <CheckCircle2 className="w-4 h-4 text-[#00976C]" />
            <span>Executive &amp; Architectural Key Takeaways</span>
          </div>

          <div className="grid grid-cols-1 gap-3 text-sm text-slate-700">
            {article.keyTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00976C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="leading-relaxed font-normal">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Article Content */}
        <div className="space-y-12 text-slate-800 leading-relaxed">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#022A4E] tracking-tight pt-2">
                {section.heading}
              </h2>

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {para}
                </p>
              ))}

              {section.subpoints && (
                <ul className="space-y-3 pt-2 pl-2">
                  {section.subpoints.map((pt, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-[#00976C] mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.codeSnippet && (
                <div className="my-6 rounded-2xl bg-[#022A4E] text-slate-100 overflow-hidden border border-slate-800 shadow-sm">
                  <div className="px-4 py-2.5 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-[#00976C]" />
                      <span>{section.codeSnippet.language}</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(section.codeSnippet!.code)}
                      className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedCode === section.codeSnippet.code ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed text-emerald-300">
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                  {section.codeSnippet.caption && (
                    <div className="px-4 py-2 bg-slate-900/50 text-[11px] text-slate-400 font-sans border-t border-slate-800/80">
                      {section.codeSnippet.caption}
                    </div>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Article Tags */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-2">Topics:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white border border-slate-200 text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-2xs">
          <div className="w-16 h-16 rounded-2xl bg-[#022A4E] text-white flex items-center justify-center font-bold text-xl shrink-0">
            MB
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg font-bold text-[#022A4E]">Written by {article.author.name}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founder &amp; Lead Software Engineer at Basan Tech. Specializing in high-performance web systems, custom enterprise software architectures, and deterministic AI automation workflows. Headquartered in Palanpur, Gujarat.
            </p>
          </div>
        </div>

        {/* Strategic End Call-To-Action (CTA) */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#022A4E] text-white space-y-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00976C]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-xs font-semibold text-emerald-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Engineering Partnership</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-snug">
              {article.ctaHeading}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {article.ctaText}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#022A4E] bg-white hover:bg-emerald-50 hover:text-[#00976C] transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.01]"
              >
                Initiate Project Consultation
              </button>

              <button
                onClick={() => onNavigate('insights')}
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Browse All Insights
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles Strip */}
        <div className="mt-16 pt-12 border-t border-slate-200 space-y-6">
          <h3 className="text-xl font-bold text-[#022A4E]">More Insights From Basan Tech</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => {
                  onNavigate('insight-detail', rel.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#00976C] transition-all cursor-pointer shadow-2xs hover:shadow-xs space-y-3"
              >
                <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md w-fit border border-emerald-200/60">
                  {rel.category}
                </div>
                <h4 className="text-base font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors leading-snug">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {rel.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{rel.readTime}</span>
                  <span className="font-bold text-[#00976C] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
};
