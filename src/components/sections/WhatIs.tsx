import { motion } from 'framer-motion';

const pillars = [
  { title: "Leve", desc: "Sem sobrecarga" },
  { title: "Pedagógico", desc: "Alinhado ao currículo" },
  { title: "Preventivo", desc: "Ação antecipada" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export const WhatIs = () => {
  return (
    <section id="solucao" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="badge mx-auto">A Solução</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 text-graphite">
            Inteligência emocional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-dark">contínua</span>.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12">
            Uma plataforma que conecta alunos, inteligência artificial e educadores em um ciclo de cuidado constante.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20"
        >
          {pillars.map((p, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-100 bg-cream text-xs sm:text-sm font-medium text-graphite flex items-center gap-2 sm:gap-3 hover:border-orange/30 hover:bg-orange-light transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              {p.title}
              <span className="text-gray-400 pl-2 sm:pl-3 border-l border-gray-200 text-[10px] sm:text-xs">{p.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-cream rounded-2xl sm:rounded-3xl border border-gray-100 p-6 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Aluno */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 w-full md:w-48 lg:w-56 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-graphite" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="font-bold text-graphite text-sm sm:text-base">Aluno</h3>
              <p className="text-[10px] sm:text-xs text-gray-500">Escreve & Responde</p>
            </motion.div>

            {/* Connector */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="h-px w-full bg-gradient-to-r from-gray-200 via-orange to-gray-200" />
            </div>
            <div className="md:hidden w-px h-8 bg-gradient-to-b from-gray-200 via-orange to-gray-200" />

            {/* ASATA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-orange p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg shadow-orange/20 w-full md:w-48 lg:w-56 text-white md:-translate-y-2 hover:shadow-xl transition-shadow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <h3 className="font-bold text-sm sm:text-base">ASATA AI</h3>
              <p className="text-[10px] sm:text-xs text-white/80">Analisa & Processa</p>
            </motion.div>

            {/* Connector */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="h-px w-full bg-gradient-to-r from-gray-200 via-orange to-gray-200" />
            </div>
            <div className="md:hidden w-px h-8 bg-gradient-to-b from-gray-200 via-orange to-gray-200" />

            {/* Escola */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 w-full md:w-48 lg:w-56 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-graphite" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="font-bold text-graphite text-sm sm:text-base">Escola</h3>
              <p className="text-[10px] sm:text-xs text-gray-500">Visualiza & Age</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
