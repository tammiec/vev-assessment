import React from 'react';

import './Line.css';

const Line = ({circle1, circle2, onTextChange, lineLength, setLineLength, ...props}) => {
  
  return (
    <g className='line-group'>
      <line x1={circle1.x} y1={circle1.y} x2={circle2.x} y2={circle2.y} stroke="black" pathLength={lineLength} />
      <foreignObject x={circle2.x - circle1.x} y={circle2.y - circle1.y} height='100px' width='200px'>
        <input 
          value={lineLength} 
          type='number'
          onChange={e => setLineLength(e.target.value)}
        />
      </foreignObject>
    </g>
  );
};

export default Line;