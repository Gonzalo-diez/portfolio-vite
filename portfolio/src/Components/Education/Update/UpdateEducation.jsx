import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useAuth } from "../../Context/authContext";

function UpdateEducation({ token }) {
    const { id } = useParams();
    const { userId } = useAuth();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/educations/${id}`);
                const education = response.data;

                if (!education) {
                    console.error("Trabajo no encontrado");
                    return;
                }

                setTitle(education.title);
                setImage(education.image);
            }
            catch (err) {
                console.error("Error al obtener los datos del trabajo:", err);
            }
        };

        fetchEducation();
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
            formData.append("image", image);
            formData.append("userId", userId);

            const response = await axios.put(`http://localhost:8800/educations/protected/updateEducation/${id}`, formData, {
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

    const handleSaveEducationImage = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Actualizar Educación</h2>
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
                        <Button variant="primary" onClick={handleUpdate}>
                            Actualizar Educación
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateEducation;