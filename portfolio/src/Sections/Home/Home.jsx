import { useEffect, useRef, useState } from "react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const TICKER_SPEED = 90;

const ROLES = {
  es: [
    "Desarrollador Full-Stack",
    "React & JavaScript",
    "Interfaces con lógica de datos",
  ],
  en: [
    "Full-Stack Developer",
    "React & JavaScript",
    "Data-driven interfaces",
  ],
};

const STACK_TICKER = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "PYTHON",
  "MACHINE LEARNING",
  "NODE.JS",
];

function useTypewriter(phrases) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    const speed = deleting ? 35 : 70;
    const pauseAtEnd = 1400;
    const pauseAtEmpty = 300;

    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseAtEnd);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, pauseAtEmpty);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases]);

  return text;
}

function Home({ language }) {
  const typed = useTypewriter(ROLES[language] ?? ROLES.es);
  const groupRef = useRef(null);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const updateDuration = () => {
      if (groupRef.current) {
        const width = groupRef.current.getBoundingClientRect().width;
        setDuration(width / TICKER_SPEED);
      }
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  const tickerItems = Array(4).fill(STACK_TICKER).flat();

  const copy = {
    es: { greeting: "Hola, soy", cta: "Contacto" },
    en: { greeting: "Hi, I'm", cta: "Contact" },
  }[language] ?? { greeting: "Hola, soy", cta: "Contacto" };

  return (
    <section id="home" className="relative">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:min-h-[calc(100vh-4rem)] md:grid-cols-2 md:py-0">
        {/* Texto */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="font-mono text-sm text-muted-foreground">
            {copy.greeting}
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Gonzalo<span className="text-primary">.</span>
          </h1>

          <p className="mt-4 h-8 font-mono text-lg text-primary sm:text-xl">
            {typed}
            <span className="animate-pulse">|</span>
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            <Button asChild size="lg">
              <a href="#contact">{copy.cta}</a>
            </Button>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/gonzalo-juan-diez-7188851a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5493756513101"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Gonzalo-diez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <SiGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="aspect-square w-56 overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-secondary sm:w-72 md:w-80">
            <img
              src="/img/perfil-removebg-preview.png"
              alt="Gonzalo Diez Buchanan"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Ticker de stack */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden border-y border-border bg-secondary/40 py-3">
        <div
          className="flex w-max animate-marquee"
          style={{ animationDuration: `${duration}s` }}
        >
          {[0, 1].map((groupIndex) => {
            return (
              <div
                key={groupIndex}
                ref={groupIndex === 0 ? groupRef : null}
                className="flex shrink-0 items-center gap-8 pr-8 font-mono text-xs tracking-widest text-muted-foreground"
              >
                {tickerItems.map((item, index) => {
                  return (
                    <span key={`${groupIndex}-${item}-${index}`} className="flex items-center gap-8">
                      {item}
                      <span className="text-primary">—</span>
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;