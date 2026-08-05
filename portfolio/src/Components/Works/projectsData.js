export const PROJECTS = [
  // ===== DESTACADOS =====
  {
    id: "kraken",
    featured: true,
    title: "Kraken",
    description: {
      es: "Sistema modular de trading algorítmico en Python. Combina reglas técnicas con dos modelos XGBoost que filtran la calidad estadística de las señales, con validación temporal estricta para evitar data leakage.",
      en: "Modular algorithmic trading system in Python. Combines technical rules with two XGBoost models that filter signal quality, with strict temporal validation to avoid data leakage.",
    },
    stack: ["Python", "XGBoost", "scikit-learn", "Pandas", "Binance API"],
    image: null, // TODO: agregar captura del proyecto cuando esté disponible
    demoHref: null,
    githubHref: "https://github.com/Gonzalo-diez/kraken",
  },
  {
    id: "regimeflow",
    featured: true,
    title: "RegimeFlow",
    description: {
      es: "Motor de análisis para identificar en qué fase del ciclo de mercado nos encontramos, usando K-Means, Gaussian Mixture Models y Hidden Markov Models sobre datos macro reales.",
      en: "Analysis engine to identify the current market cycle phase, using K-Means, Gaussian Mixture Models and Hidden Markov Models over real macro data.",
    },
    stack: ["Python", "K-Means", "Gaussian Mixture", "Hidden Markov Models", "Pandas"],
    image: null, // TODO: agregar captura del proyecto cuando esté disponible
    demoHref: null,
    githubHref: "https://github.com/Gonzalo-diez/regimeflow",
  },
  {
    id: "react-libreria",
    featured: true,
    title: "React E-commerce",
    description: {
      es: "Tienda de libros hecha con React, con pagos vía Stripe y datos en tiempo real en Firebase. Los usuarios exploran, seleccionan y compran de forma fluida.",
      en: "Book store built with React, with Stripe payments and real-time data via Firebase. Users browse, select and purchase seamlessly.",
    },
    stack: ["React", "Stripe", "Firebase"],
    image: "/img/gifApp.gif",
    demoHref: null,
    githubHref: "https://github.com/Gonzalo-diez/proyecto-app-libreria",
  },

  // ===== PRÁCTICA =====
  {
    id: "angular-ecommerce",
    featured: false,
    title: "Angular E-commerce",
    description: {
      es: "Tienda de productos electrónicos construida con Angular.",
      en: "Electronics store built with Angular.",
    },
    stack: ["Angular"],
    image: "/img/angular-ecommerce.gif",
    demoHref: "https://fakelibre.netlify.app/products",
    githubHref: null,
  },
  {
    id: "mindhub",
    featured: false,
    title: "Mindhub Angular App",
    description: {
      es: "Aplicación con sistema de login construida con Angular.",
      en: "Application with login system built with Angular.",
    },
    stack: ["Angular"],
    image: "/img/mindhub.gif",
    demoHref: "https://mindhub-c593b.web.app/",
    githubHref: null,
  },
  {
    id: "angular-clima",
    featured: false,
    title: { es: "Angular App Clima", en: "Angular Weather App" },
    description: {
      es: "Consulta el pronóstico del tiempo por ciudad.",
      en: "Check the weather forecast by city.",
    },
    stack: ["Angular"],
    image: "/img/app-clima-angular.gif",
    demoHref: "https://angular18-app-clima.netlify.app/",
    githubHref: null,
  },
  {
    id: "tateti",
    featured: false,
    title: { es: "Ta-Te-Ti", en: "Tic-Tac-Toe" },
    description: {
      es: "Uno de mis primeros proyectos de práctica: el clásico juego de Ta-Te-Ti.",
      en: "One of my first practice projects: the classic Tic-Tac-Toe game.",
    },
    stack: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/tateti.gif",
    demoHref: "https://gonzalo-diez.github.io/tateti/",
    githubHref: null,
  },
  {
    id: "calculadora",
    featured: false,
    title: { es: "Calculadora JS", en: "Calculator JS" },
    description: {
      es: "Calculadora básica construida con JavaScript puro.",
      en: "Basic calculator built with vanilla JavaScript.",
    },
    stack: ["HTML5", "CSS3", "JavaScript"],
    image: "/img/calculadora.gif",
    demoHref: "https://gonzalo-diez.github.io/calculadora/",
    githubHref: null,
  },
];