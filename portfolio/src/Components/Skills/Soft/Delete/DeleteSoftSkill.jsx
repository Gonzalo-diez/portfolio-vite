import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function DeleteSoftSkill({ token }) {
    const [softSkill, setSoftSkill] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSoftSkill = async () => {
            try {
                const softSkillData = await axios.get(`http://localhost:8800/softSkills/${id}`);
                setSoftSkill(softSkillData.data);
            }
            catch (err) {
                console.error("Error al obtener los datos del trabajo:", err);
            }
            fetchSoftSkill();
        }
    }, [id])

    const handleDelete = async () => {
        if (!token) {
            console.log("Debes estar autenticado para eliminar el trabajo.");
            navigate("/");
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:8800/softSkills/protected/deleteSoftSkill/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 200) {
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
                        <h2 className="text-center mb-4">Eliminar Habilidad Blanda</h2>
                        {softSkill && (
                            <div>
                                <p>Título: {softSkill.title}</p>
                                <p>Subtítulo: {softSkill.sub_title}</p>
                                <p>Porcentaje: {softSkill.percentage}</p>
                                <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DeleteSoftSkill;