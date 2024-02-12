import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Menu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Gonzalo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0 nav-underline">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#about">Sobre</Nav.Link>
                        <Nav.Link href="#skills">Habilidades</Nav.Link>
                        <Nav.Link href="#education">Educación</Nav.Link>
                        <Nav.Link href="#work">Trabajos</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                        <Nav.Link href="#curriculum">CV</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
