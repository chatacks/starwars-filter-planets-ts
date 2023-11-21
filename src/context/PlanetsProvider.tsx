import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import { FormDataType, PlanetsAPI, PlanetsProviderProps } from '../types';
import { initialFormValue } from '../utils/formDataValue';
import getPlanetsWithoutResidents from '../services/getPlanetsWithoutResidents';

function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [planets, setPlanets] = useState<PlanetsAPI[]>([]);
  const [planetsFiltred, setPlanetsFiltred] = useState<PlanetsAPI[]>([]);
  const [formData, setFormData] = useState<FormDataType>(initialFormValue);

  const { planetName, columns, operator, valueInput } = formData;

  // const recoveryPlanets = (dataPlanets: PlanetsAPI[]) => {
  //   setPlanets(dataPlanets);
  // };

  useEffect(() => {
    const getResultPlanets = async () => {
      const data = await getPlanetsWithoutResidents();
      setPlanets(data);
      setPlanetsFiltred(data);
    };
    getResultPlanets();
  }, []);

  const handleFormChange = (event:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredPlanetsName = () => {
    const result = planetName.length > 0
      ? planets.filter((planet) => (planet.name.toLowerCase().includes(planetName)))
      : [];
    return result;
  };

  const filteredColumns = () => {
    const result = planets.filter((planet) => {
      const columnsPlanet = planet[columns as keyof PlanetsAPI];
      switch (operator) {
        case 'maior que':
          return Number(columnsPlanet) > Number(valueInput);

        case 'menor que':
          return Number(columnsPlanet) < Number(valueInput);

        case 'igual a':
          return Number(columnsPlanet) === Number(valueInput);

        default:
          return [];
      }
    });
    setPlanetsFiltred(result);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    filteredColumns();
    setFormData(initialFormValue);
  };

  const value = {
    // recoveryPlanets,
    handleFormChange,
    handleFormSubmit,
    filteredColumns,
    planetsFiltred,
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
