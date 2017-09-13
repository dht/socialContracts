import {ActionTypes} from './UIState';

export const setIsLoading = (value) => {

    return {
        type: ActionTypes.SET_IS_LOADING,
        value
    }
}

export const setUserId= (value) => {

    return {
        type: ActionTypes.SET_USER_ID,
        value
    }
}

export const setContractId= (value) => {

    return {
        type: ActionTypes.SET_CONTRACT_ID,
        value
    }
}

export const setReadOnly= (value) => {

    return {
        type: ActionTypes.SET_READONLY,
        value
    }
}
