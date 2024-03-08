import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchSection from './components/SearchSection/SearchSection';
import { useState } from 'react';
import { useGetAllBooksQuery } from './services/bookService';
import BookPage from './pages/BookPage/BookPage';
import BookList from './pages/BookList/BookList';

function App() {
  const [searchData, setSearchData] = useState<string>('');
  const [filterBy, setFilterBy] = useState<string>('all');
  const [orderBy, setOrderBy] = useState<string>('relevance');
  const [startIndex, setStartIndex] = useState<number>(0);

  const { data, isLoading, isFetching, error } = useGetAllBooksQuery({
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
