import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Contact from './pages/Contact'; // Corrected folder placement path
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} /> {/* Clean routing asset */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;