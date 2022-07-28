import React, { useState } from 'react';
import './App.css';
import TemperatureDisplay from './components/TemperatureDisplay';
import IncreaseButton from './components/IncreaseButton';
import DecreaseButton from './components/DecreaseButton';

function App() {
  let [temp, setTemp] = useState(10);
  let [color, setColor] = useState('yellow');
  const hotColor = 'red';
  const coldColor = 'blue';
  const neutralColor = 'yellow';

  const submitHandlerPlus = () => {
    temp++;
    setTemp(temp);
    changeColor(temp);
  }

  const submitHandlerMinus = () => {
    temp--;
    setTemp(temp);
    changeColor(temp);
  }

  const changeColor = (temp) => {
    if(temp > 15){
      setColor(hotColor);
    }
    else if (temp < 0){
      setColor(coldColor);
    }else{
      setColor(neutralColor);
    }
  }

  return (
    <div>
      <TemperatureDisplay val={temp} col={color}/>
      <div className="buttons">
        <IncreaseButton submitFunc={submitHandlerPlus}/>
        <DecreaseButton submitFunc={submitHandlerMinus}/>
      </div>
    </div>
  );
}

export default App;
