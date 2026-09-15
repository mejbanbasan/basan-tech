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
import { SERVICES_DATA } from './data/agencyData';
import { ArrowLeft, Clock, ArrowUpRight, Check } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('web-dev');

  const handleNavigate = (page: PageView, serviceId?: ServiceId) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setCurrentPage(page);
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
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Practices</span>
          </button>
          
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span>Practice Code:</span>
            <strong className="text-zinc-900">BSN-{service.id.toUpperCase()}</strong>
          </div>
        </div>

        {/* Hero Section for Service Detail */}
        <div className="rounded-2xl p-8 sm:p-12 bg-white border border-zinc-200 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-200">
              {service.badge}
            </span>
            <span className="text-xs text-zinc-500 font-mono flex items-center gap-1.5">
              <span>Full IP Ownership & Production Grade</span>
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-zinc-950 tracking-tight">
              {service.title}
            </h1>
            <p className="text-zinc-700 text-lg sm:text-xl font-medium max-w-3xl">
              {service.tagline}
            </p>
          </div>

          <p className="text-zinc-600 text-base leading-relaxed max-w-4xl">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => handleNavigate('contact', service.id)}
              className="px-6 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>Initiate {service.title} Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleNavigate('portfolio')}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-700 text-xs font-medium border border-zinc-300 transition-colors"
            >
              <span>View Related Works</span>
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
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col justify-between selection:bg-zinc-200 selection:text-zinc-950">
      
      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Router */}
      <main className="flex-1">
        
        {currentPage === 'home' && (
          <div>
            <HeroSection onNavigate={handleNavigate} />
            <ServicesOverview onNavigate={handleNavigate} />
            <PortfolioShowcase onNavigate={handleNavigate} limit={3} />
            <TestimonialsSection onNavigate={handleNavigate} />
            <AboutAgency onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'services' && (
          <div className="pt-16">
            <ServicesOverview onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'service-detail' && renderServiceDetail()}

        {currentPage === 'portfolio' && (
          <div className="pt-16">
            <PortfolioShowcase onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="pt-16">
            <AboutAgency onNavigate={handleNavigate} />
            <TestimonialsSection onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'testimonials' && (
          <div className="pt-16">
            <TestimonialsSection onNavigate={handleNavigate} />
            <PortfolioShowcase onNavigate={handleNavigate} limit={3} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-16">
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

      </main>

      {/* Studio Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
