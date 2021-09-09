import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement('h1', {className: 'heading'}, 'Hello World!');
const index = 0;

setInterval(() => {
    const element = (
        <h1 className="heading" tabIndex={index}>
            <span className="text">Hello {new Date().toLocaleTimeString()}</span>
            <img src="" alt="" />
        </h1>
    );
    ReactDOM.render(element, document.getElementById('root'));
}, 1000);
// reportWebVitals();
