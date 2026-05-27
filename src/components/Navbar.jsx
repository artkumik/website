import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Artur Kumik</Link>
        <ul className="nav-menu">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about')}>About</Link></li>
          <li><Link to="/experience" className={isActive('/experience')}>Experience</Link></li>
          <li><Link to="/projects" className={isActive('/projects')}>Projects</Link></li>
          <li><Link to="/publications" className={isActive('/publications')}>Publications</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;