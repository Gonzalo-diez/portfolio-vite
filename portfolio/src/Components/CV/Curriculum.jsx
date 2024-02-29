import React from 'react';
import { Container } from 'react-bootstrap';

function Curriculum({ language }) {
  return (
    <section className="curriculum section" id="curriculum">
      <Container>
        <h2 className="section-title">{language === 'es' ? 'Curriculum Vitae' : 'Curriculum Vitae'}</h2>
        <div className="cv__container bd-grid">
          <a download="cv" href={language === 'es' ? './curriculum/CV Gonzalo Diez.pdf' : './curriculum/Resume.pdf'} className="cv__img">
            <img src={language === 'es' ? './img/CV Gonzalo Diez (1).png' : './img/Resume.png'} alt={language === 'es' ? 'curriculum vitae' : 'curriculum vitae'} />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Curriculum;