import React from 'react';

const Circle = props => {
  return (
    <g>
      <circle cx={props.cx} cy={props.cy} r="150px" fill="#529fca" />
      <foreignObject x={props.cx - 50} y={props.cy - 40} width='100px' height='20px'>
        <input value={props.cx} type='text' />
      </foreignObject>
      <foreignObject x={props.cx - 50} y={props.cy + 20} width='100px' height='20px'>
        <input value={props.cy} type='text' />
      </foreignObject>
    </g>
  );
};

export default Circle;