import React, { useState } from 'react';
import './SearchForm.scss';

interface SearchFormProps {
  setSearchData: (value: string) => void;
  setStartIndex: (value: number) => void;
}

function SearchForm({ setSearchData, setStartIndex }: SearchFormProps) {
  const [searchBook, setSearchBook] = useState('');

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchData(searchBook);
    setSearchBook('');
    setStartIndex(0);
  };

  return (
    <div className="search_form">
      <form onSubmit={handleSearchSubmit} action="submit">
        <input
          value={searchBook}
          onChange={(e) => setSearchBook(e.target.value)}
          placeholder="Search a book..."
          type="text"
        />
        <button type="submit"><i className="fa fa-search" 
        aria-hidden="true"></i></button>
      </form>
    </div>
  );
}

export default SearchForm;
