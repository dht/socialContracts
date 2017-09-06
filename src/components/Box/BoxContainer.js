import {connect} from 'react-redux'
import Box from './Box'

const mapStateToProps = (state, ownProps) => {
    const {appState} = state,
        {name, availabilityString} = appState;

    return {
        name,
        availabilityString,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        method: () => {
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Box)
