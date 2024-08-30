import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import UseUpdateHardSkill from "../../../../Hooks/Skills/Hard/UseUpdateHardSkill";

function UpdateHardSkill({ token, userId }) {
    const { id } = useParams();
    const { title, percentage, loading, error, setTitle, setPercentage, fetchHardSkill, handleUpdate } = UseUpdateHardSkill(token, userId);

    useEffect(() => {
        fetchHardSkill(id);
    }, [id, fetchHardSkill]);

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
                        <Button variant="primary" onClick={() => handleUpdate(id)}>
                            Actualizar Habilidad
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateHardSkill;