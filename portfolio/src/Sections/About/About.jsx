import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About({ language }) {
    return (
        <section className="about section" id="about">
            <Container>
                <h2 className="section-title">{language === 'es' ? 'Sobre mí' : 'About Me'}</h2>
                <Row className="about__container bd-grid">
                    <Col>
                        {language === 'es' && (
                            <div>
                                <h2 className="about__subtitle">Yo soy Gonzalo</h2>
                                <p className="about__text">Y soy un desarrollador web especializado en Front End. Me gusta leer libros, el cine y practicar jiu-jitsu.</p>
                            </div>
                        )}
                        {language === 'en' && (
                            <div>
                                <h2 className="about__subtitle">I'm Gonzalo</h2>
                                <p className="about__text">And I'm a Front End web developer. I enjoy reading books, watching movies, and practicing jiu-jitsu.</p>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;