import './App.css';
import Table from './components/Table';
import FiltersInputs from './components/FiltersInputs';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <div>
      <PlanetsProvider>
        <FiltersInputs />
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
