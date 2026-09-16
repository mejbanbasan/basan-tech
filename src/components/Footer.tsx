import React, { useState } from 'react';
import { PageView, ServiceId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  Check, 
  Instagram,
  MessageCircle,
  ShieldCheck,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FooterProps {
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    
    setSubscribed(true);
    try {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.85 }
        });
      }
    } catch {
      // Ignore if canvas is restricted
    }
  };

  return (
    <footer id="basan-footer" className="bg-white border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Engagement Pitch Card */}
        <div className="mb-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#022A4E] to-[#011D36] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-semibold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-[#00976C] animate-ping" />
              <span>ENGAGEMENT CAPACITY AVAILABLE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Ready to engineer your next digital solution?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We partner with founders, businesses, and product teams to build clean, reliable, and high-performance software.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3.5 rounded-full text-sm font-bold text-[#022A4E] bg-white hover:bg-emerald-50 transition-all duration-200 flex items-center gap-2 shrink-0 shadow-md hover:scale-105 cursor-pointer"
          >
            <span>Start a Project Inquiry</span>
            <ArrowUpRight className="w-4 h-4 text-[#00976C]" />
          </button>
        </div>

        {/* 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-left focus:outline-none cursor-pointer group py-1"
              aria-label="BasanTech Home"
            >
              <img 
                src="/basantech-logo.png" 
                alt="BasanTech Software & Digital" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02] mix-blend-multiply" 
              />
            </button>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              BasanTech is a software engineering and digital solutions company. We design and build clean, scalable web applications, custom software, mobile apps, and automated workflows.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-[#00976C]" />
              <span>100% Client-Owned Source Code</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#022A4E]">
              Our Practices
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('service-detail', service.id)}
                    className="hover:text-[#00976C] transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="font-semibold text-[#00976C] hover:underline flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>View all 8 practices</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#022A4E]">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#00976C] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#00976C] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#00976C] transition-colors cursor-pointer"
                >
                  Work &amp; Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#00976C] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#00976C] transition-colors cursor-pointer"
                >
                  Contact &amp; Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#022A4E]">
              Direct Inquiries
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <a 
                href="mailto:basantech1@gmail.com" 
                className="flex items-center gap-2 text-slate-700 hover:text-[#00976C] transition-colors font-mono"
              >
                <Mail className="w-4 h-4 text-[#022A4E] shrink-0" />
                <span>basantech1@gmail.com</span>
              </a>

              <a 
                href="tel:+919624895641" 
                className="flex items-center gap-2 text-slate-700 hover:text-[#00976C] transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-[#022A4E] shrink-0" />
                <span>+91 9624895641</span>
              </a>

              <a 
                href="https://wa.me/919624895641"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors font-mono font-medium"
              >
                <MessageCircle className="w-4 h-4 text-[#00976C] shrink-0" />
                <span>WhatsApp: +91 9624895641</span>
              </a>

              <a 
                href="https://www.instagram.com/basan_tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-700 hover:text-pink-800 transition-colors font-medium"
              >
                <Instagram className="w-4 h-4 text-pink-600 shrink-0" />
                <span>Instagram: @basan_tech</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              {subscribed ? (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#00976C] shrink-0" />
                  <span>Subscribed to engineering updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="work@company.com"
                      required
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#022A4E] transition-colors"
                    />
                    <button 
                      type="submit" 
                      className="px-3.5 py-2 rounded-xl bg-[#00976C] text-white text-xs font-semibold hover:bg-[#00825B] transition-colors shrink-0 cursor-pointer shadow-xs"
                    >
                      Join
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Bar with Required Copyright and Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 BasanTech. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate('privacy')}
              className="font-medium text-slate-600 hover:text-[#00976C] transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('terms')}
              className="font-medium text-slate-600 hover:text-[#00976C] transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="font-medium text-slate-600 hover:text-[#00976C] transition-colors cursor-pointer"
            >
              Security
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
