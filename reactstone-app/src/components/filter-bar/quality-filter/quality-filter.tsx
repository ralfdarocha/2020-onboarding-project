import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { FilterState } from '../../../store/filter/types';
import CustomSelect from '../../custom-select/custom-select';
import { loadCards } from './../../../store/cards/actions';
import { changeFilter } from './../../../store/filter/actions';

const mapDispatchToProps = { loadCards, changeFilter };

interface QualityFilterProps {
  qualities: IItem[]
}
type Props = QualityFilterProps & FilterState & typeof mapDispatchToProps;

const QualityFilter: React.FC<Props> = ({ qualities, ...props }) => {
  
  const toggleQuality = (item:IItem | null) => {
    props.loadCards();
    props.changeFilter({
      class: null,
      cost: props.cost,
      quality: item != null ? item : null,
      race: null,
      set: null,
    });
    if (
      (props.quality == null && item !== null) ||
      (props.quality !== null && item !== null && item.name !== props.quality.name)
    ) {
      window.dispatchEvent(
        new CustomEvent('onQualityChange', {
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
    <div className={`filter-component quality-filter${props.quality !== null ? ' filtered' : ''}`}>
      <div className="filter-label">Filter by quality:</div>
      <CustomSelect
          label="Filter by quality"
          options={qualities}
          onSelect={toggleQuality}
          selected={props.quality}
      />
    </div>
  )
}
const mapStateToProps = ({ filter }: RootState) => filter;

export default connect(mapStateToProps, mapDispatchToProps)(QualityFilter);