import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { loadState, saveState } from '../utilities'
import throttle from 'lodash-es/throttle'

import initialState from '../reducers/initialState'
import { rootReducer } from '../reducers/root'

import { logger } from './middleware'

// enable logging in development
const configureStore =
  process.env.NODE_ENV === 'development'
    ? initialState => createStore(rootReducer, initialState, compose(applyMiddleware(logger, thunk)))
    : initialState => createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))

const persistedState = loadState()
const store = configureStore({ ...initialState, ...persistedState })

store.subscribe(
  throttle(() => {
    const state = store.getState()

    saveState(state)
  }, 1000)
)

export { store }
