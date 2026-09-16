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
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate, preselectedService }) => {
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState<string>(() => {
    switch (preselectedService) {
      case 'custom-software': return 'Custom Software Development';
      case 'web-dev': return 'Web Development';
      case 'mobile-app':
      case 'app-dev': return 'Mobile App Development';
      case 'ai-solutions': return 'AI Solutions';
      case 'hubspot-dev': return 'HubSpot Development';
      case 'reactjs-dev': return 'ReactJS Development';
      case 'wordpress-dev': return 'WordPress Development';
      case 'nodejs-dev': return 'Node.js Development';
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
    <section id="contact-section" className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
                        <option value="" disabled className="text-slate-400">Choose a practice area</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="HubSpot Development">HubSpot Development</option>
                        <option value="ReactJS Development">ReactJS Development</option>
                        <option value="WordPress Development">WordPress Development</option>
                        <option value="Node.js Development">Node.js Development</option>
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
            
            {/* Quick Response SLA Card */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 border-b border-zinc-100 pb-3">
                <Sparkles className="w-4 h-4 text-zinc-950" />
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-800 font-semibold">
                  Response SLA Guarantee
                </span>
              </div>
              
              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-zinc-100 pb-2">
                  <span className="text-zinc-500">Engineering Review:</span>
                  <strong className="text-zinc-950 font-semibold">Under 24 Hours</strong>
                </div>
                <div className="flex justify-between border-b border-zinc-100 pb-2">
                  <span className="text-zinc-500">Direct Delivery:</span>
                  <strong className="text-zinc-950 font-semibold font-mono">basantech1@gmail.com</strong>
                </div>
                <div className="flex justify-between border-b border-zinc-100 pb-2">
                  <span className="text-zinc-500">Initial Strategy Call:</span>
                  <strong className="text-zinc-950 font-semibold">Complimentary (30m)</strong>
                </div>
                <div className="flex justify-between border-b border-zinc-100 pb-2">
                  <span className="text-zinc-500">IP & Code Rights:</span>
                  <strong className="text-emerald-700 font-semibold">100% Client Owned</strong>
                </div>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed pt-1">
                Every project submission is reviewed directly by our principal software engineers to provide actionable architectural feedback.
              </p>
            </div>

            {/* Direct Lines Box with Updated Contact Details */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Direct Inquiries
                </div>
                <h3 className="font-display text-base font-bold text-zinc-950">
                  Prefer a direct email, call, or chat?
                </h3>
              </div>

              <div className="space-y-3 text-xs text-zinc-700">
                {/* Email Item */}
                <a 
                  href="mailto:basantech1@gmail.com" 
                  id="contact-direct-email-link"
                  className="p-3.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex flex-col space-y-1 transition-colors block group"
                >
                  <div className="flex items-center justify-between text-zinc-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-zinc-950" />
                      <span>Inquiries Email</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                  </div>
                  <div className="font-mono text-zinc-950 text-xs font-semibold pl-5.5">
                    basantech1@gmail.com
                  </div>
                </a>

                {/* Phone Call Item */}
                <a 
                  href="tel:+919624895641"
                  id="contact-direct-phone-link"
                  className="p-3.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex flex-col space-y-1 transition-colors block group"
                >
                  <div className="flex items-center justify-between text-zinc-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-zinc-950" />
                      <span>Phone & Direct Call</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                  </div>
                  <div className="font-mono text-zinc-950 text-xs font-semibold pl-5.5">
                    +91 9624895641
                  </div>
                </a>

                {/* WhatsApp Chat Item */}
                <a 
                  href="https://wa.me/919624895641"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-direct-whatsapp-link"
                  className="p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/90 flex flex-col space-y-1 transition-colors block group"
                >
                  <div className="flex items-center justify-between text-emerald-800 font-medium">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                      <span>WhatsApp Direct Chat</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 group-hover:text-emerald-950 transition-colors" />
                  </div>
                  <div className="font-mono text-emerald-950 text-xs font-semibold pl-5.5">
                    +91 9624895641
                  </div>
                </a>

                {/* Instagram Profile Item */}
                <a 
                  href="https://www.instagram.com/basan_tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-direct-instagram-link"
                  className="p-3.5 rounded-xl bg-pink-50/60 hover:bg-pink-100/70 border border-pink-200/90 flex flex-col space-y-1 transition-colors block group"
                >
                  <div className="flex items-center justify-between text-pink-800 font-medium">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-3.5 h-3.5 text-pink-700" />
                      <span>Instagram Official</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-pink-600 group-hover:text-pink-950 transition-colors" />
                  </div>
                  <div className="font-mono text-pink-950 text-xs font-semibold pl-5.5">
                    @basan_tech
                  </div>
                </a>
              </div>

              {/* Hub Locations */}
              <div className="space-y-3 pt-4 border-t border-zinc-200">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                  Studio Hubs
                </div>
                
                <div className="space-y-2.5 text-xs text-zinc-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">India:</strong> Palanpur, Ahmedabad, Gujarat 382421, India
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-zinc-900">Phone:</strong> +91 9624895641
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

