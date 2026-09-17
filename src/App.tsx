import React, { useState, useEffect } from 'react';
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
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { EngineeringProcess } from './components/EngineeringProcess';
import { SERVICES_DATA } from './data/servicesData';

// Helper to determine active page and service from URL pathname & hash
const getRouteFromLocation = (): { page: PageView; serviceId?: ServiceId } => {
  if (typeof window === 'undefined') return { page: 'home' };

  const pathname = window.location.pathname.toLowerCase();
  const hash = window.location.hash.replace('#', '').toLowerCase();

  // Check for /services/:id route
  const serviceMatch = pathname.match(/^\/services\/([a-z0-9-]+)/);
  if (serviceMatch) {
    const sId = serviceMatch[1] as ServiceId;
    const exists = SERVICES_DATA.some(s => s.id === sId);
    if (exists) {
      return { page: 'service-detail', serviceId: sId };
    }
  }

  // Check clean pathnames
  const cleanPath = pathname.replace(/^\//, '').replace(/\/$/, '');
  const validPages: PageView[] = ['services', 'portfolio', 'about', 'testimonials', 'contact', 'privacy', 'terms'];

  if (cleanPath === 'work') return { page: 'portfolio' };
  if (validPages.includes(cleanPath as PageView)) {
    return { page: cleanPath as PageView };
  }

  // Fallback to hash if present (for old bookmarks/links)
  if (hash === 'work') return { page: 'portfolio' };
  if (validPages.includes(hash as PageView)) {
    return { page: hash as PageView };
  }

  return { page: 'home' };
};

export default function App() {
  const initialRoute = getRouteFromLocation();
  const [currentPage, setCurrentPage] = useState<PageView>(initialRoute.page);
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>(initialRoute.serviceId || 'custom-software');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Listen to popstate (browser back/forward buttons) and hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      const route = getRouteFromLocation();
      setCurrentPage(route.page);
      if (route.serviceId) {
        setSelectedServiceId(route.serviceId);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Update browser tab document.title consistently across pages
  useEffect(() => {
    let pageTitle = 'BasanTech — Web & Software Development Agency';
    switch (currentPage) {
      case 'home':
        pageTitle = 'BasanTech — Web & Software Development Agency';
        break;
      case 'services':
        pageTitle = 'Our Services & Practices — BasanTech';
        break;
      case 'service-detail': {
        const currentService = SERVICES_DATA.find(s => s.id === selectedServiceId);
        pageTitle = `${currentService?.title || 'Practice Area'} — BasanTech`;
        break;
      }
      case 'portfolio':
        pageTitle = 'Work & Case Studies — BasanTech';
        break;
      case 'about':
        pageTitle = 'About Us — BasanTech | Palanpur, Gujarat';
        break;
      case 'testimonials':
        pageTitle = 'Client Reviews & Reputation — BasanTech';
        break;
      case 'contact':
        pageTitle = 'Contact Us — BasanTech | Palanpur, Gujarat';
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
      let targetPath = '/';
      if (page === 'service-detail' && serviceId) {
        targetPath = `/services/${serviceId}`;
      } else if (page !== 'home') {
        targetPath = `/${page}`;
      }

      history.pushState(null, '', targetPath);
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
      <ServiceDetailPage 
        service={service} 
        onNavigate={handleNavigate} 
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 flex flex-col justify-between selection:bg-emerald-100 selection:text-[#022A4E]">
      
      {/* Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Router */}
      <main className="flex-1">
        
        {/* HOMEPAGE */}
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

        {/* SERVICES PAGE (Dedicated Page) */}
        {currentPage === 'services' && (
          <div>
            <ServicesOverview onNavigate={handleNavigate} showBreadcrumb={true} />
            <EngineeringProcess onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* SERVICE DETAIL PAGE */}
        {currentPage === 'service-detail' && renderServiceDetail()}

        {/* PORTFOLIO / WORK PAGE (Dedicated Page) */}
        {currentPage === 'portfolio' && (
          <div>
            <PortfolioShowcase onNavigate={handleNavigate} showBreadcrumb={true} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* ABOUT US PAGE (Dedicated Page) */}
        {currentPage === 'about' && (
          <div>
            <AboutAgency onNavigate={handleNavigate} isAboutPage={true} showBreadcrumb={true} />
            <TestimonialsSection onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* TESTIMONIALS PAGE (Dedicated Page) */}
        {currentPage === 'testimonials' && (
          <div>
            <TestimonialsSection onNavigate={handleNavigate} showBreadcrumb={true} />
            <PortfolioShowcase onNavigate={handleNavigate} limit={3} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* CONTACT PAGE (Dedicated Page) */}
        {currentPage === 'contact' && (
          <div>
            <ContactSection onNavigate={handleNavigate} showBreadcrumb={true} />
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
