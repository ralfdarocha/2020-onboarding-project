import { FilterState, FilterTypes, CHANGE_FILTER } from './types'

const initialState: FilterState = {
    class: null,
    cost: null,
    quality: null,
    race: null,
    set: null,
}

export function filterReducer(
    state = initialState,
    action: FilterTypes
): FilterState {
    switch (action.type) {
        case CHANGE_FILTER: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}