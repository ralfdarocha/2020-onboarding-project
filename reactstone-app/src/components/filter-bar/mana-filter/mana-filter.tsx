import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { FilterState } from '../../../store/filter/types';
import { loadCards } from './../../../store/cards/actions';
import { changeFilter } from './../../../store/filter/actions';

const mapDispatchToProps = { loadCards, changeFilter };

type Props = FilterState & typeof mapDispatchToProps;

const ManaFilter: React.FC<Props> = (props) => {

    const changeCost = (cost: number | null) => {
        if (cost == props.cost)
            cost = null;
        props.loadCards();
        props.changeFilter({
            class: props.class,
            set: props.set,
            quality: props.quality,
            race: props.race,
            cost: cost
        });
        window.dispatchEvent(
            new CustomEvent('onManaCostChange', {
                detail: { cost },
            })
        );
    }

    return (
        <div className={`filter-component mana-filter${props.cost !== null ? ' filtered' : ''}`}>
            <div className="filter-label">Filter by mana cost:</div>
            <div className="common-filter-box">
                {Array.from({ length: 10 }, (_, i) => i + 1).map(manaCost =>
                    <div key={manaCost} className={`mana-icon${props.cost === manaCost ? ' selected' : ''}`} onClick={() => changeCost(manaCost)}>
                        <span>{manaCost}</span>
                        {manaCost === 10 &&
                            <span>+</span>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}
const mapStateToProps = ({ filter }: RootState) => filter;

export default connect(mapStateToProps, mapDispatchToProps)(ManaFilter);