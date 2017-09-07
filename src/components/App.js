import React, {Component} from 'react';
import './App.css';

import Box from './Box/BoxContainer';
import Form from './Form/FormContainer';

class App extends Component {

    render() {
        const {contractId} = this.props;

        return (
            <div className="container App">
                <div className="row">
                    <div className="col-12">
                        <h1>Social Contracts</h1>
                        {/*<h2>Let people know when you're available</h2>*/}
                        <h2>
                            שתפ/י את שעות הזמינות שלך
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
                            תצוגה מקדימה:
                            </strong>
                        </div>
                        <Box />
                        <a href={`/#/${contractId}`} target="_blank">לינק לשיתוף</a>
                    </div>
                </div>
                <div className="row footer">
                    <div className="col-xs-12 col-sm-2">
                        <span>socialcontracts.io</span>
                    </div>
                    <div className="col-xs-12 col-sm-5">
                        <strong>מטרה:</strong>
                        &nbsp;
                        <span>יצירת מרחב עם שליטה בהסחות ע״י תיאום ציפיות</span>
                    </div>
                    <div className="col-xs-12 col-sm-5">
                        <strong>רעיון לשימוש:</strong>
                        &nbsp;
                        <span>לינק בחתימה, תגובה אוטומטית ב-</span>
                        <a href="https://github.com/dht/whatsapp-answering-machine" target="_blank">מזכירת וואטסאפ</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
