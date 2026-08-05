import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiGit,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

const STACK = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Django", Icon: SiDjango, color: "#092E20" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

const COPY = {
  es: {
    title: "Tech Stack",
    subtitle: "Tecnologías y lenguajes que uso habitualmente.",
  },
  en: {
    title: "Tech Stack",
    subtitle: "Technologies and languages I regularly work with.",
  },
};

function TechStack({ language }) {
  const copy = COPY[language] ?? COPY.es;

  return (
    <section id="tech-stack" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
          {copy.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          {copy.subtitle}
        </p>

        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
          {STACK.map(({ name, Icon, color }) => {
            return (
              <Card
                key={name}
                className="group transition-colors hover:border-primary"
              >
                <CardContent className="flex flex-col items-center gap-2 p-4">
                  <Icon
                    className="h-8 w-8 transition-transform group-hover:scale-110"
                    style={{ color }}
                  />
                  <p className="text-center font-mono text-[11px] text-muted-foreground">
                    {name}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;