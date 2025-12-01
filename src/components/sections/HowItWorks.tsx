import { Container, Section } from '../ui/Layout';
import { PenTool, CheckSquare, Sparkles, LayoutDashboard } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Aluno escreve",
      description: "Textos leves, pedagógicos, alinhados ao currículo.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Aluno responde",
      description: "Um mini-formulário mensal simples e rápido.",
      icon: <CheckSquare className="w-6 h-6" />
    },
    {
      number: "03",
      title: "IA ASATA analisa",
      description: "Sete indicadores socioemocionais + padrões linguísticos + sinais de proteção.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      number: "04",
      title: "O Portal Iluminar",
      description: "Ilumina o caminho com um dashboard preventivo, claro e contínuo.",
      icon: <LayoutDashboard className="w-6 h-6" />
    }
  ];

  return (
    <Section id="como-funciona" className="bg-brand-light relative overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-graphite mb-4">
            A cada semana, a escola entende o que antes ficava invisível.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-graphite/10 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center border-4 border-brand-light shadow-sm mb-6 group-hover:border-brand-orange transition-colors">
                <div className="text-brand-orange">
                  {step.icon}
                </div>
              </div>
              
              <div className="text-center px-4">
                <span className="block text-4xl font-bold text-brand-graphite/5 mb-2">{step.number}</span>
                <h3 className="text-xl font-bold text-brand-graphite mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

