import React, { useRef } from 'react';
import './Circle.css';

import { calculateLineLength } from '../helpers/helpers';

const Circle = ({circle, otherCircle, setLineLength, onTextChange, setCircle, onMouseUp, onMouseDown, ...props}) => {

  // useRef to create the handleMouseMove function so that it can save a reference to the position
  const handleMouseMove = useRef((e) => {
    setCircle(position => {
      const xDiff = position.coords.x - e.pageX;
      const yDiff = position.coords.y - e.pageY;
      setLineLength(calculateLineLength(otherCircle.x, (position.x - xDiff), otherCircle.y, (position.y - yDiff)));
      return {
        x: position.x - xDiff,
        y: position.y - yDiff,
        coords: {
          x: e.pageX,
          y: e.pageY,
        },
      };
    });
  });

  return (
    <>
      <g className='circle' 
        onMouseDown={e => onMouseDown(e, setCircle, handleMouseMove)} 
        onMouseUp={e => onMouseUp(e, setCircle, handleMouseMove)} 
      >
        <circle cx={circle.x} cy={circle.y} r="100px" fill="#5bccde" />
        <foreignObject x={circle.x - 100} y={circle.y - 100} width='200' height='200'>
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
  </>
  );
};

export default Circle;