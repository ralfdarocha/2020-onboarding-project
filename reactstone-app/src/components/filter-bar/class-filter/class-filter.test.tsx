import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ClassFilter } from '..';
import metadata from './../../../mock/metadata.json'
import { changeFilter } from '../../../store/filter/actions';
import { CHANGE_FILTER, FilterState } from '../../../store/filter/types';

const mockStore = configureStore([]);

describe('<ClassFilter />', () => {
    const store = mockStore({
        filter: {
            class: null,
            cost: null,
            quality: null,
            race: null,
            set: null
        }
    });
    const options = metadata.races.map((item: string): IItem => ({ name: item }));

    const component = mount(
        <Provider store={store}>
            <ClassFilter classes={options} />
        </Provider>
    );

    it('should have classes', () => {
        expect(component.find('.class-icon').exists()).toBeTruthy();
    });

    it('should dispatch changeFilter', () => {
        const payload: FilterState = {
            class: options[1],
            set: null,
            quality: null,
            race: null,
            cost: null
        };
        store.dispatch(changeFilter(payload))
        const actions = store.getActions()
        expect(actions).toEqual([{ payload, type: CHANGE_FILTER }])
    });

});
