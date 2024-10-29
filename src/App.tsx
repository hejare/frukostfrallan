// src/App.tsx
import React from 'react';
import Map from './Map';

const places = [
  { id: 1, name: 'Bageri Norrmalm', latitude: 59.3364848, longitude: 18.0582029, specialty: 'Bäst Bang for the Buck', totalScore: 8, price: 35, breadScore: 7, condimentScore: 8, size: 10, environment: 8 },
  { id: 3, name: 'Espresso House', latitude: 59.3365668, longitude: 18.0588724, specialty: 'Det är vad det är', totalScore: 5, price: 39, breadScore: 5, condimentScore: 5, size: 6, environment: 5  },
  { id: 4, name: 'Caffé Nero', latitude: 59.33590662133987, longitude: 18.05950123923368, specialty: 'Stabil frukostfralla', totalScore: 7, price: 39, breadScore: 7, condimentScore: 7, size: 7, environment: 5  },
  { id: 5, name: 'S:T Paul', latitude: 59.33719278981067, longitude: 18.058005074273787, specialty: 'Bra, men lite pricy', totalScore: 6, price: 55, breadScore: 8, condimentScore: 6, size: 7, environment: 7  },
  { id: 6, name: 'Le Violin Dingue', latitude: 59.3362599, longitude: 18.06137398, specialty: 'Stans bästa Ostfralla', totalScore: 8, price: 45, breadScore: 9, condimentScore: 7, size: 8, environment: 8  },
  { id: 7, name: 'Fabrique', latitude: 59.33637208709206, longitude: 18.06241233164948, specialty: 'Kvalitétsfralla, men pricy', totalScore: 7, price: 55, breadScore: 8, condimentScore: 8, size: 8, environment: 7  },
  { id: 8, name: 'Fabrique', latitude: 59.33814656912433, longitude: 18.057251111414782, specialty: 'Kvalitétsfralla, men pricy', totalScore: 7, price: 55, breadScore: 8, condimentScore: 8, size: 8, environment: 7  },
  { id: 9, name: 'Gast', latitude: 59.33974702638544, longitude: 18.056673049755453, specialty: 'Stans bästa Ost- & Skinkfralla', totalScore: 9, price: 55, breadScore: 10, condimentScore: 9, size: 8, environment: 8  },
  { id: 10, name: 'Vete-Katten', latitude: 59.3337118, longitude: 18.056100, specialty: 'Old but mid', totalScore: 6, price: 48, breadScore: 6, condimentScore: 5, size: 7, environment: 8  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Frukostfrallan</h1>
      <Map places={places} />
    </div>
  );
};

export default App;
