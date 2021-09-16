/* eslint-disable react/destructuring-assignment */
import React from 'react';

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

    clickHandle = () => {
        this.setState({
            locale: 'en-US',
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                <button type="button" onClick={this.clickHandle}>
                    Click Me
                </button>
            </div>
        );
    }
}
export default Clock;
