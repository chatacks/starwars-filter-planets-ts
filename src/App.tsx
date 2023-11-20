import React, { useContext, useEffect } from 'react';
import './App.css';
import getPlanetsWithoutResidents from './services/getPlanetsWithoutResidents';
import PlanetsContext from './context/PlanetsContext';
import Table from './components/Table';
import FilterInput from './components/FilterInput';

function App() {
  const { recoveryPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    const getResultPlanets = async () => {
      const planetsData = await getPlanetsWithoutResidents();
      recoveryPlanets(planetsData);
    };
    getResultPlanets();
  }, []);

  return (
    <div>
      <FilterInput />
      <Table />
    </div>
  );
}

export default App;
