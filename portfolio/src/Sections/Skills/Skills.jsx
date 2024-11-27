import React from 'react';
import HardSkills from '../../Components/Skills/Hard/HardSkills';
import SoftSkills from '../../Components/Skills/Soft/SoftSkills';

function Skills({ language }) {
    return (
        <section id="skills">
            <div className="skills section" id="hard-skills">
                <HardSkills language={language} />
            </div>

            <div className="skills section" id="soft-skills">
                <SoftSkills language={language} />
            </div>
        </section>
    );
}

export default Skills;