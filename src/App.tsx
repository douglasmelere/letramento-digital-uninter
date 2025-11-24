import { useState } from 'react';
import { Header } from './components/Header';
import { ModuleCard } from './components/ModuleCard';
import { ModuleDetail } from './components/ModuleDetail';
import { LessonView } from './components/LessonView';
import { WelcomeScreen } from './components/WelcomeScreen';
import { modules } from './data/modules';
import { Module } from './types';

type View = 'modules' | 'module-detail' | 'lesson';

function App() {
  const [currentView, setCurrentView] = useState<View>('modules');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [moduleData, setModuleData] = useState(modules);
  const [hasEntered, setHasEntered] = useState(false);

  const handleSelectModule = (module: Module) => {
    setSelectedModule(module);
    setCurrentView('module-detail');
  };

  const handleSelectLesson = (lessonIndex: number) => {
    setCurrentLessonIndex(lessonIndex);
    setCurrentView('lesson');
  };

  const handleCompleteLesson = () => {
    if (!selectedModule) return;

    setModuleData((prevModules) =>
      prevModules.map((mod) =>
        mod.id === selectedModule.id
          ? {
              ...mod,
              lessons: mod.lessons.map((lesson, idx) =>
                idx === currentLessonIndex
                  ? { ...lesson, completed: true }
                  : lesson
              ),
            }
          : mod
      )
    );

    const updatedModule = moduleData.find((m) => m.id === selectedModule.id);
    if (updatedModule) {
      setSelectedModule({
        ...updatedModule,
        lessons: updatedModule.lessons.map((lesson, idx) =>
          idx === currentLessonIndex ? { ...lesson, completed: true } : lesson
        ),
      });
    }
  };

  const handleNextLesson = () => {
    if (
      selectedModule &&
      currentLessonIndex < selectedModule.lessons.length - 1
    ) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  const handleBackToModules = () => {
    setCurrentView('modules');
    setSelectedModule(null);
    setCurrentLessonIndex(0);
  };

  const handleBackToModuleDetail = () => {
    setCurrentView('module-detail');
    setCurrentLessonIndex(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />

      {!hasEntered ? (
        <WelcomeScreen onStart={() => setHasEntered(true)} />
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentView === 'modules' && (
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Escolha um Módulo
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Selecione um módulo abaixo para começar seu aprendizado. Cada
                módulo contém várias aulas que você pode fazer no seu próprio
                ritmo.
              </p>
            </div>

            <div className="grid gap-8">
              {moduleData.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  onSelect={() => handleSelectModule(module)}
                />
              ))}
            </div>
          </div>
        )}

        {currentView === 'module-detail' && selectedModule && (
          <ModuleDetail
            module={selectedModule}
            onBack={handleBackToModules}
            onSelectLesson={handleSelectLesson}
          />
        )}

        {currentView === 'lesson' && selectedModule && (
          <LessonView
            lesson={selectedModule.lessons[currentLessonIndex]}
            currentIndex={currentLessonIndex}
            totalLessons={selectedModule.lessons.length}
            onNext={handleNextLesson}
            onPrevious={handlePreviousLesson}
            onComplete={handleCompleteLesson}
            onBack={handleBackToModuleDetail}
          />
        )}
        </main>
      )}

      <footer className="bg-white border-t-4 border-blue-500 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-2">
            <p className="text-lg text-gray-600">
              Plataforma de Letramento Digital para Idosos - UNINTER 2024
            </p>
            <p className="text-base text-gray-700 font-semibold">
              Desenvolvido por Douglas Melere Tibola Junior — RU: 4726137
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
