import React from 'react';

interface Props {
  card: ICard
}

const Card: React.FC<Props> = ({ card }: Props) => {

  return (
    <div className={`card${card.type === 'Hero' ? ' card-hero' : ''}`}>
      {card.img != null &&
        <img 
          src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.cardId}.png`}
          className="card-image"
          alt={card.name}
          loading="lazy"
          width="256"
          height="387"
        />
      }
    </div>
  )
}

export default Card;