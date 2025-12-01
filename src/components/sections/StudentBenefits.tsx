import { DoodleStar } from '@/components/ui/doodles';

export const StudentBenefits = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <div>
            <div className="section-label">Para o Aluno</div>
            <h2 className="section-title mb-6">
              Devolutivas claras
              <br />
              e <span className="text-gradient">acolhedoras</span>.
            </h2>
            <p className="text-xl text-[#6F6F6F] mb-8 leading-relaxed">
              O aluno não recebe um diagnóstico clínico. Ele recebe orientação, 
              reconhecimento e cuidado.
            </p>
            
            <ul className="space-y-4">
              {[
                "Feedback emocional não clínico",
                "Visão de progresso pessoal",
                "Recomendações pedagógicas",
                "Atividades da metodologia SELF"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1F1F1F] font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#FFF4ED] flex items-center justify-center text-[#FF8A3D]">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FFF4ED] rounded-full blur-3xl opacity-60" />
            
            {/* Phone Frame */}
            <div className="relative w-[320px] bg-[#1F1F1F] rounded-[3rem] p-3 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1F1F1F] rounded-b-xl z-20" />
              
              {/* Screen */}
              <div className="bg-[#FDFCFB] rounded-[2.5rem] overflow-hidden h-[600px] relative">
                {/* Header */}
                <div className="p-6 pt-12 pb-4 bg-white border-b border-[#F7F5F2]">
                  <div className="flex justify-between items-center">
                    <div className="w-8 h-8 rounded-full bg-[#F7F5F2]" />
                    <span className="font-bold text-[#1F1F1F]">Iluminar</span>
                    <div className="w-8 h-8" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-[#FFF4ED] rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                      ✨
                    </div>
                    <h3 className="font-bold text-xl text-[#1F1F1F]">Olá, Pedro!</h3>
                    <p className="text-xs text-[#6F6F6F]">Resumo da sua semana</p>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-[#F7F5F2] shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-[#6F6F6F] uppercase">Bem-estar</span>
                      <span className="text-xs font-bold text-green-500">Subindo</span>
                    </div>
                    <div className="h-2 bg-[#F7F5F2] rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-[#FF8A3D] rounded-full" />
                    </div>
                  </div>

                  <div className="bg-[#FFF4ED] p-4 rounded-2xl border border-[#FF8A3D]/10">
                    <p className="text-xs font-bold text-[#FF8A3D] mb-2 uppercase">Mensagem</p>
                    <p className="text-sm text-[#1F1F1F] leading-relaxed">
                      "Percebemos que você está se sentindo mais confiante. Continue participando das atividades!"
                    </p>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-white border-t border-[#F7F5F2] flex justify-around items-center px-6">
                  <div className="w-6 h-6 rounded-full bg-[#FF8A3D]" />
                  <div className="w-6 h-6 rounded-full bg-[#F7F5F2]" />
                  <div className="w-6 h-6 rounded-full bg-[#F7F5F2]" />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-4 top-20 bg-white p-3 rounded-xl shadow-lg animate-float hidden sm:block">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute -left-8 bottom-40 bg-white p-3 rounded-xl shadow-lg animate-float delay-200 hidden sm:block">
              <span className="text-2xl">❤️</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
