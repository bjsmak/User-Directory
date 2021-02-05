import './App.css';
import Buttons from './components/Buttons';
import MainTable from './pages/MainTable';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Buttons />
      <MainTable />
    </div>
  );
}

export default App;
