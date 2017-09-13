import {defaultUIState} from '../../constants/UIState';

export const initialState = defaultUIState;

export const ActionTypes = {
    SET_CONTRACT_ID: 'SET_CONTRACT_ID',
    SET_IS_LOADING: 'SET_IS_LOADING',
    SET_USER_ID: 'SET_USER_ID',
    SET_READONLY: 'SET_READONLY',
}

const UIState = (state = initialState, action) => {

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

        case ActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.value
            }

        case ActionTypes.SET_READONLY:
            return {
                ...state,
                readonly: action.value
            }

        default:
            return state
    }

}

export default UIState;
