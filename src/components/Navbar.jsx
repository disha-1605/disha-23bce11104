import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">💊</span>
          MedExpert
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/symptom-checker" 
              className={`navbar-link ${location.pathname === '/symptom-checker' ? 'active' : ''}`}
            >
              Symptom Checker
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/prescription" 
              className={`navbar-link ${location.pathname === '/prescription' ? 'active' : ''}`}
            >
              Prescription
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

