import React from 'react';

export default class Welcome extends React.Component {
    render() {
        return <h1>Halo, {this.props.name}</h1>
    }
}