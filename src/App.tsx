import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchSection from './components/SearchSection/SearchSection';
import { useState } from 'react';
import { useGetAllBooksQuery } from './services/bookService';
import BookPage from './pages/BookPage/BookPage';
import BookList from './pages/BookList/BookList';

function App() {
  const [searchData, setSearchData] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [orderBy, setOrderBy] = useState('relevance');
  const [startIndex, setStartIndex] = useState(0);

  const { data, isLoading, isFetching, isError, error } = useGetAllBooksQuery({
    searchTerms: searchData,
    categoryData: filterBy,
    sortData: orderBy,
    startIndex,
  });

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
        <Route
          path="/"
          element={
            <BookList
              dataBook={data}
              isLoading={isLoading}
              isFetching={isFetching}
              isError={isError}
              errorFetch={error}
              setStartIndex={setStartIndex}
            />
          }
        />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
