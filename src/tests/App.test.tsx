import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import App from '../App';
import testData from '../utils/testData';

const endpoint = 'https://swapi.dev/api/planets'

describe('Verifica funcionalidades do App', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => (testData),
      ok: true,
    } as Response) ;
  });

  afterEach(() => {
    cleanup();
  });

  it('Verifica se o App renderiza os elementos corretamente', async () => {
    render(<App />)
    
    const inputPlanet = screen.getByRole('textbox', {  name: /digite o nome do planeta:/i});
    expect(inputPlanet).toBeInTheDocument();
    
    const columnPlanets = screen.getByRole('combobox', {  name: /colunas:/i});
    expect(columnPlanets).toBeInTheDocument();
    
    const operators = screen.getByRole('combobox', {  name: /operador:/i});
    expect(operators).toBeInTheDocument();
    
    const inputValue = screen.getByRole('textbox', {  name: /valor:/i});
    expect(inputValue).toBeInTheDocument();

    const button = screen.getByRole('button', {  name: /filtrar/i});
    expect(button).toBeInTheDocument();

    const buttonRemove = screen.getByRole('button', {  name: /remover filtros/i});
    expect(buttonRemove).toBeInTheDocument();
    
    const radioAscendent = screen.getByRole('radio', {name: /ascendente/i});
    expect(radioAscendent).toBeInTheDocument();
    
    const radioDescendent = screen.getByRole('radio', {name: /ascendente/i})
    expect(radioDescendent).toBeInTheDocument();
    
    const orderColumn = screen.getByTestId('column-sort');
    expect(orderColumn).toBeInTheDocument();
    
    const allOptions = screen.getAllByRole('option');
    allOptions.forEach((option) => (expect(option).toBeInTheDocument()));
    expect(allOptions).toHaveLength(13);
    
    const columnsTable = screen.getAllByRole('columnheader');
    columnsTable.forEach((column) => (expect(column).toBeInTheDocument()));
    expect(columnsTable).toHaveLength(13);
    
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    const rows = screen.getByRole('row');
    expect(rows).toBeInTheDocument();


    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(endpoint);

    const planetsRenderized = await screen.findAllByRole('cell');
    planetsRenderized.forEach((planet) => expect(planet).toBeInTheDocument());
  
    const teste = await screen.findAllByRole('row');
    expect(teste).toHaveLength(11)
    
      
  });

  it('Verifica se a função atrelada ao input:text funciona corretamente', async () => {
    render(<App />)
    const user = userEvent.setup();

    const inputPlanet = screen.getByRole('textbox', {  name: /digite o nome do planeta:/i});
    expect(inputPlanet).toBeInTheDocument();
    await user.type(inputPlanet, 'Alderaan');

    const planet = screen.getByTestId('planet-name');
    expect(planet).toBeInTheDocument();
    
  });

  it('Verifica se a função atrelada a selects funcionam corretamente', async () => {
    render(<App />);
    const user = userEvent.setup();

    const columnPlanets = screen.getByRole('combobox', {  name: /colunas:/i});
    expect(columnPlanets).toBeInTheDocument();
    await user.selectOptions(columnPlanets, 'population')

    const operators = screen.getByRole('combobox', {  name: /operador:/i});
    expect(operators).toBeInTheDocument();
    await user.selectOptions(operators, 'maior que')

    const inputValue = screen.getByRole('textbox', {  name: /valor:/i});
    expect(inputValue).toBeInTheDocument();

    const button = screen.getByRole('button', {  name: /filtrar/i});
    expect(button).toBeInTheDocument();
    await user.click(button);

    const buttonRemove = screen.getByRole('button', {  name: /remover filtros/i});
    expect(buttonRemove).toBeInTheDocument();

    expect(screen.getByText(/population maior que 0/i)).toBeInTheDocument();
    expect(screen.getByRole('cell', {  name: /tatooine/i})).toBeInTheDocument();
    expect(screen.getByRole('cell', {  name: /alderaan/i})).toBeInTheDocument();
    expect(screen.getByRole('cell', {  name: /yavin iv/i})).toBeInTheDocument();
    expect(screen.getByRole('cell', {  name: /bespin/i})).toBeInTheDocument();
    expect(screen.getByRole('cell', {  name: /endor/i})).toBeInTheDocument();
    expect(screen.getByRole('cell', {  name: /naboo/i})).toBeInTheDocument();
    expect(screen.getByRole('cell', {  name: /coruscant/i})).toBeInTheDocument();
    expect(screen.getByRole('cell', {  name: /kamino/i})).toBeInTheDocument();

    await user.click(buttonRemove);
    
    const planets = await screen.findAllByRole('cell');
    planets.forEach((planet) => expect(planet).toBeInTheDocument());
    
    await user.selectOptions(columnPlanets, 'population')
    
    await user.selectOptions(operators, 'menor que');
    await user.type(inputValue, '10000');
    
    await user.click(button);
    
    expect(screen.getByText(/population menor que 010000/i)).toBeInTheDocument();
    expect(screen.getByRole('cell', {  name: /yavin iv/i})).toBeInTheDocument();

    await user.click(buttonRemove);

    await user.selectOptions(columnPlanets, 'population')

    await user.selectOptions(operators, 'igual a');
    await user.type(inputValue, '2000000000');

    await user.click(button);

    expect(screen.getByText(/population igual a 02000000000/i)).toBeInTheDocument();
    expect(screen.getByRole('cell', {  name: /alderaan/i})).toBeInTheDocument();

    const buttonRemoveFilter = screen.getByRole('button', {  name: /x/i});

    await user.click(buttonRemoveFilter);

    const radioAscendent = screen.getByRole('radio', {name: /ascendente/i});
    expect(radioAscendent).toBeInTheDocument();
    await user.click(radioAscendent);
    await user.click(screen.getByRole('button', {  name: /ordenar/i}))

    await user.click(buttonRemove);
    
    const radioDescendent = screen.getByRole('radio', {name: /descendente/i})
    expect(radioDescendent).toBeInTheDocument();
    await user.click(radioDescendent);
    await user.click(screen.getByRole('button', {  name: /ordenar/i}))
    
  });

});
