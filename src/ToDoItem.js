import React from "react";

const ToDoItem = props => {
  return (
    <div onClick={() => props.updateToDoState(props.item.id)}>
      <span>{props.item.name}</span>
      {props.item.done && (
        <span role="img" aria-label="tickmark">
          {" "}
          ✔️
        </span>
      )}
      <br />
    </div>
  );
};

export default ToDoItem;
