export const SET_CARDS = "SET_CARDS"
export const LOADING_CARDS = "LOADING_CARDS"
export const OPEN_CARD_DETAILS = "OPEN_CARD_DETAILS"
export const CLOSE_CARD_DETAILS = "CLOSE_CARD_DETAILS"

export interface CardsState {
    loading: boolean,
    cards: ICard[],
    cardDetails: ICard | null,
    detailsOpen: boolean
}

interface SetCardsAction {
    type: typeof SET_CARDS
    payload: ICard[]
}

interface LoadingCardsAction {
    type: typeof LOADING_CARDS
}

interface OpenCardDetailsAction {
    type: typeof OPEN_CARD_DETAILS
    payload: ICard
}

interface CloseCardDetailsAction {
    type: typeof CLOSE_CARD_DETAILS
}

export type CardsTypes = SetCardsAction | LoadingCardsAction | OpenCardDetailsAction | CloseCardDetailsAction