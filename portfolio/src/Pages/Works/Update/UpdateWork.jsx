import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import UseUpdateWork from "../../../Hooks/Works/UseUpdateWork";

function UpdateWork() {
    const token = localStorage.getItem("jwtToken");
    const userId = localStorage.getItem("userId");
    const { id } = useParams();
    const { title, setTitle, sub, setSub, link, setLink, image, handleSaveWorkImage, loading, error, handleUpdate, fetchWork } = UseUpdateWork(token, userId);

    useEffect(() => {
        fetchWork(id);
    }, [id]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Actualizar Trabajo</h2>
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
                                onChange={handleSaveWorkImage}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={() => handleUpdate(id)}>
                            Actualizar Trabajo
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateWork;