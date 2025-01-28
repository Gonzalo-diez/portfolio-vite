import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function WorkItem({ language }) {
  const works = [
    {
      href: "https://gonzalo-diez.github.io/tateti/",
      src: "/img/tateti.gif",
      alt: "Ta-Te-Ti",
      title: language === 'es' ? 'Ta-Te-Ti' : 'Tic-Tac-Toe',
    },
    {
      href: "https://gonzalo-diez.github.io/calculadora/",
      src: "/img/calculadora.gif",
      alt: "Calculadora JS",
      title: language === 'es' ? 'Calculadora JS' : 'Calculator JS',
    },
    {
      href: "https://github.com/Gonzalo-diez/proyecto-app-libreria",
      src: "/img/gifApp.gif",
      alt: "React E-commerce",
      title: "React E-commerce",
    },
    {
      href: "https://angular18-app-clima.netlify.app/",
      src: "/img/app-clima-angular.gif",
      alt: "Angular app clima",
      title: language === 'es' ? 'Angular app clima' : 'Angular weather app',
    },
    {
      href: "https://fakelibre.netlify.app/products",
      src: "/img/angular-ecommerce.gif",
      alt: "Angular E-commerce",
      title: "Angular E-commerce",
    },
    {
      href: "https://mindhub-c593b.web.app/",
      src: "/img/mindhub.gif",
      alt: "Mindhub angular app",
      title: "Mindhub angular app",
    },
  ];

  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} md={3} className="g-4">
        {works.map((work, index) => (
          <Col key={index} className="d-flex justify-content-center">
            <a href={work.href} className="work__img text-center">
              <img
                src={work.src}
                alt={work.alt}
                className="img-fluid rounded mb-2"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <h3 className="h5">{work.title}</h3>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WorkItem;