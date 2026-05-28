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
        <Link to="/" className="nav-logo" onClick={closeMenu}>AK</Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/experience" className={isActive('/experience')} onClick={closeMenu}>Experience</Link></li>
          <li><Link to="/projects" className={isActive('/projects')} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/publications" className={isActive('/publications')} onClick={closeMenu}>Publications</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;