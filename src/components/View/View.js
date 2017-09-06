import React from 'react';
import './View.css';

import Box from '../Box/BoxContainer';

export default class View extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentDidMount() {
    }


    render() {
        const {} = this.state;

        return (
            <div className="View-container">
                <Box />
            </div>
        );
    }
}

const styles = {
}

