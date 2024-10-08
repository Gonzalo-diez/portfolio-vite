import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UseDeleteSoftSkill(token) {
    const [softSkill, setSoftSkill] = useState(null);
    const navigate = useNavigate();

    const fetchSoftSkill = async (id) => {
        try {
            const response = await axios.get(`https://portfolio-vite.onrender.com/softSkills/${id}`);
            setSoftSkill(response.data);
        } catch (err) {
            console.error("Error al obtener los datos de la habilidad blanda:", err);
        }
    };

    const handleDelete = async (id) => {
        if (!token) {
            console.log("Debes estar autenticado para eliminar la habilidad.");
            navigate("/");
            return;
        }

        try {
            const response = await axios.delete(`https://portfolio-vite.onrender.com/softSkills/protected/deleteSoftSkill/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 200) {
                navigate("/");
            } else {
                console.log("No se pudo eliminar la habilidad blanda.");
            }
        } catch (err) {
            console.error("Error al intentar borrar la habilidad blanda:", err);
        }
    };

    return {
        softSkill,
        handleDelete,
        fetchSoftSkill
    };
}

export default UseDeleteSoftSkill;