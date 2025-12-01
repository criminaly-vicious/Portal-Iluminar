import { useState, useEffect } from 'react';
import { Container } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '../ui/Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O que é', href: '#o-que-e' },
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Diferenciais', href: '#diferenciais' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <a href="#" className="text-2xl font-bold text-brand-graphite flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            Portal Iluminar
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-graphite/80 hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" onClick={() => window.open('https://wa.me/your-number', '_blank')}>
            Agendar Demonstração
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-brand-graphite"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-brand-graphite hover:text-brand-orange"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full" onClick={() => window.open('https://wa.me/your-number', '_blank')}>
              Agendar Demonstração
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

