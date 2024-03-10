import React from 'react';
import { uniqueId } from 'lodash';
import { ContentOption } from '../../helpers/types';
import { Select } from 'antd';
import './SelectorItem.scss';

interface SelectorItemProps {
  setSelectBy: (value: string) => void;
  selectBy: string;
  defaultValue: string;
  name: string;
  options: ContentOption[];
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
}

function SelectorItem({
  setSelectBy,
  selectBy,
  defaultValue,
  name,
  options,
  setStartIndex,
}: SelectorItemProps) {
  const handleChangeSelector = (value: string) => {
    setSelectBy(value);
    setStartIndex(0);
  };

  return (
    <div className="selector_item">
      {name}
      <Select
        defaultValue={defaultValue as string}
        style={{ width: 120 }}
        onChange={handleChangeSelector}
        options={options.map((i) => ({ value: i.value, label: i.name }))}
      />
      {/* <select value={selectBy} onChange={handleChangeSelector}>
        {options.map((opt) => (
          <option
            key={uniqueId()}
            value={opt.value}
            defaultValue={defaultValue}
          >
            {opt.name}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default SelectorItem;
