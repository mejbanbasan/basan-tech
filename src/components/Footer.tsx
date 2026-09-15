import React, { useState } from 'react';
import { PageView, ServiceId } from '../types';
import { SERVICES_DATA } from '../data/agencyData';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Phone, 
  Check, 
  ShieldCheck, 
  Instagram,
  MessageCircle
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
          particleCount: 50,
          spread: 60,
          origin: { y: 0.85 }
        });
      }
    } catch {
      // Ignore if canvas is restricted
    }
  };

  return (
    <footer id="basan-footer" className="bg-white border-t border-zinc-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Pitch Card */}
        <div className="mb-16 rounded-2xl p-8 sm:p-10 bg-zinc-950 border border-zinc-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-zinc-950/5">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Engagement Capacity Available
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to engineer your next software product?
            </h3>
            <p className="text-zinc-400 text-sm max-w-xl">
              We partner with founders and enterprise leaders to deliver high-craft digital systems with predictable velocity.
            </p>
          </div>

          <button
            id="footer-start-project-btn"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-full text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-100 transition-colors flex items-center gap-2 shrink-0 shadow-sm cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-200">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-xl tracking-tight text-zinc-950">
                BASAN<span className="text-zinc-400">.</span>TECH
              </span>
            </div>
            
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm">
              Basan Tech is an engineering-first software and digital product studio. We build web applications, native mobile apps, custom software, desktop systems, and e-commerce platforms.
            </p>

            {/* Social Icons (Instagram, WhatsApp, Email) */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/basan_tech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram @basan_tech"
                title="Instagram @basan_tech"
                id="footer-social-instagram"
                className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-pink-600 hover:text-pink-700 hover:bg-pink-50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/919624895641" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp (+91 9624895641)"
                title="WhatsApp (+91 9624895641)"
                id="footer-social-whatsapp"
                className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Email */}
              <a 
                href="mailto:basantech1@gmail.com" 
                aria-label="Email basantech1@gmail.com"
                title="Email basantech1@gmail.com"
                id="footer-social-email"
                className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-zinc-600" />
              <span>SOC2-ready standards & complete IP ownership</span>
            </div>
          </div>

          {/* Services Col */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Core Practices
            </div>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <button
                    id={`footer-service-${s.id}`}
                    onClick={() => onNavigate('service-detail', s.id)}
                    className="text-zinc-600 hover:text-zinc-950 transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Col */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Studio
            </div>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Selected Works', page: 'portfolio' as PageView },
                { label: 'About Studio', page: 'about' as PageView },
                { label: 'Services Matrix', page: 'services' as PageView },
                { label: 'Client Feedback', page: 'testimonials' as PageView },
                { label: 'Start Engagement', page: 'contact' as PageView },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    id={`footer-nav-${item.page}`}
                    onClick={() => onNavigate(item.page)}
                    className="text-zinc-600 hover:text-zinc-950 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Direct Lines */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Contact & Inquiries
            </div>
            <div className="space-y-2.5 text-xs text-zinc-600">
              <a 
                href="mailto:basantech1@gmail.com"
                id="footer-contact-email"
                className="flex items-center gap-2 hover:text-zinc-950 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span className="text-zinc-900 font-mono font-medium">basantech1@gmail.com</span>
              </a>
              <a 
                href="tel:+919624895641"
                id="footer-contact-phone"
                className="flex items-center gap-2 hover:text-zinc-950 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                <span className="text-zinc-900 font-mono font-medium">+91 9624895641</span>
              </a>
              <a 
                href="https://wa.me/919624895641"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-contact-whatsapp"
                className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-mono font-medium">WhatsApp: +91 9624895641</span>
              </a>
              <a 
                href="https://www.instagram.com/basan_tech/"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-contact-instagram"
                className="flex items-center gap-2 text-pink-700 hover:text-pink-800 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                <span className="font-medium">Instagram: @basan_tech</span>
              </a>
            </div>

            <div className="pt-2">
              {subscribed ? (
                <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs text-zinc-800 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Subscribed to updates</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <input
                      type="email"
                      id="footer-newsletter-input"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="work@company.com"
                      required
                      className="w-full px-3 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-950 transition-colors"
                    />
                    <button 
                      type="submit" 
                      id="footer-newsletter-submit"
                      className="px-3 py-1.5 rounded-lg bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shrink-0 shadow-xs cursor-pointer"
                    >
                      Join
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Basan Tech. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate('about')}
              className="hover:text-zinc-950 transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="hover:text-zinc-950 transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="hover:text-zinc-950 transition-colors cursor-pointer"
            >
              Security
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
