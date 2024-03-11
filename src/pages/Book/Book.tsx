import { useNavigate, useParams } from 'react-router-dom';
import { useGetBookByIdQuery } from '../../services/bookService';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import noImage from '../../assets/noImg.jpg';
import './Book.scss';
import { uniqueId } from 'lodash';
import Preloader from '../../components/Preloader/Preloader';

interface BookProps {
  setSearchTerms: (value: string) => void;
}

function Book({ setSearchTerms }: BookProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isFetching, isLoading, error } = useGetBookByIdQuery(
    id as string
  );

  const handleAuthorClick = (value: string) => {
    setSearchTerms(value);
    navigate('/');
  };

  return (
    <section className="book_page_container">
      <div className="book_page_left">
        {isLoading && isFetching ? (
          <Preloader />
        ) : (
          <img
            className="book_cover"
            src={data?.volumeInfo.imageLinks?.smallThumbnail || noImage}
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
        <div className="publish_date">
          <span>{`Publication date: `}</span>
          {data?.volumeInfo.publishedDate || 'no information'}
        </div>
        <div className="author">
          <span>{`Author: `}</span>
          {data?.volumeInfo.authors?.map((author, index, array) => (
            <span
              key={uniqueId()}
              className="author_name"
              onClick={() => handleAuthorClick(author)}
            >
              {author}
              {index < array.length - 1 && ', '}
            </span>
          )) || 'no information'}
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
