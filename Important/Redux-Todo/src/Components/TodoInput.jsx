import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, getTodos } from '../Redux/action';

export default function TodosInput() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = () =>{
        dispatch(addTodo(input)).then(()=>dispatch(getTodos));
        setInput("");
      }
  return (
    <div>
    <input data-testid="todo-input" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add Todo'/>
    <button data-testid="add-button" onClick={addTodoHandler}>ADD Todo</button>
    </div>
  )
}
