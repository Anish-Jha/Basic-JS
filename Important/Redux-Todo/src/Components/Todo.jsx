import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../Redux/action'
import  TodosInput  from './TodoInput'

const Todos = () => {
  const dispatch = useDispatch()

    const {todos, isLoading} = useSelector((store) => {
        return {
            todos: store.todos,
            isLoading: store.isLoading
        }
    }, shallowEqual);

  useEffect(()=>{
    dispatch(getTodos);
  },[]) 

  return (
    <div>
   <h1>Todo App</h1>
    <TodosInput/>
    {isLoading && <h2>Loading.....</h2>}
    {todos.length > 0 && todos.map((el)=>{
        return <div data-testid ="todos-wrapper" key={el.id}>{el.title} ---- {el.status ? "True" : "False"}</div>
    })}
    </div>
  );
};

export default Todos;
