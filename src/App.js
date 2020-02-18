import React, { useState, useEffect } from 'react';
import './App.css';

import Circle from './components/Circle';
import Line from './components/Line';

const App = () =>{

  const [circle1, setCircle1] = useState({
    x: 200,
    y: 200
  });

  const [circle2, setCircle2] = useState({
    x: 500,
    y: 500
  });

  const [lineLength, setLineLength] = useState(0);

  useEffect(() => {
    setLineLength(Math.sqrt(Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle2.y, 2)));
  
  }, [circle1, circle2]);

  const onTextChange = (setState, key, val) => {
    setState(prev => ({...prev, [key]: val ? parseInt(val) : 0 }));
  };

  return (
    <svg className="App">
      <Line 
        circle1={circle1} 
        circle2={circle2} 
        lineLength={lineLength} 
        setLineLength={setLineLength} 
      />
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
