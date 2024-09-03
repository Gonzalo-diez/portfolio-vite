import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import UseAddEducation from "../../../Hooks/Educations/UseAddEducation";

function AddEducation({ token, userId }) {
    const { title, setTitle, image, setImage, error, handleAddEducation } = UseAddEducation(token, userId);

    const handleSaveEducationImage = (e) => {
        setImage(e.target.files[0]);
    };

    if (error) {
        return <p>{error}</p>;
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