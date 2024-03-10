import { NavLink } from 'react-router-dom';
import SearchForm from '../../features/SearchForm/SearchForm';
import Selectors from '../Selectors/Selectors';
import { SearchBaseProps } from '../../helpers/types';
import { motion } from 'framer-motion';
import './SearchSection.scss';

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
  return (
    <section className="search_container">
      <div className="title_link">
        <NavLink
          to="/"
          style={{ textDecoration: 'none', width: 'fit-content' }}
        >
          <motion.h1
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 0.5,
            }}
          >
            Search for books
          </motion.h1>
          <h2>Discover Your Next Adventure</h2>
        </NavLink>
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
