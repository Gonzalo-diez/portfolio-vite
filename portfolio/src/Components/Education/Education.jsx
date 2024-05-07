import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdAddCircleOutline } from "react-icons/md";
import { IoPencil } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';
import { useAuth } from '../Context/authContext';

function Education({ language, token }) {
    const [educations, setEducations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEducations = async () => {
            try {
                const res = await axios.get("http://localhost:8800/educations/");
                setEducations(res.data);
            } catch (err) {
                console.error("Error al obtener productos:", err);
            }
        };
        fetchEducations();
    }, []);

    const handleDeleteEducation = async (educationId) => {
        try {
            navigate(`/educations/protected/deleteEducation/${educationId}`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateEducation = (educationId) => {
        try {
            navigate(`/educations/protected/updateEducation/${educationId}`);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleAddEducation = () => {
        navigate('/educations/protected/addEducation');
    };

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
                    {educations.map((education) => {
                        <Col md={4} key={education._id}>
                            <div className="education__container">
                                <div className="education">
                                    <a download={education.title} href={`http://localhost:8800/eduImg/${education.image}`} className="education__img">
                                        <img src={education.image} alt={education.title} width="800" />
                                        <h3 className="education__title">{education.title}</h3>
                                    </a>
                                </div>
                                {token && (
                                    <>
                                        <Button onClick={() => handleUpdateEducation(education._id)} variant='info'><IoPencil /></Button>
                                        <Button onClick={() => handleDeleteEducation(education._id)} variant='danger'><FaTrash /></Button>
                                    </>
                                )}
                            </div>
                        </Col>
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Education;