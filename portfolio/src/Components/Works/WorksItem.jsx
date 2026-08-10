import { ExternalLink, TrendingUp } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";

function getTitle(title, language) {
  if (typeof title === "string") return title;
  return title[language] ?? title.es;
}

function WorksItem({ projects, language }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const title = getTitle(project.title, language);
        const description = project.description[language] ?? project.description.es;

        return (
          <Card key={project.id} className="flex flex-col overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-secondary">
              {project.image ? (
                <img
                  src={project.image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-foreground text-background">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest">
                    {title}
                  </span>
                </div>
              )}
            </div>

            <CardContent className="flex-1 space-y-3 pt-6">
              <h3 className="font-heading text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => {
                  return (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono text-[10px]"
                    >
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            </CardContent>

            <CardFooter className="gap-2">
              {project.demoHref && (
                <Button asChild size="lg" variant="default">
                  <a href={project.demoHref} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Demo
                  </a>
                </Button>
              )}
              {project.githubHref && (
                <Button asChild size="lg" variant="outline">
                  <a href={project.githubHref} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default WorksItem;