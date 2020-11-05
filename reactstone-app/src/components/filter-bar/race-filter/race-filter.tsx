import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { FilterState } from '../../../store/filter/types';
import CustomSelect from '../../custom-select/custom-select';
import { loadCards } from './../../../store/cards/actions';
import { changeFilter } from './../../../store/filter/actions';

const mapDispatchToProps = { loadCards, changeFilter };

interface RaceFilterProps {
  races: IItem[]
}
type Props = RaceFilterProps & FilterState & typeof mapDispatchToProps;

const RaceFilter: React.FC<Props> = ({ races, ...props }) => {
  
  const toggleRace = (item:IItem | null) => {
    props.loadCards();
    props.changeFilter({
      class: null,
      cost: props.cost,
      quality: null,
      race: item != null ? item : null,
      set: null,
    });
    if (
      (props.race == null && item !== null) ||
      (props.race !== null && item !== null && item.name !== props.race.name)
    ) {
      window.dispatchEvent(
        new CustomEvent('onRaceChange', {
          detail: { slug: item.name },
        })
      );
    } else {
      window.dispatchEvent(
        new CustomEvent('onResetFilters')
      );
    }
  }
  
  return (
    <div className={`filter-component race-filter${props.race !== null ? ' filtered' : ''}`}>
      <div className="filter-label">Filter by race:</div>
      <CustomSelect
          label="Filter by race"
          options={races}
          onSelect={toggleRace}
          selected={props.race}
      />
    </div>
  )
}
const mapStateToProps = ({ filter }: RootState) => filter;

export default connect(mapStateToProps, mapDispatchToProps)(RaceFilter);