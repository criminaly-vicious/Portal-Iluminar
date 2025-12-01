const pillars = [
  {
    title: "Leve",
    text: "Sem sobrecarga",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: "Pedagógico",
    text: "Alinhado ao currículo",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  },
  {
    title: "Preventivo",
    text: "Ação antecipada",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];

export const WhatIs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-20">
          <div className="section-label">O que é</div>
          <h2 className="section-title mb-6">
            Plataforma de inteligência
            <br />
            <span className="text-gradient">emocional contínua</span>.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-2.5 bg-[#FDFCFB] border border-[#F7F5F2] rounded-full">
                <span className="text-[#FF8A3D]">{pillar.icon}</span>
                <div className="text-left">
                  <span className="block text-sm font-bold text-[#1F1F1F]">{pillar.title}</span>
                  <span className="block text-[10px] text-[#6F6F6F] uppercase tracking-wider">{pillar.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagram */}
        <div className="relative max-w-5xl mx-auto bg-[#FDFCFB] rounded-[2.5rem] border border-[#F7F5F2] p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(#FF8A3D 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Node 1 */}
            <div className="text-center relative group">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#F7F5F2] mb-4 group-hover:border-[#FF8A3D] transition-colors">
                <span className="text-3xl">🧑‍🎓</span>
              </div>
              <h3 className="font-bold text-[#1F1F1F]">Aluno</h3>
              <p className="text-sm text-[#6F6F6F]">Escreve &<br/>Responde</p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden lg:block flex-1 h-px bg-[#FF8A3D]/30 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF8A3D] to-transparent w-1/3 animate-[shimmer_2s_infinite]" />
            </div>

            {/* Node 2 */}
            <div className="text-center relative group">
              <div className="w-24 h-24 bg-[#FF8A3D] rounded-full flex items-center justify-center shadow-lg shadow-[#FF8A3D]/20 mb-4 transform group-hover:scale-110 transition-transform">
                <span className="text-3xl text-white font-bold">AI</span>
              </div>
              <h3 className="font-bold text-[#1F1F1F]">ASATA</h3>
              <p className="text-sm text-[#6F6F6F]">Analisa &<br/>Processa</p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden lg:block flex-1 h-px bg-[#FF8A3D]/30 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF8A3D] to-transparent w-1/3 animate-[shimmer_2s_infinite_0.5s]" />
            </div>

            {/* Node 3 */}
            <div className="text-center relative group">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#F7F5F2] mb-4 group-hover:border-[#FF8A3D] transition-colors">
                <span className="text-3xl">🏫</span>
              </div>
              <h3 className="font-bold text-[#1F1F1F]">Escola</h3>
              <p className="text-sm text-[#6F6F6F]">Visualiza &<br/>Age</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
