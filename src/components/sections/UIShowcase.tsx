export const UIShowcase = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-main relative z-10">
        <div className="text-center mb-20">
          <div className="badge">Interface</div>
          <h2 className="text-headline mb-6">
            Complexidade zero.<br/>Clareza <span className="text-orange">absoluta</span>.
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto perspective-1000">
          {/* Floating Card Left */}
          <div className="absolute top-20 -left-12 bg-white p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 z-20 hidden lg:block animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-light flex items-center justify-center text-orange">⚡</div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Insight</p>
                <p className="text-sm font-bold text-graphite">Ansiedade em queda</p>
              </div>
            </div>
          </div>

          {/* Floating Card Right */}
          <div className="absolute bottom-20 -right-12 bg-white p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 z-20 hidden lg:block animate-float delay-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-light flex items-center justify-center text-orange">🛡️</div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Proteção</p>
                <p className="text-sm font-bold text-graphite">Fatores em alta</p>
              </div>
            </div>
          </div>

          {/* Main Dashboard */}
          <div className="bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden">
            <div className="h-12 border-b border-gray-100 bg-gray-50/50 flex items-center px-6 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
            </div>

            <div className="flex min-h-[600px]">
              {/* Sidebar */}
              <div className="w-64 border-r border-gray-100 p-6 bg-gray-50/30 hidden md:block">
                <div className="w-8 h-8 bg-orange rounded-lg mb-8" />
                <div className="space-y-1">
                  {['Visão Geral', 'Turmas', 'Alunos', 'Relatórios'].map((item, i) => (
                    <div key={i} className={`px-4 py-2.5 rounded-lg text-sm font-medium ${i===0 ? 'bg-white shadow-sm text-graphite' : 'text-gray-500 hover:bg-gray-100'}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 bg-white">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-graphite">Bom dia, Diretora.</h3>
                    <p className="text-sm text-gray-500">Resumo emocional da escola.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs font-medium text-gray-600">Exportar PDF</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Clima Escolar</p>
                    <p className="text-3xl font-bold text-graphite">8.4<span className="text-lg text-gray-400 font-normal">/10</span></p>
                  </div>
                  <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Engajamento</p>
                    <p className="text-3xl font-bold text-graphite">92%</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-orange/20 bg-orange-light shadow-sm">
                    <p className="text-xs font-bold text-orange uppercase mb-2">Radar</p>
                    <p className="text-3xl font-bold text-orange">3 <span className="text-lg font-normal">casos</span></p>
                  </div>
                </div>

                <div className="h-64 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden p-6">
                  <p className="text-sm font-bold text-graphite mb-4">Tendência Mensal</p>
                  <div className="absolute bottom-0 left-0 right-0 h-40 px-6 flex items-end justify-between gap-2">
                    {[40, 55, 45, 60, 50, 70, 65, 75, 80, 72, 85, 90].map((h, i) => (
                      <div key={i} className="w-full bg-orange opacity-20 rounded-t-sm hover:opacity-100 transition-opacity duration-300" style={{ height: `${h}%` }} />
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
