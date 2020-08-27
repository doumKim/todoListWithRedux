import * as types from "../actions/actionTypes";

const initialState = {
  todos: [
    { todo: "리덕스 공부하기", done: false, id: 1 },
    { todo: "react 공부하기", done: true, id: 2 }
  ],
  leftTask: 1
};

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return { ...state, todos: state.todos.concat(action.todo) };
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id;
        })
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            todo.done = !todo.done;
            return todo;
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export default todoList;
