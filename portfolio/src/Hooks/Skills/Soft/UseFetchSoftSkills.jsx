import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UseFetchSoftSkills(token) {
    const [softSkills, setSoftSkills] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSoftSkills = async () => {
            try {
                const response = await axios.get("https://portfolio-vite.onrender.com/softSkills/");
                setSoftSkills(response.data);
            } catch (err) {
                console.error("Error al obtener las habilidades blandas:", err);
            }
        };

        fetchSoftSkills();
    }, []);

    const handleDeleteSoftSkill = async (softId) => {
        console.log(`Borrando soft skill: ${softId}`);
        try {
            navigate(`/softSkills/protected/deleteSoftSkill/${softId}`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateSoftSkill = (softId) => {
        console.log(`Editando soft skill: ${softId}`);
        try {
            navigate(`/softSkills/protected/updateSoftSkill/${softId}`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddSoftSkill = () => {
        navigate('/softSkills/protected/addSoftSkill');
    };

    return {
        softSkills,
        handleDeleteSoftSkill,
        handleUpdateSoftSkill,
        handleAddSoftSkill
    };
}

export default UseFetchSoftSkills;