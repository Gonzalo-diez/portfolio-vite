import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Work() {
  return (
    <section className="work section" id="work">
      <Container>
        <h2 className="section-title">Trabajos</h2>
        <Row>
          <Col md={4}>
            <div className="work__container">
              <a href="https://github.com/Gonzalo-diez/proyecto-app-libreria" className="work__img">
                <img src="./img/gifApp.gif" width="800" alt="App libreria" />
                <h3>App Libreria</h3>
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="work__container">
              <a href="https://github.com/Gonzalo-diez/calculadora" className="work__img">
                <img src="./img/calculadora.gif" width="800" alt="Calculadora" />
                <h3>Calculadora</h3>
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="work__container">
              <a href="https://github.com/Gonzalo-diez/tateti" className="work__img">
                <img src="./img/tateti.gif" width="800" alt="Ta-te-ti" />
                <h3>Tateti</h3>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Work;