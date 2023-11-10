import './App.css';
import HeaderComponent from './components/header/headerComponent';
import SearchBar from './components/searchBar/searchBar';
import { PostalCodeProvider } from './context/PostalCodeContext';
import SearchLog from './components/searchLog/searchLog';

function App() {
  return (
    <div className="App">
      <HeaderComponent >
        <PostalCodeProvider>
          <SearchBar />
          <SearchLog />
        </PostalCodeProvider>
      </HeaderComponent>
    </div>
  );
}

export default App;