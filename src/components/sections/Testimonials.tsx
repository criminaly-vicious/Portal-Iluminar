import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "O Portal Iluminar nos deu uma clareza que nunca tivemos. Conseguimos agir de forma proativa.",
    author: "Maria Clara",
    role: "Diretora Pedagógica",
  },
  {
    quote: "É incrível como a plataforma capta nuances emocionais. Me sinto mais preparado para apoiar meus alunos.",
    author: "Prof. Ricardo",
    role: "Professor de História",
  },
  {
    quote: "A ferramenta é leve e intuitiva. A equipe pedagógica agora tem dados para embasar suas decisões.",
    author: "Ana Beatriz",
    role: "Coordenadora",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="badge mx-auto">Depoimentos</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 text-graphite">
            O que as escolas <span className="text-orange">estão dizendo</span>.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-4 sm:gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm sm:text-base text-graphite mb-4 sm:mb-6 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-bold text-graphite text-sm sm:text-base">{t.author}</p>
                <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
