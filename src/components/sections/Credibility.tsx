const stats = [
  { value: "+1 ano", label: "de pesquisa" },
  { value: "+50", label: "escolas ouvidas" },
  { value: "847", label: "alunos no piloto" }
];

export const Credibility = () => {
  return (
    <section className="py-12 border-y border-gray-100 bg-cream">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex gap-12">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-bold text-graphite">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 max-w-xs text-center md:text-right">
          Desenvolvido para escolas brasileiras, com escolas brasileiras.
        </p>
      </div>
    </section>
  );
};
