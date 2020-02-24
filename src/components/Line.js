import React, { useState, useEffect } from 'react';

import './Line.css';

const Line = ({circle1, circle2, onTextChange, lineLength, setLineLength, ...props}) => {

  const [slope, setSlope] = useState(0);

  useEffect(() => {

    setSlope(Math.atan((circle1.y - circle2.y) / (circle1.x - circle2.x)));
    console.log('slope:', slope)
    
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
            onChange={e => onTextChange(null, 'line', e.target.value )}
          />
        </div>
      </foreignObject>
    </g>
  );
};

export default Line;