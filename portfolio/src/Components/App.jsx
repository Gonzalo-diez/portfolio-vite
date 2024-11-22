import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './Footer/Layout';
import Menu from './Menu/Menu';
import './CSS/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy load pages
const Portfolio = lazy(() => import('../Pages/Portfolio/Portfolio'));
const Login = lazy(() => import('../Pages/Login/Login'));
const AddWork = lazy(() => import('../Pages/Works/Add/AddWork'));
const UpdateWork = lazy(() => import('../Pages/Works/Update/UpdateWork'));
const DeleteWork = lazy(() => import('../Pages/Works/Delete/DeleteWork'));
const AddHardSkill = lazy(() => import('../Pages/Skills/Hard/Add/AddHardSkill'));
const UpdateHardSkill = lazy(() => import('../Pages/Skills/Hard/Update/UpdateHardSkill'));
const DeleteHardSkill = lazy(() => import('../Pages/Skills/Hard/Delete/DeleteHardSkill'));
const AddSoftSkill = lazy(() => import('../Pages/Skills/Soft/Add/AddSoftSkill'));
const UpdateSoftSkill = lazy(() => import('../Pages/Skills/Soft/Update/UpdateSoftSkill'));
const DeleteSoftSkill = lazy(() => import('../Pages/Skills/Soft/Delete/DeleteSoftSkill'));
const AddEducation = lazy(() => import('../Pages/Education/Add/AddEducation'));
const UpdateEducation = lazy(() => import('../Pages/Education/Update/UpdateEducation'));
const DeleteEducation = lazy(() => import('../Pages/Education/Delete/DeleteEducation'));

function App() {
  const token = localStorage.getItem("jwtToken");
  const userId = localStorage.getItem("userId");

  const [language, setLanguage] = useState('es');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  }

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
    )
  }

  return (
    <>
      <Menu changeLanguage={changeLanguage} language={language} token={token} userId={userId} />
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Portfolio language={language} />} />
            <Route path='/user/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path='/works/protected/addWork' element={<AddWork token={token} isAuthenticated={isAuthenticated} userId={userId} />} />
            <Route path='/works/protected/updateWork/:id' element={<UpdateWork token={token} userId={userId} />} />
            <Route path='/works/protected/deleteWork/:id' element={<DeleteWork token={token} userId={userId} />} />
            <Route path='/hardSkills/protected/addHardSkill' element={<AddHardSkill token={token} isAuthenticated={isAuthenticated} userId={userId} />} />
            <Route path='/hardSkills/protected/updateHardSkill/:id' element={<UpdateHardSkill token={token} userId={userId} />} />
            <Route path='/hardSkills/protected/deleteHardSkill/:id' element={<DeleteHardSkill token={token} userId={userId} />} />
            <Route path='/softSkills/protected/addSoftSkill' element={<AddSoftSkill token={token} isAuthenticated={isAuthenticated} userId={userId} />} />
            <Route path='/softSkills/protected/updateSoftSkill/:id' element={<UpdateSoftSkill token={token} userId={userId} />} />
            <Route path='/softSkills/protected/deleteSoftSkill/:id' element={<DeleteSoftSkill token={token} userId={userId} />} />
            <Route path='/educations/protected/addEducation' element={<AddEducation token={token} isAuthenticated={isAuthenticated} userId={userId} />} />
            <Route path='/educations/protected/updateEducation/:id' element={<UpdateEducation token={token} userId={userId} />} />
            <Route path='/educations/protected/deleteEducation/:id' element={<DeleteEducation token={token} userId={userId} />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App;