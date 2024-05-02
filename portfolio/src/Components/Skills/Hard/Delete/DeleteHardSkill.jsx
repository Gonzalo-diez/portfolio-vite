import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function DeleteHardSkill({ token }) {
    const [hardSkill, setHardSkill] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHardSkill = async () => {
            try {
                const hardSkillData = await axios.get(`http://localhost:8800/hardSkills/${id}`);
                setHardSkill(hardSkillData.data);
            }
            catch (err) {
                console.error("Error al obtener los datos del trabajo:", err);
            }
            fetchHardSkill();
        }
    }, [id])

    const handleDelete = async () => {
        if (!token) {
            console.log("Debes estar autenticado para eliminar el trabajo.");
            navigate("/");
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:8800/hardSkills/protected/deleteHardSkill/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if(response.status === 200) {
                navigate("/");
            }
            else {
                return console.log("No se pudo eliminar el trabajo.");
            }
        }
        catch (err) {
            console.error("Error al intentar borrar el trabajo:", err);
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <div>
                        <h2 className="text-center mb-4">Eliminar Habilidad Dura</h2>
                        {hardSkill && (
                            <div>
                                <p>Título: {hardSkill.title}</p>
                                <p>Porcentaje: {hardSkill.percentage}</p>
                                <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DeleteHardSkill;