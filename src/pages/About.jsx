import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title">About MedExpert</h1>
        
        <section className="about-section">
          <h2>What is MedExpert?</h2>
          <p>
            MedExpert is an intelligent expert system designed to help users find appropriate 
            medications based on their symptoms. It uses a knowledge base of medical information 
            to provide recommendations for common ailments and their treatments.
          </p>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <p>
            Our expert system uses a rule-based approach to match symptoms with appropriate 
            medications. When you enter your symptoms, the system analyzes them against its 
            knowledge base and provides:
          </p>
          <ul>
            <li>Recommended medications</li>
            <li>Proper dosages</li>
            <li>Frequency of administration</li>
            <li>Duration of treatment</li>
            <li>Symptom severity assessment</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <h3>🔍 Symptom Analysis</h3>
              <p>Comprehensive symptom checking with multiple symptom support</p>
            </div>
            <div className="feature-item">
              <h3>💊 Medicine Recommendations</h3>
              <p>Evidence-based medication suggestions with detailed information</p>
            </div>
            <div className="feature-item">
              <h3>📋 Detailed Prescriptions</h3>
              <p>Complete prescription details including dosage and frequency</p>
            </div>
            <div className="feature-item">
              <h3>⚡ Quick & Easy</h3>
              <p>User-friendly interface for quick symptom checking</p>
            </div>
            <div className="feature-item">
              <h3>🛡️ Safety First</h3>
              <p>Always emphasizes consulting healthcare professionals</p>
            </div>
            <div className="feature-item">
              <h3>📱 Responsive Design</h3>
              <p>Works seamlessly on all devices</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Important Disclaimer</h2>
          <div className="disclaimer-box">
            <p>
              <strong>MedExpert is for informational purposes only.</strong> This system is not 
              a substitute for professional medical advice, diagnosis, or treatment. Always seek 
              the advice of your physician or other qualified health provider with any questions 
              you may have regarding a medical condition.
            </p>
            <p>
              Never disregard professional medical advice or delay in seeking it because of 
              something you have read or obtained from this system. If you think you may have a 
              medical emergency, call your doctor or emergency services immediately.
            </p>
            <p>
              The medications and dosages suggested by this system are general recommendations 
              and may not be appropriate for everyone. Individual medical conditions, allergies, 
              and other factors must be considered by a healthcare professional.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>Technology Stack</h2>
          <p>MedExpert is built using modern web technologies:</p>
          <ul className="tech-list">
            <li><strong>React.js</strong> - For building the user interface</li>
            <li><strong>React Router</strong> - For navigation between pages</li>
            <li><strong>Vite</strong> - For fast development and building</li>
            <li><strong>CSS3</strong> - For modern, responsive styling</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact & Support</h2>
          <p>
            For questions, suggestions, or support, please consult with a healthcare professional 
            for medical advice. For technical issues with the application, please refer to the 
            documentation or contact the development team.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

