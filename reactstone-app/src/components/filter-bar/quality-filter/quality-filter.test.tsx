import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { QualityFilter } from '@components/filter-bar';
import metadata from '@mock/metadata.json'
import { changeFilter } from '@store/filter/actions';
import { CHANGE_FILTER, FilterState } from '@store/filter/types';
import waitForComponentToPaint from '@functions/waitForComponentToPaint';

const mockStore = configureStore([]);

describe('<QualityFilter />', () => {
    const store = mockStore({
        filter: {
            class: null,
            cost: null,
            quality: null,
            race: null,
            set: null
        }
    });
    const options = metadata.qualities.map((item: string): IItem => ({ name: item }));

    const component = mount(
        <Provider store={store}>
            <QualityFilter qualities={options} />
        </Provider>
    );
    waitForComponentToPaint(component);

    it('should have options', () => {
        expect(component.find('.select-portal-options').exists()).toBeTruthy();
    });

    it('should dispatch changeFilter', () => {
        const payload: FilterState = {
            class: null,
            set: null,
            quality: options[1],
            race: null,
            cost: null
        };
        store.dispatch(changeFilter(payload))
        const actions = store.getActions()
        expect(actions).toEqual([{ payload, type: CHANGE_FILTER }])
    });

});
