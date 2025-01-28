import React from 'react';
import { Container } from 'react-bootstrap';
import WorkItem from '../../Components/Works/WorksItem';

function Works({ language }) {
  return (
    <section className="work section" id="work">
      <Container>
        <h2 className="section-title">{language === 'es' ? 'Trabajos' : 'Works'}</h2>
        <WorkItem language={language} />
      </Container>
    </section>
  );
}

export default Works;