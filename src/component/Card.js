import React from "react";

function Card({ doc, deleteHandler, doneHandler }) {
  return (
    <div id={doc.id}>
      <p>{doc.title}</p>
      <p>{doc.content}</p>
      <div>
        <button type="button" onClick={deleteHandler}>
          삭제
        </button>
        <button type="button" onClick={doneHandler}>
          {doc.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Card;
