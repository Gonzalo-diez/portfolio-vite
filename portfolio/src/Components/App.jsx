import React, { useState } from 'react';
import Cookies from "js-cookie";
import Layout from './Footer/Layout';
import Menu from './Menu/Menu';
import { Routes, Route } from 'react-router-dom';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Login from '../Pages/Login/Login';
import AddWork from '../Pages/Works/Add/AddWork';
import UpdateWork from '../Pages/Works/Update/UpdateWork';
import DeleteWork from '../Pages/Works/Delete/DeleteWork';
import AddHardSkill from '../Pages/Skills/Hard/Add/AddHardSkill';
import DeleteHardSkill from '../Pages/Skills/Hard/Delete/DeleteHardSkill';
import UpdateHardSkill from '../Pages/Skills/Hard/Update/UpdateHardSkill';
import AddSoftSkill from '../Pages/Skills/Soft/Add/AddSoftSkill';
import UpdateSoftSkill from '../Pages/Skills/Soft/Update/UpdateSoftSkill';
import DeleteSoftSkill from '../Pages/Skills/Soft/Delete/DeleteSoftSkill';
import AddEducation from '../Pages/Education/Add/AddEducation';
import UpdateEducation from '../Pages/Education/Update/UpdateEducation';
import DeleteEducation from '../Pages/Education/Delete/DeleteEducation';
import "./CSS/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const userId = Cookies.get('userId');
  const token = Cookies.get('jwtToken');

  const [language, setLanguage] = useState('es');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  }

  return (
    <>
      <Menu changeLanguage={changeLanguage} language={language} token={token} userId={userId} />
      <Layout>
        <Routes>
          <Route path='/' element={<Portfolio language={language} setUser={setUser} />} />
          <Route path='/user/login' element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
          <Route path='/works/protected/addWork' element={<AddWork token={token} isAuthenticated={isAuthenticated} user={user} userId={userId} />} />
          <Route path='/works/protected/updateWork/:id' element={<UpdateWork token={token} userId={userId} />} />
          <Route path='/works/protected/deleteWork/:id' element={<DeleteWork token={token} userId={userId} />} />
          <Route path='/hardSkills/protected/addHardSkill' element={<AddHardSkill token={token} isAuthenticated={isAuthenticated} user={user} userId={userId} />} />
          <Route path='/hardSkills/protected/updateHardSkill/:id' element={<UpdateHardSkill token={token} userId={userId} />} />
          <Route path='/hardSkills/protected/deleteHardSkill/:id' element={<DeleteHardSkill token={token} userId={userId} />} />
          <Route path='/softSkills/protected/addSoftSkill' element={<AddSoftSkill token={token} isAuthenticated={isAuthenticated} user={user} userId={userId} />} />
          <Route path='/softSkills/protected/updateSoftSkill/:id' element={<UpdateSoftSkill token={token} userId={userId} />} />
          <Route path='/softSkills/protected/deleteSoftSkill/:id' element={<DeleteSoftSkill token={token} userId={userId} />} />
          <Route path='/educations/protected/addEducation' element={<AddEducation token={token} isAuthenticated={isAuthenticated} user={user} userId={userId} />} />
          <Route path='/educations/protected/updateEducation/:id' element={<UpdateEducation token={token} userId={userId} />} />
          <Route path='/educations/protected/deleteEducation/:id' element={<DeleteEducation token={token} userId={userId} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App;