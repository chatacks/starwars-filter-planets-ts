import { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';

function SelectedFilters() {
  const { filterList, removeFilters } = useContext(PlanetsContext);
  return (
    <div>
      {filterList.length && (
        <div>
          {filterList.map((filter) => (
            <div data-testid="filter" key={ filter.columnsPlanet }>
              <span>
                {`${filter.columnsPlanet} ${filter.operator} ${filter.valueInput}`}
              </span>
              <button onClick={ () => removeFilters(filter.columnsPlanet) }>X</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectedFilters;
