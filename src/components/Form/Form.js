import React from 'react';
import './Form.css';

import TextField from 'material-ui/TextField';

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

    componentWillReceiveProps(newProps) {
    }

    componentDidMount() {
    }

    onChangeName(ev, value) {
        console.log('ev -> ', ev, value);
    }


    render() {
        const {name, availabilityString, readonly} = this.props,
            {phone, whatsapp, email, facebook,} = availabilityString;

        return (
            <div className="Form-container">
                <OHInput icon="address-book-o" hint="השם שלך" value={name} readonly={readonly}
                         onChange={(ev, value) => this.props.setName(value)}/>
                <OHInput icon="phone" hint="זמינות שיחות" value={phone} readonly={readonly}
                         onChange={(ev, value) => this.props.setAvailabilityString('phone', value)}/>
                <OHInput icon="whatsapp" hint="זמינות וואטסאפ" value={whatsapp} readonly={readonly}
                         onChange={(ev, value) => this.props.setAvailabilityString('whatsapp', value)}/>
                <OHInput icon="envelope-o" hint="זמינות אימייל" value={email} readonly={readonly}
                         onChange={(ev, value) => this.props.setAvailabilityString('email', value)}/>
                <OHInput icon="facebook" hint="זמינות פייסבוק" value={facebook} readonly={readonly}
                         onChange={(ev, value) => this.props.setAvailabilityString('facebook', value)}/>
            </div>
        );
    }
}

const styles = {}

