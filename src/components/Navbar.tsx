import React, { useState, useEffect } from 'react';
import { PageView, ServiceId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowUpRight, 
  Globe, 
  Smartphone, 
  Cpu, 
  Sparkles,
  Laptop,
  ShoppingBag
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, serviceId?: ServiceId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'website-dev':
      case 'web-dev':
        return <Globe className="w-4 h-4 text-[#00976C]" />;
      case 'app-dev':
      case 'mobile-app':
        return <Smartphone className="w-4 h-4 text-[#022A4E]" />;
      case 'custom-software':
        return <Cpu className="w-4 h-4 text-[#022A4E]" />;
      case 'desktop-software':
        return <Laptop className="w-4 h-4 text-[#00976C]" />;
      case 'ecommerce-dev':
      case 'ecommerce':
        return <ShoppingBag className="w-4 h-4 text-[#022A4E]" />;
      case 'ai-solutions':
        return <Sparkles className="w-4 h-4 text-[#00976C]" />;
      default:
        return <Cpu className="w-4 h-4 text-[#022A4E]" />;
    }
  };

  const navLinks: { label: string; page: PageView; hasDropdown?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services', hasDropdown: true },
    { label: 'Work', page: 'portfolio' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header 
      id="basan-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs' 
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Attached Full Brand Logo (Transparent & Proportionate) */}
          <button 
            id="nav-logo-btn"
            onClick={() => onNavigate('home')}
            className="flex items-center self-center text-left group focus:outline-none cursor-pointer py-0.5"
            aria-label="BasanTech Home"
          >
            <img 
              src="/basantech-logo.png" 
              alt="BasanTech Software & Digital" 
              className="h-11 sm:h-12 md:h-[50px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50/90 border border-slate-200 px-2 py-1.5 rounded-full shadow-2xs">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      id={`nav-${link.page}-dropdown-trigger`}
                      onClick={() => onNavigate('services')}
                      className={`flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 cursor-pointer ${
                        currentPage === 'services' || currentPage === 'service-detail'
                          ? 'bg-[#022A4E] text-white shadow-xs'
                          : 'text-slate-700 hover:text-[#00976C] hover:bg-slate-100'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#00976C]' : 'text-slate-400'}`} />
                    </button>

                    {/* Services Dropdown (Clean, Professional B2B Style) */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 pt-2 z-50">
                        <div className="rounded-xl py-2 px-1.5 shadow-lg border border-slate-200 bg-white">
                          {SERVICES_DATA.map((service) => (
                            <button
                              key={service.id}
                              id={`nav-service-${service.id}`}
                              onClick={() => {
                                onNavigate('service-detail', service.id);
                                setServicesDropdownOpen(false);
                              }}
                              className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#00976C] hover:bg-slate-50 rounded-lg transition-colors block cursor-pointer"
                            >
                              {service.title}
                            </button>
                          ))}
                          <div className="mt-1.5 pt-1.5 border-t border-slate-100">
                            <button
                              id="nav-all-services-link"
                              onClick={() => {
                                onNavigate('services');
                                setServicesDropdownOpen(false);
                              }}
                              className="w-full text-left px-3 py-1.5 text-xs font-semibold text-[#022A4E] hover:text-[#00976C] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                            >
                              <span>All Services Overview</span>
                              <span>→</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.label}
                  id={`nav-link-${link.page}`}
                  onClick={() => onNavigate(link.page)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 cursor-pointer ${
                    currentPage === link.page
                      ? 'bg-[#022A4E] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#00976C] hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA with Brand Green */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-get-quote-cta"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#00976C] hover:bg-[#00825B] rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#022A4E] shadow-xs focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#022A4E]" /> : <Menu className="w-5 h-5 text-[#022A4E]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-nav-${link.page}`}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold transition-colors cursor-pointer ${
                  currentPage === link.page
                    ? 'text-[#00976C] bg-emerald-50'
                    : 'text-slate-700 hover:text-[#022A4E] hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
              </button>
            ))}

            <div className="mt-3 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2 px-1">
                Our 6 Services
              </span>
              <div className="flex flex-col gap-1">
                {SERVICES_DATA.map((service) => (
                  <button
                    key={service.id}
                    id={`mobile-service-item-${service.id}`}
                    onClick={() => {
                      onNavigate('service-detail', service.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#00976C] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                id="mobile-contact-cta"
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-center text-xs font-bold text-white bg-[#00976C] hover:bg-[#00825B] rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
              >
                <span>Start a Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-100" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
