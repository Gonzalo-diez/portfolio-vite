import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/authContext";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function AddSoftSkill({ token, user }) {
    const { userId } = useAuth;
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [sub, setSub] = useState("");
    const [percentage, setPercentage] = useState("");

    const handleAddSoftSkill = async () => {
        if (!token) {
            console.log("Debes estar autenticado para agregar el treabajo.");
            navigate("/");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("sub_title", sub);
            formData.append("percentage", percentage);
            formData.append("userId", userId);

            const response = await axios.post("http://localhost:8800/softSkills/protected/addSoftSkill", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                navigate("/");
            }
            else {
                return console.log("Error al intentar subir el trabajo")
            }
        }
        catch (err) {
            console.error("Error al agregar producto:", err);
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Agregar Habilidad Blanda</h2>
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
                        <Form.Group controlId="formSubTitle">
                            <Form.Label>Subtítulo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el subtítulo"
                                value={sub}
                                onChange={(e) => setSub(e.target.value)}
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
                        <Button variant="primary" onClick={handleAddSoftSkill}>
                            Agregar Habilidad
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddSoftSkill;