import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UseDeleteSoftSkill from '../../../../Hooks/Skills/Soft/UseDeleteSoftSkill';

function DeleteSoftSkill() {
    const token = localStorage.getItem("jwtToken");
    const { id } = useParams();
    const { softSkill, handleDelete, fetchSoftSkill } = UseDeleteSoftSkill(token);

    useEffect(() => {
        fetchSoftSkill(id);
    }, [id, fetchSoftSkill])

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <div>
                        <h2 className="text-center mb-4">Eliminar Habilidad Blanda</h2>
                        {softSkill && (
                            <div>
                                <p>Título: {softSkill.title}</p>
                                <p>Subtítulo: {softSkill.sub}</p>
                                <p>Porcentaje: {softSkill.percentage}</p>
                                <Button variant="danger" onClick={() => handleDelete(id)}>Eliminar</Button>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DeleteSoftSkill;