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
import CustomCursor from './components/UI/CustomCursor';
import GrainOverlay from './components/UI/GrainOverlay';
import MarqueeText from './components/UI/MarqueeText';
import './App.css';

function App() {
  const marqueeItems = [
    'React', 'Python', 'AWS', 'Docker', 'Kubernetes',
    'Quantum Computing', 'AI/ML', 'Node.js', 'PostgreSQL',
    'Grafana', 'Qiskit', 'DevOps', 'TypeScript', 'Java',
  ];

  return (
    <ThemeProvider>
      <div className="App">
        <CustomCursor />
        <GrainOverlay />
        <Navigation />
        <Hero />
        <MarqueeText items={marqueeItems} speed={35} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Quantum />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
