import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import UseDeleteHardSkill from "../../../../Hooks/Skills/Hard/UseDeleteHardSkill";

function DeleteHardSkill() {
    const token = localStorage.getItem("jwtToken");
    const { id } = useParams();
    const { hardSkill, loading, error, fetchHardSkill, handleDelete } = UseDeleteHardSkill(token);

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
                    <div>
                        <h2 className="text-center mb-4">Eliminar Habilidad Dura</h2>
                        {hardSkill && (
                            <div>
                                <p>Título: {hardSkill.title}</p>
                                <p>Porcentaje: {hardSkill.percentage}</p>
                                <Button variant="danger" onClick={() => handleDelete(id)}>Eliminar</Button>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DeleteHardSkill;