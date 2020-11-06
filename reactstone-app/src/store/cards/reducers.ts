import { CardsState, CardsTypes, SET_CARDS, LOADING_CARDS } from './types'

const initialState: CardsState = {
    loading: true,
    cards: []
}

export function cardsReducer(
  state = initialState,
  action: CardsTypes
): CardsState {
  switch (action.type) {
    case SET_CARDS: {
      return {
        ...action.payload
      }
    }
    case LOADING_CARDS: {
      return {
        ...state,
        loading: true,
      }
    }
    default:
      return state
  }
}