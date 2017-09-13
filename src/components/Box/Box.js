import React from 'react';
import './Box.css';
import LinearProgress from 'material-ui/LinearProgress';
import {strings} from '../../constants/languages';

let str = strings();

const OHLine = (props) => <div className="oh-line">
    <span className={`fa fa-${props.icon}`} title={props.hint}>&nbsp;</span>
    <strong>{props.label}:</strong>&nbsp;
    <span>{props.value}</span>
</div>

export default class Box extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillReceiveProps(newProps) {
    }

    componentDidMount() {
        str = strings();
    }


    render() {
        const {name, availabilityString} = this.props,
            {phone, whatsapp, email, facebook,} = availabilityString;

        return (
            <div className="Box-container">
                <div className="oh-title">
                    {name}&nbsp;{name? '-' :''}&nbsp;{str['availability']}
                </div>
                {!name && !phone ?  <LinearProgress mode="indeterminate" /> : null }
                {phone ? <OHLine icon="phone" hint={str['phone_hint']} label={str['phone_label']} value={phone}/> : null}
                {whatsapp ? <OHLine icon="whatsapp" hint={str['whatsapp_hint']} label={str['whatsapp_label']} value={whatsapp}/> : null}
                {email ? <OHLine icon="envelope-o" hint={str['email_hint']} label={str['email_label']} value={email}/> : null}
                {facebook ? <OHLine icon="facebook-official" hint={str['facebook_hint']} label={str['facebook_label']} value={facebook}/> : null}
            </div>
        );
    }
}

const styles = {}

