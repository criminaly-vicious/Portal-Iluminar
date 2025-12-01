import { Container, Section } from '../ui/Layout';

export const Tagline = () => {
  return (
    <Section className="bg-brand-orange py-24 md:py-32">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Iluminar é revelar
            <br />
            o que importa.
          </h2>
        </div>
      </Container>
    </Section>
  );
};

