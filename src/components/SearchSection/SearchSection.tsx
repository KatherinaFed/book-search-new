import { NavLink } from 'react-router-dom';
import SearchForm from '../../features/SearchForm/SearchForm';
import Selectors from '../Selectors/Selectors';
import { SearchBaseProps } from '../../helpers/types';

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
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <h1>Search for books</h1>
      </NavLink>
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
