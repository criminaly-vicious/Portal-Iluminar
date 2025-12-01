import { useState, useEffect } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O que é', href: '#o-que-e' },
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Funcionalidades', href: '#funcionalidades' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)] py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#FF8A3D] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#1F1F1F] leading-tight">
              Portal <span className="text-[#FF8A3D]">Iluminar</span>
            </span>
            <span className="text-[10px] text-[#6F6F6F] tracking-wider uppercase">by Centra</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#6F6F6F] hover:text-[#FF8A3D] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8A3D] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="#contato" className="btn-primary text-sm px-6 py-3">
            Agendar demonstração
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-[#1F1F1F] hover:text-[#FF8A3D] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#F7F5F2] shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="container-main py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-[#1F1F1F] hover:text-[#FF8A3D] py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="btn-primary text-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar demonstração
          </a>
        </nav>
      </div>
    </header>
  );
};
