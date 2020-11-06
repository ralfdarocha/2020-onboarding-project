import React, { useEffect } from 'react';
import Card from '../card/card';
import CardLoader from '../card-loader/card-loader';
import { connect } from 'react-redux';
import { setCards } from '../../store/cards/actions';
import { RootState } from '../../store';
import { CardsState } from '../../store/cards/types';

const mapDispatchToProps = { setCards };

type Props = CardsState & typeof mapDispatchToProps;

const CardList: React.FC<Props> = ({ loading, cards, ...props }: Props) => {
  // Executed only once
  useEffect(() => {
    window.addEventListener('onLoadCards', (event: any) => {
      props.setCards(event.detail.cards);
    });
  }, []);

  return (
    <div className={`card-list${loading ? ' is-loading' : ''}`}>
      {loading && Array.from({length: 12}).map(() => 
        <CardLoader />
      )}
      {(!loading && cards !== undefined && cards.length > 0) &&
        cards.map(card => <Card key={card.cardId} card={card} />)
      }
      <svg className="loader" width="120" height="120" viewBox="0 0 120 120" stroke="#fff"><g fill="none" fill-rule="evenodd" stroke-width="3"><circle cx="60" cy="60" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 60" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="60" cy="60" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 60" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>
    </div>
  );
}

const mapStateToProps = ({ cards }: RootState) => cards;

export default connect(mapStateToProps, mapDispatchToProps)(CardList);