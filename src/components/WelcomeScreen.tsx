import { BookOpen, CheckCircle2, PlayCircle, ShieldCheck } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const highlights = [
  'Aulas guiadas com vídeos e tutoriais passo a passo',
  'Materiais em PDF disponíveis offline a qualquer momento',
  'Quizzes para validar o aprendizado de cada etapa',
  'Trilhas pensadas para a realidade das turmas presenciais',
];

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_#dbeafe,_transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:flex lg:items-center lg:gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-blue-100 px-4 py-2 text-blue-700 font-semibold">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
            Trilha especializada para idosos
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Bem-vindo à Plataforma de Letramento Digital
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Antes de mergulhar nas aulas, confira como a jornada foi organizada. Cada módulo
            combina vídeo, guia em PDF, checklist prático e quiz final para confirmar o domínio do conteúdo.
          </p>
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-gray-800">
                <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-500" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={onStart}
            className="group inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-xl font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <PlayCircle className="h-7 w-7" strokeWidth={2.5} />
            Começar jornada agora
          </button>
        </div>
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="rounded-3xl bg-white p-8 shadow-2xl border-4 border-blue-100">
            <div className="flex items-center gap-4">
              <BookOpen className="h-12 w-12 text-blue-600" strokeWidth={2.5} />
              <div>
                <p className="text-sm uppercase tracking-wide text-blue-600 font-bold">
                  Roteiro do instrutor
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  Use esta tela como checklist inicial
                </p>
              </div>
            </div>
            <ol className="mt-8 space-y-4 text-lg text-gray-800">
              <li>1. Explique a trilha e as avaliações.</li>
              <li>2. Distribua os guias impressos para quem preferir.</li>
              <li>3. Mostre como acessar os vídeos locais sem depender da internet.</li>
              <li>4. Clique em “Começar jornada” junto com a turma.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

