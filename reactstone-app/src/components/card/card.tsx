import React from 'react';
import { CardProps } from '../../interfaces/card-props'

const Card = (props: CardProps) => {

  return (
    <React.Fragment>
      {props.img != null &&
        <div className={`card${props.type === 'Hero' ? ' card-hero' : ''}`}>
          <img 
            src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${props.cardId}.png`}
            className="card-image"
            alt={props.name}
            loading="lazy"
            width="256"
            height="387"
          />
          {/* <img src={props.img} className="card-image" alt="card name" onError={(evt) => { evt.currentTarget.src = `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${props.cardId}.png` }} />
          {props.imgGold != null &&
            <img src={props.imgGold} className="card-premium" alt="card name" onError={(evt) => { evt.currentTarget.className = 'card-premium fallback'; evt.currentTarget.src = `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${props.cardId}.png` }} />
          } */}
        </div>
      }
    </React.Fragment>
  )
}

export default Card;