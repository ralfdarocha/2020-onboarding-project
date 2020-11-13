import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '@store/index';
import { FilterState } from '@store/filter/types';
import { CustomSelect } from '@components/index';
import { loadCards } from '@store/cards/actions';
import { changeFilter } from '@store/filter/actions';

const mapDispatchToProps = { loadCards, changeFilter };

interface RaceFilterProps {
    races: IItem[]
}
type Props = RaceFilterProps & FilterState & typeof mapDispatchToProps;

const RaceFilter: React.FC<Props> = ({ races, ...props }) => {

    const filterByRace = (item: IItem | null) => {
        props.loadCards();
        props.changeFilter({
            class: null,
            cost: props.cost,
            quality: null,
            race: item != null ? item : null,
            set: null,
        });
        if (item === null) {
            window.dispatchEvent(
                new CustomEvent('onResetFilters')
            );
        } else if (props.race === null || item.name !== props.race.name) {
            window.dispatchEvent(
                new CustomEvent('onRaceChange', {
                    detail: { slug: item.name },
                })
            );
        }
    }

    return (
        <div className={`filter-component race-filter${props.race !== null ? ' filtered' : ''}`}>
            <div className="filter-label">Filter by race:</div>
            <CustomSelect
                label="Filter by race"
                options={races}
                onSelect={filterByRace}
                selected={props.race}
            />
        </div>
    )
}
const mapStateToProps = ({ filter }: RootState) => filter;

export default connect(mapStateToProps, mapDispatchToProps)(RaceFilter);