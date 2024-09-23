import React, { useEffect } from 'react';
import axios from 'axios';
import Home from "../../Sections/Home/Home";
import About from '../../Sections/About/About';
import Curriculum from '../../Sections/CV/Curriculum';
import Contact from '../../Sections/Contact/Contact';
import Education from '../../Sections/Education/Education';
import Skills from '../../Sections/Skills/Skills';
import Works from "../../Sections/Works/Works";

function Portfolio({ language, setLoading }) {
    const token = localStorage.getItem("jwtToken");

    useEffect(() => {
        const fetchAllData = async () => {
            setLoading(true);
            try {
                // Usa Promise.all para esperar a que todas las llamadas de los hooks terminen
                await Promise.all([
                    axios.get("https://portfolio-vite.onrender.com/educations/"),
                    axios.get("https://portfolio-vite.onrender.com/skills/"),
                    axios.get("https://portfolio-vite.onrender.com/works/"),
                ]);
            } catch (err) {
                console.error("Error al obtener los datos:", err);
            } finally {
                setLoading(false); // Todos los datos fueron cargados
            }
        };

        fetchAllData();
    }, [setLoading]);

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