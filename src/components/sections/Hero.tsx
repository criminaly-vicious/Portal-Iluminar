import { TextEffect } from '@/components/ui/text-effect';
import { DoodleUnderline } from '@/components/ui/doodles';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-light/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container-main relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="animate-fade-in-up">
          <div className="badge bg-orange-light border border-orange/10">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse mr-2" />
            Inteligência Emocional Escolar
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-display max-w-[900px] mb-8 text-graphite animate-fade-in-up delay-100">
          <span className="block text-gray-400 mb-2">A escola não vê.</span>
          <span className="block">
            O Iluminar{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-dark">
              revela
              <DoodleUnderline className="absolute -bottom-2 left-0 w-full h-[0.15em] text-orange opacity-80" />
            </span>
            .
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-body-large max-w-[640px] mb-10 animate-fade-in-up delay-200">
          Transforme sinais invisíveis em dados claros. O primeiro radar emocional preventivo para escolas que se importam de verdade.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300 mb-20">
          <a href="#contato" className="btn-primary">
            Agendar demonstração
          </a>
          <a href="#solucao" className="btn-secondary">
            Saiba mais
          </a>
        </div>

        {/* Dashboard Preview */}
        <div className="w-full max-w-[1000px] animate-fade-in-up delay-400 perspective-1000">
          <div className="relative rounded-xl bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden transition-transform hover:scale-[1.01] duration-700">
            {/* Browser Chrome */}
            <div className="h-10 bg-white border-b border-gray-100 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
              <div className="ml-4 flex-1 max-w-[200px] h-6 bg-gray-50 rounded-md flex items-center px-3">
                <span className="text-[10px] text-gray-400">portal.iluminar.app</span>
              </div>
            </div>

            {/* Dashboard UI */}
            <div className="p-6 md:p-8 bg-gray-50/50">
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { label: "Bem-estar", value: "8.4", trend: "+0.2", color: "text-emerald-600" },
                  { label: "Engajamento", value: "92%", trend: "+5%", color: "text-emerald-600" },
                  { label: "Atenção", value: "3", sub: "casos", color: "text-orange" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">{stat.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-graphite">{stat.value}</span>
                      {stat.trend && <span className={`text-xs font-bold ${stat.color} bg-white px-1.5 py-0.5 rounded-full`}>{stat.trend}</span>}
                      {stat.sub && <span className="text-xs font-medium text-gray-400">{stat.sub}</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-graphite">Evolução Emocional</h3>
                  <div className="flex gap-2">
                    <span className="text-xs text-gray-400">Últimos 30 dias</span>
                  </div>
                </div>
                <div className="h-40 flex items-end gap-2 px-2">
                  {[40, 65, 55, 80, 70, 85, 90, 82, 95, 88, 75, 92].map((h, i) => (
                    <div key={i} className="flex-1 bg-gray-100 rounded-t-sm relative group overflow-hidden">
                      <div 
                        className="absolute bottom-0 w-full bg-orange rounded-t-sm transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
