import { Container, Section } from '../ui/Layout';

export const Alignment = () => {
  return (
    <Section className="bg-brand-graphite text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              A tecnologia é nova.
              <br />
              <span className="text-brand-orange">O propósito é o mesmo.</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-lg text-gray-300 max-w-sm mx-auto">
                A <span className="text-white font-bold">Centra</span> nasceu para transformar a relação emocional dos jovens com a escola.
              </p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-white/20" />
            
            <div className="text-center">
              <p className="text-lg text-gray-300 max-w-sm mx-auto">
                O <span className="text-white font-bold">Iluminar</span> é a materialização tecnológica desse propósito.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <span className="inline-block px-6 py-2 rounded-full border border-white/20 text-sm tracking-widest uppercase font-medium">
              É a Centra em forma de plataforma
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

