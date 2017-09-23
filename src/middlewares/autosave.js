import {ActionTypes} from 'social-contracts/reducers/appState/appState';
import {saveContract} from '../reducers/app_thunks';

const acceptActions = [ActionTypes.SET_AVAILABILITY_STRING, ActionTypes.SET_NAME];
const ignoreActions = [];

const autosave = store => next => action => {

	let result = next(action);

	if (action.type &&
		acceptActions.indexOf(action.type) >= 0 &&
		ignoreActions.indexOf(action.type) === -1) {

        store.dispatch(saveContract());
	}

	return result
}

export default autosave;
