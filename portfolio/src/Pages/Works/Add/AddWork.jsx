import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import UseAddWork from '../../../Hooks/Works/UseAddWork';

function AddWork() {
  const token = localStorage.getItem("jwtToken");
  const userId = localStorage.getItem("userId");

  const {
    title,
    setTitle,
    sub,
    setSub,
    link,
    setLink,
    handleSaveWorkImage,
    handleAddWork,
    loading,
    error,
  } = UseAddWork(token, userId);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="mt-5">
            <h2 className="text-center mb-4">Agregar Trabajo</h2>
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el título"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formSubTitle">
                <Form.Label>Título en inglés</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el título en inglés"
                  value={sub}
                  onChange={(e) => setSub(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formLink">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleSaveWorkImage}
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={() => handleAddWork(token, userId)}
                disabled={loading}
              >
                {loading ? "Agregando..." : "Agregar Trabajo"}
              </Button>
              {error && <p>Error al agregar trabajo: {error.message}</p>}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AddWork;