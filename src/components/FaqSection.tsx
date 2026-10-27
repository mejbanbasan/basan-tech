import React, { useState } from 'react';
import { PageView } from '../types';
import { ChevronDown, HelpCircle, ArrowUpRight, MessageCircle } from 'lucide-react';

interface FaqSectionProps {
  onNavigate?: (page: PageView) => void;
  title?: string;
  subtitle?: string;
}

export const FAQS_CONTENT = [
  {
    question: 'What software and web development services does Basan Tech provide?',
    answer:
      'Basan Tech provides six core engineering services: bespoke website and web application development (React, Next.js, TypeScript), native and cross-platform mobile apps for Android & iOS (React Native, Flutter), custom enterprise software and clinical CRMs, high-performance desktop applications (Windows, macOS, Linux), conversion-focused e-commerce platforms, and practical AI solutions including autonomous agents and RAG pipelines.'
  },
  {
    question: 'Do clients own 100% of the source code and intellectual property?',
    answer:
      'Yes. Basan Tech operates under a strict 100% client-owned source code model. Upon project completion and milestone sign-off, all GitHub repositories, databases, API designs, documentation, and digital assets are fully transferred to the client with zero vendor lock-in or recurring proprietary licensing fees.'
  },
  {
    question: 'How does the project consultation and scoping process work?',
    answer:
      'Clients collaborate directly with senior software engineers from day one. You can submit your requirements via our contact form or directly on WhatsApp (+91 9624895641). We analyze your technical scope, architecture, and timeline to formulate a detailed, fixed-scope proposal with clear milestone deliverables within 24–48 hours.'
  },
  {
    question: 'Where is Basan Tech located and do you work with international clients?',
    answer:
      'Basan Tech is an engineering studio headquartered in Palanpur, Gujarat, India. We partner with founders, enterprises, and startups across India, the United States, the UAE, Europe, and worldwide through modern remote collaboration tools and transparent staging environments.'
  },
  {
    question: 'Does Basan Tech provide post-launch support and warranty?',
    answer:
      'Yes. Every project engineered by Basan Tech includes a comprehensive 30-day post-launch warranty covering bug fixes, performance tuning, and operational monitoring at no extra cost, alongside optional long-term maintenance and SLA support agreements.'
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({
  onNavigate,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about partnering with Basan Tech for software, web, and AI development.'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#00976C]" />
            <span className="font-mono uppercase tracking-wider text-[11px] font-bold text-[#00976C]">
              CLIENT KNOWLEDGE BASE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#022A4E] leading-tight">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS_CONTENT.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#00976C]/60 bg-emerald-50/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-base sm:text-lg font-bold text-[#022A4E] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#00976C] text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/80"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secondary Contact CTA */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[#022A4E]">
              Have a specific technical question or project idea?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Speak directly with our senior software engineers for free architectural scoping.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <a
              href="https://wa.me/919624895641"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200 transition-colors shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#00976C]" />
              <span>WhatsApp Us</span>
            </a>

            {onNavigate && (
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#022A4E] hover:bg-[#033b6e] transition-colors shadow-2xs"
              >
                <span>Contact Page</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
