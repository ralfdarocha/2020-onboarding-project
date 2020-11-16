import React, { useEffect } from 'react';
import { Card, CardLoader } from '@components/index';
import { connect } from 'react-redux';
import { setCards } from '@store/cards/actions';
import { RootState } from '@store/index';
import { CardsState } from '@store/cards/types';

const mapDispatchToProps = { setCards };

type Props = CardsState & typeof mapDispatchToProps;

const CardList: React.FC<Props> = ({ loading, cards, ...props }: Props) => {

    // Executed only once
    useEffect(() => {
        window.addEventListener('onLoadCards', (event: any): void => {
            props.setCards(event.detail.cards);
        });
        window.addEventListener('errorLoadingCards', (): void => {
            props.setCards([]);
        });
    }, []);

    return (
        <section className={`card-list${loading ? ' is-loading' : ''}`}>
            <div className="card-list-content">
                {loading && Array.from({ length: 12 }).map((num: any, index: number) =>
                    <CardLoader key={`loader-${index}`} />
                )}
                {(!loading && cards.length > 0) &&
                    cards.map(card => <Card key={card.cardId} card={card} />)
                }
            </div>
            {(!loading && !cards.length) &&
                <div className="no-cards">
                    <div className="no-cards-title">No cards found!</div>
                    <div className="no-cards-message">Sorry, we couldn't find any cards with the selected filters.</div>
                </div>
            }
            <svg className="loader" width="120" height="120" viewBox="0 0 120 120" stroke="#fff">
                <g fill="none" fillRule="evenodd" strokeWidth="3">
                    <circle cx="60" cy="60" r="1">
                        <animate attributeName="r" begin="0s" dur="1.8s" values="1; 60" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="60" r="1">
                        <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 60" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
                    </circle>
                </g>
            </svg>
        </section>
    );
}

const mapStateToProps = ({ cards }: RootState) => cards;

export default connect(mapStateToProps, mapDispatchToProps)(CardList);