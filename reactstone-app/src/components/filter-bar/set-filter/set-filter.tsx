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
  
  const toggleSet = (item:IItem | null) => {
    props.loadCards();
    props.changeFilter({
      class: null,
      set: item != null ? item : null,
      quality: null,
      race: null,
      cost: props.cost
    });
    if (
      (props.set == null && item !== null) ||
      (props.set !== null && item !== null && item.name !== props.set.name)
    ) {
      window.dispatchEvent(
        new CustomEvent('onSetChange', {
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
    <div className={`filter-component set-filter${props.set !== null ? ' filtered' : ''}`}>
      <div className="filter-label">Filter by set:</div>
      <CustomSelect
          label="Filter by set"
          options={sets}
          onSelect={toggleSet}
          selected={props.set}
      />
    </div>
  )
}
const mapStateToProps = ({ filter }: RootState) => filter;

export default connect(mapStateToProps, mapDispatchToProps)(SetFilter);