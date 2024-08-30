import React, { useState } from "react";
import { Button, Toast, Container, Row, Col } from 'react-bootstrap';

const Login = () => {
    const [showErrorToast, setShowErrorToast] = useState(false);

    return (
        <Container className="mt-3">
            <Row className="justify-content-md-center">
                <Col md="6">
                    <div className="form-container">
                        <h2 className="text-center">Iniciar sesión</h2>
                        <div className="d-flex justify-content-center">
                            <Button className="btn btn-secondary mt-3" href="https://portfolio-vite.onrender.com/user/github">Github</Button>
                        </div>
                        <Toast
                            show={showErrorToast}
                            onClose={() => setShowErrorToast(false)}
                            delay={3000}
                            autohide
                            bg="danger"
                            text="white"
                        >
                            <Toast.Header>
                                <strong className="mr-auto">Denegado</strong>
                            </Toast.Header>
                        </Toast>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;