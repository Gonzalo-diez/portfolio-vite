import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UseUpdateEducation from "../../../Hooks/Educations/UseUpdateEducation";

function UpdateEducation() {
    const token = localStorage.getItem("jwtToken");
    const userId = localStorage.getItem("userId");
    const { id } = useParams();
    const {
        title,
        setTitle,
        image,
        handleSaveEducationImage,
        handleUpdate,
        fetchEducation,
        loading,
        error
    } = UseUpdateEducation(token, userId);

    useEffect(() => {
        fetchEducation(id);
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
                        <Button variant="primary" onClick={() => handleUpdate(id)}>
                            Actualizar Educación
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateEducation;