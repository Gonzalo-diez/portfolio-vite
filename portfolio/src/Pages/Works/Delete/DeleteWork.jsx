import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import UseDeleteWork from "../../../Hooks/Works/UseDeleteWork";

function DeleteWork({ token }) {
    const { id } = useParams();
    const { work, loading, error, handleDelete } = UseDeleteWork(id, token);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <div className="mt-5">
                        <h2 className="text-center mb-4">Eliminar Trabajo</h2>
                        {work && (
                            <div>
                                <p>Título: {work.title}</p>
                                <p>Subtítulo: {work.sub_title}</p>
                                <p>Link: {work.link}</p>
                                <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DeleteWork;