import Image from "next/image";
import { getBestSeller } from "../apit";
import { cacheLife } from "next/cache";

const BestSellerSection = async () => {
  "use cache";

  cacheLife("days");

  const bestSeller = await getBestSeller();

  return (
    <div
      id="demo"
      className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg py-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Componente con Caché
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Best Seller
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Este componente usa "use cache" - los datos se almacenan en caché
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-lg transform rotate-3"></div>
              <Image
                src={bestSeller.imageUrl}
                alt={bestSeller.title}
                width={200}
                height={300}
                className="relative rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {bestSeller.title}
            </h3>

            <div className="space-y-2 mb-6">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Autor:</span>{" "}
                {bestSeller.author}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Género:</span>{" "}
                {bestSeller.genre}
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
              {bestSeller.description}
            </p>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-5 h-5 text-green-600 dark:text-green-400 mr-2"
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
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Datos almacenados en caché - respuesta rápida garantizada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerSection;
