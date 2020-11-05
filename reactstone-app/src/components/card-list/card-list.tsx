import React, { useEffect } from 'react';
import Card from '../card/card';
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
        {cards !== undefined && cards.length > 0 &&
            cards.map(card => <Card key={card.cardId} {...card} />)
        }
    </div>
  );
}

const mapStateToProps = ({ cards }: RootState) => cards;

export default connect(mapStateToProps, mapDispatchToProps)(CardList);