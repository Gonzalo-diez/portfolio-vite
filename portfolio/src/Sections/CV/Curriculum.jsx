import { Download, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const COPY = {
  es: {
    title: "Curriculum Vitae",
    subtitle: "Descargá mi CV en formato PDF.",
    download: "Descargar CV",
    view: "Ver",
    pdf: "/img/curriculum/curriculum.pdf",
    img: "/img/curriculum/curriculum.png",
  },
  en: {
    title: "Curriculum Vitae",
    subtitle: "Download my resume as a PDF.",
    download: "Download Resume",
    view: "View",
    pdf: "/img/curriculum/Resume.pdf",
    img: "/img/curriculum/Resume.png",
  },
};

function Curriculum({ language }) {
  const copy = COPY[language] ?? COPY.es;

  return (
    <section id="curriculum" className="bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-md px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
          {copy.title}
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          {copy.subtitle}
        </p>

        <Card className="mt-10 overflow-hidden">
          <a href={copy.pdf} target="_blank" rel="noopener noreferrer">
            <img
              src={copy.img}
              alt="Curriculum Vitae"
              className="w-full border-b border-border transition-opacity hover:opacity-90"
            />
          </a>
          <CardContent className="flex gap-3 p-4">
            <Button asChild className="flex-1">
              <a href={copy.pdf} download="cv">
                <Download className="h-4 w-4" />
                {copy.download}
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href={copy.pdf} target="_blank" rel="noopener noreferrer">
                <Eye className="h-4 w-4" />
                {copy.view}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Curriculum;