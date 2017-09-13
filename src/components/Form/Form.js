import React from 'react';
import './Form.css';

import TextField from 'material-ui/TextField';
import {strings} from '../../constants/languages';

let str = strings();

const OHInput = (props) => <div className="oh-input">
    <span className={`fa fa-${props.icon}`} title={props.hint}>&nbsp;</span>
    &nbsp;
    <TextField
        value={props.value}
        onChange={props.onChange}
        hintText={props.hint}
    />
    <br/>
</div>

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        str = strings();
    }

    render() {
        const {name, availabilityString, readonly} = this.props,
            {phone, whatsapp, email, facebook,} = availabilityString;

        return (
            <div className="Form-container">
                <OHInput icon="address-book-o" hint={str['form_name_hint']} value={name} readonly={readonly}
                         onChange={(ev, value) => this.props.setName(value)}/>
                <OHInput icon="phone" hint={str['form_phone_hint']} value={phone} readonly={readonly}
                         onChange={(ev, value) => this.props.setAvailabilityString('phone', value)}/>
                <OHInput icon="whatsapp" hint={str['form_whatsapp_hint']} value={whatsapp} readonly={readonly}
                         onChange={(ev, value) => this.props.setAvailabilityString('whatsapp', value)}/>
                <OHInput icon="envelope-o" hint={str['form_email_hint']} value={email} readonly={readonly}
                         onChange={(ev, value) => this.props.setAvailabilityString('email', value)}/>
                <OHInput icon="facebook" hint={str['form_facebook_hint']} value={facebook} readonly={readonly}
                         onChange={(ev, value) => this.props.setAvailabilityString('facebook', value)}/>
            </div>
        );
    }
}


