import api_login from '../utils/login_api';
import * as api from '../utils/contracts_api';
import * as actions from './appState/appState_actions';
import * as state_actions from './UIState/UIState_actions';
import {getEmptyContract} from '../constants/languages';
import {contractToText} from '../utils/contracts';

const emptyContract= getEmptyContract();

export const loadContract = (contractId) => {

    return (dispatch) => {

        api.configureContract(contractId);
        dispatch(state_actions.setContractId(contractId));

        api.fetchContract()
            .then(state => {
                let {settings, availabilityString, type} = state || {},
                    {name} = settings || {};

                if (name) {
                    dispatch(actions.setName(name))
                }

                if (type === 'dynamic') {
                    availabilityString = contractToText(state, 'en', true);
                }

                if (availabilityString && availabilityString.phone) {
                    dispatch(actions.setAvailability(availabilityString));
                }
            })
    }
}

export const saveContract = () => {

    return (dispatch, getState) => {
        const {appState} = getState(),
            {settings, availabilityString} = appState,
            {name} = settings || {};

        if (name) {
            api.saveContractName(name);
        }

        if (availabilityString && availabilityString.phone) {
            api.saveContractAvailability(availabilityString);
        }
    }
}

export const setDefaultContract = () => {

    return (dispatch) => {
       dispatch(actions.setAvailability(emptyContract.availabilityString));
    }
}

export const createNewContract = (contractId) => {

    return (dispatch) => {
        api.configureContract(contractId);
        api.saveContractAvailability(emptyContract.availabilityString);
    }
}

export const login = (contractId) => {

    return (dispatch) => {

        return api_login.login()
            .then(uid => {
                api_login.setUser(uid);
                dispatch(state_actions.setUserId(uid));
                return api_login.setPermissions(contractId, uid)
            })
            .then(() => {
                // permissions granted
                api_login.addToUserLibrary(contractId);
                dispatch(state_actions.setReadOnly(false));
            })
            .catch(err => {
                // no permission
                if (err.code === 'PERMISSION_DENIED') {
                    api_login.checkPermissions(contractId)
                        .then(granted => {
                            dispatch(state_actions.setReadOnly(!granted));
                        })
                }
            })
    }
}

export const logout = () => {

    return (dispatch, getState) => {
        api_login.logout()
            .then(() => {
                dispatch(state_actions.setUserId(0));
            })
    }
}
