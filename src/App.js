import './App.css';
import HeaderComponent from './components/header/headerComponent';
import SearchBar from './components/searchBar/searchBar';
import { PostalCodeProvider } from './context/PostalCodeContext';
import SearchLog from './components/searchLog/searchLog';
import { LogContextProvider } from './context/LogContext';
import { FetchInfoProvider } from './context/fetchInfoContext';
import AppRouter from "./Routers/AppRouter";

function App() {
  return (
    <div className="App">
      <LogContextProvider>
        <PostalCodeProvider>
          <FetchInfoProvider>
            <AppRouter />
          </FetchInfoProvider>
        </PostalCodeProvider>
      </LogContextProvider>
    </div >
  );
}

export default App;

{/* <SearchBar />
              <SearchLog /> */}

{/* <HeaderComponent > */ }
