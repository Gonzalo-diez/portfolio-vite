import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UseUpdateSoftSkill(token, userId, id) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [sub, setSub] = useState("");
    const [percentage, setPercentage] = useState("");


    const fetchSoftSkill = async (id) => {
        try {
            const response = await axios.get(`https://portfolio-vite.onrender.com/softSkills/${id}`);
            const softSkill = response.data;

            console.log("Soft data:", softSkill);

            if (!softSkill) {
                console.error("Trabajo no encontrado");
                return;
            }

            setTitle(softSkill.title);
            setSub(softSkill.sub);
            setPercentage(softSkill.percentage);
        } catch (err) {
            console.error("Error al obtener los datos del trabajo:", err);
        }
    };

    const handleUpdate = async (id) => {
        if (!token) {
            console.log("Debes estar autenticado para editar el trabajo.");
            navigate("/");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("sub_title", sub);
            formData.append("percentage", percentage);
            formData.append("userId", userId);

            const response = await axios.put(`https://portfolio-vite.onrender.com/softSkills/protected/updateSoftSkills/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            });

            if (response.status === 200) {
                navigate("/");
            } else {
                console.log("No se pudo editar el trabajo.");
            }
        } catch (err) {
            console.error("Error al actualizar el trabajo:", err);
        }
    };

    return {
        title,
        setTitle,
        sub,
        setSub,
        percentage,
        setPercentage,
        fetchSoftSkill,
        handleUpdate
    };
}

export default UseUpdateSoftSkill;