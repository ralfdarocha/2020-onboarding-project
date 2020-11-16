import React from 'react';
import { mount } from 'enzyme';
import { CardDetails } from '@components/index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import waitForComponentToPaint from '@functions/waitForComponentToPaint';
import cardsMock from '@mock/cards.json'

const mockStore = configureStore([]);

describe('<CardDetails />', () => {
    it('should starts closed', () => {
        const store = mockStore({
            cards: {
                cardDetails: null,
                detailsOpen: false
            }
        });
        const component = mount(
            <Provider store={store}>
                <CardDetails />
            </Provider>
        );
        waitForComponentToPaint(component);
        expect(component.find('.card-details').hasClass('is-open')).toBeFalsy();
    });
    it('should be opened', () => {
        const store = mockStore({
            cards: {
                cardDetails: cardsMock[0],
                detailsOpen: true
            }
        });
        const component = mount(
            <Provider store={store}>
                <CardDetails />
            </Provider>
        );
        waitForComponentToPaint(component);
        expect(component.find('.card-details').hasClass('is-open')).toBeTruthy();
    });
});
