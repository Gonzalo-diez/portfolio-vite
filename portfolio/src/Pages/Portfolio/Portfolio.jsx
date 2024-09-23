import React from 'react';
import Home from "../../Sections/Home/Home";
import About from '../../Sections/About/About';
import Curriculum from '../../Sections/CV/Curriculum';
import Contact from '../../Sections/Contact/Contact';
import Education from '../../Sections/Education/Education';
import Skills from '../../Sections/Skills/Skills';
import Works from "../../Sections/Works/Works";

function Portfolio({ language, setLoading }) {
    const token = localStorage.getItem("jwtToken");

    return (
        <>
            <Home language={language} token={token} />
            <About language={language} token={token} />
            <Skills language={language} token={token} setLoading={setLoading} />
            <Education language={language} token={token} setLoading={setLoading} />
            <Works language={language} token={token} setLoading={setLoading} />
            <Contact language={language} token={token} />
            <Curriculum language={language} token={token} />
        </>
    );
}

export default Portfolio;