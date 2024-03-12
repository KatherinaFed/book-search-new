import { useState } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { BookItem, BookResponse } from '../../helpers/types';
import BookCard from '../../components/BookCard/BookCard';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';

import Preloader from '../../components/Preloader/Preloader';
import './Main.scss';
import { Pagination } from 'antd';

interface MainContentProps {
  dataBook: BookResponse | undefined;
  isLoading: boolean;
  isFetching: boolean;
  errorFetch: FetchBaseQueryError | SerializedError | undefined;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Main({
  dataBook,
  isLoading,
  isFetching,
  errorFetch,
  setStartIndex,
}: MainContentProps) {
  const [page, setPage] = useState(0);

  if (isLoading && isFetching) {
    return <Preloader />;
  }

  const totalItems = dataBook?.totalItems ?? 0;

  const count = Math.ceil(totalItems / 15);

  const handleChangePage = (page: number) => {
    setPage(page);
    setStartIndex((page - 1) * 15);
  };

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

      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          total={count}
          onChange={handleChangePage}
          showSizeChanger={false}
          current={page}
        />
      </div>
      <ErrorHandler error={errorFetch} />
    </section>
  );
}

export default Main;
