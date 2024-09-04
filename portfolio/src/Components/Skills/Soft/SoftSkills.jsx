import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { IoPencil } from 'react-icons/io5';
import UseFetchSoftSkills from '../../../Hooks/Skills/Soft/UseFetchSoftSkills';

function SoftSkills({ language, token }) {
    const { softSkills, handleDeleteSoftSkill, handleUpdateSoftSkill, handleAddSoftSkill } = UseFetchSoftSkills(token);

    return (
        <Container>
            <h2 className="section-title">{language === 'es' ? 'Habilidades Blandas' : 'Soft Skills'}</h2>
            {token && (
                <div className="mb-3">
                    <Button onClick={handleAddSoftSkill} variant="primary">
                        <MdAddCircleOutline />
                    </Button>
                </div>
            )}
            <Row xs={1} md={3} className="g-4">
                {softSkills.map((softSkill) => (
                    <Col key={softSkill._id}>
                        <div className="skills__data">
                            <div className="skills__names">
                                <span className="skills__name">{language === 'es' ? softSkill.title : softSkill.sub}</span>
                            </div>
                            <div className="skills__bar" style={{ width: `${softSkill.percentage}%` }}></div>
                            <div>
                                <span className="skills__percentage">{softSkill.percentage}%</span>
                            </div>
                            {token && (
                                <div className="skills__actions">
                                    <Button onClick={() => handleUpdateSoftSkill(softSkill._id)} variant="info" className="me-2">
                                        <IoPencil />
                                    </Button>
                                    <Button onClick={() => handleDeleteSoftSkill(softSkill._id)} variant="danger">
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

export default SoftSkills;