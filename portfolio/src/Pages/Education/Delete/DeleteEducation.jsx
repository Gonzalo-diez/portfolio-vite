import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UseDeleteEducation from "../../../Hooks/Educations/UseDeleteEducation";

function DeleteEducation() {
    const token = localStorage.getItem("jwtToken");
    const { id } = useParams();
    const { education, fetchEducation, handleDelete, error } = UseDeleteEducation(token);

    useEffect(() => {
        fetchEducation(id);
    }, [id, fetchEducation]);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <div>
                        <h2 className="text-center mb-4">Eliminar Educación</h2>
                        {education && (
                            <div>
                                <p>Título: {education.title}</p>
                                <img src={`https://portfolio-vite.onrender.com/eduImg/${education.image}`} alt={education.title} width="800" />
                                <Button variant="danger" onClick={() => handleDelete(id)}>Eliminar</Button>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default DeleteEducation;