import React, { useState } from 'react';
import Draggable from 'react-draggable';

import './Circle.css'

const Circle = ({circle, onTextChange, setCircle, ...props}) => {

  // const handleDrag = (e, position) => {
  //   setCircle({ 
  //     x: position.x,
  //     y: position.y
  //   });
  // }

  return (
    <>
    {/* <Draggable position={circle} onDrag={handleDrag}> */}
      <g>
        <circle cx={circle.x} cy={circle.y} r="100px" fill="#529fca" />
        <foreignObject x={circle.x - 100} y={circle.y - 100} width='200px' height='200px'>
          <div className='circle-text'>
            <div className='text-container'>
              <p>x:</p>
              <input 
                value={circle.x} 
                type='number'
                min={1}
                onChange={e => onTextChange(setCircle, 'x', e.target.value)}
              />
              <p>y:</p>
              <input 
                value={circle.y} 
                type='number' 
                min={1}
                onChange={e => onTextChange(setCircle, 'y', e.target.value)}
              />
            </div>
          </div>
        </foreignObject>   
      </g>
    {/* </Draggable> */}
  </>
  );
};

export default Circle;