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
        <Row>
          <Col>
            <div className="education__container">
              <div className="education">
                <a
                  download={
                    language === "es" ? "Desarrollo Web" : "Web Development"
                  }
                  href={`https://portfolio-vite.onrender.com/eduImg/desarrollo.png`}
                  className="education__img"
                >
                  <img
                    src={`https://portfolio-vite.onrender.com/eduImg/desarrollo.png`}
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
          <Col>
            <div className="education__container">
              <div className="education">
                <a
                  download="JavaScript"
                  href={`https://portfolio-vite.onrender.com/eduImg/javascript.png`}
                  className="education__img"
                >
                  <img
                    src={`https://portfolio-vite.onrender.com/eduImg/desarrollo.png`}
                    alt="JavaScript"
                    width="800"
                  />
                  <h3 className="education__title">JavaScript</h3>
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="education__container">
              <div className="education">
                <a
                  download="React"
                  href={`https://portfolio-vite.onrender.com/eduImg/react.png`}
                  className="education__img"
                >
                  <img
                    src={`https://portfolio-vite.onrender.com/eduImg/react.png`}
                    alt="React"
                    width="800"
                  />
                  <h3 className="education__title">React</h3>
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="education__container">
              <div className="education">
                <a
                  download="WordPress"
                  href={`https://portfolio-vite.onrender.com/eduImg/wordpress.png`}
                  className="education__img"
                >
                  <img
                    src={`https://portfolio-vite.onrender.com/eduImg/wordpress.png`}
                    alt="WordPress"
                    width="800"
                  />
                  <h3 className="education__title">WordPress</h3>
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="education__container">
              <div className="education">
                <a
                  download="Python/Django"
                  href={`https://portfolio-vite.onrender.com/eduImg/python.png`}
                  className="education__img"
                >
                  <img
                    src={`https://portfolio-vite.onrender.com/eduImg/python.png`}
                    alt="Python/Django"
                    width="800"
                  />
                  <h3 className="education__title">Python/Django</h3>
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="education__container">
              <div className="education">
                <a
                  download="C#"
                  href={`https://portfolio-vite.onrender.com/eduImg/c-sharp.png`}
                  className="education__img"
                >
                  <img
                    src={`https://portfolio-vite.onrender.com/eduImg/c-sharp.png`}
                    alt="C#"
                    width="800"
                  />
                  <h3 className="education__title">C#</h3>
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="education__container">
              <div className="education">
                <a
                  download={
                    language === "es"
                      ? "Desarrollo Back end/Node.js"
                      : "Back end Development/Node.js"
                  }
                  href={`https://portfolio-vite.onrender.com/eduImg/backend.png`}
                  className="education__img"
                >
                  <img
                    src={`https://portfolio-vite.onrender.com/eduImg/backend.png`}
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
          <Col>
            <div className="education__container">
              <div className="education">
                <a
                  download={
                    language === "es" ? "Base de Datos/SQL" : "Databases/SQL"
                  }
                  href={`https://portfolio-vite.onrender.com/eduImg/sql.png`}
                  className="education__img"
                >
                  <img
                    src={`https://portfolio-vite.onrender.com/eduImg/sql.png`}
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