import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange } = this.props;
        const { change: newChange } = nextProps;
        if (currentChange === newChange) {
            return false;
        }

        return true;
    }

    render() {
        console.log('Button');
        const { change } = this.props;
        return (
            <button type="button" onClick={change}>
                Click Me
            </button>
        );
    }
}

export default Button;
