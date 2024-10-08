import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UseUpdateEducation(token, userId) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchEducation = async (id) => {
        try {
            const response = await axios.get(`https://portfolio-vite.onrender.com/educations/${id}`);
            const education = response.data;

            if (!education) {
                setError("Trabajo no encontrado");
                return;
            }

            setTitle(education.title);
            setImage(education.image);
        } catch (err) {
            setError("Error al obtener los datos de la educación.");
            console.error("Error al obtener los datos de la educación:", err);
        }
    };

    const handleUpdate = async (id) => {
        if (!token) {
            console.log("Debes estar autenticado para editar la educación.");
            navigate("/");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("image", image);
            formData.append("userId", userId);

            const response = await axios.put(`https://portfolio-vite.onrender.com/educations/protected/updateEducation/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }
            });

            if (response.status === 200) {
                navigate("/");
            } else {
                setError("No se pudo editar la educación.");
                console.log("No se pudo editar la educación.");
            }
        } catch (err) {
            setError("Error al actualizar la educación.");
            console.error("Error al actualizar la educación:", err);
        }
    };

    const handleSaveEducationImage = (e) => {
        setImage(e.target.files[0]);
    };

    return {
        title,
        setTitle,
        image,
        handleSaveEducationImage,
        handleUpdate,
        fetchEducation,
        error,
    };
}

export default UseUpdateEducation;