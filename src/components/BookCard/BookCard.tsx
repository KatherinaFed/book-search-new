import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  bookId: string;
  img: string;
  title: string;
  category: string[];
  author: string[];
}

function BookCard({ bookId, img, title, category, author }: BookCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="book_card_container"
      onClick={() => navigate(`book/${bookId}`)}
    >
      <img src={img} alt="Book cover" />
      
    </div>
  );
}

export default BookCard;
