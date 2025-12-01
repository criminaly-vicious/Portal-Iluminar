const pillars = [
  { title: "Leve", desc: "Sem sobrecarga" },
  { title: "Pedagógico", desc: "Alinhado ao currículo" },
  { title: "Preventivo", desc: "Ação antecipada" }
];

export const WhatIs = () => {
  return (
    <section id="solucao" className="section-padding bg-white text-center">
      <div className="container-main">
        <div className="badge">A Solução</div>
        <h2 className="text-headline mb-6">
          Inteligência emocional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-dark">contínua</span>.
        </h2>
        <p className="text-body-large max-w-2xl mx-auto mb-12">
          Uma plataforma que conecta alunos, inteligência artificial e educadores em um ciclo de cuidado constante.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {pillars.map((p, i) => (
            <div key={i} className="px-6 py-3 rounded-full border border-gray-100 bg-cream text-sm font-medium text-graphite flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              {p.title}
              <span className="text-gray-400 pl-2 border-l border-gray-200">{p.desc}</span>
            </div>
          ))}
        </div>

        {/* Flow Diagram */}
        <div className="max-w-4xl mx-auto bg-cream rounded-[2rem] border border-gray-100 p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Aluno */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full md:w-64">
              <div className="text-4xl mb-4">🧑‍🎓</div>
              <h3 className="font-bold text-graphite">Aluno</h3>
              <p className="text-sm text-gray-500">Escreve & Responde</p>
            </div>

            {/* Connector */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="h-px w-full bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange w-1/2 animate-[shimmer_2s_infinite]" />
              </div>
            </div>

            {/* ASATA */}
            <div className="bg-orange p-6 rounded-2xl shadow-lg shadow-orange/20 w-full md:w-64 text-white transform md:-translate-y-4">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-bold">ASATA AI</h3>
              <p className="text-sm text-white/80">Analisa & Processa</p>
            </div>

            {/* Connector */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="h-px w-full bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange w-1/2 animate-[shimmer_2s_infinite_1s]" />
              </div>
            </div>

            {/* Escola */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full md:w-64">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="font-bold text-graphite">Escola</h3>
              <p className="text-sm text-gray-500">Visualiza & Age</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
