import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">MedExpert</span>
          </h1>
          <p className="hero-subtitle">
            An intelligent expert system that helps you find appropriate medications 
            based on your symptoms
          </p>
          <div className="hero-buttons">
            <Link to="/symptom-checker" className="btn btn-primary">
              Check Symptoms Now
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Symptom Analysis</h3>
              <p>Enter your symptoms and get instant analysis with our expert system</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💊</div>
              <h3>Medicine Prescription</h3>
              <p>Receive appropriate medication recommendations with dosage and frequency</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Detailed Information</h3>
              <p>Get comprehensive details about medications, dosages, and duration</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Quick & Easy</h3>
              <p>Simple interface that makes it easy to find what you need</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safe & Reliable</h3>
              <p>Based on medical knowledge base and best practices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Accessible</h3>
              <p>Works on all devices - desktop, tablet, and mobile</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Enter Symptoms</h3>
              <p>Select or type your symptoms in the symptom checker</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>System Analysis</h3>
              <p>Our expert system analyzes your symptoms using medical knowledge</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Prescription</h3>
              <p>Receive recommended medications with detailed instructions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Start checking your symptoms and get expert recommendations</p>
          <Link to="/symptom-checker" className="btn btn-primary btn-large">
            Start Symptom Checker
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

