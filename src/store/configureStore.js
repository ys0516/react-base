import React from 'react'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

const rootReducer = combineReducers(reducers)

const isDev = (process.env.NODE_ENV !== 'production')

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        isDev ? applyMiddleware(thunkMiddleware, createLogger()) : applyMiddleware(thunkMiddleware)
    )
}
