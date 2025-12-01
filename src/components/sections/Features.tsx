import { Container, Section } from '../ui/Layout';
import { 
  BarChart3, 
  Users, 
  UserCircle, 
  Brain, 
  ShieldAlert, 
  FileText, 
  GitMerge 
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      title: "Painel da Direção",
      subtitle: "Macrointeligência Emocional",
      icon: <BarChart3 className="w-6 h-6" />,
      items: [
        "Nível geral de bem-estar da escola",
        "Ansiedade média da turma por mês",
        "Isolamento social visível por clusters",
        "Fatores protetivos da comunidade"
      ]
    },
    {
      title: "Painel do Professor",
      subtitle: "Gestão viva da turma",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Saúde emocional da turma semana a semana",
        "Alertas leves, moderados e urgentes",
        "Insights de convivência",
        "Orientação direta: \"Como falar com o aluno\""
      ]
    },
    {
      title: "Painel do Aluno (Futuro)",
      subtitle: "Autoconhecimento real",
      icon: <UserCircle className="w-6 h-6" />,
      items: [
        "Timeline emocional pessoal",
        "Recomendações de ações",
        "Espaço de desabafo guiado",
        "Missões emocionais gamificadas (SELF)"
      ]
    },
    {
      title: "ASATA",
      subtitle: "O motor cognitivo invisível",
      icon: <Brain className="w-6 h-6" />,
      items: [
        "Análise linguística profunda",
        "Matriz de 7 indicadores",
        "Leitura ética e score explicável",
        "Zero clinical vibe"
      ]
    },
    {
      title: "Sistema de Alertas Éticos",
      subtitle: "Leve e pedagógico",
      icon: <ShieldAlert className="w-6 h-6" />,
      items: [
        "Nenhum alerta psicológico invasivo",
        "Tudo leve, pedagógico e preventivo",
        "Com texto humano, sem termos clínicos",
        "Acionável em sala de aula"
      ]
    },
    {
      title: "Relatórios Mensais",
      subtitle: "Inteligência consolidada",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "Resumo emocional",
        "Principais fatores de risco e proteção",
        "Narrativas e temas emergentes",
        "Sugestões pedagógicas"
      ]
    }
  ];

  return (
    <Section className="bg-brand-light">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium mb-4">
            Features que destroem o mercado
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-graphite mb-6">
            Detalhes que fazem a diferença
          </h2>
          <p className="text-xl text-gray-600">
            Pensa grande comigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-brand-orange/20 transition-all hover:shadow-lg group">
              <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-brand-graphite mb-1">{feature.title}</h3>
              <p className="text-sm font-medium text-brand-orange mb-6">{feature.subtitle}</p>
              
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/40 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-graphite rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <GitMerge className="w-6 h-6 text-brand-orange" />
                <h3 className="text-2xl font-bold">Pipeline de Prevenção Escolar</h3>
              </div>
              <p className="text-gray-300 mb-6">
                O Iluminar transforma a escola em um organismo emocional inteligente.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Antes</span>
                  <p className="text-gray-400">Intervenções tardias e reativas</p>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2">Agora</span>
                  <p className="text-white font-medium">Decisões antecipadas, orientadas, claras e consistentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

