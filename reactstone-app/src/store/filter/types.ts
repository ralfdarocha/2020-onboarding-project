export const CHANGE_FILTER = "CHANGE_FILTER"

export interface FilterState {
    class: IItem | null;
    cost: number | null;
    quality: IItem | null;
    race: IItem | null;
    set: IItem | null;
}

interface GetFilterAction {
    type: typeof CHANGE_FILTER
    payload: FilterState
}

export type FilterTypes = GetFilterAction