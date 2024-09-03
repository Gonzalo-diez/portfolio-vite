import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
import { IoPencil } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';
import UseFetchHardSkills from '../../../Hooks/Skills/Hard/UseFetchHardSkills';

function HardSkills({ language, token }) {
    const { hardSkills, error, handleDeleteHardSkill, handleUpdateHardSkill, handleAddHardSkill } = UseFetchHardSkills(token);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container>
            <h2 className="section-title">{language === 'es' ? 'Habilidades Duras' : 'Hard Skills'}</h2>
            <Row className="skills__container bd-grid">
                <Col>
                    <div>
                        <h2 className="skills__subtitle">{language === 'es' ? 'Habilidades duras' : 'Hard Skills'}</h2>
                        <p className="skills__text">
                            {language === 'es'
                                ? 'Me especializo en la maquetación de páginas con HTML, CSS y JavaScript, y en el desarrollo de web apps con React.'
                                : 'I specialize in building web pages with HTML, CSS, and JavaScript, and in developing web apps with React.'}
                        </p>

                        <Container>
                            {token && (
                                <div>
                                    <Button onClick={handleAddHardSkill} variant='primary'><MdAddCircleOutline /></Button>
                                </div>
                            )}
                            <Row xs={1} md={2} lg={3} className="g-4">
                                {hardSkills.map((hardSkill) => (
                                    <Col key={hardSkill._id}>
                                        <div className="skills__data">
                                            <div className="skills__names">
                                                <span className="skills__name">{hardSkill.title}</span>
                                            </div>
                                            <div className="skills__bar" style={{ width: `${hardSkill.percentage}%` }}></div>
                                            <div>
                                                <span className="skills__percentage">{hardSkill.percentage}%</span>
                                            </div>
                                            {token && (
                                                <>
                                                    <Button onClick={() => handleUpdateHardSkill(hardSkill._id)} variant='info'><IoPencil /></Button>
                                                    <Button onClick={() => handleDeleteHardSkill(hardSkill._id)} variant='danger'><FaTrash /></Button>
                                                </>
                                            )}
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default HardSkills;