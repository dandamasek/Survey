import logo from './logo.svg';
import './App.css';
import TableData from './components/TableData';
import TobyTable from './components/TobyTable';
import TomyTable from './components/TomyTable';


function App() {
  return (
    <div className="App">
      <TobyTable></TobyTable>
      <TomyTable></TomyTable>
      <TableData></TableData>
      
    </div>
  );
}

export default App;
