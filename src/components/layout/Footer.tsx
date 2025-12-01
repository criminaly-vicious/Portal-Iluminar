import { motion } from 'framer-motion';
import { Logo } from '../blocks/hero-section-9';

export const Footer = () => {
  return (
    <footer className="bg-cream py-10 sm:py-12 lg:py-16 border-t border-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
      >
        <Logo className="mx-auto mb-4" />
        <p className="text-gray-600 text-xs sm:text-sm mb-2">
          Parte do ecossistema: <span className="font-semibold">Centra</span> · <span className="font-semibold">ASATA</span>
        </p>
        <p className="text-gray-400 text-[10px] sm:text-xs">
          © {new Date().getFullYear()} Portal Iluminar. Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
};
