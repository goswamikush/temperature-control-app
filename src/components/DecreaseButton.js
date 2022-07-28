import React from 'react';

import './DecreaseButton.css'

const DecreaseButton = (props) => {
    return (
        <button onClick = {props.submitFunc} className="decrease-button">-</button>
    )
};

export default DecreaseButton;