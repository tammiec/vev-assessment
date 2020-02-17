import React, { useState } from 'react';
import Draggable from 'react-draggable';

import './Circle.css'

const Circle = ({x, y, onTextChange, setCircle, ...props}) => {

  return (
    <Draggable>
      <g className='circle-container'>
        <circle cx={x} cy={y} r="100px" fill="#529fca" />
      </g>

    </Draggable>
  );
};

export default Circle;