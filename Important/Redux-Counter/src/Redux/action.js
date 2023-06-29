//DO NOT change the function names

//function to return the add action object
import {ADD,REDUCE,} from "./actionTypes";

const handleAddActionObj = (payload) => {
    return { type: ADD, payload };
};

//function to return the reduce action object
const handleReduceActionObj = (payload) => {
    return { type: REDUCE, payload };
};

export { handleAddActionObj, handleReduceActionObj };

  
  