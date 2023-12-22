import './App.css';
import HeaderComponent from './components/header/headerComponent';
import SearchBar from './components/searchBar/searchBar';
import { PostalCodeProvider } from './context/PostalCodeContext';
import SearchLog from './components/searchLog/searchLog';
import { LogContextProvider } from './context/LogContext';
import { FetchInfoProvider } from './context/fetchInfoContext';
import AppRouter from "./Routers/AppRouter";
import { WeatherInfoProvider } from './context/WeatherInfoContext';

function App() {
  return (
    <div className="App">
      <FetchInfoProvider>
        <WeatherInfoProvider>
          <PostalCodeProvider>
            <LogContextProvider>
              <AppRouter />
            </LogContextProvider>
          </PostalCodeProvider>
        </WeatherInfoProvider>
      </FetchInfoProvider>
    </div >
  );
}

export default App;

{/* <SearchBar />
              <SearchLog /> */}

{/* <HeaderComponent > */ }
