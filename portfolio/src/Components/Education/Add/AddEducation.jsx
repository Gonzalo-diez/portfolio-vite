import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useAuth } from "../../Context/authContext";

function AddEducation({ token, user }) {
    const { userId } = useAuth;
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const handleAddEducation = async () => {
        if (!token) {
            console.log("Debes estar autenticado para agregar el treabajo.");
            navigate("/usuarios/login");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("image", image);
            formData.append("userId", userId);

            const response = await axios.post("http://localhost:8800/educations/protected/addEducation", formData, {
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

    const handleSaveEducationImage = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Agregar Educación</h2>
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
                        <Form.Group controlId="formImage">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={handleSaveEducationImage}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleAddEducation}>
                            Agregar Educación
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddEducation;