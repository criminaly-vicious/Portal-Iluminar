export const Testimonials = () => {
  return (
    <section className="section-padding bg-cream border-y border-gray-100">
      <div className="container-main">
        <div className="text-center mb-20">
          <div className="badge">Depoimentos</div>
          <h2 className="text-headline">
            O que as escolas <span className="text-orange">estão dizendo</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { text: "Pela primeira vez temos clareza real do clima emocional da escola. Mudou nossa gestão.", author: "Maria Clara", role: "Diretora Pedagógica" },
            { text: "Consigo identificar alunos que precisam de apoio antes que o problema estoure.", author: "Prof. Ricardo", role: "Professor de História" },
            { text: "Simples, ético e muito poderoso. Os alunos se sentem ouvidos de verdade.", author: "Ana Beatriz", role: "Coordenadora" }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-orange text-4xl mb-4">"</div>
              <p className="text-lg text-gray-600 mb-6 font-light italic">{t.text}</p>
              <div>
                <p className="font-bold text-graphite">{t.author}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

