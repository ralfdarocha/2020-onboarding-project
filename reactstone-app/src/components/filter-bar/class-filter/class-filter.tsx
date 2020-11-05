import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { FilterState } from '../../../store/filter/types';
import pickClassAvatar from './../../../functions/pickClassAvatar';
import { loadCards } from './../../../store/cards/actions'
import { changeFilter } from './../../../store/filter/actions';

const mapDispatchToProps = { loadCards, changeFilter };

interface ClassFilterProps {
  classes: IItem[]
}

type Props = ClassFilterProps & FilterState & typeof mapDispatchToProps;

const ClassFilter: React.FC<Props> = ({ classes, ...props }) => {

  const toggleClass = (item:IItem | null) => {
    props.loadCards();
    if (
      (props.class == null && item !== null) ||
      (props.class !== null && item !== null && item.name !== props.class.name)
    ) {
      window.dispatchEvent(
        new CustomEvent('onClassChange', {
          detail: { slug: item.name },
        })
        );
    } else {
      item = null;
      window.dispatchEvent(
        new CustomEvent('onResetFilters')
      );
    }
    props.changeFilter({
      class: item != null ? item : null,
      cost: props.cost,
      quality: null,
      race: null,
      set: null,
    });
  }

  return (
    <div className={`filter-component class-filter${props.class !== null ? ' filtered' : ''}`}>
      <div className="filter-label">Filter by class:</div>
      <div className="class-list">
        {classes.map((item:IItem, key:number) => 
          <label key={key} className={`class-icon${props.class && props.class.name === item.name ? ' selected' : ''}`} onClick={() => toggleClass(item) }>
            <div className="class-img">
              <img src={pickClassAvatar(item.name)} alt={item.name} />
            </div>
            <span>{item.name}</span>
          </label>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ filter }: RootState) => filter;

export default connect(mapStateToProps, mapDispatchToProps)(ClassFilter);