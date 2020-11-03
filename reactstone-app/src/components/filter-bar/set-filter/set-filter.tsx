import React, { useState } from 'react';
import Select from 'react-select';
import customStyles from '../../../styles/common-select'
import json from './../../../mock/metadata.json'

const SetFilter = () => {

  const [selectedSet, setSet] = useState<number | undefined>(undefined);
  
  const toggleSet = (item: number) => {
    setSet(item !== selectedSet ? item : undefined);
  }
  
  return (
    <div className={`filter-component set-filter${selectedSet !== undefined ? ' filtered' : ''}`}>
      <label htmlFor="set-select" className="filter-label">Filter by set:</label>
      <div className="common-filter-box">
        <Select
        menuIsOpen={true}
          id="set-select"
          styles={customStyles}
          menuPlacement="auto"
          isClearable={true}
          className="common-select"
          classNamePrefix="common-select"
          options={json.sets.map(item => ({value: item, label: item }))}
        />
      </div>
    </div>
  )
}

export default SetFilter;