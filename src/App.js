
import './App.css';
import About from './components/About';
import Calender from './components/Calender';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Project from './components/Project';
import ProjectCard from './components/ProjectCard';
import Projects from './components/Projects';
import Star from './components/Star';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">

   <Navbar/>
   <Intro/>
    <About/>
    {/* <Project/> */}
    {/* <ProjectCard/> */}
    <Projects/>
    <TechStack/>
    <Calender/>
    <Star/>
    <Contact/>
    

    </div>
  );
}

export default App;


//npm run deploy
