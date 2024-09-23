import React from 'react';
import HardSkills from '../../Components/Skills/Hard/HardSkills';
import SoftSkills from '../../Components/Skills/Soft/SoftSkills';

function Skills({ language, setLoading }) {
    const token = localStorage.getItem("jwtToken");

    return (
        <section id="skills">
            <div className="skills section" id="hard-skills">
                <HardSkills language={language} token={token} setLoading={setLoading} />
            </div>

            <div className="skills section" id="soft-skills">
                <SoftSkills language={language} token={token} setLoading={setLoading} />
            </div>
        </section>
    );
}

export default Skills;