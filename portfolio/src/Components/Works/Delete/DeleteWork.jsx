import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function DeleteWork({ token }) {
    const [work, setWork] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWork = async () => {
            try {
                const workData = await axios.get(`http://localhost:8800/works/${id}`);
                setWork(workData.data);
            }
            catch (err) {
                console.error("Error al obtener los datos del trabajo:", err);
            }
            fetchWork();
        }
    }, [id])

    const handleDelete = async () => {
        if (!token) {
            console.log("Debes estar autenticado para eliminar el trabajo.");
            navigate("/");
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:8800/works/protected/deleteWork/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 200) {
                navigate("/");
            }
            else {
                return console.log("No se pudo eliminar el trabajo.");
            }
        }
        catch (err) {
            console.error("Error al intentar borrar el trabajo:", err);
        }
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