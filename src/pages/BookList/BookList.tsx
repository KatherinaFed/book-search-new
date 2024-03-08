import { BookItem, BookResponse } from '../../helpers/types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import Preloader from '../../components/Preloader/Preloader';
import { SerializedError } from '@reduxjs/toolkit';
import BookCard from '../../components/BookCard/BookCard';

interface BooksContentProps {
  dataBook: BookResponse | undefined;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  errorFetch: FetchBaseQueryError | SerializedError | undefined;
  setStartIndex: (value: number) => void;
}

function BookList({
  dataBook,
  isLoading,
  isFetching,
  isError,
  errorFetch,
  setStartIndex,
}: BooksContentProps) {
  if (isLoading && isFetching) {
    return <Preloader />;
  }

  if (errorFetch) {
    if ('status' in errorFetch) {
      const errMsg =
        'error' in errorFetch
          ? errorFetch.error
          : JSON.stringify(errorFetch.data);

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else {
      return <div>{errorFetch.message}</div>;
    }
  }

  console.log(dataBook);

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
    </section>
  );
}

export default BookList;
