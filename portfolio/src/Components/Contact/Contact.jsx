import React from 'react';
import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <Container>
        <h2 className="section-title">Contacto</h2>
        <div className="contact__container bd-grid">
          <form className="contact__form" id="contactForm" action="https://formspree.io/f/mqknrzdb" method="POST">
            <input id="nombre" name="name" type="text" placeholder="Nombre" className="contact__input" required />
            <input id="email" name="email" type="email" placeholder="Email" className="contact__input" required />
            <textarea
              name="msgContent"
              id="msgContent"
              cols="0"
              rows="10"
              placeholder="Mensaje"
              className="contact__input"
              required
            ></textarea>
            <input type="submit" value="Enviar" className="contact__button button" />
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;