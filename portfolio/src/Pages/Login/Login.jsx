import React, { useEffect } from "react";
import { Button, Toast, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [showErrorToast, setShowErrorToast] = React.useState(false);

    useEffect(() => {
        // Verifica si hay parámetros en la URL que indican autenticación
        const params = new URLSearchParams(window.location.search);
        const jwtToken = params.get('jwtToken');
        const userId = params.get('userId');

        console.log("userId:", userId);
        console.log("Token:", jwtToken);

        if (jwtToken && userId) {
            // Guarda el token y el userId en localStorage
            localStorage.setItem('jwtToken', jwtToken);
            localStorage.setItem('userId', userId);

            navigate("https://portfolio-gonzalo-diez-buchanan.netlify.app/")
        }
    }, []);

    return (
        <Container className="mt-3">
            <Row className="justify-content-md-center">
                <Col md="6">
                    <div className="form-container">
                        <h2 className="text-center">Iniciar sesión</h2>
                        <div className="d-flex justify-content-center">
                            <Button
                                className="btn btn-secondary mt-3"
                                href="https://portfolio-vite.onrender.com/user/github"
                            >
                                Github
                            </Button>
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
                                <strong className="mr-auto">Error</strong>
                            </Toast.Header>
                            <Toast.Body>La autenticación ha fallado. Por favor, intente nuevamente.</Toast.Body>
                        </Toast>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;