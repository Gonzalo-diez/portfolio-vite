import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

function AddWork({ token, user }) {
    const userId = user ? user._id : null;
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [sub, setSub] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");

    const handleAddWork = async () => {
        if (!token) {
            console.log("Debes estar autenticado para agregar el treabajo.");
            navigate("/usuarios/login");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("sub_title", sub);
            formData.append("link", link);
            formData.append("image", image);
            formData.append("userId", userId);

            const response = await axios.post("http://localhost:8800/works/protected/addWork", formData, {
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

    const handleSaveWorkImage = (e) => {
        setImage(e.target.files[0])
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <div className="mt-5">
                        <h2 className="text-center mb-4">Agregar Trabajo</h2>
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
                                <Form.Label>Titulo en ingles</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el titulo en ingles"
                                    value={sub}
                                    onChange={(e) => setSub(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formLink">
                                <Form.Label>Link</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el link"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formImage">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={handleSaveWorkImage}
                                />
                            </Form.Group>
                            <Button variant="primary" onClick={handleAddWork}>
                                Agregar Trabajo
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AddWork;