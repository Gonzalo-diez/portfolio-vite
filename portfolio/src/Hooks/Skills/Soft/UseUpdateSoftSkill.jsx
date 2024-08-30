import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../Components/Context/authContext';

function UseUpdateSoftSkill(token) {
    const { id } = useParams();
    const { userId } = useAuth();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [sub, setSub] = useState("");
    const [percentage, setPercentage] = useState("");

    useEffect(() => {
        const fetchSoftSkill = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/softSkills/${id}`);
                const softSkill = response.data;

                if (!softSkill) {
                    console.error("Trabajo no encontrado");
                    return;
                }

                setTitle(softSkill.title);
                setSub(softSkill.sub_title); // Cambiado a `sub_title` para que coincida con el nombre en la API
                setPercentage(softSkill.percentage);
            } catch (err) {
                console.error("Error al obtener los datos del trabajo:", err);
            }
        };

        fetchSoftSkill();
    }, [id]);

    const handleUpdate = async () => {
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

            const response = await axios.put(`http://localhost:8800/softSkills/protected/updateSoftSkills/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
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
        handleUpdate
    };
}

export default UseUpdateSoftSkill;