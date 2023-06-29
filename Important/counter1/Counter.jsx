import { useState } from 'react'
export default function Counter() {
    const [state, setState]=useState(0);
    const handleIncreament=(val)=>{
        setState(state+val);
    };

    const handleDecreament=(val)=>{
        setState(state-val);
    };
  return (
    <>
      <h1>Count:{state}</h1>
      <button onClick={()=>handleIncreament(1)}>Increament</button>
      <button onClick={()=>handleDecreament(1)}>Decreament</button>
    </>
  );
}
