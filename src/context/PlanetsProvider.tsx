import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import {
  ColumnsType,
  FormDataType,
  PlanetsAPI,
  PlanetsProviderProps,
  SortedColumns } from '../types';
import { initialFormValue } from '../utils/formDataValue';
import getPlanetsWithoutResidents from '../services/getPlanetsWithoutResidents';
import { columnsData } from '../utils/formCharacteristcs';

function PlanetsProvider({ children }: PlanetsProviderProps) {
  const [planets, setPlanets] = useState<PlanetsAPI[]>([]);
  const [planetsFiltred, setPlanetsFiltred] = useState<PlanetsAPI[]>([]);
  const [filterList, setFilterList] = useState<FormDataType[]>([]);
  const [columns, setColumns] = useState<string[]>(columnsData);
  const [formData, setFormData] = useState<FormDataType>({
    planetName: '',
    columnsPlanet: columns[0] as ColumnsType,
    operator: 'maior que',
    valueInput: '0',
    sort: '',
    columnsSort: 'population',
  });

  const { planetName } = formData;

  useEffect(() => {
    const getResultPlanets = async () => {
      const data = await getPlanetsWithoutResidents();
      setPlanets(data);
      setPlanetsFiltred(data);
    };
    getResultPlanets();
  }, []);

  useEffect(() => {
    setFormData({
      planetName: '',
      columnsPlanet: columns[0] as ColumnsType,
      operator: 'maior que',
      valueInput: '0',
      sort: '',
      columnsSort: 'population',
    });
  }, [columns]);

  // console.log(planetsFiltred);

  const handleFormChange = (event:
  React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log('renderizou');

  const filteredPlanetsName = () => {
    const result = planetName.length > 0
      ? planets.filter((planet) => (planet
        .name.toLowerCase().includes(planetName.toLowerCase())))
      : [];
    return result;
  };

  // const filteredColumns = () => {
  //   const result = planets.filter((planet) => {
  //     const columnsPlanets = planet[columnsPlanet as keyof PlanetsAPI];
  //     switch (operator) {
  //       case 'maior que':
  //         return Number(columnsPlanets) > Number(valueInput);

  //       case 'menor que':
  //         return Number(columnsPlanets) < Number(valueInput);

  //       case 'igual a':
  //         return Number(columnsPlanets) === Number(valueInput);

  //       default:
  //         return [];
  //     }
  //   });
  //   setPlanetsFiltred(result);
  // };

  const applyFilters = (filtered: FormDataType[]) => {
    const result = planets.filter((planet) => (
      filtered.every(({ columnsPlanet: chatack, operator: opt, valueInput: value }) => {
        const columnsPlanets = planet[chatack as keyof PlanetsAPI];
        switch (opt) {
          case 'maior que':
            return Number(columnsPlanets) > Number(value);

          case 'menor que':
            return Number(columnsPlanets) < Number(value);

          default:
            return Number(columnsPlanets) === Number(value);
        }
      })
    ));

    setPlanetsFiltred(result);
  };

  const removeColumn = (columnData: FormDataType) => {
    const columnsRemoved = columns
      .filter((column) => column !== columnData.columnsPlanet);
    setFilterList([...filterList, columnData]);
    setColumns(columnsRemoved);
  };

  const removeFilters = (filterToRemove: string) => {
    const filtersRemoved = filterList
      .filter((filter) => filter.columnsPlanet !== filterToRemove);

    setFilterList(filtersRemoved);
    setColumns([...columns, filterToRemove]);
    applyFilters(filtersRemoved);
  };

  const removeAllFilters = () => {
    setFilterList([]);
    setColumns(columnsData);
    setPlanetsFiltred(planets);
  };

  const applyOrder = (columnsSort: SortedColumns) => {
    const result = planets.sort((a, b) => {
      const columnsA = a[columnsSort.columnsSort as keyof PlanetsAPI];
      const columnsB = b[columnsSort.columnsSort as keyof PlanetsAPI];

      if (columnsA === 'unknown') {
        return 1;
      }

      if (columnsB === 'unknown') {
        return -1;
      }

      if (columnsSort.sort === 'descendent') {
        return Number(columnsB) - Number(columnsA);
      }

      return Number(columnsA) - Number(columnsB);
    });
    setPlanetsFiltred([...result]);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFilterList([...filterList, formData]);
    applyFilters([...filterList, formData]);
    setFormData(initialFormValue);
    removeColumn(formData);
  };

  const value = {
    // recoveryPlanets,
    handleFormChange,
    handleFormSubmit,
    // filteredColumns,
    planetsFiltred,
    formData,
    filteredPlanetsName,
    removeAllFilters,
    columns,
    filterList,
    removeFilters,
    applyOrder,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
