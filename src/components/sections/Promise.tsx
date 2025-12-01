import { Container, Section } from '../ui/Layout';
import { CheckCircle2 } from 'lucide-react';

export const Promise = () => {
  const benefits = [
    "bem-estar visível.",
    "tendências explicadas.",
    "contexto emocional acessível.",
    "alertas éticos e confiáveis."
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-graphite leading-tight">
              Menos achismo.
              <br />
              <span className="text-brand-orange">Mais clareza.</span>
              <br />
              Melhores decisões.
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-xl text-gray-600 leading-relaxed">
              O Iluminar entrega aquilo que as escolas sempre quiseram, mas nunca tiveram:
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" />
                  <span className="text-lg font-medium text-brand-graphite">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

