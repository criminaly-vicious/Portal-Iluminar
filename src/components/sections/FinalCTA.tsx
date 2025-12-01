import { Container, Section } from '../ui/Layout';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <Section className="bg-brand-graphite text-white py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-4xl bg-brand-orange/20 rounded-full blur-[120px]" />

      <Container className="relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Pronto para iluminar sua escola?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          A educação preventiva começa aqui.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 h-auto gap-3">
            Agendar demonstração agora
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Container>
    </Section>
  );
};

