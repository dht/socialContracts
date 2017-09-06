import appState, {ActionTypes, initialState} from './appState';

it('returns initial state for undefined', () => {
    expect(appState(undefined, {})).toEqual(initialState);
});
