import React from "react";
import { handleReduceActionObj, handleAddActionObj } from '../Redux/action';
import {store} from '../Redux/store';

const CounterButtons = () => {
  const {dispatch}=store;

  const handleAdd=()=>{
    dispatch(handleAddActionObj(1));
  }
  
  const handleReduce=()=>{
    dispatch(handleReduceActionObj(1));
  }
  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleAdd}>ADD</button>
      <button data-testid="reduceButton" onClick={handleReduce}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
