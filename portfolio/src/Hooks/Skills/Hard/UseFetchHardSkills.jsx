import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UseFetchHardSkills(token) {
    const [hardSkills, setHardSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHardSkills = async () => {
            try {
                const hardRes = await axios.get("http://localhost:8800/hardSkills/");
                setHardSkills(hardRes.data);
                console.log("Habilidades duras:", hardRes.data);
            } catch (err) {
                setError("Error al obtener las habilidades duras.");
                console.error("Error al obtener las habilidades duras:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchHardSkills();
    }, []);

    const handleDeleteHardSkill = async (hardId) => {
        try {
            navigate(`/hardSkills/protected/deleteHardSkill/${hardId}`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdateHardSkill = (hardId) => {
        try {
            navigate(`/hardSkills/protected/updateHardSkill/${hardId}`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddHardSkill = () => {
        navigate('/hardSkills/protected/addHardSkill');
    };

    return {
        hardSkills,
        loading,
        error,
        handleDeleteHardSkill,
        handleUpdateHardSkill,
        handleAddHardSkill
    };
}

export default UseFetchHardSkills;