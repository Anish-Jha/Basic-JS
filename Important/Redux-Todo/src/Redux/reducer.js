import {
    GET_TODO_FAILURE,
    GET_TODO_REQUEST,
    GET_TODO_SUCCESS,
  } from "./actionTypes";
  
  const initialState = {
    todos: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_TODO_REQUEST:
        return { ...state, isLoading: true };
      case GET_TODO_SUCCESS:
        return { ...state, isLoading: false, todos: payload };
      case GET_TODO_FAILURE:
        return { ...state, isError: true, isLoading: false };
      default:
        return state;
    }
  };
  