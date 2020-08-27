import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const todos = useSelector((state) => state.todoList.todos);
  const [username, setUsername] = useState("");
  const [accessUser, setAccessUser] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmitUsername = (e) => {
    e.preventDefault();
    setAccessUser(username);
    setUsername("");
  };

  return accessUser ? (
    <p>{`${accessUser}님 안녕하세요! ${
      todos.filter((todo) => todo.done !== true).length
    }개의 할일이 남았습니다.`}</p>
  ) : (
    <form onSubmit={handleSubmitUsername}>
      <input
        onChange={handleChangeUsername}
        required
        type="text"
        value={username}
        placeholder="유저명을 입력하세요"
      />
      <button>등록</button>
    </form>
  );
};

export default UserInfo;
