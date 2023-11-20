import React from 'react';

export type PlanetsAPI = {
  climate: string,
  created: string,
  diameter: string,
  edited: string,
  films: string[],
  gravity: string,
  name: string,
  orbital_period: string,
  population: string,
  rotation_period: string,
  surface_water: string,
  terrain: string,
  url: string,
  residents?: any
};

export type PlanetsContextType = {
  recoveryPlanets: (recoveryPlanets: PlanetsAPI[]) => void;
  planets: PlanetsAPI[];
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormDataType;
  filteredPlanetsName: PlanetsAPI[];
};

export type PlanetsProviderProps = {
  children: React.ReactNode
};

export type FormDataType = {
  planetName: string;
};
