import api_login from '../utils/login_api';
import * as api from '../utils/contracts_api';
import * as actions from './appState/appState_actions';
import {contract} from '../constants/empty';

export const loadContract = (contractId) => {

    return (dispatch) => {

        api.configureContract(contractId);
        dispatch(actions.setContractId(contractId));

        api.fetchContract()
            .then(state => {
                const {name, availabilityString} = state || {};

                if (name) {
                    dispatch(actions.setName(name))
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
            {name, availabilityString} = appState;

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
       dispatch(actions.setAvailability(contract.availabilityString));
    }
}


export const login = (contractId) => {

    return (dispatch) => {

        return api_login.login()
            .then(uid => {
                api_login.setUser(uid);
                dispatch(actions.setUserId(uid));
                return api_login.setPermissions(contractId, uid)
            })
            .then(() => {
                // permissions granted
                api_login.addToUserLibrary(contractId);
                dispatch(actions.setReadOnly(false));
            })
            .catch(err => {
                // no permission
                if (err.code === 'PERMISSION_DENIED') {
                    api_login.checkPermissions(contractId)
                        .then(granted => {
                            dispatch(actions.setReadOnly(!granted));
                        })
                }
            })
    }
}

export const logout = () => {

    return (dispatch, getState) => {
        api_login.logout()
            .then(() => {
                dispatch(actions.setUserId(0));
            })
    }
}
