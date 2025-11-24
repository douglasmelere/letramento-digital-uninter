import { ArrowLeft, CheckCircle, Circle, Clock, Target } from 'lucide-react';
import { Module } from '../types';

interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
  onSelectLesson: (lessonIndex: number) => void;
}

export function ModuleDetail({
  module,
  onBack,
  onSelectLesson,
}: ModuleDetailProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-3 text-blue-600 hover:text-blue-700 text-xl font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg px-4 py-3"
      >
        <ArrowLeft className="w-7 h-7" strokeWidth={2.5} />
        Voltar aos Módulos
      </button>

      <div className="bg-white rounded-2xl shadow-xl p-10 mb-8 border-4 border-blue-100">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {module.title}
        </h2>
        <p className="text-2xl text-gray-600 leading-relaxed">
          {module.description}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="flex items-center gap-4 text-xl font-semibold text-gray-700">
            <Clock className="w-7 h-7 text-blue-500" strokeWidth={2.5} />
            {module.duration}
          </div>
          <div className="flex items-center gap-4 text-xl font-semibold text-gray-700">
            <Target className="w-7 h-7 text-green-500" strokeWidth={2.5} />
            {module.level}
          </div>
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-700 mb-3">
            Competências trabalhadas
          </p>
          <div className="flex flex-wrap gap-3">
            {module.focus.map((topic) => (
              <span
                key={topic}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-base font-semibold"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {module.lessons.map((lesson, index) => (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(index)}
            className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 text-left border-4 border-transparent hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                {lesson.completed ? (
                  <CheckCircle
                    className="w-10 h-10 text-green-500"
                    strokeWidth={2.5}
                  />
                ) : (
                  <Circle
                    className="w-10 h-10 text-gray-300"
                    strokeWidth={2.5}
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg font-semibold text-gray-500">
                    Aula {index + 1}
                  </span>
                  {lesson.completed && (
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                      Concluída
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {lesson.title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">
                  {lesson.duration && (
                    <span className="bg-gray-100 px-3 py-1 rounded-full font-semibold">
                      {lesson.duration}
                    </span>
                  )}
                  {lesson.difficulty && (
                    <span className="bg-gray-100 px-3 py-1 rounded-full font-semibold">
                      {lesson.difficulty}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
