import './App.css';
import Table from './components/Table';
import FiltersInputs from './components/FiltersInputs';
import PlanetsProvider from './context/PlanetsProvider';
import SelectedFilters from './components/SelectedFilters';

function App() {
  return (
    <div>
      <PlanetsProvider>
        <FiltersInputs />
        <SelectedFilters />
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
