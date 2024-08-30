import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UseDeleteWork(id, token) {
    const [work, setWork] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWork = async () => {
            try {
                const workData = await axios.get(`http://localhost:8800/works/${id}`);
                setWork(workData.data);
            } catch (err) {
                setError("Error al obtener los datos del trabajo");
                console.error("Error al obtener los datos del trabajo:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchWork();
    }, [id]);

    const handleDelete = async () => {
        if (!token) {
            console.log("Debes estar autenticado para eliminar el trabajo.");
            navigate("/");
            return;
        }

        try {
            const response = await axios.delete(`http://localhost:8800/works/protected/deleteWork/${id}`, {
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
    };
}

export default UseDeleteWork;