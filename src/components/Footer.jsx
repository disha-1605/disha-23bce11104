import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MedExpert</h3>
            <p>Your trusted expert system for medical prescriptions based on symptoms.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/symptom-checker">Symptom Checker</Link></li>
              <li><Link to="/prescription">Prescription</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Important Notice</h4>
            <p>This system is for informational purposes only. Always consult with a healthcare professional before taking any medication.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MedExpert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

