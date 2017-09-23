import {combineReducers} from 'redux'

import appState from 'social-contracts/reducers/appState/appState'
import uiState from './UIState/UIState'

import {routerReducer} from 'react-router-redux'

export default combineReducers({
    appState,
    uiState,
    routing: routerReducer,
})