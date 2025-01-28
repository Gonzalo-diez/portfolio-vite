import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Education({ language }) {
  const educationData = [
    {
      title: language === "es" ? "Desarrollo Web" : "Web Development",
      img: "/img/desarrollo.png",
      downloadName: language === "es" ? "Desarrollo Web" : "Web Development",
    },
    {
      title: "JavaScript",
      img: "/img/javascript.png",
      downloadName: "JavaScript",
    },
    {
      title: "React",
      img: "/img/react.png",
      downloadName: "React",
    },
    {
      title: "WordPress",
      img: "/img/wordpress.png",
      downloadName: "WordPress",
    },
    {
      title: "Python/Django",
      img: "/img/python.png",
      downloadName: "Python/Django",
    },
    {
      title: "C#",
      img: "/img/c-sharp.png",
      downloadName: "C#",
    },
    {
      title:
        language === "es"
          ? "Desarrollo Back end/Node.js"
          : "Back end Development/Node.js",
      img: "/img/backend.png",
      downloadName:
        language === "es"
          ? "Desarrollo Back end/Node.js"
          : "Back end Development/Node.js",
    },
    {
      title: language === "es" ? "Base de Datos/SQL" : "Databases/SQL",
      img: "/img/sql.png",
      downloadName:
        language === "es" ? "Base de Datos/SQL" : "Databases/SQL",
    },
  ];

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
          {educationData.map((item, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <div className="education__container">
                <div className="education">
                  <a
                    download={item.downloadName}
                    href={item.img}
                    className="education__img"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      width="800"
                    />
                    <h3 className="education__title">{item.title}</h3>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Education;