import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Dados realistas
const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
const recentAlerts = [
  { name: 'Maria Silva', type: 'Ansiedade elevada', time: '2h atrás', urgent: true, avatar: 'MS' },
  { name: 'João Pedro', type: 'Isolamento social', time: '5h atrás', urgent: false, avatar: 'JP' },
  { name: 'Ana Luiza', type: 'Queda de engajamento', time: '1d atrás', urgent: false, avatar: 'AL' },
];

export const UIShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  
  // Parallax suave
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-white via-[#fafafa] to-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 lg:mb-32"
        >
          <div className="badge mx-auto mb-6">Duas Experiências</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-graphite">
            Uma plataforma. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-dark">Duas perspectivas</span>.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            A escola ganha visibilidade estratégica com dados acionáveis. O aluno ganha um espaço seguro de escuta e acolhimento.
          </p>
        </motion.div>

        {/* Dashboard da Direção */}
        <motion.div style={{ y: y1, opacity }} className="mb-32 lg:mb-40">
          <div className="flex items-center gap-4 mb-8 px-4">
            <div className="w-12 h-12 rounded-2xl bg-graphite flex items-center justify-center shadow-xl shadow-graphite/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-graphite">Visão da Direção</h3>
              <p className="text-sm text-gray-500">Gestão baseada em dados reais</p>
            </div>
          </div>

          {/* MacBook Frame - Direção */}
          <div className="relative group perspective-[2000px]">
            {/* Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange/20 via-blue-500/10 to-purple-500/10 rounded-[2rem] blur-3xl scale-95 translate-y-8 -z-10 transition-all duration-500 group-hover:scale-100 group-hover:bg-orange/25" />
            
            <div className="bg-[#0d0d0d] rounded-[20px] sm:rounded-[32px] p-2 sm:p-3 shadow-2xl ring-1 ring-white/10 transform transition-transform duration-700 hover:rotate-x-1">
              {/* Browser Chrome */}
              <div className="h-10 sm:h-12 bg-[#1c1c1c] rounded-t-2xl sm:rounded-t-[24px] flex items-center px-5 gap-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#28CA41] shadow-sm" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-6 py-1.5 bg-[#2a2a2a] rounded-lg border border-white/5 w-full max-w-md transition-colors hover:bg-[#333]">
                    <svg className="w-3 h-3 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <span className="text-xs text-white/60 font-medium">portal.iluminar.app/dashboard</span>
                  </div>
                </div>
                <div className="w-16 flex justify-end gap-3">
                   <div className="w-4 h-4 rounded-full border border-white/20" />
                   <div className="w-4 h-4 rounded-md border border-white/20" />
                </div>
              </div>

              {/* Screen Content */}
              <div className="bg-[#F8F9FA] rounded-b-xl sm:rounded-b-[24px] overflow-hidden relative">
                <div className="flex min-h-[600px] lg:min-h-[700px]">
                  {/* Sidebar */}
                  <div className="hidden lg:flex w-72 border-r border-gray-200/60 bg-white flex-col shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)] z-10">
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange to-orange-dark rounded-xl flex items-center justify-center shadow-lg shadow-orange/20 text-white">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold text-sm text-graphite block tracking-tight">Portal Iluminar</span>
                          <span className="text-[11px] text-gray-400 font-medium">Colégio Santa Maria</span>
                        </div>
                      </div>
                    </div>
                    
                    <nav className="flex-1 p-4 space-y-1">
                      {[
                        { name: 'Visão Geral', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', active: true },
                        { name: 'Turmas', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', active: false },
                        { name: 'Alunos', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', active: false },
                        { name: 'Radar de Risco', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', active: false, badge: '3' },
                        { name: 'Relatórios', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', active: false },
                      ].map((item, i) => (
                        <a key={i} href="#" className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${item.active ? 'bg-graphite text-white shadow-md shadow-graphite/20' : 'text-gray-500 hover:bg-gray-50 hover:text-graphite'}`}>
                          <div className="flex items-center gap-3">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={item.active ? 2 : 1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                            </svg>
                            {item.name}
                          </div>
                          {item.badge && (
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange text-[10px] font-bold text-white">{item.badge}</span>
                          )}
                        </a>
                      ))}
                      
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-4">Monitoramento</p>
                        <div className="space-y-1">
                          {[
                            { name: '9º Ano B', status: 'alert', label: 'Prioridade' },
                            { name: '2º Médio A', status: 'warning', label: 'Observação' },
                            { name: '7º Ano C', status: 'ok', label: 'Normal' },
                          ].map((turma, i) => (
                            <div key={i} className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                              <span className="text-sm text-gray-600 font-medium group-hover:text-graphite">{turma.name}</span>
                              <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full border ${
                                turma.status === 'alert' ? 'bg-red-50 text-red-600 border-red-100' :
                                turma.status === 'warning' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                                'bg-emerald-50 text-emerald-600 border-emerald-100'
                              }`}>{turma.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </nav>

                    <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-white shadow-sm overflow-hidden">
                           <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">MC</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-graphite truncate">Maria Clara</p>
                          <p className="text-[10px] text-gray-500 font-medium">Diretora Pedagógica</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 bg-[#F8F9FA] overflow-auto">
                    {/* Navbar */}
                    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200/60 px-8 py-4 flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-graphite">Visão Geral</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Última atualização: Hoje, 09:41</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="relative">
                          <input type="text" placeholder="Buscar aluno ou turma..." className="pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-xl text-sm focus:bg-white focus:border-orange/30 focus:ring-2 focus:ring-orange/10 transition-all w-64 outline-none placeholder:text-gray-400" />
                          <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                        </div>
                        <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 text-gray-600 relative">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                          </svg>
                          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                      </div>
                    </header>

                    <div className="p-8">
                      {/* KPI Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                        {[
                          { label: 'Bem-estar Geral', value: '8.4', total: '/10', change: '+0.3', trend: 'up', icon: 'sun', color: 'orange' },
                          { label: 'Participação', value: '94', total: '%', change: '+2.1%', trend: 'up', icon: 'users', color: 'blue' },
                          { label: 'Alertas Ativos', value: '3', total: '', change: '-1', trend: 'down', icon: 'bell', color: 'red', highlight: true },
                          { label: 'Sentimento', value: 'Positivo', total: '', change: 'Estável', trend: 'neutral', icon: 'heart', color: 'emerald' },
                        ].map((stat, i) => (
                          <div key={i} className={`p-5 rounded-2xl border bg-white transition-all hover:shadow-lg hover:-translate-y-1 ${stat.highlight ? 'border-red-100 ring-4 ring-red-50' : 'border-gray-100 shadow-sm'}`}>
                            <div className="flex justify-between items-start mb-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.highlight ? 'bg-red-50 text-red-500' : `bg-${stat.color}-50 text-${stat.color}-500`}`}>
                                {/* Icons placeholder logic */}
                                <span className="text-lg">
                                  {stat.icon === 'sun' && '☀️'}
                                  {stat.icon === 'users' && '👥'}
                                  {stat.icon === 'bell' && '🔔'}
                                  {stat.icon === 'heart' && '💚'}
                                </span>
                              </div>
                              <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                                stat.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 
                                stat.trend === 'down' ? (stat.highlight ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600') : 
                                'bg-gray-100 text-gray-600'
                              }`}>
                                {stat.change}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{stat.label}</p>
                            <div className="flex items-baseline gap-1">
                              <span className={`text-3xl font-bold ${stat.highlight ? 'text-red-600' : 'text-graphite'}`}>{stat.value}</span>
                              <span className="text-sm text-gray-400 font-medium">{stat.total}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main Chart */}
                        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="text-lg font-bold text-graphite">Tendência Emocional</h4>
                            <div className="flex gap-2">
                              <button className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">Semana</button>
                              <button className="px-3 py-1.5 text-xs font-medium bg-white text-gray-400 hover:bg-gray-50 rounded-lg">Mês</button>
                            </div>
                          </div>
                          <div className="h-64 flex items-end justify-between gap-2 px-2">
                            {[65, 68, 62, 72, 75, 70, 78, 82, 79, 85, 88, 92].map((h, i) => (
                              <div key={i} className="w-full bg-gray-50 rounded-t-lg relative group h-full flex flex-col justify-end overflow-hidden">
                                <div 
                                  className="w-full bg-gradient-to-t from-orange to-orange-light opacity-80 group-hover:opacity-100 transition-opacity rounded-t-lg"
                                  style={{ height: `${h}%` }}
                                />
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-graphite text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                  {h}%
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium px-2">
                            <span>Semana 1</span>
                            <span>Semana 4</span>
                            <span>Semana 8</span>
                            <span>Semana 12</span>
                          </div>
                        </div>

                        {/* Alerts List */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                          <h4 className="text-lg font-bold text-graphite mb-4">Radar Preventivo</h4>
                          <div className="space-y-3 flex-1">
                            {recentAlerts.map((alert, i) => (
                              <div key={i} className="p-3 rounded-xl border border-gray-100 hover:border-orange/20 hover:bg-orange/[0.02] transition-all cursor-pointer group">
                                <div className="flex items-start gap-3">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${alert.urgent ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                                    {alert.avatar}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-0.5">
                                      <p className="text-sm font-bold text-graphite truncate">{alert.name}</p>
                                      <span className="text-[10px] text-gray-400">{alert.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1.5">{alert.type}</p>
                                    {alert.urgent && (
                                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-50 text-red-600 text-[10px] font-bold">
                                        <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                                        Ação Recomendada
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <button className="mt-4 w-full py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-graphite transition-colors">
                            Ver Todos
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard do Aluno */}
        <motion.div style={{ y: y2, opacity }}>
          <div className="flex items-center gap-4 mb-8 justify-end px-4">
            <div className="text-right">
              <h3 className="text-xl font-bold text-graphite">Experiência do Aluno</h3>
              <p className="text-sm text-gray-500">Interface pessoal e segura</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-orange flex items-center justify-center shadow-xl shadow-orange/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
          </div>

          {/* iPhone Frame - Aluno */}
          <div className="flex justify-center pb-20">
            <div className="relative w-[340px] sm:w-[390px] group">
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange/30 to-purple-500/20 rounded-[3.5rem] blur-[60px] scale-90 translate-y-4 -z-10 transition-transform duration-500 group-hover:scale-95" />
              
              <div className="bg-black rounded-[3.5rem] p-3 shadow-2xl ring-4 ring-gray-900/50">
                {/* Dynamic Island */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-9 bg-black rounded-full z-30 flex items-center justify-between px-3 pointer-events-none">
                   <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                   <div className="w-16 h-16 rounded-full bg-black/50 blur-xl absolute -z-10" />
                </div>
                
                {/* Screen */}
                <div className="bg-white rounded-[3rem] overflow-hidden min-h-[750px] relative">
                  {/* Status Bar */}
                  <div className="h-14 flex items-end justify-between px-8 pb-2 text-graphite font-medium text-sm bg-white z-20 relative">
                    <span>9:41</span>
                    <div className="flex gap-1.5 items-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                      <div className="w-6 h-3 bg-graphite rounded-[4px] opacity-80" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-6 pt-2 pb-24 h-full overflow-y-auto no-scrollbar">
                    {/* Header */}
                    <div className="flex justify-between items-center py-6">
                      <div>
                        <p className="text-gray-500 text-sm font-medium">Olá, Lucas 👋</p>
                        <h2 className="text-2xl font-bold text-graphite">Boa tarde!</h2>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 p-0.5 cursor-pointer hover:border-orange transition-colors">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                          LP
                        </div>
                      </div>
                    </div>

                    {/* Mood Card */}
                    <div className="bg-gradient-to-br from-[#FF8A3D] to-[#FF6B00] rounded-[32px] p-6 text-white shadow-lg shadow-orange/30 mb-6 relative overflow-hidden group cursor-pointer">
                      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4 opacity-90">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                          </svg>
                          <span className="text-sm font-semibold tracking-wide">CHECK-IN DIÁRIO</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-6 leading-tight">Como você está se sentindo agora?</h3>
                        
                        <div className="flex justify-between gap-2">
                          {['😄', '🙂', '😐', '😕', '😫'].map((emoji, i) => (
                            <button key={i} className="w-12 h-12 rounded-2xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-2xl transition-all hover:scale-110 backdrop-blur-sm active:scale-95">
                              {emoji}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex gap-4 mb-6 overflow-x-auto pb-2 no-scrollbar snap-x">
                      <div className="min-w-[140px] p-4 rounded-[24px] bg-white border border-gray-100 shadow-sm snap-center">
                        <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-3">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-2xl font-bold text-graphite">4/5</p>
                        <p className="text-xs text-gray-500 font-medium">Metas da semana</p>
                      </div>
                      <div className="min-w-[140px] p-4 rounded-[24px] bg-white border border-gray-100 shadow-sm snap-center">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-2xl font-bold text-graphite">15m</p>
                        <p className="text-xs text-gray-500 font-medium">Tempo de foco</p>
                      </div>
                      <div className="min-w-[140px] p-4 rounded-[24px] bg-white border border-gray-100 shadow-sm snap-center">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-3">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                          </svg>
                        </div>
                        <p className="text-2xl font-bold text-graphite">3</p>
                        <p className="text-xs text-gray-500 font-medium">Diários escritos</p>
                      </div>
                    </div>

                    {/* Recommended */}
                    <h3 className="text-lg font-bold text-graphite mb-4">Para você</h3>
                    <div className="space-y-4">
                      <div className="p-4 rounded-[24px] bg-white border border-gray-100 shadow-sm flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl">
                          🧘‍♂️
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-graphite text-sm">Respiração Guiada</h4>
                          <p className="text-xs text-gray-500">3 minutos para acalmar</p>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </button>
                      </div>
                      <div className="p-4 rounded-[24px] bg-white border border-gray-100 shadow-sm flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-2xl">
                          ✏️
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-graphite text-sm">Diário de Gratidão</h4>
                          <p className="text-xs text-gray-500">Registre 3 coisas boas</p>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-white/90 backdrop-blur-lg border-t border-gray-100 flex justify-around items-center px-6 pb-4 z-30">
                    <button className="p-2 text-orange"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg></button>
                    <button className="p-2 text-gray-300 hover:text-gray-500"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></button>
                    <div className="w-14 h-14 bg-graphite rounded-full flex items-center justify-center text-white -mt-8 border-4 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    </div>
                    <button className="p-2 text-gray-300 hover:text-gray-500"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></button>
                    <button className="p-2 text-gray-300 hover:text-gray-500"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></button>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-40" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
