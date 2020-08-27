import * as actionTypes from "./actionTypes";

export const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  todo
});

export const removeTodo = (id) => ({
  type: actionTypes.REMOVE_TODO,
  id
});

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id
});
