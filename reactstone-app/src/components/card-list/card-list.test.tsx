import React from 'react';
import { mount } from 'enzyme';
import { Card, CardList, CardLoader } from '@components/index';
import { Provider } from 'react-redux';
import cardsMock from '@mock/cards.json'
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('<CardList />', () => {
    it('should starts with card loaders', () => {
        const store = mockStore({
            cards: {
                loading: true,
                cards: []
            }
        });
        const component = mount(
            <Provider store={store}>
                <CardList />
            </Provider>
        );
        expect(component.find('.card-list-content').children(CardLoader).exists()).toBe(true);
    });

    it('should have at least one card', () => {
        const store = mockStore({
            cards: {
                loading: false,
                cards: cardsMock
            }
        });
        const component = mount(
            <Provider store={store}>
                <CardList />
            </Provider>
        );
        expect(component.find('.card-list-content').children(Card).exists()).toBe(true);
    });

    it('should have the "no cards" message', () => {
        const store = mockStore({
            cards: {
                loading: false,
                cards: []
            }
        });
        const component = mount(
            <Provider store={store}>
                <CardList />
            </Provider>
        );
        expect(component.find('.no-cards').exists()).toBe(true);
    });
});
