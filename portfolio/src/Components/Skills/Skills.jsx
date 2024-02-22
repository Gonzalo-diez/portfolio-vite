import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaReact, FaWordpressSimple, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { GiTeamIdea, GiThink } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";

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
                                                    <FaHtml5 className='skills__icon' />
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
                                                    <FaCss3Alt className='skills__icon' />
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
                                                    <IoLogoJavascript className='skills__icon' />    
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
                                                    <FaReact className='skills__icon' />
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
                                                    <SiMysql className='skills__icon' />
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
                                                    <TbBrandCSharp className='skills__icon' />
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
                                                    <FaWordpressSimple className='skills__icon' />
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
                                                    <FaPython className='skills__icon' />
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
                                                    <GiTeamIdea className='skills__icon' />
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
                                                    <GiThink className='skills__icon' />
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
                                                    <FcIdea className='skills__icon' />
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
