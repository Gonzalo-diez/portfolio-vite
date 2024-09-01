import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UseUpdateHardSkill(token, userId) {
    const [title, setTitle] = useState("");
    const [percentage, setPercentage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchHardSkill = async (id) => {
        try {
            const response = await axios.get(`https://portfolio-vite.onrender.com/hardSkills/${id}`);
            const hardSkill = response.data;

            if (!hardSkill) {
                console.error("Habilidad dura no encontrada");
                return;
            }

            setTitle(hardSkill.title);
            setPercentage(hardSkill.percentage);
        } catch (err) {
            setError("Error al obtener los datos de la habilidad dura.");
            console.error("Error al obtener los datos de la habilidad dura:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (id) => {
        if (!token) {
            console.log("Debes estar autenticado para editar la habilidad dura.");
            navigate("/");
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("title", title);
            formData.append("percentage", percentage);
            formData.append("userId", userId);

            const response = await axios.put(`https://portfolio-vite.onrender.com/hardSkills/protected/updateHardSkill/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }
            });

            if (response.status === 200) {
                navigate("/");
            } else {
                setError("No se pudo editar la habilidad dura.");
                console.log("No se pudo editar la habilidad dura.");
            }
        } catch (err) {
            setError("Error al actualizar la habilidad dura.");
            console.error("Error al actualizar la habilidad dura:", err);
        } finally {
            setLoading(false);
        }
    };

    return {
        title,
        percentage,
        loading,
        error,
        setTitle,
        setPercentage,
        fetchHardSkill,
        handleUpdate
    };
}

export default UseUpdateHardSkill;