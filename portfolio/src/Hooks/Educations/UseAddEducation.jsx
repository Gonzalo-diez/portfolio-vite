import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UseAddEducation(token, userId) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleAddEducation = async () => {
        if (!token) {
            console.log("Debes estar autenticado para agregar la educación.");
            navigate("/user/login");
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("title", title);
            formData.append("image", image);
            formData.append("userId", userId);

            const response = await axios.post("http://localhost:8800/educations/protected/addEducation", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                console.log(response.data);
                navigate("/");
            } else {
                setError("Error al intentar subir la educación.");
                console.log("Error al intentar subir la educación.");
            }
        } catch (err) {
            setError("Error al agregar la educación.");
            console.error("Error al agregar la educación:", err);
        } finally {
            setLoading(false);
        }
    };

    return {
        title,
        setTitle,
        image,
        setImage,
        loading,
        error,
        handleAddEducation,
    };
}

export default UseAddEducation;