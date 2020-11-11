import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ManaFilter } from '..';
import { changeFilter } from '../../../store/filter/actions';
import { CHANGE_FILTER, FilterState } from '../../../store/filter/types';

const mockStore = configureStore([]);

describe('<ManaFilter />', () => {
    const store = mockStore({
        filter: {
            class: null,
            cost: null,
            quality: null,
            race: null,
            set: null
        }
    });

    const component = mount(
        <Provider store={store}>
            <ManaFilter />
        </Provider>
    );

    it('should have mana options', () => {
        expect(component.find('.mana-icon').exists()).toBeTruthy();
    });

    it('should dispatch changeFilter', () => {
        const payload: FilterState = {
            class: null,
            set: null,
            quality: null,
            race: null,
            cost: 3
        };
        store.dispatch(changeFilter(payload))
        const actions = store.getActions()
        expect(actions).toEqual([{ payload, type: CHANGE_FILTER }])
    });

});
