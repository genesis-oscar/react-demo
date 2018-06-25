import React, { Component } from 'react';

class FormRef extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = (e) => {
        console.log(this._name.value);
        //console.log(this.refs.name.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <p>
                    <label>
                        name:
        <input type="text" ref={input => this._name = input} />
                        {/*
        <input type="text"  ref="name" />
        */}
                    </label>
                </p>
                <input type="submit" value="submit" />
            </form>
        );
    }
}

export default FormRef;