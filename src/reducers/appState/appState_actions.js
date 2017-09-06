import {ActionTypes} from './appState';

export const setUserId= (value) => {

    return {
        type: ActionTypes.SET_USER_ID,
        value
    }
}

export const setName= (value) => {

    return {
        type: ActionTypes.SET_NAME,
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

export const setAvailabilityString= (channel, value) => {

    return {
        type: ActionTypes.SET_AVAILABILITY_STRING,
        channel,
        value
    }
}

export const setAvailability= (value) => {

    return {
        type: ActionTypes.SET_AVAILABILITY,
        value
    }
}
