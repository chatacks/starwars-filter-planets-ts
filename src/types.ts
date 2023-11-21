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
  // recoveryPlanets: (recoveryPlanets: PlanetsAPI[]) => void;
  handleFormChange: (event:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  filteredColumns: () => void;
  formData: FormDataType;
  planetsFiltred: PlanetsAPI[];
  filteredPlanetsName: () => PlanetsAPI[];
};

export type PlanetsProviderProps = {
  children: React.ReactNode
};

export type InitialFormValueType = {
  planetName: string;
  columns: string;
  operator: string;
  valueInput: string;
};

export type FormDataType = {
  planetName: string;
  columns: string;
  operator: string;
  valueInput: string;
};
