import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import SearchSection from './components/SearchSection/SearchSection';
import { useEffect, useState } from 'react';
import { useGetAllBooksQuery } from './services/bookService';
import Book from './pages/Book/Book';
import Main from './pages/Main/Main';

function App() {
  const [searchTerms, setSearchTerms] = useState<string>('');
  const [filterBy, setFilterBy] = useState<string>('all');
  const [orderBy, setOrderBy] = useState<string>('relevance');
  const [startIndex, setStartIndex] = useState<number>(0);

  const navigate = useNavigate();

  const { data, isLoading, isFetching, error } = useGetAllBooksQuery({
    searchTerms,
    categoryData: filterBy,
    sortData: orderBy,
    startIndex,
  });

  useEffect(() => {
    navigate('/');
    setStartIndex(0);
  }, [searchTerms, filterBy, orderBy]);

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
              searchTerms={searchTerms}
              filterBy={filterBy}
              orderBy={orderBy}
            />
          }
        />
        <Route
          path="/book/:id"
          element={<Book setSearchTerms={setSearchTerms} />}
        />
      </Routes>
    </div>
  );
}

export default App;
