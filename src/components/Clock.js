/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Clock extends React.Component {
    state = { date: new Date() };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <h1 className="heading">
                <span className="text">{this.state.date.toLocaleTimeString()}</span>
            </h1>
        );
    }
}

export default Clock;