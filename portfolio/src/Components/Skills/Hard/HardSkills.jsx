import { Layout, Server, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SKILLS = {
  es: [
    { name: "Desarrollo Front-End", Icon: Layout },
    { name: "Desarrollo Back-End", Icon: Server },
    { name: "Bases de Datos", Icon: Database },
  ],
  en: [
    { name: "Front-End Development", Icon: Layout },
    { name: "Back-End Development", Icon: Server },
    { name: "Databases", Icon: Database },
  ],
};

function HardSkills({ language }) {
  const skills = SKILLS[language] ?? SKILLS.es;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {skills.map(({ name, Icon }) => {
        return (
          <Card key={name} className="text-center">
            <CardContent className="flex flex-col items-center gap-3 py-8">
              <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <p className="font-medium">{name}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default HardSkills;