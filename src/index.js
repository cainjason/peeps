import React from 'react';
import ReactDom from 'react-dom'

function Greeting () {
    return (
        <div>
            <h4> This is Jason and this is my first component! </h4>
            <input type="text" placeholder="First Name" />
            <h2>Wild One</h2>
        </div>
    )
}

ReactDom.render(<Greeting />, document.getElementById('root')
);
