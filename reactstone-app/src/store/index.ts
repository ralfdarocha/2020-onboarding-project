import { applyMiddleware, combineReducers, createStore } from 'redux'
import { cardsReducer } from './cards/reducers'
import { filterReducer } from './filter/reducers'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    cards: cardsReducer,
    filter: filterReducer
})

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export type RootState = ReturnType<typeof rootReducer>

export default createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);
