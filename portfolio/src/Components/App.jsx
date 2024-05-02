import React, { useState } from 'react';
import Layout from './Footer/Layout';
import Menu from './Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio/Portfolio';
import Login from './Login/Login';
import AddWork from './Works/Add/AddWork';
import UpdateWork from './Works/Update/UpdateWork';
import DeleteWork from './Works/Delete/DeleteWork';
import AddHardSkill from './Skills/Hard/Add/AddHardSkill';
import DeleteHardSkill from './Skills/Hard/Delete/DeleteHardSkill';
import UpdateHardSkill from './Skills/Hard/Update/UpdateHardSkill';
import AddSoftSkill from './Skills/Soft/Add/AddSoftSkill';
import UpdateSoftSkill from './Skills/Soft/Update/UpdateSoftSkill';
import DeleteSoftSkill from './Skills/Soft/Delete/DeleteSoftSkill';
import AddEducation from './Education/Add/AddEducation';
import UpdateEducation from './Education/Update/UpdateEducation';
import DeleteEducation from './Education/Delete/DeleteEducation';
import "./CSS/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const token = localStorage.getItem("jwtToken");
  const [language, setLanguage] = useState('es');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  }

  return (
    <>
      <Menu changeLanguage={changeLanguage} language={language} token={token} />
      <Layout>
        <Routes>
          <Route path='/' element={<Portfolio language={language} token={token} setUser={setUser} />} />
          <Route path='/user/login' element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
          <Route path='/works/protected/addWork' element={<AddWork token={token} isAuthenticated={isAuthenticated} user={user} />} />
          <Route path='/works/protected/updateWork/:id' element={<UpdateWork token={token} />} />
          <Route path='/works/protected/deleteWork/:id' element={<DeleteWork token={token} />} />
          <Route path='/hardSkills/protected/addHardSkill' element={<AddHardSkill token={token} isAuthenticated={isAuthenticated} user={user} />} />
          <Route path='/hardSkills/protected/updateHardSkill/:id' element={<UpdateHardSkill token={token} />} />
          <Route path='/hardSkills/protected/deleteHardSkill/:id' element={<DeleteHardSkill token={token} />} />
          <Route path='/softSkills/protected/addSoftSkill' element={<AddSoftSkill token={token} isAuthenticated={isAuthenticated} user={user} />} />
          <Route path='/softSkills/protected/updateSoftSkill/:id' element={<UpdateSoftSkill token={token} />} />
          <Route path='/softSkills/protected/deleteSoftSkill/:id' element={<DeleteSoftSkill token={token} />} />
          <Route path='/educations/protected/addEducation' element={<AddEducation token={token} isAuthenticated={isAuthenticated} user={user} />} />
          <Route path='/educations/protected/updateEducation/:id' element={<UpdateEducation token={token} />} />
          <Route path='/educations/protected/deleteEducation/:id' element={<DeleteEducation token={token} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App