import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchSection from './components/SearchSection/SearchSection';
import { useState } from 'react';
import { useGetAllBooksQuery } from './services/bookService';
import Book from './pages/Book/Book';
import Main from './pages/Main/Main';

function App() {
  const [searchTerms, setSearchTerms] = useState<string>('');
  const [filterBy, setFilterBy] = useState<string>('all');
  const [orderBy, setOrderBy] = useState<string>('relevance');
  const [startIndex, setStartIndex] = useState<number>(0);
  console.log('startIndex', startIndex);

  const { data, isLoading, isFetching, error } = useGetAllBooksQuery({
    searchTerms,
    categoryData: filterBy,
    sortData: orderBy,
    startIndex,
  });

  return (
    <div className="App">
      <SearchSection
        setSearchData={setSearchTerms}
        setFilterBy={setFilterBy}
        filterBy={filterBy}
        setOrderBy={setOrderBy}
        orderBy={orderBy}
        setStartIndex={setStartIndex}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              dataBook={data}
              isLoading={isLoading}
              isFetching={isFetching}
              errorFetch={error}
              setStartIndex={setStartIndex}
            />
          }
        />
        <Route path="/book/:id" element={<Book setSearchTerms={setSearchTerms} />} />
      </Routes>
    </div>
  );
}

export default App;
