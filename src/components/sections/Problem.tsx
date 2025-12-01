import { Container, Section } from '../ui/Layout';
import { EyeOff, AlertTriangle, Activity, UserX } from 'lucide-react';

export const Problem = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-orange" />,
      title: "Conflitos estourados",
      description: "Situações que poderiam ser evitadas se percebidas antes."
    },
    {
      icon: <UserX className="w-6 h-6 text-brand-orange" />,
      title: "Desmotivação escondida",
      description: "Alunos que se desconectam silenciosamente do aprendizado."
    },
    {
      icon: <Activity className="w-6 h-6 text-brand-orange" />,
      title: "Burnout silencioso",
      description: "A exaustão emocional que não aparece nas notas."
    },
    {
      icon: <EyeOff className="w-6 h-6 text-brand-orange" />,
      title: "Pedidos de ajuda invisíveis",
      description: "Sinais sutis que se perdem na rotina escolar."
    }
  ];

  return (
    <Section className="bg-brand-graphite text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Hoje, as escolas cuidam <span className="text-gray-400">no escuro</span>.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            As emoções dos alunos mudam todos os dias. Mas a maioria das escolas só descobre quando já é tarde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-brand-orange/50 transition-colors group">
              <div className="mb-4 bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-400 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-light text-brand-orange">
            Você não consegue prevenir aquilo que não vê.
          </p>
        </div>
      </Container>
    </Section>
  );
};

