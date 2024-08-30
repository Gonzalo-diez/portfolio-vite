import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UseDeleteSoftSkill from '../../../../Hooks/Skills/Soft/UseDeleteSoftSkill';

function DeleteSoftSkill({ token }) {
    const { id } = useParams();
    const { softSkill, handleDelete } = UseDeleteSoftSkill(token, id);

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <div>
                        <h2 className="text-center mb-4">Eliminar Habilidad Blanda</h2>
                        {softSkill && (
                            <div>
                                <p>Título: {softSkill.title}</p>
                                <p>Subtítulo: {softSkill.sub_title}</p>
                                <p>Porcentaje: {softSkill.percentage}</p>
                                <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DeleteSoftSkill;