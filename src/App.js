import React, { useState } from 'react';
import './App.css';
import Draggable from 'react-draggable';

import Circle from './components/Circle';

const App = () =>{

  const [circle1, setCircle1] = useState({
    x: 200,
    y: 200
  });

  const [circle2, setCircle2] = useState({
    x: 500,
    y: 500
  });

  const onTextChange = (setState, key, val) => {
    setState(prev => ({...prev, [key]: val}));
  };

  return (
    <svg className="App">
      <Circle 
        circle={circle1}
        onTextChange={onTextChange}
        setCircle={setCircle1}
      />
      <Circle 
        circle={circle2}
        onTextChange={onTextChange}
        setCircle={setCircle2}
      />
    </svg>
  );
}

export default App;
