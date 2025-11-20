import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Certifications from './components/Sections/Certifications';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Quantum from './components/Sections/Quantum';
import Contact from './components/Sections/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Quantum />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
