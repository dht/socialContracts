export const initialState = {
    uid: 0,
    contractId: 0,
    settings: {
        name: '',
    },
    availabilityString: {
        phone: '',
        whatsapp: '',
        email: '',
        facebook: '',
    },
    readonly: true,
}

export const ActionTypes = {
    SET_USER_ID: 'SET_USER_ID',
    SET_CONTRACT_ID: 'SET_CONTRACT_ID',
    SET_NAME: 'SET_NAME',
    SET_AVAILABILITY_STRING: 'SET_AVAILABILITY_STRING',
    SET_READONLY: 'SET_READONLY',
    SET_AVAILABILITY: 'SET_AVAILABILITY',
};

const availabilityString = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_AVAILABILITY_STRING:
            return {
                ...state,
                [action.channel]: action.value
            }

        case ActionTypes.SET_AVAILABILITY:
            return action.value

        default:
            return state;
    }
}

const settings = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_NAME:
            return {
                ...state,
                name: action.value
            }

        default:
            return state;
    }
}

const appState = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.SET_USER_ID:
            return {
                ...state,
                uid: action.value
            }

        case ActionTypes.SET_CONTRACT_ID:
            return {
                ...state,
                contractId: action.value
            }

        case ActionTypes.SET_READONLY:
            return {
                ...state,
                readonly: action.value
            }

        case ActionTypes.SET_AVAILABILITY_STRING:
        case ActionTypes.SET_AVAILABILITY:
            return {
                ...state,
                availabilityString: availabilityString(state.availabilityString, action)
            }

        case ActionTypes.SET_NAME:
            return {
                ...state,
                settings: settings(state.settings, action)
            }

        default:
            return state
    }

}

export default appState;
