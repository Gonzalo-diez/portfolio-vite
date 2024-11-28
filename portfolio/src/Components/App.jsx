import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Footer/Layout";
import Menu from "./Menu/Menu";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Login from "../Pages/Login/Login";
import AddWork from "../Pages/Works/Add/AddWork";
import UpdateWork from "../Pages/Works/Update/UpdateWork";
import DeleteWork from "../Pages/Works/Delete/DeleteWork";
import "./CSS/style.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const token = localStorage.getItem("jwtToken");
  const userId = localStorage.getItem("userId");

  const [language, setLanguage] = useState("es");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

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
          <Route path="/" element={<Portfolio language={language} />} />
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