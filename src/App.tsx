import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchSection from './components/SearchSection/SearchSection';
import Main from './pages/Main/Main';
import Book from './pages/Book/Book';
import { useState } from 'react';

function App() {
  const [searchData, setSearchData] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [orderBy, setOrderBy] = useState('relevance');
  const [startIndex, setStartIndex] = useState(0);

  return (
    <div className="App">
      <SearchSection
        setSearchData={setSearchData}
        setFilterBy={setFilterBy}
        filterBy={filterBy}
        setOrderBy={setOrderBy}
        orderBy={orderBy}
        setStartIndex={setStartIndex}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
