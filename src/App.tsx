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
import { PageHero } from './components/PageHero';
import { EngineeringProcess } from './components/EngineeringProcess';
import { SERVICES_DATA } from './data/servicesData';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Code2, 
  MapPin, 
  ShieldCheck, 
  Zap,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

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
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Back Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#022A4E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#00976C]" />
            <span>Back to All 6 Services</span>
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
            <PageHero
              breadcrumbs={[{ label: 'Services' }]}
              badge="ENGINEERING PRACTICES • 06 CAPABILITIES"
              title="Full-Stack Software Engineering & Digital Services"
              description="Explore our 6 core capabilities: Website Development, Mobile Apps, Custom Business Software, Desktop Systems, E-Commerce Stores, and AI Solutions. Built with modern frameworks and 100% intellectual property handover."
              stats={[
                { label: 'Core Practices', value: '06', highlight: true },
                { label: 'Client IP Ownership', value: '100%' },
                { label: 'Included Warranty', value: '30-Day' },
                { label: 'Development Cycle', value: 'Agile Sprints' },
              ]}
              ctaText="Start a Practice Inquiry"
              ctaPage="contact"
              onNavigate={handleNavigate}
            />
            <ServicesOverview onNavigate={handleNavigate} />
            <EngineeringProcess onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* SERVICE DETAIL PAGE */}
        {currentPage === 'service-detail' && renderServiceDetail()}

        {/* PORTFOLIO / WORK PAGE (Dedicated Page) */}
        {currentPage === 'portfolio' && (
          <div>
            <PageHero
              breadcrumbs={[{ label: 'Work & Case Studies' }]}
              badge="PROVEN DELIVERY • VERIFIED PLATFORMS"
              title="Our Work & Delivered Production Systems"
              description="Explore live software applications, education portals, e-commerce storefronts, and bio-incubation platforms engineered and deployed by BasanTech for real-world organizations."
              stats={[
                { label: 'Active Platforms', value: '5+', highlight: true },
                { label: 'Live Deployments', value: '100% Verifiable' },
                { label: 'Vendor Lock-in', value: 'Zero' },
                { label: 'Performance', value: '95+ Lighthouse' },
              ]}
              ctaText="Discuss Your Project Idea"
              ctaPage="contact"
              onNavigate={handleNavigate}
            />
            <PortfolioShowcase onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* ABOUT US PAGE (Dedicated Page) */}
        {currentPage === 'about' && (
          <div>
            <PageHero
              breadcrumbs={[{ label: 'About Us' }]}
              badge="ABOUT BASANTECH • PALANPUR, GUJARAT"
              title="An Engineering Studio Built on Quality & Craftsmanship"
              description="BasanTech is an independent technology and software engineering company headquartered in Palanpur, Gujarat, India. We partner with founders and business teams worldwide to engineer scalable, dependable digital products."
              stats={[
                { label: 'Headquarters', value: 'Palanpur, Gujarat', highlight: true },
                { label: 'Developer Access', value: '100% Direct' },
                { label: 'Repository Ownership', value: '100% Client' },
                { label: 'Client Reach', value: 'Global' },
              ]}
              ctaText="Connect With Our Team"
              ctaPage="contact"
              onNavigate={handleNavigate}
            />
            <AboutAgency onNavigate={handleNavigate} isAboutPage={true} />
            <TestimonialsSection onNavigate={handleNavigate} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* TESTIMONIALS PAGE (Dedicated Page) */}
        {currentPage === 'testimonials' && (
          <div>
            <PageHero
              breadcrumbs={[{ label: 'Testimonials' }]}
              badge="CLIENT REPUTATION & REVIEWS"
              title="What Our Clients Say About Partnering With Us"
              description="Authentic feedback from founders, program coordinators, and engineering leaders who trusted BasanTech with their core technology and digital platforms."
              stats={[
                { label: 'Average Client Rating', value: '5.0 / 5.0', highlight: true },
                { label: 'Milestone Delivery', value: '100% On-Time' },
                { label: 'Verified Reviews', value: '6+ Direct' },
                { label: 'Hypercare Warranty', value: '30 Days' },
              ]}
              ctaText="Partner With BasanTech"
              ctaPage="contact"
              onNavigate={handleNavigate}
            />
            <TestimonialsSection onNavigate={handleNavigate} />
            <PortfolioShowcase onNavigate={handleNavigate} limit={3} />
            <ContactSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* CONTACT PAGE (Dedicated Page) */}
        {currentPage === 'contact' && (
          <div>
            <PageHero
              breadcrumbs={[{ label: 'Contact Us' }]}
              badge="DIRECT TECHNICAL CONSULTATION"
              title="Let's Build Something Exceptional Together"
              description="Whether you have a detailed technical blueprint or a new digital concept, our engineering team in Palanpur, Gujarat reviews every brief and responds within 24 hours."
              stats={[
                { label: 'Response Time', value: '< 24 Hours', highlight: true },
                { label: 'Strategy Call', value: '30m Free' },
                { label: 'Engineering Hub', value: 'Palanpur, Gujarat' },
                { label: 'Direct Line', value: '+91 9624895641' },
              ]}
              onNavigate={handleNavigate}
            />
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
