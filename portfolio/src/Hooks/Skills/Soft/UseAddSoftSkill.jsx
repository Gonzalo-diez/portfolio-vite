import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UseAddSoftSkill(token, userId) {
    const [title, setTitle] = useState("");
    const [sub, setSub] = useState("");
    const [percentage, setPercentage] = useState("");
    const navigate = useNavigate();

    const handleAddSoftSkill = async () => {
        if (!token) {
            console.log("Debes estar autenticado para agregar la habilidad.");
            navigate("/");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("sub_title", sub);
            formData.append("percentage", percentage);
            formData.append("userId", userId);

            const response = await axios.post("http://localhost:8800/softSkills/protected/addSoftSkill", formData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                navigate("/");
            } else {
                console.log("Error al intentar subir la habilidad blanda.");
            }
        } catch (err) {
            console.error("Error al agregar la habilidad blanda:", err);
        }
    };

    return {
        title,
        setTitle,
        sub,
        setSub,
        percentage,
        setPercentage,
        handleAddSoftSkill
    };
}

export default UseAddSoftSkill;