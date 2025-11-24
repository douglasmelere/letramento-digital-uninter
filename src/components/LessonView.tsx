import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  PlayCircle,
  ListChecks,
  ClipboardCheck,
  ExternalLink,
  Film,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Lesson } from '../types';

interface LessonViewProps {
  lesson: Lesson;
  currentIndex: number;
  totalLessons: number;
  onNext: () => void;
  onPrevious: () => void;
  onComplete: () => void;
  onBack: () => void;
}

export function LessonView({
  lesson,
  currentIndex,
  totalLessons,
  onNext,
  onPrevious,
  onComplete,
  onBack,
}: LessonViewProps) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalLessons - 1;
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsQuizSubmitted(false);
  }, [lesson.id]);

  const handleSubmitQuiz = () => {
    if (selectedOption === null) return;
    setIsQuizSubmitted(true);
  };

  const quizAnsweredCorrectly =
    lesson.quiz && isQuizSubmitted && selectedOption !== null
      ? selectedOption === lesson.quiz.correctAnswer
      : false;

  const canCompleteLesson = lesson.quiz ? quizAnsweredCorrectly : true;
  const isEmbedVideo = useMemo(() => {
    if (!lesson.videoUrl) return false;
    const lower = lesson.videoUrl.toLowerCase();
    return lower.includes('youtube.com') || lower.includes('vimeo.com');
  }, [lesson.videoUrl]);

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-3 text-blue-600 hover:text-blue-700 text-xl font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg px-4 py-3"
      >
        <ArrowLeft className="w-7 h-7" strokeWidth={2.5} />
        Voltar aos Módulos
      </button>

      <div className="bg-white rounded-2xl shadow-xl p-10 border-4 border-blue-100">
        <div className="mb-6">
          <span className="text-lg font-semibold text-blue-600">
            Aula {currentIndex + 1} de {totalLessons}
          </span>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          {lesson.title}
        </h2>

        {(lesson.duration || lesson.difficulty) && (
          <div className="flex flex-wrap gap-4 mb-8 text-base">
            {lesson.duration && (
              <span className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-full">
                Duração média: {lesson.duration}
              </span>
            )}
            {lesson.difficulty && (
              <span className="bg-green-50 text-green-700 font-semibold px-4 py-2 rounded-full">
                Dificuldade: {lesson.difficulty}
              </span>
            )}
          </div>
        )}

        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-2xl text-gray-700 leading-relaxed whitespace-pre-line">
            {lesson.content}
          </p>
        </div>

        {lesson.videoUrl && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <PlayCircle className="w-8 h-8 text-red-500" strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-gray-900">Videoaula guiada</h3>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-gray-100 bg-black">
              {isEmbedVideo ? (
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={lesson.videoUrl}
                    title={`Videoaula ${lesson.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video controls className="w-full" poster="media/video-poster.png">
                  <source src={lesson.videoUrl} type="video/mp4" />
                  Seu navegador não suporta a reprodução deste vídeo.
                </video>
              )}
            </div>
            {!isEmbedVideo && (
              <div className="flex items-center gap-3 text-gray-600 bg-gray-100 px-4 py-3 rounded-xl mt-4 text-sm font-medium">
                <Film className="w-5 h-5 text-gray-500" />
                <span>Conteúdo gravado localmente para acesso mesmo sem internet estável.</span>
              </div>
            )}
          </div>
        )}

        {lesson.tutorial && (
          <div className="mb-12 bg-blue-50 border-4 border-blue-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <ListChecks className="w-8 h-8 text-blue-600" strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-gray-900">
                Passo a passo guiado
              </h3>
            </div>
            <div className="space-y-6">
              {lesson.tutorial.map((block) => (
                <div key={block.title}>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {block.title}
                  </h4>
                  <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
                    {block.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.practice && (
          <div className="mb-12 bg-green-50 border-4 border-green-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck className="w-8 h-8 text-green-600" strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-gray-900">
                Atividade prática
              </h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              {lesson.practice.title}
            </p>
            <ul className="space-y-3">
              {lesson.practice.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-lg text-gray-700"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {lesson.resources && lesson.resources.length > 0 && (
          <div className="mb-12 bg-white border-4 border-indigo-100 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ExternalLink className="w-8 h-8 text-indigo-600" strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-gray-900">
                Materiais complementares
              </h3>
            </div>
            <div className="space-y-4">
              {lesson.resources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-indigo-50 hover:bg-indigo-100 transition-colors rounded-xl px-5 py-4 text-gray-800"
                >
                  <div>
                    <p className="text-xl font-semibold">{resource.title}</p>
                    {resource.description && (
                      <p className="text-base text-gray-600">{resource.description}</p>
                    )}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wide text-indigo-600">
                    {resource.type}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {lesson.quiz && (
          <div className="mb-12 bg-yellow-50 border-4 border-yellow-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-yellow-600" strokeWidth={2.5} />
              <h3 className="text-2xl font-bold text-gray-900">
                Quiz rápido
              </h3>
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-6">
              {lesson.quiz.question}
            </p>
            <div className="space-y-4">
              {lesson.quiz.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect =
                  isQuizSubmitted && index === lesson.quiz!.correctAnswer;
                const isWrong =
                  isQuizSubmitted &&
                  isSelected &&
                  index !== lesson.quiz!.correctAnswer;

                return (
                  <button
                    key={option}
                    onClick={() => !isQuizSubmitted && setSelectedOption(index)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 text-lg font-semibold transition-all ${
                      isCorrect
                        ? 'border-green-400 bg-green-50 text-green-800'
                        : isWrong
                        ? 'border-red-400 bg-red-50 text-red-800'
                        : isSelected
                        ? 'border-blue-400 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-blue-200'
                    } ${isQuizSubmitted ? 'cursor-default' : ''}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              {!isQuizSubmitted && (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={selectedOption === null}
                  className="bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-xl text-lg"
                >
                  Conferir resposta
                </button>
              )}
              {isQuizSubmitted && lesson.quiz && (
                <div
                  className={`flex-1 text-lg font-semibold p-4 rounded-xl ${
                    quizAnsweredCorrectly
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {quizAnsweredCorrectly ? 'Perfeito! ' : 'Quase lá. '}
                  {lesson.quiz.explanation}
                </div>
              )}
            </div>
          </div>
        )}

        {lesson.completed && (
          <div className="bg-green-50 border-4 border-green-200 rounded-xl p-6 mb-8 flex items-center gap-4">
            <CheckCircle className="w-10 h-10 text-green-600" strokeWidth={2.5} />
            <span className="text-xl font-semibold text-green-700">
              Aula concluída!
            </span>
          </div>
        )}

        <div className="flex gap-4 mt-10">
          <button
            onClick={onPrevious}
            disabled={isFirst}
            className="flex-1 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 font-bold py-5 px-8 rounded-xl text-xl flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-colors"
          >
            <ArrowLeft className="w-7 h-7" strokeWidth={2.5} />
            Aula Anterior
          </button>

          {!lesson.completed && (
            <button
              onClick={onComplete}
              disabled={!canCompleteLesson}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded-xl text-xl flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors"
            >
              <CheckCircle className="w-7 h-7" strokeWidth={2.5} />
              Concluir Aula
            </button>
          )}

          <button
            onClick={onNext}
            disabled={isLast}
            className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-5 px-8 rounded-xl text-xl flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
          >
            Próxima Aula
            <ArrowRight className="w-7 h-7" strokeWidth={2.5} />
          </button>
        </div>

        {!canCompleteLesson && !lesson.completed && lesson.quiz && (
          <p className="mt-4 text-center text-lg text-gray-600">
            Responda corretamente ao quiz para liberar a conclusão desta aula.
          </p>
        )}
      </div>
    </div>
  );
}
