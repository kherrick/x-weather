import thunk from 'redux-thunk'

import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers/root'

import initialState from '../reducers/initialState'

import { logger } from './middleware'

// enable logging in development
const configureStore =
  process.env.NODE_ENV === 'development'
    ? initialState => createStore(rootReducer, initialState, compose(applyMiddleware(logger, thunk)))
    : initialState => createStore(rootReducer, initialState, compose(applyMiddleware(thunk)))

export const store = configureStore(initialState)
