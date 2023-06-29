import React, { useState, useEffect } from 'react';
import {store} from '../Redux/store';
import CounterValue from './CounterValue';
import CounterButtons from './CounterButtons';
const Counter = () => {
  const [forceRender, setForceRender] = useState(0);
  const {subscribe}=store;

  subscribe(()=>{
    setForceRender((prev)=>prev+1);
  })

  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue/>
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons/>
    </div>
  );
};

export default Counter;
