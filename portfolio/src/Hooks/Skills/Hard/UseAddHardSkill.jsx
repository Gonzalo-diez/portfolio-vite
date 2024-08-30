import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UseAddHardSkill(token, userId) {
    const [title, setTitle] = useState("");
    const [percentage, setPercentage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleAddHardSkill = async () => {
        if (!token) {
            console.log("Debes estar autenticado para agregar la habilidad dura.");
            navigate("/");
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("title", title);
            formData.append("percentage", Number(percentage));
            formData.append("userId", userId);

            const response = await axios.post("https://portfolio-vite.onrender.com/hardSkills/protected/addHardSkill", formData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                navigate("/");
            } else {
                setError("Error al intentar subir la habilidad dura.");
                console.log("Error al intentar subir la habilidad dura");
            }
        } catch (err) {
            setError("Error al agregar habilidad dura.");
            console.error("Error al agregar habilidad dura:", err);
        } finally {
            setLoading(false);
        }
    };

    return {
        title,
        setTitle,
        percentage,
        setPercentage,
        handleAddHardSkill,
        loading,
        error,
    };
}

export default UseAddHardSkill;