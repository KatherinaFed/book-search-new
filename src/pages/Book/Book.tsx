import { useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '../../services/bookService';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import spinner from '../../assets/spinner.gif';
import './Book.scss';

function Book() {
  const { id } = useParams();
  const { data, isFetching, isLoading, error } = useGetBookByIdQuery(
    id as string
  );

  console.log(isFetching);

  return (
    <section className="book_page_container">
      <div className="book_page_left">
        {isLoading && isFetching ? (
          spinner
        ) : (
          <img
            src={data?.volumeInfo.imageLinks.smallThumbnail}
            alt="book_cover"
          />
        )}
      </div>
      <div className="book_page_right">
        <h2 className="title">{data?.volumeInfo.title}</h2>
        <div className="category">
          <span>{`Category: `}</span>
          {data?.volumeInfo.categories?.map((cat) => cat) || 'no information'}
        </div>
        <div className="page_count">
          <span>{`Page count: `}</span>
          {data?.volumeInfo.pageCount || 'no information'}
        </div>
        <div className="author">
          <span>{`Author: `}</span>
          {data?.volumeInfo.authors?.map((author) => author) ||
            'no information'}
        </div>
        <div className="description">
          <span>{`Description: `}</span>
          {data?.volumeInfo.description?.replace(/<[^>]*>/g, '') ||
            'no information'}
        </div>
      </div>
      <ErrorHandler error={error} />
    </section>
  );
}

export default Book;
