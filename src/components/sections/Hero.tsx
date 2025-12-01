import { DoodleUnderline } from '@/components/ui/doodles';

export const Hero = () => {
  return (
    <section className="min-h-[110vh] flex items-center pt-32 pb-20 bg-[#FDFCFB] relative overflow-hidden perspective-2000">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[1200px] h-[1200px] bg-gradient-to-bl from-[#FF8A3D]/10 via-[#FF8A3D]/5 to-transparent rounded-full blur-[100px] opacity-60 animate-pulse-soft" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-gradient-to-tr from-[#F7F5F2] to-transparent rounded-full blur-[80px] opacity-80" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: The Copy */}
          <div className="relative z-20 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#1F1F1F]/5 rounded-full shadow-sm mb-8 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D] animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#6F6F6F]">
                Inteligência Emocional Escolar v1.0
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1F1F1F] leading-[1.05] tracking-tight mb-8">
              <span className="block text-[#6F6F6F]/80 font-medium text-4xl md:text-5xl mb-2">A escola não vê.</span>
              <span className="block relative">
                O Iluminar{' '}
                <span className="relative inline-block text-[#FF8A3D]">
                  revela
                  <DoodleUnderline className="absolute -bottom-2 left-0 w-full h-4 opacity-80" />
                </span>
                .
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#6F6F6F] mb-10 max-w-lg leading-relaxed animate-fade-in-up delay-100 font-light">
              Transforme sinais invisíveis em <span className="font-medium text-[#1F1F1F]">dados claros</span>. 
              O primeiro radar emocional preventivo para escolas que se importam de verdade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200 items-start">
              <a href="#contato" className="btn-primary group text-lg px-8 py-4 shadow-[0_20px_40px_-12px_rgba(255,138,61,0.4)] hover:shadow-[0_25px_60px_-12px_rgba(255,138,61,0.5)]">
                Começar agora
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <div className="flex items-center gap-4 px-4 py-4 text-sm text-[#6F6F6F]">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-[#FDFCFB] flex items-center justify-center text-[10px] font-bold shadow-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p>Usado por +50 escolas</p>
              </div>
            </div>
          </div>

          {/* Right: The 3D Dashboard */}
          <div className="relative z-10 order-1 lg:order-2 lg:h-[600px] flex items-center justify-center perspective-1000 group">
            <div className="relative w-full max-w-[600px] aspect-[4/3] transition-all duration-700 ease-out transform group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg] preserve-3d">
              
              {/* Layer 1: Back Glow */}
              <div className="absolute inset-4 bg-[#FF8A3D]/30 rounded-[2rem] blur-[80px] -z-10" />

              {/* Layer 2: Main Card (Glass) */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-500 group-hover:translate-z-10">
                {/* UI Header */}
                <div className="h-12 border-b border-[#1F1F1F]/5 flex items-center px-6 gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                  </div>
                </div>
                {/* UI Body */}
                <div className="p-6 space-y-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs font-bold text-[#6F6F6F] uppercase tracking-wider mb-1">Visão Geral</div>
                      <div className="text-3xl font-bold text-[#1F1F1F]">Bem-estar da Escola</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#FF8A3D]">78%</div>
                      <div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block">↑ 4.2% este mês</div>
                    </div>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-32 flex items-end gap-2 pt-4">
                    {[30, 45, 35, 50, 45, 60, 55, 70, 65, 80, 75, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-[#F7F5F2] rounded-t-md relative group/bar overflow-hidden">
                        <div 
                          className="absolute bottom-0 w-full bg-[#1F1F1F] opacity-[0.03] transition-all duration-500 group-hover/bar:opacity-100 group-hover/bar:bg-[#FF8A3D]" 
                          style={{ height: `${h}%` }} 
                        />
                        <div 
                          className="absolute bottom-0 w-full bg-[#FF8A3D] opacity-80 h-1"
                          style={{ bottom: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Layer 3: Floating Elements (Parallax) */}
              <div className="absolute -right-12 top-20 bg-white p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 animate-float transition-transform duration-500 group-hover:translate-z-30 group-hover:translate-x-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF4ED] flex items-center justify-center text-[#FF8A3D]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1F1F1F]">Alerta Preventivo</div>
                    <div className="text-[10px] text-[#6F6F6F]">Turma 9ºB requer atenção</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-20 bg-[#1F1F1F] p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] animate-float delay-500 transition-transform duration-500 group-hover:translate-z-20 group-hover:-translate-x-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Proteção Ativa</div>
                    <div className="text-[10px] text-white/60">32 alunos seguros</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
