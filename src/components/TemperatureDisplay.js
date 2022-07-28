import React from 'react';
import './TemperatureDisplay.css';

const TemperatureDisplay = (props) => {
    return (
        <div style={{background: props.col}} className="temperature-text">
            {props.val}°C
        </div>
    )
};

export default TemperatureDisplay;