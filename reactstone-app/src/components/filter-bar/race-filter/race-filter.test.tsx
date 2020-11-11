import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { RaceFilter } from '..';
import metadata from './../../../mock/metadata.json'
import { changeFilter } from '../../../store/filter/actions';
import { CHANGE_FILTER, FilterState } from '../../../store/filter/types';

const mockStore = configureStore([]);

describe('<RaceFilter />', () => {
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
            <RaceFilter races={options} />
        </Provider>
    );

    it('should have options', () => {
        expect(component.find('.select-portal-options').exists()).toBeTruthy();
    });

    it('should dispatch changeFilter', () => {
        const payload: FilterState = {
            class: null,
            set: null,
            quality: null,
            race: options[1],
            cost: null
        };
        store.dispatch(changeFilter(payload))
        const actions = store.getActions()
        expect(actions).toEqual([{ payload, type: CHANGE_FILTER }])
    });

});
