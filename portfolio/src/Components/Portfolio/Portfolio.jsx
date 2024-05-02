import React, { useEffect } from 'react';
import axios from 'axios';
import Home from "../Home/Home";
import About from '../About/About';
import Curriculum from '../CV/Curriculum';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Works from "../Works/Works";
import { useAuth } from '../Context/authContext';

function Portfolio({ language, token, setUser }) {
    const { userId } = useAuth();
    /*
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/user/protected/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                if (res.status === 200) {
                    setUser(res.data);
                } else {
                    console.error("La respuesta del servidor no tiene la estructura esperada:", res.data);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchUser();
    }, [userId])
    */

    console.log("Token:", token)

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
    )
}

export default Portfolio;