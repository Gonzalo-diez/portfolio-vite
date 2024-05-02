import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useAuth } from "../../../Context/authContext";

function UpdateHardSkill({ token }) {
    const { id } = useParams();
    const { userId } = useAuth();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [library, setLibrary] = useState("");
    const [icon, setIcon] = useState("");
    const [percentage, setPercentage] = useState("");


    useEffect(() => {
        const fetchHardSkill = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/hardSkills/${id}`);
                const hardSkill = response.data;

                if (!work) {
                    console.error("Trabajo no encontrado");
                    return;
                }

                setTitle(hardSkill.title);
                setPercentage(hardSkill.percentage);
            }
            catch (err) {
                console.error("Error al obtener los datos del trabajo:", err);
            }
        };

        fetchHardSkill();
    }, [id]);

    const handleUpdate = async () => {
        if (!token) {
            console.log("Debes estar autenticado para editar el trabajo.");
            navigate("/");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("percentage", percentage);
            formData.append("userId", userId);

            const response = await axios.put(`http://localhost:8800/hardSkills/protected/updateHardSkill/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }
            });

            if (response.status === 200) {
                navigate("/");
            }
            else {
                console.log("No se pudo editar el trabajo.")
            }
        }
        catch (err) {
            console.error("Error al actualizar el trabajo:", err);
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Actualizar Habilidad Dura</h2>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el título"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPercentage">
                            <Form.Label>Porcentaje</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el porcentaje"
                                value={percentage}
                                onChange={(e) => setPercentage(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleUpdate}>
                            Actualizar Habilidad
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateHardSkill;