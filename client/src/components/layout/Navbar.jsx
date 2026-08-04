import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu, X, MonitorPlay, Search, Share2, MousePointerClick } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Courses',
      path: '/courses',

    },
    { name: 'Placements', path: '/placements' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030303]/90 backdrop-blur-lg border-b border-white/10 shadow-lg py-3' : 'bg-[#030303] border-b border-white/5 py-5'}`}>
      <div className="flex items-center justify-between px-6 lg:px-12 max-w-[1400px] mx-auto">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 flex-shrink-0">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
              <path d="M 25 15 L 45 15 L 45 85 L 25 85 C 20 85 15 80 15 75 L 15 25 C 15 20 20 15 25 15 Z" fill="white" />
              <path d="M 45 15 L 68 15 C 84 15 95 28 95 45 C 95 62 84 75 68 75 L 45 75 L 45 15 Z" fill="url(#goldGradient)" />
              <path d="M 45 35 L 65 35 C 72 35 77 40 77 45 C 77 50 72 55 65 55 L 45 55 L 45 35 Z" fill="#030303" />
              <defs>
                <linearGradient id="goldGradient" x1="45" y1="15" x2="95" y2="75" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fef08a" />
                  <stop offset="0.5" stopColor="#eab308" />
                  <stop offset="1" stopColor="#a16207" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-extrabold text-[22px] leading-none tracking-tight flex gap-1.5 font-sans">
              <span className="text-white">PRIME</span>
              <span className="text-brand-yellow">IMPACT</span>
            </h1>
            <p className="text-[9px] text-white/90 font-bold uppercase tracking-[0.18em] mt-[3px] font-sans">
              Digital Marketing Institute
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));

            return (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-[15px] font-semibold transition-colors relative py-2
                    ${isActive ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'}`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className={`w-4 h-4 ml-0.5 opacity-80 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-yellow rounded-full"></div>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#0a0e17] border border-gray-800 rounded-xl shadow-2xl transition-all duration-300 transform origin-top ${activeDropdown === link.name ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="p-2">
                      {link.items.map((item, i) => (
                        <Link key={i} to={item.path} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group/item">
                          <div className="bg-gray-800 p-2 rounded-md group-hover/item:bg-gray-700 transition-colors">
                            {item.icon}
                          </div>
                          <span className="text-sm font-semibold text-white group-hover/item:text-brand-yellow transition-colors">
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/book-demo" className="hidden lg:flex items-center gap-2 border border-brand-yellow text-brand-yellow font-bold px-6 py-2.5 rounded-md hover:bg-brand-yellow hover:text-[#030303] hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all duration-300 text-[14px]">
            Book Free Demo Class <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            className="lg:hidden text-white hover:text-brand-yellow transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0a0e17] border-l border-gray-800 z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white tracking-tight">Menu</h2>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-2 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));

            return (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                  className={`text-lg font-bold flex items-center justify-between p-3 rounded-lg transition-colors
                    ${isActive ? 'bg-brand-yellow/10 text-brand-yellow' : 'text-white hover:bg-gray-800'}`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-5 h-5" />}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 mt-2 flex flex-col gap-1 border-l-2 border-gray-800 pl-3">
                    {link.items.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-sm font-medium text-gray-300 hover:text-brand-yellow py-2 px-3 rounded-md hover:bg-gray-800/50 transition-colors"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-auto p-6 border-t border-gray-800 bg-[#06090e]">
          <Link to="/book-demo" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 border border-brand-yellow bg-brand-yellow text-[#030303] font-bold px-6 py-4 rounded-lg transition-all hover:bg-brand-yellow-hover w-full text-[15px] shadow-[0_0_20px_rgba(234,179,8,0.2)]">
            Book Free Demo Class <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
