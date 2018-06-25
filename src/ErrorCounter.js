import React, { Component } from 'react';

class ErrorCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0, error: null };
    }

    errorHandleClick = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }),
            function () {
                console.log(this.state.counter)
                try {
                    if (this.props.action === "errorHandleClick" && this.state.counter === 3) {
                        throw new Error('errorHandleClick error!!');
                    }
                } catch (error) {
                    this.setState({ error: error });
                }
            });
    }

    render() {
        if (this.state.counter === 5) {
            throw new Error('error!!');
        } else if (this.state.error !== null) {
            return <h1>{this.state.error}</h1>;
        }
        return <h1 onClick={this.errorHandleClick}>{this.state.counter}</h1>;
    }
}

export default ErrorCounter;