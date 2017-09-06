import {connect} from 'react-redux'
import App from './App'

const mapStateToProps = (state, ownProps) => {
    const {appState} = state,
        {contractId} = appState;

    return {
        contractId,
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
)(App)
