import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}><span className="brand-mark" aria-hidden="true">ak</span>Artur Kumik</Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="main-navigation" className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/')} aria-current={location.pathname === '/' ? 'page' : undefined} onClick={closeMenu}>About</Link></li>
          <li><Link to="/experience" className={isActive('/experience')} aria-current={location.pathname === '/experience' ? 'page' : undefined} onClick={closeMenu}>Experience</Link></li>
          <li><Link to="/projects" className={isActive('/projects')} aria-current={location.pathname === '/projects' ? 'page' : undefined} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/publications" className={isActive('/publications')} aria-current={location.pathname === '/publications' ? 'page' : undefined} onClick={closeMenu}>Publications</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} aria-current={location.pathname === '/contact' ? 'page' : undefined} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;