import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function Curriculum({ language }) {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get("http://localhost:8800/resume/");
        console.log("Curriculum:", res.data);
        setResume(res.data);
      } catch (err) {
        console.error("Error al obtener el curriculum:", err);
      }
    };
    fetchResume();
  }, []);

  return (
    <section className="curriculum section" id="curriculum">
      <Container>
        <h2 className="section-title">{language === 'es' ? 'Curriculum Vitae' : 'Curriculum Vitae'}</h2>
        {resume && ( 
          <div className="cv__container bd-grid">
            <a download="cv" href={language === 'es' ? `http://localhost:8800/resumeFiles/${resume.pdf_resume}` : `http://localhost:8800/resumeFiles/${resume.pdf_sub_resume}`} className="cv__img">
              <img src={language === 'es' ? `http://localhost:8800/resumeFiles/${resume.resume}` : `http://localhost:8800/resumeFiles/${resume.sub_resume}`} alt='curriculum vitae' />
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Curriculum;