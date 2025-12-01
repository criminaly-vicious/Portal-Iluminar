const laws = [
  {
    title: "Não é diagnóstico",
    subtitle: "É visibilidade.",
    desc: "Não rotulamos alunos. Damos luz para que a escola possa ver e acolher."
  },
  {
    title: "Não é clínica",
    subtitle: "É cuidado.",
    desc: "Não substituímos psicólogos. Fortalecemos a rede de apoio pedagógico."
  },
  {
    title: "Não é teste",
    subtitle: "É leitura humana.",
    desc: "Não avaliamos desempenho. Entendemos sentimentos com ajuda da IA."
  }
];

export const Manifesto = () => {
  return (
    <section className="section-padding bg-white text-center">
      <div className="container-main">
        <div className="mb-20">
          <div className="section-label">Manifesto</div>
          <h2 className="section-title">
            Mais do que tecnologia.
            <br />
            <span className="text-gradient">Educação clara</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {laws.map((law, i) => (
            <div key={i} className="group cursor-default">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FDFCFB] border border-[#F7F5F2] text-2xl group-hover:scale-110 transition-transform group-hover:border-[#FF8A3D]/20">
                {i + 1}
              </div>
              <h3 className="text-xl font-medium text-[#6F6F6F] mb-1 line-through decoration-[#FF8A3D]/30">{law.title}</h3>
              <p className="text-2xl font-bold text-[#1F1F1F] mb-4">{law.subtitle}</p>
              <p className="text-sm text-[#6F6F6F] leading-relaxed max-w-xs mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                {law.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
