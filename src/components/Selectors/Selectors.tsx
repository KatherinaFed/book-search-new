import SelectorItem from '../SelectorItem/SelectorItem';
import { categories, sortingBy } from '../../helpers/const';
import { SearchBaseProps } from '../../helpers/types';
import './Selectors.scss'

function Selectors({
  setFilterBy,
  filterBy,
  setOrderBy,
  orderBy,
  setStartIndex,
}: SearchBaseProps) {
  return (
    <div className="selectors_container">
      <SelectorItem
        setSelectBy={setFilterBy}
        selectBy={filterBy}
        defaultValue={'all'}
        name={'Category'}
        options={categories}
        setStartIndex={setStartIndex}
      />
      <SelectorItem
        setSelectBy={setOrderBy}
        selectBy={orderBy}
        defaultValue={'relevance'}
        name={'Sorting by'}
        options={sortingBy}
        setStartIndex={setStartIndex}
      />
    </div>
  );
}

export default Selectors;
