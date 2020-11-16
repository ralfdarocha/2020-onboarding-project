import React from 'react';
import { mount } from 'enzyme';
import { Card } from '@components/index';
import cardsMock from '@mock/cards.json'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';

const mockStore = configureStore([]);

describe('<Card />', () => {
    const store = mockStore({});

    it('renders correctly', () => {
        const component = mount(
            <Provider store={store}>
                <Card card={{
                    "cardId": "HERO_07",
                    "dbfId": "893",
                    "name": "Gul'dan",
                    "cardSet": "Basic",
                    "type": "Hero",
                    "faction": "Neutral",
                    "rarity": "Free",
                    "health": 30,
                    "collectible": true,
                    "playerClass": "Warlock",
                    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/HERO_07.png",
                    "locale": "enUS"
                }} />
            </Provider>
        );
        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders image fallback', () => {
        const component = mount(
            <Provider store={store}>
                <Card card={{
                    cardId: "HERO_08f",
                    cardSet: "Hero Skins",
                    collectible: true,
                    dbfId: "61598",
                    faction: "Neutral",
                    health: 30,
                    locale: "enUS",
                    name: "Scholar Jaina",
                    playerClass: "Mage",
                    rarity: "Free",
                    type: "Hero"
                }} />
            </Provider>
        );
        expect(toJson(component)).toMatchSnapshot();
    });

    it('shouldn\'t have an image', () => {
        const { img, ...card } = cardsMock[0];
        
        const component = mount(
            <Provider store={store}>
                <Card card={card}/>
            </Provider>
        );
        expect(component.find('img').exists()).toBeFalsy();
    });

});
