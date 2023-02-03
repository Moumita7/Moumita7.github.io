import './App.css';
import About from './components/About';
import Calender from './components/Calender';
import Contact from './components/Contact';
import Intro from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Star from './components/Star';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">

   <Navbar/>
   <Intro/>
    <About/>
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
