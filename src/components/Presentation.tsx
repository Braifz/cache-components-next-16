const Presentation = () => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-700 py-20 ">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 mb-6">
          Next.js 16 Cache Components Demo
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Cache Components
          <span className="block text-3xl md:text-5xl text-gray-700 dark:text-gray-300 mt-2">
            Next.js 16
          </span>
          <span className="block text-lg text-gray-700 dark:text-gray-300 mt-2">
            (Partial Prerendering)
          </span>
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-600">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Rendimiento
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Reduce tiempos de carga con caché inteligente
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-600">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Revalidación
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Control granular de cuándo actualizar datos
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-600">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Simple
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Solo añade "use cache" a tus componentes
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">¿Cómo funciona?</h2>
          <p className="text-lg mb-6 opacity-90">
            Observa cómo los componentes de abajo manejan diferentes estrategias
            de caché:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-600">
              <span className="font-semibold">⚫ Best Seller:</span> Componente
              con caché
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-600">
              <span className="font-semibold">⚪ All Books:</span> Componente
              dinámico
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
