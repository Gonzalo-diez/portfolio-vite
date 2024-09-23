import { useState, useEffect } from 'react';
import axios from 'axios';

function UseFetchEducations(setLoading) {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const res = await axios.get("https://portfolio-vite.onrender.com/educations/");
        setEducations(res.data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEducations();
  }, []);

  return [educations, setEducations];
}

export default UseFetchEducations;