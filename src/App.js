import './App.css';
import HeaderComponent from './components/header/headerComponent';
import SearchBar from './components/searchBar/searchBar';
import { PostalCodeProvider } from './context/PostalCodeContext';
import SearchLog from './components/searchLog/searchLog';
import { TabProvider } from './context/TabContext';

function App() {
  return (
    <div className="App">
      <TabProvider>
        <HeaderComponent >
          <PostalCodeProvider>
            <SearchBar />
            <SearchLog />
          </PostalCodeProvider>
        </HeaderComponent>
      </TabProvider>
    </div>
  );
}

export default App;