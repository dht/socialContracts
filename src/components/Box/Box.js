import React from 'react';
import './Box.css';


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
    }


    render() {
        const {name, availabilityString} = this.props,
            {phone, whatsapp, email, facebook,} = availabilityString;

        return (
            <div className="Box-container">
                <div className="oh-title">
                    {name} -
                    זמינות
                </div>
                <OHLine icon="phone" hint="טלפון" label="שיחה" value={phone} />
                <OHLine icon="whatsapp" hint="וואטסאפ" label="וואטסאפ" value={whatsapp} />
                <OHLine icon="envelope-o" hint="מייל" label="מייל" value={email} />
                <OHLine icon="facebook-official" hint="פייסבוק" label="פייסבוק" value={facebook} />
            </div>
        );
    }
}

const styles = {}

