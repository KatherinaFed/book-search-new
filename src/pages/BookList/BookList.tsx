import { BookItem, BookResponse } from '../../helpers/types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import BookCard from '../../components/BookCard/BookCard';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import LoadMoreButton from '../../features/LoadMoreButton/LoadMoreButton';
import { useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';

interface BooksContentProps {
  dataBook: BookResponse | undefined;
  isLoading: boolean;
  isFetching: boolean;
  errorFetch: FetchBaseQueryError | SerializedError | undefined;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
}

function BookList({
  dataBook,
  isLoading,
  isFetching,
  errorFetch,
  setStartIndex,
}: BooksContentProps) {
  const [isPaginate, setIsPaginate] = useState(false);

  if (isLoading && isFetching) {
    return <Preloader isPaginate={isPaginate} />;
  }

  return (
    <section className="book_container">
      <div className="book_total">Found {dataBook?.totalItems} results</div>
      <div className="book_list">
        {dataBook?.items.map((book: BookItem) => (
          <BookCard
            key={book.id}
            bookId={book.id}
            img={book.volumeInfo.imageLinks.thumbnail as string}
            title={book.volumeInfo.title}
            category={book.volumeInfo.categories as string[]}
            author={book.volumeInfo.authors as string[]}
          />
        ))}
      </div>
      <LoadMoreButton
        isFetching={isFetching}
        setStartIndex={setStartIndex}
        isPaginate={isPaginate}
        setIsPaginate={setIsPaginate}
      />
      <ErrorHandler error={errorFetch} />
    </section>
  );
}

export default BookList;
