import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { connect } from 'react-redux';
import { openCardDetails } from '@store/cards/actions';
import { CardsTypes } from '@store/cards/types';

interface CardProps {
    card: ICard,
    details?: boolean
}

const mapDispatchToProps = { openCardDetails };

type Props = CardProps & typeof mapDispatchToProps;

const Card: React.FC<Props> = ({ card, details = false, ...props }: Props) => {

    const [hasImage, setHasImage] = useState<boolean>(card.img !== null && card.img !== undefined);

    return (
        <div 
            onClick={!details ? ():CardsTypes => props.openCardDetails(card) : undefined}
            className={`card${card.type === 'Hero' ? ' card-hero' : ''}${!hasImage ? ' no-image' : ''}`}
        >
            {hasImage &&
                <LazyLoadImage
                    src={`https://art.hearthstonejson.com/v1/render/latest/enUS/${details ? '512x': '256x'}/${card.cardId}.png`}
                    className="card-image"
                    alt={card.name}
                    effect="opacity"
                    width={details ? "512" : "256"}
                    height={details ? "776" : "387"}
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

export default connect(null, mapDispatchToProps)(Card);