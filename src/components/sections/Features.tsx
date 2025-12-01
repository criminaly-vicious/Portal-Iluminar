const personas = [
  {
    title: "Direção",
    icon: "📊",
    items: ["Dashboard macro da escola", "Tendências emocionais", "Relatórios mensais", "Mapa de calor de risco"]
  },
  {
    title: "Professor",
    icon: "👩‍🏫",
    items: ["Visão da turma", "Alertas preventivos", "Dicas pedagógicas", "Histórico do aluno"]
  },
  {
    title: "Aluno",
    icon: "🎓",
    items: ["Devolutivas simples", "Visão de progresso", "Jornada SELF", "Conteúdo socioemocional"]
  }
];

export const Features = () => {
  return (
    <section id="recursos" className="section-padding bg-graphite text-white">
      <div className="container-main">
        <div className="text-center mb-20">
          <div className="badge-dark">Funcionalidades</div>
          <h2 className="text-headline mb-6">
            Três visões, <span className="text-orange">um objetivo</span>.
          </h2>
          <p className="text-body-large text-white/60 max-w-2xl mx-auto">
            Cada papel na escola recebe exatamente o que precisa para agir com clareza.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((p, i) => (
            <div key={i} className="card-dark group hover:bg-white/[0.05]">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-8 group-hover:bg-orange group-hover:text-white transition-all">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{p.title}</h3>
              <ul className="space-y-4">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
