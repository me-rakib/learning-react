/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date(), locale: 'bn-BD' };
    //     this.clickHandle = this.clickHandle.bind(this);
    // }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    clickHandle = (local) => {
        this.setState({
            locale: local,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        console.log('Clock');
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.clickHandle} local="en-US" />
            </div>
        );
    }
}
export default Clock;
