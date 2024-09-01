import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UseDeleteHardSkill(token, id) {
    const [hardSkill, setHardSkill] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchHardSkill = async (id) => {
        try {
            const response = await axios.get(`https://portfolio-vite.onrender.com/hardSkills/${id}`);
            setHardSkill(response.data);
        } catch (err) {
            setError("Error al obtener los datos de la habilidad dura.");
            console.error("Error al obtener los datos de la habilidad dura:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!token) {
            console.log("Debes estar autenticado para eliminar la habilidad dura.");
            navigate("/");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.delete(`https://portfolio-vite.onrender.com/hardSkills/protected/deleteHardSkill/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 200) {
                navigate("/");
            } else {
                setError("No se pudo eliminar la habilidad dura.");
                console.log("No se pudo eliminar la habilidad dura.");
            }
        } catch (err) {
            setError("Error al intentar borrar la habilidad dura.");
            console.error("Error al intentar borrar la habilidad dura:", err);
        } finally {
            setLoading(false);
        }
    };

    return {
        hardSkill,
        loading,
        error,
        fetchHardSkill,
        handleDelete
    };
}

export default UseDeleteHardSkill;