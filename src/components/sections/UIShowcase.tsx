export const UIShowcase = () => {
  return (
    <section className="section-padding bg-[#FDFCFB] relative overflow-hidden">
      {/* Background & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF8A3D]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-main relative z-10">
        <div className="text-center mb-24">
          <div className="section-label">Interface</div>
          <h2 className="section-title mb-6">
            Complexidade zero.
            <br />
            Clareza <span className="text-gradient">absoluta</span>.
          </h2>
          <p className="text-xl text-[#6F6F6F] max-w-xl mx-auto">
            Cada pixel foi desenhado para transformar dados psicológicos complexos em ações pedagógicas simples.
          </p>
        </div>

        {/* The Monumental Dashboard */}
        <div className="relative max-w-6xl mx-auto perspective-2000 group">
          {/* Floating Cards Behind */}
          <div className="absolute -top-12 left-12 bg-white p-4 rounded-2xl shadow-xl border border-black/5 animate-float z-20 hidden lg:block transform rotate-[-6deg]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF4ED] flex items-center justify-center text-xl">🛡️</div>
              <div>
                <p className="text-xs font-bold text-[#1F1F1F] uppercase">Fatores Protetivos</p>
                <p className="text-sm font-medium text-[#FF8A3D]">+12% esta semana</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-12 right-12 bg-[#1F1F1F] p-4 rounded-2xl shadow-xl border border-white/10 animate-float delay-500 z-20 hidden lg:block transform rotate-[6deg]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">🧠</div>
              <div>
                <p className="text-xs font-bold text-white uppercase">IA ASATA</p>
                <p className="text-sm font-medium text-white/60">Processando...</p>
              </div>
            </div>
          </div>

          {/* Main Dashboard Container */}
          <div className="relative bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-[#F7F5F2] overflow-hidden transition-transform duration-700 group-hover:rotate-x-2">
            
            {/* Browser Chrome */}
            <div className="h-16 bg-white border-b border-[#F7F5F2] flex items-center px-8 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-[#F7F5F2] rounded-full text-xs font-medium text-[#6F6F6F]">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                portal.iluminar.app
              </div>
              <div className="w-8" />
            </div>

            <div className="flex min-h-[700px]">
              {/* Sidebar */}
              <div className="w-72 border-r border-[#F7F5F2] p-8 bg-[#FDFCFB] hidden md:block">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-8 h-8 bg-[#FF8A3D] rounded-lg shadow-lg shadow-[#FF8A3D]/30" />
                  <span className="font-bold text-xl tracking-tight">Iluminar</span>
                </div>
                
                <div className="space-y-1">
                  {['Visão Geral', 'Turmas', 'Alunos', 'Insights IA', 'Configurações'].map((item, i) => (
                    <div key={i} className={`px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors ${i === 0 ? 'bg-white text-[#1F1F1F] shadow-sm border border-[#F7F5F2]' : 'text-[#6F6F6F] hover:bg-white/50'}`}>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="text-xs font-bold text-[#6F6F6F] uppercase tracking-wider mb-4 px-4">Turmas em Foco</p>
                  <div className="space-y-1">
                    <div className="px-4 py-2 flex items-center justify-between text-sm text-[#1F1F1F]">
                      <span>9º Ano B</span>
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    </div>
                    <div className="px-4 py-2 flex items-center justify-between text-sm text-[#6F6F6F]">
                      <span>2º Médio A</span>
                      <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 bg-[#FAFAFA] p-8 lg:p-12 overflow-hidden relative">
                {/* Header Area */}
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <h1 className="text-3xl font-bold text-[#1F1F1F] mb-2">Bom dia, Diretora.</h1>
                    <p className="text-[#6F6F6F]">Aqui está o pulso emocional da sua escola hoje.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white border border-[#E5E5E5] rounded-lg text-sm font-medium text-[#1F1F1F] shadow-sm hover:bg-[#F7F5F2]">Exportar PDF</button>
                    <button className="px-4 py-2 bg-[#1F1F1F] text-white rounded-lg text-sm font-medium shadow-lg hover:bg-black">Nova Análise</button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-[1.5rem] border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between mb-4">
                      <span className="text-xs font-bold text-[#6F6F6F] uppercase tracking-wider">Clima Escolar</span>
                      <span className="text-xl">🌤️</span>
                    </div>
                    <div className="text-4xl font-bold text-[#1F1F1F] mb-2">8.4<span className="text-lg text-[#6F6F6F] font-normal">/10</span></div>
                    <div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full inline-block">↑ Melhor que ontem</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-[1.5rem] border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between mb-4">
                      <span className="text-xs font-bold text-[#6F6F6F] uppercase tracking-wider">Alunos Engajados</span>
                      <span className="text-xl">🎓</span>
                    </div>
                    <div className="text-4xl font-bold text-[#1F1F1F] mb-2">92%</div>
                    <div className="w-full bg-[#F7F5F2] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#1F1F1F] h-full w-[92%]" />
                    </div>
                  </div>

                  <div className="bg-[#FFF4ED] p-6 rounded-[1.5rem] border border-[#FF8A3D]/20 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="flex justify-between mb-4">
                      <span className="text-xs font-bold text-[#FF8A3D] uppercase tracking-wider">Radar Preventivo</span>
                      <span className="text-xl animate-pulse">🚨</span>
                    </div>
                    <div className="text-4xl font-bold text-[#FF8A3D] mb-2">3</div>
                    <div className="text-xs font-medium text-[#FF8A3D]/80">casos prioritários</div>
                  </div>
                </div>

                {/* Big Chart */}
                <div className="bg-white p-8 rounded-[2rem] border border-[#E5E5E5] shadow-sm h-80 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-[#1F1F1F]">Evolução do Bem-estar (30 dias)</h3>
                    <div className="flex gap-4 text-xs text-[#6F6F6F]">
                      <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FF8A3D]" /> 2025</span>
                      <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#E5E5E5]" /> 2024</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-48 px-8 flex items-end justify-between gap-3">
                    {[35, 42, 38, 55, 65, 60, 75, 80, 72, 85, 90, 88].map((h, i) => (
                      <div key={i} className="w-full flex flex-col justify-end h-full group/bar relative">
                        <div className="bg-[#F7F5F2] w-full rounded-t-md h-[40%] mb-[-10%]" /> {/* Ghost bar */}
                        <div 
                          className="bg-[#FF8A3D] w-full rounded-t-lg opacity-90 transition-all duration-500 ease-out group-hover/bar:opacity-100 group-hover/bar:bg-[#E67A2E] relative z-10 shadow-[0_4px_20px_rgba(255,138,61,0.3)]"
                          style={{ height: `${h}%` }}
                        />
                        {/* Tooltip on Hover */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1F1F1F] text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                          {h}%
                        </div>
                      </div>
                    ))}
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
