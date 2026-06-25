// Edita este archivo para actualizar tu CV en el sitio.
// El cambio se publica solo con el siguiente "npm run deploy" — sin tocar ningun PDF.

export const cvData = {
  name: "Libia Román",
  tagline: [
    "Estudiante de Ingeniería de Sistemas · Desarrolladora full stack apasionada por el código eficiente,",
    "la optimización de recursos y las experiencias digitales con propósito.",
  ],
  contact: {
    location: "📍 Bolivia, Cochabamba",
    phone: "📞 +591 62383966",
    email: "✉️ libianatalyromanarevalo@gmail.com",
    website: { label: "🌐 https://libia71421.github.io/libs", url: "https://libia71421.github.io/libs" },
  },

  skills: [
    "Java 17", "Spring Boot", "TypeScript", "React 18", "Angular", "Node.js",
    "Express.js", "C++ / C#", "Python", "Firebase", "PostgreSQL", "SQL Server",
    "MongoDB", "Firestore", "Docker", "Git/GitHub", "Vite", "MUI / PrimeReact",
    "Langchain", "Jest / Cypress",
  ],

  languages: [
    { flag: "🇪🇸", name: "Español", level: "Nativo" },
    { flag: "🇺🇸", name: "Inglés Americano", level: "B2 (certificado)" },
    { flag: "🇧🇴", name: "Quechua", level: "Intermedio" },
  ],

  certifications: [
    "Desarrollo Web – Wix / WordPress (2023)",
    "Desarrollo Web – Google Site (2023)",
    "Tiendas y catálogos como UX Designer (2023)",
    "Asistencias de Programación – UCB “San Pablo” (2023)",
  ],

  competencies: [
    "Optimización de memoria y bajo nivel (C++, paquetes de red).",
    "Arquitectura REST + bases de datos NoSQL/relacionales.",
    "Integración de IA (Gemini, Langchain).",
    "Trabajo colaborativo, metodologías ágiles.",
    "UI/UX responsivo y rendimiento frontend.",
  ],

  experience: [
    {
      title: "AITBOL · Área Core",
      badge: "Investigación + C++",
      date: "Septiembre 2024 – Agosto 2025",
      description: [
        "Implementación de funciones para disminuir uso de memoria y manejo de paquetes en C++.",
        "Trabajo con bases de datos atemporales para trazabilidad de tráfico de red.",
        "Desarrollo de vistas frontend para monitoreo de envíos, memoria, highs/lows en métricas de red.",
      ],
    },
    {
      title: "Apoyo docente · Universidad Católica Boliviana \"San Pablo\"",
      date: "2020 – Presente",
      description: [
        "Enseñanza y corrección en materias iniciales y Programación I. Mentoría de proyectos estudiantiles.",
      ],
    },
  ],

  featuredProject: {
    label: "Proyecto Estrella · Hackathon Cochatech 2026",
    emoji: "🌱",
    title: "Yo Impulso",
    foundation: "Desarrollado para la Fundación GaiaPacha · Ganadora de Cochatech 2026",
    description: [
      "Plataforma digital para emprendimientos verdes: catálogo, órdenes, educación y reseñas.",
      "Web + Backend bajo arquitectura hexagonal con Spring Boot, Firebase y Vite.",
    ],
    stack: "Backend: Java 17, Spring Boot 3.3.4, Firebase Admin SDK, Firestore, Maven. Frontend: React 18, Vite, PrimeReact, Leaflet (mapas), Firebase Auth, CSS/Primeflex.",
    architecture: "hexagonal, REST API, HTTP/JSON, contenedorización con Docker.",
    repo: { label: "github.com/LIBIA71421/yo-impulso", url: "https://github.com/LIBIA71421/yo-impulso" },
  },

  otherProjects: [
    { emoji: "📘", title: "TDDLab – Plataforma educativa TDD con IA", description: "TypeScript (fullstack), Express.js, PostgreSQL + Firebase, React + MUI, Langchain (IA), Jest, Cypress, SonarQube, extensión VSCode." },
    { emoji: "🧠", title: "Neuromynda", description: "Hackathon con Gemini API · Evaluador de estado emocional interactivo en JavaScript." },
    { emoji: "🛒", title: "BinaryCreative", description: "Ecommerce completo con React, Firebase, pasarela Stripe." },
    { emoji: "💬", title: "Mandacrip", description: "App mensajería instantánea en C# + cifrado RSA + SQL Server." },
    { emoji: "🕷️", title: "SPIDER · Hospital · Snake · Games", description: "Aplicaciones en C++, C# (física, gestión hospitalaria, juegos clásicos y calculadora)." },
  ],

  education: {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Católica Boliviana \"San Pablo\"",
    period: "2020 – 2026",
    note: "📌 Graduada de colegio a los 17 años · Enfocada en desarrollo web, seguridad y arquitectura de software.",
  },

  achievements: [
    "Conferencias de seguridad de datos y aprendizaje autodidacta continuo.",
    "Participación en Hackaton 2023 – Proyecto con impacto social + Gemini API.",
    "Participación en Hackathon Cochatech 2026 – Proyecto con impacto ambiental y geolocalización.",
    "Ganadora de Cochatech 2026 con el proyecto Yo Impulso, desarrollado para la Fundación GaiaPacha.",
    "Contribución a comunidades técnicas locales de sistemas.",
  ],
};
