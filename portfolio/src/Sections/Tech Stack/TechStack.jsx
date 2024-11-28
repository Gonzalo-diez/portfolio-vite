import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaNodeJs, FaPython, FaJs, FaDatabase, FaHtml5, FaCss3Alt, FaAngular, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiDjango, SiTailwindcss } from "react-icons/si";

function TechStack({ language }) {
  return (
    <section className="tech-stack section" id="tech-stack">
      <Container>
        <h2 className="section-title">Tech Stack</h2>
        <p className="text-center">
          {language === "es" ? "Aquí están las tecnologías y lenguajes de programación que manejo:" : "Here are the technologies and programming languages that I use:"}
        </p>
        <Row className="justify-content-center">
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <FaReact size={60} className="text-primary" />
            <p>React</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <FaAngular size={60} className="text-danger" />
            <p>Angular</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <FaNodeJs size={60} className="text-success" />
            <p>Node.js</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <FaPython size={60} className="text-primary" />
            <p>Python</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <SiDjango size={60} className="text-success" />
            <p>Django</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <FaJs size={60} className="text-warning" />
            <p>JavaScript</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <FaHtml5 size={60} className="text-danger" />
            <p>HTML5</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <FaCss3Alt size={60} className="text-primary" />
            <p>CSS3</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <FaBootstrap size={60} className="bootstrap-icon" />
            <p>Bootstrap</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <SiTailwindcss size={60} className="text-primary" />
            <p>Tailwind</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <FaDatabase size={60} className="text-secondary" />
            <p>SQL</p>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="text-center mb-4">
            <SiMongodb size={60} className="text-success" />
            <p>MongoDB</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TechStack;