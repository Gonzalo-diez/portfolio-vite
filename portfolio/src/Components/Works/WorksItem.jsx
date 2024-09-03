import React from 'react';
import { Button } from 'react-bootstrap';
import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";

function WorkItem({ work, language, token, onUpdate, onDelete }) {
  const handleUpdate = () => onUpdate(work._id);
  const handleDelete = () => onDelete(work._id);

  return (
    <div className="work__container">
      <a href={work.link} className="work__img">
        <img src={`https://portfolio-vite.onrender.com/workImg/${work.image}`} width="800" alt={work.title} />
        <h3>{language === 'es' ? work.title : work.sub}</h3>
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