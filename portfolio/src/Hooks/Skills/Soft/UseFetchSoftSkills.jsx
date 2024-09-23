import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UseFetchSoftSkills(setLoading) {
    const [softSkills, setSoftSkills] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSoftSkills = async () => {
            try {
                const response = await axios.get("https://portfolio-vite.onrender.com/softSkills/");
                setSoftSkills(response.data);
            } catch (err) {
                console.error("Error al obtener las habilidades blandas:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSoftSkills();
    }, []);

    const handleDeleteSoftSkill = async (softId) => {
        try {
            navigate(`/softSkills/protected/deleteSoftSkill/${softId}`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateSoftSkill = (softId) => {
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