import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import WorksItem from "../../Components/Works/WorksItem";
import { PROJECTS } from "../../Components/Works/projectsData";

const COPY = {
  es: {
    title: "Proyectos",
    subtitle: "Lo que construí, de lo más reciente y complejo a lo más simple.",
    featured: "Destacados",
    practice: "Práctica",
  },
  en: {
    title: "Projects",
    subtitle: "What I've built, from the most complex to the simplest.",
    featured: "Featured",
    practice: "Practice",
  },
};

function Works({ language }) {
  const [tab, setTab] = useState("featured");
  const copy = COPY[language] ?? COPY.es;

  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const practiceProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <section id="works" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
          {copy.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
          {copy.subtitle}
        </p>

        <Tabs value={tab} onValueChange={setTab} className="mt-10">
          <TabsList className="mx-auto grid w-full max-w-xs grid-cols-2">
            <TabsTrigger value="featured" className="font-mono text-xs">
              {copy.featured}
            </TabsTrigger>
            <TabsTrigger value="practice" className="font-mono text-xs">
              {copy.practice}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-10">
            <WorksItem projects={featuredProjects} language={language} />
          </TabsContent>

          <TabsContent value="practice" className="mt-10">
            <WorksItem projects={practiceProjects} language={language} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Works;