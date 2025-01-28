import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HardSkills({ language }) {
  const skills = [
    {
      name: language === "es" ? "Desarrollo Front End" : "Front End Development",
      percentage: "80%",
      barWidth: "80%",
    },
    {
      name: language === "es" ? "Desarrollo Back End" : "Back End Development",
      percentage: "70%",
      barWidth: "70%",
    },
    {
      name: language === "es" ? "Base de Datos" : "Databases",
      percentage: "75%",
      barWidth: "75%",
    },
  ];

  return (
    <Container>
      <h2 className="section-title">
        {language === "es" ? "Habilidades Duras" : "Hard Skills"}
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

export default HardSkills;