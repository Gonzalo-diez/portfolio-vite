import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        <section id="skills">
            <div className="skills section" id="hard-skills">
                <Container>
                    <h2 className="section-title">Habilidades Duras</h2>
                    <Row className="skills__container bd-grid">
                        <Col>
                            <div>
                                <h2 className="skills__subtitle">Habilidades duras</h2>
                                <p className="skills__text">Me especializo en la maquetación de páginas con HTML, CSS y JavaScript, y en el desarrollo de web apps con React.</p>

                                <Container>
                                    <Row xs={1} md={2} lg={3} className="g-4">
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bxl-html5 skills__icon'></i>
                                                    <span className="skills__name">HTML5</span>
                                                </div>
                                                <div className="skills__bar skills__web">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">90%</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bxl-css3 skills__icon'></i>
                                                    <span className="skills__name">CSS3</span>
                                                </div>
                                                <div className="skills__bar skills__web">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">90%</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bxl-javascript skills__icon'></i>
                                                    <span className="skills__name">JavaScript</span>
                                                </div>
                                                <div className="skills__bar skills__js">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">80%</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bxl-react skills__icon'></i>
                                                    <span className="skills__name">React</span>
                                                </div>
                                                <div className="skills__bar skills__react">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">75%</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bx-data skills__icon'></i>
                                                    <span className="skills__name">SQL</span>
                                                </div>
                                                <div className="skills__bar skills__sql">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">80%</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bxs-copyright skills__icon'></i>
                                                    <span className="skills__name">C#</span>
                                                </div>
                                                <div className="skills__bar skills__c">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">40%</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bxl-wordpress skills__icon'></i>
                                                    <span className="skills__name">WordPress</span>
                                                </div>
                                                <div className="skills__bar skills__wp">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">80%</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bxl-python skills__icon'></i>
                                                    <span className="skills__name">Python</span>
                                                </div>
                                                <div className="skills__bar skills__py">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">70%</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="skills section" id="soft-skills">
                <Container>
                    <h2 className="section-title">Habilidades Blandas</h2>
                    <Row className="skills__container bd-grid">
                        <Col>
                            <div>
                                <h2 className="skills__subtitle">Habilidades blandas</h2>
                                <p className="skills__text">Me gusta resolver problemas, trabajar en conjunto con demás pares y desarrollar los estilos de las páginas.</p>
                                <Container>
                                    <Row xs={1} md={2} lg={3} className='g-4'>
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bx-group skills__icon'></i>
                                                    <span className="skills__name">Trabajo en equipo</span>
                                                </div>
                                                <div className="skills__bar skills__team">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">80%</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bxs-magic-wand skills__icon'></i>
                                                    <span className="skills__name">Creatividad</span>
                                                </div>
                                                <div className="skills__bar skills__creativity">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">85%</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="skills__data">
                                                <div className="skills__names">
                                                    <i className='bx bx-brain skills__icon'></i>
                                                    <span className="skills__name">Resolver problemas</span>
                                                </div>
                                                <div className="skills__bar skills__solve">

                                                </div>
                                                <div>
                                                    <span className="skills__percentage">75%</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Skills;
