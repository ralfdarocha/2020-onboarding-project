import 'mocha';
import { expect } from 'chai';
import store from '@store/index'
import { changeFilter } from '@store/filter/actions'
import { setCards, loadCards } from '@store/cards/actions'
import { FilterState } from '@store/filter/types';
import { CardsState } from '@store/cards/types';
import cardsMock from '@mock/cards.json'

describe('Mocha: Store', () => {
    it('Change filter', () => {
        const changeFilterAction = changeFilter({
            class: {name: 'Hunter'},
            cost: 1,
            quality: null,
            race: null,
            set: null
        });
        store.dispatch(changeFilterAction);
        const expectedState:{cards: CardsState, filter: FilterState} = {
            ...store.getState(),
            filter: {
                class: {name: 'Hunter'},
                cost: 1,
                quality: null,
                race: null,
                set: null
            }
        }
        expect(store.getState()).to.deep.equal(expectedState);
    })
    it('Load Cards', () => {
        const loadCardsAction = loadCards();
        store.dispatch(loadCardsAction);
        const expectedState:{cards: CardsState, filter: FilterState} = {
            ...store.getState(),
            cards: {
                ...store.getState().cards,
                loading: true,
            }
        }
        expect(store.getState()).to.deep.equal(expectedState);
    })
    it('Set Cards', () => {
        const setCardsAction = setCards(cardsMock);
        store.dispatch(setCardsAction);
        const expectedState:{cards: CardsState, filter: FilterState} = {
            ...store.getState(),
            cards: {
                loading: false,
                cards: cardsMock
            }
        }
        expect(store.getState()).to.deep.equal(expectedState);
    })
});