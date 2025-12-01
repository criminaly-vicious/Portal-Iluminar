import { Container, Section } from '../ui/Layout';
import { Star, Zap, Heart, Search } from 'lucide-react';

export const Unique = () => {
  const differentiators = [
    {
      phrase: "Porque não é diagnóstico.",
      complement: "É visibilidade.",
      icon: <Search className="w-5 h-5" />
    },
    {
      phrase: "Porque não é clínica.",
      complement: "É cuidado.",
      icon: <Heart className="w-5 h-5" />
    },
    {
      phrase: "Porque não é uma prova.",
      complement: "É leitura humana alimentada por IA.",
      icon: <BrainIcon className="w-5 h-5" />
    }
  ];

  const points = [
    "Análise contínua",
    "Textos autorais + formulários",
    "Modelo preventivo real",
    "Dashboards pedagógicos",
    "Design emocional premium",
    "IA especializada em linguagem estudantil",
    "Estrutura ética explícita"
  ];

  return (
    <Section className="bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-8 mb-12">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-brand-graphite">{item.phrase}</h3>
                    <p className="text-2xl font-bold text-brand-orange">{item.complement}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-brand-light rounded-2xl border border-brand-orange/10">
              <h4 className="font-bold text-brand-graphite mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-brand-orange fill-brand-orange" />
                Nenhuma EdTech do Brasil entrega:
              </h4>
              <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
                {points.map((point, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-graphite/40" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-orange/5 rounded-full blur-3xl transform rotate-12" />
            <div className="relative z-10 text-center lg:text-right space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-graphite">
                Você criou uma <br />
                <span className="text-brand-orange">categoria nova</span>.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                O Portal Iluminar não compete.
                <br />
                Ele ocupa o espaço vazio que todo mundo ignorou.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

// Simple internal component for the icon to avoid import issues if lucide-react version varies
const BrainIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
)

