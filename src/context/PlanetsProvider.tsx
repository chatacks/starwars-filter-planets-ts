import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';
import { FormDataType, PlanetsAPI, PlanetsProviderProps } from '../types';
import { initialFormValue } from '../utils/formDataValue';

function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [planets, setPlanets] = useState<PlanetsAPI[]>([]);
  const [formData, setFormData] = useState<FormDataType>(initialFormValue);

  const { planetName } = formData;

  const recoveryPlanets = (dataPlanets: PlanetsAPI[]) => {
    setPlanets(dataPlanets);
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredPlanetsName = planetName.length > 0
    ? planets.filter((planet) => (planet.name.toLowerCase().includes(planetName)))
    : [];

  const value = {
    recoveryPlanets,
    handleFormChange,
    planets,
    formData,
    filteredPlanetsName,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
