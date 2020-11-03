import React from 'react';
import Card from '../card/card';
import json from '../../mock/cards.json'

function CardList() {

  return (
    <div className="card-list">
      {json.map(card => <Card key={card.cardId} {...card} />)}
    </div>
  );
}

export default CardList;
