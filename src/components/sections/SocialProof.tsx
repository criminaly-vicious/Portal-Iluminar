import { Container, Section } from '../ui/Layout';
import { Quote } from 'lucide-react';

export const SocialProof = () => {
  return (
    <Section className="bg-brand-light">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-6xl md:text-8xl font-bold text-brand-orange mb-2">32</h2>
            <p className="text-xl font-medium text-brand-graphite">
              alunos já monitorados no piloto
            </p>
          </div>
          
          <div className="space-y-6">
            <Testimonial 
              text="Pela primeira vez, temos clareza emocional da turma."
              author="Coordenação Pedagógica"
            />
            <Testimonial 
              text="Não sabia que alguns alunos estavam pedindo ajuda silenciosamente."
              author="Professor do Ensino Médio"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Testimonial = ({ text, author }: { text: string; author: string }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
    <Quote className="absolute top-6 left-6 w-8 h-8 text-brand-orange/20 rotate-180" />
    <div className="pl-10 relative z-10">
      <p className="text-lg text-brand-graphite italic mb-3">"{text}"</p>
      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{author}</p>
    </div>
  </div>
);

