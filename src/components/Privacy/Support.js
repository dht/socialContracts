import React, {Component} from 'react';
import config from '../../constants/Config-private';

class Support extends Component {

    render() {
        return (
            <div className="Support-container container">
                <h1>Support</h1>

                <p>Last updated: September 14, 2017</p>

                <p>In case you encounter any issue please contact <a href={`mailto:${config.email}`}>{config.email}</a>.</p>
            </div>
        );
    }
}


export default Support;