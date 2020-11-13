import { FilterState, FilterTypes, CHANGE_FILTER } from './types'

export function changeFilter(newFilter: FilterState): FilterTypes {
    return {
        type: CHANGE_FILTER,
        payload: newFilter
    }
}