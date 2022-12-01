import React from "react";
import Card from "./Card";

function List({ title, list, deleteHandler, doneHandler }) {
  return (
    <>
      <h2>{title}</h2>
      <div>
        {list.map((el, i) => {
          return (
            <Card
              Card
              doc={el}
              deleteHandler={deleteHandler}
              doneHandler={doneHandler}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default List;
