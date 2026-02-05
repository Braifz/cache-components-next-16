import Image from "next/image";
import { getAllBooks } from "../apit";

const AllBooks = async () => {
  // This component is not cached - it fetches data on every request
  const books = await getAllBooks();

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900 rounded-full text-sm font-medium text-orange-800 dark:text-orange-200 mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
            Componente Dinámico
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Todos los Libros
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Este componente se renderiza en cada request - sin caché, datos
            siempre actualizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={book.imageUrl}
                    alt={book.title}
                    width={800}
                    height={400}
                  />
                </div>
                <div className="absolute top-3 right-3 bg-gray-900/80 text-white text-xs px-2 py-1 rounded-full">
                  #{book.id}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {book.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Autor:</span> {book.author}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Género:</span> {book.genre}
                  </p>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                  {book.description}
                </p>

                <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <svg
              className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-3"
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
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Renderizado Dinámico
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Se actualiza en cada request para mostrar datos frescos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
