import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Menu({ changeLanguage, language }) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{language === 'es' ? 'Gonzalo' : 'Gonzalo'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0 nav-underline">
                        <Nav.Link href="#home">{language === 'es' ? 'Inicio' : 'Home'}</Nav.Link>
                        <Nav.Link href="#about">{language === 'es' ? 'Sobre' : 'About'}</Nav.Link>
                        <Nav.Link href="#skills">{language === 'es' ? 'Habilidades' : 'Skills'}</Nav.Link>
                        <Nav.Link href="#education">{language === 'es' ? 'Educación' : 'Education'}</Nav.Link>
                        <Nav.Link href="#work">{language === 'es' ? 'Trabajos' : 'Work'}</Nav.Link>
                        <Nav.Link href="#contact">{language === 'es' ? 'Contacto' : 'Contact'}</Nav.Link>
                        <Nav.Link href="#curriculum">{language === 'es' ? 'CV' : 'Curriculum'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="d-flex">
                    <Button className="mx-2" variant="primary" onClick={() => changeLanguage('es')}>Español</Button>
                    <Button className="mx-2" variant="primary" onClick={() => changeLanguage('en')}>English</Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default Menu;