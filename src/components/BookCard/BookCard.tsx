import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BookCard.scss';
// import { displayAuthors } from '../../helpers/const';

interface BookCardProps {
  bookId: string;
  img: string;
  title: string;
  category: string[];
  author: string[];
}

function BookCard({ bookId, img, title, category, author }: BookCardProps) {
  const navigate = useNavigate();

  const displayAuthors = (authors: string[]) => {
    if (authors.length === 1) {
      return authors[0];
    } else if (authors.length > 1) {
      const displayedAuthors = authors.slice(0, 2).join(', ');
      return <>{displayedAuthors}</>;
    } else {
      return '';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{
        duration: 0.5,
      }}
      className="book_card_container"
      onClick={() => navigate(`book/${bookId}`)}
    >
      <img src={img} alt="book cover" />
      <div className="book_card_info">
        <h2>{title}</h2>
        <div className="category">{category.map((cat) => cat)}</div>
        <div className="author">{displayAuthors(author)}</div>
      </div>
    </motion.div>
  );
}

export default BookCard;
