import {combineReducers} from 'redux'

import appState from './appState/appState'

import {routerReducer} from 'react-router-redux'

export default combineReducers({
    appState,
    routing: routerReducer,
})