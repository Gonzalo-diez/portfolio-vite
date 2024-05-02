import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Container, Col, Button } from "react-bootstrap";
import axios from "axios";
import { MdAddCircleOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";

function SoftSkills({ language, token }) {
    const [softSkills, setSoftSkills] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSoftSkills = async () => {
            try {
                const softRes = await axios.get("http://localhost:8800/softSkills/");
                setSoftSkills(softRes.data);
                console.log("Habilidades blandas:", softRes.data);
            } catch (err) {
                console.error("Error al obtener las habilidades blandas:", err);
            }
        };

        fetchSoftSkills();
    }, []);

    const handleDeleteSoftSkill = async (softId) => {
        try {
            navigate(`/softSkills/protected/deleteSoftSkill/${softId}`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateSoftSkill = (softId) => {
        try {
            navigate(`/softSkills/protected/updateSoftSkill/${softId}`);
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleAddSoftSkill = () => {
        navigate('/softSkills/protected/addSoftSkill');
    };

    return (
        <Container>
            <h2 className="section-title">{language === 'es' ? 'Habilidades Blandas' : 'Soft Skills'}</h2>
            <Row className="skills__container bd-grid">
                <Col>
                    <div>
                        <h2 className="skills__subtitle">{language === 'es' ? 'Habilidades Blandas' : 'Soft Skills'}</h2>
                        <p className="skills__text">{language === 'es' ? 'Me gusta resolver problemas, trabajar en conjunto con demás pares y desarrollar los estilos de las páginas.' : 'I like to solve problems, work together with other peers and develop page styles.'}</p>
                        <Container>
                            {token && (
                                <div>
                                    <Button onClick={handleAddSoftSkill} variant='primary'><MdAddCircleOutline /></Button>
                                </div>
                            )}
                            {softSkills.map((softSkill) => (
                                <Row xs={1} md={2} lg={3} className='g-4' key={softSkill._id}>
                                    <Col md={4}>
                                        <div className="skills__data">
                                            <div className="skills__names">
                                                <span className="skills__name">{language === 'es' ? softSkill.title : softSkill.sub_title}</span>
                                            </div>
                                            <div className="skills__bar" style={{ width: `${softSkill.percentage}%` }}></div>
                                            <div>
                                                <span className="skills__percentage">{softSkill.percentage}%</span>
                                            </div>
                                            {token && (
                                                <>
                                                    <Button onClick={() => handleUpdateSoftSkill(softSkill._id)} variant='info'><IoPencil /></Button>
                                                    <Button onClick={() => handleDeleteSoftSkill(softSkill._id)} variant='danger'><FaTrash /></Button>
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

export default SoftSkills;