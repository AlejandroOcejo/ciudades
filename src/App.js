import './App.css';
import HeaderComponent from './components/header/headerComponent';
import SearchBar from './components/searchBar/searchBar';
import { PostalCodeProvider } from './context/PostalCodeContext';
import SearchLog from './components/searchLog/searchLog';
import { TabProvider } from './context/TabContext';
import { FetchInfoProvider } from './context/fetchInfoContext';

function App() {
  return (
    <div className="App">
      <TabProvider>
        <HeaderComponent >
          <PostalCodeProvider>
            <FetchInfoProvider>
              <SearchBar />
              <SearchLog />
            </FetchInfoProvider>
          </PostalCodeProvider>
        </HeaderComponent>
      </TabProvider>
    </div>
  );
}

export default App;