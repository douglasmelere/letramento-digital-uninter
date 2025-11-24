import {
  Monitor,
  Globe,
  MessageCircle,
  FileText,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  onSelect: () => void;
}

const iconMap = {
  Monitor,
  Globe,
  MessageCircle,
  FileText,
  ShieldCheck,
  CreditCard,
};

export function ModuleCard({ module, onSelect }: ModuleCardProps) {
  const IconComponent = iconMap[module.icon as keyof typeof iconMap];
  const completedLessons = module.lessons.filter((l) => l.completed).length;
  const totalLessons = module.lessons.length;
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <button
      onClick={onSelect}
      className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-left border-4 border-transparent hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      <div className="flex items-start gap-6">
        <div className={`${module.color} p-6 rounded-2xl`}>
          <IconComponent className="w-12 h-12 text-white" strokeWidth={2.5} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {module.title}
          </h3>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            {module.description}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <span className="bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full">
              {module.level}
            </span>
            <span className="bg-green-50 text-green-700 font-semibold px-3 py-1 rounded-full">
              {module.duration}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-700">
                {completedLessons} de {totalLessons} aulas concluídas
              </span>
              <span className="text-lg font-bold text-blue-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`${module.color} h-4 rounded-full transition-all duration-500`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {module.focus.map((item) => (
              <span
                key={item}
                className="text-sm font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
