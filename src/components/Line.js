import React, { useState, useEffect } from 'react';

import './Line.css';

const Line = ({circle1, circle2, setCircle1, setCircle2,
  // onTextChange, lineLength, setLineLength, onLineInputChange, 
  ...props}) => {

  const [slope, setSlope] = useState(0);
  const [lineLength, setLineLength] = useState(0);

  useEffect(() => {
    // set line length using distance formula
    setLineLength(Math.round(Math.abs(Math.sqrt(Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle1.y, 2)))));
  
  }, [circle1, circle2]);

  const onLineInputChange = e => {
    if (e.target.value) {
      console.log('e.target.value:', e.target.value)
      const slope = Math.atan((circle1.y - circle2.y) / (circle1.x - circle2.x));
      console.log('slope:', slope)
      const x2 = Math.round(circle1.x + (e.target.value * Math.sin(slope)));
      console.log('x2:', x2)
      const y2 = Math.round(circle1.y + (e.target.value * Math.cos(slope)));
      console.log('y2:', y2)
      setCircle2(prev => ({ ...prev, x: x2, y: y2 }))
    }
    // setLineLength(e.target.value)
  };

  useEffect(() => {
    // set slope based on rise over run formula converted to radians
    setSlope(Math.atan((circle1.y - circle2.y) / (circle1.x - circle2.x)));
    
  }, [circle1, circle2]);
  
  return (
    <g className='line-group'>
      <line x1={circle1.x} y1={circle1.y} x2={circle2.x} y2={circle2.y} height='90' stroke="black" strokeWidth='2'/>
      <foreignObject 
        x={((circle1.x + circle2.x) / 2) - 50} 
        y={((circle1.y + circle2.y) / 2) - 50} 
        height='90' 
        width='120'
        // style={{ transform: `rotate(${slope}rad)`}}
        style={{ padding: 20 }}
      >
        <div className='line-container' style={{ transform: `rotate(${slope}rad)`, transformOrigin: 'center-center'}}>
          <input 
            className='line-input'
            value={lineLength} 
            type='number'
            onChange={onLineInputChange}
          />
        </div>
      </foreignObject>
    </g>
  );
};

export default Line;