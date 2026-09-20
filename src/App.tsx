import React, { useState, useEffect, Suspense, lazy } from 'react';
import { PageView, ServiceId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ServicesOverview } from './components/ServicesOverview';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SERVICES_DATA } from './data/servicesData';

// Code-split heavy below-the-fold sections and individual detail pages
const PortfolioShowcase = lazy(() => import('./components/PortfolioShowcase').then(m => ({ default: m.PortfolioShowcase })));
const AboutAgency = lazy(() => import('./components/AboutAgency').then(m => ({ default: m.AboutAgency })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import('./components/TermsOfService').then(m => ({ default: m.TermsOfService })));
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const EngineeringProcess = lazy(() => import('./components/EngineeringProcess').then(m => ({ default: m.EngineeringProcess })));

// Dimension-matched skeleton fallback for subpages to completely eliminate CLS
const PageSkeleton = () => (
  <div className="w-full animate-pulse" aria-hidden="true">
    <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <div className="h-6 w-36 bg-slate-200/80 rounded-full" />
        <div className="h-12 sm:h-14 w-3/4 max-w-2xl bg-slate-200/80 rounded-2xl" />
        <div className="h-5 w-full max-w-xl bg-slate-200/60 rounded" />
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="h-64 bg-slate-200/40 rounded-3xl" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-44 bg-slate-200/40 rounded-2xl" />
        <div className="h-44 bg-slate-200/40 rounded-2xl" />
        <div className="h-44 bg-slate-200/40 rounded-2xl" />
      </div>
    </div>
  </div>
);

// Helper to normalize and map service IDs & legacy aliases
const normalizeServiceId = (rawId: string): ServiceId | null => {
  const cleanId = rawId.toLowerCase().trim();
  if (cleanId === 'web-dev') return 'website-dev';
  if (cleanId === 'mobile-app') return 'app-dev';
  if (cleanId === 'ecommerce') return 'ecommerce-dev';
  
  const found = SERVICES_DATA.find(s => s.id === cleanId);
  return found ? (cleanId as ServiceId) : null;
};

// Helper to determine active page and service from URL pathname & hash
const getRouteFromLocation = (): { page: PageView; serviceId?: ServiceId } => {
  if (typeof window === 'undefined') return { page: 'home' };

  const pathname = window.location.pathname.toLowerCase();
  const hash = window.location.hash.replace('#', '').replace(/^\//, '').toLowerCase();

  // 1. Check for /services/:id path (e.g. /services/app-dev or /services/app-dev/)
  const serviceMatch = pathname.match(/^\/services\/([a-z0-9-]+)\/?$/);
  if (serviceMatch) {
    const matchedId = normalizeServiceId(serviceMatch[1]);
    if (matchedId) {
      return { page: 'service-detail', serviceId: matchedId };
    }
    return { page: 'services' };
  }

  // 2. Fallback hash for /services/:id (e.g. #/services/app-dev)
  const hashServiceMatch = hash.match(/^services\/([a-z0-9-]+)\/?$/);
  if (hashServiceMatch) {
    const matchedId = normalizeServiceId(hashServiceMatch[1]);
    if (matchedId) {
      return { page: 'service-detail', serviceId: matchedId };
    }
  }

  // 3. Check clean pathnames
  const cleanPath = pathname.replace(/^\//, '').replace(/\/$/, '');
  const validPages: PageView[] = ['services', 'portfolio', 'about', 'testimonials', 'contact', 'privacy', 'terms'];

  if (cleanPath === 'work') return { page: 'portfolio' };
  if (validPages.includes(cleanPath as PageView)) {
    return { page: cleanPath as PageView };
  }

  // 4. Fallback to hash if present (for old bookmarks/links)
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
        <ErrorBoundary>
          {/* HOMEPAGE: Above-the-fold hero & services render synchronously with zero delay, zero blank gap, and zero CLS */}
          {currentPage === 'home' && (
            <div>
              <HeroSection onNavigate={handleNavigate} />
              <ServicesOverview onNavigate={handleNavigate} />

              <Suspense fallback={<div className="min-h-[600px] bg-slate-50/50" />}>
                <PortfolioShowcase onNavigate={handleNavigate} limit={3} />
              </Suspense>

              <Suspense fallback={<div className="min-h-[420px] bg-white" />}>
                <TestimonialsSection onNavigate={handleNavigate} />
              </Suspense>

              <Suspense fallback={<div className="min-h-[500px] bg-slate-50/70" />}>
                <AboutAgency onNavigate={handleNavigate} isAboutPage={false} />
              </Suspense>

              <Suspense fallback={<div className="min-h-[600px] bg-slate-900" />}>
                <ContactSection onNavigate={handleNavigate} />
              </Suspense>
            </div>
          )}

          {/* DEDICATED SUBPAGES: Wrapped in dimension-matched PageSkeleton to eliminate CLS on direct loads */}
          {currentPage !== 'home' && (
            <Suspense fallback={<PageSkeleton />}>
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
            </Suspense>
          )}
        </ErrorBoundary>
      </main>

      {/* Studio Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
