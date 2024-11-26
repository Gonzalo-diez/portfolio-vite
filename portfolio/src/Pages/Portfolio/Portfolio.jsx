import React, { useEffect, useState } from "react";
import Home from "../../Sections/Home/Home";
import About from "../../Sections/About/About";
import Curriculum from "../../Sections/CV/Curriculum";
import Contact from "../../Sections/Contact/Contact";

const LazyEducation = React.lazy(() => import("../../Sections/Education/Education"));
const LazySkills = React.lazy(() => import("../../Sections/Skills/Skills"));
const LazyWorks = React.lazy(() => import("../../Sections/Works/Works"));

function Portfolio({ language }) {
  const token = localStorage.getItem("jwtToken");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          axios.get("https://portfolio-vite.onrender.com/educations/"),
          axios.get("https://portfolio-vite.onrender.com/hardSkills/"),
          axios.get("https://portfolio-vite.onrender.com/softSkills/"),
          axios.get("https://portfolio-vite.onrender.com/works/"),
        ]);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <Home language={language} token={token} />
      <About language={language} token={token} />
      <LazySkills language={language} token={token} />
      <LazyEducation language={language} token={token} />
      <LazyWorks language={language} token={token} />
      <Contact language={language} token={token} />
      <Curriculum language={language} token={token} />
    </>
  );
}

export default Portfolio;
