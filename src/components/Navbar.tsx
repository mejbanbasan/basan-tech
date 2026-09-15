import React, { useState, useEffect } from 'react';
import { PageView, ServiceId } from '../types';
import { SERVICES_DATA } from '../data/agencyData';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowUpRight, 
  Globe, 
  Smartphone, 
  Cpu, 
  Monitor, 
  Share2, 
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'web-dev': return <Globe className="w-4 h-4 text-sky-600" />;
      case 'app-dev': return <Smartphone className="w-4 h-4 text-indigo-600" />;
      case 'custom-software': return <Cpu className="w-4 h-4 text-emerald-600" />;
      case 'desktop-software': return <Monitor className="w-4 h-4 text-amber-600" />;
      case 'social-media': return <Share2 className="w-4 h-4 text-pink-600" />;
      case 'ecommerce': return <ShoppingBag className="w-4 h-4 text-purple-600" />;
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
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/90 py-3.5 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Studio Brand Logo */}
          <button 
            id="nav-logo-btn"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center font-display font-bold text-white text-base tracking-tight group-hover:bg-zinc-800 transition-colors shadow-sm">
              BT
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight text-zinc-950 group-hover:text-zinc-700 transition-colors block">
                Basan Tech
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block -mt-0.5">
                Software & Digital
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white border border-zinc-200 px-2 py-1.5 rounded-full shadow-sm backdrop-blur-md">
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
                      className={`flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                        currentPage === 'services' || currentPage === 'service-detail'
                          ? 'bg-zinc-950 text-white shadow-sm'
                          : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-zinc-950' : 'text-zinc-500'}`} />
                    </button>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="rounded-xl p-2.5 shadow-xl border border-zinc-200 bg-white backdrop-blur-xl">
                          <div className="px-2.5 py-1.5 mb-1 border-b border-zinc-100">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-medium">Core Practices</span>
                          </div>
                          <div className="space-y-0.5">
                            {SERVICES_DATA.map((service) => (
                              <button
                                key={service.id}
                                id={`mega-menu-${service.id}`}
                                onClick={() => {
                                  onNavigate('service-detail', service.id);
                                  setServicesDropdownOpen(false);
                                }}
                                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 text-left transition-colors group"
                              >
                                <div className="p-1.5 rounded-md bg-zinc-100 border border-zinc-200 group-hover:border-zinc-300 transition-colors">
                                  {getServiceIcon(service.id)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors truncate">
                                    {service.title}
                                  </div>
                                  <div className="text-[11px] text-zinc-500 truncate">
                                    {service.badge}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-zinc-100 px-1">
                            <button
                              id="mega-menu-view-all-services"
                              onClick={() => {
                                onNavigate('services');
                                setServicesDropdownOpen(false);
                              }}
                              className="w-full py-1.5 text-center text-xs font-medium text-zinc-600 hover:text-zinc-950 flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <span>View All Services</span>
                              <ArrowUpRight className="w-3 h-3" />
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
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    currentPage === link.page
                      ? 'bg-zinc-950 text-white shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-get-quote-cta"
              onClick={() => onNavigate('contact')}
              className="group flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full transition-all duration-200 shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 shadow-sm focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white px-4 pt-3 pb-6 shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-nav-${link.page}`}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-zinc-950 bg-zinc-100 font-semibold'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
                }`}
              >
                <span>{link.label}</span>
              </button>
            ))}

            <div className="mt-3 pt-3 border-t border-zinc-200">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2 px-1">
                Core Practices
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {SERVICES_DATA.map((service) => (
                  <button
                    key={service.id}
                    id={`mobile-service-item-${service.id}`}
                    onClick={() => {
                      onNavigate('service-detail', service.id);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 hover:text-zinc-950 text-left"
                  >
                    {getServiceIcon(service.id)}
                    <span className="truncate">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-200">
              <button
                id="mobile-contact-cta"
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-zinc-950 hover:bg-zinc-800 rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
