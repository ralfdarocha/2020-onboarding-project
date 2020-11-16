import { CardsTypes, SET_CARDS, LOADING_CARDS, OPEN_CARD_DETAILS, CLOSE_CARD_DETAILS } from './types'

export function setCards(newCards: ICard[]): CardsTypes {
    return {
        type: SET_CARDS,
        payload: newCards
    }
}

export function loadCards(): CardsTypes {
    return {
        type: LOADING_CARDS,
    }
}

export function openCardDetails(card: ICard): CardsTypes {
    return {
        type: OPEN_CARD_DETAILS,
        payload: card
    }
}

export function closeCardDetails(): CardsTypes {
    return {
        type: CLOSE_CARD_DETAILS
    }
}