import { CardsState, CardsTypes, SET_CARDS, LOADING_CARDS } from './types'

export function setCards(newCards: ICard[]): CardsTypes {
  return {
    type: SET_CARDS,
    payload: { 
      cards: newCards,
      loading: false
    }
  }
}

export function loadCards(): CardsTypes {
  return {
    type: LOADING_CARDS,
  }
}