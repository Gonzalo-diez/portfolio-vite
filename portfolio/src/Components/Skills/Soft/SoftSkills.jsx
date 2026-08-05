import { MessagesSquare, Lightbulb, Puzzle } from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";

const SKILLS = {
  es: [
    { name: "Comunicación", Icon: MessagesSquare },
    { name: "Creatividad", Icon: Lightbulb },
    { name: "Resolución de Problemas", Icon: Puzzle },
  ],
  en: [
    { name: "Communication", Icon: MessagesSquare },
    { name: "Creativity", Icon: Lightbulb },
    { name: "Problem Solving", Icon: Puzzle },
  ],
};

function SoftSkills({ language }) {
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

export default SoftSkills;