import React, { useState } from 'react';

interface Props {
    card: ICard
}

const Card: React.FC<Props> = ({ card }: Props) => {

    const [hasImage, setHasImage] = useState<boolean>(card.img !== null && card.img !== undefined);

    return (
        <div className={`card${card.type === 'Hero' ? ' card-hero' : ''}${!hasImage ? ' no-image' : ''}`}>
            {hasImage &&
                <img
                    src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.cardId}.png`}
                    className="card-image"
                    alt={card.name}
                    loading="lazy"
                    width="256"
                    height="387"
                    onError={() => setHasImage(false)}
                />
            }
            {!hasImage &&
                <div className="no-image-card">
                    <div className="card-image">Image not found</div>
                    <div className="card-cost">
                        <span>{card.cost | 0}</span>
                    </div>
                    <div className="card-title">
                        <span>{card.name}</span>
                    </div>
                    {(card.text !== undefined && card.text !== null) &&
                        <div className="card-text" dangerouslySetInnerHTML={{ __html: card.text.replace(/\\n/g, "") }}></div>
                    }
                    {(card.attack !== undefined && card.attack !== null) &&
                        <div className="card-attack">
                            <span>{card.attack}</span>
                        </div>
                    }
                    {(card.health !== undefined && card.health !== null) &&
                        <div className="card-health">
                            <span>{card.health}</span>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Card;