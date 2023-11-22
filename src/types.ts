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
  // filteredColumns: () => void;
  formData: FormDataType;
  planetsFiltred: PlanetsAPI[];
  filteredPlanetsName: () => PlanetsAPI[];
  removeAllFilters: () => void;
  columns: string[];
  filterList: FormDataType[],
  removeFilters: (filterToRemove: string) => void;
};

export type PlanetsProviderProps = {
  children: React.ReactNode
};

export type ColumnsType =
'population' | 'orbital_period' | 'diameter' | 'rotation_period' | 'surface_water';

export type InitialFormValueType = {
  planetName: string;
  columnsPlanet: ColumnsType;
  operator: string;
  valueInput: string;
};

export type FormDataType = {
  planetName: string;
  columnsPlanet: ColumnsType;
  operator: string;
  valueInput: string;
};
