# Cache Components Next.js 16 Demo

🚀 **Proyecto educativo para estudiar el comportamiento de Next.js 16 con Cache Components y Partial Prerendering**

Este proyecto es una demostración práctica creada como complemento para mi artículo sobre Cache Components en el blog. Explora cómo funcionan las nuevas capacidades de caché en Next.js 16 mediante ejemplos visuales e interactivos.

## 📖 Sobre el Proyecto

Esta aplicación demuestra los tres tipos de renderizado que ofrece Next.js 16 con Cache Components habilitados:

- **Static Shell**: Contenido completamente prerenderizado
- **Public Cache**: Componentes cacheados compartidos entre usuarios
- **Dynamic Content**: Componentes renderizados en cada request

### 🎯 Objetivos de Aprendizaje

- Comprender cómo funciona Partial Prerendering (PPR)
- Ver la diferencia entre cache público y privado
- Entender cuándo usar cada estrategia de caché
- Observar el impacto en el rendimiento

## 🛠️ Tecnologías Utilizadas

- **Next.js 16.1.6** con `cacheComponents: true`
- **React 19.2.3** con Server Components
- **TypeScript** para tipado seguro
- **Tailwind CSS** para estilos modernos
- **Lucide React** para iconos

## 🚀 Getting Started

### Prerrequisitos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

1. Clona el repositorio:
```bash
git clone [https://github.com/Braifz/cache-components-next-16.git](https://github.com/Braifz/cache-components-next-16.git)
cd cache-components-next-16
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun run dev
```


├── app/
│   ├── layout.tsx          # Layout principal
│   └── page.tsx           # Página principal con demo
├── src/
│   ├── components/
│   │   ├── Presentation.tsx      # Componente estático
│   │   ├── BestSellerSection.tsx # Componente con "use cache"
│   │   ├── AllBooks.tsx          # Componente dinámico
│   │   └── common/
│   │       └── Spinner.tsx       # Loading fallback
│   ├── apit.ts             # API mock para datos
│   └── utils.ts            # Utilidades
├── next.config.ts          # Configuración con cacheComponents: true
└── README.md