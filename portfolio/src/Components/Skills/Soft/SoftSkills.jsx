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
            <Row className="skills__container bd-grid">
                <Col>
                    <div>
                        <h2 className="skills__subtitle">{language === 'es' ? 'Habilidades Blandas' : 'Soft Skills'}</h2>
                        <p className="skills__text">
                            {language === 'es'
                                ? 'Disfruto resolver problemas, colaborar con otros colegas y diseñar los estilos de las páginas.'
                                : 'I enjoy solving problems, collaborating with peers, and designing page styles.'}
                        </p>
                        <Container>
                            {token && (
                                <div>
                                    <Button onClick={handleAddSoftSkill} variant='primary'>
                                        <MdAddCircleOutline />
                                    </Button>
                                </div>
                            )}
                            {softSkills.map((softSkill) => (
                                <Row xs={1} md={2} lg={3} className='g-4' key={softSkill._id}>
                                    <Col md={4}>
                                        <div className="skills__data">
                                            <div className="skills__names">
                                                <span className="skills__name">{language === 'es' ? softSkill.title : softSkill.sub}</span>
                                            </div>
                                            <div className="skills__bar" style={{ width: `${softSkill.percentage}%` }}></div>
                                            <div>
                                                <span className="skills__percentage">{softSkill.percentage}%</span>
                                            </div>
                                            {token && (
                                                <>
                                                    <Button onClick={() => handleUpdateSoftSkill(softSkill._id)} variant='info'>
                                                        <IoPencil />
                                                    </Button>
                                                    <Button onClick={() => handleDeleteSoftSkill(softSkill._id)} variant='danger'>
                                                        <FaTrash />
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                            ))}
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default SoftSkills;