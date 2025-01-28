import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SoftSkills({ language }) {
  const skills = [
    {
      name: language === "es" ? "Comunicación" : "Communication",
      percentage: "75%",
      barWidth: "75%",
    },
    {
      name: language === "es" ? "Creatividad" : "Creativity",
      percentage: "80%",
      barWidth: "80%",
    },
    {
      name:
        language === "es"
          ? "Resolución de Problemas"
          : "Troubleshooting",
      percentage: "80%",
      barWidth: "80%",
    },
  ];

  return (
    <Container>
      <h2 className="section-title">
        {language === "es" ? "Habilidades Blandas" : "Soft Skills"}
      </h2>
      <Row xs={1} md={3} className="g-4">
        {skills.map((skill, index) => (
          <Col key={index}>
            <div className="skills__data">
              <div className="skills__names">
                <span className="skills__name">{skill.name}</span>
              </div>
              <div className="skills__bar" style={{ width: skill.barWidth }}></div>
              <div>
                <span className="skills__percentage">{skill.percentage}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SoftSkills;