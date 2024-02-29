import React from 'react';
import { Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Home({ language }) {
    return (
        <section className="home bd-grid" id="home">
            {language === 'es' && (
                <div className="home__data">
                    <h1 className="home__title">Hola,<br />Yo soy<span className="home__title-color"> Gonzalo </span></h1>
                    <p>Desarrollador Front End</p>
                    <Button variant='primary' href="#contact">Contacto</Button>
                </div>
            )}
            {language === 'en' && (
                <div className="home__data">
                    <h1 className="home__title">Hello,<br />I'm<span className="home__title-color"> Gonzalo </span></h1>
                    <p>Front End Developer</p>
                    <Button variant='primary' href="#contact">Contact</Button>
                </div>
            )}

            <div className="home__social">
                <a href="https://www.linkedin.com/in/gonzalo-juan-diez-7188851a5/" className="home__social-icon"><FaLinkedin /></a>
                <a href="https://github.com/Gonzalo-diez" className="home__social-icon"><FaGithub /></a>
            </div>

            <div className="home__img">
                <svg className="home__blob" viewBox="0 0 479 467">
                    <mask id="mask0" mask-type="alpha">
                        <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                    </mask>
                    <g mask="url(#mask0)">
                        <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                        <image className="home__blob-img" x="65" y="55" href="../img/perfil-removebg-preview.png" />
                        <image className="home__blob-img" x="65" y="55" href="./img/perfil-removebg-preview.png" />
                    </g>
                </svg>
            </div>
        </section>
    );
}

export default Home;