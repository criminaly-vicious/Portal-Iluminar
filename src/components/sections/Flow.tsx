import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Aluno envia", desc: "Textos semanais leves e respostas rápidas." },
  { number: "02", title: "IA analisa", desc: "ASATA identifica padrões emocionais." },
  { number: "03", title: "Dashboard ilumina", desc: "Indicadores em tempo real." },
  { number: "04", title: "Escola age", desc: "Intervenções precisas e humanas." },
];

const indicators = ["Bem-estar", "Ansiedade", "Autoestima", "Isolamento", "Burnout", "Tendências"];

export const Flow = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="badge mx-auto">Como Funciona</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 text-graphite">
            Simples, contínuo e <span className="text-orange">automático</span>.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            O Portal Iluminar integra-se à rotina escolar de forma fluida.
          </p>
        </motion.div>

        {/* Steps - Mobile: Vertical, Desktop: Horizontal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 hover:border-orange/20 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-light flex items-center justify-center text-orange text-sm sm:text-lg font-bold mb-3 sm:mb-4">
                  {step.number}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-graphite mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600">{step.desc}</p>
              </div>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-4 w-6 lg:w-8 h-px bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-sm sm:text-base font-bold text-graphite mb-4 sm:mb-6">Indicadores monitorados:</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {indicators.map((indicator, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 text-gray-600 text-[10px] sm:text-xs rounded-full border border-gray-100 hover:bg-orange-light hover:text-orange hover:border-orange/20 transition-colors"
              >
                {indicator}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
