import * as actionTypes from "./action-types"

const initialState: AppState = {
    cards: [],
    classes: [],
    filters: null,
    qualities: [],
    races: [],
    sets: []
}

const reducer = (
    state: AppState = initialState,
    action: AppAction
): AppState => {
    switch (action.type) {
        case actionTypes.GET_CARDS:
            return {
                ...state,
                cards: state.cards,
            }
    }
    return state
}

export default reducer