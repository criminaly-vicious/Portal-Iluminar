import { Logo } from '../ui/logo';

export const Footer = () => {
  return (
    <footer className="py-12 bg-cream border-t border-gray-100">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo />
        
        <div className="text-sm text-gray-500 flex items-center gap-2">
          Parte do ecossistema: <span className="font-bold text-graphite">Centra</span> · <span className="font-bold text-graphite">ASATA</span>
        </div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Portal Iluminar.
        </p>
      </div>
    </footer>
  );
};
