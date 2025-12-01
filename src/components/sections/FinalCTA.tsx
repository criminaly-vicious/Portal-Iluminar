import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';

export const FinalCTA = () => {
  return (
    <section id="contato" className="py-20 sm:py-28 lg:py-40 bg-graphite text-white relative overflow-hidden">
      <Spotlight className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px]" fill="#FF8A3D" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="badge-dark mx-auto">Acesso Antecipado</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 sm:mb-6">
            Chegou a hora de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-dark">iluminar</span>.
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-8 sm:mb-10">
            Sua escola merece ver o que está acontecendo. Seus alunos merecem ser ouvidos.
          </p>
          
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-orange hover:bg-orange-dark text-white font-semibold text-base sm:text-lg rounded-full shadow-lg shadow-orange/30 transition-all hover:shadow-xl hover:shadow-orange/40 hover:-translate-y-0.5"
          >
            Iluminar minha escola
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.a>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-500 text-xs sm:text-sm mt-6"
          >
            Atendemos inicialmente escolas particulares de Ensino Fundamental II e Médio.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
