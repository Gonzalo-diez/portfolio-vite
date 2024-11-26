import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Footer/Layout";
import Menu from "./Menu/Menu";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Login from "../Pages/Login/Login";
import AddWork from "../Pages/Works/Add/AddWork";
import UpdateWork from "../Pages/Works/Update/UpdateWork";
import DeleteWork from "../Pages/Works/Delete/DeleteWork";
import AddHardSkill from "../Pages/Skills/Hard/Add/AddHardSkill";
import UpdateHardSkill from "../Pages/Skills/Hard/Update/UpdateHardSkill";
import DeleteHardSkill from "../Pages/Skills/Hard/Delete/DeleteHardSkill";
import AddSoftSkill from "../Pages/Skills/Soft/Add/AddSoftSkill";
import UpdateSoftSkill from "../Pages/Skills/Soft/Update/UpdateSoftSkill";
import DeleteSoftSkill from "../Pages/Skills/Soft/Delete/DeleteSoftSkill";
import AddEducation from "../Pages/Education/Add/AddEducation";
import UpdateEducation from "../Pages/Education/Update/UpdateEducation";
import DeleteEducation from "../Pages/Education/Delete/DeleteEducation";
import "./CSS/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const token = localStorage.getItem("jwtToken");
  const userId = localStorage.getItem("userId");

  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("es");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

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
      <Menu
        changeLanguage={changeLanguage}
        language={language}
        token={token}
        userId={userId}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Portfolio loading={loading} language={language} />} />
          <Route
            path="/user/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/works/protected/addWork"
            element={
              <AddWork
                token={token}
                isAuthenticated={isAuthenticated}
                userId={userId}
              />
            }
          />
          <Route
            path="/works/protected/updateWork/:id"
            element={<UpdateWork token={token} userId={userId} />}
          />
          <Route
            path="/works/protected/deleteWork/:id"
            element={<DeleteWork token={token} userId={userId} />}
          />
          <Route
            path="/hardSkills/protected/addHardSkill"
            element={
              <AddHardSkill
                token={token}
                isAuthenticated={isAuthenticated}
                userId={userId}
              />
            }
          />
          <Route
            path="/hardSkills/protected/updateHardSkill/:id"
            element={<UpdateHardSkill token={token} userId={userId} />}
          />
          <Route
            path="/hardSkills/protected/deleteHardSkill/:id"
            element={<DeleteHardSkill token={token} userId={userId} />}
          />
          <Route
            path="/softSkills/protected/addSoftSkill"
            element={
              <AddSoftSkill
                token={token}
                isAuthenticated={isAuthenticated}
                userId={userId}
              />
            }
          />
          <Route
            path="/softSkills/protected/updateSoftSkill/:id"
            element={<UpdateSoftSkill token={token} userId={userId} />}
          />
          <Route
            path="/softSkills/protected/deleteSoftSkill/:id"
            element={<DeleteSoftSkill token={token} userId={userId} />}
          />
          <Route
            path="/educations/protected/addEducation"
            element={
              <AddEducation
                token={token}
                isAuthenticated={isAuthenticated}
                userId={userId}
              />
            }
          />
          <Route
            path="/educations/protected/updateEducation/:id"
            element={<UpdateEducation token={token} userId={userId} />}
          />
          <Route
            path="/educations/protected/deleteEducation/:id"
            element={<DeleteEducation token={token} userId={userId} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;