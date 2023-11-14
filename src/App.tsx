import React, { useEffect } from 'react';
import './App.css';
import getPlanetsWithoutResidents from './services/getPlanetsWithoutResidents';

function App() {
  useEffect(() => {
    getPlanetsWithoutResidents();
  }, []);

  return (
    <div>Hello, App!</div>
  );
}

export default App;
