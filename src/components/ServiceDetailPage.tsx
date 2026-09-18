import React from 'react';
import { PageView, ServiceId, Service } from '../types';
import { ContactSection } from './ContactSection';
import { 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Smartphone, 
  Laptop, 
  ShoppingBag, 
  Sparkles, 
  MessageCircle, 
  Layers, 
  CheckCircle2,
  Database,
  Server,
  Lock,
  Zap,
  Activity,
  TrendingUp,
  Bot
} from 'lucide-react';

interface ServiceDetailPageProps {
  service: Service;
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ 
  service, 
  onNavigate 
}) => {
  const whatsappInquiryUrl = `https://wa.me/919624895641?text=${encodeURIComponent(
    `Hello BasanTech Team, I would like to discuss a project regarding ${service.title}.\n\nPlease let me know your availability for a quick consultation.`
  )}`;

  const renderServiceVisual = () => {
    switch (service.id) {
      case 'website-dev':
      case 'web-dev':
        return (
          <div className="relative w-full max-w-md mx-auto animate-service-float">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              {/* Browser bar */}
              <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2.5 flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 ml-2 bg-white rounded-md px-2.5 py-1 text-[11px] font-mono text-slate-500 border border-slate-200 flex items-center justify-between shadow-2xs">
                  <span className="truncate text-slate-700">basantech.online/web-platform</span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-semibold shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    200 OK
                  </span>
                </div>
              </div>

              {/* Browser Preview Canvas */}
              <div className="p-5 bg-gradient-to-b from-slate-50 to-white space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-28 bg-[#022A4E]/20 rounded-md animate-pulse" />
                  <div className="flex gap-1.5">
                    <div className="h-4 w-10 bg-slate-200 rounded" />
                    <div className="h-4 w-10 bg-slate-200 rounded" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-[#022A4E] to-[#073E6E] text-white space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-emerald-300">MODERN WEB ARCHITECTURE</span>
                    <Globe className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-sm font-bold">Responsive • Ultra-Fast • SEO-Optimized</div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-center">
                    <div className="text-xs font-bold text-emerald-800">100/100</div>
                    <div className="text-[10px] text-slate-500 font-medium">Performance</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-center">
                    <div className="text-xs font-bold text-emerald-800">0.8s</div>
                    <div className="text-[10px] text-slate-500 font-medium">LCP Speed</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-center">
                    <div className="text-xs font-bold text-emerald-800">100%</div>
                    <div className="text-[10px] text-slate-500 font-medium">Responsive</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-white border border-slate-200 shadow-md rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-[#022A4E]">
              <span className="w-2 h-2 rounded-full bg-[#00976C]" />
              <span>Next.js • React • Tailwind</span>
            </div>
          </div>
        );

      case 'app-dev':
      case 'mobile-app':
        return (
          <div className="relative w-full max-w-sm mx-auto flex items-center justify-center py-2">
            {/* Pulsing radar waves */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full border-2 border-emerald-500/20 animate-service-radar" />
              <div className="w-80 h-80 rounded-full border border-emerald-500/10 animate-service-radar" style={{ animationDelay: '1.2s' }} />
            </div>

            {/* Smartphone device mockup */}
            <div className="relative z-10 w-56 sm:w-64 rounded-[36px] bg-[#022A4E] border-[5px] border-slate-800 shadow-2xl p-3 text-white transition-transform hover:scale-[1.02] duration-300">
              {/* Phone Notch */}
              <div className="flex justify-center mb-3">
                <div className="w-20 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-1 rounded-full bg-emerald-500/70" />
                </div>
              </div>

              {/* Inside Screen Content */}
              <div className="rounded-2xl bg-gradient-to-b from-[#011D36] to-[#022A4E] border border-slate-700/60 p-3.5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-[#00976C]" />
                    <span className="text-[11px] font-bold text-white">BasanTech Mobile</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">iOS + Android</span>
                </div>

                {/* Card widget */}
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <div className="text-[10px] text-slate-400">Native Performance</div>
                  <div className="text-base font-bold text-emerald-400">60 FPS Fluid</div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#00976C] h-1.5 rounded-full w-4/5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
                  <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/80">
                    <div className="font-bold text-slate-200">Flutter</div>
                    <div className="text-slate-400">Cross-Platform</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/80">
                    <div className="font-bold text-slate-200">React Native</div>
                    <div className="text-slate-400">Hybrid Native</div>
                  </div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="w-16 h-1 bg-slate-600 rounded-full mx-auto mt-3" />
            </div>

            {/* Floating Store Badge */}
            <div className="absolute -bottom-2 -left-2 z-20 bg-white border border-slate-200 shadow-md rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-[#022A4E]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>App Store &amp; Play Store</span>
            </div>
          </div>
        );

      case 'custom-software':
        return (
          <div className="relative w-full max-w-sm mx-auto h-72 flex items-center justify-center py-4">
            {/* Outer Orbiting Constellation */}
            <div className="absolute inset-0 flex items-center justify-center animate-service-spin-slow">
              <div className="w-60 h-60 rounded-full border border-dashed border-emerald-500/30" />
              
              {/* Satellite Node 1 - Database */}
              <div className="absolute top-0 flex items-center justify-center">
                <div className="animate-service-spin-reverse px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-md text-[11px] font-bold text-[#022A4E] flex items-center gap-1">
                  <Database className="w-3.5 h-3.5 text-[#00976C]" />
                  <span>PostgreSQL</span>
                </div>
              </div>

              {/* Satellite Node 2 - API */}
              <div className="absolute bottom-0 flex items-center justify-center">
                <div className="animate-service-spin-reverse px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-md text-[11px] font-bold text-[#022A4E] flex items-center gap-1">
                  <Server className="w-3.5 h-3.5 text-[#00976C]" />
                  <span>GraphQL/REST</span>
                </div>
              </div>

              {/* Satellite Node 3 - Auth */}
              <div className="absolute left-0 flex items-center justify-center">
                <div className="animate-service-spin-reverse px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-md text-[11px] font-bold text-[#022A4E] flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#00976C]" />
                  <span>Auth / SSO</span>
                </div>
              </div>

              {/* Satellite Node 4 - Cloud */}
              <div className="absolute right-0 flex items-center justify-center">
                <div className="animate-service-spin-reverse px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-md text-[11px] font-bold text-[#022A4E] flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#00976C]" />
                  <span>Microservices</span>
                </div>
              </div>
            </div>

            {/* Central Core Engine Node */}
            <div className="relative z-10 p-5 rounded-2xl bg-gradient-to-br from-[#022A4E] to-[#011D36] border-2 border-emerald-500/50 shadow-2xl text-white text-center space-y-1">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-1">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold tracking-tight">Core Architecture</div>
              <div className="text-[10px] text-emerald-400 font-mono">Clean Domain Logic</div>
            </div>
          </div>
        );

      case 'desktop-software':
        return (
          <div className="relative w-full max-w-md mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              {/* Window Header */}
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-medium text-slate-300">Native Workstation v2.4 (x64)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                </div>
              </div>

              {/* Workstation Console */}
              <div className="p-4 bg-slate-950 font-mono text-xs text-slate-300 space-y-2.5 relative overflow-hidden">
                {/* Moving scan beam */}
                <div className="absolute inset-x-0 h-8 bg-emerald-500/10 pointer-events-none animate-service-scan" />

                <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-800 text-slate-400">
                  <span>OS: Windows • macOS • Linux</span>
                  <span className="text-emerald-400 font-semibold">Native IPC Active</span>
                </div>

                <div className="space-y-1 text-[11px]">
                  <p className="text-emerald-400">&gt; Engine.init(Tauri/Electron + C++)</p>
                  <p className="text-slate-400">&gt; Memory footprint: 34 MB | 0.4ms latency</p>
                  <p className="text-slate-400">&gt; Hardware Acceleration: Enabled (GPU)</p>
                  <p className="text-emerald-300 font-semibold">&gt; Status: 100% Offline Capability Ready</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-500">Cross-Platform</div>
                    <div className="font-bold text-white text-xs">Single Codebase</div>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-500">Auto-Update</div>
                    <div className="font-bold text-emerald-400 text-xs">Integrated CI/CD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -bottom-3 -right-2 bg-white border border-slate-200 shadow-md rounded-xl px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-[#022A4E]">
              <Activity className="w-3.5 h-3.5 text-[#00976C]" />
              <span>High Throughput &amp; Low Latency</span>
            </div>
          </div>
        );

      case 'ecommerce-dev':
      case 'ecommerce':
        return (
          <div className="relative w-full max-w-md mx-auto animate-service-growth">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C]">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#022A4E]">High-Converting Storefront</div>
                    <div className="text-[10px] text-slate-500">Instant Checkout Engine</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+248% Sales</span>
                </div>
              </div>

              {/* Order simulation card */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">Payment Gateway</span>
                  <span className="font-mono font-semibold text-[#00976C]">Razorpay / Stripe / UPI</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">Cart Abandonment Recovery</span>
                  <span className="font-semibold text-[#022A4E]">Automated</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                  <div className="bg-[#00976C] h-1.5 rounded-full w-11/12" />
                </div>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[10px]">
                  <div className="font-bold text-[#022A4E]">Shopify &amp; Custom</div>
                  <div className="text-slate-500">Multi-Platform</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[10px]">
                  <div className="font-bold text-[#022A4E]">Inventory Sync</div>
                  <div className="text-slate-500">Real-Time</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-[10px]">
                  <div className="font-bold text-[#022A4E]">Sub-Second</div>
                  <div className="text-slate-500">Checkout Flow</div>
                </div>
              </div>
            </div>

            {/* Floating Guarantee Badge */}
            <div className="absolute -bottom-3 -left-2 bg-white border border-slate-200 shadow-md rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#022A4E]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00976C]" />
              <span>PCI-DSS Compliant Security</span>
            </div>
          </div>
        );

      case 'ai-solutions':
        return (
          <div className="relative w-full max-w-md mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#022A4E] to-[#011D36] shadow-xl p-5 text-white space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Neural Intelligence Core</div>
                    <div className="text-[10px] text-slate-400">RAG • Vector Search • Agents</div>
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Synaptic AI Node Centerpiece */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-3">
                <div className="flex items-center justify-center py-2">
                  <div className="animate-service-synapse p-3 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">
                    <Bot className="w-8 h-8 text-emerald-400" />
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950 font-mono text-[11px] text-slate-300 space-y-1">
                  <p className="text-emerald-400">&gt; Query -&gt; Embedding(text-embedding-3)</p>
                  <p className="text-slate-400">&gt; Pinecone/Qdrant Vector Retrieval: 99.4% precision</p>
                  <p className="text-emerald-300 font-semibold">&gt; Agent Action: Workflow completed autonomously</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700">
                  <div className="font-bold text-white">LLM Agents</div>
                  <div className="text-slate-400">Autonomous</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700">
                  <div className="font-bold text-white">RAG Systems</div>
                  <div className="text-slate-400">Private Data</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700">
                  <div className="font-bold text-white">Fine-Tuned</div>
                  <div className="text-slate-400">Custom Models</div>
                </div>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -bottom-3 -right-2 bg-white border border-slate-200 shadow-md rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#022A4E]">
              <span className="w-2 h-2 rounded-full bg-[#00976C]" />
              <span>Enterprise Data Privacy &amp; Zero Leakage</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
      
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

      {/* 2. Hero Section with 2-Column Responsive Layout */}
      <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white border border-slate-200/90 shadow-xs space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Description, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-5">
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

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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

          {/* Right Column: Unique Bespoke Visual & Animation for this Service */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            {renderServiceVisual()}
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

      {/* 4. Standard Project Deliverables */}
      {service.deliverables && service.deliverables.length > 0 && (
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#00976C] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>What is Included</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E]">
              Standard Project Deliverables
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {service.deliverables.map((item, dIdx) => (
              <div key={dIdx} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00976C] shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="leading-snug font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

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
