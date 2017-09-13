import {connect} from 'react-redux'
import Form from './Form'
import {setName, setAvailabilityString} from '../../reducers/appState/appState_actions';

const mapStateToProps = (state, ownProps) => {
    const {appState} = state,
        {settings, availabilityString,readonly} = appState,
        {name} = settings || {};

    return {
        name,
        availabilityString,
        readonly,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        setAvailabilityString: (channel, value) => {
            dispatch(setAvailabilityString(channel, value));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
