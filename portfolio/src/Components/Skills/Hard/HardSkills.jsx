import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';
import { IoPencil } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';


function HardSkills({ language, token }) {
    const [hardSkills, setHardSkills] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHardSkills = async () => {
            try {
                const hardRes = await axios.get("http://localhost:8800/hardSkills/");
                setHardSkills(hardRes.data);
                console.log("Habilidades duras:", hardRes.data);
            } catch (err) {
                console.error("Error al obtener las habilidades duras:", err);
            }
        };

        fetchHardSkills();
    }, []);

    const handleDeleteHardSkill = async (hardId) => {
        try {
            navigate(`/hardSkills/protected/deleteHardSkill/${hardId}`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateHardSkill = (hardId) => {
        try {
            navigate(`/hardSkills/protected/updateHardSkill/${hardId}`);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleAddHardSkill = () => {
        navigate('/hardSkills/protected/addHardSkill');
    };

    return (
        <Container>
            <h2 className="section-title">{language === 'es' ? 'Habilidades Duras' : 'Hard Skills'}</h2>
            <Row className="skills__container bd-grid">
                <Col>
                    <div>
                        <h2 className="skills__subtitle">{language === 'es' ? 'Habilidades duras' : 'Hard Skills'}</h2>
                        <p className="skills__text">{language === 'es' ? 'Me especializo en la maquetación de páginas con HTML, CSS y JavaScript, y en el desarrollo de web apps con React.' : 'I specialize in building web pages with HTML, CSS, and JavaScript, and in developing web apps with React.'}</p>

                        <Container>
                            {token && (
                                <div>
                                    <Button onClick={handleAddHardSkill} variant='primary'><MdAddCircleOutline /></Button>
                                </div>
                            )}
                            {hardSkills.map((hardSkill) => (
                                <Row xs={1} md={2} lg={3} className="g-4" key={hardSkill._id}>
                                    <Col md={4}>
                                        <div className="skills__data">
                                            <div className="skills__names">
                                                <span className="skills__name">{hardSkill.title}</span>
                                            </div>
                                            <div className="skills__bar" style={{ width: `${hardSkill.percentage}%` }}></div>
                                            <div>
                                                <span className="skills__percentage">{hardSkill.percentage}%</span>
                                            </div>
                                            {token && (
                                                <>
                                                    <Button onClick={() => handleUpdateHardSkill(hardSkill._id)} variant='info'><IoPencil /></Button>
                                                    <Button onClick={() => handleDeleteHardSkill(hardSkill._id)} variant='danger'><FaTrash /></Button>
                                                </>
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                            ))}
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HardSkills;