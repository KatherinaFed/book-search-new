import React from 'react';
import { uniqueId } from 'lodash';
import { ContentOption } from '../../helpers/types';

interface SelectorItemProps {
  setSelectBy: (value: string) => void;
  selectBy: string;
  defaultValue: string;
  name: string;
  options: ContentOption[];
  setStartIndex: (value: number) => void;
}

function SelectorItem({
  setSelectBy,
  selectBy,
  defaultValue,
  name,
  options,
  setStartIndex,
}: SelectorItemProps) {
  const handleChangeSelector = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectBy(e.target.value);
    setStartIndex(0);
  };

  return (
    <div className="selector_item">
      {name}
      <select value={selectBy} onChange={handleChangeSelector}>
        {options.map((opt) => (
          <option
            key={uniqueId()}
            value={opt.value}
            defaultValue={defaultValue}
          >
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectorItem;
