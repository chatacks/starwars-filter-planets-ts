import { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function FilterInput() {
  const { formData, handleFormChange } = useContext(PlanetsContext);

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}

export default FilterInput;
