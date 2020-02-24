import React, { useState } from 'react';
import './App.css';

import Circle from './components/Circle';
import Line from './components/Line';

import { calculateLineLength } from './helpers/helpers';

const App = () =>{

  const [circle1, setCircle1] = useState({
    x: 200,
    y: 200,
    coords: {}
  });

  const [circle2, setCircle2] = useState({
    x: 500,
    y: 500,
    coords: {}
  });

  const [lineLength, setLineLength] = useState(calculateLineLength(circle1.x, circle2.x, circle1.y, circle2.y));

  // useEffect(() => {
  //   // set line length using distance formula
  //   setLineLength(calculateLineLength());
  
  // }, []);

  const onTextChange = (setState, key, val) => {
    setState(prev => ({...prev, [key]: val ? parseInt(val) : 0 }));
    setLineLength(calculateLineLength(circle1.x, circle2.x, circle1.y, circle2.y));
  };

  const handleMouseDown = (e, setState, handleMouseMove) => {
    const pageX = e.pageX; 
    const pageY = e.pageY;
    setState(prev => ({ ...prev, coords: { x: pageX, y: pageY }}));
    document.addEventListener('mousemove', handleMouseMove.current);
  };

  const handleMouseUp = (e, setState, handleMouseMove) => {
    document.removeEventListener('mousemove', handleMouseMove.current);
    setState(prev => ({ ...prev, coords: {} }));
  };
  

  return (
    <svg className="App">
      <Line 
        circle1={circle1} 
        circle2={circle2} 
        setCircle1={setCircle1}
        setCircle2={setCircle2}
        lineLength={lineLength} 
        setLineLength={setLineLength} 
      />
      <Circle 
        circle={circle1}
        otherCircle={circle2}
        setLineLength={setLineLength}
        onTextChange={onTextChange}
        setCircle={setCircle1}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <Circle 
        circle={circle2}
        otherCircle={circle1}
        setLineLength={setLineLength}
        onTextChange={onTextChange}
        setCircle={setCircle2}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </svg>
  );
}

export default App;
