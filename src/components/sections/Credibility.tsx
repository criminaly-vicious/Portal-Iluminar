import { TextEffect } from '@/components/ui/text-effect';

const stats = [
  {
    value: "+1 ano",
    label: "de pesquisa aplicada",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  },
  {
    value: "+50",
    label: "escolas ouvidas",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    value: "32",
    label: "alunos no piloto",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

export const Credibility = () => {
  return (
    <section className="py-12 border-y border-[#F7F5F2] bg-[#FDFCFB]">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Stats Grid */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-16 w-full lg:w-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#F7F5F2] flex items-center justify-center text-[#FF8A3D] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-[#FF8A3D]/20">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1F1F1F] leading-none mb-1">{stat.value}</p>
                  <p className="text-sm text-[#6F6F6F] font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider (Mobile only) */}
          <div className="w-full h-px bg-[#F7F5F2] lg:hidden" />

          {/* Tagline */}
          <div className="text-center lg:text-right w-full lg:w-auto">
            <p className="text-[#1F1F1F] font-medium text-lg">
              Desenvolvido para escolas brasileiras,
            </p>
            <p className="text-[#6F6F6F]">
              com escolas brasileiras.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
