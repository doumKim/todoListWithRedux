import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../actions/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <li style={todo.done ? { color: "red" } : { color: "black" }}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => handleToggleTodo(todo.id)}
        >
          {todo.todo}
        </span>{" "}
        <button onClick={() => handleRemoveTodo(todo.id)}>X</button>
      </li>
    </>
  );
};

export default Todo;
