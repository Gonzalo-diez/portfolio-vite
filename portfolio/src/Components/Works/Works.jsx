import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

function Works({ language, token }) {
  const [works, setWorks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/works/");
        console.log("Trabajos:", res.data);
        setWorks(res.data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      }
    };
    fetchWorks();
  }, []);

  const handleDeleteWork = async (workId) => {
    try {
      navigate(`/works/protected/deleteWork/${workId}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateWork = async (workId) => {
    try {
      navigate(`/works/protected/updateWork/${workId}`);
    } catch (err) {
      console.log(err);
    }
  }

  const handleAddWork = () => {
    navigate('/works/protected/addWork');
  };

  return (
    <section className="work section" id="work">
      <Container>
        <h2 className="section-title">{language === 'es' ? 'Trabajos' : 'Works'}</h2>
        <Row>
          {token && (
            <div>
              <Button onClick={handleAddWork} variant='primary'><MdAddCircleOutline /></Button>
            </div>
          )}
          {works.map((work) => (
            <Col md={4} key={work._id}>
              <div className="work__container">
                <a href={work.link} className="work__img">
                  <img src={`http://localhost:8800/workImg/${work.image}`} width="800" alt={work.title} />
                  <h3>{language === 'es' ? work.title : work.sub_title}</h3>
                </a>
                {token && (
                  <>
                    <Button onClick={() => handleUpdateWork(work._id)} variant='info'><IoPencil /></Button>
                    <Button onClick={() => handleDeleteWork(work._id)} variant='danger'><FaTrash /></Button>
                  </>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Works;