import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllSymptoms, getPrescription } from '../utils/expertSystem';
import './SymptomChecker.css';

const SymptomChecker = () => {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [customSymptom, setCustomSymptom] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const availableSymptoms = getAllSymptoms();

  const filteredSymptoms = availableSymptoms.filter(symptom =>
    symptom.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedSymptoms.includes(symptom)
  );

  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const addCustomSymptom = () => {
    if (customSymptom.trim() && !selectedSymptoms.includes(customSymptom.trim())) {
      setSelectedSymptoms([...selectedSymptoms, customSymptom.trim()]);
      setCustomSymptom('');
    }
  };

  const removeSymptom = (symptom) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
  };

  const handleGetPrescription = () => {
    if (selectedSymptoms.length === 0) {
      alert('Please select at least one symptom');
      return;
    }
    
    // Store symptoms in sessionStorage and navigate
    sessionStorage.setItem('selectedSymptoms', JSON.stringify(selectedSymptoms));
    navigate('/prescription');
  };

  return (
    <div className="symptom-checker">
      <div className="container">
        <h1 className="page-title">Symptom Checker</h1>
        <p className="page-subtitle">
          Select your symptoms below. You can select multiple symptoms to get a comprehensive prescription.
        </p>

        <div className="checker-content">
          <div className="symptom-selection">
            <div className="search-section">
              <input
                type="text"
                placeholder="Search symptoms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="symptom-list">
              <h3>Available Symptoms</h3>
              <div className="symptom-grid">
                {filteredSymptoms.map((symptom, index) => (
                  <button
                    key={index}
                    onClick={() => toggleSymptom(symptom)}
                    className={`symptom-chip ${selectedSymptoms.includes(symptom) ? 'selected' : ''}`}
                  >
                    {symptom}
                    {selectedSymptoms.includes(symptom) && <span className="check-mark">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="custom-symptom-section">
              <h3>Add Custom Symptom</h3>
              <div className="custom-input-group">
                <input
                  type="text"
                  placeholder="Enter custom symptom..."
                  value={customSymptom}
                  onChange={(e) => setCustomSymptom(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCustomSymptom()}
                  className="custom-input"
                />
                <button onClick={addCustomSymptom} className="btn-add">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="selected-symptoms">
            <h3>Selected Symptoms ({selectedSymptoms.length})</h3>
            {selectedSymptoms.length === 0 ? (
              <p className="empty-message">No symptoms selected yet</p>
            ) : (
              <div className="selected-list">
                {selectedSymptoms.map((symptom, index) => (
                  <div key={index} className="selected-item">
                    <span>{symptom}</span>
                    <button
                      onClick={() => removeSymptom(symptom)}
                      className="btn-remove"
                      aria-label="Remove symptom"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleGetPrescription}
              className="btn-get-prescription"
              disabled={selectedSymptoms.length === 0}
            >
              Get Prescription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;

