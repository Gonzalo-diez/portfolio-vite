import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Layout from "./Footer/Layout";
import Menu from "./Menu/Menu";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Login from "../Pages/Login/Login";
import AddWork from "../Pages/Works/Add/AddWork";
import UpdateWork from "../Pages/Works/Update/UpdateWork";
import DeleteWork from "../Pages/Works/Delete/DeleteWork";
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
        </Routes>
      </Layout>
    </>
  );
}

export default App;