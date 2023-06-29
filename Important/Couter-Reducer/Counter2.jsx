import { useReducer } from 'react';
import reducerFunction from './CountReducer';
import { increamentAction,decreamentAction, resetAction } from './CounterAction';
export default function Counter2() {
    const [state,dispatch]=useReducer(reducerFunction,0);
    const handleIncreament=()=>{
        dispatch(increamentAction(1));
    }
    const handleDecreament=()=>{
        dispatch(decreamentAction(1));
    }
    const handleReset=()=>{
        dispatch(resetAction());
    }
  return (
    <>
      <h1>Count:{state}</h1>
      <button onClick={handleIncreament}>INCREAMENT</button>
      <button onClick={handleDecreament}>DECREAMENT</button>
      <button onClick={handleReset}>RESET</button>
    </>
  )
}
