import { DoodleArrow } from '@/components/ui/doodles';

const problems = [
  {
    title: "Conflitos estourados",
    desc: "Quando o problema chega na sua mesa, já é tarde demais.",
    icon: "💥"
  },
  {
    title: "Desmotivação silenciosa",
    desc: "Alunos brilhantes que se apagam sem ninguém notar.",
    icon: "😶"
  },
  {
    title: "Burnout docente",
    desc: "Professores sobrecarregados tentando ser psicólogos.",
    icon: "🔋"
  },
  {
    title: "Sinais invisíveis",
    desc: "Pedidos de ajuda que se perdem na rotina escolar.",
    icon: "👁️"
  }
];

export const Problem = () => {
  return (
    <section className="section-padding bg-[#101010] text-white relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF8A3D] rounded-full blur-[150px] opacity-10" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A3D] animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">
                Diagnóstico
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              O custo invisível do <span className="text-[#FF8A3D]">silêncio</span>.
            </h2>
            <p className="text-xl text-white/60 font-light max-w-md">
              Enquanto você lê isso, as emoções da sua escola estão mudando. 
              Sem dados, você está pilotando no escuro.
            </p>
          </div>
          
          <div className="relative hidden lg:block">
            <DoodleArrow className="w-32 h-32 text-white/20 absolute top-0 right-0 rotate-12" />
            <div className="text-right">
              <p className="text-8xl font-bold text-white/5">UNK</p>
              <p className="text-8xl font-bold text-white/5">NOWN</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <div 
              key={i}
              className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#FF8A3D] transition-colors">{p.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
