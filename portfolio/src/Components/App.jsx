import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Footer/Layout";
import Menu from "./Menu/Menu";
import Portfolio from "../Pages/Portfolio/Portfolio";
import "./CSS/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [language, setLanguage] = useState("es");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <Menu
        changeLanguage={changeLanguage}
        language={language}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Portfolio language={language} />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;