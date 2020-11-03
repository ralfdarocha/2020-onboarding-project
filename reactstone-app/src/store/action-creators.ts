import * as actionTypes from "./action-types"
import json from './../mock/cards.json'

export function getCards() {
  const action: AppAction = {
    type: actionTypes.GET_CARDS,
    cards: json,
  }

  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
