import React, { Component } from 'react';

class AlarmClockControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isAlarm: false };
    }

    OpenAlarmClockClick = () => {
        this.setState({ isAlarm: true });
    }

    CloseAlarmClockClick = () => {
        this.setState({ isAlarm: false });
    }
    render() {
        const isAlarm = this.state.isAlarm;

        let button = null;
        if (isAlarm) {
            button = <ClockAlarmButton ring="off" onClick={this.CloseAlarmClockClick} />;
        } else {
            button = <ClockAlarmButton ring="on" onClick={this.OpenAlarmClockClick} />;
        }

        return (
            <div>
                <Action isAlarm={isAlarm} />
                {button}
            </div>
        );
    }
}

function Morning(props) {
    return <h1>Get up!</h1>;
}

function Night(props) {
    return <h1>Sleep zzz...</h1>;
}

function Action(props) {
    const isAlarm = props.isAlarm;
    if (isAlarm) {
        return <Morning />;
    }
    return <Night />;
}

function ClockAlarmButton(props) {
    return (
        <button onClick={props.onClick}>
            {props.ring === 'on' ? 'Open Alarm Clock' : 'Close Alarm Clock'}
        </button>
    );
}

export default AlarmClockControl;