import React, { useState } from 'react';
import { PageView, ServiceId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ServicesOverview } from './components/ServicesOverview';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { AboutAgency } from './components/AboutAgency';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { SERVICES_DATA } from './data/servicesData';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['services', 'portfolio', 'about', 'testimonials', 'contact', 'privacy', 'terms'].includes(hash)) {
        return hash as PageView;
      }
    }
    return 'home';
  });
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('custom-software');

  React.useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['services', 'portfolio', 'about', 'testimonials', 'contact', 'privacy', 'terms', 'home'].includes(hash)) {
        setCurrentPage(hash === 'home' ? 'home' : (hash as PageView));
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Update browser tab document.title consistently across pages
  React.useEffect(() => {
    let pageTitle = 'BasanTech — Web & Software Development Agency';
    switch (currentPage) {
      case 'home':
        pageTitle = 'BasanTech — Web & Software Development Agency';
        break;
      case 'services':
        pageTitle = 'Services — BasanTech';
        break;
      case 'service-detail': {
        const currentService = SERVICES_DATA.find(s => s.id === selectedServiceId);
        pageTitle = `${currentService?.title || 'Practice Area'} — BasanTech`;
        break;
      }
      case 'portfolio':
        pageTitle = 'Work — BasanTech';
        break;
      case 'about':
        pageTitle = 'About Us — BasanTech';
        break;
      case 'testimonials':
        pageTitle = 'Client Reviews — BasanTech';
        break;
      case 'contact':
        pageTitle = 'Contact Us — BasanTech';
        break;
      case 'privacy':
        pageTitle = 'Privacy Policy — BasanTech';
        break;
      case 'terms':
        pageTitle = 'Terms of Service — BasanTech';
        break;
      default:
        pageTitle = 'BasanTech — Web & Software Development Agency';
    }
    document.title = pageTitle;
  }, [currentPage, selectedServiceId]);

  const handleNavigate = (page: PageView, serviceId?: ServiceId) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setCurrentPage(page);

    try {
      if (page === 'home') {
        history.replaceState(null, '', window.location.pathname);
      } else if (page !== 'service-detail') {
        history.pushState(null, '', `#${page}`);
      }
    } catch {
      // ignore
    }

    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      try {
        window.scrollTo(0, 0);
      } catch {
        // ignore
      }
    }
  };

  // Dedicated Service Detail Page View
  const renderServiceDetail = () => {
    const service = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

    return (
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#022A4E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#00976C]" />
            <span>Back to All 8 Practices</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>Practice Code:</span>
            <strong className="text-[#022A4E]">BSN-{service.id.toUpperCase()}</strong>
          </div>
        </div>

        {/* Hero Section for Service Detail */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-md text-xs font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
              {service.badge}
            </span>
            <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5 font-medium">
              <span>Full Source Code Ownership • Enterprise Grade</span>
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#022A4E] tracking-tight">
              {service.title}
            </h1>
            <p className="text-slate-800 text-lg sm:text-xl font-medium max-w-3xl">
              {service.tagline}
            </p>
          </div>

          <p className="text-slate-600 text-base leading-relaxed max-w-4xl">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => handleNavigate('contact', service.id)}
              className="px-7 py-3.5 rounded-full bg-[#022A4E] hover:bg-[#00976C] text-white text-xs font-bold transition-all duration-200 flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Initiate {service.title} Inquiry</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-300" />
            </button>

            <button
              onClick={() => handleNavigate('portfolio')}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-[#022A4E] text-xs font-semibold border border-slate-300 transition-colors cursor-pointer"
            >
              <span>View Case Studies</span>
            </button>
          </div>
        </div>

        {/* Deep Dive on the Service */}
        <ServicesOverview onNavigate={handleNavigate} initialServiceId={service.id} />

        {/* Related Case Studies */}
        <PortfolioShowcase onNavigate={handleNavigate} limit={3} />

        {/* Direct Engagement Form */}
        <ContactSection onNavigate={handleNavigate} preselectedService={service.id} />

      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 flex flex-col justify-between selection:bg-emerald-100 selection:text-[#022A4E]">
      
      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Router */}
      <main className="flex-1">
        
        {/* HOMEPAGE - Notice: Founder & Leadership is NOT shown on homepage per requirement */}
        {currentPage === 'home' && (
          <div>
            <HeroSection onNavigate={handleNavigate} />
            <ServicesOverview onNavigate={handleNavigate} />
            <PortfolioShowcase onNavigate={handleNavigate} limit={3} />
            <TestimonialsSection onNavigate={handleNavigate} />
            <AboutAgency onNavigate={handleNavigate} isAboutPage={false} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* SERVICES PAGE */}
        {currentPage === 'services' && (
          <div className="pt-16">
            <ServicesOverview onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* SERVICE DETAIL PAGE */}
        {currentPage === 'service-detail' && renderServiceDetail()}

        {/* PORTFOLIO / WORK PAGE */}
        {currentPage === 'portfolio' && (
          <div className="pt-16">
            <PortfolioShowcase onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* ABOUT US PAGE - Includes Founder & Leadership Section */}
        {currentPage === 'about' && (
          <div className="pt-16">
            <AboutAgency onNavigate={handleNavigate} isAboutPage={true} />
            <TestimonialsSection onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* TESTIMONIALS PAGE */}
        {currentPage === 'testimonials' && (
          <div className="pt-16">
            <TestimonialsSection onNavigate={handleNavigate} />
            <PortfolioShowcase onNavigate={handleNavigate} limit={3} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* CONTACT PAGE */}
        {currentPage === 'contact' && (
          <div className="pt-16">
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* PRIVACY POLICY PAGE */}
        {currentPage === 'privacy' && (
          <PrivacyPolicy onNavigate={handleNavigate} />
        )}

        {/* TERMS OF SERVICE PAGE */}
        {currentPage === 'terms' && (
          <TermsOfService onNavigate={handleNavigate} />
        )}

      </main>

      {/* Studio Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
