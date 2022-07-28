import React from 'react';

import './IncreaseButton.css'

const IncreaseButton = (props) => {
    return (
        <button onClick = {props.submitFunc} className="increase-button">+</button>
    )
};

export default IncreaseButton;