import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";

const CONTENT = {
  es: {
    title: "Sobre mí",
    paragraphs: [
      "Soy desarrollador Full-Stack (React, TypeScript, JavaScript, Node.js, Python) con foco en construir interfaces que combinan buen UX con lógica sólida detrás. Me interesa el producto tanto como el código: entender por qué una pantalla funciona, no solo cómo se ve.",
      "En paralelo, desarrollo proyectos propios de datos y algoritmos — como Kraken, un sistema de trading algorítmico con Machine Learning, y RegimeFlow, un motor de análisis de regímenes de mercado. Esto me da una perspectiva distinta a la de un frontend \"puro\": pienso en sistemas completos, no solo en componentes visuales.",
      "Actualmente busco crecer en equipos de producto donde pueda aportar en frontend mientras sigo profundizando en arquitectura y sistemas orientados a datos.",
      "Fuera del código, leo, voy al cine y entreno jiu-jitsu.",
    ],
    tags: ["JavaScript & TypeScript", "React", "Node.js", "Python & ML", "Trading algorítmico"],
  },
  en: {
    title: "About Me",
    paragraphs: [
      "I'm a Full-Stack Developer (React, TypeScript, JavaScript, Node.js, Python) focused on building interfaces that pair good UX with solid logic underneath. I care about product as much as code: understanding why a screen works, not just how it looks.",
      "In parallel, I build my own data and algorithm projects — like Kraken, an algorithmic trading system with Machine Learning, and RegimeFlow, a market regime analysis engine. This gives me a different perspective from a \"pure\" front-end dev: I think in complete systems, not just visual components.",
      "I'm currently looking to grow on product teams where I can contribute on the front end while continuing to deepen my knowledge of architecture and data-oriented systems.",
      "Outside of code, I read, watch movies, and train jiu-jitsu.",
    ],
    tags: ["JavaScript & TypeScript", "React", "Node.js", "Python & ML", "Algorithmic trading"],
  },
};

function About({ language }) {
  const content = CONTENT[language] ?? CONTENT.es;

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
          {content.title}
        </h2>

        <Card className="mt-10">
          <CardContent className="space-y-4 p-8 text-muted-foreground">
            {content.paragraphs.map((paragraph, index) => {
              return (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "text-lg leading-relaxed text-foreground"
                      : "leading-relaxed"
                  }
                >
                  {paragraph}
                </p>
              );
            })}
          </CardContent>
        </Card>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {content.tags.map((tag) => {
            return (
              <Badge key={tag} variant="secondary" className="font-mono text-xs">
                {tag}
              </Badge>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;