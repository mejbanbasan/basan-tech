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
  Layers,
  Code2,
  Server,
  Layout
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
      case 'custom-software': return <Cpu className="w-4 h-4 text-[#022A4E]" />;
      case 'web-dev': return <Globe className="w-4 h-4 text-[#00976C]" />;
      case 'mobile-app': case 'app-dev': return <Smartphone className="w-4 h-4 text-[#022A4E]" />;
      case 'ai-solutions': return <Sparkles className="w-4 h-4 text-[#00976C]" />;
      case 'hubspot-dev': return <Layers className="w-4 h-4 text-amber-600" />;
      case 'reactjs-dev': return <Code2 className="w-4 h-4 text-sky-600" />;
      case 'wordpress-dev': return <Layout className="w-4 h-4 text-[#00976C]" />;
      case 'nodejs-dev': return <Server className="w-4 h-4 text-emerald-700" />;
      default: return <Cpu className="w-4 h-4 text-[#022A4E]" />;
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
          
          {/* Attached Full Brand Logo */}
          <button 
            id="nav-logo-btn"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer py-1"
            aria-label="BasanTech Home"
          >
            <img 
              src="/basantech-logo.png" 
              alt="BasanTech Software & Digital" 
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] mix-blend-multiply" 
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

                    {/* Services Dropdown (8 services) */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-96 pt-2 z-50">
                        <div className="rounded-2xl p-3 shadow-xl border border-slate-200 bg-white backdrop-blur-xl space-y-1">
                          <div className="px-3 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                              Our 8 Core Practices
                            </span>
                            <span className="text-[10px] font-semibold text-[#00976C] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                              Expert Delivery
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 gap-1 max-h-[380px] overflow-y-auto pr-1">
                            {SERVICES_DATA.map((service) => (
                              <button
                                key={service.id}
                                id={`mega-menu-${service.id}`}
                                onClick={() => {
                                  onNavigate('service-detail', service.id);
                                  setServicesDropdownOpen(false);
                                }}
                                className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-emerald-50/50 text-left transition-colors group cursor-pointer border border-transparent hover:border-emerald-200/70"
                              >
                                <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 group-hover:border-[#00976C] group-hover:bg-white transition-colors shrink-0">
                                  {getServiceIcon(service.id)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-bold text-[#022A4E] group-hover:text-[#00976C] transition-colors truncate">
                                    {service.title}
                                  </div>
                                  <div className="text-[11px] text-slate-500 truncate">
                                    {service.tagline}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>

                          <div className="mt-2 pt-2 border-t border-slate-100 px-1">
                            <button
                              id="mega-menu-view-all-services"
                              onClick={() => {
                                onNavigate('services');
                                setServicesDropdownOpen(false);
                              }}
                              className="w-full py-1.5 text-center text-xs font-semibold text-[#022A4E] hover:text-[#00976C] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <span>Explore All 8 Services &amp; Stacks</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#00976C]" />
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
                Our Services
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {SERVICES_DATA.map((service) => (
                  <button
                    key={service.id}
                    id={`mobile-service-item-${service.id}`}
                    onClick={() => {
                      onNavigate('service-detail', service.id);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 hover:border-[#00976C] hover:text-[#00976C] text-left cursor-pointer"
                  >
                    {getServiceIcon(service.id)}
                    <span className="truncate">{service.title}</span>
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
