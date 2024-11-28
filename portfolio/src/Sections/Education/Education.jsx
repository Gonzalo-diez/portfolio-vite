import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Education({ language }) {
  return (
    <section className="education section" id="education">
      <Container>
        <h2 className="section-title">
          {language === "es" ? "Educación" : "Education"}
        </h2>
        <p className="education__text">
          {language === "es"
            ? "Mis títulos conseguidos"
            : "My degrees obtained"}
        </p>
        <Row className="animate__fadeInLeft animate__delay-2s">
          <Col lg={4} md={6} sm={12}>
            <div className="education__container">
              <div className="education">
                <a
                  download={
                    language === "es" ? "Desarrollo Web" : "Web Development"
                  }
                  href="/img/desarrollo.png"
                  className="education__img"
                >
                  <img
                    src="/img/desarrollo.png"
                    alt={
                      language === "es" ? "Desarrollo Web" : "Web Development"
                    }
                    width="800"
                  />
                  <h3 className="education__title">
                    {language === "es" ? "Desarrollo Web" : "Web Development"}
                  </h3>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="education__container">
              <div className="education">
                <a
                  download="JavaScript"
                  href="/img/javascript.png"
                  className="education__img"
                >
                  <img
                    src="/img/javascript.png"
                    alt="JavaScript"
                    width="800"
                  />
                  <h3 className="education__title">JavaScript</h3>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="education__container">
              <div className="education">
                <a
                  download="React"
                  href="/img/react.png"
                  className="education__img"
                >
                  <img
                    src="/img/react.png"
                    alt="React"
                    width="800"
                  />
                  <h3 className="education__title">React</h3>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="education__container">
              <div className="education">
                <a
                  download="WordPress"
                  href="/img/wordpress.png"
                  className="education__img"
                >
                  <img
                    src="/img/wordpress.png"
                    alt="WordPress"
                    width="800"
                  />
                  <h3 className="education__title">WordPress</h3>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="education__container">
              <div className="education">
                <a
                  download="Python/Django"
                  href="/img/python.png"
                  className="education__img"
                >
                  <img
                    src="/img/python.png"
                    alt="Python/Django"
                    width="800"
                  />
                  <h3 className="education__title">Python/Django</h3>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="education__container">
              <div className="education">
                <a
                  download="C#"
                  href="/img/c-sharp.png"
                  className="education__img"
                >
                  <img
                    src="/img/c-sharp.png"
                    alt="C#"
                    width="800"
                  />
                  <h3 className="education__title">C#</h3>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="education__container">
              <div className="education">
                <a
                  download={
                    language === "es"
                      ? "Desarrollo Back end/Node.js"
                      : "Back end Development/Node.js"
                  }
                  href="/img/backend.png"
                  className="education__img"
                >
                  <img
                    src="/img/backend.png"
                    alt={
                      language === "es"
                        ? "Desarrollo Back end/Node.js"
                        : "Back end Development/Node.js"
                    }
                    width="800"
                  />
                  <h3 className="education__title">
                    {language === "es"
                      ? "Desarrollo Back end/Node.js"
                      : "Back end Development/Node.js"}
                  </h3>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="education__container">
              <div className="education">
                <a
                  download={
                    language === "es" ? "Base de Datos/SQL" : "Databases/SQL"
                  }
                  href="/img/sql.png"
                  className="education__img"
                >
                  <img
                    src="/img/sql.png"
                    alt={
                      language === "es" ? "Base de Datos/SQL" : "Databases/SQL"
                    }
                    width="800"
                  />
                  <h3 className="education__title">
                    {language === "es" ? "Base de Datos/SQL" : "Databases/SQL"}
                  </h3>
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