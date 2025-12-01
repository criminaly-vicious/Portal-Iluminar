import { Container, Section } from '../ui/Layout';
import { Users, BookOpen, BrainCircuit, ShieldCheck } from 'lucide-react';

export const WhatIs = () => {
  return (
    <Section id="o-que-e" className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-graphite text-sm font-medium mb-6">
              O que é
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-graphite mb-8 leading-tight">
              O Portal Iluminar revela o bem-estar emocional da escola,
              <span className="text-gray-400 block mt-2">
                sem peso, sem clínica, sem ruído.
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Através de textos autorais, formulário mensal e IA ASATA, o Iluminar transforma sinais emocionais em insights claros.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Direção", "Professores", "Coordenação", "Equipe Pedagógica"
              ].map((role) => (
                <div key={role} className="flex items-center gap-3 p-3 bg-brand-light/50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-brand-orange" />
                  <span className="font-medium text-brand-graphite">{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-brand-light p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BrainCircuit className="text-brand-orange" />
                Radar Emocional
              </h3>
              <p className="text-gray-600">
                Uma visão clara e contínua do clima escolar, permitindo ações antes que os problemas escalem.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-brand-light p-8 rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="font-bold mb-2">Ético</h3>
                <p className="text-sm text-gray-600">Sem diagnósticos invasivos. Respeito total à privacidade.</p>
              </div>
              <div className="bg-brand-light p-8 rounded-2xl">
                <BookOpen className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="font-bold mb-2">Pedagógico</h3>
                <p className="text-sm text-gray-600">Alinhado ao currículo e à realidade escolar.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

