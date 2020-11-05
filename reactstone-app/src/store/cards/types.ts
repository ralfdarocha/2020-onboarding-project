export const SET_CARDS = "SET_CARDS"
export const LOADING_CARDS = "LOADING_CARDS"

export interface CardsState {
    loading: boolean,
    cards: ICard[],
}

interface SetCardsAction {
    type: typeof SET_CARDS
    payload: CardsState
}

interface LoadingCardsAction {
    type: typeof LOADING_CARDS
}

export type CardsTypes = SetCardsAction | LoadingCardsAction