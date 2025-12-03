# MedExpert - Expert System for Medicine Prescription

MedExpert is an intelligent React.js application that helps users find appropriate medications based on their symptoms. It uses an expert system approach to match symptoms with recommended treatments.

## Features

- 🔍 **Symptom Analysis**: Comprehensive symptom checking with support for multiple symptoms
- 💊 **Medicine Recommendations**: Evidence-based medication suggestions with detailed information
- 📋 **Detailed Prescriptions**: Complete prescription details including dosage, frequency, and duration
- ⚡ **Quick & Easy**: User-friendly interface for quick symptom checking
- 🛡️ **Safety First**: Always emphasizes consulting healthcare professionals
- 📱 **Responsive Design**: Works seamlessly on all devices

## Technology Stack

- **React.js** - Frontend framework
- **React Router** - For navigation between pages
- **Vite** - Build tool and development server
- **CSS3** - Modern, responsive styling

## Installation

1. Navigate to the project directory:
```bash
cd project
```

2. Install dependencies (if not already installed):
```bash
npm install
```

## Running the Project

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
project/
├── src/
│   ├── components/      # Reusable components (Navbar, Footer)
│   ├── pages/           # Page components (Home, SymptomChecker, Prescription, About)
│   ├── utils/           # Utility functions (expertSystem.js)
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies and scripts
```

## Usage

1. **Home Page**: Overview of the application and features
2. **Symptom Checker**: Select symptoms from the list or add custom symptoms
3. **Prescription**: View recommended medications based on selected symptoms
4. **About**: Learn more about the application and important disclaimers

## Important Disclaimer

⚠️ **This application is for informational purposes only.** It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional before taking any medication.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.
