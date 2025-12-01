const roles = [
  {
    role: "Direção",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="24" height="24" rx="8" />
        <path d="M16 10v12" />
        <path d="M10 16h12" />
      </svg>
    ),
    features: [
      "Dashboard macro da escola",
      "Tendências emocionais",
      "Relatórios mensais",
      "Mapa de calor de risco"
    ]
  },
  {
    role: "Professor",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
        <path d="M6 24v-2a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v2" />
      </svg>
    ),
    features: [
      "Visão da turma",
      "Alertas preventivos",
      "Dicas pedagógicas",
      "Histórico do aluno"
    ]
  },
  {
    role: "Aluno",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    features: [
      "Devolutivas simples",
      "Visão de progresso",
      "Jornada SELF",
      "Conteúdo socioemocional"
    ]
  }
];

export const Features = () => {
  return (
    <section id="funcionalidades" className="section-padding bg-[#1F1F1F] text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container-main relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-white/10 text-[#FF8A3D] text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Funcionalidades
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Três visões, <span className="text-white/40">um objetivo</span>.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Cada papel na escola recebe exatamente o que precisa para agir com clareza.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.08] p-8 rounded-[2rem] hover:bg-white/[0.06] transition-colors duration-300 group">
              <div className="w-16 h-16 bg-[#FF8A3D]/10 rounded-2xl flex items-center justify-center text-[#FF8A3D] mb-8 group-hover:bg-[#FF8A3D] group-hover:text-white transition-all">
                {role.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{role.role}</h3>
              <ul className="space-y-4">
                {role.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D]" />
                    {feature}
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
