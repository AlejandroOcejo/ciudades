import './App.css';
import buttonHeader from './components/button/buttonHeader';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src="./images/miscalenea/logo.png" alt=''></img>
        <div className='ciudades'></div>
        <buttonHeader>Buscar</buttonHeader>
        <buttonHeader>Historial</buttonHeader>
      </div>

    </div>
  );
}

export default App;