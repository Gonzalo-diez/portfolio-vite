import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/authContext";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function AddHardSkill({ token, user }) {
    const { userId } = useAuth;
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [percentage, setPercentage] = useState("");

    const handleAddHardSkill = async () => {
        if (!token) {
            console.log("Debes estar autenticado para agregar la habilidad dura.");
            navigate("/");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("percentage", percentage);
            formData.append("userId", userId);

            const response = await axios.post("http://localhost:8800/hardSkills/protected/addHardSkill", formData, {
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
                    <h2 className="text-center mb-4">Agregar Habilidad Dura</h2>
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
                        <Button variant="primary" onClick={handleAddHardSkill}>
                            Agregar Habilidad
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddHardSkill;