import React from 'react';
import Cookies from "js-cookie";
import Home from "../../Sections/Home/Home";
import About from '../../Sections/About/About';
import Curriculum from '../../Sections/CV/Curriculum';
import Contact from '../../Sections/Contact/Contact';
import Education from '../../Sections/Education/Education';
import Skills from '../../Sections/Skills/Skills';
import Works from "../../Sections/Works/Works";
import useFetchUser from '../../Hooks/User/UseFetchUser';

function Portfolio({ language, setUser }) {
    const token = Cookies.get('jwtToken');
    const userId = Cookies.get('userId');
    useFetchUser(userId, token, setUser);

    return (
        <>
            <Home language={language} token={token} />
            <About language={language} token={token} />
            <Skills language={language} token={token} />
            <Education language={language} token={token} />
            <Works language={language} token={token} />
            <Contact language={language} token={token} />
            <Curriculum language={language} token={token} />
        </>
    );
}

export default Portfolio;