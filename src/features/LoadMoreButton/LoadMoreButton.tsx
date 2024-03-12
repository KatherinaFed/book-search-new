import React from 'react';
import Preloader from '../../components/Preloader/Preloader';

interface LoadMoreButtonProps {
  isFetching: boolean;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  isPaginate: boolean;
  setIsPaginate: (value: boolean) => void;
}

function LoadMoreButton({
  isFetching,
  setStartIndex,
  isPaginate,
  setIsPaginate,
}: LoadMoreButtonProps) {

  const handleLoadClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    setStartIndex((prevStartIndex: number) => prevStartIndex + 15);
    setIsPaginate(true);
  };

  return (
    <div className="load_more_container">
      {isFetching ? (
        <Preloader isPaginate={isPaginate} />
      ) : (
        <button onClick={handleLoadClick}>Load more</button>
      )}
    </div>
  );
}

export default LoadMoreButton;
