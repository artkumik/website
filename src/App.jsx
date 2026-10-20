import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageMetadata from './components/PageMetadata';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <PageMetadata />
        <Navbar />
        <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
        <footer className="site-footer">
          <p>Artur Kumik</p>
          <div><a href="https://github.com/artkumik" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://linkedin.com/in/artur-kumik-8a9a88236/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="mailto:artkumik@gmail.com">Email</a></div>
        </footer>
      </div>
    </Router>
  );
}

export default App;