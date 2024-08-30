import { useState, useEffect } from 'react';
import axios from 'axios';

function UseFetchEducations() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const res = await axios.get("http://localhost:8800/educations/");
        console.log("Educacion:", res.data);
        setEducations(res.data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      }
    };
    fetchEducations();
  }, []);

  return [educations, setEducations];
}

export default UseFetchEducations;