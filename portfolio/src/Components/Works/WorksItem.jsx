import React from 'react';
import { Button } from 'react-bootstrap';
import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function WorkItem({ work, language, token, onUpdate, onDelete }) {
  const navigate = useNavigate();

  const handleUpdate = () => onUpdate(work._id);
  const handleDelete = () => onDelete(work._id);

  return (
    <div className="work__container">
      <a href={work.link} className="work__img">
        <img src={`http://localhost:8800/workImg/${work.image}`} width="800" alt={work.title} />
        <h3>{language === 'es' ? work.title : work.sub_title}</h3>
      </a>
      {token && (
        <>
          <Button onClick={handleUpdate} variant='info'><IoPencil /></Button>
          <Button onClick={handleDelete} variant='danger'><FaTrash /></Button>
        </>
      )}
    </div>
  );
}

export default WorkItem;