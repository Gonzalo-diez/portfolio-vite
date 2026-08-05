import HardSkills from "../../Components/Skills/Hard/HardSkills";
import SoftSkills from "../../Components/Skills/Soft/SoftSkills";

const TITLES = {
  es: { hard: "Habilidades Duras", soft: "Habilidades Blandas" },
  en: { hard: "Hard Skills", soft: "Soft Skills" },
};

function Skills({ language }) {
  const titles = TITLES[language] ?? TITLES.es;

  return (
    <section id="skills" className="bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl space-y-16 px-4">
        <div>
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
            {titles.hard}
          </h2>
          <div className="mt-10">
            <HardSkills language={language} />
          </div>
        </div>

        <div>
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
            {titles.soft}
          </h2>
          <div className="mt-10">
            <SoftSkills language={language} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;