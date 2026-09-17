import React, { useState } from 'react';
import { PageView, ServiceId } from '../types';
import { 
  Send, 
  Shield, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  Sparkles,
  Copy,
  Check,
  Instagram,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
  preselectedService?: ServiceId;
  showBreadcrumb?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  onNavigate, 
  preselectedService,
  showBreadcrumb = false 
}) => {
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState<string>(() => {
    switch (preselectedService) {
      case 'website-dev':
      case 'web-dev': return 'Website Development';
      case 'app-dev':
      case 'mobile-app': return 'App Development (Android & iOS)';
      case 'custom-software': return 'Custom Software Development';
      case 'desktop-software': return 'Desktop Software Development';
      case 'ecommerce-dev':
      case 'ecommerce': return 'E-commerce Development';
      case 'ai-solutions': return 'AI Solutions';
      default: return '';
    }
  });
  const [projectDetails, setProjectDetails] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Clean, professional email subject
  const formattedSubject = `New Project Inquiry: [${fullName || 'Client'}] - ${projectType || 'Software Development'} | BasanTech`;

  // Clean, structured email body
  const formattedBody = `==================================================
           BASANTECH PROJECT INQUIRY
==================================================

CLIENT CONTACT DETAILS:
• Full Name:           ${fullName}
• Email Address:       ${email}
• Phone / WhatsApp:    ${phone || 'Not provided'}
• Company / Startup:   ${company || 'Not provided'}
• Selected Service:    ${projectType || 'General Software Engineering'}

--------------------------------------------------
PROJECT REQUIREMENTS & SCOPE:
--------------------------------------------------
${projectDetails}

--------------------------------------------------
Submitted from: basantech.online Contact Portal
Headquarters: Palanpur, Gujarat 385001, India
Official Email: basantech1@gmail.com
Direct Line / WA: +91 9624895641
==================================================`;

  const directMailtoUrl = `mailto:basantech1@gmail.com?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

  const directGmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=basantech1@gmail.com&su=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

  const directWhatsAppUrl = `https://wa.me/919624895641?text=${encodeURIComponent(`Hello BasanTech Team, I would like to discuss a project.\n\nName: ${fullName || 'Client'}\nEmail: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\nService: ${projectType || 'General'}\n\nProject Details:\n${projectDetails}`)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !projectDetails) return;

    const randomId = `BSN-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomId);
    setSubmitted(true);

    // Trigger celebration confetti
    try {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch {
      // Ignore if canvas is restricted
    }

    // Direct native email invocation without any 3rd party integration
    try {
      window.location.href = directMailtoUrl;
    } catch {
      // Fallback handled by the UI options
    }
  };

  const copySummary = () => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(formattedBody).catch(() => {});
      }
    } catch {
      // Ignore clipboard restrictions
    }
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  return (
    <section id="contact-section" className={`${showBreadcrumb ? 'pt-28 sm:pt-36 pb-20' : 'py-20'} bg-zinc-50 border-b border-zinc-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showBreadcrumb && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pb-6">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#00976C] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#022A4E] font-semibold">Contact Us</span>
          </nav>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 sm:p-10 shadow-sm">
              
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-zinc-950 tracking-tight">
                  Send us a message
                </h2>
                <p className="text-zinc-600 text-sm mt-1.5 leading-relaxed">
                  Tell us a bit about what you are working on. Submissions are delivered directly to <strong className="text-zinc-900 font-semibold">basantech1@gmail.com</strong>.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 text-center space-y-6 shadow-xs">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-[#00976C] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8 text-[#00976C]" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider font-semibold">
                      Reference #{ticketId}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#022A4E]">
                      Inquiry Formatted & Ready to Send!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                      Thank you, <strong>{fullName}</strong>. Your project brief has been formatted with an official subject line for <strong>basantech1@gmail.com</strong>. Your mail app should have launched automatically. If not, choose any direct option below:
                    </p>
                  </div>

                  {/* Pre-formatted Message Details Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-lg mx-auto space-y-3 text-xs text-slate-700 shadow-2xs font-mono">
                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200/80 pb-2">
                      <span className="text-slate-500">To:</span>
                      <strong className="text-[#022A4E]">basantech1@gmail.com</strong>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200/80 pb-2">
                      <span className="text-slate-500">Subject:</span>
                      <strong className="text-[#00976C] truncate max-w-xs">{formattedSubject}</strong>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200/80 pb-2">
                      <span className="text-slate-500">Sender:</span>
                      <strong className="text-slate-900">{fullName} ({email})</strong>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="text-slate-500">Service:</span>
                      <strong className="text-slate-900">{projectType || 'Custom Software Development'}</strong>
                    </div>
                  </div>

                  {/* Direct Action Options (Zero 3rd-party) */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <a
                      href={directGmailWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full bg-[#022A4E] hover:bg-[#00976C] text-white text-xs font-bold transition-all duration-200 flex items-center gap-2 shadow-xs"
                    >
                      <Mail className="w-4 h-4 text-emerald-300" />
                      <span>Open in Gmail (Browser)</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={directMailtoUrl}
                      className="px-5 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold transition-all duration-200 flex items-center gap-2 shadow-2xs"
                    >
                      <Send className="w-4 h-4 text-[#00976C]" />
                      <span>Open in Mail App</span>
                    </a>

                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all duration-200 flex items-center gap-2 shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp (+91 9624895641)</span>
                    </a>

                    <button
                      onClick={copySummary}
                      className="px-4 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSummary ? 'Copied to Clipboard' : 'Copy Email Text'}</span>
                    </button>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setProjectDetails('');
                      }}
                      className="text-xs text-slate-500 hover:text-slate-900 underline underline-offset-4 font-medium transition-colors cursor-pointer"
                    >
                      ← Start another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-zinc-800">
                        Full Name <span className="text-zinc-950">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-form-name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your name"
                        required
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all shadow-2xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        Email Address <span className="text-[#00976C]">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-form-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Company or Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contact-form-phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 9624895641"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all shadow-2xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        Company or Organization
                      </label>
                      <input
                        type="text"
                        id="contact-form-company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Where do you work?"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Row 3: What type of project is this? */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-800">
                      What type of project is this?
                    </label>
                    <div className="relative">
                      <select
                        id="contact-form-project-type"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all shadow-2xs appearance-none pr-10 cursor-pointer"
                      >
                        <option value="" disabled className="text-slate-400">Choose a service area</option>
                        <option value="Website Development">Website Development</option>
                        <option value="App Development (Android & iOS)">App Development (Android & iOS)</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Desktop Software Development">Desktop Software Development</option>
                        <option value="E-commerce Development">E-commerce Development</option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="Other / Multi-disciplinary Engineering">Other / Multi-disciplinary Engineering</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Tell us about your project */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-800">
                      Tell us about your project <span className="text-[#00976C]">*</span>
                    </label>
                    <textarea
                      id="contact-form-details"
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      maxLength={1200}
                      rows={5}
                      required
                      placeholder="What are you trying to build? What problem does it solve? Any timelines or budget in mind?"
                      className="w-full px-3.5 py-3 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all resize-y leading-relaxed shadow-2xs"
                    />
                    <div className="text-right text-xs font-mono text-slate-500">
                      {projectDetails.length} / 1200
                    </div>
                  </div>

                  {/* Row 5: Action Button & Direct Delivery Guarantee */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00976C] hover:bg-[#00825B] text-white text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md shrink-0 cursor-pointer"
                    >
                      <span>Send to basantech1@gmail.com</span>
                      <Send className="w-3.5 h-3.5 text-emerald-100" />
                    </button>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Shield className="w-4 h-4 text-[#00976C] shrink-0" />
                      <span>Direct email dispatch • Zero 3rd-party trackers • 100% confidential</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Side Column: Studio Inquiries & Direct Lines */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Communication Channels (Consolidated, No Duplicates) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-5">
              <div className="space-y-1 border-b border-slate-100 pb-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#00976C] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00976C]"></span>
                  <span>Direct Communication</span>
                </div>
                <h3 className="text-base font-bold text-[#022A4E]">
                  Connect Directly With Our Team
                </h3>
              </div>

              <div className="space-y-3.5">
                {/* Official Email */}
                <a 
                  href="mailto:basantech1@gmail.com" 
                  id="contact-direct-email-link"
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/80 hover:border-[#00976C]/60 flex flex-col space-y-1.5 transition-all group block shadow-2xs"
                >
                  <div className="flex items-center justify-between text-slate-500 font-medium text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#022A4E] group-hover:text-[#00976C] transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold text-slate-700">Official Inquiries Email</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00976C] transition-colors" />
                  </div>
                  <div className="font-mono text-[#022A4E] text-xs font-bold pl-9">
                    basantech1@gmail.com
                  </div>
                </a>

                {/* Unified Phone & WhatsApp Channel - Shown once with instant call & chat actions */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 shadow-2xs">
                  <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#00976C]">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-semibold text-slate-700">Direct Line &amp; WhatsApp</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold border border-emerald-200/60">
                      Active
                    </span>
                  </div>

                  <div className="font-mono text-[#022A4E] text-sm font-bold pl-9">
                    +91 9624895641
                  </div>

                  {/* Dual Action Buttons (Call & WhatsApp) */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href="tel:+919624895641"
                      id="contact-direct-phone-call-btn"
                      className="px-3 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-[#022A4E] hover:text-[#00976C] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Phone className="w-3 h-3 text-[#00976C]" />
                      <span>Call Direct</span>
                    </a>
                    <a
                      href="https://wa.me/919624895641"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-direct-whatsapp-chat-btn"
                      className="px-3 py-2 rounded-xl bg-[#00976C] hover:bg-[#00825B] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-3 h-3 text-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Instagram Profile */}
                <a 
                  href="https://www.instagram.com/basan_tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-direct-instagram-link"
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-pink-50/50 border border-slate-200/80 hover:border-pink-300 flex items-center justify-between transition-colors group block shadow-2xs"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-pink-600">
                      <Instagram className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-700 group-hover:text-pink-900 transition-colors">Instagram Profile</div>
                      <div className="font-mono text-[11px] text-slate-500">@basan_tech</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-600 transition-colors" />
                </a>
              </div>
            </div>

            {/* Studio Engineering Hub & Presence (No duplicate phone numbers!) */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <MapPin className="w-4 h-4 text-[#00976C]" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                  Engineering Hub &amp; Global Reach
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <div>
                  <strong className="text-[#022A4E] block mb-0.5">Primary Studio:</strong>
                  Palanpur, Gujarat 385001, India
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <strong className="text-[#022A4E] block mb-0.5">Global Client Engagement:</strong>
                  We engineer software for startups and established enterprises across India, the US, the UK, and the Middle East.
                </div>
              </div>
            </div>

            {/* Response SLA Guarantee Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Sparkles className="w-4 h-4 text-[#00976C]" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                  Engagement Standards
                </span>
              </div>
              
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Engineering Review:</span>
                  <strong className="text-[#022A4E] font-semibold">Under 24 Hours</strong>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Initial Strategy Call:</span>
                  <strong className="text-[#022A4E] font-semibold">Complimentary (30m)</strong>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">IP &amp; Code Rights:</span>
                  <strong className="text-emerald-700 font-semibold">100% Client-Owned</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Warranty Support:</span>
                  <strong className="text-[#00976C] font-semibold">30-Day Hypercare Included</strong>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

