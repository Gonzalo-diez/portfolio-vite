import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import UseFetchWorks from '../../Hooks/Works/UseFetchWorks';
import WorkItem from '../../Components/Works/WorksItem';

function Works({ language }) {
  const token = localStorage.getItem("jwtToken");
  const [works] = UseFetchWorks();
  const navigate = useNavigate();

  const handleAddWork = () => navigate('/works/protected/addWork');
  const handleUpdateWork = (workId) => navigate(`/works/protected/updateWork/${workId}`);
  const handleDeleteWork = (workId) => navigate(`/works/protected/deleteWork/${workId}`);

  return (
    <section className="work section" id="work">
      <Container>
        <h2 className="section-title">{language === 'es' ? 'Trabajos' : 'Works'}</h2>
        <Row className="animate__fadeInLeft animate__delay-2s">
          {token && (
            <div>
              <Button onClick={handleAddWork} variant='primary'><MdAddCircleOutline /></Button>
            </div>
          )}
          {works.map((work) => (
            <Col md={4} key={work._id}>
              <WorkItem
                work={work}
                language={language}
                token={token}
                onUpdate={handleUpdateWork}
                onDelete={handleDeleteWork}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Works;