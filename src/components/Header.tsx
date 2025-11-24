import { BookOpen } from 'lucide-react';

const author = {
  name: 'Douglas Melere Tibola Junior',
  ru: 'RU: 4726137',
};

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b-4 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="/uninter-logo.png"
            alt="Logo UNINTER"
            className="w-24 h-24 object-contain drop-shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BookOpen className="w-10 h-10 text-blue-600" strokeWidth={2.5} />
              Letramento Digital
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              Plataforma acadêmica – Centro Universitário Internacional UNINTER
            </p>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl px-5 py-3 text-right">
          <p className="text-lg font-semibold text-blue-900">{author.name}</p>
          <p className="text-sm font-medium text-blue-700">{author.ru}</p>
        </div>
      </div>
    </header>
  );
}
