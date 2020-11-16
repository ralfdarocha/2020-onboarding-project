import { paginator, pageSize } from '@functions/paginator'
import { CardsState, CardsTypes, SET_CARDS, LOADING_CARDS, OPEN_CARD_DETAILS, CLOSE_CARD_DETAILS, LOAD_MORE } from './types'

const initialState: CardsState = {
    loading: true,
    cards: [],
    allCards: [],
    page: 1,
    totalPages: 1,
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
                allCards: action.payload,
                cards: paginator(action.payload),
                page: 1,
                totalPages: Math.ceil(action.payload.length / pageSize),
                loading: false
            }
        }
        case LOAD_MORE: {
            const nextPage:number = state.page + 1;
            return {
                ...state,
                page: nextPage,
                cards: state.cards.concat(paginator(state.allCards, nextPage))
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