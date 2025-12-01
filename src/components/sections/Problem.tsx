const problems = [
  {
    title: "Conflitos estourados",
    desc: "Quando chega na sua mesa, já é tarde.",
    icon: "💥"
  },
  {
    title: "Desmotivação silenciosa",
    desc: "Alunos brilhantes que se apagam.",
    icon: "😶"
  },
  {
    title: "Burnout docente",
    desc: "Professores sobrecarregados.",
    icon: "🔋"
  },
  {
    title: "Sinais invisíveis",
    desc: "Pedidos de ajuda ignorados.",
    icon: "👁️"
  }
];

export const Problem = () => {
  return (
    <section className="section-padding bg-graphite text-white relative overflow-hidden">
      {/* Texture & Glow */}
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="mb-20">
          <div className="badge-dark">O Problema</div>
          <h2 className="text-headline mb-6">
            O custo invisível do <span className="text-orange">silêncio</span>.
          </h2>
          <p className="text-body-large text-white/60 max-w-2xl">
            Enquanto você lê isso, as emoções da sua escola estão mudando. Sem dados, você está pilotando no escuro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="card-dark group">
              <div className="text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-orange transition-colors">{p.title}</h3>
              <p className="text-sm text-white/50">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
