export const FinalCTA = () => {
  return (
    <section id="contato" className="py-32 md:py-48 bg-graphite relative overflow-hidden text-center">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container-main relative z-10">
        <div className="badge-dark">Acesso Antecipado</div>
        
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
          Sua escola, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">finalmente visível.</span>
        </h2>

        <p className="text-xl text-white/50 max-w-2xl mx-auto mb-16 font-light">
          Junte-se às escolas pioneiras que estão transformando o cuidado emocional em dados pedagógicos.
        </p>

        <div className="flex flex-col items-center gap-8">
          <a href="mailto:contato@centra.com.br" className="btn-primary text-lg px-10 py-5 shadow-[0_0_40px_rgba(255,138,61,0.4)] hover:shadow-[0_0_60px_rgba(255,138,61,0.6)]">
            Agendar Demonstração
          </a>
          <p className="text-sm text-white/30">
            Atendemos escolas particulares de Ensino Fundamental II e Médio.
          </p>
        </div>
      </div>
    </section>
  );
};
