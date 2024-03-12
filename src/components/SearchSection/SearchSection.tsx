import { NavLink, useNavigate } from 'react-router-dom';
import SearchForm from '../../features/SearchForm/SearchForm';
import Selectors from '../Selectors/Selectors';
import { SearchBaseProps } from '../../helpers/types';
import { motion } from 'framer-motion';
import './SearchSection.scss';
import { DEFAULT_STATE } from '../../helpers/const';

interface SearchProps extends SearchBaseProps {
  setSearchData: (value: string) => void;
}

function SearchSection({
  setSearchData,
  setFilterBy,
  filterBy,
  setOrderBy,
  orderBy,
  setStartIndex,
}: SearchProps) {
  const navigate = useNavigate();

  const handleClickToMain = () => {
    setSearchData(DEFAULT_STATE.searchTerms);
    setFilterBy(DEFAULT_STATE.categoryData);
    setOrderBy(DEFAULT_STATE.sortData);
    setStartIndex(DEFAULT_STATE.startIndex);
    navigate('/');
  };

  return (
    <section className="search_container">
      <div className="title_link">
        <NavLink
          to="/"
          style={{ textDecoration: 'none', width: 'fit-content' }}
          onClick={handleClickToMain}
        >
          <motion.h1
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.5,
            }}
          >
            Search for books
          </motion.h1>
        </NavLink>
        <h2>Discover Your Next Adventure</h2>
      </div>
      <SearchForm setSearchData={setSearchData} setStartIndex={setStartIndex} />
      <Selectors
        setFilterBy={setFilterBy}
        filterBy={filterBy}
        setOrderBy={setOrderBy}
        orderBy={orderBy}
        setStartIndex={setStartIndex}
      />
    </section>
  );
}

export default SearchSection;
