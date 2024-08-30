import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UseDeleteSoftSkill(token, id) {
    const [softSkill, setSoftSkill] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSoftSkill = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/softSkills/${id}`);
                setSoftSkill(response.data);
            } catch (err) {
                console.error("Error al obtener los datos de la habilidad blanda:", err);
            }
        };

        fetchSoftSkill();
    }, [id]);

    const handleDelete = async () => {
        if (!token) {
            console.log("Debes estar autenticado para eliminar la habilidad.");
            navigate("/");
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:8800/softSkills/protected/deleteSoftSkill/${id}`, {
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
        handleDelete
    };
}

export default UseDeleteSoftSkill;