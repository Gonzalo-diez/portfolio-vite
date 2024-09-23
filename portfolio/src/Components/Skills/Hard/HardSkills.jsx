import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
import { IoPencil } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';
import UseFetchHardSkills from '../../../Hooks/Skills/Hard/UseFetchHardSkills';

function HardSkills({ language, token }) {
    const { hardSkills, error, handleDeleteHardSkill, handleUpdateHardSkill, handleAddHardSkill } = UseFetchHardSkills();

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container>
            <h2 className="section-title">{language === 'es' ? 'Habilidades Duras' : 'Hard Skills'}</h2>
            {token && (
                <div className="mb-3">
                    <Button onClick={handleAddHardSkill} variant="primary">
                        <MdAddCircleOutline />
                    </Button>
                </div>
            )}
            <Row xs={1} md={3} className="g-4">
                {hardSkills.map((hardSkill) => (
                    <Col key={hardSkill._id}>
                        <div className="skills__data">
                            <div className="skills__names">
                                <span className="skills__name">{language === 'es' ? hardSkill.title : hardSkill.sub}</span>
                            </div>
                            <div className="skills__bar" style={{ width: `${hardSkill.percentage}%` }}></div>
                            <div>
                                <span className="skills__percentage">{hardSkill.percentage}%</span>
                            </div>
                            {token && (
                                <div className="skills__actions">
                                    <Button onClick={() => handleUpdateHardSkill(hardSkill._id)} variant="info" className="me-2">
                                        <IoPencil />
                                    </Button>
                                    <Button onClick={() => handleDeleteHardSkill(hardSkill._id)} variant="danger">
                                        <FaTrash />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HardSkills;