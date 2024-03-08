import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '../../services/bookService';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';

function BookPage() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isFetching, error } = useGetBookByIdQuery(
    id as string
  );

  console.log(data);

  return (
    <section className="book_page_container">
      <div className="book_page_left">
        <img
          src={data?.volumeInfo.imageLinks.smallThumbnail}
          alt="book_cover"
        />
      </div>
      <div className="book_page_right">
        <div className="category">
          {data?.volumeInfo.categories?.map((cat) => cat)}
        </div>
        <div className="page_count">Page count: {data?.volumeInfo.pageCount}</div>
        <h2 className="title">{data?.volumeInfo.title}</h2>
        <div className="author">
          Author: {data?.volumeInfo.authors?.map((author) => author)}
        </div>
        <div className="description">{data?.volumeInfo.description}</div>
      </div>
      <ErrorHandler
        isLoading={isLoading}
        isFetching={isFetching}
        error={error}
      />
    </section>
  );
}

export default BookPage;
