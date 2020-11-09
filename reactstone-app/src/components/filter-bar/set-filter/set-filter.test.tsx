import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { SetFilter } from '..';
import metadata from './../../../mock/metadata.json'
import { changeFilter } from '../../../store/filter/actions';
import { CHANGE_FILTER, FilterState } from '../../../store/filter/types';
 
const mockStore = configureStore([]);

describe('<SetFilter />', () => { 
  const store = mockStore({
    filter: {
      class: null,
      cost: null,
      quality: null,
      race: null,
      set: null
    }
  });
  const options = metadata.sets.map((item:string):IItem => ({name: item}));

  const component = mount(
    <Provider store={store}>
      <SetFilter sets={options} />
    </Provider>
  );
  
  it('should have options', () => {
    expect(component.find('.select-portal-options').exists()).toBeTruthy();
  });
  
  it('should dispatch changeFilter', () => {
    const payload:FilterState = {
      class: null,
      set: options[1],
      quality: null,
      race: null,
      cost: null
    };
    store.dispatch(changeFilter(payload))
    const actions = store.getActions()
    expect(actions).toEqual([{payload, type: CHANGE_FILTER}])
  });

});
