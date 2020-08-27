import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/actions";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const nextId = useRef(3);

  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitTodo = (e) => {
    e.preventDefault();
    let newTodoItem = { todo, id: nextId.current++, done: false };
    dispatch(addTodo(newTodoItem));
    setTodo("");
  };
  return (
    <>
      <form onSubmit={onSubmitTodo}>
        <input
          onChange={handleChangeTodo}
          value={todo}
          required
          type="text"
          placeholder="할 일을 입력하세요"
        />
        <button>등록</button>
      </form>
    </>
  );
};
export default TodoInput;
