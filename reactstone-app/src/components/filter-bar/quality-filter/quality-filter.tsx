import React, { useState } from 'react';
import Select from 'react-select';
import customStyles from '../../../styles/common-select'
import json from './../../../mock/metadata.json'

const QualityFilter = () => {

  const [selectedQuality, setQuality] = useState<number | undefined>(undefined);
  
  const toggleQuality = (item: number) => {
    setQuality(item !== selectedQuality ? item : undefined);
  }
  
  return (
    <div className={`filter-component quality-filter${selectedQuality !== undefined ? ' filtered' : ''}`}>
      <label htmlFor="quality-select" className="filter-label">Filter by quality:</label>
      <div className="common-filter-box">
        <Select
          id="quality-select"
          styles={customStyles}
          menuPlacement="auto"
          isClearable={true}
          className="common-select"
          classNamePrefix="common-select"
          options={json.qualities.map(item => ({value: item, label: item }))}
        />
      </div>
    </div>
  )
}

export default QualityFilter;