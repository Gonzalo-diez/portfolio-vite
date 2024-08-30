import React from 'react';
import HardSkills from '../../Components/Skills/Hard/HardSkills';
import SoftSkills from '../../Components/Skills/Soft/SoftSkills';

function Skills({ language, token }) {
    return (
        <section id="skills">
            <div className="skills section" id="hard-skills">
                <HardSkills language={language} token={token} />
            </div>

            <div className="skills section" id="soft-skills">
                <SoftSkills language={language} token={token} />
            </div>
        </section>
    );
}

export default Skills;
