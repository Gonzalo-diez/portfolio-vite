import { useState, useEffect } from 'react';
import axios from 'axios';

function UseFetchWorks() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await axios.get("https://portfolio-vite.onrender.com/works/");
        setWorks(res.data);
      } catch (err) {
        console.error("Error al obtener los proyectos:", err);
      }
    };
    fetchWorks();
  }, []);

  return [works, setWorks];
}

export default UseFetchWorks;