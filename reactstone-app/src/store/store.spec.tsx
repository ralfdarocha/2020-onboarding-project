import 'mocha';
import { expect } from 'chai';
import store from '@store/index'
import { changeFilter } from '@store/filter/actions'
import { setCards, loadCards, openCardDetails, closeCardDetails } from '@store/cards/actions'
import { FilterState } from '@store/filter/types';
import { CardsState } from '@store/cards/types';
import cardsMock from '@mock/cards.json'

describe('Mocha: Store', () => {
    it('changes filters', () => {
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
    it('load cards', () => {
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
    it('sets cards', () => {
        const setCardsAction = setCards(cardsMock);
        store.dispatch(setCardsAction);
        const expectedState:{cards: CardsState, filter: FilterState} = {
            ...store.getState(),
            cards: {
                ...store.getState().cards,
                loading: false,
                cards: cardsMock
            }
        }
        expect(store.getState()).to.deep.equal(expectedState);
    })
    it('opens card details', () => {
        const openCardDetailsAction = openCardDetails(cardsMock[0]);
        store.dispatch(openCardDetailsAction);
        const expectedState:{cards: CardsState, filter: FilterState} = {
            ...store.getState(),
            cards: {
                ...store.getState().cards,
                cardDetails: cardsMock[0],
                detailsOpen: true
            }
        }
        expect(store.getState()).to.deep.equal(expectedState);
    })
    it('close card details', () => {
        const closeCardDetailsAction = closeCardDetails();
        store.dispatch(closeCardDetailsAction);
        const expectedState:{cards: CardsState, filter: FilterState} = {
            ...store.getState(),
            cards: {
                ...store.getState().cards,
                detailsOpen: false
            }
        }
        expect(store.getState()).to.deep.equal(expectedState);
    })
});