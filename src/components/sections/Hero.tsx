import { Container } from '../ui/Layout';
import { Button } from '../ui/Button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-brand-light to-white">
      {/* Background Elements - "Rabiscos" simulation */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-graphite/5 rounded-full blur-3xl" />
      
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Nova categoria de inteligência emocional
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-graphite leading-tight">
            A escola só pode cuidar <br className="hidden md:block" />
            do que consegue <span className="text-brand-orange">ver</span>.
            <br />
            <span className="text-brand-graphite">O Portal Iluminar mostra.</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bem-estar emocional contínuo, claro e confiável — em um único lugar.
            <br />
            <span className="text-sm font-medium mt-4 block text-gray-500">
              Powered by ASATA • Criado pela Centra
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto gap-2 group">
              Agendar Apresentação
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
              <PlayCircle className="w-4 h-4" />
              Ver Como Funciona
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

