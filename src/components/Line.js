import React, { useState, useEffect } from 'react';
import './Line.css';

import { calculateSlope } from '../helpers/helpers';

const Line = ({circle1, circle2, setCircle1, setCircle2, lineLength, setLineLength, ...props}) => {

  const [slope, setSlope] = useState(0);

  const onLineInputChange = e => {
    if (e.target.value) {
      setLineLength(e.target.value)
      console.log('e.target.value:', e.target.value)
      // calculate the new coordinates based on distance formula and slope formula
      // based on hardmath's algebraic solution here https://math.stackexchange.com/questions/25286/2d-coordinates-of-a-point-along-a-line-based-on-d-and-m-where-am-i-messing
      const slope = calculateSlope(circle1, circle2);
      const x2 = Math.round(e.target.value / Math.sqrt(Math.pow(slope, 2) + 1)) + circle1.x;
      const y2 = Math.round((e.target.value * slope / Math.sqrt(Math.pow(slope, 2) + 1))) + circle1.y;

      setCircle2(prev => ({ ...prev, x: x2, y: y2 }))
    }
  };

  useEffect(() => {
    // set slope based on rise over run formula converted to radians
    setSlope(Math.atan(calculateSlope(circle1, circle2)));
    
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
            min={0}
            type='number'
            onChange={onLineInputChange}
          />
        </div>
      </foreignObject>
    </g>
  );
};

export default Line;