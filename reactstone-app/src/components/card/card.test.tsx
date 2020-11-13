import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '@components/index';
import cardsMock from '@mock/cards.json'
import renderer from 'react-test-renderer';

describe('<Card />', () => {

    it('renders correctly', () => {
        const tree = renderer.create(
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
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders image fallback', () => {
        const tree = renderer.create(
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
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('shouldn\'t have an image', () => {
        const { img, ...card } = cardsMock[0];
        const component = shallow(<Card card={card} />);
        expect(component.find('img').exists()).toBeFalsy();
    });

});
