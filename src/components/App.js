import React, {Component} from 'react';
import './App.css';

import Box from './Box/BoxContainer';
import Form from './Form/FormContainer';
import {strings} from '../constants/languages';

let str = strings();

class App extends Component {

    componentDidMount() {
        str = strings();
    }

    render() {
        const {contractId} = this.props;

        return (
            <div className="container App">
                <div className="row">
                    <div className="col-12">
                        <h1>Social Contracts</h1>
                        {/*<h2>Let people know when you're available</h2>*/}
                        <h2>
                            {str['tagline']}
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-xs-12">
                        <Form />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <div>
                            <strong>
                                {str['preview']}
                            </strong>
                        </div>
                        <Box />
                        <a href={`/#/${contractId}`} target="_blank">{str['link_for_sharing']}</a>
                    </div>
                </div>
                <div className="row footer">
                    <div className="col-xs-12 col-sm-2">
                        <span>socialcontracts.io</span>
                    </div>
                    <div className="col-xs-12 col-sm-5">
                        <strong>{str['goal_header']}</strong>
                        &nbsp;
                        <span>
                            {str['goal_text']}
                        </span>
                    </div>
                    <div className="col-xs-12 col-sm-5">
                        <strong>{str['idea_header']}</strong>
                        &nbsp;
                        <span>{str['idea_text']}</span>
                        <a href="https://github.com/dht/whatsapp-answering-machine" target="_blank">
                            {str['whatsapp_answering_machine']}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
