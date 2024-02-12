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

  return (
    <>
      <Menu />
      <Layout>
        <Home />
        <About />
        <Skills />
        <Education />
        <Work />
        <Contact />
        <Curriculum />
      </Layout>
    </>
  )
}

export default App