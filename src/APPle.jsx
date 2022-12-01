import React, { useState } from "react";

const APPle = () => {
  const [todos, setTodos] = useState([
    {id:1, title: "공부", comment: "리액트 공부하기", isDone:false}
  ])
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")
  const onCangeTitleHandler = (event) => {
    setTitle(event.target.value)
  }
  const onChangeCommentHandler = (event) => {
    setComment(event.target.value)
  }
  const addUserHandler = (event) => {
    event.preventDefault()
    if(!title || comment) return
    const newTodo = {
      
    }
  }
  return (
    <>
      <form>
        <label>제목</label>
        <input
          onChange={onCangeHandler}
          placeholder="제목을 입력해주세요."
          value={title}
        />

        <label>내용</label>
        <input
          onChange={onCangeHandler}
          placeholder="내용을 입력해주세요."
          value={comment}
        />
        <button onClick={addUserHandler}>추가하기</button>
      </form>

      <h2>Working..🐤</h2>
      <div>
        {todos.map((todo) =>{
          if(!todo.isDone) {
            return(<Todo handleDelete={deleteUserHandler})
          }
         })}
      </div>
    </>
  );
}

export default APPle;
