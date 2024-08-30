import React, { useState } from 'react';
import { Container, Toast } from 'react-bootstrap';

function Contact({ language }) {
  const initialState = {
    name: '',
    email: '',
    msgContent: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mqknrzdb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData(initialState);
        setEnviado(true);
      } else {
        console.error('Hubo un error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Hubo un error al enviar el mensaje:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact section" id="contact">
      <Container>
        <h2 className="section-title">{language === 'es' ? 'Contacto' : 'Contact'}</h2>
        <div className="contact__container bd-grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              id="nombre"
              name="name"
              type="text"
              placeholder={language === 'es' ? 'Nombre' : 'Name'}
              className="contact__input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder={language === 'es' ? 'Email' : 'Email'}
              className="contact__input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="msgContent"
              id="msgContent"
              cols="0"
              rows="10"
              placeholder={language === 'es' ? 'Mensaje' : 'Message'}
              className="contact__input"
              value={formData.msgContent}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" value={language === 'es' ? 'Enviar' : 'Send'} className="contact__button button" />
          </form>
          <Toast show={enviado} bg='success' onClose={() => setEnviado(false)} delay={4000} autohide>
            <Toast.Header closeButton={false}>
              <strong className="mr-auto">{language === 'es' ? '¡Éxito!' : 'Success!'}</strong>
            </Toast.Header>
            <Toast.Body className="text-white">{language === 'es' ? 'Mensaje enviado con éxito' : 'Message sent successfully'}</Toast.Body>
          </Toast>
        </div>
      </Container>
    </section>
  );
}

export default Contact;