import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Toast, Container, Row, Col } from 'react-bootstrap';
import { useAuth } from "../Context/authContext";

const Login = ({ setIsAuthenticated, setUser }) => {
    const { setAuthenticatedUserId } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorToast, setShowErrorToast] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8800/user/login", {
                username: username,
                password: password,
            });
            if (res.status === 200) {
                const token = res.data.token;

                localStorage.setItem("jwtToken", token);

                setAuthenticatedUserId(res.data.user._id);
                setUser(res.data);
                setIsAuthenticated(true);
                navigate(`/`);
            }
        } catch (err) {
            console.log(err);
            setShowErrorToast(true);
        }
    };

    return (
        <Container className="mt-3">
            <Row className="justify-content-md-center">
                <Col md="6">
                    <div className="form-container">
                        <h2 className="text-center">Iniciar sesión</h2>
                        <Form onSubmit={handleLogin}>
                            <Form.Group controlId="correoElectronico" className="mt-3">
                                <Form.Label className="text-center d-block">Nombre de usuario:</Form.Label>
                                <Form.Control
                                    type="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="contrasena" className="mt-3">
                                <Form.Label className="text-center d-block">Contraseña:</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-center mt-3">
                                <Button variant="primary" type="submit">
                                    Iniciar sesión
                                </Button>
                            </div>
                        </Form>
                        <Toast
                            show={showErrorToast}
                            onClose={() => setShowErrorToast(false)}
                            delay={3000}
                            autohide
                            bg="danger"
                            text="white"
                        >
                            <Toast.Header>
                                <strong className="mr-auto">Usted no es el autor</strong>
                            </Toast.Header>
                        </Toast>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;