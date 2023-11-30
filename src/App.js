import './App.css';
import HeaderComponent from './components/header/headerComponent';
import SearchBar from './components/searchBar/searchBar';
import { PostalCodeProvider } from './context/PostalCodeContext';
import SearchLog from './components/searchLog/searchLog';
import { LogContext } from './context/LogContext';
import { FetchInfoProvider } from './context/fetchInfoContext';
import AppRouter from "./Routers/AppRouter";

function App() {
  return (
    <div className="App">
      <LogContext>
        <PostalCodeProvider>
          <FetchInfoProvider>
            <AppRouter />
          </FetchInfoProvider>
        </PostalCodeProvider>
      </LogContext>
    </div >
  );
}

export default App;

{/* <SearchBar />
              <SearchLog /> */}

{/* <HeaderComponent > */ }
