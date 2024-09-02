import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UseUpdateSoftSkill from '../../../../Hooks/Skills/Soft/UseUpdateSoftSkill';

function UpdateSoftSkill() {
    const token = localStorage.getItem("jwtToken");
    const userId = localStorage.getItem("userId");
    const { id } = useParams();
    const { title, setTitle, sub, setSub, percentage, setPercentage, handleUpdate } = UseUpdateSoftSkill(token, userId, id);

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Actualizar Habilidad Blanda</h2>
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
                        <Button variant="primary" onClick={() => handleUpdate(id)}>
                            Actualizar Habilidad
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateSoftSkill;