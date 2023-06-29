import React from "react";
import {store} from '../Redux/store';

const CounterValue = () => {
  const {getState}=store //get the counter value from the Redux store
  
  return <div data-testid="counterValue">{getState().counter}</div>;
};

export default CounterValue;
