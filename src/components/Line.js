import React from 'react';

import './Line.css';

const Line = ({circle1, circle2, onTextChange, lineLength, setLineLength, ...props}) => {
  console.log('circle2:', circle2)
  console.log('circle1:', circle1)
  
  return (
    <g className='line-group'>
      <line x1={circle1.x} y1={circle1.y} x2={circle2.x} y2={circle2.y} stroke="black" />
      <foreignObject x={((circle1.x + circle2.x) / 2) - 50} y={((circle1.y + circle2.y) / 2) - 25} height='50px' width='80px'>
        <div className='line-container'>
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