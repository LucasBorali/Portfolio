
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import MainCover from './components/MainCover';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
     <Navbar />
     <MainCover />
     <Projects />
     <AboutMe />
     <Contact />
    </div>
  );
}

export default App;
