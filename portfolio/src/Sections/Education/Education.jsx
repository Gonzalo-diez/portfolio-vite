import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MdAddCircleOutline } from "react-icons/md";
import UseFetchEducations from '../../Hooks/Educations/UseFetchEducations';
import EducationItem from '../../Components/Education/EducationItem';

function Education({ language, setLoading }) {
  const token = localStorage.getItem("jwtToken");
  const [educations] = UseFetchEducations(setLoading);
  const navigate = useNavigate();

  const handleAddEducation = () => navigate('/educations/protected/addEducation');
  const handleUpdateEducation = (educationId) => navigate(`/educations/protected/updateEducation/${educationId}`);
  const handleDeleteEducation = (educationId) => navigate(`/educations/protected/deleteEducation/${educationId}`);

  return (
    <section className="education section" id="education">
      <Container>
        <h2 className="section-title">{language === 'es' ? 'Educación' : 'Education'}</h2>
        <p className="education__text">{language === 'es' ? 'Mis títulos conseguidos' : 'My degrees obtained'}</p>
        <Row>
          {token && (
            <div>
              <Button onClick={handleAddEducation} variant='primary'><MdAddCircleOutline /></Button>
            </div>
          )}
          {educations.map((education) => (
            <Col md={4} key={education._id}>
              <EducationItem
                education={education}
                language={language}
                token={token}
                onUpdate={handleUpdateEducation}
                onDelete={handleDeleteEducation}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Education;