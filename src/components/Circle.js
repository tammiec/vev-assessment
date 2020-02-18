import React, { useState } from 'react';
import Draggable from 'react-draggable';

import './Circle.css'

const Circle = ({x, y, onTextChange, setCircle, ...props}) => {

  return (
    <Draggable>
      <g>
          <circle cx={x} cy={y} r="100px" fill="#529fca" />
          <foreignObject x={x - 100} y={y - 100} width='200px' height='200px'>
            <div className='circle-text'>
              <div className='text-container'>
                <p>x:</p>
                <input 
                  value={x} 
                  type='text'
                  onChange={e => onTextChange(setCircle, 'x', e.target.value)}
                />
                <p>y:</p>
                <input 
                  value={y} 
                  type='text' 
                  onChange={e => onTextChange(setCircle, 'y', e.target.value)}
                />
              </div>
            </div>
          </foreignObject>
      </g>
    </Draggable>
  );
};

export default Circle;