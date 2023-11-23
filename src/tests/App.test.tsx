import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import App from '../App';
import testData from '../utils/testData';
import { act } from 'react-dom/test-utils';
import PlanetsProvider from '../context/PlanetsProvider';

const endpoint = 'https://swapi.dev/api/planets'

describe('Verifica funcionalidades do App', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => (testData),
    } as Response) ;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Verifica se o App renderiza os elementos corretamente', async () => {
    render(<App />)
    const user = userEvent.setup();
    
    const inputPlanet = screen.getByRole('textbox', {  name: /digite o nome do planeta:/i});
    // expect(inputPlanet). toBeInTheDocument();
    // await user.type(inputPlanet, 'Tatooine')

    const  columnPlanets = screen.getByRole('combobox', {  name: /colunas:/i});
    expect(columnPlanets).toBeInTheDocument();

    const operators = screen.getByRole('combobox', {  name: /operador:/i});
    expect(operators).toBeInTheDocument();

    const inputValue = screen.getByRole('textbox', {  name: /valor:/i});
    expect(inputValue).toBeInTheDocument();

    const radioAscendent = screen.getByRole('radio', {name: /ascendente/i})
    expect(radioAscendent).toBeInTheDocument();

    const radioDescendent = screen.getByRole('radio', {name: /ascendente/i})
    expect(radioDescendent).toBeInTheDocument();

    const orderColumn = screen.getByTestId('column-sort')
    expect(orderColumn).toBeInTheDocument();

    const allOptions = screen.getAllByRole('option');
    allOptions.forEach((option) => (expect(option).toBeInTheDocument()));
    expect(allOptions).toHaveLength(13);
    
    const columnsTable = screen.getAllByRole('columnheader')
    columnsTable.forEach((column) => (expect(column).toBeInTheDocument()));
    expect(columnsTable).toHaveLength(13);
    
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument();
    
    const rows = screen.getByRole('row')
    expect(rows).toBeInTheDocument();

    // await waitFor(() => {
      
    //   expect(cellsRenderized).toBeInTheDocument();
      
    // });
    
    // const cellsRenderized = await screen.findByRole('cell', {  name: /tatooine/i});
    // console.log(cellsRenderized);

    // screen.getByRole('')

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(endpoint);
  
  });

  // it('qualquer coisa', async () => {
  //   render(<App />)

  //   const selectColumn = await screen.findByTestId('column-filter');
  //   await userEvent.se
  // });

});
