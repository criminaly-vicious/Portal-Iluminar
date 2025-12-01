import { useState, useEffect } from 'react';
import { Logo } from '../ui/logo';
import { cn } from '@/lib/utils';

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
    { name: 'Solução', href: '#solucao' },
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Recursos', href: '#recursos' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-main flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50 relative">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-gray-600 hover:text-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="#contato" 
            className="inline-flex items-center justify-center px-5 py-2.5 bg-graphite text-white text-sm font-medium rounded-full hover:bg-black transition-all duration-300"
          >
            Agendar demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-graphite z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5 items-end">
            <span className={cn("w-6 h-0.5 bg-current transition-all", isMobileMenuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("w-4 h-0.5 bg-current transition-all", isMobileMenuOpen && "opacity-0")} />
            <span className={cn("w-6 h-0.5 bg-current transition-all", isMobileMenuOpen && "-rotate-45 -translate-y-2")} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-medium text-graphite"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            className="mt-4 px-8 py-4 bg-orange text-white text-lg font-medium rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar demonstração
          </a>
        </div>
      </div>
    </header>
  );
};
