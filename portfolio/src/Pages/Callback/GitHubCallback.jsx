import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const GitHubCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Extrae el token y el userId de las cookies
        const token = Cookies.get('jwtToken');
        const userId = Cookies.get('userId');

        if (token && userId) {
            // Almacena el token y el userId en el estado global o en el contexto
            // Redirige a la página deseada
            navigate('/');
        } else {
            // Maneja el error si el token no está presente
            navigate('/login');
        }
    }, [navigate]);

    return <div>Redirigiendo...</div>;
};

export default GitHubCallback;