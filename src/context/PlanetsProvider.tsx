import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';
import { PlanetsAPI, PlanetsProviderProps } from '../types';

function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [planets, setPlanets] = useState<PlanetsAPI[]>([]);

  const recoveryPlanets = (dataPlanets: PlanetsAPI[]) => {
    setPlanets(dataPlanets);
  };

  const value = {
    recoveryPlanets,
    planets,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
