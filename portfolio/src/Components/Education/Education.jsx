import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Education() {
    return (
        <section className="education section" id="education">
            <Container>
                <h2 className="section-title">Educación</h2>
                <p className="education__text">Mis títulos conseguidos en CoderHouse</p>
                <Row>
                    <Col md={4}>
                        <div className="education__container">
                            <div className="education">
                                <a download="desarrollo" href="./img/desarrollo.png" className="education__img">
                                    <img src="./img/desarrollo.png" alt="Desarrollo web" width="800" />
                                    <h3 className="education__title">Desarrollo web</h3>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="education__container">
                            <div className="education">
                                <a download="js" href="./img/javascript.png" className="education__img">
                                    <img src="./img/javascript.png" alt="JavaScript" width="800" />
                                    <h3 className="education__title">JavaScript</h3>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="education__container">
                            <div className="education">
                                <a download="react" href="./img/react.png" className="education__img">
                                    <img src="./img/react.png" alt="React" width="800" />
                                    <h3 className="education__title">React</h3>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="education__container">
                            <div className="education">
                                <a download="sql" href="./img/sql.png" className="education__img">
                                    <img src="./img/sql.png" alt="SQL" width="800" />
                                    <h3 className="education__title">SQL</h3>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="education__container">
                            <div className="education">
                                <a download="csharp" href="./img/c-sharp.png" className="education__img">
                                    <img src="./img/c-sharp.png" alt="C-sharp" width="800" />
                                    <h3 className="education__title">C#</h3>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="education__container">
                            <div className="education">
                                <a download="wordpress" href="./img/wordpress.png" className="education__img">
                                    <img src="./img/wordpress.png" alt="WordPress" width="800" />
                                    <h3 className="education__title">WordPress</h3>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="education__container">
                            <div className="education">
                                <a download="python" href="./img/python.png" className="education__img">
                                    <img src="./img/python.png" alt="Python" width="800" />
                                    <h3 className="education__title">Python/Django</h3>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Education;