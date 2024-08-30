import React from 'react';
import { Button } from 'react-bootstrap';
import { IoPencil } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';

function EducationItem({ education, language, token, onUpdate, onDelete }) {
  return (
    <div className="education__container">
      <div className="education">
        <a download={education.title} href={`http://localhost:8800/eduImg/${education.image}`} className="education__img">
          <img src={`http://localhost:8800/eduImg/${education.image}`} alt={education.title} width="800" />
          <h3 className="education__title">{education.title}</h3>
        </a>
      </div>
      {token && (
        <>
          <Button onClick={() => onUpdate(education._id)} variant='info'><IoPencil /></Button>
          <Button onClick={() => onDelete(education._id)} variant='danger'><FaTrash /></Button>
        </>
      )}
    </div>
  );
}

export default EducationItem;