const steps = [
  {
    num: "01",
    title: "Aluno envia",
    desc: "Texto semanal leve e curto"
  },
  {
    num: "02",
    title: "IA analisa",
    desc: "Processamento de linguagem natural"
  },
  {
    num: "03",
    title: "Dashboard ilumina",
    desc: "Indicadores em tempo real"
  },
  {
    num: "04",
    title: "Escola age",
    desc: "Intervenção precisa e humana"
  }
];

const indicators = [
  "Bem-estar", "Ansiedade", "Autoestima", "Isolamento", 
  "Burnout", "Fatores protetivos", "Tendências"
];

export const Flow = () => {
  return (
    <section id="como-funciona" className="section-padding bg-[#FDFCFB]">
      <div className="container-main">
        <div className="text-center mb-20">
          <div className="section-label">O Fluxo</div>
          <h2 className="section-title">
            Simples, contínuo e
            <br />
            <span className="text-gradient">automático</span>.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF8A3D]/30 to-transparent border-t border-dashed border-[#FF8A3D]/30" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              <div className="w-24 h-24 mx-auto bg-white rounded-full border border-[#F7F5F2] shadow-sm flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 group-hover:border-[#FF8A3D]">
                <span className="text-3xl font-bold text-[#FF8A3D] opacity-50 group-hover:opacity-100">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">{step.title}</h3>
              <p className="text-sm text-[#6F6F6F]">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="bg-white rounded-3xl p-10 border border-black/5 text-center">
          <p className="text-sm font-bold text-[#6F6F6F] uppercase tracking-widest mb-8">
            7 Indicadores Socioemocionais
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {indicators.map((tag, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-[#F7F5F2] text-[#1F1F1F] rounded-lg text-sm font-medium border border-transparent hover:border-[#FF8A3D]/30 hover:bg-[#FFF4ED] transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
