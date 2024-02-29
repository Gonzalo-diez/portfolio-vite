import React, { useState } from 'react';
import Home from './Home/Home';
import About from './About/About';
import Curriculum from './CV/Curriculum';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Layout from './Footer/Layout';
import Menu from './Menu/Menu';
import Skills from './Skills/Skills';
import Work from './Works/Work';
import "./CSS/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [language, setLanguage] = useState('es');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  }

  return (
    <>
      <Menu changeLanguage={changeLanguage} language={language} />
      <Layout>
        <Home language={language} />
        <About language={language} />
        <Skills language={language} />
        <Education language={language} />
        <Work language={language} />
        <Contact language={language} />
        <Curriculum language={language} />
      </Layout>
    </>
  )
}

export default App