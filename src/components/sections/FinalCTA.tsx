export const FinalCTA = () => {
  return (
    <section id="contato" className="py-40 bg-[#101010] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF8A3D] rounded-full blur-[200px] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />

      <div className="container-main relative z-10 text-center">
        <div className="inline-block px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md mb-8">
          <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">Acesso Antecipado</span>
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tight leading-[1.05]">
          Sua escola, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">finalmente visível.</span>
        </h2>

        <p className="text-xl text-white/40 max-w-2xl mx-auto mb-16 font-light">
          Junte-se às escolas pioneiras que estão transformando o cuidado emocional em dados pedagógicos.
        </p>

        <div className="flex flex-col items-center">
          <a 
            href="mailto:contato@centra.com.br" 
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-[#FF8A3D] text-white font-bold text-xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(255,138,61,0.6)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            Agendar Demonstração
            <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <p className="mt-8 text-sm text-white/20">
            Atendemos inicialmente escolas particulares de Ensino Fundamental II e Médio.
          </p>
        </div>
      </div>
    </section>
  );
};
