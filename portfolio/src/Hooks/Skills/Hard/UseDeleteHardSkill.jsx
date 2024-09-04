import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UseDeleteHardSkill(token, id) {
    const [hardSkill, setHardSkill] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchHardSkill = async (id) => {
        try {
            const response = await axios.get(`https://portfolio-vite.onrender.com/hardSkills/${id}`);
            setHardSkill(response.data);
        } catch (err) {
            setError("Error al obtener los datos de la habilidad dura.");
            console.error("Error al obtener los datos de la habilidad dura:", err);
        }
    };

    const handleDelete = async (id) => {
        if (!token) {
            console.log("Debes estar autenticado para eliminar la habilidad dura.");
            navigate("/");
            return;
        }

        try {
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
        }
    };

    return {
        hardSkill,
        error,
        fetchHardSkill,
        handleDelete
    };
}

export default UseDeleteHardSkill;