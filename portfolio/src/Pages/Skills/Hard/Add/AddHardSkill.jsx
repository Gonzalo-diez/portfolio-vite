import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import UseAddHardSkill from "../../../../Hooks/Skills/Hard/UseAddHardSkill";

function AddHardSkill() {
    const token = localStorage.getItem("jwtToken");
    const userId = localStorage.getItem("userId");

    const {
        title,
        setTitle,
        percentage,
        setPercentage,
        handleAddHardSkill,
        error
    } = UseAddHardSkill(token, userId);

    if (error) {
        return <p>{error}</p>;
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
                                type="number"
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