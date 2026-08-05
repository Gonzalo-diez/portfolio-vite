import { Download } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/ui/accordion";
import { Badge } from "@/Components/ui/badge";

const COURSES = [
  {
    title: { es: "Desarrollo Web", en: "Web Development" },
    date: "26 jul 2021",
    hours: "38 hs · 10 semanas",
    img: "/img/desarrollo.png",
  },
  {
    title: { es: "JavaScript", en: "JavaScript" },
    date: "11 oct 2021",
    hours: "52 hs · 8 semanas",
    img: "/img/javascript.png",
  },
  {
    title: { es: "React", en: "React" },
    date: "24 ene 2022",
    hours: "23 hs · 7 semanas",
    img: "/img/react.png",
  },
  {
    title: { es: "SQL", en: "SQL" },
    date: "13 jun 2022",
    hours: "50 hs · 13 semanas",
    img: "/img/sql.png",
  },
  {
    title: { es: "C#", en: "C#" },
    date: "17 ago 2022",
    hours: "34 hs · 9 semanas",
    img: "/img/c-sharp.png",
  },
  {
    title: { es: "WordPress", en: "WordPress" },
    date: "20 dic 2022",
    hours: "20 hs · 5 semanas",
    img: "/img/wordpress.png",
  },
  {
    title: { es: "Python / Django", en: "Python / Django" },
    date: "05 jul 2023",
    hours: "52 hs · 13 semanas",
    img: "/img/python.png",
  },
  {
    title: { es: "Backend / Node.js", en: "Backend / Node.js" },
    date: "16 jul 2024",
    hours: "94 hs · 24 semanas",
    img: "/img/backend.png",
  },
];

const COPY = {
  es: {
    title: "Educación",
    subtitle: "Cursos completados en Coderhouse",
    view: "Ver certificado",
  },
  en: {
    title: "Education",
    subtitle: "Courses completed at Coderhouse",
    view: "View certificate",
  },
};

function Education({ language }) {
  const copy = COPY[language] ?? COPY.es;

  return (
    <section id="education" className="bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
          {copy.title}
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          {copy.subtitle}
        </p>

        <Accordion type="single" collapsible className="mt-10">
          {COURSES.map((course, index) => {
            return (
              <AccordionItem key={course.title.es} value={`item-${index}`}>
                <AccordionTrigger className="font-medium">
                  <span className="flex flex-1 items-center justify-between gap-4 pr-2">
                    <span>{course.title[language] ?? course.title.es}</span>
                    <Badge
                      variant="secondary"
                      className="font-mono text-[10px] font-normal"
                    >
                      {course.hours}
                    </Badge>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
                    <span className="font-mono">{course.date}</span>
                    <a
                      href={course.img}
                      download={course.title.es}
                      className="inline-flex items-center gap-1.5 text-primary hover:underline"
                    >
                      <Download className="h-3.5 w-3.5" />
                      {copy.view}
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

export default Education;