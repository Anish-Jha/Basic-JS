import {
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  POST_TODO_FAILURE,
  POST_TODO_REQUEST,
  POST_TODO_SUCCESS,
} from "./actionTypes";

import axios from "axios";

export const todoGetRequestAction = () => {
  return { type: GET_TODO_REQUEST };
};

export const todoGetSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload };
};

export const todoGetFailureAction = () => {
  return { type: GET_TODO_FAILURE };
};

export const todoPostRequestAction = () => {
  return { type: POST_TODO_REQUEST };
};

export const todoPostSuccessAction = () => {
  return { type: POST_TODO_SUCCESS };
};

export const todoPostFailureAction = () => {
  return { type: POST_TODO_FAILURE };
};

export const getTodos = (dispatch) => {
  dispatch(todoGetRequestAction());

  axios.get("http://localhost:8080/todos").then((res) => {
      console.log(res);
      dispatch(todoGetSuccessAction(res.data));
    }).catch((err) => {
      dispatch(todoGetFailureAction());
    });
};

export const addTodo = (title) => (dispatch) => {
  if (title) {
    let newTodo = {
      title,
      status: false,
    };
    dispatch(todoPostRequestAction());
    return axios.post("http://localhost:8080/todos", newTodo).then(() => {
        dispatch(todoPostSuccessAction());
      }).catch((err) => {
        dispatch(todoPostFailureAction());
      });
  }
};

