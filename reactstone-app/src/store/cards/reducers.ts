import { CardsState, CardsTypes, SET_CARDS, LOADING_CARDS, OPEN_CARD_DETAILS, CLOSE_CARD_DETAILS } from './types'

const initialState: CardsState = {
    loading: true,
    cards: [],
    cardDetails: null,
    detailsOpen: false
}

export function cardsReducer(
    state = initialState,
    action: CardsTypes
): CardsState {
    switch (action.type) {
        case SET_CARDS: {
            return {
                ...state,
                cards: action.payload,
                loading: false
            }
        }
        case LOADING_CARDS: {
            return {
                ...state,
                loading: true
            }
        }
        case OPEN_CARD_DETAILS: {
            return {
                ...state,
                cardDetails: action.payload,
                detailsOpen: true
            }
        }
        case CLOSE_CARD_DETAILS: {
            return {
                ...state,
                detailsOpen: false
            }
        }
        default:
            return state
    }
}