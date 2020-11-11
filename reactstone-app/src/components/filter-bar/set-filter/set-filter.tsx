import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { FilterState } from '../../../store/filter/types';
import CustomSelect from '../../custom-select/custom-select';
import { loadCards } from './../../../store/cards/actions';
import { changeFilter } from './../../../store/filter/actions';

const mapDispatchToProps = { loadCards, changeFilter };

interface SetFilterProps {
    sets: IItem[]
}
type Props = SetFilterProps & FilterState & typeof mapDispatchToProps;

const SetFilter: React.FC<Props> = ({ sets, ...props }) => {

    const filterBySet = (item: IItem | null) => {
        props.loadCards();
        props.changeFilter({
            class: null,
            set: item != null ? item : null,
            quality: null,
            race: null,
            cost: props.cost
        });
        if (item === null) {
            window.dispatchEvent(
                new CustomEvent('onResetFilters')
            );
        } else if (props.set === null || item.name !== props.set.name) {
            window.dispatchEvent(
                new CustomEvent('onSetChange', {
                    detail: { slug: item.name },
                })
            );
        }
    }

    return (
        <div className={`filter-component set-filter${props.set !== null ? ' filtered' : ''}`}>
            <div className="filter-label">Filter by set:</div>
            <CustomSelect
                label="Filter by set"
                options={sets}
                onSelect={filterBySet}
                selected={props.set}
            />
        </div>
    )
}
const mapStateToProps = ({ filter }: RootState) => filter;

export default connect(mapStateToProps, mapDispatchToProps)(SetFilter);