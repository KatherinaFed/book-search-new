import { BookItem, BookResponse } from '../../helpers/types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import Preloader from '../../components/Preloader/Preloader';
import { SerializedError } from '@reduxjs/toolkit';
import BookCard from '../../components/BookCard/BookCard';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import { error } from 'console';

interface BooksContentProps {
  dataBook: BookResponse | undefined;
  isLoading: boolean;
  isFetching: boolean;
  errorFetch: FetchBaseQueryError | SerializedError | undefined;
  setStartIndex: (value: number) => void;
}

function BookList({
  dataBook,
  isLoading,
  isFetching,
  errorFetch,
  setStartIndex,
}: BooksContentProps) {
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
      {/* LoadMore button */}
      <ErrorHandler
        isLoading={isLoading}
        isFetching={isFetching}
        error={errorFetch}
      />
    </section>
  );
}

export default BookList;
