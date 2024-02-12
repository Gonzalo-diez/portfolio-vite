import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <section className="about section" id="about">
            <Container>
                <h2 className="section-title">Sobre mí</h2>
                <Row className="about__container bd-grid">
                    <Col>
                        <div>
                            <h2 className="about__subtitle">Yo soy Gonzalo</h2>
                            <p className="about__text">Y soy un desarrollador web especializado en Front End, me gusta leer libros y el cine y practicar jiu-jitsu.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;