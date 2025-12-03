// Expert System Knowledge Base
// Symptom to Medicine Mapping

export const symptomMedicineMap = {
  // Fever related
  fever: {
    medicines: [
      { name: "Paracetamol", dosage: "500mg", frequency: "Every 6-8 hours", duration: "3-5 days" },
      { name: "Ibuprofen", dosage: "400mg", frequency: "Every 8 hours", duration: "3-5 days" }
    ],
    severity: "moderate",
    description: "Fever is a temporary increase in body temperature"
  },
  
  // Headache
  headache: {
    medicines: [
      { name: "Paracetamol", dosage: "500mg", frequency: "Every 6-8 hours", duration: "2-3 days" },
      { name: "Aspirin", dosage: "325mg", frequency: "Every 4-6 hours", duration: "2-3 days" }
    ],
    severity: "mild",
    description: "Pain in the head or upper neck"
  },
  
  // Cough
  cough: {
    medicines: [
      { name: "Dextromethorphan", dosage: "15mg", frequency: "Every 4-6 hours", duration: "5-7 days" },
      { name: "Guaifenesin", dosage: "200mg", frequency: "Every 4 hours", duration: "5-7 days" }
    ],
    severity: "moderate",
    description: "Reflex action to clear airways"
  },
  
  // Cold
  cold: {
    medicines: [
      { name: "Pseudoephedrine", dosage: "60mg", frequency: "Every 6 hours", duration: "5-7 days" },
      { name: "Chlorpheniramine", dosage: "4mg", frequency: "Every 6 hours", duration: "5-7 days" }
    ],
    severity: "mild",
    description: "Common viral infection of the nose and throat"
  },
  
  // Sore Throat
  soreThroat: {
    medicines: [
      { name: "Ibuprofen", dosage: "400mg", frequency: "Every 8 hours", duration: "3-5 days" },
      { name: "Throat Lozenges", dosage: "As needed", frequency: "Every 2-3 hours", duration: "3-5 days" }
    ],
    severity: "moderate",
    description: "Pain or irritation in the throat"
  },
  
  // Nausea
  nausea: {
    medicines: [
      { name: "Ondansetron", dosage: "4mg", frequency: "Every 8 hours", duration: "2-3 days" },
      { name: "Dimenhydrinate", dosage: "50mg", frequency: "Every 4-6 hours", duration: "2-3 days" }
    ],
    severity: "moderate",
    description: "Feeling of unease and discomfort"
  },
  
  // Diarrhea
  diarrhea: {
    medicines: [
      { name: "Loperamide", dosage: "2mg", frequency: "After each loose stool", duration: "2-3 days" },
      { name: "Oral Rehydration Solution", dosage: "As directed", frequency: "Frequently", duration: "Until resolved" }
    ],
    severity: "moderate",
    description: "Loose, watery stools"
  },
  
  // Stomach Pain
  stomachPain: {
    medicines: [
      { name: "Antacids", dosage: "As directed", frequency: "After meals", duration: "3-5 days" },
      { name: "Omeprazole", dosage: "20mg", frequency: "Once daily", duration: "5-7 days" }
    ],
    severity: "moderate",
    description: "Pain or discomfort in the abdomen"
  },
  
  // Muscle Pain
  musclePain: {
    medicines: [
      { name: "Ibuprofen", dosage: "400mg", frequency: "Every 8 hours", duration: "3-5 days" },
      { name: "Naproxen", dosage: "250mg", frequency: "Every 12 hours", duration: "3-5 days" }
    ],
    severity: "moderate",
    description: "Pain in muscles and soft tissues"
  },
  
  // Insomnia
  insomnia: {
    medicines: [
      { name: "Melatonin", dosage: "3mg", frequency: "Before bedtime", duration: "7-14 days" },
      { name: "Diphenhydramine", dosage: "25mg", frequency: "Before bedtime", duration: "7-14 days" }
    ],
    severity: "mild",
    description: "Difficulty falling or staying asleep"
  },
  
  // Allergy
  allergy: {
    medicines: [
      { name: "Cetirizine", dosage: "10mg", frequency: "Once daily", duration: "Until symptoms resolve" },
      { name: "Loratadine", dosage: "10mg", frequency: "Once daily", duration: "Until symptoms resolve" }
    ],
    severity: "mild",
    description: "Immune system reaction to a foreign substance"
  },
  
  // Joint Pain
  jointPain: {
    medicines: [
      { name: "Ibuprofen", dosage: "400mg", frequency: "Every 8 hours", duration: "5-7 days" },
      { name: "Acetaminophen", dosage: "500mg", frequency: "Every 6 hours", duration: "5-7 days" }
    ],
    severity: "moderate",
    description: "Pain in joints"
  },
  
  // Dizziness
  dizziness: {
    medicines: [
      { name: "Meclizine", dosage: "25mg", frequency: "Every 6-8 hours", duration: "3-5 days" },
      { name: "Dimenhydrinate", dosage: "50mg", frequency: "Every 4-6 hours", duration: "3-5 days" }
    ],
    severity: "moderate",
    description: "Feeling of unsteadiness or lightheadedness"
  }
};

// Function to get prescription based on symptoms
export const getPrescription = (selectedSymptoms) => {
  const prescriptions = [];
  const allMedicines = new Map();
  
  selectedSymptoms.forEach(symptom => {
    const symptomKey = symptom.toLowerCase().replace(/\s+/g, '');
    const data = symptomMedicineMap[symptomKey];
    
    if (data) {
      data.medicines.forEach(medicine => {
        const key = medicine.name.toLowerCase();
        if (!allMedicines.has(key)) {
          allMedicines.set(key, {
            ...medicine,
            symptoms: [symptom]
          });
        } else {
          allMedicines.get(key).symptoms.push(symptom);
        }
      });
      
      prescriptions.push({
        symptom: symptom,
        data: data
      });
    }
  });
  
  return {
    prescriptions: Array.from(allMedicines.values()),
    symptomDetails: prescriptions,
    totalSymptoms: selectedSymptoms.length
  };
};

// Get all available symptoms
export const getAllSymptoms = () => {
  return Object.keys(symptomMedicineMap).map(key => {
    const words = key.split(/(?=[A-Z])/);
    return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  });
};

