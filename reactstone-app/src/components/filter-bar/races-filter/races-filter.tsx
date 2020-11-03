import React, { useState } from 'react';
import Select from 'react-select';
import customStyles from '../../../styles/common-select'
import json from './../../../mock/metadata.json'

const RacesFilter = () => {

  const [selectedRaces, setRaces] = useState<number | undefined>(undefined);
  
  const toggleRaces = (item: number) => {
    setRaces(item !== selectedRaces ? item : undefined);
  }  
  
  return (
    <div className={`filter-component races-filter${selectedRaces !== undefined ? ' filtered' : ''}`}>
      <label htmlFor="races-select" className="filter-label">Filter by race:</label>
      <div className="common-filter-box">
        <Select
          id="races-select"
          styles={customStyles}
          menuPlacement="auto"
          isClearable={true}
          className="common-select"
          classNamePrefix="common-select"
          options={json.races.map(item => ({value: item, label: item }))}
        />
      </div>
    </div>
  )
}

export default RacesFilter;