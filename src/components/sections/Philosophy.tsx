import { motion } from 'framer-motion';

const principles = [
  { old: "Não é diagnóstico", new: "É visibilidade." },
  { old: "Não é clínica", new: "É cuidado." },
  { old: "Não é teste", new: "É leitura humana." }
];

export const Philosophy = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="badge mx-auto">Filosofia</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 text-graphite">
            Mais do que tecnologia. <span className="text-orange">Educação clara</span>.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-12 sm:mb-16">
            Nossa abordagem é centrada no ser humano, potencializada pela inteligência artificial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-cream p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-100"
            >
              <p className="text-xs sm:text-sm text-gray-400 line-through mb-2">{p.old}</p>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-graphite">{p.new}</h3>
            </motion.div>
          ))}
        </div>

        {/* Connection Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cream border border-gray-200 flex items-center justify-center mb-2">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-medium text-graphite">Centra</p>
            </div>
            
            <div className="flex-1 max-w-16 sm:max-w-24 h-px bg-gradient-to-r from-gray-200 via-orange to-gray-200" />
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange shadow-lg shadow-orange/30 flex items-center justify-center mb-2">
                <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-bold text-graphite">Iluminar</p>
            </div>
            
            <div className="flex-1 max-w-16 sm:max-w-24 h-px bg-gradient-to-r from-gray-200 via-orange to-gray-200" />
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cream border border-gray-200 flex items-center justify-center mb-2">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-medium text-graphite">ASATA</p>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-500 mt-8 sm:mt-12 max-w-md mx-auto">
            A Centra nasceu para transformar a relação emocional dos jovens com a escola. O Iluminar é a materialização tecnológica desse propósito.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
