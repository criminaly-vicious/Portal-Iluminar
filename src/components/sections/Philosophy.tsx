export const Philosophy = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-main text-center">
        <div className="badge">Filosofia</div>
        <h2 className="text-headline mb-6">
          Mais do que tecnologia.<br/>Educação <span className="text-orange">clara</span>.
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-20 mt-12">
          {[
            { negative: "Não é diagnóstico", positive: "É visibilidade" },
            { negative: "Não é clínica", positive: "É cuidado" },
            { negative: "Não é teste", positive: "É leitura humana" }
          ].map((item, i) => (
            <div key={i} className="text-left md:text-center">
              <p className="text-gray-400 line-through text-sm mb-1">{item.negative}</p>
              <p className="text-2xl font-bold text-graphite">{item.positive}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-cream rounded-3xl p-12 border border-gray-100 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center font-bold text-graphite shadow-sm">Centra</div>
              <div className="w-24 h-px bg-gray-300" />
              <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-orange/30 animate-pulse-soft">Iluminar</div>
              <div className="w-24 h-px bg-gray-300" />
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center font-bold text-graphite shadow-sm">ASATA</div>
            </div>
            <p className="text-lg text-gray-600 font-light">
              A Centra nasceu para transformar a relação emocional dos jovens com a escola. 
              O Iluminar é a materialização tecnológica desse propósito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

