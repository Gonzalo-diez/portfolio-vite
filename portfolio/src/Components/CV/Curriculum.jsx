import React from 'react';
import { Container } from 'react-bootstrap';

function Curriculum() {
  return (
    <section className="curriculum section" id="curriculum">
      <Container>
        <h2 className="section-title">Curriculum Vitae</h2>
        <div className="cv__container bd-grid">
          <a download="cv" href="./curriculum/CV Gonzalo Diez.pdf" className="cv__img">
            <img src="./img/CV Gonzalo Diez (1).png" alt="curriculum vitae" />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Curriculum;