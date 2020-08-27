import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

export default function App() {
  return (
    <>
      <Header />
      <TodoList />
      <TodoInput />
    </>
  );
}
