import React, { useState } from 'react';

const ManaFilter = () => {

  const [selectedMana, setMana] = useState<number | undefined>(undefined);
  
  const toggleMana = (item: number) => {
    setMana(item !== selectedMana ? item : undefined);
  }

  return (
    <div className={`filter-component mana-filter${selectedMana !== undefined ? ' filtered' : ''}`}>
      <div className="filter-label">Filter by mana cost:</div>
      <div className="common-filter-box">
        {Array.from({length: 10}, (_, i) => i + 1).map(manaCost => 
          <div key={manaCost} className={`mana-icon${selectedMana === manaCost ? ' selected' : ''}`} onClick={() => toggleMana(manaCost)}>
            <span>{manaCost}</span>
            {manaCost === 10 && 
              <span>+</span>
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default ManaFilter;