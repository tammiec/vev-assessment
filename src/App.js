import React, { useState } from 'react';
import './App.css';

import Circle from './components/Circle';

const App = () =>{

  return (
    <svg className="App">
      <Circle 
        cx={200}
        cy={200}
      />
      <Circle 
        cx={500}
        cy={500}
      />
    </svg>
  );
}

export default App;
