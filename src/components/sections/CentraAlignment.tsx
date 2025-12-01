export const CentraAlignment = () => {
  return (
    <section className="section-padding bg-[#FDFCFB] border-t border-[#F7F5F2] relative overflow-hidden">
      {/* Connection Line Background */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF8A3D]/20 to-transparent border-t border-dashed border-[#FF8A3D]/20" />

      <div className="container-main relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Centra */}
          <div className="text-center bg-[#FDFCFB] p-4 relative z-10">
            <div className="w-20 h-20 bg-white rounded-full border border-[#F7F5F2] flex items-center justify-center mb-4 mx-auto shadow-sm">
              <span className="font-bold text-[#1F1F1F]">Centra</span>
            </div>
            <p className="text-sm font-bold text-[#1F1F1F]">Propósito</p>
            <p className="text-xs text-[#6F6F6F]">Transformação emocional</p>
          </div>

          {/* Iluminar (Center) */}
          <div className="text-center bg-[#FDFCFB] p-4 relative z-10 transform scale-110">
            <div className="w-24 h-24 bg-[#FF8A3D] rounded-full flex items-center justify-center mb-4 mx-auto shadow-xl shadow-[#FF8A3D]/20 animate-pulse-soft">
              <span className="font-bold text-white">Iluminar</span>
            </div>
            <p className="text-sm font-bold text-[#1F1F1F]">Plataforma</p>
            <p className="text-xs text-[#6F6F6F]">Tecnologia aplicada</p>
          </div>

          {/* ASATA */}
          <div className="text-center bg-[#FDFCFB] p-4 relative z-10">
            <div className="w-20 h-20 bg-white rounded-full border border-[#F7F5F2] flex items-center justify-center mb-4 mx-auto shadow-sm">
              <span className="font-bold text-[#1F1F1F]">ASATA</span>
            </div>
            <p className="text-sm font-bold text-[#1F1F1F]">Inteligência</p>
            <p className="text-xs text-[#6F6F6F]">Motor cognitivo</p>
          </div>

        </div>

        <div className="text-center mt-16 max-w-lg mx-auto">
          <p className="text-lg text-[#6F6F6F] leading-relaxed">
            A Centra nasceu para transformar a relação emocional dos jovens com a escola. 
            O <span className="text-[#1F1F1F] font-semibold">Iluminar</span> é a materialização tecnológica desse propósito.
          </p>
        </div>
      </div>
    </section>
  );
};
