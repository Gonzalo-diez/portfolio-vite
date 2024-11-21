import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { FaUserCircle } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

function Menu({ changeLanguage, language, token, userId }) {
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            if (!token) {
                console.warn('Token no disponible');
                navigate('/', { replace: true });
                return;
            }
    
            await axios.post(`https://portfolio-vite.onrender.com/user/protected/logout`, null, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
    
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('userId');
            console.log('Token eliminado correctamente');
            navigate('/', { replace: true });
            window.location.reload();
        } catch (err) {
            console.error('Error en cerrar sesión:', err);
        }
    };

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Gonzalo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    {token && userId ? (
                        <Nav className="me-auto mb-2 mb-lg-0 nav-underline">
                            <Nav.Link href="/">{language === 'es' ? 'Inicio' : 'Home'}</Nav.Link>
                            <Nav.Link href="/#about">{language === 'es' ? 'Sobre' : 'About'}</Nav.Link>
                            <Nav.Link href="/#skills">{language === 'es' ? 'Habilidades' : 'Skills'}</Nav.Link>
                            <Nav.Link href="/#education">{language === 'es' ? 'Educación' : 'Education'}</Nav.Link>
                            <Nav.Link href="/#work">{language === 'es' ? 'Trabajos' : 'Work'}</Nav.Link>
                            <Nav.Link href="/#contact">{language === 'es' ? 'Contacto' : 'Contact'}</Nav.Link>
                            <Nav.Link href="/#curriculum">{language === 'es' ? 'CV' : 'Curriculum'}</Nav.Link>
                            <Nav.Link onClick={handleLogOut}><SlLogout /></Nav.Link>
                        </Nav>
                    ) : (
                        <Nav className="me-auto mb-2 mb-lg-0 nav-underline">
                            <Nav.Link href="/">{language === 'es' ? 'Inicio' : 'Home'}</Nav.Link>
                            <Nav.Link href="/#about">{language === 'es' ? 'Sobre' : 'About'}</Nav.Link>
                            <Nav.Link href="/#skills">{language === 'es' ? 'Habilidades' : 'Skills'}</Nav.Link>
                            <Nav.Link href="/#education">{language === 'es' ? 'Educación' : 'Education'}</Nav.Link>
                            <Nav.Link href="/#work">{language === 'es' ? 'Trabajos' : 'Work'}</Nav.Link>
                            <Nav.Link href="/#contact">{language === 'es' ? 'Contacto' : 'Contact'}</Nav.Link>
                            <Nav.Link href="/#curriculum">{language === 'es' ? 'CV' : 'Curriculum'}</Nav.Link>
                            <Nav.Link href="/user/login"><FaUserCircle /></Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
                <div className="d-flex">
                    <Button className="mx-2" variant="primary" onClick={() => changeLanguage('es')}>Español</Button>
                    <Button className="mx-2" variant="primary" onClick={() => changeLanguage('en')}>English</Button>
                </div>
            </Container >
        </Navbar >
    );
}

export default Menu;