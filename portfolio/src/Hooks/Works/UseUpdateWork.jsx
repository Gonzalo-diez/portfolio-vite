import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UseUpdateWork(token, userId) {
    const [title, setTitle] = useState("");
    const [sub, setSub] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchWork = async (id) => {
        try {
            const response = await axios.get(`https://portfolio-vite.onrender.com/works/${id}`);
            const work = response.data;

            if (!work) {
                setError("Trabajo no encontrado");
                return;
            }

            setTitle(work.title);
            setSub(work.sub);
            setLink(work.link);
            setImage(work.image);
        } catch (err) {
            setError("Error al obtener los datos del trabajo");
            console.error("Error al obtener los datos del trabajo:", err);
        }
    };

    const handleSaveWorkImage = (e) => {
        setImage(e.target.files[0]);
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
            formData.append("link", link);
            formData.append("image", image);
            formData.append("userId", userId);

            const response = await axios.put(`https://portfolio-vite.onrender.com/works/protected/updateWork/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }
            });

            if (response.status === 200) {
                navigate("/");
            } else {
                setError("No se pudo editar el trabajo.");
                console.log("No se pudo editar el trabajo.");
            }
        } catch (err) {
            setError("Error al actualizar el trabajo.");
            console.error("Error al actualizar el trabajo:", err);
        }
    };

    return {
        title,
        setTitle,
        sub,
        setSub,
        link,
        setLink,
        image,
        handleSaveWorkImage,
        error,
        handleUpdate,
        fetchWork
    };
}

export default UseUpdateWork;