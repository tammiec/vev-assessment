import React from 'react';

const Circle = ({x, y, onTextChange, setCircle, ...props}) => {
  return (
    <g>
      <circle cx={x} cy={y} r="150px" fill="#529fca" />
      <foreignObject x={x - 50} y={y - 50} width='100px' height='20px'>
        <input 
          value={x} 
          type='text'
          onChange={e => onTextChange(setCircle, 'x', e.target.value)}
        />
      </foreignObject>
      <foreignObject x={x - 50} y={y + 30} width='100px' height='20px'>
        <input 
          value={y} 
          type='text' 
          onChange={e => onTextChange(setCircle, 'y', e.target.value)}
        />
      </foreignObject>
    </g>
  );
};

export default Circle;