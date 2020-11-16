import { RootState } from '@store/index';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { closeCardDetails } from '@store/cards/actions';
import { CardsState } from '@store/cards/types';
import Card from '@components/card/card';

const mapDispatchToProps = { closeCardDetails };

type Props = CardsState & typeof mapDispatchToProps;

const CardDetails: React.FC<Props> = ({ detailsOpen, cardDetails, ...props }: Props) => {

    const [animate, setAnimation] = useState<boolean>(false);

    useEffect(() => {
        if (detailsOpen) {
            setTimeout(() => {
                setAnimation(true);
            },200)
        } else {
            setAnimation(false);
        }
    },[detailsOpen]);

    return (
        <div className={`card-details${cardDetails !== null && detailsOpen ? ' is-open' : ''}`} onClick={props.closeCardDetails}>
            {(cardDetails !== null && detailsOpen) &&
                <div className="card-details-wrapper" onClick={(e):void => e.stopPropagation()}>
                    <button type="button" className="close-details" onClick={props.closeCardDetails}>
                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>
                    </button>
                    <div className="card-wrapper">
                        <Card card={cardDetails} details={true} />
                    </div>
                    <ul className={`card-details-content${animate ? ' animate' : ''}`}>
                        <li><strong>Name: </strong><span>{cardDetails.name}</span></li>
                        <li><strong>Set: </strong><span>{cardDetails.cardSet}</span></li>
                        <li><strong>Type: </strong><span>{cardDetails.type}</span></li>
                        {(cardDetails.race !== undefined && cardDetails.race !== null) &&
                        <li><strong>Race: </strong><span>{cardDetails.race}</span></li>
                        }
                        <li><strong>Player Class: </strong><span>{cardDetails.playerClass}</span></li>
                        {(cardDetails.rarity !== undefined && cardDetails.rarity !== null) &&
                        <li><strong>Rarity: </strong><span>{cardDetails.rarity}</span></li>
                        }
                        {(cardDetails.faction !== undefined && cardDetails.faction !== null) &&
                        <li><strong>Faction: </strong><span>{cardDetails.faction}</span></li>
                        }
                        {(cardDetails.howToGet !== undefined && cardDetails.howToGet !== null) &&
                        <li><strong>How to get: </strong><span>{cardDetails.howToGet}</span></li>
                        }
                        {(cardDetails.howToGetGold !== undefined && cardDetails.howToGetGold !== null) &&
                        <li><strong>How to get gold: </strong><span>{cardDetails.howToGetGold}</span></li>
                        }
                        {(cardDetails.flavor !== undefined && cardDetails.flavor !== null) &&
                        <li><strong>Flavor: </strong><span>{cardDetails.flavor.replace(/\\n/g, " ")}</span></li>
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

const mapStateToProps = ({ cards }: RootState) => cards;

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);