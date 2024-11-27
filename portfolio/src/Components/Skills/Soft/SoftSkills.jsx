import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SoftSkills({ language }) {
  return (
    <Container>
      <h2 className="section-title">
        {language === "es" ? "Habilidades Blandas" : "Soft Skills"}
      </h2>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">
                {language === "es" ? "Comunicación" : "Communication"}
              </span>
            </div>
            <div className="skills__bar" style={{ width: "75%" }}></div>
            <div>
              <span className="skills__percentage">75%</span>
            </div>
          </div>
        </Col>
        <Col>
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">
                {language === "es" ? "Creatividad" : "Creativity"}
              </span>
            </div>
            <div className="skills__bar" style={{ width: "80%" }}></div>
            <div>
              <span className="skills__percentage">80%</span>
            </div>
          </div>
        </Col>
        <Col>
          <div className="skills__data">
            <div className="skills__names">
              <span className="skills__name">
                {language === "es" ? "Resolución de Problemas" : "Troubleshooting"}
              </span>
            </div>
            <div className="skills__bar" style={{ width: "80%" }}></div>
            <div>
              <span className="skills__percentage">80%</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SoftSkills;
