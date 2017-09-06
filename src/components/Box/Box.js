import React from 'react';
import './Box.css';
import LinearProgress from 'material-ui/LinearProgress';


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
                    {name}&nbsp;{name? '-' :''}&nbsp;                    זמינות
                </div>
                {!name && !phone ?  <LinearProgress mode="indeterminate" /> : null }
                {phone ? <OHLine icon="phone" hint="טלפון" label="שיחה" value={phone}/> : null}
                {whatsapp ? <OHLine icon="whatsapp" hint="וואטסאפ" label="וואטסאפ" value={whatsapp}/> : null}
                {email ? <OHLine icon="envelope-o" hint="מייל" label="מייל" value={email}/> : null}
                {facebook ? <OHLine icon="facebook-official" hint="פייסבוק" label="פייסבוק" value={facebook}/> : null}
            </div>
        );
    }
}

const styles = {}

