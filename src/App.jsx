import React, { useState } from "react";
import "./App.css"; //

function User(props) {
  return <div className="square-style">{props.user.title}</div>;
}
const App = () => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");

  const addUserhandler = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      title: title,
    };
    setUsers([...users, newUser]);
  };
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <form className="form-container">
        <input
          className="input-container"
          onChange={onChangeHandler}
          value={title}
        />
        <button onClick={addUserhandler}>추가하기</button>
      </form>

      <div className="title-container">
        <h2>Todo List</h2>
      </div>

      <div className="style">
        {users.map((user) => {
          return <User user={user} key={user.id}></User>;
        })}
      </div>
    </>
  );
};

export default App;
