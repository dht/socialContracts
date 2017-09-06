import {createStore, applyMiddleware, compose} from 'redux'
import ReduxThunk from 'redux-thunk'

import autosave from './middlewares/autosave'

import app from './reducers/index';

// TODO: remove in product
// window.devToolsExtension for redux extension
export default createStore(app, compose(applyMiddleware(ReduxThunk, autosave), //, autosave
    window.devToolsExtension ? window.devToolsExtension() : f => f));

