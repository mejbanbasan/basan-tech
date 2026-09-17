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
  MessageCircle,
  Loader2,
  AlertCircle
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [ticketId, setTicketId] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !projectDetails) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const randomId = `MSG-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      // Send form data directly to basantech1@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/basantech1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          phone: phone || 'Not provided',
          company: company || 'Not provided',
          projectType: projectType || 'General Inquiry',
          message: projectDetails,
          _subject: `New Basan Tech Inquiry: ${fullName} (${projectType || 'General'})`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === 'true' || data.success === true) {
        setTicketId(randomId);
        setSubmitted(true);
        setIsSubmitting(false);

        try {
          if (typeof confetti === 'function') {
            confetti({
              particleCount: 60,
              spread: 70,
              origin: { y: 0.6 }
            });
          }
        } catch {
          // Ignore if canvas is restricted in iframe
        }
      } else {
        throw new Error(data.message || 'Unable to submit the form at this moment.');
      }
    } catch (err: any) {
      console.error('Form submission error:', err);
      // Even if external network API blocked by sandbox/cross-origin, provide clear recovery
      setSubmitError(err?.message || 'Failed to send message. Please try again or use direct email / WhatsApp below.');
      setIsSubmitting(false);
    }
  };

  const copySummary = () => {
    const text = `Basan Tech Project Inquiry [${ticketId}]\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nCompany: ${company || 'N/A'}\nType: ${projectType || 'General'}\nDetails:\n${projectDetails}`;
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
    } catch {
      // Ignore clipboard restrictions
    }
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const directMailtoUrl = `mailto:basantech1@gmail.com?subject=${encodeURIComponent(`Inquiry from ${fullName || 'Client'} - Basan Tech`)}&body=${encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nProject Type: ${projectType}\n\nProject Details:\n${projectDetails}`)}`;

  const directWhatsAppUrl = `https://wa.me/919624895641?text=${encodeURIComponent(`Hello Basan Tech Team, I would like to discuss a project.\n\nName: ${fullName || 'Client'}\nEmail: ${email || 'N/A'}\nType: ${projectType || 'General'}\nDetails: ${projectDetails || 'I need your software engineering services.'}`)}`;

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
                <div className="p-8 sm:p-10 rounded-xl bg-zinc-50 border border-zinc-200 text-center space-y-6">
                  <div className="w-12 h-12 rounded-full bg-zinc-950 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider font-semibold">
                      Reference #{ticketId}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-zinc-950">
                      Message Successfully Sent!
                    </h3>
                    <p className="text-sm text-zinc-600 max-w-lg mx-auto leading-relaxed">
                      Thank you, <strong>{fullName}</strong>. Your project brief has been sent to <strong>basantech1@gmail.com</strong>. Our engineering lead will review it and reply to <strong>{email}</strong> within 24 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-zinc-200 text-left max-w-md mx-auto space-y-2 text-xs text-zinc-700 shadow-2xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Recipient:</span>
                      <strong className="text-zinc-950">basantech1@gmail.com</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Project Type:</span>
                      <strong className="text-zinc-950">{projectType || 'General Software Project'}</strong>
                    </div>
                    {company && (
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Organization:</span>
                        <strong className="text-zinc-950">{company}</strong>
                      </div>
                    )}
                    {phone && (
                      <div className="flex justify-between">
                        <span className="text-zinc-500">Phone:</span>
                        <strong className="text-zinc-950">{phone}</strong>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={copySummary}
                      className="px-4 py-2.5 rounded-full bg-white border border-zinc-300 text-zinc-800 hover:text-zinc-950 hover:bg-zinc-50 text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSummary ? 'Copied to Clipboard' : 'Copy Message Summary'}</span>
                    </button>

                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp (+91 9624895641)</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setProjectDetails('');
                      }}
                      className="px-5 py-2.5 rounded-full bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-2xs cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Error Notification if Submission Fails */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-2">
                      <div className="flex items-center gap-2 font-semibold">
                        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Sending failed: {submitError}</span>
                      </div>
                      <p className="text-rose-700">
                        You can retry submitting or connect with us immediately via:
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a 
                          href={directMailtoUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-rose-300 text-rose-900 font-semibold hover:bg-rose-100 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send directly to basantech1@gmail.com</span>
                        </a>
                        <a 
                          href={directWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp (+91 9624895641)</span>
                        </a>
                      </div>
                    </div>
                  )}

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
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all shadow-2xs disabled:bg-slate-100"
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
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all shadow-2xs disabled:bg-slate-100"
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
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all shadow-2xs disabled:bg-slate-100"
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
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all shadow-2xs disabled:bg-slate-100"
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
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all shadow-2xs appearance-none pr-10 cursor-pointer disabled:bg-slate-100"
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
                      disabled={isSubmitting}
                      placeholder="What are you trying to build? What problem does it solve? Any timelines or budget in mind?"
                      className="w-full px-3.5 py-3 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00976C]/20 focus:border-[#00976C] transition-all resize-y leading-relaxed shadow-2xs disabled:bg-slate-100"
                    />
                    <div className="text-right text-xs font-mono text-slate-500">
                      {projectDetails.length} / 1200
                    </div>
                  </div>

                  {/* Row 5: Action Button & Privacy Notice */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00976C] hover:bg-[#00825B] text-white text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md shrink-0 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Sending Message to basantech1@gmail.com...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5 text-emerald-100" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <Shield className="w-4 h-4 text-zinc-700 shrink-0" />
                      <span>Your information stays strictly confidential & encrypted</span>
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

