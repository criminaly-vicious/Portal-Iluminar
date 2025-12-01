const steps = [
  { num: "01", title: "Aluno envia", desc: "Texto semanal leve e curto" },
  { num: "02", title: "IA analisa", desc: "Processamento de linguagem" },
  { num: "03", title: "Dashboard ilumina", desc: "Indicadores em tempo real" },
  { num: "04", title: "Escola age", desc: "Intervenção precisa e humana" }
];

const indicators = ["Bem-estar", "Ansiedade", "Autoestima", "Isolamento", "Burnout", "Fatores protetivos", "Tendências"];

export const Flow = () => {
  return (
    <section id="como-funciona" className="section-padding bg-cream border-y border-gray-100">
      <div className="container-main">
        <div className="text-center mb-20">
          <div className="badge">Como Funciona</div>
          <h2 className="text-headline">
            Simples, contínuo e <span className="text-orange">automático</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative mb-24">
          {/* Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-gray-200" />

          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-2xl font-bold text-orange mb-6 relative z-10 transition-colors group-hover:border-orange group-hover:bg-orange-light">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-graphite mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-gray-100 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">7 Indicadores Analisados</p>
          <div className="flex flex-wrap justify-center gap-3">
            {indicators.map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium border border-transparent hover:border-orange/20 hover:bg-orange-light/50 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
