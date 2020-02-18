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

  const adjustXPos = (e, circlePos, setCircle, val) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = circlePos;
    setCircle({x: val, y});
  };

  const adjustYPos = (e, circlePos, setCircle, val) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = circlePos;
    setCircle({x, y: val});
  };

  return (
    <svg className="App">
      <Circle 
        circle={circle1}
        setCircle={setCircle1}
        adjustXPos={adjustXPos}
        adjustYPos={adjustYPos}
      />
      <Circle 
        circle={circle2}
        setCircle={setCircle2}
        adjustYPos={adjustYPos}
      />
    </svg>
  );
}

export default App;
