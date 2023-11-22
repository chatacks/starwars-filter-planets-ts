import { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import { operators } from '../../utils/formCharacteristcs';

function FilterInputs() {
  const {
    formData,
    handleFormChange,
    handleFormSubmit,
    columns,
  } = useContext(PlanetsContext);

  return (
    <div>
      <form onSubmit={ handleFormSubmit }>

        <div>
          <label htmlFor="planet">Digite o nome do Planeta: </label>
          <input
            data-testid="name-filter"
            onChange={ handleFormChange }
            value={ formData.planetName }
            type="text"
            name="planetName"
            id="planet"
          />
        </div>

        <label htmlFor="columns">Colunas: </label>
        <select
          data-testid="column-filter"
          onChange={ handleFormChange }
          value={ formData.columnsPlanet }
          name="columnsPlanet"
          id="columns"
        >
          {columns.map((column) => (
            <option key={ column } value={ column }>{column}</option>
          ))}
        </select>

        <label htmlFor="operator">Operador: </label>
        <select
          data-testid="comparison-filter"
          onChange={ handleFormChange }
          value={ formData.operator }
          name="operator"
          id="operator"
        >
          {operators.map((operator) => (
            <option key={ operator } value={ operator }>{operator}</option>
          ))}
        </select>

        <label htmlFor="valueInput">Valor: </label>
        <input
          onChange={ handleFormChange }
          value={ formData.valueInput }
          data-testid="value-filter"
          type="text"
          name="valueInput"
          id="valueInput"
        />

        <button data-testid="button-filter">
          Filtrar

        </button>
      </form>
    </div>
  );
}

export default FilterInputs;
