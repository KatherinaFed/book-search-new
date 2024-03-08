import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '../../services/bookService';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';

function BookPage() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isFetching, error } = useGetBookByIdQuery(id);

  return (
    <section className="book_page_container">
      <div className="book_page_left">
        <img src="" alt="" />
      </div>
      <div className="book_page_right"></div>
      <ErrorHandler
        isLoading={isLoading}
        isFetching={isFetching}
        error={error}
      />
    </section>
  );
}

export default BookPage;
