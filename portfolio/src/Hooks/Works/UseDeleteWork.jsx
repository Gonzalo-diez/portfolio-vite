import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UseDeleteWork(token, id) {
    const { id } = useParams();
    const [work, setWork] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchWork = async (id) => {
        try {
            const workData = await axios.get(`https://portfolio-vite.onrender.com/works/${id}`);
            setWork(workData.data);
        } catch (err) {
            setError("Error al obtener los datos del trabajo");
            console.error("Error al obtener los datos del trabajo:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!token) {
            console.log("Debes estar autenticado para eliminar el trabajo.");
            navigate("/");
            return;
        }

        try {
            const response = await axios.delete(`https://portfolio-vite.onrender.com/works/protected/deleteWork/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 200) {
                navigate("/");
            } else {
                setError("No se pudo eliminar el trabajo.");
                console.log("No se pudo eliminar el trabajo.");
            }
        } catch (err) {
            setError("Error al intentar borrar el trabajo.");
            console.error("Error al intentar borrar el trabajo:", err);
        }
    };

    return {
        work,
        loading,
        error,
        handleDelete,
        fetchWork
    };
}

export default UseDeleteWork;