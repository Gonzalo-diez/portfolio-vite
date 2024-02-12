import React from 'react';
import { Container } from 'react-bootstrap';
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <p className="footer__title">Gonzalo</p>
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/gonzalo-juan-diez-7188851a5/" className="footer__icon"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/gonzalodiezbuch/?hl=es-la" className="footer__icon"><IoIosMail /></a>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;