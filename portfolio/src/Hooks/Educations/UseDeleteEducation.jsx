import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UseDeleteEducation(token) {
    const [education, setEducation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchEducation = async (id) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://portfolio-vite.onrender.com/educations/${id}`);
            setEducation(response.data);
        } catch (err) {
            setError("Error al obtener los datos de la educación.");
            console.error("Error al obtener los datos de la educación:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!token) {
            console.log("Debes estar autenticado para eliminar la educación.");
            navigate("/");
            return;
        }

        try {
            setLoading(true);
            const response = await axios.delete(`https://portfolio-vite.onrender.com/educations/protected/deleteEducation/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                navigate("/");
            } else {
                setError("No se pudo eliminar la educación.");
                console.log("No se pudo eliminar la educación.");
            }
        } catch (err) {
            setError("Error al intentar borrar la educación.");
            console.error("Error al intentar borrar la educación:", err);
        } finally {
            setLoading(false);
        }
    };

    return {
        education,
        fetchEducation,
        handleDelete,
        loading,
        error,
    };
}

export default UseDeleteEducation;