import React from 'react';

interface Props {
  card: ICard
}

const Card: React.FC<Props> = ({ card }: Props) => {

  return (
    <React.Fragment>
      {card.img != null &&
        <div className={`card${card.type === 'Hero' ? ' card-hero' : ''}`}>
          <img 
            src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.cardId}.png`}
            className="card-image"
            alt={card.name}
            loading="lazy"
            width="256"
            height="387"
          />
          {/* <img src={card.img} className="card-image" alt="card name" onError={(evt) => { evt.currentTarget.src = `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${card.cardId}.png` }} />
          {card.imgGold != null &&
            <img src={card.imgGold} className="card-premium" alt="card name" onError={(evt) => { evt.currentTarget.className = 'card-premium fallback'; evt.currentTarget.src = `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${card.cardId}.png` }} />
          } */}
        </div>
      }
    </React.Fragment>
  )
}

export default Card;