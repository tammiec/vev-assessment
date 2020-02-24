import React, { useState, useEffect } from 'react';
import './App.css';

import Circle from './components/Circle';
import Line from './components/Line';

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

  const [lineLength, setLineLength] = useState(0);

  useEffect(() => {
    setLineLength(Math.round(Math.abs(Math.sqrt(Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle1.y, 2)))));
  
  }, [circle1, circle2]);

  const onTextChange = (setState, key, val) => {
    if (key === 'line') {
      // NOT COMPLETE
      const diff = val - lineLength;
      setLineLength(val);
      setCircle2(prev => ({ ...prev, x: prev.x + diff }));
    } else {
      setState(prev => ({...prev, [key]: val ? parseInt(val) : 0 }));
    }
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
        lineLength={lineLength} 
        setLineLength={setLineLength} 
        onTextChange={onTextChange}
      />
      <Circle 
        circle={circle1}
        onTextChange={onTextChange}
        setCircle={setCircle1}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <Circle 
        circle={circle2}
        onTextChange={onTextChange}
        setCircle={setCircle2}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </svg>
  );
}

export default App;
