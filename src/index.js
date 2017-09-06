import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, hashHistory} from 'react-router'

import store from './store';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/AppContainer';
import View from './components/View/View';
import Image from './components/Image/ImageContainer';

import registerServiceWorker from './registerServiceWorker';
import {guid8} from './utils/guid';
import {login, loadContract, setDefaultContract} from './reducers/app_thunks';

const onEnterView = (location) => {
    const {params} = location,
        {id} = params;

    store.dispatch(login(id))
        .then(() => {
            store.dispatch(loadContract(id));
        });
}

const onEnterEdit = (location) => {
    const {params} = location,
        {id} = params;

    store.dispatch(login(id))
        .then(() => {
            store.dispatch(setDefaultContract(id));
            store.dispatch(loadContract(id));
        });
}

const onEnter = () => {
    document.location.hash = guid8() + '/edit';
}

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(<Provider store={store}>
    <MuiThemeProvider>
        <Router history={history}>
            <Route path="/" component={App} onEnter={onEnter}/>
            <Route path="/:id" component={View} onEnter={onEnterView}/>
            <Route path="/:id/image" component={Image} onEnter={onEnterView}/>
            <Route path="/:id/edit" component={App} onEnter={onEnterEdit}/>
        </Router>
    </MuiThemeProvider>
</Provider>, document.getElementById('root'));
registerServiceWorker();
