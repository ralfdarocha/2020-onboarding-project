import React, { useState } from 'react';
import json from './../../../mock/metadata.json'
import pickClassAvatar from './../../../functions/pickClassAvatar';

const ClassFilter = () => {

  const [selectedClass, setClass] = useState<string | undefined>(undefined);
  
  const toggleClass = (item: string) => {
    setClass(item !== selectedClass ? item : undefined);
  }

  return (
    <div className={`filter-component class-filter${selectedClass !== undefined ? ' filtered' : ''}`}>
      <div className="filter-label">Filter by class:</div>
      <div className="class-list">
        {json.classes.filter(item => ['Death Knight', 'Dream'].indexOf(item) === -1).map(item => 
          <label key={item} className={`class-icon${selectedClass === item ? ' selected' : ''}`} onClick={() => toggleClass(item) }>
            <div className="class-img">
              <img src={pickClassAvatar(item)} alt={item} />
            </div>
            <span>{item}</span>
          </label>
        )}
      </div>
    </div>
  )
}

export default ClassFilter;