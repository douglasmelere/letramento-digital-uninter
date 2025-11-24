export interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  level: 'Básico' | 'Intermediário' | 'Avançado';
  duration: string;
  focus: string[];
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  content: string;
  videoUrl?: string;
  duration?: string;
  difficulty?: 'Básica' | 'Intermediária' | 'Avançada';
  tutorial?: TutorialBlock[];
  practice?: PracticeBlock;
  resources?: ResourceLink[];
  quiz?: LessonQuiz;
  completed: boolean;
}

export interface TutorialBlock {
  title: string;
  steps: string[];
}

export interface PracticeBlock {
  title: string;
  checklist: string[];
}

export interface ResourceLink {
  title: string;
  url: string;
  type: 'vídeo' | 'artigo' | 'podcast' | 'pdf' | 'app';
  description?: string;
}

export interface LessonQuiz {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  userId: string;
  moduleId: number;
  lessonId: number;
  completed: boolean;
  lastAccessed: Date;
}
